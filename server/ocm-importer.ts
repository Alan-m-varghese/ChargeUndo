// server/ocm-importer.ts
// Official OpenChargeMap (OCM) API v3 Importer & Normalizer
// API Reference: https://www.openchargemap.org/develop/api
// Enforces opendata=true for open-data eligible records and uses secure Worker secrets

import type { Env, StationRecord, ConnectorRecord } from './types.ts';
import { OCM_KERALA_FALLBACK_POIS } from './ocm-kerala-cache.ts';
import { detectDuplicateStation } from './duplicate-detector.ts';

const OCM_API_BASE = 'https://api.openchargemap.io/v3/poi/';
const KERALA_BBOX = '(8.15,74.85),(12.85,77.60)';
const SOURCE_NAME = 'openchargemap';

export interface OcmImportStats {
  fetched: number;
  inserted: number;
  updated: number;
  duplicatesFlagged: number;
  rejected: number;
}

export async function fetchOcmPois(
  env: Env,
  region: 'kerala' | 'india' = 'kerala'
): Promise<{ pois: any[]; isFallback: boolean }> {
  const apiKey = env.OPENCHARGEMAP_API_KEY;
  const params = new URLSearchParams({
    output: 'json',
    countrycode: 'IN',
    opendata: 'true', // Enforce open-data eligibility filter per Requirement 3
    maxresults: '250',
    compact: 'false',
    verbose: 'false',
  });

  if (region === 'kerala') {
    params.set('boundingbox', KERALA_BBOX);
  }

  // If API key is configured, query official live API endpoint
  if (apiKey && apiKey.trim() !== '') {
    try {
      const url = `${OCM_API_BASE}?${params.toString()}`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'CHARGE-undo-EV-Platform/0.1.0 (https://chargeundo.in)',
          'X-API-Key': apiKey,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return { pois: data, isFallback: false };
        }
      } else {
        console.warn(`OpenChargeMap API returned status ${res.status}: ${await res.text()}`);
      }
    } catch (err: any) {
      console.warn(`Live OpenChargeMap API request failed: ${err.message}. Using verified OCM open-data cache.`);
    }
  }

  // Graceful fallback to verified OpenChargeMap open-data archive
  console.log('Using verified OpenChargeMap open-data seed archive.');
  return { pois: OCM_KERALA_FALLBACK_POIS, isFallback: true };
}

function extractOcmDate(dateVal: any): string | null {
  if (!dateVal) return null;
  if (typeof dateVal === 'string') return dateVal;
  if (typeof dateVal === 'object' && typeof dateVal.$date === 'string') return dateVal.$date;
  return null;
}
function parseOcmConnections(poi: any, stationId: string): Partial<ConnectorRecord>[] {
  const connections: any[] = poi.Connections || [];
  if (connections.length === 0) {
    return [
      {
        id: `${stationId}-conn-generic`,
        station_id: stationId,
        connector_type: 'EV Socket (Unspecified)',
        power_kw: null,
        current_type: 'unknown',
        stalls_count: 1,
        status: 'unknown',
      },
    ];
  }

  return connections.map((conn, idx) => {
    const title = conn.ConnectionType?.Title || 'EV Socket';
    let connType = 'EV Socket';
    let currentType: 'AC' | 'DC' | 'unknown' = 'unknown';

    const tUpper = title.toUpperCase();
    if (tUpper.includes('CCS')) {
      connType = 'CCS2';
      currentType = 'DC';
    } else if (tUpper.includes('TYPE 2') || tUpper.includes('TYPE-2') || tUpper.includes('MENNEKES')) {
      connType = 'Type 2 AC';
      currentType = 'AC';
    } else if (tUpper.includes('CHADEMO')) {
      connType = 'CHAdeMO';
      currentType = 'DC';
    } else if (tUpper.includes('BHARAT')) {
      connType = tUpper.includes('DC') ? 'Bharat DC-001' : 'Bharat AC-001 (15A)';
      currentType = tUpper.includes('DC') ? 'DC' : 'AC';
    } else {
      connType = title;
      if (conn.CurrentType?.Title) {
        currentType = conn.CurrentType.Title.toUpperCase().includes('DC') ? 'DC' : 'AC';
      }
    }

    return {
      id: `${stationId}-conn-${idx + 1}`,
      station_id: stationId,
      connector_type: connType,
      power_kw: conn.PowerKW || null,
      current_type: currentType,
      stalls_count: conn.Quantity || 1,
      status: 'unknown',
    };
  });
}

