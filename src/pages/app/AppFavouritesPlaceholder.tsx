import React, { useState, useEffect } from 'react';
import { Heart, Compass, Zap, ArrowRight, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStoredFavourites, toggleFavourite, FavouriteStation } from '../../utils/favourites';
import { getGoogleMapsDirectionsUrl } from '../../utils/geolocation';

export const AppFavouritesPlaceholder: React.FC = () => {
  const [favourites, setFavourites] = useState<FavouriteStation[]>([]);

  const loadFavourites = () => {
    setFavourites(getStoredFavourites());
  };

  useEffect(() => {
    loadFavourites();

    const handleUpdate = () => {
      loadFavourites();
    };

    window.addEventListener('chargeundo_favourites_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('chargeundo_favourites_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleRemove = (fav: FavouriteStation) => {
    toggleFavourite(fav);
    loadFavourites();
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>My Favourites</span>
            {favourites.length > 0 && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#8CF06B]/20 text-[#8CF06B] border border-[#8CF06B]/30 font-semibold">
                {favourites.length} saved
              </span>
            )}
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Quickly access frequently visited charging stations and saved community hosts.
          </p>
        </div>

        {favourites.length > 0 && (
          <Link
            to="/app/explore"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-200 transition self-start sm:self-auto"
          >
            <Compass className="w-3.5 h-3.5 text-[#8CF06B]" />
            <span>Discover More Stations</span>
          </Link>
        )}
      </div>

      {favourites.length === 0 ? (
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-10 sm:p-14 text-center max-w-lg mx-auto my-12 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 text-[#8CF06B]">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">No favourite stations saved yet</h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Click the heart icon on any charging station while exploring to bookmark it here for fast one-tap navigation.
          </p>

          <Link
            to="/app/explore"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Stations</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {favourites.map((station) => {
            const hasPhoto = !!station.cover_image_url;
            const powerDisplay = station.charging_power_kw ? `${station.charging_power_kw} kW` : 'Standard AC';
            const directionsUrl = getGoogleMapsDirectionsUrl(station.latitude, station.longitude);

            return (
              <div
                key={station.id}
                className="bg-[#0D100E] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Photo banner / preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 select-none">
                    {hasPhoto ? (
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
                        <span className="text-xs font-medium text-zinc-400">Verified Station</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D100E] via-transparent to-black/60 pointer-events-none" />

                    {/* Power rating */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#8CF06B] font-semibold">
                      <Zap className="w-3 h-3" />
                      <span>{powerDisplay}</span>
                    </div>

                    {/* Unfavourite button on card banner */}
                    <button
                      onClick={() => handleRemove(station)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-red-500/40 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition"
                      title="Remove from favourites"
                      aria-label="Remove from favourites"
                    >
                      <Heart className="w-4 h-4 fill-red-500" />
                    </button>
                  </div>

                  {/* Content area */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-[#8CF06B] transition-colors">
                      {station.station_name}
                    </h3>

                    <div className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {station.address || `${station.city || 'Kerala'}, India`}
                    </div>

                    {station.provider_name && (
                      <div className="text-[11px] font-mono text-zinc-400 mt-2">
                        Operator: <span className="text-zinc-200">{station.provider_name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <Link
                    to={`/app/stations/${station.id}`}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
                    title="Open in Google Maps"
                  >
                    <Navigation className="w-3.5 h-3.5 fill-black" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
