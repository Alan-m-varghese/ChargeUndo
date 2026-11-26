// server/duplicate-detector.ts
// Cross-Source EV Charging Station Duplicate Detection & Conflict Resolution

import type { StationRecord } from './types.ts';

// Haversine formula to compute geodesic distance between two points in meters
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

// Clean and normalize strings for comparative similarity
export function normalizeText(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\b(ev|charging|station|hub|point|pvt|ltd|limited|india|kerala)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Bigram Dice string similarity score (0.0 to 1.0)
export function stringSimilarity(str1: string | null | undefined, str2: string | null | undefined): number {
  const s1 = normalizeText(str1);
  const s2 = normalizeText(str2);
  if (!s1 || !s2) return 0.0;
  if (s1 === s2) return 1.0;
  if (s1.includes(s2) || s2.includes(s1)) return 0.85;

  const getBigrams = (s: string) => {
    const bigrams = new Set<string>();
    for (let i = 0; i < s.length - 1; i++) {
      bigrams.add(s.slice(i, i + 2));
    }
    return bigrams;
  };

  const b1 = getBigrams(s1);
  const b2 = getBigrams(s2);
  if (b1.size === 0 || b2.size === 0) return 0.0;

  let intersection = 0;
  for (const b of b1) {
    if (b2.has(b)) intersection++;
  }
  return (2 * intersection) / (b1.size + b2.size);
}

export interface DuplicateDetectionResult {
  isDuplicate: boolean;
  isExactSourceMatch: boolean;
  matchedStationId: string | null;
  similarityScore: number;
  distanceMeters: number | null;
  reason: string | null;
}

/**
 * Cross-source duplicate detector.
 * Evaluates geographic distance, station name similarity, operator name, and address.
 * Never flags two records as duplicates solely based on proximity without corroborating evidence.
 */
export function detectDuplicateStation(
  candidate: {
    station_name: string;
    provider_name?: string | null;
    address?: string | null;
    latitude: number;
    longitude: number;
    source_name: string;
    source_id?: string | null;
  },
  existingStations: StationRecord[]
): DuplicateDetectionResult {
  // 1. Check exact source match first (same dataset and upstream ID)
  if (candidate.source_id) {
    const exactMatch = existingStations.find(
      (s) => s.source_name === candidate.source_name && s.source_id === candidate.source_id
    );
    if (exactMatch) {
      return {
        isDuplicate: false,
        isExactSourceMatch: true,
        matchedStationId: exactMatch.id,
        similarityScore: 1.0,
        distanceMeters: 0,
        reason: `Exact source match (${candidate.source_name}:${candidate.source_id})`,
      };
    }
  }

  let highestScore = 0;
  let bestMatch: StationRecord | null = null;
  let bestDistance = Infinity;
  let matchReason: string | null = null;

  for (const existing of existingStations) {
    const distance = haversineDistanceMeters(
      candidate.latitude,
      candidate.longitude,
      existing.latitude,
      existing.longitude
    );

    // If stations are more than 300 meters apart, physical site is distinct
    if (distance > 300) continue;

    const nameSim = stringSimilarity(candidate.station_name, existing.station_name);
    const opSim = stringSimilarity(candidate.provider_name, existing.provider_name);
    const addrSim = stringSimilarity(candidate.address, existing.address);

    // Composite weighted similarity
    const compositeScore = nameSim * 0.5 + opSim * 0.3 + addrSim * 0.2;

    // Rule A: Ultra-close proximity (< 30m) with either moderate name or operator corroboration
    if (distance <= 30) {
      if (nameSim >= 0.25 || opSim >= 0.4 || addrSim >= 0.4) {
        if (compositeScore > highestScore || distance < bestDistance) {
          highestScore = Math.max(compositeScore, 0.7);
          bestMatch = existing;
          bestDistance = distance;
          matchReason = `Colocated physical site (distance: ${Math.round(distance)}m, name similarity: ${(nameSim * 100).toFixed(0)}%)`;
        }
      }
    }
    // Rule B: Proximity between 30m and 100m requiring solid name or operator similarity
    else if (distance <= 100) {
      if (nameSim >= 0.45 || (opSim >= 0.6 && addrSim >= 0.35)) {
        if (compositeScore > highestScore) {
          highestScore = compositeScore;
          bestMatch = existing;
          bestDistance = distance;
          matchReason = `Nearby physical match (distance: ${Math.round(distance)}m, name similarity: ${(nameSim * 100).toFixed(0)}%, operator: ${(opSim * 100).toFixed(0)}%)`;
        }
      }
    }
    // Rule C: Proximity between 100m and 250m requiring very high name and operator similarity
    else if (distance <= 250) {
      if (nameSim >= 0.75 && opSim >= 0.6) {
        if (compositeScore > highestScore) {
          highestScore = compositeScore;
          bestMatch = existing;
          bestDistance = distance;
          matchReason = `Cross-source name & operator match at ${Math.round(distance)}m distance`;
        }
      }
    }
  }

  if (bestMatch && matchReason) {
    return {
      isDuplicate: true,
      isExactSourceMatch: false,
      matchedStationId: bestMatch.id,
      similarityScore: Math.round(highestScore * 100) / 100,
      distanceMeters: Math.round(bestDistance),
      reason: matchReason,
    };
  }

  return {
    isDuplicate: false,
    isExactSourceMatch: false,
    matchedStationId: null,
    similarityScore: 0,
    distanceMeters: null,
    reason: null,
  };
}

