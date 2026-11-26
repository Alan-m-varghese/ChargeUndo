import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusCircle, MapPin, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { RollingText } from './RollingText';
import { getUserLocation, GeolocationErrorDetails } from '../../utils/geolocation';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [locating, setLocating] = useState(false);
  const [locatingStatus, setLocatingStatus] = useState<string>('');
  const [geoError, setGeoError] = useState<GeolocationErrorDetails | null>(null);

  const networks = [
    { name: 'Tata Power', tag: 'EZ CHARGE' },
    { name: 'Zeon Charging', tag: 'SOUTH INDIA' },
    { name: 'Statiq', tag: 'FAST DC' },
    { name: 'Jio-bp pulse', tag: 'HIGHWAY' },
    { name: 'KSEB Soura', tag: 'KERALA' },
    { name: 'Ather Grid', tag: '2W & 4W' },
    { name: 'ChargeZone', tag: 'INTERCITY' },
    { name: 'BPCL eDrive', tag: 'CORRIDOR' },
  ];

  // Doubled array for seamless infinite marquee loop
  const marqueeNetworks = [...networks, ...networks];

  const handleFindNearMe = async () => {
    setLocating(true);
    setGeoError(null);
    setLocatingStatus('Requesting location permission...');

    try {
      const coords = await getUserLocation();
      setLocatingStatus('Finding charging stations near you...');
      setTimeout(() => {
        navigate(`/app/explore?lat=${coords.latitude.toFixed(6)}&lng=${coords.longitude.toFixed(6)}&radius=10&mode=nearby`);
      }, 400);
    } catch (err: any) {
      console.warn('Hero geolocation failed:', err);
      setGeoError(err);
      setLocating(false);
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden bg-[#080A09]" id="hero">
      {/* Top Headline & Copy Area */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 w-full text-center relative z-20">
        {/* Main Headline: Bold, confident, relaxed with rolling word animation */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-white">
          Find a Charge.{' '}
          <RollingText />
        </h1>

        {/* Supporting Copy: Spacious leading, clean breathing room */}
        <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-[#A0A5A1] leading-relaxed font-normal">
          Discover EV charging stations across India. Compare charging networks, explore private chargers, and find your next charging stop.
        </p>

        {/* Location Detection Status or Error Alert */}
        {locating && (
          <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#8CF06B]/15 border border-[#8CF06B]/30 text-[#8CF06B] text-xs sm:text-sm font-mono animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin text-[#8CF06B]" />
            <span>{locatingStatus}</span>
          </div>
        )}

        {geoError && !locating && (
          <div className="mt-6 max-w-md mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-left text-xs">
            <div className="flex items-start gap-2.5 text-amber-300">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold block">{geoError.message}</span>
                <div className="mt-2.5 flex items-center gap-3">
                  {geoError.canRetry && (
                    <button
                      onClick={handleFindNearMe}
                      className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold transition flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Retry</span>
                    </button>
                  )}
                  <Link
                    to="/app/explore"
                    className="text-zinc-300 hover:text-white underline underline-offset-2 transition"
                  >
                    Select City Manually on Explore &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons: Relaxed, comfortable touch targets */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
          {/* Primary CTA: Find Chargers Near Me */}
          <button
            onClick={handleFindNearMe}
            disabled={locating}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(140,240,107,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {locating ? (
              <Loader2 className="w-4 h-4 animate-spin text-black" />
            ) : (
              <MapPin className="w-4 h-4 text-black" />
            )}
            <span>Find Chargers Near Me</span>
          </button>

          {/* Secondary CTA: List Charger */}
          <Link
            to="/app/list-charger"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-zinc-200 hover:text-white font-medium text-sm sm:text-base transition-all hover:border-white/25 flex items-center justify-center gap-2.5"
          >
            <PlusCircle className="w-4 h-4 text-zinc-400" />
            <span>List Your Charger</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual: Spacious margin letting the artwork breathe */}
      <div className="mt-10 sm:mt-16 w-full">
        <HeroVisual />
      </div>

      {/* Continuous Seamless Infinite Marquee Strip */}
      <div className="w-full border-t border-white/[0.05] mt-10 sm:mt-14 pt-6 sm:pt-8 relative overflow-hidden">
        {/* Left and right edge gradient vignettes for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#080A09] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#080A09] to-transparent z-10" />

        {/* Infinite Scrolling Marquee Track */}
        <div className="animate-marquee items-center gap-8 sm:gap-14 py-1">
          {marqueeNetworks.map((net, idx) => (
            <div
              key={`${net.name}-${idx}`}
              className="flex items-baseline gap-2 flex-shrink-0 cursor-default group select-none"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                {net.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#8CF06B] font-mono tracking-wider">
                {net.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
