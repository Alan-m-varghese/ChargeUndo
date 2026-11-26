// server/nearby.ts
// Cloudflare Worker handler for GET /api/stations/nearby
// Spatial bounding-box pre-filtering, Haversine geodesic distance calculation,
// connector/photo resolution, and multi-criteria recommendation ranking.

import type { Env, StationRecord, ConnectorRecord, StationImageRecord } from './types.ts';

export interface NearbyStationResult extends StationRecord {
  distance_km: number;
  recommendation_score: number;
  recommendation_badge: string | null;
  recommendation_reason: string;
  is_compatible: boolean;
  connectors?: ConnectorRecord[];
  images?: StationImageRecord[];
  cover_image_url?: string | null;
}

/**
 * Calculates great-circle distance between two GPS coordinates using the Haversine formula.
 * @param lat1 User latitude in decimal degrees
 * @param lon1 User longitude in decimal degrees
 * @param lat2 Station latitude in decimal degrees
 * @param lon2 Station longitude in decimal degrees
 * @returns Distance in kilometers
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371.0; // Mean radius of the Earth in kilometers
  const toRad = Math.PI / 180;
  const dLat = (lat2 - lat1) * toRad;
  const dLon = (lon2 - lon1) * toRad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * toRad) *
      Math.cos(lat2 * toRad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 100) / 100; // Round to 2 decimal places
}

/**
 * Computes a rectangular latitude/longitude bounding box for SQL pre-filtering.
 * This prevents reading unnecessary station rows into memory across large datasets.
 */
export function computeBoundingBox(
  latitude: number,
  longitude: number,
  radiusKm: number
): { minLat: number; maxLat: number; minLon: number; maxLon: number } {
  // 1 degree latitude is approx 111.0 km
  const deltaLat = radiusKm / 111.0;

  // 1 degree longitude depends on latitude: 111.0 * cos(lat)
  const cosLat = Math.cos((latitude * Math.PI) / 180);
  const deltaLon = radiusKm / (111.0 * Math.max(0.01, Math.abs(cosLat)));

  return {
    minLat: latitude - deltaLat,
    maxLat: latitude + deltaLat,
    minLon: longitude - deltaLon,
    maxLon: longitude + deltaLon,
  };
}

/**
 * Normalizes connector type string for compatibility checks (e.g., 'CCS-2' vs 'CCS2').
 */
