import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();

  const [accountType, setAccountType] = useState<'ev_owner' | 'provider'>('ev_owner');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preserve redirect target or default to explore
  const redirectDestination =
    (location.state as { from?: { pathname: string; search?: string } })?.from?.pathname ||
    '/app/explore';

  const validateForm = (): boolean => {
    if (!name.trim()) {
      setError('Please enter your full name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    const phoneClean = phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (!acceptTerms) {
      setError('You must accept the Terms and Conditions.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await register({
        name,
        email,
        phone,
        password,
        confirmPassword,
        accountType,
        acceptTerms,
      });

      if (result.success) {
        navigate(redirectDestination, { replace: true });
      } else {
        setError(result.error || 'Failed to create account. Please try again.');
      }
    } catch {
      setError('An unexpected error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080A09] text-white flex flex-col justify-between selection:bg-[#8CF06B] selection:text-black">
      {/* Top Bar with brand logo */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
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

        <Link
          to="/"
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Back to Website
        </Link>
      </div>

      {/* Main Register Card Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-14">
        <div className="w-full max-w-[520px] bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle electric ambient glow at the top */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8CF06B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading and Subtitle */}
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Create your account.
            </h1>
            <p className="mt-2 text-sm text-[#A0A5A1]">
              Join India's unified EV charging and community host network.
            </p>
          </div>

          {/* Earlier Account Type Selector Cards - Cleaned of unnecessary text and emojis */}
          <div className="mb-7 relative z-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              PRIMARY ROLE
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {/* EV Owner Card */}
              <button
                type="button"
                onClick={() => setAccountType('ev_owner')}
                className={`py-3.5 px-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  accountType === 'ev_owner'
                    ? 'border-[#8CF06B] bg-[#8CF06B]/10 text-white shadow-[0_0_15px_rgba(140,240,107,0.15)]'
                    : 'border-white/[0.08] bg-black/40 text-zinc-400 hover:border-white/20'
                }`}
              >
                <span className="text-sm font-semibold text-white">EV Owner</span>
                {accountType === 'ev_owner' && (
                  <span className="w-2 h-2 rounded-full bg-[#8CF06B] shadow-[0_0_6px_#8CF06B]" />
                )}
              </button>

              {/* Charger Provider Card */}
              <button
                type="button"
                onClick={() => setAccountType('provider')}
                className={`py-3.5 px-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  accountType === 'provider'
                    ? 'border-[#8CF06B] bg-[#8CF06B]/10 text-white shadow-[0_0_15px_rgba(140,240,107,0.15)]'
                    : 'border-white/[0.08] bg-black/40 text-zinc-400 hover:border-white/20'
                }`}
              >
                <span className="text-sm font-semibold text-white">Charger Provider</span>
                {accountType === 'provider' && (
                  <span className="w-2 h-2 rounded-full bg-[#8CF06B] shadow-[0_0_6px_#8CF06B]" />
                )}
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Registration Form - Earlier structure with spacious, breathable margins */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
              >
                FULL NAME
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Arjun Nair"
                autoComplete="name"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
              />
            </div>

            {/* Email and Mobile Number (2 columns with generous gap) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  MOBILE NUMBER
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 select-none">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98470 12345"
                    autoComplete="tel"
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Password and Confirm Password (2 columns with generous gap) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    autoComplete="new-password"
                    required
                    className="w-full px-4 py-3.5 pr-10 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="new-password"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
                />
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-2.5 text-xs text-zinc-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 rounded bg-black/50 border-white/20 text-[#8CF06B] focus:ring-0 checked:bg-[#8CF06B] cursor-pointer"
                />
                <span>
                  I accept the{' '}
                  <Link to="/terms-and-conditions" target="_blank" className="text-white underline hover:text-[#8CF06B]">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" target="_blank" className="text-white underline hover:text-[#8CF06B]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Earlier Green CTA Button with Arrow */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(140,240,107,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Link back to Login */}
          <div className="mt-8 text-center text-xs sm:text-sm text-[#A0A5A1] relative z-10">
            Already have an account?{' '}
            <Link
              to="/login"
              state={location.state}
              className="text-white hover:text-[#8CF06B] font-semibold underline underline-offset-4 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer minimal notice */}
      <div className="py-4 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} CHARGE undo. All rights reserved.
      </div>
    </div>
  );
};
