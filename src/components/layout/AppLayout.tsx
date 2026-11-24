import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import {
  Compass,
  Heart,
  Calendar,
  Car,
  PlusCircle,
  User as UserIcon,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Shield,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AppLayout: React.FC = () => {
  const { user, logout, becomeProvider } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    {
      to: '/app/explore',
      label: 'Explore Stations',
      icon: Compass,
    },
    {
      to: '/app/favourites',
      label: 'My Favourites',
      icon: Heart,
    },
    {
      to: '/app/bookings',
      label: 'My Bookings',
      icon: Calendar,
    },
    {
      to: '/app/vehicles',
      label: 'My Vehicles',
      icon: Car,
    },
    {
      to: '/app/list-charger',
      label: 'List Your Charger',
      icon: PlusCircle,
      badge: user?.isProvider ? 'Host' : 'Earn',
    },
    ...(user?.isAdmin
      ? [
          {
            to: '/app/admin',
            label: 'Admin Console',
            icon: Shield,
            badge: 'Admin',
            isAdminItem: true,
          },
        ]
      : []),
    {
      to: '/app/profile',
      label: 'User Profile',
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080A09] text-white flex flex-col md:flex-row selection:bg-[#8CF06B] selection:text-black">
      {/* Mobile Top Header */}
      <header className="md:hidden bg-[#0D100E] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center tracking-tight">
          <span className="text-lg font-black text-white tracking-tight uppercase">CHARGE</span>
          <span className="text-lg font-medium text-[#8CF06B] tracking-tight lowercase ml-1">undo</span>
        </Link>

        <div className="flex items-center gap-2">
          {user?.isAdmin && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1">
              <Shield className="w-2.5 h-2.5" />
              <span>ADMIN</span>
            </span>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-white"
            aria-label="Toggle App Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (Desktop Persistent & Mobile Drawer) */}
      <aside
        className={`fixed md:sticky top-0 bottom-0 left-0 z-50 w-72 bg-[#0D100E] border-r border-white/[0.08] flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 h-screen ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/[0.06]">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center tracking-tight group focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl font-black text-white tracking-tight uppercase">CHARGE</span>
              <span className="text-xl font-medium text-[#8CF06B] tracking-tight lowercase ml-1">undo</span>
            </Link>

            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-400 border border-white/[0.08]">
              App
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <Link
              to="/"
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition"
            >
              <span>Public Website</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </Link>

            {user?.isAdmin && (
              <NavLink
                to="/app/admin"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[11px] font-mono flex items-center gap-1 px-2 py-0.5 rounded border transition ${
                    isActive
                      ? 'border-[#8CF06B] text-[#8CF06B] bg-[#8CF06B]/10'
                      : 'border-white/10 text-zinc-400 hover:text-white'
                  }`
                }
              >
                <Shield className="w-3 h-3 text-amber-400" />
                <span>Admin</span>
              </NavLink>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto no-scrollbar">
          <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isAdminItem = (item as { isAdminItem?: boolean }).isAdminItem;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all group ${
                    isActive
                      ? isAdminItem
                        ? 'bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/35 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                        : 'bg-[#8CF06B]/15 text-[#8CF06B] font-semibold border border-[#8CF06B]/30 shadow-[0_0_15px_rgba(140,240,107,0.1)]'
                      : isAdminItem
                      ? 'text-amber-400/80 hover:text-amber-300 hover:bg-amber-500/10 border border-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isAdminItem ? 'text-amber-400 group-hover:text-amber-300' : 'group-hover:text-white'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                      isAdminItem
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : user?.isProvider
                        ? 'bg-[#8CF06B]/20 text-[#8CF06B]'
                        : 'bg-white/[0.08] text-zinc-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}

          {/* Provider Callout Card if not yet registered as provider */}
          {!user?.isProvider && (
            <div className="mt-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] relative overflow-hidden group">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#8CF06B]/10 flex items-center justify-center text-[#8CF06B] flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Own a charger?</div>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                    Earn up to ₹22,000/mo sharing your private wallbox.
                  </p>
                  <button
                    onClick={() => {
                      becomeProvider();
                      navigate('/app/list-charger');
                      setMobileMenuOpen(false);
                    }}
                    className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#8CF06B] hover:text-[#9ef581] transition"
                  >
                    <span>Activate Host Mode</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* User Footer Profile & Logout */}
        <div className="p-4 border-t border-white/[0.06] bg-black/20">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#8CF06B]/20 border border-[#8CF06B]/40 flex items-center justify-center text-[#8CF06B] font-bold text-xs flex-shrink-0">
                {user?.name
                  ? user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()
                  : 'U'}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white truncate">{user?.name || 'EV Driver'}</div>
                <div className="text-[10px] text-zinc-400 truncate">{user?.email}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-white/[0.05] transition"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {user?.isAdmin && (
          <div className="bg-amber-500/10 border-b border-amber-500/25 px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-400">
              <Shield className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="font-semibold hidden sm:inline">ADMINISTRATOR PRIVILEGES ACTIVE</span>
              <span className="font-semibold sm:hidden">ADMIN MODE</span>
              <span className="text-zinc-400 hidden lg:inline">— Platform oversight, station directory & host approvals unlocked</span>
            </div>
            <Link
              to="/app/admin"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition flex items-center gap-1"
            >
              <span>Admin Console</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};
