import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [prototypeErrorActive, setPrototypeErrorActive] = useState(false);

  const {
    register,
    handleSubmit,
    onRegisterSubmit,
    setError,
    clearErrors,
    watch,
    setValue,
    errors,
    isSubmitting,
  } = useAuth();

  // Watch password to dynamically update strength meter
  const passwordValue = watch ? watch('password', '') : '';

  // Password strength calculator
  const calculateStrength = (pwd) => {
    if (!pwd || pwd.length === 0) return { score: 0, label: 'Enter password' };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    const labels = {
      0: 'Enter password',
      1: 'Weak',
      2: 'Fair',
      3: 'Good',
      4: 'Strong',
    };

    return { score, label: labels[score] || 'Weak' };
  };

  const strength = calculateStrength(passwordValue);

  // Toggle Prototype Error
  const togglePrototypeError = () => {
    if (!prototypeErrorActive) {
      setError('root', {
        type: 'manual',
        message: 'Registration anomaly: An account with this institutional email already exists.',
      });
      setError('email', {
        type: 'manual',
        message: 'This email is already in use by an active FinMate profile.',
      });
      setPrototypeErrorActive(true);
    } else {
      clearErrors();
      setPrototypeErrorActive(false);
    }
  };

  // Test Validation Button
  const testValidation = () => {
    setError('fullName', {
      type: 'manual',
      message: 'Full legal name is required for KYC compliance.',
    });
    setError('password', {
      type: 'manual',
      message: 'Password must include uppercase, numbers, and symbols.',
    });
    setError('agreeTerms', {
      type: 'manual',
      message: 'You must agree to the Terms of Service to proceed.',
    });
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
        {/* Bottom soft gradient */}
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

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-300">
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#support" className="hover:text-emerald-400 transition-colors">Support</a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <Link
              to="/register"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#0b0f19] transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Value Proposition & Feature Preview Card */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wider uppercase w-fit shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ALGORITHMIC FINANCIAL CO-PILOT
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12]">
            <span className="text-white block">Your finances.</span>
            <span className="text-[#10B981] block mt-1">One simple place.</span>
            <span className="text-white block mt-1">Autonomous intelligence.</span>
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
            Join thousands optimizing their net worth, cash flow trajectories, and portfolio efficiency with zero cognitive friction.
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
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>SOC2 Type II Certified</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
              </svg>
              <span>Real-time AI telemetry</span>
            </div>
          </div>

          {/* Personalized Financial Dashboard Preview Card */}
          <div className="pt-2 max-w-xl">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111726]/80 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <div className="text-emerald-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    Personalized Financial Dashboard Preview
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  Included
                </span>
              </div>

              {/* 3 Sub-Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {/* Item 1 */}
                <div className="rounded-xl bg-[#0b101c]/90 border border-white/[0.06] p-3.5 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Zero-fee setup</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">No hidden friction</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="rounded-xl bg-[#0b101c]/90 border border-white/[0.06] p-3.5 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Instant bank sync</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">via Plaid Core</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="rounded-xl bg-[#0b101c]/90 border border-white/[0.06] p-3.5 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16.01" />
                      <line x1="16" y1="16" x2="16.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Cash allocation</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Automated AI engine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Register Card */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] rounded-2xl border border-white/[0.12] bg-[#111624]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Top edge subtle highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Interactive Demo Mode Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
              <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                INTERACTIVE DEMO MODE
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePrototypeError}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
                >
                  {prototypeErrorActive ? 'Clear Error' : 'Trigger Error'}
                </button>
                <button
                  type="button"
                  onClick={testValidation}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
                >
                  Test Validation
                </button>
              </div>
            </div>

            {/* Brand Header & SSL Badge */}
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
                  <p className="text-xs text-gray-400 mt-1">Start managing your money smarter.</p>
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

            {/* Card Title & Subtitle */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-[1.75rem] font-bold text-white flex items-center gap-2">
                <span>Create your account</span>
                <span className="text-emerald-400">✨</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Join FinMate and take control of your finances.
              </p>
            </div>

            {/* Global Error Banner */}
            {errors.root && (
              <div className="mb-5 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2.5 animate-fadeIn">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errors.root.message}</span>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4" noValidate>
              {/* Full Name Field */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-300 uppercase mb-2">
                  FULL NAME
                </label>
                <div
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#0b0f18]/80 border transition-all duration-200 ${
                    errors.fullName
                      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]'
                      : 'border-white/[0.1] focus-within:border-[#10B981] focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]'
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    {...register('fullName', {
                      required: 'Full name is required',
                    })}
                    placeholder="Enter your name"
                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-normal"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <span>{errors.fullName.message}</span>
                  </p>
                )}
              </div>

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
                    placeholder="you@example.com"
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
                  <span className="text-xs text-gray-400">Minimum 8 characters</span>
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
                    placeholder="Create a password"
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

                {/* Password Strength Meter (4 bars) */}
                <div className="mt-3">
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((barIndex) => {
                      const isActive = strength.score >= barIndex;
                      let barColor = 'bg-white/[0.08]';
                      if (isActive) {
                        if (strength.score === 1) barColor = 'bg-red-500';
                        else if (strength.score === 2) barColor = 'bg-amber-500';
                        else if (strength.score >= 3) barColor = 'bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.4)]';
                      }

                      return (
                        <div
                          key={barIndex}
                          className={`h-1.5 rounded-full transition-all duration-300 ${barColor}`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between mt-1.5 text-[11px] text-gray-400">
                    <span>Password strength: {strength.label}</span>
                    <span>Numbers & symbols recommended</span>
                  </div>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    {...register('agreeTerms', {
                      required: 'You must agree to the Terms of Service and Privacy Policy',
                    })}
                    className="w-4 h-4 mt-0.5 rounded bg-[#0b0f18] border-white/20 text-emerald-500 focus:ring-emerald-500/20 focus:ring-offset-0 cursor-pointer accent-[#10B981]"
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-gray-300 cursor-pointer select-none leading-relaxed">
                    I agree to the{' '}
                    <a href="#terms" className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#privacy" className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 pl-6.5">
                    <span>{errors.agreeTerms.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 py-3 px-4 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#0b0f19] font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0b0f19]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <svg className="w-4 h-4 text-[#0b0f19]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Footer Encryption Guarantee */}
            <div className="mt-5 pt-4 border-t border-white/[0.04] text-center">
              <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Protected by 256-bit bank-grade encryption</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#090d16]/80 backdrop-blur-md mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">FinMate</span>
            <span className="text-gray-600">|</span>
            <span>&copy; 2025 FinMate Inc. 256-bit Bank-Grade Encryption. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security Architecture</a>
            <a href="#compliance" className="hover:text-emerald-400 transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register;