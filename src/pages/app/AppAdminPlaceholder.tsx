import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Shield,
  Clock,
  Zap,
  XCircle,
  RefreshCw,
  Database,
  Globe,
  FileText,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
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

interface ImportRun {
  id: string;
  source_name: string;
  records_fetched: number;
  records_inserted: number;
  records_updated: number;
  duplicates_flagged: number;
  records_rejected?: number;
  status: 'in_progress' | 'completed' | 'failed';
  error_message: string | null;
  started_at: string;
  completed_at: string | null;
}

interface DuplicateFlag {
  id: string;
  new_station_id: string;
  existing_station_id: string;
  similarity_score: number;
  reason: string;
  resolution_status: 'pending' | 'merged' | 'dismissed' | 'confirmed_unique';
  flagged_at: string;
  new_station_name?: string;
  new_station_source?: string;
  new_station_city?: string;
  existing_station_name?: string;
  existing_station_source?: string;
  existing_station_city?: string;
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
  const [activeSource, setActiveSource] = useState<'osm' | 'bee' | 'ocm' | null>(null);
  const [importLog, setImportLog] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [importRuns, setImportRuns] = useState<ImportRun[]>([]);
  const [duplicateFlags, setDuplicateFlags] = useState<DuplicateFlag[]>([]);

  const fetchAdminStats = async () => {
    try {
      const res = await fetch('/api/admin/stats', {
        headers: { 'X-Admin-Key': 'chargeundo-admin-dev-secret' },
      });
      if (res.ok) {
        const data = await res.json();
        setDbStats(data);
      }
    } catch (err) {
      console.error('Failed to fetch admin stats:', err);
    }
  };

  const fetchImportRuns = async () => {
    try {
      const res = await fetch('/api/admin/import-runs', {
        headers: { 'X-Admin-Key': 'chargeundo-admin-dev-secret' },
      });
      if (res.ok) {
        const data = await res.json();
        setImportRuns(data.runs || []);
      }
    } catch (err) {
      console.error('Failed to fetch import runs:', err);
    }
  };

  const fetchDuplicateFlags = async () => {
    try {
      const res = await fetch('/api/admin/duplicate-flags?status=pending', {
        headers: { 'X-Admin-Key': 'chargeundo-admin-dev-secret' },
      });
      if (res.ok) {
        const data = await res.json();
        setDuplicateFlags(data.flags || []);
      }
    } catch (err) {
      console.error('Failed to fetch duplicate flags:', err);
    }
  };