export async function runOcmImport(
  env: Env,
  region: 'kerala' | 'india' = 'kerala'
): Promise<{
  runId: string;
  isFallback: boolean;
  region: string;
  stats: OcmImportStats;
}> {
  const runId = `run-ocm-${Date.now()}`;
  const startedAt = new Date().toISOString();

  // 1. Audit log
  await env.DB.prepare(
    `INSERT INTO import_runs (id, source_name, status, started_at) VALUES (?, ?, 'in_progress', ?)`
  )
    .bind(runId, `${SOURCE_NAME}_${region}`, startedAt)
    .run();

  let pois: any[] = [];
  let isFallback = false;

  try {
    const fetched = await fetchOcmPois(env, region);
    pois = fetched.pois;
    isFallback = fetched.isFallback;
  } catch (err: any) {
    await env.DB.prepare(
      `UPDATE import_runs SET status = 'failed', error_message = ?, completed_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(err.message || 'OCM Fetch failed', runId)
      .run();
    throw err;
  }

  let inserted = 0;
  let updated = 0;
  let duplicatesFlagged = 0;
  let rejected = 0;

  try {
    // 2. Fetch existing stations in memory for cross-source comparison
    const { results: existingStations } = await env.DB.prepare(
      `SELECT id, station_name, provider_name, address, city, state, country, latitude, longitude, source_name, source_id FROM stations`
    ).all<StationRecord>();

    for (const poi of pois) {
      const addr = poi.AddressInfo;
      if (!addr || typeof addr.Latitude !== 'number' || typeof addr.Longitude !== 'number') {
        rejected++;
        continue;
      }

      const lat = addr.Latitude;
      const lon = addr.Longitude;

      // Coordinate sanity check
      if (isNaN(lat) || isNaN(lon) || (region === 'kerala' && (lat < 8.15 || lat > 12.85 || lon < 74.85 || lon > 77.60))) {
        rejected++;
        continue;
      }

      const ocmId = poi.ID ? poi.ID.toString() : `poi-${Date.now()}`;
      const stationId = `ocm-${ocmId}`;
      const sourceUrl = `https://openchargemap.org/site/poi/details/${ocmId}`;
      const sourceUpdatedAt =
        extractOcmDate(poi.DateLastStatusUpdate) ||
        extractOcmDate(poi.DateLastVerified) ||
        extractOcmDate(poi.DateCreated) ||
        null;

      const stationName = addr.Title || `EV Station (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
      const providerName = poi.OperatorInfo?.Title || null;
      const address = [addr.AddressLine1, addr.AddressLine2].filter(Boolean).join(', ') || null;
      const city = addr.Town || 'Kerala';
      const state = addr.StateOrProvince || 'Kerala';

      // Connectors
      const connectors = parseOcmConnections(poi, stationId);
      const maxPower = connectors.reduce<number | null>(
        (max, c) => (c.power_kw && (!max || c.power_kw > max) ? c.power_kw : max),
        null
      );

      const candidate = {
        station_name: stationName,
        provider_name: providerName,
        address,
        latitude: lat,
        longitude: lon,
        source_name: SOURCE_NAME,
        source_id: ocmId,
      };

      // 3. Cross-source duplicate detection
      const dupResult = detectDuplicateStation(candidate, existingStations);

      // Scenario A: Exact source update
      if (dupResult.isExactSourceMatch && dupResult.matchedStationId) {
        await env.DB.prepare(
          `UPDATE stations SET
            station_name = ?,
            provider_name = COALESCE(?, provider_name),
            address = COALESCE(?, address),
            city = COALESCE(?, city),
            latitude = ?,
            longitude = ?,
            charging_power_kw = COALESCE(?, charging_power_kw),
            source_record_url = ?,
            source_updated_at = COALESCE(?, source_updated_at),
            last_updated_at = CURRENT_TIMESTAMP
          WHERE id = ?`
        )
          .bind(
            stationName,
            providerName,
            address,
            city,
            lat,
            lon,
            maxPower,
            sourceUrl,
            sourceUpdatedAt,
            dupResult.matchedStationId
          )
          .run();

        updated++;
        continue;
      }

      // Scenario B: Insert new station (strictly unverified and unknown availability)
      await env.DB.prepare(
        `INSERT INTO stations (
          id, station_name, provider_name, address, city, state, country,
          latitude, longitude, description, charging_power_kw, pricing_type,
          price, operating_hours, listing_type, source_name, source_id,
          source_record_url, source_updated_at, verification_status,
          availability_status, created_at, last_updated_at
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, 'unknown',
          null, '24/7', 'official', ?, ?,
          ?, ?, 'unverified',
          'unknown', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
        )`
      )
        .bind(
          stationId,
          stationName,
          providerName,
          address,
          city,
          state,
          'India',
          lat,
          lon,
          poi.GeneralComments || `OpenChargeMap Open Data Record #${ocmId}`,
          maxPower,
          SOURCE_NAME,
          ocmId,
          sourceUrl,
          sourceUpdatedAt
        )
        .run();

      // Insert associated connectors
      for (const conn of connectors) {
        await env.DB.prepare(
          `INSERT INTO connectors (id, station_id, connector_type, power_kw, current_type, stalls_count, status)
           VALUES (?, ?, ?, ?, ?, ?, 'unknown')`
        )
          .bind(
            conn.id,
            stationId,
            conn.connector_type,
            conn.power_kw,
            conn.current_type,
            conn.stalls_count || 1
          )
          .run();
      }

      // Scenario C: Potential duplicate detected across sources
      if (dupResult.isDuplicate && dupResult.matchedStationId) {
        const flagId = `dup-ocm-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        await env.DB.prepare(
          `INSERT INTO station_duplicate_flags (
            id, new_station_id, existing_station_id, similarity_score, reason, resolution_status
          ) VALUES (?, ?, ?, ?, ?, 'pending')`
        )
          .bind(
            flagId,
            stationId,
            dupResult.matchedStationId,
            dupResult.similarityScore,
            `OpenChargeMap cross-source match with existing station: ${dupResult.reason}`
          )
          .run();

        duplicatesFlagged++;
      }

      existingStations.push({
        id: stationId,
        station_name: stationName,
        provider_name: providerName,
        address,
        latitude: lat,
        longitude: lon,
        source_name: SOURCE_NAME,
        source_id: ocmId,
      } as StationRecord);

      inserted++;
    }

    // 4. Update audit log
    await env.DB.prepare(
      `UPDATE import_runs SET
        records_fetched = ?,
        records_inserted = ?,
        records_updated = ?,
        duplicates_flagged = ?,
        records_rejected = ?,
        status = 'completed',
        completed_at = CURRENT_TIMESTAMP
      WHERE id = ?`
    )
      .bind(pois.length, inserted, updated, duplicatesFlagged, rejected, runId)
      .run();

    return {
      runId,
      isFallback,
      region,
      stats: {
        fetched: pois.length,
        inserted,
        updated,
        duplicatesFlagged,
        rejected,
      },
    };
  } catch (err: any) {
    await env.DB.prepare(
      `UPDATE import_runs SET status = 'failed', error_message = ?, completed_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(err.message || 'OCM Import failed', runId)
      .run();
    throw err;
  }
}
