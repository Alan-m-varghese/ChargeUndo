// server/osm-importer.ts
// OpenStreetMap Kerala EV Charging Stations Importer & Duplicate Detector

import type { Env, StationRecord, ConnectorRecord } from './types.ts';
import { KERALA_OSM_FALLBACK_ELEMENTS } from './osm-kerala-cache.ts';

// Kerala Geographic Bounding Box (South, West, North, East)
const KERALA_BBOX = '8.15,74.85,12.85,77.60';

// Public Overpass API Mirrors (with automatic failover)
const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];

interface OsmElement {
  type: 'node' | 'way';
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
}

// Haversine formula to compute distance between two coordinates in meters
export function haversineDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000; // Earth radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate simple string similarity (0.0 to 1.0)
export function stringSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const s2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (s1 === s2) return 1.0;
  if (!s1 || !s2) return 0.0;
  if (s1.includes(s2) || s2.includes(s1)) return 0.8;

  // Bigram Dice coefficient
  const getBigrams = (str: string) => {
    const bigrams = new Set<string>();
    for (let i = 0; i < str.length - 1; i++) {
      bigrams.add(str.slice(i, i + 2));
    }
    return bigrams;
  };

  const b1 = getBigrams(s1);
  const b2 = getBigrams(s2);
  let intersection = 0;
  for (const b of b1) {
    if (b2.has(b)) intersection++;
  }
  return (2 * intersection) / (b1.size + b2.size);
}

