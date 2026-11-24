import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Camera, Zap, RefreshCw, AlertCircle, ShieldCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { StationRecord } from '../../types';

export const AppExplorePlaceholder: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fast' | 'community'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [stations, setStations] = useState<StationRecord[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [importingOsm, setImportingOsm] = useState<boolean>(false);
  const [importResult, setImportResult] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Fetch stations from real D1 backend API
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
      if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load stations`);
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

  useEffect(() => {
    fetchStations(searchQuery, activeFilter);
  }, [activeFilter]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchStations(searchQuery, activeFilter);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Trigger OpenStreetMap Kerala import
  const handleImportOsm = async () => {
    setImportingOsm(true);
    setImportResult(null);
    try {
      const res = await fetch('/api/import/osm', { method: 'POST' });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setImportResult({
          type: 'success',
          message: `Import complete! Fetched ${data.stats.fetched} stations, inserted ${data.stats.inserted}, updated ${data.stats.updated}, flagged ${data.stats.duplicatesFlagged} duplicates.${
            data.is_fallback ? ' (Verified offline Kerala cache used)' : ''
          }`,
        });
        fetchStations('', 'all');
      } else {
        const errorMsg =
          data?.error ||
          (res.status === 500
            ? 'Internal Server Error while communicating with OpenStreetMap service.'
            : `Import failed (HTTP ${res.status})`);
        setImportResult({
          type: 'error',
          message: errorMsg,
        });
      }
    } catch (err: any) {
      setImportResult({
        type: 'error',
        message: err.message || 'Network error communicating with backend API.',
      });
    } finally {
      setImportingOsm(false);
    }
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
              REAL DATABASE ACTIVE
            </span>
            <span className="text-xs text-zinc-500 font-mono">D1 SQLite &bull; Cloudflare R2</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Explore Charging Stations</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Browse public fast corridors and neighborhood host wallboxes across Kerala.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={handleImportOsm}
            disabled={importingOsm}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 hover:text-white font-medium transition disabled:opacity-50"
            title="Import or update OpenStreetMap Kerala records"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${importingOsm ? 'animate-spin text-[#8CF06B]' : ''}`} />
            <span>{importingOsm ? 'Importing from OSM...' : 'Sync OSM Kerala'}</span>
          </button>

          <Link
            to="/app/list-charger"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs sm:text-sm font-semibold transition"
          >
            <span>List Your Own Charger</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Import Notice */}
      {importResult && (
        <div
          className={`mb-6 p-4 rounded-2xl text-xs font-mono flex items-center justify-between gap-3 ${
            importResult.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/10 border border-red-500/30 text-red-300'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {importResult.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-[#8CF06B] flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
            )}
            <span>{importResult.message}</span>
          </div>
          <button
            onClick={() => setImportResult(null)}
            className="text-zinc-500 hover:text-white transition"
          >
            &times;
          </button>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-3.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search station name, city, landmark, or operator (e.g. Kaloor, KSEB, Kozhikode)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0D100E] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
          />
        </div>

        {/* Filter Pills */}
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
          <h3 className="text-lg font-bold text-white">Database Error</h3>
          <p className="text-xs text-zinc-400 mt-1 mb-4">{error}</p>
          <button
            onClick={() => fetchStations()}
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
          <h3 className="text-xl font-bold text-white tracking-tight">No Stations Found</h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            {searchQuery
              ? `No charging stations match "${searchQuery}". Try a different locality or clear filters.`
              : 'The real charging station database is ready for records. Click below to pull verified EV stations across Kerala from OpenStreetMap.'}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
              >
                Clear Search Query
              </button>
            ) : (
              <button
                onClick={handleImportOsm}
                disabled={importingOsm}
                className="px-6 py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center gap-2"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${importingOsm ? 'animate-spin' : ''}`} />
                <span>{importingOsm ? 'Importing from OSM...' : 'Import Kerala Stations from OSM'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Real Station Cards Grid */}
      {!loading && !error && stations.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <span>{stations.length} Real Charging Stations</span>
            <span className="text-zinc-500 font-mono">Cloudflare D1 &bull; Kerala</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {stations.map((station) => {
              const hasPhotos = !!station.cover_image_url;
              const photoCount = station.images?.length || (hasPhotos ? 1 : 0);
              const powerDisplay = station.charging_power_kw ? `${station.charging_power_kw} kW` : 'Standard AC';

              return (
                <div
                  key={station.id}
                  className="bg-[#0D100E] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all group flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Station Photo Banner or Authentic Generic Placeholder */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 select-none">
                      {hasPhotos ? (
                        <img
                          src={station.cover_image_url!}
                          alt={station.station_name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        /* Authentic Placeholder: Clearly communicated, never misleading (Rule 6) */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121613] via-[#0D100E] to-[#080A09] text-center p-6 border-b border-white/[0.06]">
                          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 group-hover:text-[#8CF06B] group-hover:border-[#8CF06B]/30 transition-colors mb-2">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-medium text-zinc-400">No verified photograph yet</span>
                          <span className="text-[10px] text-zinc-600 font-mono mt-0.5">Community photos welcome</span>
                        </div>
                      )}

                      {/* Dark Gradient Overlay for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D100E] via-transparent to-black/60 pointer-events-none" />

                      {/* Top-Left: Power Rating Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#8CF06B] font-semibold">
                        <Zap className="w-3 h-3" />
                        <span>{powerDisplay}</span>
                      </div>

                      {/* Top-Right: Photo count & Verification Pill */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] text-zinc-300 font-mono">
                          <Camera className="w-3 h-3 text-zinc-400" />
                          <span>{photoCount}</span>
                        </div>

                        {station.verification_status === 'verified' ? (
                          <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            <span>Verified</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full bg-zinc-800/80 text-zinc-400 border border-white/10">
                            <ShieldAlert className="w-2.5 h-2.5 text-zinc-500" />
                            <span>Unverified</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom overlay: City & Source Snippet */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#8CF06B] flex-shrink-0" />
                          <span className="truncate font-medium">{station.city || 'Kerala, India'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 flex-shrink-0 ml-2">
                          {station.source_name === 'openstreetmap' ? 'OSM' : 'HOST'}
                        </span>
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

                      {station.provider_name && (
                        <div className="text-[11px] font-mono text-[#8CF06B] mt-1.5">
                          Operator: {station.provider_name}
                        </div>
                      )}

                      {/* Connectors Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {station.connectors && station.connectors.length > 0 ? (
                          station.connectors.map((c) => (
                            <span
                              key={c.id}
                              className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300 font-mono"
                            >
                              {c.connector_type} {c.power_kw ? `(${c.power_kw}kW)` : ''}
                            </span>
                          ))
                        ) : (
                          <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-500 font-mono">
                            Type 2 / Socket
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Action Row */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.06] mt-2">
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

                    <Link
                      to={`/app/stations/${station.id}`}
                      className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-[#8CF06B] hover:text-black text-white text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
