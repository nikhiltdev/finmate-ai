import React from "react";
import { NavLink } from "react-router-dom";

function AsideNav() {
  return (
    <aside className="w-full h-full bg-[#0B0F19] text-[#dfe2f1] rounded-2xl border border-white/[0.08] flex flex-col p-4 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Brand Header */}
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
        <div className="w-8 h-8 rounded-xl bg-[#171b26] border border-[#10B981]/30 text-[#10B981] flex items-center justify-center font-bold text-sm select-none shadow-[0_0_12px_rgba(16,185,129,0.2)]">
          F
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-tight">
            FinMate <span className="text-[#10B981]">AI</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
              isActive
                ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/[0.05] border border-transparent"
            }`
          }
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
          </svg>
          <span>Chat</span>
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
              isActive
                ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/[0.05] border border-transparent"
            }`
          }
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default AsideNav;
