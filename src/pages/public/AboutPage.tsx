import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Globe, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8CF06B]/10 border border-[#8CF06B]/25 text-xs text-[#8CF06B] font-mono tracking-wider">
          OUR MISSION
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold text-center tracking-tight text-white mb-6">
        Unifying Electric Mobility Across India.
      </h1>

      <p className="text-base sm:text-xl text-[#A0A5A1] text-center max-w-3xl mx-auto leading-relaxed mb-16">
        CHARGE undo bridges India's fragmented charging networks and unlocks peer-to-peer neighborhood charging, starting in Kerala.
      </p>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-7 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#8CF06B]/10 flex items-center justify-center text-[#8CF06B] mb-5">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Network Agnostic</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Eliminating the need to juggle 8 different apps. Discover Tata Power, Zeon, Statiq, Jio-bp, and KSEB chargers on one unified map.
          </p>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-7 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#8CF06B]/10 flex items-center justify-center text-[#8CF06B] mb-5">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Community Powered</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Over 80% of EV charging happens at home. We empower private EV owners and villas to share their chargers safely and earn passive revenue.
          </p>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-7 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#8CF06B]/10 flex items-center justify-center text-[#8CF06B] mb-5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Verified Reliability</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Crowdsourced uptime reports, authentic connector ratings, and verified electrical groundings give EV drivers complete peace of mind on highways.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to experience frictionless charging?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mb-8">
            Explore stations near you or register your home wallbox today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app/explore"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition shadow-[0_0_20px_rgba(140,240,107,0.3)] flex items-center justify-center gap-2"
            >
              <span>Explore Stations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white font-medium text-sm transition"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
