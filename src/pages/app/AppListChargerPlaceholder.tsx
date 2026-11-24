import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Camera, Trash2, Plus, Navigation, Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AppListChargerPlaceholder: React.FC = () => {
  const { user, becomeProvider } = useAuth();
  const [activatedNotice, setActivatedNotice] = useState(false);

  // Form State
  const [title, setTitle] = useState(user?.name ? `${user.name}'s Fast Wallbox` : 'Kakkanad Villa 7.4kW Type 2 Charger');
  const [powerRating, setPowerRating] = useState('7.4 kW Single Phase AC');
  const [ratePerKwh, setRatePerKwh] = useState('14');
  
  // Mandatory Location State
  const [addressLine1, setAddressLine1] = useState('Villa No. 12, Skyline Green Palms');
  const [street, setStreet] = useState('Infopark South Gate Road, Kakkanad');
  const [city, setCity] = useState('Kochi');
  const [pincode, setPincode] = useState('682030');
  const [landmark, setLandmark] = useState('Opposite Wonderla Road Junction, Near Metro Feeder Station');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('https://maps.app.goo.gl/edappally-kochi-pin');
  const [contactPhone, setContactPhone] = useState(user?.phone || '98470 12345');
  const [locationDetected, setLocationDetected] = useState(false);

  // Station Photos State
  const [photos, setPhotos] = useState<Array<{ id: string; url: string; label: string; isCover: boolean }>>([
    {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=800&q=80',
      label: 'Main Wallbox Front',
      isCover: true,
    },
    {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      label: 'Driveway Parking Bay',
      isCover: false,
    },
    {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
      label: 'Gated Villa Entrance',
      isCover: false,
    },
  ]);

  const [accessNotes, setAccessNotes] = useState('Covered driveway on the right side of the main gate. 24/7 security. EV charging gun hangs on pillar next to the parking spot.');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleActivate = () => {
    becomeProvider();
    setActivatedNotice(true);
    setTimeout(() => setActivatedNotice(false), 4000);
  };

  const handleDetectLocation = () => {
    setLocationDetected(true);
    setCity('Kochi');
    setPincode('682030');
    setLandmark('GPS Lat: 10.0094° N, Long: 76.3688° E (Kakkanad)');
    setGoogleMapsUrl('https://maps.google.com/?q=10.0094,76.3688');
    setTimeout(() => setLocationDetected(false), 3000);
  };

  const handleSetCoverPhoto = (id: string) => {
    setPhotos(photos.map((p) => ({ ...p, isCover: p.id === id })));
  };

  const handleDeletePhoto = (id: string) => {
    if (photos.length <= 1) {
      alert('Your listing requires at least one photo of the charger or parking space.');
      return;
    }
    const filtered = photos.filter((p) => p.id !== id);
    if (!filtered.some((p) => p.isCover)) {
      filtered[0].isCover = true;
    }
    setPhotos(filtered);
  };

  const handleAddSamplePhoto = () => {
    const newPhoto = {
      id: `photo-${Date.now()}`,
      url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      label: `Additional Spot Photo ${photos.length + 1}`,
      isCover: false,
    };
    setPhotos([...photos, newPhoto]);
  };

  const handleSaveListing = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">List Your Charger</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Publish your charger location, photos, and specs to start accepting EV charging bookings.
          </p>
        </div>

        {user?.isProvider && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400 self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4" />
            <span>Host Mode Active</span>
          </div>
        )}
      </div>

      {activatedNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-[#8CF06B]/15 border border-[#8CF06B]/40 text-sm text-[#8CF06B] flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Host functionality enabled on your account.</span>
        </div>
      )}

      {savedSuccess && (
        <div className="mb-6 p-4 rounded-2xl bg-[#8CF06B]/15 border border-[#8CF06B]/40 text-sm text-[#8CF06B] flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Listing draft saved successfully with photos, location, and contact details!</span>
        </div>
      )}

      {/* Enable host mode callout if not yet provider */}
      {!user?.isProvider && (
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-[#0D100E] border border-[#8CF06B]/30 relative overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-white">Enable Host Capabilities</h2>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              CHARGE undo uses a single unified account. Activate provider mode to register your hardware, set custom hourly pricing, and accept neighbor bookings.
            </p>
            <button
              onClick={handleActivate}
              className="mt-5 px-6 py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition flex items-center gap-2"
            >
              <span>Activate Provider Mode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Content Grid: 12-column layout that gives both form and earnings ample width */}
      <form onSubmit={handleSaveListing} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Location and Hardware Specifications */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Charger Location & Address */}
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8CF06B]" />
                  <span>Station Location &amp; Address</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Required: Drivers navigate to this precise address when booking a slot.
                </p>
              </div>

              <button
                type="button"
                onClick={handleDetectLocation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-[#8CF06B] font-medium transition self-start sm:self-auto"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{locationDetected ? 'Location Detected!' : 'Use GPS Location'}</span>
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {/* House / Building Name */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Building / Property Name &amp; House No. <span className="text-[#8CF06B]">*</span>
                </label>
                <input
                  type="text"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  placeholder="e.g. Villa No. 12, Skyline Green Palms"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                />
              </div>

              {/* Street & Area */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Street Address / Locality <span className="text-[#8CF06B]">*</span>
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="e.g. Infopark South Gate Road, Kakkanad"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                />
              </div>

              {/* City and PIN Code (2-column layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    City / Town (Kerala) <span className="text-[#8CF06B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Kochi"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Postal PIN Code <span className="text-[#8CF06B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="e.g. 682030"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  />
                </div>
              </div>

              {/* Landmark */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Nearby Landmark &amp; Navigation Clue <span className="text-[#8CF06B]">*</span>
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="e.g. Opposite Wonderla Road Junction, Near Metro Feeder Station"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                />
              </div>

              {/* Google Maps Link (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Google Maps Pin / Link <span className="text-zinc-500 font-normal lowercase">(optional)</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="url"
                    value={googleMapsUrl}
                    onChange={(e) => setGoogleMapsUrl(e.target.value)}
                    placeholder="e.g. https://maps.app.goo.gl/... or coordinates"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-1.5">
                  Allows EV drivers to launch turn-by-turn navigation directly to your private driveway.
                </p>
              </div>

              {/* Contact Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Contact Phone Number <span className="text-[#8CF06B]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 select-none flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#8CF06B]" />
                    <span>+91</span>
                  </span>
                  <input
                    type="tel"
                    value={contactPhone.replace('+91 ', '').replace('+91', '')}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="98470 12345"
                    required
                    className="w-full pl-16 pr-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-1.5">
                  Shared with booked drivers to coordinate gate opening or parking arrival assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Hardware Specifications */}
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-6">Charger Hardware Specifications</h3>

            <div className="space-y-5 text-sm">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Listing Title <span className="text-[#8CF06B]">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Kakkanad Villa 7.4kW Type 2 Wallbox"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Power Output Rating
                  </label>
                  <select
                    value={powerRating}
                    onChange={(e) => setPowerRating(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  >
                    <option>7.4 kW Single Phase AC</option>
                    <option>11 kW 3-Phase AC</option>
                    <option>22 kW 3-Phase AC</option>
                    <option>3.3 kW 16A Socket</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Hourly / Per kWh Rate (₹)
                  </label>
                  <input
                    type="number"
                    value={ratePerKwh}
                    onChange={(e) => setRatePerKwh(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Driveway Access Instructions
                </label>
                <textarea
                  rows={3}
                  value={accessNotes}
                  onChange={(e) => setAccessNotes(e.target.value)}
                  placeholder="e.g. Driveway on right side of gate. EV socket next to car porch."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#8CF06B] transition"
                />
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition shadow-[0_0_20px_rgba(140,240,107,0.25)] flex items-center gap-2"
              >
                <span>Publish Station Listing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Station Photos (Image Upload) on TOP, Estimated Earnings BELOW */}
        <div className="lg:col-span-5 space-y-6">
          {/* Section: Station Photos (Moved to top of right column) */}
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[#8CF06B]" />
                  <span>Station Photos</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Upload real photos of your wallbox, parking bay, and driveway entrance to guide EV drivers.
                </p>
              </div>

              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.06] text-zinc-300 flex-shrink-0">
                {photos.length} Photos
              </span>
            </div>

            {/* Photo Grid Preview */}
            <div className="grid grid-cols-2 gap-3.5 mb-5 mt-5">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className={`group relative rounded-2xl overflow-hidden border aspect-[4/3] bg-zinc-900 flex flex-col justify-between ${
                    p.isCover ? 'border-[#8CF06B] ring-2 ring-[#8CF06B]/20' : 'border-white/[0.1]'
                  }`}
                >
                  <img
                    src={p.url}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23141816"/><path d="M190 90 L165 155 L198 155 L178 220 L235 145 L202 145 Z" fill="%238CF06B"/><text x="200" y="255" text-anchor="middle" fill="%2371717a" font-family="sans-serif" font-size="13">Station Photo</text></svg>';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                    {p.isCover ? (
                      <span className="text-[10px] font-semibold font-mono bg-[#8CF06B] text-black px-2 py-0.5 rounded-md shadow-sm">
                        MAIN COVER
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSetCoverPhoto(p.id)}
                        className="text-[10px] font-mono bg-black/70 hover:bg-black text-zinc-300 hover:text-white px-2 py-0.5 rounded-md transition"
                      >
                        Set cover
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDeletePhoto(p.id)}
                      className="w-6 h-6 rounded-md bg-black/70 hover:bg-red-500 text-zinc-300 hover:text-white flex items-center justify-center transition"
                      title="Delete photo"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Bottom Label */}
                  <div className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white truncate bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                    {p.label}
                  </div>
                </div>
              ))}

              {/* Add Photo Slot Button */}
              <button
                type="button"
                onClick={handleAddSamplePhoto}
                className="rounded-2xl border-2 border-dashed border-white/[0.15] hover:border-[#8CF06B] hover:bg-[#8CF06B]/5 transition flex flex-col items-center justify-center p-4 text-center aspect-[4/3] group"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.05] group-hover:bg-[#8CF06B]/20 flex items-center justify-center text-zinc-400 group-hover:text-[#8CF06B] transition mb-2">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition">
                  Add Photo
                </span>
                <span className="text-[10px] text-zinc-500 mt-0.5">JPG or PNG</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 leading-relaxed">
              * Include at least 1 clear photo of your wallbox and 1 photo showing the parking bay.
            </p>
          </div>

          {/* Estimated Monthly Earnings Card (Moved down below Station Photos) */}
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-xl">
            {/* Header */}
            <div className="pb-5 border-b border-white/[0.07]">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Estimated Monthly Earnings
              </h3>
            </div>

            {/* Big Earnings Figure */}
            <div className="my-6">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex flex-wrap items-baseline gap-2">
                <span className="text-[#8CF06B]">₹8,500</span>
                <span className="text-zinc-400 text-base sm:text-lg font-normal">to ₹22,000</span>
                <span className="text-xs text-zinc-500 font-mono">/ mo</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                Based on 3 to 5 daily charging sessions using standard 7.4 kW or 11 kW AC Wallboxes.
              </p>
            </div>

            {/* Roomy Boxes for Payout & Commission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mb-1">
                  PAYOUT
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Instant UPI Direct
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mb-1">
                  COMMISSION
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#8CF06B]">
                  0% Early Host Fee
                </p>
              </div>
            </div>

            {/* Hardware Compatibility */}
            <div className="p-4 rounded-xl bg-[#080B09] border border-white/[0.05] text-xs text-zinc-400">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                HARDWARE COMPATIBILITY
              </div>
              <p className="leading-relaxed text-[11px] sm:text-xs">
                Compatible with standard 3.3 kW (16A socket), 7.4 kW, 11 kW, and 22 kW Type 2 wallboxes installed in home driveways, villas, and commercial parking.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