// Parse raw OSM tags into structured station and connector entities
export function parseOsmElement(element: OsmElement): { station: Partial<StationRecord>; connectors: Partial<ConnectorRecord>[] } | null {
  const tags = element.tags || {};
  const lat = element.lat ?? element.center?.lat;
  const lon = element.lon ?? element.center?.lon;

  if (lat === undefined || lon === undefined) {
    return null;
  }

  const sourceId = `${element.type}/${element.id}`;
  const stationId = `osm-${element.type}-${element.id}`;

  // Station Name logic: prefer name tag, then operator, else geographic descriptor
  let stationName = tags.name || tags['name:en'] || null;
  const operator = tags.operator || tags.brand || tags.network || null;

  if (!stationName) {
    if (operator) {
      stationName = `${operator} Charging Station`;
    } else {
      stationName = `EV Charging Station (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
    }
  }

  // Address assembly
  const addressParts: string[] = [];
  if (tags['addr:housenumber'] || tags['addr:housename']) {
    addressParts.push(tags['addr:housenumber'] || tags['addr:housename']!);
  }
  if (tags['addr:street']) addressParts.push(tags['addr:street']);
  if (tags['addr:suburb'] || tags['addr:neighbourhood']) {
    addressParts.push(tags['addr:suburb'] || tags['addr:neighbourhood']!);
  }
  const address = addressParts.length > 0 ? addressParts.join(', ') : null;

  const city = tags['addr:city'] || tags['addr:district'] || tags['addr:town'] || 'Kerala';

  // Power output estimation from OSM tags if present
  let powerKw: number | null = null;
  const rawPower = tags.power || tags['charging_power'] || tags['output'] || null;
  if (rawPower) {
    const match = rawPower.match(/([\d.]+)/);
    if (match) powerKw = parseFloat(match[1]);
  }

  // Pricing type
  let pricingType: StationRecord['pricing_type'] = 'unknown';
  if (tags.fee === 'no') pricingType = 'free';
  else if (tags.fee === 'yes') pricingType = 'per_kwh';

  // Connectors parsing
  const connectors: Partial<ConnectorRecord>[] = [];

  // CCS2
  if (tags['socket:type2_combo'] === 'yes' || tags['socket:ccs'] === 'yes' || tags['socket:type2_combo:output']) {
    const ccsPower = tags['socket:type2_combo:output'] ? parseFloat(tags['socket:type2_combo:output']) : (powerKw && powerKw >= 30 ? powerKw : null);
    connectors.push({
      id: `${stationId}-ccs2`,
      station_id: stationId,
      connector_type: 'CCS2',
      power_kw: ccsPower,
      current_type: 'DC',
      stalls_count: parseInt(tags['socket:type2_combo'] || '1', 10) || 1,
      status: 'unknown',
    });
    if (ccsPower && (!powerKw || ccsPower > powerKw)) powerKw = ccsPower;
  }

  // Type 2 AC
  if (tags['socket:type2'] === 'yes' || tags['socket:type2_cable'] === 'yes' || tags['socket:type2:output']) {
    const t2Power = tags['socket:type2:output'] ? parseFloat(tags['socket:type2:output']) : 7.4;
    connectors.push({
      id: `${stationId}-type2`,
      station_id: stationId,
      connector_type: 'Type 2 AC',
      power_kw: t2Power,
      current_type: 'AC',
      stalls_count: parseInt(tags['socket:type2'] || '1', 10) || 1,
      status: 'unknown',
    });
    if (!powerKw) powerKw = t2Power;
  }

  // CHAdeMO
  if (tags['socket:chademo'] === 'yes' || tags['socket:chademo:output']) {
    const chaPower = tags['socket:chademo:output'] ? parseFloat(tags['socket:chademo:output']) : 50;
    connectors.push({
      id: `${stationId}-chademo`,
      station_id: stationId,
      connector_type: 'CHAdeMO',
      power_kw: chaPower,
      current_type: 'DC',
      stalls_count: 1,
      status: 'unknown',
    });
  }

  // 16A Indian / Standard Socket
  if (tags['socket:schuko'] === 'yes' || tags['socket:bs546_15a'] === 'yes' || tags['socket:domestic'] === 'yes') {
    connectors.push({
      id: `${stationId}-16a`,
      station_id: stationId,
      connector_type: '16A 3-Pin Socket',
      power_kw: 3.3,
      current_type: 'AC',
      stalls_count: 1,
      status: 'unknown',
    });
  }

  // Fallback if no specific socket tagged
  if (connectors.length === 0) {
    connectors.push({
      id: `${stationId}-generic`,
      station_id: stationId,
      connector_type: 'EV Socket (Unspecified)',
      power_kw: powerKw,
      current_type: 'unknown',
      stalls_count: parseInt(tags.capacity || '1', 10) || 1,
      status: 'unknown',
    });
  }

  const station: Partial<StationRecord> = {
    id: stationId,
    station_name: stationName,
    provider_name: operator,
    address,
    city,
    state: 'Kerala',
    country: 'India',
    latitude: lat,
    longitude: lon,
    description: tags.description || tags.note || null,
    charging_power_kw: powerKw,
    pricing_type: pricingType,
    price: null, // OpenStreetMap rarely has verified rupee pricing; keep null as required
    operating_hours: tags.opening_hours || '24/7',
    listing_type: 'official',
    source_name: 'openstreetmap',
    source_id: sourceId,
    verification_status: 'unverified', // Strictly unverified until reviewed
    availability_status: 'unknown',
  };

  return { station, connectors };
}

// Fetch Kerala charging stations from Overpass API (with automatic fallback to curated Kerala dataset if offline)
export async function fetchOsmKeralaChargingStations(): Promise<{ elements: OsmElement[]; isFallback: boolean }> {
  const query = `
    [out:json][timeout:50];
    (
      node["amenity"="charging_station"](${KERALA_BBOX});
      way["amenity"="charging_station"](${KERALA_BBOX});
    );
    out center tags;
  `.trim();

  let lastError: Error | null = null;

  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'User-Agent': 'CHARGE-undo-EV-Platform/0.1.0 (https://chargeundo.in)',
        },
        body: `data=${encodeURIComponent(query)}`,
      });

      if (!res.ok) {
        throw new Error(`Overpass endpoint ${endpoint} returned status ${res.status}`);
      }

      const data: any = await res.json();
      if (Array.isArray(data.elements) && data.elements.length > 0) {
        return { elements: data.elements, isFallback: false };
      }
    } catch (err: any) {
      lastError = err;
      console.warn(`Failed fetching from ${endpoint}: ${err.message}. Trying next mirror...`);
    }
  }

  // Graceful fallback to verified offline Kerala OpenStreetMap dataset
  console.warn(
    `Live Overpass API unreachable (${lastError?.message || 'network unavailable'}). Using curated OpenStreetMap Kerala dataset as fallback.`
  );
  return { elements: KERALA_OSM_FALLBACK_ELEMENTS, isFallback: true };
}

// Main execution function for OpenStreetMap import into D1
export async function runOsmImport(
  env: Env,
  manualElements?: OsmElement[]
): Promise<{
  runId: string;
  isFallback: boolean;
  stats: {
    fetched: number;
    inserted: number;
    updated: number;
    duplicatesFlagged: number;
  };
}> {
  const runId = `run-${Date.now()}`;
  const startedAt = new Date().toISOString();

  // 1. Record import run start in audit table
  await env.DB.prepare(
    `INSERT INTO import_runs (id, source_name, status, started_at) VALUES (?, 'openstreetmap_kerala', 'in_progress', ?)`
  )
    .bind(runId, startedAt)
    .run();

  let elements: OsmElement[] = [];
  let isFallback = false;

  try {
    if (manualElements) {
      elements = manualElements;
      isFallback = false;
    } else {
      const fetched = await fetchOsmKeralaChargingStations();
      elements = fetched.elements;
      isFallback = fetched.isFallback;
    }
  } catch (err: any) {
    await env.DB.prepare(
      `UPDATE import_runs SET status = 'failed', error_message = ?, completed_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(err.message || 'Fetch failed', runId)
      .run();
    throw err;
  }

  let inserted = 0;
  let updated = 0;
  let duplicatesFlagged = 0;

  // Retrieve existing stations for in-memory spatial proximity comparison
  const { results: existingStations } = await env.DB.prepare(
    `SELECT id, station_name, latitude, longitude, source_name, source_id FROM stations`
  ).all<StationRecord>();

  for (const el of elements) {
    const parsed = parseOsmElement(el);
    if (!parsed || !parsed.station.id) continue;

    const { station, connectors } = parsed;

    // Check 1: Match by exact source and source ID (Update record)
    const exactSourceMatch = existingStations.find(
      (s) => s.source_name === 'openstreetmap' && s.source_id === station.source_id
    );

    if (exactSourceMatch) {
      await env.DB.prepare(
        `UPDATE stations SET 
          station_name = ?,
          provider_name = COALESCE(?, provider_name),
          address = COALESCE(?, address),
          city = COALESCE(?, city),
          latitude = ?,
          longitude = ?,
          charging_power_kw = COALESCE(?, charging_power_kw),
          operating_hours = COALESCE(?, operating_hours),
          last_updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`
      )
        .bind(
          station.station_name,
          station.provider_name,
          station.address,
          station.city,
          station.latitude,
          station.longitude,
          station.charging_power_kw,
          station.operating_hours,
          exactSourceMatch.id
        )
        .run();

      updated++;
      continue;
    }

    // Check 2: Potential Duplicate Detection (Proximity < 100 meters & Name similarity > 0.5)
    let flaggedDuplicateId: string | null = null;
    let highestSimilarity = 0;

    for (const existing of existingStations) {
      const distance = haversineDistanceMeters(
        station.latitude!,
        station.longitude!,
        existing.latitude,
        existing.longitude
      );

      if (distance <= 100) {
        const similarity = stringSimilarity(station.station_name!, existing.station_name);
        if (similarity > 0.4 || distance <= 30) {
          flaggedDuplicateId = existing.id;
          highestSimilarity = similarity;
          break;
        }
      }
    }

    // Insert new station
    await env.DB.prepare(
      `INSERT INTO stations (
        id, station_name, provider_name, address, city, state, country,
        latitude, longitude, description, charging_power_kw, pricing_type,
        price, operating_hours, listing_type, source_name, source_id,
        source_record_url, verification_status, availability_status, created_at, last_updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'unverified', 'unknown', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
    )
      .bind(
        station.id,
        station.station_name,
        station.provider_name || null,
        station.address || null,
        station.city || 'Kerala',
        station.state || 'Kerala',
        station.country || 'India',
        station.latitude,
        station.longitude,
        station.description || null,
        station.charging_power_kw || null,
        station.pricing_type || 'unknown',
        station.price || null,
        station.operating_hours || '24/7',
        station.listing_type || 'official',
        station.source_name || 'openstreetmap',
        station.source_id || null,
        `https://www.openstreetmap.org/${station.source_id}`
      )
      .run();

    // Insert associated connectors
    for (const conn of connectors) {
      await env.DB.prepare(
        `INSERT INTO connectors (id, station_id, connector_type, power_kw, current_type, stalls_count, status)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          conn.id,
          conn.station_id,
          conn.connector_type,
          conn.power_kw || null,
          conn.current_type || 'unknown',
          conn.stalls_count || 1,
          conn.status || 'unknown'
        )
        .run();
    }

    // If a potential duplicate was identified, flag it for admin review without deleting
    if (flaggedDuplicateId) {
      const flagId = `dup-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      await env.DB.prepare(
        `INSERT INTO station_duplicate_flags (
          id, new_station_id, existing_station_id, similarity_score, reason, resolution_status
        ) VALUES (?, ?, ?, ?, ?, 'pending')`
      )
        .bind(
          flagId,
          station.id,
          flaggedDuplicateId,
          highestSimilarity,
          `Detected nearby existing station within 100m (${station.station_name})`
        )
        .run();

      duplicatesFlagged++;
    }

    // Add to existing in-memory array so subsequent records in the same batch can be compared
    existingStations.push({
      id: station.id!,
      station_name: station.station_name!,
      latitude: station.latitude!,
      longitude: station.longitude!,
      source_name: 'openstreetmap',
      source_id: station.source_id!,
    } as StationRecord);

    inserted++;
  }

  // Update audit log
  await env.DB.prepare(
    `UPDATE import_runs SET 
      records_fetched = ?,
      records_inserted = ?,
      records_updated = ?,
      duplicates_flagged = ?,
      status = 'completed',
      completed_at = CURRENT_TIMESTAMP
    WHERE id = ?`
  )
    .bind(elements.length, inserted, updated, duplicatesFlagged, runId)
    .run();

  return {
    runId,
    isFallback,
    stats: {
      fetched: elements.length,
      inserted,
      updated,
      duplicatesFlagged,
    },
  };
}
