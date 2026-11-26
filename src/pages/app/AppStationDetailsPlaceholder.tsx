import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Heart, Navigation, Camera, ExternalLink, ShieldAlert, ShieldCheck, Upload, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { StationRecord, StationImageRecord } from '../../types';
import { isStationFavourite, toggleFavourite } from '../../utils/favourites';

export const AppStationDetailsPlaceholder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [station, setStation] = useState<StationRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  // Gallery State
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Photo Upload State
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadSource, setUploadSource] = useState<'community' | 'provider'>('community');
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fetchStationDetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/stations/${id}`);
      if (!res.ok) {
        if (res.status === 404) throw new Error('Charging station not found in database.');
        throw new Error(`HTTP ${res.status}: Failed to load station details.`);
      }
      const data = await res.json();
      setStation(data.station);
      if (data.station?.id) {
        setIsFavourite(isStationFavourite(data.station.id));
      }
      if (data.station?.images && data.station.images.length > 0) {
        setActivePhoto(data.station.images[0].image_url);
      }
    } catch (err: any) {
      console.error('Error fetching station details:', err);
      setError(err.message || 'Failed to load station.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavourite = () => {
    if (!station) return;
    const next = toggleFavourite(station);
    setIsFavourite(next);
  };

  useEffect(() => {
    fetchStationDetails();
  }, [id]);

  const handleUploadPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile || !id) return;

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', uploadFile);
      formData.append('source', uploadSource);
      formData.append('uploaded_by', 'driver@chargeundo.in');

      const res = await fetch(`/api/stations/${id}/images`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload photo.');
      }

      setUploadSuccess('Photograph uploaded successfully! It is now pending administrator review.');
      setUploadFile(null);
      setTimeout(() => {
        setUploadModalOpen(false);
        setUploadSuccess(null);
        fetchStationDetails();
      }, 3000);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-36 bg-white/[0.04] rounded" />
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 space-y-6">
            <div className="h-8 w-2/3 bg-white/[0.06] rounded" />
            <div className="h-4 w-1/3 bg-white/[0.04] rounded" />
            <div className="aspect-[21/9] bg-white/[0.03] rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !station) {
    return (
      <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
        <Link to="/app/explore" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stations</span>
        </Link>
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-10 text-center max-w-md mx-auto my-12">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white">Station Not Found</h2>
          <p className="text-xs text-zinc-400 mt-2 mb-6">{error || 'This station does not exist or has been removed.'}</p>
          <Link
            to="/app/explore"
            className="px-6 py-2.5 rounded-full bg-[#8CF06B] text-black text-xs font-semibold"
          >
            Return to Explore
          </Link>
        </div>
      </div>
    );
  }

  const approvedPhotos = station.images || [];
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${station.latitude},${station.longitude}`;

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
      {/* Back button */}
      <Link
        to="/app/explore"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Stations</span>
      </Link>

      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              {station.charging_power_kw && (
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#8CF06B]/15 text-[#8CF06B] border border-[#8CF06B]/30 font-semibold">
                  {station.charging_power_kw} kW Output
                </span>
              )}
              {station.verification_status === 'verified' ? (
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/35 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Station</span>
                </span>
              ) : (
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  <span>Pending Verification</span>
                </span>
              )}
              <span className="text-xs text-zinc-500 font-mono">ID: {station.id}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {station.station_name}
            </h1>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm mt-2">
              <MapPin className="w-4 h-4 text-[#8CF06B] flex-shrink-0" />
              <span>
                {station.address || `${station.city || 'Kerala'}, India`} &bull; ({station.latitude.toFixed(4)}, {station.longitude.toFixed(4)})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setUploadModalOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-200 font-medium transition flex items-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5 text-[#8CF06B]" />
              <span>Upload Photo</span>
            </button>

            <button
              onClick={handleToggleFavourite}
              className={`p-3 rounded-2xl border transition cursor-pointer flex items-center justify-center ${
                isFavourite
                  ? 'bg-red-500/15 border-red-500/40 text-red-500 hover:bg-red-500/25 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
                  : 'bg-white/[0.05] border-white/[0.1] hover:bg-white/[0.1] text-zinc-300 hover:text-red-400'
              }`}
              title={isFavourite ? 'Remove from favourites' : 'Save to favourites'}
              aria-label={isFavourite ? 'Remove from favourites' : 'Save to favourites'}
            >
              <Heart
                className={`w-5 h-5 transition-transform duration-200 active:scale-125 ${
                  isFavourite ? 'fill-red-500 text-red-500' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Station Photo Gallery (Cloudflare R2 Integration) */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
            <span className="font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#8CF06B]" />
              <span>Verified Station Photos ({approvedPhotos.length})</span>
            </span>
            {approvedPhotos.length > 0 && <span className="text-zinc-500">Click thumbnail to inspect</span>}
          </div>

          {approvedPhotos.length > 0 ? (
            <div>
              {/* Large Hero Image */}
              <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 relative shadow-2xl">
                <img
                  src={activePhoto || approvedPhotos[0].image_url}
                  alt={station.station_name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Thumbnails Row */}
              {approvedPhotos.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5 mt-3.5">
                  {approvedPhotos.map((photo: StationImageRecord) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhoto(photo.image_url)}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                        activePhoto === photo.image_url
                          ? 'border-[#8CF06B] ring-2 ring-[#8CF06B]/25'
                          : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={photo.image_url} alt="" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] text-zinc-200 font-mono bg-black/70 px-1 rounded">
                        {photo.image_source}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Rule 6: Generic Placeholder - never present non-verified photos as real */
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-gradient-to-br from-[#121613] via-[#0D100E] to-[#080A09] border border-dashed border-white/15 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 mb-3">
                <Camera className="w-7 h-7 text-zinc-500" />
              </div>
              <h3 className="text-base font-semibold text-white">No verified station photograph yet</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                Help other EV drivers navigate this spot by uploading a real photo of the charging gun and parking bay.
              </p>
              <button
                onClick={() => setUploadModalOpen(true)}
                className="mt-4 px-5 py-2 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload First Photo</span>
              </button>
            </div>
          )}
        </div>

        {/* Location & Navigation Bar */}
        <div className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Location &amp; Coordinates</div>
            <div className="text-sm sm:text-base font-semibold text-white">{station.address || `${station.city}, Kerala`}</div>
            <div className="text-xs text-zinc-400 font-mono">
              GPS Lat: {station.latitude.toFixed(5)} &bull; Long: {station.longitude.toFixed(5)}
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none px-5 py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center justify-center gap-2"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Navigate with Google Maps</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* Station Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Tariff Rate</div>
            <div className="text-xl font-bold text-white mt-1.5">
              {station.price !== null ? `₹${station.price}` : station.pricing_type === 'free' ? 'Free' : 'Unavailable'}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              {station.pricing_type === 'free' ? 'Public free charging' : 'per kWh'}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Peak Output</div>
            <div className="text-xl font-bold text-[#8CF06B] mt-1.5">
              {station.charging_power_kw ? `${station.charging_power_kw} kW` : 'Standard'}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">{station.listing_type === 'official' ? 'Public Corridors' : 'Private Wallbox'}</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Connectors</div>
            <div className="text-xl font-bold text-white mt-1.5">
              {station.connectors?.length || 1} Guns
            </div>
            <div className="text-xs text-zinc-400 mt-0.5 truncate">
              {station.connectors?.map((c) => c.connector_type).join(', ') || 'Type 2 / Socket'}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Operating Hours</div>
            <div className="text-xl font-bold text-white mt-1.5">
              {station.operating_hours || '24/7'}
            </div>
            <div className="text-xs text-emerald-400 mt-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Standard Schedule</span>
            </div>
          </div>
        </div>

        {/* Data Source & Audit Attribution */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <div>
            SOURCE: <span className="text-white uppercase">{station.source_name}</span> &bull; REF:{' '}
            <span className="text-zinc-500">{station.source_id || station.id}</span>
          </div>
          <div>
            LAST UPDATED: <span className="text-zinc-300">{new Date(station.last_updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Upload Photo Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D100E] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <h3 className="text-lg font-bold text-white">Upload Station Photo</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-6">
              Photos are published once reviewed and approved by an administrator.
            </p>

            <form onSubmit={handleUploadPhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Select Photo (JPG, PNG, WebP &bull; Max 5MB)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                  required
                  className="w-full text-xs text-zinc-300 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-white/10 file:text-white file:font-semibold hover:file:bg-white/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Uploader Role
                </label>
                <select
                  value={uploadSource}
                  onChange={(e) => setUploadSource(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#8CF06B]"
                >
                  <option value="community">Community Driver</option>
                  <option value="provider">Host / Station Owner</option>
                </select>
              </div>

              {uploadError && (
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-300">
                  {uploadError}
                </div>
              )}

              {uploadSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{uploadSuccess}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading || !uploadFile}
                  className="px-5 py-2.5 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{uploading ? 'Uploading...' : 'Upload Photograph'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
