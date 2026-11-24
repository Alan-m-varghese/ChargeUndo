import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Find a charger.',
      description:
        'Discover public charging networks and private community chargers nearby. View real-time availability across Kerala and highways throughout India.',
    },
    {
      number: '02',
      title: 'Compare your options.',
      description:
        'Compare charging speeds up to 350kW, connector types (CCS2, Type 2, GB/T), pricing tariffs (₹/kWh), and host ratings before you plug in.',
    },
    {
      number: '03',
      title: 'Charge and go.',
      description:
        'Navigate with direct turn-by-turn routing, reserve community charging slots, plug in, and complete payments seamlessly.',
    },
  ];

  return (
    <section className="py-14 sm:py-28 bg-[#080A09] relative" id="how-it-works">
      <div className="max-w-[1300px] mx-auto px-4 xs:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Three simple steps to<br />
              power your journey.
            </h2>
          </div>
          <p className="text-[#A0A5A1] text-xs xs:text-sm sm:text-base max-w-md leading-relaxed">
            From daily commutes in Kochi to road trips across southern corridors, CHARGE undo streamlines EV discovery into one effortless experience.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#111411] border border-white/[0.06] hover:border-[#8CF06B]/30 rounded-2xl p-5 sm:p-8 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-zinc-600 group-hover:text-[#8CF06B] font-mono transition-colors block mb-4 sm:mb-6">
                  {step.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>

                <p className="text-[#A0A5A1] text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Quick Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/app/explore"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[#8CF06B] transition-colors group"
          >
            <span>Explore live map &amp; station directory</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};