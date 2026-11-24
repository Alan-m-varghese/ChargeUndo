import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, ArrowRight } from 'lucide-react';

export const CommunityCharging: React.FC = () => {
  const hostPerks = [
    {
      title: 'Monetize Idle Infrastructure',
      desc: 'Turn your private residential or workplace charger into recurring income while you are away or overnight.',
    },
    {
      title: 'Complete Schedule Control',
      desc: 'Choose your own operating hours, set hourly tariffs or unit rates, and accept bookings that suit your routine.',
    },
    {
      title: 'Verified EV Driver Network',
      desc: 'Every driver on CHARGE undo is verified. Enjoy safe charging sessions backed by direct UPI settlements.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0C100D] border-t border-white/[0.06] relative overflow-hidden" id="community">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#8CF06B]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Headline, Description & Perks */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-tight">
                Have an EV charger?<br />
                <span className="text-[#8CF06B]">Put it to work.</span>
              </h2>

              <p className="text-[#A0A5A1] text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
                List your private charging point and make it available to EV owners in your area.
                Support your local EV community while offsetting your electricity bill.
              </p>
            </div>

            {/* Host Perks List */}
            <div className="space-y-6 pt-1">
              {hostPerks.map((perk, idx) => (
                <div key={idx} className="border-l-2 border-[#8CF06B]/40 pl-5">
                  <h4 className="text-base font-semibold text-white">{perk.title}</h4>
                  <p className="text-sm text-[#A0A5A1] mt-1 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/app/list-charger"
                className="px-8 py-3.5 sm:py-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(140,240,107,0.35)] transition-all hover:scale-[1.02] active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span>List Your Charger</span>
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 sm:py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-zinc-300 hover:text-white font-medium text-sm sm:text-base transition-all text-center"
              >
                Learn Host Requirements
              </Link>
            </div>
          </div>

          {/* Right Column: Breathable Earnings Preview Card (Preserving Exact Layout with Generous Spacing) */}
          <div className="lg:col-span-6">
            <div className="bg-[#111613] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="pb-5 sm:pb-6 border-b border-white/[0.07]">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Estimated Monthly Earnings
                </h3>
              </div>

              {/* Earnings Big Number: Breathable margins */}
              <div className="my-8 sm:my-10 text-center sm:text-left">
                <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight flex flex-wrap items-baseline justify-center sm:justify-start gap-2">
                  <span>₹8,500</span>
                  <span className="text-zinc-400 text-lg sm:text-xl font-normal">to ₹22,000</span>
                  <span className="text-xs sm:text-sm text-zinc-500 font-mono">/ mo</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                  Based on 3 to 5 daily charging sessions using standard 7.4 kW or 11 kW AC Wallboxes.
                </p>
              </div>

              {/* Feature Cards Inside: Spacious padding & gap */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">
                    PAYOUT
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Instant UPI Direct
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">
                    COMMISSION
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#8CF06B]">
                    0% Early Host Fee
                  </p>
                </div>
              </div>

              {/* Host Compatibility Specifications: Breathable padding & line-height */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#080B09] border border-white/[0.05] text-xs sm:text-sm text-zinc-400 mb-8 sm:mb-10">
                <div className="font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  HARDWARE COMPATIBILITY
                </div>
                <p className="leading-relaxed">
                  Compatible with standard 3.3 kW (16A socket), 7.4 kW, 11 kW, and 22 kW Type 2 wallboxes installed in home driveways, villas, and commercial parking.
                </p>
              </div>

              {/* Bottom Minimal Bar */}
              <div className="pt-5 sm:pt-6 border-t border-white/[0.07] flex items-center justify-between">
                <span className="text-xs sm:text-sm text-zinc-400">Setup takes under 5 mins</span>
                <Link
                  to="/app/list-charger"
                  className="text-xs sm:text-sm font-semibold text-[#8CF06B] hover:text-[#a5fa8a] flex items-center gap-1.5 group transition-colors"
                >
                  <span>Start listing</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};