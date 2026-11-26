// src/utils/geolocation.ts
// Browser Geolocation API wrapper, error handling, Kerala city centroids,
// and Google Maps navigation URL helpers.

export interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

export interface GeolocationErrorDetails {
  code: 'PERMISSION_DENIED' | 'POSITION_UNAVAILABLE' | 'TIMEOUT' | 'UNSUPPORTED' | 'UNKNOWN';
  message: string;
  canRetry: boolean;
}

/**
 * Pre-defined coordinates for major Kerala districts and EV hubs.
 * Provides instant offline manual location fallback without requiring GPS permissions.
 */
export const KERALA_CITY_CENTROIDS: Record<string, { name: string; latitude: number; longitude: number; district: string }> = {
  kochi: { name: 'Kochi (Ernakulam)', latitude: 9.9312, longitude: 76.2673, district: 'Ernakulam' },
  ernakulam: { name: 'Ernakulam', latitude: 9.9816, longitude: 76.2999, district: 'Ernakulam' },
  thiruvananthapuram: { name: 'Thiruvananthapuram (Trivandrum)', latitude: 8.5241, longitude: 76.9366, district: 'Thiruvananthapuram' },
  trivandrum: { name: 'Thiruvananthapuram (Trivandrum)', latitude: 8.5241, longitude: 76.9366, district: 'Thiruvananthapuram' },
  kozhikode: { name: 'Kozhikode (Calicut)', latitude: 11.2588, longitude: 75.7804, district: 'Kozhikode' },
  calicut: { name: 'Kozhikode (Calicut)', latitude: 11.2588, longitude: 75.7804, district: 'Kozhikode' },
  thrissur: { name: 'Thrissur', latitude: 10.5276, longitude: 76.2144, district: 'Thrissur' },
  kollam: { name: 'Kollam (Quilon)', latitude: 8.8932, longitude: 76.6141, district: 'Kollam' },
  kannur: { name: 'Kannur', latitude: 11.8745, longitude: 75.3704, district: 'Kannur' },
  alappuzha: { name: 'Alappuzha (Alleppey)', latitude: 9.4981, longitude: 76.3388, district: 'Alappuzha' },
  alleppey: { name: 'Alappuzha (Alleppey)', latitude: 9.4981, longitude: 76.3388, district: 'Alappuzha' },
  kottayam: { name: 'Kottayam', latitude: 9.5916, longitude: 76.5222, district: 'Kottayam' },
  palakkad: { name: 'Palakkad', latitude: 10.7867, longitude: 76.6548, district: 'Palakkad' },
  malappuram: { name: 'Malappuram', latitude: 11.0510, longitude: 76.0711, district: 'Malappuram' },
  wayanad: { name: 'Wayanad (Kalpetta)', latitude: 11.6050, longitude: 76.0828, district: 'Wayanad' },
  kalpetta: { name: 'Wayanad (Kalpetta)', latitude: 11.6050, longitude: 76.0828, district: 'Wayanad' },
  idukki: { name: 'Idukki (Thodupuzha)', latitude: 9.8959, longitude: 76.7184, district: 'Idukki' },
  thodupuzha: { name: 'Thodupuzha', latitude: 9.8959, longitude: 76.7184, district: 'Idukki' },
  pathanamthitta: { name: 'Pathanamthitta', latitude: 9.2648, longitude: 76.7870, district: 'Pathanamthitta' },
  kasaragod: { name: 'Kasaragod', latitude: 12.4996, longitude: 74.9869, district: 'Kasaragod' },
};

/**
 * Requests the user's current GPS position using the browser Geolocation API.
 * High accuracy is enabled, with a 10s timeout. Never invoked automatically on page load.
 */
export function getUserLocation(
  timeoutMs: number = 10000
): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      reject({
        code: 'UNSUPPORTED',
        message: 'Geolocation is not supported by your browser or environment.',
        canRetry: false,
      } as GeolocationErrorDetails);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        let code: GeolocationErrorDetails['code'] = 'UNKNOWN';
        let message = 'An unknown error occurred while detecting your location.';
        let canRetry = true;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            code = 'PERMISSION_DENIED';
            message =
              'Location permission was denied. Please allow location access in your browser settings or select your city manually.';
            canRetry = true;
            break;
          case error.POSITION_UNAVAILABLE:
            code = 'POSITION_UNAVAILABLE';
            message =
              'Your location is currently unavailable. Please check your GPS/Wi-Fi connection or search by city name.';
            canRetry = true;
            break;
          case error.TIMEOUT:
            code = 'TIMEOUT';
            message =
              'Location request timed out. Please try again or choose your city from the list below.';
            canRetry = true;
            break;
        }

        reject({ code, message, canRetry } as GeolocationErrorDetails);
      },
      {
        enableHighAccuracy: true,
        timeout: timeoutMs,
        maximumAge: 30000, // Reuse cached position if younger than 30s
      }
    );
  });
}

/**
 * Generates an external Google Maps turn-by-turn navigation URL.
 * Does not require any embedded Google Maps iframe or API key.
 */
export function getGoogleMapsDirectionsUrl(
  latitude: number,
  longitude: number
): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

/**
 * Resolves a manual query (city name, district, or PIN code) into coordinates.
 * First checks local Kerala centroid dictionary; falls back to OpenStreetMap Nominatim.
 */
export async function resolveManualLocation(
  query: string
): Promise<{ name: string; latitude: number; longitude: number } | null> {
  const clean = query.trim().toLowerCase();
  if (!clean) return null;

  // 1. Direct centroid match
  if (KERALA_CITY_CENTROIDS[clean]) {
    const match = KERALA_CITY_CENTROIDS[clean];
    return { name: match.name, latitude: match.latitude, longitude: match.longitude };
  }

  // 2. Partial match in local centroids
  for (const [key, val] of Object.entries(KERALA_CITY_CENTROIDS)) {
    if (clean.includes(key) || key.includes(clean)) {
      return { name: val.name, latitude: val.latitude, longitude: val.longitude };
    }
  }

  // 3. Fallback to open Nominatim geocoding (rate-limited, open data)
  try {
    const encoded = encodeURIComponent(`${query}, Kerala, India`);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encoded}&limit=1`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'ChargeUndo-EV-App/1.0',
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        return {
          name: item.display_name.split(',')[0] || query,
          latitude: parseFloat(item.lat),
          longitude: parseFloat(item.lon),
        };
      }
    }
  } catch (err) {
    console.warn('Nominatim geocode fallback failed:', err);
  }

  return null;
}

