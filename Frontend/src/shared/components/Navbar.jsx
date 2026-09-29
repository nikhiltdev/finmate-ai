import React, { useState, useRef, useEffect } from "react";

// ==========================================
// Lucide-Compatible SVG Icons
// (Directly defined so component requires zero external dependencies)
// ==========================================

function MenuIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BellIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarDaysIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SettingsIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CircleHelpIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function LogOutIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

// Finance Logo Emblem (FinMate Emerald Leaf/Chart)
function FinMateLogoIcon({ className = "w-6 h-6" }) {
  return (
    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 shrink-0">
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    </div>
  );
}

// ==========================================
// Reusable FinMate Navbar Component
// ==========================================

function Navbar({
  onMenuToggle,
  user = {
    name: "John Doe",
    email: "john@example.com",
    initials: "JD",
  },
  dateRange = "Apr 26, 2025 - May 26, 2025",
  showLogo = true,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/75 backdrop-blur-xl border-b border-white/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-6 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Left Section: Menu Toggle & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile/Sidebar Hamburger Menu Button */}
          <button
            type="button"
            onClick={onMenuToggle}
            aria-label="Toggle Navigation Menu"
            className="p-2 -ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          {/* FinMate Brand Logo */}
          {showLogo && (
            <div className="flex items-center gap-2.5 select-none cursor-pointer">
              <FinMateLogoIcon className="w-4 h-4" />
              <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:inline-block">
                Fin<span className="text-emerald-500">Mate</span>
              </span>
            </div>
          )}
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-xl mx-2 sm:mx-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
              <SearchIcon className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transactions, categories..."
              aria-label="Search transactions and categories"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-100/70 hover:bg-slate-100 focus:bg-white text-slate-800 placeholder-slate-400 rounded-xl border border-transparent focus:border-emerald-500/40 focus:ring-3 focus:ring-emerald-500/10 transition-all outline-none"
            />
          </div>
        </div>

        {/* Right Section: Notification, Date, User Profile */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          
          {/* Notification Button with Indicator Dot */}
          <button
            type="button"
            aria-label="View notifications"
            className="relative p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <BellIcon className="w-5 h-5" />
            {/* Live Notification Indicator Pulse */}
            <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500 border-2 border-white" />
            </span>
          </button>

          {/* Date Range Selector (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200/70 rounded-xl text-xs font-semibold text-slate-700 shadow-sm hover:border-slate-300 transition-colors cursor-pointer select-none">
            <CalendarDaysIcon className="w-4 h-4 text-slate-400" />
            <span>{dateRange}</span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* User Profile Area & Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-2 p-1 sm:pl-1.5 sm:pr-2.5 sm:py-1 rounded-xl hover:bg-slate-100/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              {/* Circular Initials Avatar */}
              <div className="w-8 h-8 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-xs font-bold tracking-tight shadow-sm shrink-0 border border-slate-700/50">
                {user.initials}
              </div>

              {/* User Name & Chevron */}
              <div className="hidden md:flex items-center gap-1.5 text-left">
                <span className="text-xs font-bold text-slate-900 leading-none">
                  {user.name}
                </span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </div>
            </button>

            {/* Glassmorphic Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.1),0_0_1px_1px_rgba(0,0,0,0.02)] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {/* Header Profile Identity */}
                <div className="px-3 py-2.5 border-b border-slate-100 mb-1">
                  <p className="text-xs font-bold text-slate-900 leading-none">{user.name}</p>
                  <p className="text-[11px] text-slate-400 font-medium truncate mt-1">{user.email}</p>
                </div>

                {/* Navigation Options */}
                <div className="space-y-0.5">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    <span>Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <SettingsIcon className="w-4 h-4 text-slate-400" />
                    <span>Settings</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <CircleHelpIcon className="w-4 h-4 text-slate-400" />
                    <span>Help & Support</span>
                  </button>
                </div>

                {/* Logout Option */}
                <div className="pt-1 mt-1 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <LogOutIcon className="w-4 h-4 text-rose-500" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
