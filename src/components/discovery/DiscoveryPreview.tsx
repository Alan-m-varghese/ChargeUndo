import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export const DiscoveryPreview: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'public' | 'community'>('all');

  const sampleStations = [
    {
      id: 'st-1',
      name: 'Zeon Hub - Edappally Toll',
      city: 'Kochi, Kerala',
      type: 'public',
      network: 'Zeon Charging',
      powerKw: 120,
      connectors: ['Dual CCS 2'],
      rate: '₹19/kWh',
      availability: '3 of 4 Stalls Free',
      statusColor: 'text-[#8CF06B]',
      rating: 4.8,
      distance: '1.2 km away',
    },
    {
      id: 'st-2',
      name: 'Kakkanad Home Charger (Rahul M.)',
      city: 'Kochi, Kerala',
      type: 'community',
      network: 'Private Host',
      powerKw: 11,
      connectors: ['Type 2 AC'],
      rate: '₹13/kWh',
      availability: 'Available Now',
      statusColor: 'text-[#39DCA8]',
      rating: 4.9,
      distance: '2.5 km away',
    },
    {
      id: 'st-3',
      name: 'Tata Power EZ - Kazhakkoottam',
      city: 'Thiruvananthapuram, Kerala',
      type: 'public',
      network: 'Tata Power',
      powerKw: 60,
      connectors: ['CCS 2', 'Bharat DC-001'],
      rate: '₹18.5/kWh',
      availability: '2 of 2 Free',
      statusColor: 'text-[#8CF06B]',
      rating: 4.6,
      distance: '5.1 km away',
    },
  ];

  const filteredStations = selectedTab === 'all'
    ? sampleStations
    : sampleStations.filter(s => s.type === selectedTab);

  return (
    <section className="pt-6 sm:pt-8 pb-16 sm:pb-24 bg-[#080A09] relative">
      <div className="max-w-[1300px] mx-auto px-4 xs:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4 sm:gap-5">
          <div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Compare stations &amp; private points.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#111411] border border-white/[0.06] p-1 rounded-full overflow-x-auto no-scrollbar max-w-full self-start md:self-auto">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex-shrink-0 ${
                selectedTab === 'all'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedTab('public')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex-shrink-0 ${
                selectedTab === 'public'
                  ? 'bg-[#8CF06B] text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Public Networks
            </button>
            <button
              onClick={() => setSelectedTab('community')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex-shrink-0 ${
                selectedTab === 'community'
                  ? 'bg-[#39DCA8] text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Private Community
            </button>
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="bg-[#111411] border border-white/[0.06] hover:border-white/[0.15] rounded-2xl p-4 sm:p-6 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                      station.type === 'community'
                        ? 'border-[#39DCA8]/30 bg-[#39DCA8]/10 text-[#39DCA8]'
                        : 'border-[#8CF06B]/30 bg-[#8CF06B]/10 text-[#8CF06B]'
                    }`}
                  >
                    {station.network}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {station.rating} / 5.0
                  </span>
                </div>

                {/* Station Name */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#8CF06B] transition-colors">
                  {station.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#A0A5A1] mt-1">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{station.city}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="flex-shrink-0">{station.distance}</span>
                </div>

                {/* Specs Box */}
                <div className="mt-4 grid grid-cols-2 gap-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">OUTPUT POWER</span>
                    <p className="font-semibold text-white mt-0.5 font-mono">{station.powerKw} kW</p>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">TARIFF</span>
                    <p className="font-semibold text-[#8CF06B] mt-0.5">{station.rate}</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {station.connectors.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] text-[10px] sm:text-[11px] text-zinc-300 font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Status & CTA */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className={`text-xs font-medium ${station.statusColor}`}>
                  {station.availability}
                </span>

                <Link
                  to="/app/explore"
                  className="text-xs font-semibold text-white hover:text-[#8CF06B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Bar */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/app/explore"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs sm:text-sm transition-all"
          >
            <span>View all stations in Kerala &amp; across India</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};