// src/types/index.ts
// Platform charging station, connector, and photo models

export type PricingType = 'per_kwh' | 'per_minute' | 'flat_rate' | 'free' | 'unknown';
export type ListingType = 'official' | 'community';
export type VerificationStatus = 'unverified' | 'pending_review' | 'verified' | 'rejected';
export type AvailabilityStatus = 'available' | 'in_use' | 'offline' | 'unknown';
export type ImageVerificationStatus = 'pending' | 'approved' | 'rejected';
export type ImageSource = 'community' | 'provider' | 'authorized_operator';

export interface ConnectorRecord {
  id: string;
  station_id: string;
  connector_type: string;
  power_kw: number | null;
  current_type: 'AC' | 'DC' | 'unknown';
  stalls_count: number;
  status: string;
}

export interface StationImageRecord {
  id: string;
  station_id: string;
  r2_key: string;
  image_url: string;
  image_source: ImageSource;
  uploaded_by: string | null;
  is_cover: number;
  verification_status: ImageVerificationStatus;
  rejection_reason?: string | null;
  created_at: string;
}

export interface StationRecord {
  id: string;
  station_name: string;
  provider_name: string | null;
  address: string | null;
  city: string | null;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  description: string | null;
  charging_power_kw: number | null;
  pricing_type: PricingType;
  price: number | null;
  operating_hours: string;
  listing_type: ListingType;
  source_name: string;
  source_id: string | null;
  verification_status: VerificationStatus;
  availability_status: AvailabilityStatus;
  availability_updated_at: string | null;
  last_updated_at: string;
  created_at: string;
  connectors?: ConnectorRecord[];
  images?: StationImageRecord[];
  cover_image_url?: string | null;
}

// Legacy compat interface
export interface ChargingStation {
  id: string;
  name: string;
  location: string;
  city: string;
  pinCode: string;
  type: 'public' | 'community';
  powerKw: number;
  connectors: string[];
  pricePerKwh: number;
  availableStalls: number;
  totalStalls: number;
  network?: string;
  rating: number;
}
