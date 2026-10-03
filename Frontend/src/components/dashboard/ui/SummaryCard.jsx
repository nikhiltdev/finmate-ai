import React from "react";

function  SummaryCard({
  title,
  amount,
  currency = "INR",
  supportingText,
  label,
  icon: Icon,
  trendPositive = true,
}) {
  return (
    <div className="group relative bg-[#131826]/75 hover:bg-[#171e30]/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-4 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
      {/* Top row: Title and Icon */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
          {title}
        </span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#10B981] group-hover:border-[#10B981]/30 group-hover:bg-[#10B981]/10 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.15)] transition-all duration-200 shrink-0">
          {Icon}
        </div>
      </div>

      {/* Middle row: Amount and Currency */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums">
          {amount}
        </span>
        <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#9CA3AF] bg-white/[0.05] border border-white/[0.08] px-1.5 py-0.5 rounded uppercase">
          {currency}
        </span>
      </div>

      {/* Bottom row: Supporting text and Label */}
      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[11px] sm:text-xs">
        <span
          className={`font-medium inline-flex items-center gap-1 ${
            trendPositive ? "text-[#10B981]" : "text-[#9CA3AF]"
          }`}
        >
          {supportingText}
        </span>
        <span className="text-[#9CA3AF] font-medium text-[10px] sm:text-[11px] bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.04]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default SummaryCard;
