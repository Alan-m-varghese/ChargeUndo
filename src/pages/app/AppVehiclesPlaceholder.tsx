import React from 'react';
import { Car, Plus } from 'lucide-react';

export const AppVehiclesPlaceholder: React.FC = () => {
  const sampleVehicles = [
    {
      id: 'v-1',
      name: 'Tata Nexon EV Max',
      registration: 'KL 07 CD 4488',
      batteryCapacity: '40.5 kWh',
      connectorType: 'CCS2 / Type 2 AC',
      maxChargeRate: '50 kW DC',
    },
  ];

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">My Vehicles</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Manage your registered electric vehicles and compatible charging ports.
          </p>
        </div>

        <button
          onClick={() => alert('Vehicle registration modal will open here.')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Electric Vehicle</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.06] text-[#8CF06B] uppercase font-semibold">
                  Primary EV
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{vehicle.name}</h3>
                <div className="text-xs font-mono text-zinc-400 mt-1">{vehicle.registration}</div>
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8CF06B]">
                <Car className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-5 border-t border-white/[0.06] text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Battery</div>
                <div className="font-semibold text-white mt-1 text-sm">{vehicle.batteryCapacity}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Port</div>
                <div className="font-semibold text-white mt-1 text-sm">{vehicle.connectorType}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Max DC</div>
                <div className="font-semibold text-[#8CF06B] mt-1 text-sm">{vehicle.maxChargeRate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
