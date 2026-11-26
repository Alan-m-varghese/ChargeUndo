// src/utils/favourites.ts
// Charging Station Favourites Management and Local Persistence

import { StationRecord } from '../types';

export interface FavouriteStation {
  id: string;
  station_name: string;
  provider_name?: string | null;
  address?: string | null;
  city?: string | null;
  charging_power_kw?: number | null;
  latitude: number;
  longitude: number;
  cover_image_url?: string | null;
  verification_status?: string;
  added_at: string;
}

const STORAGE_KEY = 'chargeundo_user_favourites';

/**
 * Retrieves saved favorite stations from localStorage.
 */
export function getStoredFavourites(): FavouriteStation[] {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Failed to parse favourites from localStorage', e);
    return [];
  }
}

/**
 * Checks whether a station is in user favourites.
 */
export function isStationFavourite(stationId: string): boolean {
  if (!stationId) return false;
  const favourites = getStoredFavourites();
  return favourites.some((item) => item.id === stationId);
}

/**
 * Toggles a station in favourites.
 * Returns true if now favourited, false if removed.
 */
export function toggleFavourite(station: StationRecord | FavouriteStation): boolean {
  try {
    const favourites = getStoredFavourites();
    const index = favourites.findIndex((item) => item.id === station.id);

    let updated: FavouriteStation[];
    let isFav = false;

    if (index >= 0) {
      // Remove
      updated = favourites.filter((item) => item.id !== station.id);
      isFav = false;
    } else {
      // Add
      const entry: FavouriteStation = {
        id: station.id,
        station_name: station.station_name,
        provider_name: station.provider_name || null,
        address: station.address || null,
        city: station.city || null,
        charging_power_kw: station.charging_power_kw || null,
        latitude: station.latitude,
        longitude: station.longitude,
        cover_image_url: station.cover_image_url || null,
        verification_status: station.verification_status,
        added_at: new Date().toISOString(),
      };
      updated = [entry, ...favourites];
      isFav = true;
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(
        new CustomEvent('chargeundo_favourites_updated', {
          detail: { id: station.id, isFavourite: isFav },
        })
      );
    }

    return isFav;
  } catch (e) {
    console.warn('Failed to update favourites', e);
    return false;
  }
}
