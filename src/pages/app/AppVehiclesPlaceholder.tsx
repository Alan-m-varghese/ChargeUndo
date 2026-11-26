import React, { useState, useEffect } from 'react';
import { Car, Plus, Trash2, X, Zap } from 'lucide-react';
import { Vehicle, getStoredVehicles, saveStoredVehicles } from '../../types';

export const AppVehiclesPlaceholder: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    registration: '',
    batteryCapacity: '',
    connectorType: 'CCS2',
    maxChargeRate: '50 kW DC',
  });

  useEffect(() => {
    setVehicles(getStoredVehicles());
  }, []);

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newVehicle: Vehicle = {
      id: `v-${Date.now()}`,
      name: formData.name.trim(),
      registration: formData.registration.trim().toUpperCase() || 'KL-UNREGISTERED',
      batteryCapacity: formData.batteryCapacity.trim() || '40 kWh',
      connectorType: formData.connectorType,
      maxChargeRate: formData.maxChargeRate.trim() || '50 kW DC',
    };

    const updated = [...vehicles, newVehicle];
    setVehicles(updated);
    saveStoredVehicles(updated);
    setModalOpen(false);
    setFormData({
      name: '',
      registration: '',
      batteryCapacity: '',
      connectorType: 'CCS2',
      maxChargeRate: '50 kW DC',
    });
  };

  const handleDeleteVehicle = (id: string) => {
    const updated = vehicles.filter((v) => v.id !== id);
    setVehicles(updated);
    saveStoredVehicles(updated);
  };

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
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm transition cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Electric Vehicle</span>
        </button>
      </div>

      {/* Empty State when no vehicles registered */}
      {vehicles.length === 0 ? (
        <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-10 sm:p-14 text-center max-w-lg mx-auto my-12 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 mx-auto mb-4">
            <Car className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">No Vehicles Registered</h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            You haven't registered any electric vehicles yet. Add your EV to automatically highlight matching connector types (CCS2, Type 2, etc.) and battery specifications when discovering nearby chargers.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black text-xs font-semibold transition flex items-center gap-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Your Electric Vehicle</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.06] text-[#8CF06B] uppercase font-semibold">
                    {index === 0 ? 'Primary EV' : 'Secondary EV'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{vehicle.name}</h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1">{vehicle.registration}</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8CF06B]">
                    <Car className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    className="w-10 h-10 rounded-2xl bg-white/[0.02] hover:bg-red-500/10 border border-white/[0.06] hover:border-red-500/30 flex items-center justify-center text-zinc-500 hover:text-red-400 transition"
                    title="Remove Vehicle"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
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
      )}

      {/* Add Vehicle Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D100E] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-[#8CF06B]" />
                <span>Register Electric Vehicle</span>
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-zinc-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddVehicle} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Vehicle Make & Model *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tata Punch EV, MG ZS EV, Ioniq 5"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8CF06B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Registration Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. KL 07 CD 1234"
                  value={formData.registration}
                  onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8CF06B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Port Standard
                  </label>
                  <select
                    value={formData.connectorType}
                    onChange={(e) => setFormData({ ...formData, connectorType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8CF06B]"
                  >
                    <option value="CCS2">CCS2 (DC Fast)</option>
                    <option value="Type 2">Type 2 AC</option>
                    <option value="CHAdeMO">CHAdeMO</option>
                    <option value="GB/T">GB/T</option>
                    <option value="16A 3-Pin">16A Indian 3-Pin</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Battery Pack
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50.3 kWh"
                    value={formData.batteryCapacity}
                    onChange={(e) => setFormData({ ...formData, batteryCapacity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8CF06B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Max Charge Rate
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50 kW DC"
                  value={formData.maxChargeRate}
                  onChange={(e) => setFormData({ ...formData, maxChargeRate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#8CF06B]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Save Vehicle</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
