import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, LogOut, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A09]/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/40'
          : 'bg-[#080A09]/60 backdrop-blur-sm border-b border-white/[0.03]'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 xs:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center tracking-tight focus:outline-none group"
          aria-label="CHARGE undo Home"
        >
          <span className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
            CHARGE
          </span>
          <span className="text-xl sm:text-2xl font-medium text-[#8CF06B] tracking-tight lowercase ml-1">
            undo
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[14px]">
          <Link
            to="/app/explore"
            className="text-zinc-300 hover:text-white font-medium transition-colors hover:scale-105 transform duration-150"
          >
            Explore
          </Link>
          <Link
            to="/how-it-works"
            className="text-zinc-400 hover:text-white font-medium transition-colors hover:scale-105 transform duration-150"
          >
            How It Works
          </Link>
          <Link
            to="/app/list-charger"
            className="text-zinc-400 hover:text-white font-medium transition-colors hover:scale-105 transform duration-150"
          >
            List Your Charger
          </Link>
          <Link
            to="/about"
            className="text-zinc-400 hover:text-white font-medium transition-colors hover:scale-105 transform duration-150"
          >
            About
          </Link>
        </nav>

        {/* Right Actions: Login & Sign Up or Authenticated App Link (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link
                to="/app/profile"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-zinc-300 hover:text-white hover:border-white/20 transition"
              >
                <div className="w-5 h-5 rounded-full bg-[#8CF06B]/20 text-[#8CF06B] flex items-center justify-center font-bold text-[10px]">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
                <span className="truncate max-w-[100px]">{user?.name}</span>
              </Link>
              <Link
                to="/app/explore"
                className="px-4 py-2 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-xs transition shadow-[0_0_15px_rgba(140,240,107,0.25)] flex items-center gap-1.5"
              >
                <span>Go to App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-zinc-400 hover:text-red-400 transition"
                title="Log Out"
                aria-label="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm text-zinc-300 hover:text-white font-medium transition-colors rounded-full hover:bg-white/[0.05]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-sm flex items-center gap-1.5"
              >
                <span>Sign Up</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button & Quick Near Me */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/app/explore?mode=nearby"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#8CF06B]/15 hover:bg-[#8CF06B]/25 border border-[#8CF06B]/30 text-[#8CF06B] text-xs font-semibold"
            title="Find Chargers Near Me"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8CF06B]" />
            <span>Near Me</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-white active:scale-95 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D0B]/98 backdrop-blur-xl border-b border-white/[0.08] px-5 py-5 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            <Link
              to="/app/explore"
              className="px-3.5 py-2.5 text-base text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl transition font-medium"
            >
              Explore Charging Stations
            </Link>
            <Link
              to="/how-it-works"
              className="px-3.5 py-2.5 text-base text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition font-medium"
            >
              How It Works
            </Link>
            <Link
              to="/app/list-charger"
              className="px-3.5 py-2.5 text-base text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition font-medium"
            >
              List Your Charger
            </Link>
            <Link
              to="/about"
              className="px-3.5 py-2.5 text-base text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition font-medium"
            >
              About
            </Link>
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2.5">
            {isAuthenticated ? (
              <>
                <Link
                  to="/app/explore"
                  className="w-full text-center py-2.5 text-sm font-semibold bg-[#8CF06B] text-black rounded-full hover:bg-[#9ef581] transition shadow-[0_0_15px_rgba(140,240,107,0.3)]"
                >
                  Go to App ({user?.name})
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-center py-2 text-xs text-zinc-400 hover:text-red-400 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center py-2.5 text-sm text-zinc-300 border border-white/[0.1] rounded-full hover:bg-white/[0.05] transition font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center py-2.5 text-sm font-semibold bg-[#8CF06B] text-black rounded-full hover:bg-[#9ef581] transition shadow-[0_0_15px_rgba(140,240,107,0.3)]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