  useEffect(() => {
    fetchAdminStats();
    fetchImportRuns();
    fetchDuplicateFlags();
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

  // Run Specific Source Importer
  const handleTriggerImport = async (source: 'osm' | 'bee' | 'ocm') => {
    setActiveSource(source);
    setImportLog(null);
    const endpoint = `/api/import/${source}`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': 'chargeundo-admin-dev-secret',
        },
        body: JSON.stringify(source === 'ocm' ? { region: 'kerala' } : {}),
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setImportLog({
          type: 'success',
          message: data.message || `Successfully completed ${source.toUpperCase()} data ingestion.`,
        });
        fetchAdminStats();
        fetchImportRuns();
        fetchDuplicateFlags();
      } else {
        setImportLog({
          type: 'error',
          message: data?.error || `Import failed for ${source.toUpperCase()} (HTTP ${res.status}).`,
        });
      }
    } catch (err: any) {
      setImportLog({
        type: 'error',
        message: `Network error running ${source.toUpperCase()} importer: ${err.message}`,
      });
    } finally {
      setActiveSource(null);
    }
  };

  // Resolve Duplicate Flag
  const handleResolveFlag = async (
    flagId: string,
    resolution: 'confirmed_unique' | 'merged' | 'dismissed'
  ) => {
    try {
      const res = await fetch(`/api/admin/duplicate-flags/${flagId}/resolve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': 'chargeundo-admin-dev-secret',
        },
        body: JSON.stringify({ resolution }),
      });

      if (res.ok) {
        setDuplicateFlags((prev) => prev.filter((f) => f.id !== flagId));
        fetchAdminStats();
      }
    } catch (err) {
      console.error('Failed to resolve flag:', err);
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
            Data pipeline oversight, multi-source EV station synchronization, and cross-source duplicate resolution.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-3.5 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
            ADMIN: <span className="text-amber-400 font-semibold">{user?.email}</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
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

      {/* Multi-Source Import Management Controls */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-8">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-[#8CF06B]" />
            <span>Multi-Source EV Data Ingestion Pipeline</span>
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Independently sync legitimate EV charging records into the CHARGE undo unified database. All sources are normalized, cross-checked for duplicates, and marked unverified until inspected.
          </p>
        </div>

        {/* 3 Source Control Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. OpenStreetMap */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between hover:border-white/15 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#8CF06B] bg-[#8CF06B]/10 px-2.5 py-1 rounded-full border border-[#8CF06B]/20">
                  OpenStreetMap
                </span>
                <Globe className="w-4 h-4 text-zinc-500" />
              </div>
              <h4 className="text-sm font-semibold text-white">OSM Kerala Overpass</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Extracts community-mapped public charging nodes and ways within Kerala bounds. Parses CCS2, Type 2, and 16A Indian plugs.
              </p>
            </div>
            <button
              onClick={() => handleTriggerImport('osm')}
              disabled={activeSource !== null}
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${activeSource === 'osm' ? 'animate-spin' : ''}`} />
              <span>{activeSource === 'osm' ? 'Syncing OSM...' : 'Sync OSM Kerala'}</span>
            </button>
          </div>

          {/* 2. BEE Government Dataset */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between hover:border-white/15 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  BEE Gov. Dataset
                </span>
                <FileText className="w-4 h-4 text-zinc-500" />
              </div>
              <h4 className="text-sm font-semibold text-white">Bureau of Energy Efficiency</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Official document: <em>EV Public Charging Stations Data till 26th October 2025</em>. Validated Kerala CPOs (IOCL, BPCL, HPCL, Ather, Tata Power).
              </p>
            </div>
            <button
              onClick={() => handleTriggerImport('bee')}
              disabled={activeSource !== null}
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 font-semibold text-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${activeSource === 'bee' ? 'animate-spin' : ''}`} />
              <span>{activeSource === 'bee' ? 'Importing BEE...' : 'Import BEE Dataset'}</span>
            </button>
          </div>

          {/* 3. OpenChargeMap */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between hover:border-white/15 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  OpenChargeMap
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </div>
              <h4 className="text-sm font-semibold text-white">OCM Global Open Data</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Enforces open-data eligibility (<code>opendata=true</code>). Secured with Cloudflare Worker secret.
              </p>
            </div>
            <button
              onClick={() => handleTriggerImport('ocm')}
              disabled={activeSource !== null}
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 font-semibold text-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${activeSource === 'ocm' ? 'animate-spin' : ''}`} />
              <span>{activeSource === 'ocm' ? 'Syncing OCM...' : 'Sync OpenChargeMap'}</span>
            </button>
          </div>
        </div>

        {/* Import Status Alert */}
        {importLog && (
          <div
            className={`mt-6 p-4 rounded-2xl text-xs font-mono flex items-center justify-between gap-3 ${
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
            <button onClick={() => setImportLog(null)} className="text-zinc-500 hover:text-white transition">
              &times;
            </button>
          </div>
        )}
      </div>

      {/* Duplicate Detection & Proximity Review Queue */}
      {duplicateFlags.length > 0 && (
        <div className="bg-[#0D100E] border border-amber-500/20 rounded-3xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Cross-Source Duplicate Review Queue</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {duplicateFlags.length} Pending
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Candidate duplicates flagged by spatial proximity and bigram string similarity. Original community records are never automatically deleted.
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            {duplicateFlags.map((flag) => (
              <div
                key={flag.id}
                className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-zinc-400">Score: {(flag.similarity_score * 100).toFixed(0)}%</span>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="text-amber-400 font-medium">{flag.reason}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {flag.new_station_name || 'Candidate Station'}
                    <span className="ml-2 text-xs font-mono text-zinc-500 uppercase">
                      ({flag.new_station_source})
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400">
                    Matches with: <span className="text-zinc-200">{flag.existing_station_name}</span> ({flag.existing_station_source})
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <button
                    onClick={() => handleResolveFlag(flag.id, 'confirmed_unique')}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition"
                  >
                    Confirm Unique
                  </button>
                  <button
                    onClick={() => handleResolveFlag(flag.id, 'merged')}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition"
                  >
                    Merge Records
                  </button>
                  <button
                    onClick={() => handleResolveFlag(flag.id, 'dismissed')}
                    className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-medium transition"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Import Runs Audit History Table */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#8CF06B]" />
              <span>Import Run Audit History</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Traceable execution log of discovered, inserted, updated, flagged, and rejected records across all datasets.
            </p>
          </div>
          <button
            onClick={fetchImportRuns}
            className="text-xs font-mono text-zinc-400 hover:text-white transition flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Refresh</span>
          </button>
        </div>

        {importRuns.length === 0 ? (
          <div className="text-center py-8 text-xs text-zinc-500 font-mono">
            No historical import runs recorded yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="text-zinc-500 border-b border-white/[0.08] uppercase">
                <tr>
                  <th className="py-3 px-3">Source</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Discovered</th>
                  <th className="py-3 px-3">Inserted</th>
                  <th className="py-3 px-3">Updated</th>
                  <th className="py-3 px-3">Duplicates</th>
                  <th className="py-3 px-3">Rejected</th>
                  <th className="py-3 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                {importRuns.map((run) => (
                  <tr key={run.id} className="hover:bg-white/[0.02] transition">
                    <td className="py-3 px-3 font-semibold text-white">{run.source_name}</td>
                    <td className="py-3 px-3 text-zinc-400">
                      {new Date(run.started_at).toLocaleDateString()} {new Date(run.started_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-3 px-3">{run.records_fetched}</td>
                    <td className="py-3 px-3 text-[#8CF06B] font-bold">+{run.records_inserted}</td>
                    <td className="py-3 px-3 text-blue-400">{run.records_updated}</td>
                    <td className="py-3 px-3 text-amber-400">{run.duplicates_flagged}</td>
                    <td className="py-3 px-3 text-red-400">{run.records_rejected || 0}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          run.status === 'completed'
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                            : run.status === 'failed'
                            ? 'bg-red-500/15 text-red-300 border border-red-500/30'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {run.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Verify community wallbox specifications, electrical tariffs, and host premises before publishing to the live driver map.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {listings.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col md:flex-row gap-5 items-start md:items-center justify-between"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.photoUrl}
                  alt={item.location}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-white/10 flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-white text-base">{item.location}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Host: <span className="text-zinc-300">{item.hostName}</span> &bull; {item.hostEmail}
                  </p>
                  <div className="flex items-center gap-3 mt-2 font-mono text-xs">
                    <span className="text-[#8CF06B] flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> {item.power}
                    </span>
                    <span className="text-zinc-400">&bull;</span>
                    <span className="text-zinc-300 font-semibold">{item.rate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                {item.status === 'pending' ? (
                  <>
                    <button
                      onClick={() => handleReject(item.id)}
                      className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="px-4 py-2 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition"
                    >
                      Approve Listing
                    </button>
                  </>
                ) : (
                  <span
                    className={`text-xs font-mono font-medium px-3 py-1.5 rounded-xl border ${
                      item.status === 'approved'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
