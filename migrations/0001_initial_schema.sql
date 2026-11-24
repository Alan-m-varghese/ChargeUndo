-- 0001_initial_schema.sql
-- Migration: Initial Schema for CHARGE undo Charging Stations, Connectors, Images & Audit

-- 1. Stations Core Table
CREATE TABLE IF NOT EXISTS stations (
    id TEXT PRIMARY KEY,
    station_name TEXT NOT NULL,
    provider_name TEXT,
    address TEXT,
    city TEXT,
    state TEXT DEFAULT 'Kerala',
    country TEXT DEFAULT 'India',
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    description TEXT,
    charging_power_kw REAL,
    pricing_type TEXT CHECK(pricing_type IN ('per_kwh', 'per_minute', 'flat_rate', 'free', 'unknown')) DEFAULT 'unknown',
    price REAL,
    operating_hours TEXT DEFAULT '24/7',
    listing_type TEXT CHECK(listing_type IN ('official', 'community')) NOT NULL DEFAULT 'official',
    source_name TEXT NOT NULL,
    source_id TEXT,
    verification_status TEXT CHECK(verification_status IN ('unverified', 'pending_review', 'verified', 'rejected')) NOT NULL DEFAULT 'unverified',
    availability_status TEXT CHECK(availability_status IN ('available', 'in_use', 'offline', 'unknown')) DEFAULT 'unknown',
    availability_updated_at TEXT,
    last_updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE INDEX IF NOT EXISTS idx_stations_coords ON stations(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_stations_city ON stations(city);
CREATE INDEX IF NOT EXISTS idx_stations_source ON stations(source_name, source_id);
CREATE INDEX IF NOT EXISTS idx_stations_verification ON stations(verification_status);

-- 2. Connectors Table (1-to-many relationship)
CREATE TABLE IF NOT EXISTS connectors (
    id TEXT PRIMARY KEY,
    station_id TEXT NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    connector_type TEXT NOT NULL,
    power_kw REAL,
    current_type TEXT CHECK(current_type IN ('AC', 'DC', 'unknown')) DEFAULT 'unknown',
    stalls_count INTEGER DEFAULT 1,
    status TEXT DEFAULT 'unknown',
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE INDEX IF NOT EXISTS idx_connectors_station ON connectors(station_id);

-- 3. Station Photographs Table (Cloudflare R2 Integration)
CREATE TABLE IF NOT EXISTS station_images (
    id TEXT PRIMARY KEY,
    station_id TEXT NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    r2_key TEXT NOT NULL,
    image_url TEXT NOT NULL,
    image_source TEXT CHECK(image_source IN ('community', 'provider', 'authorized_operator')) NOT NULL,
    uploaded_by TEXT,
    is_cover INTEGER DEFAULT 0,
    verification_status TEXT CHECK(verification_status IN ('pending', 'approved', 'rejected')) NOT NULL DEFAULT 'pending',
    rejection_reason TEXT,
    reviewed_by TEXT,
    reviewed_at TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE INDEX IF NOT EXISTS idx_station_images_station ON station_images(station_id);
CREATE INDEX IF NOT EXISTS idx_station_images_status ON station_images(verification_status);

-- 4. Duplicate Detection & Review Flags
CREATE TABLE IF NOT EXISTS station_duplicate_flags (
    id TEXT PRIMARY KEY,
    new_station_id TEXT NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    existing_station_id TEXT NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    similarity_score REAL,
    reason TEXT,
    resolution_status TEXT CHECK(resolution_status IN ('pending', 'merged', 'dismissed', 'confirmed_unique')) DEFAULT 'pending',
    flagged_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    resolved_at TEXT,
    resolved_by TEXT
);

-- 5. Import Runs Audit History
CREATE TABLE IF NOT EXISTS import_runs (
    id TEXT PRIMARY KEY,
    source_name TEXT NOT NULL,
    records_fetched INTEGER DEFAULT 0,
    records_inserted INTEGER DEFAULT 0,
    records_updated INTEGER DEFAULT 0,
    duplicates_flagged INTEGER DEFAULT 0,
    status TEXT CHECK(status IN ('in_progress', 'completed', 'failed')) DEFAULT 'in_progress',
    error_message TEXT,
    started_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    completed_at TEXT
);
