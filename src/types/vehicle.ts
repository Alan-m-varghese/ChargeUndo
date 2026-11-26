// src/types/vehicle.ts
// EV Driver Vehicle Model and Local Storage persistence

export interface Vehicle {
  id: string;
  name: string;
  registration: string;
  batteryCapacity: string;
  connectorType: string;
  maxChargeRate: string;
}

/**
 * Retrieves registered vehicles from localStorage.
 * Defaults to an empty list (no demo or synthetic vehicles).
 */
export function getStoredVehicles(): Vehicle[] {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    const raw = localStorage.getItem('chargeundo_user_vehicles');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Purge any legacy sample/demo vehicles
        const filtered = parsed.filter(
          (v: any) => v && v.id !== 'v-1' && v.name !== 'Tata Nexon EV Max'
        );
        if (filtered.length !== parsed.length) {
          saveStoredVehicles(filtered);
        }
        return filtered;
      }
    }
  } catch (e) {
    console.warn('Failed to parse vehicles from localStorage', e);
  }
  return [];
}

/**
 * Persists user vehicles to localStorage.
 */
export function saveStoredVehicles(vehicles: Vehicle[]): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('chargeundo_user_vehicles', JSON.stringify(vehicles));
    }
  } catch (e) {
    console.warn('Failed to save vehicles to localStorage', e);
  }
}
