import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [prototypeErrorActive, setPrototypeErrorActive] = useState(false);
  const {onLoginSubmit ,register,errors,isSubmitting , handleSubmit} = useAuth();

  const togglePrototypeError = () => {
    if (!prototypeErrorActive) {
      setError('root', {
        type: 'manual',
        message: 'Authentication failed: Invalid credentials or network anomaly.',
      });
      setError('password', {
        type: 'manual',
        message: 'Invalid password. 2 attempts remaining before temporary lockout.',
      });
      setPrototypeErrorActive(true);
    } else {
      clearErrors();
      setPrototypeErrorActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-[#dfe2f1] font-['Plus_Jakarta_Sans',sans-serif] relative overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Emerald radial glow on left */}
        <div className="absolute -top-[15%] left-[5%] w-[620px] h-[620px] rounded-full bg-emerald-500/10 blur-[130px]" />
        {/* Cyan / deep emerald ambient glow */}
        <div className="absolute top-[40%] right-[10%] w-[580px] h-[580px] rounded-full bg-teal-500/[0.07] blur-[140px]" />
        <div className="absolute -bottom-[20%] left-[30%] w-[650px] h-[650px] rounded-full bg-[#10b981]/[0.05] blur-[150px]" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-10 w-full border-b border-white/[0.06] backdrop-blur-md bg-[#0b0f19]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 border border-emerald-500/30 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-400" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="15" rx="3" />
                <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                <circle cx="17" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center">
              Fin<span className="text-emerald-400">Mate</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-300">
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#support" className="hover:text-emerald-400 transition-colors">Support</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <Link
              to="/register"
              className="text-sm font-medium px-4 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Value Proposition & Visual Status Cards */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wider uppercase w-fit shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ALGORITHMIC FINANCIAL CO-PILOT
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12]">
            <span className="text-white block">Understand your</span>
            <span className="text-white block">spending.</span>
            <span className="text-[#10B981] block mt-1">Take control of your</span>
            <span className="text-[#10B981] block">money.</span>
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
            Sovereign private-banking grade oversight driven by autonomous forecasting models. Real-time cashflow trajectory without cognitive friction.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Bank-grade 256-bit encryption</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-medium">
              <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <span>AI-powered real-time forecasting</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>SOC2 Type II Certified</span>
            </div>
          </div>

          {/* Monthly Savings Trajectory Card */}
          <div className="pt-2 max-w-xl">
            <div className="rounded-xl border border-white/[0.08] bg-[#111726]/80 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M14 7h7v7" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white tracking-tight">Monthly Savings Trajectory</h2>
                    <p className="text-xs text-gray-400 mt-0.5">AI Projecting +18.4% allocation</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.25)]">
                  <span>&uarr;</span>
                  <span>+$1,240.00</span>
                </div>
              </div>

              {/* Segmented allocation bars */}
              <div className="grid grid-cols-7 gap-2 my-4">
                <div className="h-7 rounded-md bg-[#192233]" />
                <div className="h-7 rounded-md bg-[#192233]" />
                <div className="h-7 rounded-md bg-[#192233]" />
                <div className="h-7 rounded-md bg-[#192233]" />
                <div className="h-7 rounded-md bg-[#1c283c]" />
                <div className="h-7 rounded-md bg-emerald-700/60 border border-emerald-500/30" />
                <div className="h-7 rounded-md bg-[#10B981] shadow-[0_0_14px_rgba(16,185,129,0.5)]" />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.04]">
                <span className="text-gray-400">Discretionary Burn: Controlled</span>
                <span className="text-emerald-400 font-medium">Safe to allocate $450/wk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Login Card */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[440px] rounded-2xl border border-white/[0.12] bg-[#111624]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Top edge subtle highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Prototype State Testing Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/40 border border-emerald-400/80 inline-block" />
                <span>Prototype State Testing</span>
              </div>
              <button
                type="button"
                onClick={togglePrototypeError}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                {prototypeErrorActive ? 'Clear Error' : 'Trigger Error'}
              </button>
            </div>

            {/* Card Brand Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0f2e22] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="15" rx="3" />
                    <circle cx="16" cy="12.5" r="1.5" fill="currentColor" />
                    <path d="M6 9h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight leading-none">FinMate</h3>
                  <p className="text-xs text-gray-400 mt-1">Your money, simplified.</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-gray-400">
                <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>SSL 256</span>
              </div>
            </div>

            {/* Welcome Back Heading */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-[1.75rem] font-bold text-white flex items-center gap-2">
                <span>Welcome back</span>
                <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">Sign in to continue managing your finances.</p>
            </div>

            {/* Global Error Banner */}
            {errors.root && (
              <div className="mb-5 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2.5">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errors.root.message}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5" noValidate>
              {/* Email Field */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-300 uppercase mb-2">
                  EMAIL
                </label>
                <div
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#0b0f18]/80 border transition-all duration-200 ${
                    errors.email
                      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]'
                      : 'border-white/[0.1] focus-within:border-[#10B981] focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]'
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please provide a valid email format',
                      },
                    })}
                    placeholder="alex.morgan@finmate.io"
                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-normal"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-bold tracking-wider text-gray-300 uppercase">
                    PASSWORD
                  </label>
                  <a
                    href="#forgot"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#0b0f18]/80 border transition-all duration-200 ${
                    errors.password
                      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]'
                      : 'border-white/[0.1] focus-within:border-[#10B981] focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]'
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must contain at least 8 characters',
                      },
                    })}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-normal"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-200 focus:outline-none transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <span>{errors.password.message}</span>
                  </p>
                )}
              </div>

              {/* Remember me checkbox */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="rememberMe"
                  {...register('rememberMe')}
                  className="w-4 h-4 rounded bg-[#0b0f18] border-white/20 text-emerald-500 focus:ring-emerald-500/20 focus:ring-offset-0 cursor-pointer accent-[#10B981]"
                />
                <label htmlFor="rememberMe" className="text-xs text-gray-300 cursor-pointer select-none">
                  Remember this device for 30 days
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#0b0f19] font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0b0f19]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            {/* Bottom Register Link */}
            <div className="mt-7 text-center">
              <p className="text-xs text-gray-400">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
                >
                  Create account
                </Link>
              </p>
            </div>

            {/* Footer Encryption Guarantee */}
            <div className="mt-6 pt-5 border-t border-white/[0.04] text-center">
              <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                <span>Protected by 256-bit bank-grade encryption</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;