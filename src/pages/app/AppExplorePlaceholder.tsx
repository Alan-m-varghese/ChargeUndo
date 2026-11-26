import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  MapPin,
  ArrowRight,
  Plus,
  Camera,
  Zap,
  RefreshCw,
  AlertCircle,
  Navigation,
  Loader2,
  Car,
  Compass,
  X,
  Info,
} from 'lucide-react';
import { StationRecord, NearbyStationRecord, getStoredVehicles, Vehicle } from '../../types';
import {
  getUserLocation,
  getGoogleMapsDirectionsUrl,
  GeolocationErrorDetails,
} from '../../utils/geolocation';

export const AppExplorePlaceholder: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mode and Location State
  const [nearbyMode, setNearbyMode] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
    label: string;
  } | null>(null);
  const [radiusKm, setRadiusKm] = useState<number>(10);
  const [locating, setLocating] = useState<boolean>(false);
  const [locatingStatus, setLocatingStatus] = useState<string>('');
  const [geoError, setGeoError] = useState<GeolocationErrorDetails | null>(null);

  // Vehicle Compatibility State
  const [userVehicle, setUserVehicle] = useState<Vehicle | null>(null);
  const [filterByVehicle, setFilterByVehicle] = useState<boolean>(false);

  // Filters & General Search
  const [activeFilter, setActiveFilter] = useState<'all' | 'fast' | 'community'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [stations, setStations] = useState<(StationRecord | NearbyStationRecord)[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load registered vehicle on mount
  useEffect(() => {
    const vehicles = getStoredVehicles();
    if (vehicles.length > 0) {
      setUserVehicle(vehicles[0]);
    }
  }, []);

  // Initialize from URL parameters if present (e.g. redirected from Homepage Hero)
  useEffect(() => {
    const latParam = searchParams.get('lat');
    const lngParam = searchParams.get('lng');
    const radiusParam = searchParams.get('radius');

    if (latParam && lngParam) {
      const lat = parseFloat(latParam);
      const lng = parseFloat(lngParam);
      const rad = parseInt(radiusParam || '10', 10);
      if (!isNaN(lat) && !isNaN(lng)) {
        setNearbyMode(true);
        setUserLocation({
          latitude: lat,
          longitude: lng,
          label: 'Your Current Location',
        });
        setRadiusKm([5, 10, 25, 50].includes(rad) ? rad : 10);
        fetchNearbyStations(lat, lng, rad);
        return;
      }
    }

    // Default: fetch standard directory
    fetchStations(searchQuery, activeFilter);
  }, []);

  // Fetch standard station list from D1 API
  const fetchStations = async (query = searchQuery, filter = activeFilter) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (filter === 'fast') params.set('type', 'official');
      if (filter === 'community') params.set('type', 'community');
      if (query.trim()) params.set('search', query.trim());
      params.set('limit', '50');

      const res = await fetch(`/api/stations?${params.toString()}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('Unable to connect to charging station network. Please check your connection or try again shortly.');
        }
        throw new Error(`HTTP ${res.status}: Failed to load stations`);
      }
      const data = await res.json();
      setStations(data.stations || []);
      setTotalCount(data.pagination?.total || 0);
    } catch (err: any) {
      console.error('Failed to fetch stations:', err);
      setError(err.message || 'Unable to connect to charging station database.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch nearby stations from /api/stations/nearby
  const fetchNearbyStations = async (
    lat: number,
    lng: number,
    radius = radiusKm,
    vehicle = filterByVehicle ? userVehicle : null
  ) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set('latitude', lat.toString());
      params.set('longitude', lng.toString());
      params.set('radiusKm', radius.toString());
      if (vehicle?.connectorType) {
        params.set('connectorType', vehicle.connectorType);
      }

      const res = await fetch(`/api/stations/nearby?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: Failed to retrieve nearby stations`);
      }
      const data = await res.json();
      setStations(data.stations || []);
      setTotalCount(data.totalFound || 0);
    } catch (err: any) {
      console.error('Failed to fetch nearby stations:', err);
      setError(err.message || 'Failed to locate nearby charging stations.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger GPS Geolocation
  const handleFindNearMe = async () => {
    setLocating(true);
    setGeoError(null);
    setLocatingStatus('Requesting GPS location...');

    try {
      const coords = await getUserLocation();
      setLocatingStatus('Finding charging stations near you...');

      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        label: 'Your Current Location',
      });
      setNearbyMode(true);

      // Update URL query parameters cleanly
      setSearchParams({
        lat: coords.latitude.toFixed(6),
        lng: coords.longitude.toFixed(6),
        radius: radiusKm.toString(),
        mode: 'nearby',
      });

      await fetchNearbyStations(coords.latitude, coords.longitude, radiusKm);
    } catch (err: any) {
      console.warn('Geolocation failed:', err);
      setGeoError(err);
    } finally {
      setLocating(false);
    }
  };

  // Change Search Radius
  const handleRadiusChange = (newRadius: number) => {
    setRadiusKm(newRadius);
    if (userLocation) {
      setSearchParams({
        lat: userLocation.latitude.toFixed(6),
        lng: userLocation.longitude.toFixed(6),
        radius: newRadius.toString(),
        mode: 'nearby',
      });
      fetchNearbyStations(userLocation.latitude, userLocation.longitude, newRadius);
    }
  };

  // Quick popular city filter for the main search bar
  const handleHubClick = (cityName: string) => {
    if (nearbyMode) {
      setNearbyMode(false);
      setUserLocation(null);
      setSearchParams({});
    }
    if (searchQuery.toLowerCase() === cityName.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(cityName);
    }
  };

  // Reset to All Kerala Directory
  const handleResetToAllStations = () => {
    setNearbyMode(false);
    setUserLocation(null);
    setGeoError(null);
    setSearchParams({});
    fetchStations(searchQuery, activeFilter);
  };

  // Debounced search for standard directory
  useEffect(() => {
    if (nearbyMode) return;
    const timer = setTimeout(() => {
      fetchStations(searchQuery, activeFilter);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery, activeFilter]);

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <span>Explore Charging Stations</span>
            {nearbyMode && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#8CF06B]/20 text-[#8CF06B] border border-[#8CF06B]/30 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>NEARBY MODE</span>
              </span>
            )}
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            {nearbyMode && userLocation
              ? `Displaying charging stations within ${radiusKm} km of ${userLocation.label}.`
              : 'Browse public fast corridors and neighborhood host wallboxes across Kerala.'}
          </p>
        </div>

        {/* Action Controls - Perfectly aligned single row */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <Link
            to="/app/list-charger"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4 text-zinc-400" />
            <span>List Charger</span>
          </Link>

          <button
            onClick={handleFindNearMe}
            disabled={locating}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
              nearbyMode && userLocation?.label.includes('Current Location')
                ? 'bg-[#8CF06B] text-black shadow-[0_0_20px_rgba(140,240,107,0.35)]'
                : 'bg-[#8CF06B] hover:bg-[#9ef581] text-black'
            } disabled:opacity-50`}
            title="Detect GPS location and discover nearest stations"
          >
            {locating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-black" />
            )}
            <span>{locating ? locatingStatus : 'Find Near Me'}</span>
          </button>
        </div>
      </div>

      {/* Geolocation Loading Indicator */}
      {locating && (
        <div className="mb-6 p-4 rounded-2xl bg-[#8CF06B]/10 border border-[#8CF06B]/30 flex items-center justify-between text-xs font-mono text-[#8CF06B]">
          <div className="flex items-center gap-2.5">
            <Loader2 className="w-4 h-4 animate-spin text-[#8CF06B]" />
            <span>{locatingStatus}</span>
          </div>
          <span className="text-[11px] text-zinc-400">High-accuracy GPS</span>
        </div>
      )}

      {/* Geolocation Error Alert with Retry & Fallbacks */}
      {geoError && !locating && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs text-left">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold text-amber-300 block">{geoError.message}</span>
              <p className="text-zinc-400 mt-1">
                You can select your city or district below to discover nearby charging stations without sharing your GPS coordinates.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {geoError.canRetry && (
                  <button
                    onClick={handleFindNearMe}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold transition flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Try GPS Again</span>
                  </button>
                )}
                <button
                  onClick={() => setGeoError(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nearby Active Banner (Only displayed when Nearby Mode is active) */}
      {nearbyMode && userLocation && (
        <div className="mb-6 p-4 sm:p-5 rounded-3xl bg-[#0D100E] border border-[#8CF06B]/25 shadow-lg space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8CF06B]/15 border border-[#8CF06B]/30 flex items-center justify-center text-[#8CF06B] flex-shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-zinc-300 font-mono flex items-center gap-2">
                  <span>NEARBY SEARCH:</span>
                  <span className="text-white font-semibold">{userLocation.label}</span>
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Showing stations ranked by distance, port compatibility & reliability
                </div>
              </div>
            </div>

            {/* Radius Selector Pills (5 km, 10 km, 25 km, 50 km) */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-zinc-400 font-mono mr-1">RADIUS:</span>
              {[5, 10, 25, 50].map((r) => (
                <button
                  key={r}
                  onClick={() => handleRadiusChange(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition ${
                    radiusKm === r
                      ? 'bg-[#8CF06B] text-black shadow-sm'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                  title={`Search within ${r} km`}
                >
                  {r} km
                </button>
              ))}

              <button
                onClick={handleResetToAllStations}
                className="px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition ml-2 flex items-center gap-1.5"
                title="Clear nearby filter and show all stations"
              >
                <X className="w-3 h-3" />
                <span>Show All Stations</span>
              </button>
            </div>
          </div>

          {/* Registered Vehicle Matching Indicator in Nearby Mode */}
          {userVehicle && (
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#8CF06B]" />
                <span className="text-zinc-300">
                  Registered EV: <strong className="text-white">{userVehicle.name}</strong> ({userVehicle.connectorType})
                </span>
              </div>

              <button
                onClick={() => {
                  const nextState = !filterByVehicle;
                  setFilterByVehicle(nextState);
                  if (nearbyMode && userLocation) {
                    fetchNearbyStations(userLocation.latitude, userLocation.longitude, radiusKm, nextState ? userVehicle : null);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition ${
                  filterByVehicle
                    ? 'bg-[#8CF06B]/20 text-[#8CF06B] border border-[#8CF06B]/40 font-semibold'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {filterByVehicle ? 'Prioritizing Compatible Ports' : 'Match My EV Port'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Directory Search & Filter Tabs (Single Unified Search Interface) */}
      {!nearbyMode && (
        <div className="mb-6 space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search station name, city, pincode, or operator (e.g. Kaloor, KSEB, Kozhikode)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0D100E] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-[#8CF06B] text-black font-semibold shadow-sm'
                    : 'bg-[#0D100E] border border-white/[0.08] text-zinc-400 hover:text-white'
                }`}
              >
                All Stations ({totalCount})
              </button>
              <button
                onClick={() => setActiveFilter('fast')}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeFilter === 'fast'
                    ? 'bg-[#8CF06B] text-black font-semibold shadow-sm'
                    : 'bg-[#0D100E] border border-white/[0.08] text-zinc-400 hover:text-white'
                }`}
              >
                Public Corridors
              </button>
              <button
                onClick={() => setActiveFilter('community')}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeFilter === 'community'
                    ? 'bg-[#8CF06B] text-black font-semibold shadow-sm'
                    : 'bg-[#0D100E] border border-white/[0.08] text-zinc-400 hover:text-white'
                }`}
              >
                Community Hosts
              </button>
            </div>
          </div>

          {/* Quick Popular City Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-500 font-mono text-[11px] mr-1">POPULAR:</span>
            {['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Alappuzha', 'Kottayam'].map(
              (city) => {
                const isSelected = searchQuery.toLowerCase() === city.toLowerCase();
                return (
                  <button
                    key={city}
                    onClick={() => handleHubClick(city)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition ${
                      isSelected
                        ? 'bg-[#8CF06B] text-black font-semibold'
                        : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                    }`}
                  >
                    {city}
                  </button>
                );
              }
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-zinc-400 hover:text-white ml-2 flex items-center gap-1 underline underline-offset-2"
              >
                <X className="w-3 h-3" />
                <span>Clear search</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#0D100E] border border-white/[0.06] rounded-3xl overflow-hidden p-6 animate-pulse space-y-4">
              <div className="aspect-[16/10] bg-white/[0.03] rounded-2xl" />
              <div className="h-5 bg-white/[0.05] rounded w-3/4" />
              <div className="h-4 bg-white/[0.03] rounded w-1/2" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-white/[0.04] rounded" />
                <div className="h-6 w-20 bg-white/[0.04] rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-[#0D100E] border border-red-500/20 rounded-3xl p-8 text-center max-w-md mx-auto my-12">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">Station Discovery Error</h3>
          <p className="text-xs text-zinc-400 mt-1 mb-4">{error}</p>
          <button
            onClick={() => (nearbyMode && userLocation ? fetchNearbyStations(userLocation.latitude, userLocation.longitude, radiusKm) : fetchStations())}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && stations.length === 0 && (
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-10 sm:p-14 text-center max-w-lg mx-auto my-12 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#8CF06B]/15 border border-[#8CF06B]/30 flex items-center justify-center text-[#8CF06B] mx-auto mb-4">
            <Zap className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {nearbyMode ? `No Stations within ${radiusKm} km` : 'No Stations Found'}
          </h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            {nearbyMode
              ? `We could not find any active EV charging stations within ${radiusKm} km of ${userLocation?.label || 'this location'}. Try expanding the search radius or exploring another hub.`
              : searchQuery
              ? `No charging stations match "${searchQuery}". Try a different locality or clear filters.`
              : 'No charging stations loaded yet. Click below to synchronize verified EV stations across Kerala.'}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {nearbyMode ? (
              <>
                <button
                  onClick={() => handleRadiusChange(25)}
                  className="px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition"
                >
                  Expand to 25 km
                </button>
                <button
                  onClick={() => handleRadiusChange(50)}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
                >
                  Expand to 50 km
                </button>
                <button
                  onClick={handleResetToAllStations}
                  className="px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-300 text-xs font-medium transition"
                >
                  Browse All Kerala Stations
                </button>
              </>
            ) : searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
              >
                Clear Search Query
              </button>
            ) : (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                  fetchStations('', 'all');
                }}
                className="px-6 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition"
              >
                Reset Filters & Search
              </button>
            )}
          </div>
        </div>
      )}

      {/* Station Cards Grid */}
      {!loading && !error && stations.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <span>
              {stations.length} {nearbyMode ? `Nearby Stations (within ${radiusKm} km)` : 'Charging Stations'}
            </span>
            {nearbyMode && (
              <span className="text-[11px] font-mono text-zinc-500 normal-case flex items-center gap-1">
                <Info className="w-3 h-3 text-[#8CF06B]" />
                <span>Ranked by distance, compatibility & power</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {stations.map((st) => {
              const station = st as NearbyStationRecord;
              const hasPhotos = !!station.cover_image_url;
              const photoCount = station.images?.length || (hasPhotos ? 1 : 0);
              const powerDisplay = station.charging_power_kw ? `${station.charging_power_kw} kW` : 'Standard AC';
              const directionsUrl = getGoogleMapsDirectionsUrl(station.latitude, station.longitude);

              return (
                <div
                  key={station.id}
                  className="bg-[#0D100E] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all group flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Station Photo Banner */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 select-none">
                      {hasPhotos ? (
                        <img
                          src={station.cover_image_url!}
                          alt={station.station_name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121613] via-[#0D100E] to-[#080A09] text-center p-6 border-b border-white/[0.06]">
                          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 group-hover:text-[#8CF06B] group-hover:border-[#8CF06B]/30 transition-colors mb-2">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-medium text-zinc-400">No verified photograph yet</span>
                          <span className="text-[10px] text-zinc-600 font-mono mt-0.5">Community photos welcome</span>
                        </div>
                      )}

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D100E] via-transparent to-black/60 pointer-events-none" />

                      {/* Top-Left: Power Rating Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#8CF06B] font-semibold">
                        <Zap className="w-3 h-3" />
                        <span>{powerDisplay}</span>
                      </div>

                      {/* Top-Right: Distance Badge or Photo Count */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {station.distance_km !== undefined && (
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#8CF06B] text-black text-[11px] font-bold font-mono shadow-md">
                            <MapPin className="w-3 h-3 text-black" />
                            <span>{station.distance_km < 1 ? `${Math.round(station.distance_km * 1000)} m` : `${station.distance_km.toFixed(1)} km`}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] text-zinc-300 font-mono">
                          <Camera className="w-3 h-3 text-zinc-400" />
                          <span>{photoCount}</span>
                        </div>
                      </div>

                      {/* Bottom overlay: City & Recommendation Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#8CF06B] flex-shrink-0" />
                          <span className="truncate font-medium">{station.city || 'Kerala, India'}</span>
                        </div>

                        {station.recommendation_badge ? (
                          <span className="text-[10px] font-mono font-bold text-black bg-[#8CF06B] px-2 py-0.5 rounded shadow flex-shrink-0 ml-2">
                            {station.recommendation_badge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 flex-shrink-0 ml-2">
                            {station.source_name === 'openstreetmap' ? 'OSM' : station.source_name.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-[#8CF06B] transition-colors">
                          {station.station_name}
                        </h3>
                      </div>

                      <div className="text-xs text-zinc-400 mt-1 line-clamp-1">
                        {station.address || `${station.city}, Kerala`}
                      </div>

                      {/* Recommendation Reason explanation */}
                      {station.recommendation_reason && (
                        <div className="text-[11px] font-mono text-[#8CF06B] mt-2 flex items-center gap-1 bg-[#8CF06B]/10 px-2.5 py-1 rounded-lg border border-[#8CF06B]/20">
                          <span>★ {station.recommendation_reason}</span>
                        </div>
                      )}

                      {station.provider_name && (
                        <div className="text-[11px] font-mono text-zinc-400 mt-2">
                          Operator: <span className="text-zinc-200">{station.provider_name}</span>
                        </div>
                      )}

                      {/* Connectors Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {station.connectors && station.connectors.length > 0 ? (
                          station.connectors.map((c) => {
                            const isMatch = userVehicle?.connectorType && c.connector_type.toLowerCase().includes(userVehicle.connectorType.toLowerCase().slice(0, 3));
                            return (
                              <span
                                key={c.id}
                                className={`text-[11px] px-2.5 py-0.5 rounded-lg font-mono ${
                                  isMatch
                                    ? 'bg-[#8CF06B]/20 text-[#8CF06B] border border-[#8CF06B]/40 font-semibold'
                                    : 'bg-white/[0.04] border border-white/[0.06] text-zinc-300'
                                }`}
                              >
                                {c.connector_type} {c.power_kw ? `(${c.power_kw}kW)` : ''}
                              </span>
                            );
                          })
                        ) : (
                          <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-500 font-mono">
                            Type 2 / Socket
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Dual Action Row (View Details + Get Directions) */}
                  <div className="px-6 pb-6 pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-t border-white/[0.06] mt-2 gap-3">
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">
                        {station.price !== null
                          ? `₹${station.price} / kWh`
                          : station.pricing_type === 'free'
                          ? 'Free Charging'
                          : 'Rate Unavailable'}
                      </div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">
                        {station.operating_hours || '24/7 Hours'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* View Details Link */}
                      <Link
                        to={`/app/stations/${station.id}`}
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Get Directions Link (External Google Maps Navigation) */}
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
                        title="Open turn-by-turn navigation in Google Maps"
                      >
                        <Navigation className="w-3.5 h-3.5 fill-black" />
                        <span>Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Privacy Notice Footer */}
      <div className="mt-12 text-center text-[11px] text-zinc-500 font-mono">
        Privacy Protection: We use your location strictly in your browser to calculate driving distances to nearby charging stations. Your exact coordinates are never stored on our servers.
      </div>
    </div>
  );
};
