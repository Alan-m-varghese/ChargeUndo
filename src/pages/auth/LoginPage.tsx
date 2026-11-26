import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { isValidEmail } from '../../utils/validation';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Read return destination from state (passed by ProtectedRoute) or default to /app/explore
  const redirectDestination =
    (location.state as { from?: { pathname: string; search?: string } })?.from?.pathname ||
    '/app/explore';

  const validateForm = (): boolean => {
    const emailTrimmed = email.trim().toLowerCase();
    if (!emailTrimmed) {
      setError('Please enter your email address.');
      return false;
    }
    if (!isValidEmail(emailTrimmed)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!password) {
      setError('Please enter your password.');
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
      const result = await login({ email, password, rememberMe });
      if (result.success) {
        navigate(redirectDestination, { replace: true });
      } else {
        setError(result.error || 'Failed to sign in. Please verify your credentials.');
      }
    } catch {
      setError('An unexpected error occurred during sign in. Please try again.');
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

      {/* Main Login Card Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-14">
        <div className="w-full max-w-[480px] bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle electric ambient glow at the top */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8CF06B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading and Subtitle */}
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Welcome back.
            </h1>
            <p className="mt-2 text-sm text-[#A0A5A1]">
              Sign in to continue your charging journey.
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Email Field */}
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

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                >
                  PASSWORD
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-[#8CF06B] hover:underline transition-all"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3.5 pr-11 rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8CF06B] focus:ring-1 focus:ring-[#8CF06B] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center pt-1">
              <label className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-black/50 border-white/20 text-[#8CF06B] focus:ring-0 checked:bg-[#8CF06B] cursor-pointer"
                />
                <span>Remember me on this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(140,240,107,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-xs sm:text-sm text-[#A0A5A1] relative z-10">
            Don't have an account?{' '}
            <Link
              to="/register"
              state={location.state}
              className="text-white hover:text-[#8CF06B] font-semibold underline underline-offset-4 transition-colors"
            >
              Sign Up
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
