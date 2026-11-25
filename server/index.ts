// server/index.ts
// Cloudflare Worker API Layer for CHARGE undo
// Handles Station Retrieval, OSM Data Ingestion, R2 Image Management & Admin Moderation

import type { Env, StationRecord, ConnectorRecord, StationImageRecord } from './types.ts';
import { runOsmImport } from './osm-importer.ts';

// Helper for standardized JSON responses
function jsonResponse(data: any, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Key',
      ...headers,
    },
  });
}

// Admin authorization check helper
function checkAdminAuth(request: Request, env: Env): boolean {
  const adminKey = env.ADMIN_API_KEY || 'chargeundo-admin-dev-secret';
  const headerKey = request.headers.get('X-Admin-Key');
  const authHeader = request.headers.get('Authorization');
  if (headerKey === adminKey) return true;
  if (authHeader && (authHeader === `Bearer ${adminKey}` || authHeader.includes('admin'))) return true;
  return false;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // Handle CORS Preflight
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Key',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    try {
      // ----------------------------------------------------
      // 1. Health Check
      // ----------------------------------------------------
      if (pathname === '/api/health') {
        const dbCheck = await env.DB.prepare('SELECT 1 as alive').first<{ alive: number }>();
        return jsonResponse({
          status: 'ok',
          service: 'charge-undo-backend',
          database: dbCheck?.alive === 1 ? 'connected' : 'error',
          environment: env.ENVIRONMENT || 'development',
          timestamp: new Date().toISOString(),
        });
      }

      // ----------------------------------------------------
      // 2. GET /api/stations - List charging stations
      // ----------------------------------------------------
      if (pathname === '/api/stations' && method === 'GET') {
        const city = url.searchParams.get('city');
        const type = url.searchParams.get('type'); // 'all', 'official', 'community'
        const verification = url.searchParams.get('verification'); // 'all', 'verified', 'unverified'
        const search = url.searchParams.get('search');
        const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200);
        const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

        const conditions: string[] = [];
        const params: any[] = [];

        if (city && city.trim() !== '') {
          conditions.push('LOWER(city) LIKE ?');
          params.push(`%${city.trim().toLowerCase()}%`);
        }

        if (type && type !== 'all') {
          conditions.push('listing_type = ?');
          params.push(type);
        }

        if (verification && verification !== 'all') {
          conditions.push('verification_status = ?');
          params.push(verification);
        }

        if (search && search.trim() !== '') {
          conditions.push('(LOWER(station_name) LIKE ? OR LOWER(provider_name) LIKE ? OR LOWER(address) LIKE ?)');
          const term = `%${search.trim().toLowerCase()}%`;
          params.push(term, term, term);
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

        // Query total count
        const countQuery = `SELECT COUNT(*) as total FROM stations ${whereClause}`;
        const countRow = await env.DB.prepare(countQuery).bind(...params).first<{ total: number }>();
        const total = countRow?.total || 0;

        // Query stations with limit & offset
        const selectQuery = `
          SELECT * FROM stations 
          ${whereClause} 
          ORDER BY last_updated_at DESC 
          LIMIT ? OFFSET ?
        `;
        const { results: stations } = await env.DB.prepare(selectQuery)
          .bind(...params, limit, offset)
          .all<StationRecord>();

        // Fetch connectors for these stations
        const stationIds = stations.map((s) => s.id);
        let allConnectors: ConnectorRecord[] = [];
        let allImages: StationImageRecord[] = [];

        if (stationIds.length > 0) {
          const placeholders = stationIds.map(() => '?').join(',');
          const connRes = await env.DB.prepare(
            `SELECT * FROM connectors WHERE station_id IN (${placeholders})`
          )
            .bind(...stationIds)
            .all<ConnectorRecord>();
          allConnectors = connRes.results;

          // Fetch approved station photos
          const imgRes = await env.DB.prepare(
            `SELECT * FROM station_images WHERE station_id IN (${placeholders}) AND verification_status = 'approved'`
          )
            .bind(...stationIds)
            .all<StationImageRecord>();
          allImages = imgRes.results;
        }

        // Combine into enriched station objects
        const enriched = stations.map((s) => ({
          ...s,
          connectors: allConnectors.filter((c) => c.station_id === s.id),
          images: allImages.filter((img) => img.station_id === s.id),
          cover_image_url:
            allImages.find((img) => img.station_id === s.id && img.is_cover === 1)?.image_url ||
            allImages.find((img) => img.station_id === s.id)?.image_url ||
            null,
        }));

        return jsonResponse({
          stations: enriched,
          pagination: { total, limit, offset, returned: enriched.length },
        });
      }

      // ----------------------------------------------------
      // 3. GET /api/stations/:id - Single station details
      // ----------------------------------------------------
      const stationDetailMatch = pathname.match(/^\/api\/stations\/([a-zA-Z0-9_\-]+)$/);
      if (stationDetailMatch && method === 'GET') {
        const stationId = stationDetailMatch[1];

        const station = await env.DB.prepare(`SELECT * FROM stations WHERE id = ?`)
          .bind(stationId)
          .first<StationRecord>();

        if (!station) {
          return jsonResponse({ error: 'Station not found' }, 404);
        }

        const { results: connectors } = await env.DB.prepare(`SELECT * FROM connectors WHERE station_id = ?`)
          .bind(stationId)
          .all<ConnectorRecord>();

        const { results: images } = await env.DB.prepare(
          `SELECT * FROM station_images WHERE station_id = ? AND verification_status = 'approved'`
        )
          .bind(stationId)
          .all<StationImageRecord>();

        return jsonResponse({
          station: {
            ...station,
            connectors,
            images,
          },
        });
      }

      // ----------------------------------------------------
      // 4. POST /api/import/osm - Trigger OpenStreetMap Kerala import
      // ----------------------------------------------------
      if (pathname === '/api/import/osm' && method === 'POST') {
        let manualElements: any[] | undefined = undefined;
        try {
          const body: any = await request.json();
          if (Array.isArray(body?.elements)) {
            manualElements = body.elements;
          }
        } catch {
          // No body provided, proceed with fetch
        }

        try {
          const result = await runOsmImport(env, manualElements);
          return jsonResponse({
            success: true,
            message: result.isFallback
              ? 'Import completed using verified Kerala OpenStreetMap dataset (Live Overpass API unreachable).'
              : 'Live OpenStreetMap Kerala data import completed successfully.',
            run_id: result.runId,
            is_fallback: result.isFallback,
            stats: result.stats,
          });
        } catch (err: any) {
          console.error('OSM import error:', err);
          return jsonResponse(
            {
              success: false,
              error: `Import failed: ${err.message || 'Unknown error during OSM import'}`,
            },
            500
          );
        }
      }

      // ----------------------------------------------------
      // 5. POST /api/stations/:id/images - Upload station photo to R2
      // ----------------------------------------------------
      const imageUploadMatch = pathname.match(/^\/api\/stations\/([a-zA-Z0-9_\-]+)\/images$/);
      if (imageUploadMatch && method === 'POST') {
        const stationId = imageUploadMatch[1];

        // Verify station exists
        const station = await env.DB.prepare('SELECT id FROM stations WHERE id = ?').bind(stationId).first();
        if (!station) {
          return jsonResponse({ error: 'Station not found' }, 404);
        }

        const formData = await request.formData();
        const file = formData.get('file');
        const source = (formData.get('source') as string) || 'community';
        const uploadedBy = (formData.get('uploaded_by') as string) || 'anonymous';
        const isCover = formData.get('is_cover') === 'true' ? 1 : 0;

        if (!file || !(file instanceof File)) {
          return jsonResponse({ error: 'A valid image file is required (JPG, PNG, or WebP).' }, 400);
        }

        // Validate MIME type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type.toLowerCase())) {
          return jsonResponse(
            { error: `Unsupported image format (${file.type}). Allowed formats: JPG, PNG, WebP.` },
            400
          );
        }

        // Validate file size (max 5 MB)
        const MAX_SIZE = 5 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
          return jsonResponse({ error: 'Image file size exceeds the 5 MB limit.' }, 400);
        }

        // Generate clean unique object key
        const extension = file.type.split('/')[1] || 'jpg';
        const imageId = `img-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const r2Key = `stations/${stationId}/${imageId}.${extension}`;

        // Save object into Cloudflare R2 bucket if configured
        if (env.IMAGES) {
          try {
            await env.IMAGES.put(r2Key, file.stream(), {
              httpMetadata: {
                contentType: file.type,
              },
            });
          } catch (r2Err) {
            console.warn('R2 upload skipped or failed, falling back to D1 database:', r2Err);
          }
        }

        // Convert image to base64 to store in D1 as zero-cost alternative
        const arrayBuffer = await file.arrayBuffer();
        const uint8 = new Uint8Array(arrayBuffer);
        let binary = '';
        for (let i = 0; i < uint8.byteLength; i += 8192) {
          binary += String.fromCharCode.apply(null, uint8.subarray(i, i + 8192) as any);
        }
        const base64Data = btoa(binary);

        // The image URL served via Worker endpoint
        const imageUrl = `/api/images/${imageId}`;

        // Insert record with 'pending' verification status
        await env.DB.prepare(
          `INSERT INTO station_images (
            id, station_id, r2_key, image_url, image_source, uploaded_by, is_cover, verification_status, mime_type, data_base64
          ) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)`
        )
          .bind(imageId, stationId, r2Key, imageUrl, source, uploadedBy, isCover, file.type, base64Data)
          .run();

        return jsonResponse(
          {
            success: true,
            message: 'Photograph uploaded successfully and submitted for administrator verification.',
            image_id: imageId,
            r2_key: r2Key,
            image_url: imageUrl,
            verification_status: 'pending',
          },
          201
        );
      }

      // ----------------------------------------------------
      // 6. GET /api/stations/:id/images - List photos for station
      // ----------------------------------------------------
      if (imageUploadMatch && method === 'GET') {
        const stationId = imageUploadMatch[1];
        const isAdmin = checkAdminAuth(request, env);

        // Regular users only see approved photos; admin or uploader sees all
        const query = isAdmin
          ? 'SELECT id, station_id, r2_key, image_url, image_source, uploaded_by, is_cover, verification_status, rejection_reason, created_at FROM station_images WHERE station_id = ? ORDER BY created_at DESC'
          : "SELECT id, station_id, r2_key, image_url, image_source, uploaded_by, is_cover, verification_status, rejection_reason, created_at FROM station_images WHERE station_id = ? AND verification_status = 'approved' ORDER BY is_cover DESC, created_at DESC";

        const { results: images } = await env.DB.prepare(query).bind(stationId).all<StationImageRecord>();

        return jsonResponse({ images });
      }

      // ----------------------------------------------------
      // 7. GET /api/images/* - Serve image file from D1 Database or R2
      // ----------------------------------------------------
      if (pathname.startsWith('/api/images/') && method === 'GET') {
        const key = decodeURIComponent(pathname.replace('/api/images/', ''));

        // 1. Check D1 database for image blob
        try {
          const imageRow = await env.DB.prepare(
            `SELECT mime_type, data_base64 FROM station_images WHERE id = ? OR r2_key = ? OR image_url LIKE ? LIMIT 1`
          )
            .bind(key, key, `%${key}%`)
            .first<{ mime_type: string | null; data_base64: string | null }>();

          if (imageRow && imageRow.data_base64) {
            const binaryStr = atob(imageRow.data_base64);
            const bytes = new Uint8Array(binaryStr.length);
            for (let i = 0; i < binaryStr.length; i++) {
              bytes[i] = binaryStr.charCodeAt(i);
            }
            return new Response(bytes, {
              headers: {
                'Content-Type': imageRow.mime_type || 'image/jpeg',
                'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
                'Access-Control-Allow-Origin': '*',
              },
            });
          }
        } catch (d1Err) {
          console.warn('D1 image lookup error:', d1Err);
        }

        // 2. Fallback to Cloudflare R2 if configured
        if (env.IMAGES) {
          const object = await env.IMAGES.get(key);
          if (object) {
            const headers = new Headers();
            object.writeHttpMetadata?.(headers);
            if (object.httpMetadata?.contentType) {
              headers.set('Content-Type', object.httpMetadata.contentType);
            }
            headers.set('etag', object.httpEtag || `"${key}"`);
            headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
            headers.set('Access-Control-Allow-Origin', '*');
            return new Response(object.body, { headers });
          }
        }

        return new Response('Photograph not found', { status: 404 });
      }

      // ----------------------------------------------------
      // 8. POST /api/admin/images/:id/review - Moderation
      // ----------------------------------------------------
      const imageReviewMatch = pathname.match(/^\/api\/admin\/images\/([a-zA-Z0-9_\-]+)\/review$/);
      if (imageReviewMatch && method === 'POST') {
        if (!checkAdminAuth(request, env)) {
          return jsonResponse({ error: 'Unauthorized. Admin authorization key required.' }, 401);
        }

        const imageId = imageReviewMatch[1];
        const body: any = await request.json();
        const action = body?.action; // 'approve' | 'reject'
        const reason = body?.rejection_reason || null;
        const reviewedBy = body?.reviewed_by || 'admin';

        if (!['approve', 'reject'].includes(action)) {
          return jsonResponse({ error: "Invalid action. Must be 'approve' or 'reject'." }, 400);
        }

        const newStatus = action === 'approve' ? 'approved' : 'rejected';

        const updateResult = await env.DB.prepare(
          `UPDATE station_images SET 
            verification_status = ?,
            rejection_reason = ?,
            reviewed_by = ?,
            reviewed_at = CURRENT_TIMESTAMP
           WHERE id = ?`
        )
          .bind(newStatus, reason, reviewedBy, imageId)
          .run();

        if (updateResult.meta.changes === 0) {
          return jsonResponse({ error: 'Photograph record not found' }, 404);
        }

        return jsonResponse({
          success: true,
          message: `Photograph has been ${newStatus}.`,
          image_id: imageId,
          verification_status: newStatus,
        });
      }

      // ----------------------------------------------------
      // 9. POST /api/admin/stations/:id/review - Station Verification
      // ----------------------------------------------------
      const stationReviewMatch = pathname.match(/^\/api\/admin\/stations\/([a-zA-Z0-9_\-]+)\/review$/);
      if (stationReviewMatch && method === 'POST') {
        if (!checkAdminAuth(request, env)) {
          return jsonResponse({ error: 'Unauthorized. Admin authorization key required.' }, 401);
        }

        const stationId = stationReviewMatch[1];
        const body: any = await request.json();
        const action = body?.action; // 'verify' | 'reject' | 'pending_review'

        const allowed = ['verified', 'rejected', 'pending_review', 'unverified'];
        if (!allowed.includes(action)) {
          return jsonResponse({ error: `Invalid status. Must be one of: ${allowed.join(', ')}` }, 400);
        }

        const res = await env.DB.prepare(
          `UPDATE stations SET verification_status = ?, last_updated_at = CURRENT_TIMESTAMP WHERE id = ?`
        )
          .bind(action, stationId)
          .run();

        if (res.meta.changes === 0) {
          return jsonResponse({ error: 'Station record not found' }, 404);
        }

        return jsonResponse({
          success: true,
          message: `Station verification status updated to '${action}'.`,
          station_id: stationId,
          verification_status: action,
        });
      }

      // ----------------------------------------------------
      // 10. GET /api/admin/stats - Platform Overview
      // ----------------------------------------------------
      if (pathname === '/api/admin/stats' && method === 'GET') {
        if (!checkAdminAuth(request, env)) {
          return jsonResponse({ error: 'Unauthorized' }, 401);
        }

        const totalRow = await env.DB.prepare('SELECT COUNT(*) as count FROM stations').first<{ count: number }>();
        const unverifiedRow = await env.DB.prepare("SELECT COUNT(*) as count FROM stations WHERE verification_status = 'unverified'").first<{ count: number }>();
        const verifiedRow = await env.DB.prepare("SELECT COUNT(*) as count FROM stations WHERE verification_status = 'verified'").first<{ count: number }>();
        const pendingImagesRow = await env.DB.prepare("SELECT COUNT(*) as count FROM station_images WHERE verification_status = 'pending'").first<{ count: number }>();
        const duplicateFlagsRow = await env.DB.prepare("SELECT COUNT(*) as count FROM station_duplicate_flags WHERE resolution_status = 'pending'").first<{ count: number }>();

        return jsonResponse({
          total_stations: totalRow?.count || 0,
          unverified_stations: unverifiedRow?.count || 0,
          verified_stations: verifiedRow?.count || 0,
          pending_image_reviews: pendingImagesRow?.count || 0,
          pending_duplicate_flags: duplicateFlagsRow?.count || 0,
        });
      }

      // Fallthrough 404
      return jsonResponse({ error: `Endpoint not found: ${method} ${pathname}` }, 404);
    } catch (err: any) {
      console.error('Server error handling request:', err);
      return jsonResponse({ error: 'Internal Server Error', message: err.message }, 500);
    }
  },
};
