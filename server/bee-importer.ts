// server/bee-importer.ts
// Bureau of Energy Efficiency (BEE) Government Dataset Importer & Normalizer
// Source Document: "EV Public Charging Stations Data till 26th October 2025" (Ministry of Power, Govt of India)
// Source URL: https://beeindia.gov.in/show_content.php?lang=1&level=2&lid=67&ls_id=345

import type { Env, StationRecord } from './types.ts';
import { BEE_KERALA_STATIONS, type BeeKeralaStation } from './bee-kerala-data.ts';
import { detectDuplicateStation } from './duplicate-detector.ts';

// Kerala Geographic Bounding Box
const KERALA_MIN_LAT = 8.15;
const KERALA_MAX_LAT = 12.85;
const KERALA_MIN_LON = 74.85;
const KERALA_MAX_LON = 77.60;

const SOURCE_NAME = 'bee_india';
const SOURCE_PUBLICATION_DATE = '2025-10-26';
const SOURCE_DOCUMENT_URL = 'https://beeindia.gov.in/show_content.php?lang=1&level=2&lid=67&ls_id=345';

export interface BeeImportStats {
  fetched: number;
  inserted: number;
  updated: number;
  duplicatesFlagged: number;
  rejected: number;
}

export async function runBeeImport(
  env: Env,
  customStations?: BeeKeralaStation[]
): Promise<{
  runId: string;
  sourceDoc: string;
  publicationDate: string;
  stats: BeeImportStats;
}> {
  const runId = `run-bee-${Date.now()}`;
  const startedAt = new Date().toISOString();

  // 1. Log start in import_runs audit table
  await env.DB.prepare(
    `INSERT INTO import_runs (id, source_name, status, started_at) VALUES (?, ?, 'in_progress', ?)`
  )
    .bind(runId, SOURCE_NAME, startedAt)
    .run();

  const stationsToProcess = customStations || BEE_KERALA_STATIONS;

  let inserted = 0;
  let updated = 0;
  let duplicatesFlagged = 0;
  let rejected = 0;

  try {
    // 2. Fetch existing stations in memory for spatial & similarity cross-referencing
    const { results: existingStations } = await env.DB.prepare(
      `SELECT id, station_name, provider_name, address, city, state, country, latitude, longitude, source_name, source_id FROM stations`
    ).all<StationRecord>();

    for (const item of stationsToProcess) {
      // Coordinate validation: Must be valid numbers and within Kerala bounds
      if (
        typeof item.latitude !== 'number' ||
        typeof item.longitude !== 'number' ||
        isNaN(item.latitude) ||
        isNaN(item.longitude) ||
        item.latitude < KERALA_MIN_LAT ||
        item.latitude > KERALA_MAX_LAT ||
        item.longitude < KERALA_MIN_LON ||
        item.longitude > KERALA_MAX_LON
      ) {
        rejected++;
        continue;
      }

      // Generate deterministic source ID based on operator and coordinate
      const cpoClean = (item.cpo || 'cpo').toLowerCase().replace(/[^a-z0-9]/g, '');
      const sourceId = `bee-${cpoClean}-${item.latitude.toFixed(5)}-${item.longitude.toFixed(5)}`;
      const stationId = `bee-${cpoClean}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

      const candidate = {
        station_name: item.station_name,
        provider_name: item.cpo || null,
        address: item.address || null,
        city: item.city || 'Kerala',
        state: 'Kerala',
        country: 'India',
        latitude: item.latitude,
        longitude: item.longitude,
        source_name: SOURCE_NAME,
        source_id: sourceId,
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
            source_updated_at = ?,
            last_updated_at = CURRENT_TIMESTAMP
          WHERE id = ?`
        )
          .bind(
            candidate.station_name,
            candidate.provider_name,
            candidate.address,
            candidate.city,
            candidate.latitude,
            candidate.longitude,
            item.max_power_kw,
            SOURCE_DOCUMENT_URL,
            SOURCE_PUBLICATION_DATE,
            dupResult.matchedStationId
          )
          .run();

        updated++;
        continue;
      }

      // Scenario B: Insert new station record (strictly unverified and unknown availability)
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
          candidate.station_name,
          candidate.provider_name,
          candidate.address,
          candidate.city,
          candidate.state,
          candidate.country,
          candidate.latitude,
          candidate.longitude,
          `Official BEE Record: ${item.cpo} public charging facility.`,
          item.max_power_kw,
          SOURCE_NAME,
          sourceId,
          SOURCE_DOCUMENT_URL,
          SOURCE_PUBLICATION_DATE
        )
        .run();

      // Insert associated connectors
      for (let i = 0; i < (item.connectors || []).length; i++) {
        const conn = item.connectors[i];
        const connectorId = `${stationId}-conn-${i + 1}`;
        await env.DB.prepare(
          `INSERT INTO connectors (id, station_id, connector_type, power_kw, current_type, stalls_count, status)
           VALUES (?, ?, ?, ?, ?, ?, 'unknown')`
        )
          .bind(
            connectorId,
            stationId,
            conn.type || 'EV Socket',
            conn.power_kw,
            conn.current_type || 'unknown',
            conn.stalls_count || 1
          )
          .run();
      }

      // Scenario C: Potential duplicate detected across sources
      if (dupResult.isDuplicate && dupResult.matchedStationId) {
        const flagId = `dup-bee-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
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
            `BEE cross-source match with existing station: ${dupResult.reason}`
          )
          .run();

        duplicatesFlagged++;
      }

      // Update in-memory array so subsequent records can compare
      existingStations.push({
        id: stationId,
        station_name: candidate.station_name,
        provider_name: candidate.provider_name,
        address: candidate.address,
        latitude: candidate.latitude,
        longitude: candidate.longitude,
        source_name: SOURCE_NAME,
        source_id: sourceId,
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
      .bind(stationsToProcess.length, inserted, updated, duplicatesFlagged, rejected, runId)
      .run();

    return {
      runId,
      sourceDoc: 'EV Public Charging Stations Data till 26th October 2025',
      publicationDate: SOURCE_PUBLICATION_DATE,
      stats: {
        fetched: stationsToProcess.length,
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
      .bind(err.message || 'BEE Import failed', runId)
      .run();
    throw err;
  }
}

