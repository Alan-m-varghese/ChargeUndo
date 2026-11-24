import React from 'react';

export const NetworkStandards: React.FC = () => {
  const networks = [
    { name: 'Tata Power', tag: 'EZ CHARGE' },
    { name: 'Zeon Charging', tag: 'SOUTH INDIA' },
    { name: 'Statiq', tag: 'FAST DC' },
    { name: 'Jio-bp pulse', tag: 'HIGHWAY' },
    { name: 'KSEB Soura', tag: 'KERALA' },
    { name: 'Ather Grid', tag: '2W & 4W' },
  ];

  const standards = ['CCS 2', 'Type 2 AC', 'Bharat AC-001', 'GB/T', 'ISO 15118'];

  return (
    <section className="border-y border-white/[0.06] bg-[#0B0E0C] py-8">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8CF06B] animate-pulse" />
          <span className="text-zinc-500 text-xs uppercase font-semibold tracking-widest whitespace-nowrap">
            Multi-Network Aggregation
          </span>
        </div>

        {/* Network Brands */}
        <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center opacity-80 hover:opacity-100 transition-opacity">
          {networks.map((net) => (
            <div key={net.name} className="flex items-baseline gap-1.5 group cursor-default">
              <span className="text-sm sm:text-base font-semibold tracking-tight text-zinc-300 group-hover:text-white transition">
                {net.name}
              </span>
              <span className="text-[10px] text-[#8CF06B] font-mono tracking-wider">
                {net.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Standards Tags */}
        <div className="hidden xl:flex items-center gap-3 text-xs text-zinc-500 font-mono">
          <span>Standards:</span>
          {standards.map((std, i) => (
            <span key={std} className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400">
              {std}
              {i < standards.length - 1 ? '' : ''}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