function normalizeConnector(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Evaluates whether station connectors match user vehicle connector type.
 */
function checkConnectorCompatibility(
  stationConnectors: ConnectorRecord[],
  vehicleConnector?: string | null
): boolean {
  if (!vehicleConnector || !vehicleConnector.trim()) return true; // Default compatible if no vehicle specified
  const targetNorm = normalizeConnector(vehicleConnector);

  return stationConnectors.some((c) => {
    const cNorm = normalizeConnector(c.connector_type);
    if (cNorm.includes(targetNorm) || targetNorm.includes(cNorm)) return true;
    if (targetNorm.includes('ccs') && cNorm.includes('ccs')) return true;
    if (targetNorm.includes('type2') && cNorm.includes('type2')) return true;
    if (targetNorm.includes('chade') && cNorm.includes('chade')) return true;
    return false;
  });
}

/**
 * Multi-criteria recommendation engine considering:
 * 1. Geodesic distance (closer = higher score)
 * 2. Connector compatibility (matching user vehicle)
 * 3. Availability state (reliable real-time status; unknown is neutral)
 * 4. Charging power (higher kW gets boost for faster charging)
 * 5. Pricing (free or lower cost gets boost)
 * 6. Verification status
 */
export function scoreAndRankStation(
  station: StationRecord,
  distanceKm: number,
  radiusKm: number,
  connectors: ConnectorRecord[],
  vehicleConnector?: string | null,
  isNearest: boolean = false
): { score: number; badge: string | null; reason: string; isCompatible: boolean } {
  let score = 0;
  const reasons: string[] = [];
  let badge: string | null = null;

  // 1. Distance scoring (up to 50 points)
  // Closer stations score significantly higher
  const distanceFactor = Math.max(0, 1 - distanceKm / Math.max(radiusKm, 1));
  const distanceScore = distanceFactor * 50;
  score += distanceScore;

  if (isNearest || distanceKm < 1.5) {
    reasons.push(`${distanceKm.toFixed(1)} km away`);
  }

  // 2. Connector compatibility (up to 25 points or penalty)
  const isCompatible = checkConnectorCompatibility(connectors, vehicleConnector);
  if (vehicleConnector && vehicleConnector.trim()) {
    if (isCompatible) {
      score += 25;
      reasons.push(`Matches ${vehicleConnector}`);
    } else {
      score -= 20; // Deprioritize incompatible connectors
    }
  }

  // 3. Availability status (Reliable information; unknown is neutral, never assumed available)
  if (station.availability_status === 'available') {
    score += 15;
    reasons.push('Available now');
  } else if (station.availability_status === 'in_use') {
    score += 5;
    reasons.push('Currently occupied');
  } else if (station.availability_status === 'offline') {
    score -= 30; // Severe penalty for offline stations
    reasons.push('Temporarily offline');
  }

  // 4. Charging power (up to 20 points)
  const power = station.charging_power_kw || 0;
  if (power >= 120) {
    score += 20;
    reasons.push(`Ultra-fast ${power} kW DC`);
  } else if (power >= 50) {
    score += 15;
    reasons.push(`Fast ${power} kW DC`);
  } else if (power >= 22) {
    score += 8;
  }

  // 5. Pricing transparency & value (up to 10 points)
  if (station.pricing_type === 'free') {
    score += 12;
    reasons.push('Free charging');
  } else if (station.price !== null && station.price > 0 && station.price <= 15) {
    score += 6;
  }

  // 6. Verification status bonus
  if (station.verification_status === 'verified') {
    score += 5;
  }

  // Assign informative highlight badge
  if (isNearest) {
    badge = 'Nearest Charger';
  } else if (power >= 50 && distanceKm <= radiusKm * 0.6) {
    badge = `Fastest (${power} kW)`;
  } else if (vehicleConnector && isCompatible && power >= 22) {
    badge = 'Best EV Match';
  } else if (station.pricing_type === 'free') {
    badge = 'Free Charging';
  } else if (station.verification_status === 'verified' && distanceKm <= radiusKm * 0.5) {
    badge = 'Recommended';
  }

  const primaryReason =
    reasons.length > 0 ? reasons.slice(0, 2).join(' • ') : `${distanceKm.toFixed(1)} km away`;

  return {
    score: Math.round(score * 10) / 10,
    badge,
    reason: primaryReason,
    isCompatible,
  };
}

/**
 * Primary HTTP handler for GET /api/stations/nearby
 */
export async function handleNearbyStations(
  request: Request,
  env: Env
): Promise<Response> {
  const url = new URL(request.url);

  // Validate latitude
  const latStr = url.searchParams.get('latitude') || url.searchParams.get('lat');
  if (!latStr) {
    return new Response(
      JSON.stringify({ error: 'Missing required parameter: latitude (between -90 and 90)' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  const latitude = parseFloat(latStr);
  if (isNaN(latitude) || latitude < -90 || latitude > 90) {
    return new Response(
      JSON.stringify({ error: 'Invalid latitude. Must be a valid float between -90 and 90.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Validate longitude
  const lonStr = url.searchParams.get('longitude') || url.searchParams.get('lng') || url.searchParams.get('lon');
  if (!lonStr) {
    return new Response(
      JSON.stringify({ error: 'Missing required parameter: longitude (between -180 and 180)' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  const longitude = parseFloat(lonStr);
  if (isNaN(longitude) || longitude < -180 || longitude > 180) {
    return new Response(
      JSON.stringify({ error: 'Invalid longitude. Must be a valid float between -180 and 180.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Validate search radius (default 10 km, capped between 1 and 100 km)
  const radiusParam = url.searchParams.get('radiusKm') || url.searchParams.get('radius') || '10';
  const radiusKm = Math.min(Math.max(parseFloat(radiusParam) || 10, 1), 100);

  // Optional vehicle connector & power filters
  const vehicleConnector = url.searchParams.get('connectorType') || url.searchParams.get('connector');
  const minPowerKw = parseFloat(url.searchParams.get('minPowerKw') || '0');
  const sortBy = url.searchParams.get('sortBy') || 'recommended'; // 'recommended' | 'distance'

  try {
    // 1. Spatial bounding box pre-filtering in SQL
    // Avoids loading all stations into memory while using the (latitude, longitude) index
    const bbox = computeBoundingBox(latitude, longitude, radiusKm);

    const query = `
      SELECT * FROM stations
      WHERE verification_status != 'rejected'
        AND latitude BETWEEN ? AND ?
        AND longitude BETWEEN ? AND ?
    `;

    const { results: rawCandidates } = await env.DB.prepare(query)
      .bind(bbox.minLat, bbox.maxLat, bbox.minLon, bbox.maxLon)
      .all<StationRecord>();

    if (!rawCandidates || rawCandidates.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          userLocation: { latitude, longitude },
          radiusKm,
          totalFound: 0,
          stations: [],
          message: `No charging stations found within ${radiusKm} km of this location.`,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // 2. Calculate exact geodesic Haversine distance and filter strictly within radiusKm
    const stationsWithDistance: { station: StationRecord; distance_km: number }[] = [];

    for (const station of rawCandidates) {
      const distance = calculateHaversineDistance(
        latitude,
        longitude,
        station.latitude,
        station.longitude
      );

      if (distance <= radiusKm) {
        if (minPowerKw > 0 && (station.charging_power_kw || 0) < minPowerKw) {
          continue;
        }
        stationsWithDistance.push({ station, distance_km: distance });
      }
    }

    if (stationsWithDistance.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          userLocation: { latitude, longitude },
          radiusKm,
          totalFound: 0,
          stations: [],
          message: `No charging stations found within ${radiusKm} km. Try expanding to 25 km or 50 km.`,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Sort initially by distance to identify the nearest station
    stationsWithDistance.sort((a, b) => a.distance_km - b.distance_km);
    const nearestStationId = stationsWithDistance[0].station.id;

    // 3. Batch fetch connectors and approved photos for candidate stations
    const candidateIds = stationsWithDistance.map((s) => s.station.id);
    const idPlaceholders = candidateIds.map(() => '?').join(',');

    let allConnectors: ConnectorRecord[] = [];
    let allImages: StationImageRecord[] = [];

    if (candidateIds.length > 0) {
      const [connRes, imgRes] = await Promise.all([
        env.DB.prepare(
          `SELECT * FROM connectors WHERE station_id IN (${idPlaceholders})`
        )
          .bind(...candidateIds)
          .all<ConnectorRecord>(),
        env.DB.prepare(
          `SELECT * FROM station_images WHERE station_id IN (${idPlaceholders}) AND verification_status = 'approved'`
        )
          .bind(...candidateIds)
          .all<StationImageRecord>(),
      ]);

      allConnectors = connRes.results || [];
      allImages = imgRes.results || [];
    }

    const connectorsByStation = new Map<string, ConnectorRecord[]>();
    for (const c of allConnectors) {
      if (!connectorsByStation.has(c.station_id)) {
        connectorsByStation.set(c.station_id, []);
      }
      connectorsByStation.get(c.station_id)!.push(c);
    }

    const imagesByStation = new Map<string, StationImageRecord[]>();
    for (const img of allImages) {
      if (!imagesByStation.has(img.station_id)) {
        imagesByStation.set(img.station_id, []);
      }
      imagesByStation.get(img.station_id)!.push(img);
    }

    // 4. Enrich and rank stations
    const enrichedResults: NearbyStationResult[] = stationsWithDistance.map(({ station, distance_km }) => {
      const stationConns = connectorsByStation.get(station.id) || [];
      const stationImgs = imagesByStation.get(station.id) || [];
      const cover = stationImgs.find((img) => (img as any).is_cover === 1)?.image_url || stationImgs[0]?.image_url || null;

      const isNearest = station.id === nearestStationId;
      const { score, badge, reason, isCompatible } = scoreAndRankStation(
        station,
        distance_km,
        radiusKm,
        stationConns,
        vehicleConnector,
        isNearest
      );

      return {
        ...station,
        distance_km,
        recommendation_score: score,
        recommendation_badge: badge,
        recommendation_reason: reason,
        is_compatible: isCompatible,
        connectors: stationConns,
        images: stationImgs,
        cover_image_url: cover,
      };
    });

    // 5. Final ordering
    if (sortBy === 'distance') {
      enrichedResults.sort((a, b) => a.distance_km - b.distance_km);
    } else {
      // Default to recommendation score with distance tie-breaker
      enrichedResults.sort((a, b) => {
        if (b.recommendation_score !== a.recommendation_score) {
          return b.recommendation_score - a.recommendation_score;
        }
        return a.distance_km - b.distance_km;
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        userLocation: { latitude, longitude },
        radiusKm,
        totalFound: enrichedResults.length,
        stations: enrichedResults,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error: any) {
    console.error('Error querying nearby stations:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to retrieve nearby charging stations',
        details: error?.message || String(error),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
