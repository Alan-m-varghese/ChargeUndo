import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export const LocationSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const popularCities = ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Bengaluru'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setHasSearched(true);
  };

  const handleSelectCity = (city: string) => {
    setSearchTerm(city);
    setHasSearched(true);
  };

  return (
    <section className="pt-10 sm:pt-16 pb-6 sm:pb-8 bg-[#080A09] relative" id="search">
      <div className="max-w-[760px] mx-auto px-6 lg:px-8 text-center">
        {/* Clean, Confident Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Find a station near you.
        </h2>
        <p className="text-[#A0A5A1] text-sm sm:text-base mt-2.5 max-w-md mx-auto leading-relaxed">
          Search by city, highway corridor, or PIN code across Kerala and India.
        </p>

        {/* Uber-Inspired Minimalist Search Bar: Single seamless horizontal pill on all devices */}
        <form
          onSubmit={handleSearch}
          className="mt-6 sm:mt-7 flex items-center bg-[#111411] border border-white/[0.1] hover:border-white/[0.2] focus-within:border-[#8CF06B] rounded-full p-1.5 sm:p-2 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
        >
          <div className="pl-3 sm:pl-4 pr-2 text-zinc-500 flex-shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8CF06B]" />
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter city, location or PIN code"
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none font-normal"
          />

          <button
            type="submit"
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 flex-shrink-0 transition-all shadow-[0_0_15px_rgba(140,240,107,0.3)] active:scale-95"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            <span className="hidden xs:inline">Search</span>
          </button>
        </form>

        {/* Popular Locations: Minimalist, clean pills without clutter */}
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 font-medium mr-1">Popular:</span>
          {popularCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => handleSelectCity(city)}
              className="text-xs text-zinc-400 hover:text-white px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors active:scale-95"
            >
              {city}
            </button>
          ))}
        </div>

        {/* Clean Search Feedback Bar */}
        {hasSearched && searchTerm && (
          <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#111411] border border-[#8CF06B]/30 flex items-center justify-between text-xs sm:text-sm text-zinc-200">
            <span className="truncate text-left">
              Stations available in <strong className="text-white">{searchTerm}</strong>
            </span>
            <Link
              to="/app/explore"
              className="text-[#8CF06B] hover:underline font-semibold ml-4 flex-shrink-0 flex items-center gap-1"
            >
              <span>View Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};