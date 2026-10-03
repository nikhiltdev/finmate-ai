import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const { user, isLoading } = useSelector((state) => state.auth);

  const userData = user?.data || user || {};
  const name = userData?.name || "User";
  const email = userData?.email || "No email available";
  const userId = userData?._id || "N/A";
  const createdAt = userData?.createdAt
    ? new Date(userData.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Recently";

  const initial = name.charAt(0).toUpperCase() || "U";

  return (
    <div className="w-full h-full flex flex-col bg-[#0B0F19] text-[#dfe2f1] font-['Plus_Jakarta_Sans',sans-serif] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Ambient Glows */}
      <div className="fixed top-12 left-1/3 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-12 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Page Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              User Profile
            </h1>
            <p className="text-sm text-[#9CA3AF] mt-1">
              Manage your personal credentials, account identity, and FinMate preferences
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#9CA3AF] hover:text-white bg-[#131826]/80 hover:bg-[#1a2133] border border-white/[0.08] hover:border-[#10B981]/40 transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-[#10B981]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/dashboard/chat"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#10B981] bg-[#10B981]/15 hover:bg-[#10B981]/25 border border-[#10B981]/30 transition-all duration-200 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>AI Chat</span>
            </Link>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative bg-[#131826]/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#171b26] to-[#0f131d] border-2 border-[#10B981]/40 flex items-center justify-center font-bold text-3xl sm:text-4xl text-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.25)] select-none">
                {initial}
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#10B981] border-2 border-[#0B0F19] rounded-full ring-2 ring-[#10B981]/20"></span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {name}
                </h2>
                <span className="inline-flex items-center gap-1.5 self-center sm:self-auto px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  Active Member
                </span>
              </div>

              <p className="text-sm text-[#9CA3AF] font-medium">{email}</p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-[#9CA3AF]">
                <span className="bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-lg">
                  FinMate AI Tier: <strong className="text-white">Personal Pro</strong>
                </span>
                <span className="bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-lg">
                  Joined: <strong className="text-white">{createdAt}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Card 1: Full Name */}
          <div className="bg-[#131826]/75 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-5 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                Full Name
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#10B981]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-semibold text-white tracking-tight">{name}</p>
            <p className="text-xs text-[#6B7280] mt-1">Display name used across FinMate</p>
          </div>

          {/* Card 2: Email Address */}
          <div className="bg-[#131826]/75 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-5 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                Email Address
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#10B981]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-semibold text-white tracking-tight break-all">{email}</p>
            <p className="text-xs text-[#10B981] mt-1 flex items-center gap-1 font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Primary Email
            </p>
          </div>

          {/* Card 3: User Identifier */}
          <div className="bg-[#131826]/75 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-5 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                Account ID
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#38BDF8]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
            </div>
            <p className="font-mono text-sm font-semibold text-[#dfe2f1] bg-white/[0.04] border border-white/[0.08] px-2.5 py-1.5 rounded-lg break-all">
              {userId}
            </p>
            <p className="text-xs text-[#6B7280] mt-2">Unique database security identifier</p>
          </div>

          {/* Card 4: Account Security */}
          <div className="bg-[#131826]/75 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-5 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                Security & Authentication
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#10B981]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-semibold text-white tracking-tight">Active HTTP-Only Session</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Protected by encrypted JWT tokens & strict cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
