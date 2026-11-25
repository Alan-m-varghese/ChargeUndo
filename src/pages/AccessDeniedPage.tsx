import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AccessDeniedPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, becomeProvider } = useAuth();
  const state = location.state as { requiredRole?: string; from?: string } | null;

  const requiredRole = state?.requiredRole || 'admin';
  const roleTitle =
    requiredRole === 'admin'
      ? 'Administrator'
      : requiredRole === 'provider'
      ? 'Charger Provider'
      : 'Authorized User';

  const handleEnableProvider = () => {
    becomeProvider();
    if (state?.from) {
      navigate(state.from);
    } else {
      navigate('/app/list-charger');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Access Restricted
        </h1>

        <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
          The requested section requires <strong className="text-white">{roleTitle}</strong> permissions.
          Your current account is signed in as <span className="text-[#8CF06B] font-mono text-xs px-2 py-0.5 rounded bg-[#8CF06B]/10">{user?.primaryRole || 'Guest'}</span>.
        </p>

        {requiredRole === 'provider' && (
          <div className="mt-6">
            <button
              onClick={handleEnableProvider}
              className="w-full py-3 px-4 rounded-xl bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm flex items-center justify-center gap-2 transition"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Activate Host Provider Mode</span>
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <Link
            to="/app/explore"
            className="w-full py-3 px-6 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium text-sm transition flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
            <span>Return to Station Explorer</span>
          </Link>
          <Link
            to="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition"
          >
            Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};
