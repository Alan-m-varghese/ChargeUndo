import React, { useState } from 'react';
import { Mail, Phone, LogOut, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../types/auth';

export const AppProfilePlaceholder: React.FC = () => {
  const { user, logout, becomeProvider, switchRole } = useAuth();
  const navigate = useNavigate();
  const [roleMessage, setRoleMessage] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleRoleSwitch = (role: UserRole) => {
    switchRole(role);
    if (role === 'admin') {
      setRoleMessage('Switched to Administrator. Admin Console unlocked at /app/admin and added to sidebar.');
    } else if (role === 'provider') {
      setRoleMessage('Switched to Charger Provider. Host listing and earnings tools unlocked.');
    } else {
      setRoleMessage('Switched to EV Driver. Administrator console is now role-locked.');
    }
    setTimeout(() => setRoleMessage(null), 5000);
  };

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">User Profile</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Manage your personal information, roles, and unified account settings.
        </p>
      </div>

      <div className="bg-[#0D100E] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* User Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 border ${
                user?.isAdmin
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                  : 'bg-[#8CF06B]/20 border-[#8CF06B]/40 text-[#8CF06B]'
              }`}
            >
              {user?.name
                ? user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()
                : 'U'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">{user?.name}</h2>
                {user?.isAdmin && (
                  <span className="p-1 rounded-full bg-amber-500/20 text-amber-400" title="Administrator">
                    <Shield className="w-4 h-4" />
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <span
                  className={`text-xs font-mono px-2.5 py-0.5 rounded font-semibold border ${
                    user?.isAdmin
                      ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      : user?.isProvider
                      ? 'bg-[#8CF06B]/15 text-[#8CF06B] border-[#8CF06B]/30'
                      : 'bg-white/[0.06] text-zinc-300 border-white/[0.08]'
                  }`}
                >
                  {user?.isAdmin
                    ? 'ADMINISTRATOR'
                    : user?.isProvider
                    ? 'EV DRIVER & CHARGER PROVIDER'
                    : 'EV DRIVER'}
                </span>
                <span className="text-xs text-zinc-500 font-mono">ID: {user?.id}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/30 text-zinc-300 hover:text-red-400 text-xs font-medium transition flex items-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Account Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6 border-b border-white/[0.08]">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Email Address</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">{user?.email}</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Mobile Number</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">{user?.phone || '+91 98470 12345'}</div>
          </div>
        </div>

        {/* Unified Account Management */}
        <div className="py-6 border-b border-white/[0.08]">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            Unified Account Capabilities
          </h3>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-semibold text-white">Charger Provider Mode</span>
                {user?.isProvider ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    ENABLED
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    NOT ACTIVATED
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Allows listing private wallbox chargers, accepting neighbor bookings, and collecting instant UPI payouts.
              </p>
            </div>

            {!user?.isProvider ? (
              <button
                onClick={becomeProvider}
                className="px-5 py-2.5 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition flex-shrink-0"
              >
                Enable Provider Mode
              </button>
            ) : (
              <span className="text-xs text-emerald-400 flex items-center gap-1.5 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready to list</span>
              </span>
            )}
          </div>
        </div>

        {/* Development Role Switcher */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Role Testing Controls (Development Mode)
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Active: <strong className={user?.isAdmin ? 'text-amber-400' : user?.isProvider ? 'text-[#8CF06B]' : 'text-zinc-300'}>
                {user?.isAdmin ? 'ADMINISTRATOR' : user?.isProvider ? 'PROVIDER' : 'EV DRIVER'}
              </strong>
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => handleRoleSwitch('ev_owner')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition border ${
                !user?.isProvider && !user?.isAdmin
                  ? 'bg-white/15 text-white border-white/40 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                  : 'bg-white/[0.04] text-zinc-400 border-white/[0.08] hover:text-white'
              }`}
            >
              Test as EV Driver
            </button>
            <button
              onClick={() => handleRoleSwitch('provider')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition border ${
                user?.isProvider && !user?.isAdmin
                  ? 'bg-[#8CF06B]/20 text-[#8CF06B] border-[#8CF06B]/50 font-semibold shadow-[0_0_15px_rgba(140,240,107,0.15)]'
                  : 'bg-white/[0.04] text-zinc-400 border-white/[0.08] hover:text-white'
              }`}
            >
              Test as Charger Provider
            </button>
            <button
              onClick={() => handleRoleSwitch('admin')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition border ${
                user?.isAdmin
                  ? 'bg-amber-500/25 text-amber-400 border-amber-500/50 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-white/[0.04] text-zinc-400 border-white/[0.08] hover:text-white'
              }`}
            >
              Test as Administrator
            </button>
          </div>

          {/* Real-time Feedback Notification */}
          {roleMessage && (
            <div className="mt-3 p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8CF06B] flex-shrink-0" />
              <span>{roleMessage}</span>
            </div>
          )}

          {/* Dynamic Role Capability Callout */}
          {user?.isAdmin ? (
            <div className="mt-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Administrator Mode Is Active</div>
                  <p className="text-xs text-amber-300/80 mt-0.5">
                    Full system access unlocked. You have permission to view the Admin Console, review and approve host charger listings, and inspect the platform user directory.
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate('/app/admin')}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Open Admin Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : user?.isProvider ? (
            <div className="mt-5 p-5 rounded-2xl bg-[#8CF06B]/10 border border-[#8CF06B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Charger Provider Mode Is Active</div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  You can list your private charger with photos and GPS address, calculate earnings, and manage bookings.
                </p>
              </div>
              <button
                onClick={() => navigate('/app/list-charger')}
                className="px-5 py-2.5 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Manage / List Charger</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="mt-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
              <div>
                <span className="font-semibold text-white">Standard EV Driver Mode</span>
                <p className="mt-0.5">
                  You can browse stations, save favourites, and book charging slots. Administrator Console (/app/admin) is locked by role guard.
                </p>
              </div>
              <button
                onClick={() => navigate('/app/explore')}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Explore Stations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
