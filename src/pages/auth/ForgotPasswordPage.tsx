import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 400));
    setIsSubmitting(false);
    setSubmitted(true);
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
          to="/login"
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Login</span>
        </Link>
      </div>

      {/* Main Card Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-14">
        <div className="w-full max-w-[480px] bg-[#0D100E] border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle electric ambient glow at the top */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8CF06B]/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            /* Confirmation State */
            <div className="text-center relative z-10 py-2">
              <div className="w-14 h-14 rounded-2xl bg-[#8CF06B]/10 border border-[#8CF06B]/30 flex items-center justify-center mx-auto mb-6 text-[#8CF06B] shadow-[0_0_20px_rgba(140,240,107,0.2)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Check your inbox.
              </h1>

              <p className="mt-3 text-sm text-[#A0A5A1] leading-relaxed">
                If an account exists for <strong className="text-white font-medium">{email}</strong>, you will receive password reset instructions shortly.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="w-full py-4 px-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(140,240,107,0.3)] transition"
                >
                  <span>Return to Login</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                  }}
                  className="text-xs text-zinc-400 hover:text-white transition mt-2"
                >
                  Try another email address
                </button>
              </div>
            </div>
          ) : (
            /* Reset Request Form */
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Reset your password.
                </h1>
                <p className="mt-2 text-sm text-[#A0A5A1]">
                  Enter your email address and we'll send you a password recovery link.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-4 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(140,240,107,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending link...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Recovery Link</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-7 text-center text-xs sm:text-sm text-[#A0A5A1]">
                Remember your password?{' '}
                <Link
                  to="/login"
                  className="text-white hover:text-[#8CF06B] font-semibold underline underline-offset-4 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer minimal notice */}
      <div className="py-4 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} CHARGE undo. All rights reserved.
      </div>
    </div>
  );
};
