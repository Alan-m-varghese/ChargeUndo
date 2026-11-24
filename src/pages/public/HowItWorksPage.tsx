import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8CF06B]/10 border border-[#8CF06B]/25 text-xs text-[#8CF06B] font-mono tracking-wider">
          PLATFORM ARCHITECTURE
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold text-center tracking-tight text-white mb-6">
        How CHARGE undo Works
      </h1>

      <p className="text-base sm:text-xl text-[#A0A5A1] text-center max-w-3xl mx-auto leading-relaxed mb-16">
        A seamless two-sided marketplace designed for EV drivers and neighborhood host providers.
      </p>

      {/* For Drivers Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8CF06B]/15 text-[#8CF06B] font-semibold">
            FOR EV DRIVERS
          </span>
          <h2 className="text-2xl font-bold text-white">Three steps to seamless energy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8CF06B] font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">Search & Filter</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Find highway fast DC chargers or cozy residential wallboxes based on your vehicle's connector type and current battery percentage.
            </p>
          </div>

          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8CF06B] font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">Reserve & Navigate</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Lock in your charging time slot in advance to avoid queues. Receive turn-by-turn navigation directly to the private driveway or charging bay.
            </p>
          </div>

          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8CF06B] font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">Plug & UPI Pay</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Scan the charger QR code to initiate charging. Pay automatically via standard UPI apps (Google Pay, PhonePe, Paytm) upon session completion.
            </p>
          </div>
        </div>
      </div>

      {/* For Hosts Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.08] text-zinc-300 font-semibold">
            FOR CHARGER HOSTS
          </span>
          <h2 className="text-2xl font-bold text-white">Turn your idle driveway into an energy asset</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">List Your Wallbox</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Register your standard 7.4 kW or 11 kW home charger in under 5 minutes. Set your available hours and driveway entry instructions.
            </p>
          </div>

          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">Set Custom Rates</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Choose your tariff per kWh or per hour. Cover your electricity costs and earn healthy margins with zero early platform commission fees.
            </p>
          </div>

          <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">Instant UPI Settlements</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Earnings are credited directly to your registered UPI ID immediately after each session concludes. No lengthy payout delays.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Get started in 60 seconds
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            Create your account to explore nearby stations or activate host mode.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition flex items-center justify-center gap-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/app/explore"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white font-medium text-sm transition"
            >
              Explore Stations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
