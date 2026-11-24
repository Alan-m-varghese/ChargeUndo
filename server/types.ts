// server/types.ts
// Cloudflare Worker Environment and Data Model Types

export interface Env {
  DB: D1Database;
  IMAGES: R2Bucket;
  ENVIRONMENT?: string;
  ADMIN_API_KEY?: string;
}

export type PricingType = 'per_kwh' | 'per_minute' | 'flat_rate' | 'free' | 'unknown';
export type ListingType = 'official' | 'community';
export type VerificationStatus = 'unverified' | 'pending_review' | 'verified' | 'rejected';
export type AvailabilityStatus = 'available' | 'in_use' | 'offline' | 'unknown';
export type ImageVerificationStatus = 'pending' | 'approved' | 'rejected';
export type ImageSource = 'community' | 'provider' | 'authorized_operator';

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
}

export interface ConnectorRecord {
  id: string;
  station_id: string;
  connector_type: string;
  power_kw: number | null;
  current_type: 'AC' | 'DC' | 'unknown';
  stalls_count: number;
  status: string;
  created_at: string;
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
  rejection_reason: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
}

export interface StationDuplicateFlagRecord {
  id: string;
  new_station_id: string;
  existing_station_id: string;
  similarity_score: number;
  reason: string;
  resolution_status: 'pending' | 'merged' | 'dismissed' | 'confirmed_unique';
  flagged_at: string;
  resolved_at: string | null;
  resolved_by: string | null;
}

export interface ImportRunRecord {
  id: string;
  source_name: string;
  records_fetched: number;
  records_inserted: number;
  records_updated: number;
  duplicates_flagged: number;
  status: 'in_progress' | 'completed' | 'failed';
  error_message: string | null;
  started_at: string;
  completed_at: string | null;
}
