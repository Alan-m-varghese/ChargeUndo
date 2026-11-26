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

export const DEFAULT_VEHICLES: Vehicle[] = [
  {
    id: 'v-1',
    name: 'Tata Nexon EV Max',
    registration: 'KL 07 CD 4488',
    batteryCapacity: '40.5 kWh',
    connectorType: 'CCS2',
    maxChargeRate: '50 kW DC',
  },
];

export function getStoredVehicles(): Vehicle[] {
  try {
    const raw = localStorage.getItem('chargeundo_user_vehicles');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse vehicles from localStorage', e);
  }
  return DEFAULT_VEHICLES;
}

export function saveStoredVehicles(vehicles: Vehicle[]): void {
  try {
    localStorage.setItem('chargeundo_user_vehicles', JSON.stringify(vehicles));
  } catch (e) {
    console.warn('Failed to save vehicles to localStorage', e);
  }
}
