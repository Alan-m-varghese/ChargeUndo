import React, { useState, useEffect } from 'react';
import { CheckCircle2, Shield, Clock, MapPin, Zap, XCircle, RefreshCw } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface PendingListing {
  id: string;
  hostName: string;
  hostEmail: string;
  location: string;
  power: string;
  rate: string;
  photoUrl: string;
  status: 'pending' | 'approved' | 'rejected';
}

const INITIAL_PENDING: PendingListing[] = [
  {
    id: 'req-01',
    hostName: 'Arjun Nair',
    hostEmail: 'driver@chargeundo.in',
    location: 'Villa No. 12, Skyline Green Palms, Kakkanad, Kochi',
    power: '7.4 kW Type 2',
    rate: '₹14/kWh',
    photoUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    status: 'pending',
  },
  {
    id: 'req-02',
    hostName: 'Kavitha Menon',
    hostEmail: 'host@chargeundo.in',
    location: 'Menon Enclave, Near Metro Pillar 340, Aluva, Ernakulam',
    power: '11 kW Type 2 Fast AC',
    rate: '₹16/kWh',
    photoUrl: 'https://images.unsplash.com/photo-1558441719-aa34ab5fa3cf?auto=format&fit=crop&w=600&q=80',
    status: 'pending',
  },
];

export const AppAdminPlaceholder: React.FC = () => {
  const { user } = useAuth();
  const [listings, setListings] = useState<PendingListing[]>(INITIAL_PENDING);

  // Live Database Stats
  const [dbStats, setDbStats] = useState<{
    total_stations: number;
    unverified_stations: number;
    verified_stations: number;
    pending_image_reviews: number;
    pending_duplicate_flags: number;
  }>({
    total_stations: 0,
    unverified_stations: 0,
    verified_stations: 0,
    pending_image_reviews: 0,
    pending_duplicate_flags: 0,
  });

  // Importer state
  const [importing, setImporting] = useState<boolean>(false);
  const [importLog, setImportLog] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const fetchAdminStats = async () => {
    try {
      const res = await fetch('/api/admin/stats', {
        headers: {
          'X-Admin-Key': 'chargeundo-admin-dev-secret',
        },
      });
      if (res.ok) {
        const data = await res.json();
        setDbStats(data);
      }
    } catch (err) {
      console.error('Failed to fetch admin stats:', err);
    }
  };

  useEffect(() => {
    fetchAdminStats();
  }, []);

  const handleApprove = (id: string) => {
    setListings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item))
    );
  };

  const handleReject = (id: string) => {
    setListings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'rejected' } : item))
    );
  };

  const handleRunOsmImport = async () => {
    setImporting(true);
    setImportLog(null);
    try {
      const res = await fetch('/api/import/osm', { method: 'POST' });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setImportLog({
          type: 'success',
          message: `OSM Ingestion Completed (Run: ${data.run_id}). Fetched: ${data.stats.fetched}, Inserted: ${data.stats.inserted}, Updated: ${data.stats.updated}, Flagged Duplicates: ${data.stats.duplicatesFlagged}.${
            data.is_fallback ? ' (Verified offline Kerala cache used)' : ''
          }`,
        });
        fetchAdminStats();
      } else {
        setImportLog({
          type: 'error',
          message: data?.error || (res.status === 500 ? 'Internal Server Error while running OSM ingestion' : `Import failed (HTTP ${res.status})`),
        });
      }
    } catch (err: any) {
      setImportLog({
        type: 'error',
        message: `Error running importer: ${err.message}`,
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Role Active</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mt-2">Administrator Console</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Data pipeline oversight, OpenStreetMap sync, duplicate audit, and station photo moderation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-3.5 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
            ADMIN: <span className="text-amber-400 font-semibold">{user?.email}</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid (Connected to real D1 stats) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Total Charging Stations</div>
          <div className="text-2xl font-bold text-white mt-2">{dbStats.total_stations} Stations</div>
          <div className="text-xs text-zinc-400 mt-1">
            {dbStats.unverified_stations} Unverified &bull; {dbStats.verified_stations} Verified
          </div>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Pending Photo Reviews</div>
          <div className="text-2xl font-bold text-[#8CF06B] mt-2">{dbStats.pending_image_reviews}</div>
          <div className="text-xs text-zinc-400 mt-1">Awaiting moderation</div>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Duplicate Flags</div>
          <div className="text-2xl font-bold text-amber-400 mt-2">{dbStats.pending_duplicate_flags}</div>
          <div className="text-xs text-zinc-400 mt-1">Within 100m proximity audit</div>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Community Wallboxes</div>
          <div className="text-2xl font-bold text-white mt-2">
            {listings.filter((l) => l.status === 'pending').length} Pending
          </div>
          <div className="text-xs text-emerald-400 mt-1">Host verification queue</div>
        </div>
      </div>

      {/* OpenStreetMap Ingestion Control Panel */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#8CF06B]" />
              <span>OpenStreetMap Data Ingestion (Kerala)</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Extracts public EV charging nodes and ways via Overpass API within Kerala bounds. Automatically parses connectors and flags duplicates.
            </p>
          </div>

          <button
            onClick={handleRunOsmImport}
            disabled={importing}
            className="px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition flex items-center gap-2 flex-shrink-0 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${importing ? 'animate-spin' : ''}`} />
            <span>{importing ? 'Querying Overpass API...' : 'Run Kerala Ingestion Now'}</span>
          </button>
        </div>

        {importLog && (
          <div
            className={`mt-4 p-4 rounded-2xl text-xs font-mono flex items-center justify-between gap-3 ${
              importLog.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-red-500/10 border border-red-500/30 text-red-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {importLog.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-[#8CF06B] flex-shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              )}
              <span>{importLog.message}</span>
            </div>
            <button
              onClick={() => setImportLog(null)}
              className="text-zinc-500 hover:text-white transition"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {/* Host Charger Approvals Queue */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Community Host Listing Approvals</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Action Required
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Verify submitted photos, address details, and electrical specifications before publishing to map.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {listings.filter((l) => l.status === 'pending').length} pending review
          </span>
        </div>

        <div className="space-y-4">
          {listings.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition hover:border-white/10"
            >
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={item.photoUrl}
                  alt={item.hostName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-white/10 flex-shrink-0"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-white text-sm sm:text-base">{item.hostName}</span>
                    <span className="text-xs font-mono text-zinc-400">({item.hostEmail})</span>
                    {item.status === 'approved' && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                        APPROVED & LIVE
                      </span>
                    )}
                    {item.status === 'rejected' && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">
                        REJECTED
                      </span>
                    )}
                    {item.status === 'pending' && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        <span>PENDING AUDIT</span>
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono">
                    <span className="text-[#8CF06B] flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {item.power}
                    </span>
                    <span className="text-zinc-400">{item.rate}</span>
                  </div>
                </div>
              </div>

              {item.status === 'pending' ? (
                <div className="flex items-center gap-2 w-full md:w-auto self-end md:self-center">
                  <button
                    onClick={() => handleReject(item.id)}
                    className="flex-1 md:flex-none px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-zinc-300 hover:text-red-400 text-xs font-medium transition flex items-center justify-center gap-1.5"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Reject</span>
                  </button>
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Approve Listing</span>
                  </button>
                </div>
              ) : (
                <div className="text-xs font-mono text-zinc-500">
                  Audit action completed
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
