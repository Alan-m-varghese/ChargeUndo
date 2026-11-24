import React from 'react';
import { PlusCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AppProviderPlaceholder: React.FC = () => {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#8CF06B]/15 text-[#8CF06B] border border-[#8CF06B]/30 font-semibold uppercase">
            Provider Foundation
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white mt-2">Charger Provider Hub</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Route and role-gated access foundation for community charger hosts.
          </p>
        </div>

        <Link
          to="/app/list-charger"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Charger</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5 sm:p-6">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Active Listings</div>
          <div className="text-2xl font-bold text-white mt-2">1 Wallbox</div>
          <div className="text-xs text-emerald-400 mt-1">Ready to receive bookings</div>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5 sm:p-6">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Estimated Monthly Earnings</div>
          <div className="text-2xl font-bold text-[#8CF06B] mt-2">₹12,400</div>
          <div className="text-xs text-zinc-400 mt-1">Based on local demand</div>
        </div>

        <div className="bg-[#0D100E] border border-white/[0.08] rounded-2xl p-5 sm:p-6">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Commission Structure</div>
          <div className="text-2xl font-bold text-white mt-2">0% Early Host</div>
          <div className="text-xs text-zinc-400 mt-1">Direct instant UPI payouts</div>
        </div>
      </div>

      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white mb-2">Provider Modules Architecture</h3>
        <p className="text-xs text-zinc-400 mb-6">
          The following host workflows will be implemented in subsequent development phases:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          {[
            'Provider Dashboard & Live Analytics',
            'My Charger Listings Management',
            'Add & Edit Charger Hardware Configurations',
            'Booking Slot Approval & Auto-acceptance',
            'Earnings Tracker & UPI Settlement Receipts',
            'Driver Reviews & Host Rating System',
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-[#8CF06B] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
