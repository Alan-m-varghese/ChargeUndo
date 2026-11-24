import React from 'react';
import { Calendar, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AppBookingsPlaceholder: React.FC = () => {
  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">My Bookings</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Review active charging sessions, upcoming reservations, and historical receipts.
        </p>
      </div>

      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 text-[#8CF06B]">
          <Calendar className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">No active or previous bookings</h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto mt-2 leading-relaxed">
          When you book a private host charger or reserve a public fast-charging gun, details and UPI receipts will appear here.
        </p>

        <Link
          to="/app/explore"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition"
        >
          <Compass className="w-4 h-4" />
          <span>Find a Station</span>
        </Link>
      </div>
    </div>
  );
};
