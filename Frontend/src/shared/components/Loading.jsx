import React from 'react';

/**
 * Loading Spinner Component
 * Styled in accordance with DESIGN.md (Luminous Emerald FinTech):
 * - Primary Emerald: #10B981 / #4EDEA3
 * - Secondary Emerald: #059669 / #68DBA9
 * - Tertiary Cyan: #38BDF8 / #7BD0FF
 * - Base Surface: #0B0F19 / #0F131D
 * - Typography: Plus Jakarta Sans with crisp metallic tones (#F9FAFB, #9CA3AF)
 *
 * @param {Object} props
 * @param {boolean} [props.fullScreen=true] - Whether to display as full viewport overlay or container level
 * @param {('sm'|'md'|'lg'|'xl')} [props.size='md'] - Spinner dimensions
 * @param {string} [props.text='Loading...'] - Primary status message
 * @param {string} [props.subtext='Synchronizing financial telemetry'] - Secondary caption
 * @param {boolean} [props.showCard=true] - Wrap in frosted glassmorphic capsule
 */
function Loading({
  fullScreen = true,
  size = 'md',
  text = 'Loading...',
  subtext = 'Synchronizing financial telemetry',
  showCard = true,
}) {
  const sizeMap = {
    sm: {
      wrapper: 36,
      stroke: 3,
      outerRadius: 14,
      innerRadius: 8,
      textSize: 'text-xs',
      subtextSize: 'text-[10px]',
      gap: 'gap-2',
      padding: 'p-3',
    },
    md: {
      wrapper: 60,
      stroke: 4,
      outerRadius: 24,
      innerRadius: 15,
      textSize: 'text-sm',
      subtextSize: 'text-xs',
      gap: 'gap-3',
      padding: 'p-6',
    },
    lg: {
      wrapper: 84,
      stroke: 4.5,
      outerRadius: 34,
      innerRadius: 22,
      textSize: 'text-base',
      subtextSize: 'text-xs',
      gap: 'gap-4',
      padding: 'p-8',
    },
    xl: {
      wrapper: 110,
      stroke: 5,
      outerRadius: 46,
      innerRadius: 30,
      textSize: 'text-lg',
      subtextSize: 'text-sm',
      gap: 'gap-5',
      padding: 'p-10',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const outerCenter = currentSize.wrapper / 2;
  const outerCircumference = 2 * Math.PI * currentSize.outerRadius;
  const innerCircumference = 2 * Math.PI * currentSize.innerRadius;

  const spinnerContent = (
    <div className={`flex flex-col items-center justify-center ${currentSize.gap} text-center select-none`}>
      {/* Dynamic Luminous Multi-Ring Spinner */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: currentSize.wrapper, height: currentSize.wrapper }}
      >
        {/* Ambient Backlight Glow */}
        <div
          className="absolute inset-0 rounded-full blur-xl pointer-events-none animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)',
            transform: 'scale(1.35)',
          }}
        />

        {/* SVG Dual-Track Orbital Spinner */}
        <svg
          className="relative z-10 w-full h-full"
          viewBox={`0 0 ${currentSize.wrapper} ${currentSize.wrapper}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Emerald to Cyan Radiant Gradient */}
            <linearGradient id="finmate-emerald-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#4EDEA3" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Subtle Counter-Orbit Cyan Gradient */}
            <linearGradient id="finmate-cyan-soft" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>

            {/* Glowing Drop Filter */}
            <filter id="finmate-emerald-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Static Track Ring (Deep Slate/Glass border) */}
          <circle
            cx={outerCenter}
            cy={outerCenter}
            r={currentSize.outerRadius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={currentSize.stroke}
          />

          {/* Outer Main Spinner Ring */}
          <circle
            cx={outerCenter}
            cy={outerCenter}
            r={currentSize.outerRadius}
            stroke="url(#finmate-emerald-cyan)"
            strokeWidth={currentSize.stroke}
            strokeLinecap="round"
            strokeDasharray={outerCircumference}
            strokeDashoffset={outerCircumference * 0.3}
            filter="url(#finmate-emerald-glow)"
            style={{
              transformOrigin: 'center',
              animation: 'finmate-spin 1.25s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />

          {/* Inner Counter-Rotating Orbit (AI / Telemetry Accent) */}
          <circle
            cx={outerCenter}
            cy={outerCenter}
            r={currentSize.innerRadius}
            stroke="url(#finmate-cyan-soft)"
            strokeWidth={Math.max(1.8, currentSize.stroke * 0.55)}
            strokeDasharray={`${innerCircumference * 0.28} ${innerCircumference * 0.22}`}
            strokeLinecap="round"
            style={{
              transformOrigin: 'center',
              animation: 'finmate-spin-reverse 2.2s linear infinite',
            }}
          />
        </svg>

        {/* Pulsing Central Energy Node */}
        <div className="absolute z-20 flex items-center justify-center pointer-events-none">
          <div
            className="rounded-full bg-[#10B981] animate-ping opacity-40"
            style={{
              width: Math.max(5, currentSize.wrapper * 0.12),
              height: Math.max(5, currentSize.wrapper * 0.12),
            }}
          />
          <div
            className="absolute rounded-full bg-gradient-to-tr from-[#10B981] to-[#7BD0FF] shadow-[0_0_10px_rgba(16,185,129,0.8)]"
            style={{
              width: Math.max(4, currentSize.wrapper * 0.1),
              height: Math.max(4, currentSize.wrapper * 0.1),
            }}
          />
        </div>
      </div>

      {/* Typography Section */}
      {(text || subtext) && (
        <div className="flex flex-col items-center gap-1 mt-1 max-w-[280px]">
          {text && (
            <div className={`font-semibold tracking-tight text-[#F9FAFB] ${currentSize.textSize} flex items-center gap-1.5`}>
              <span>{text}</span>
              <span className="flex items-center gap-0.5">
                <span className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 rounded-full bg-[#4EDEA3] animate-pulse" style={{ animationDelay: '200ms' }} />
                <span className="w-1 h-1 rounded-full bg-[#38BDF8] animate-pulse" style={{ animationDelay: '400ms' }} />
              </span>
            </div>
          )}
          {subtext && (
            <p className={`text-[#9CA3AF] tracking-wide font-normal ${currentSize.subtextSize}`}>
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Component Styles scoped to ensure standalone resilience */}
      <style>{`
        @keyframes finmate-spin {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg) scale(1.02);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes finmate-spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>

      {fullScreen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/80 backdrop-blur-xl transition-all duration-300">
          {/* Subtle Ambient Radial Backdrops adhering to DESIGN.md Layer Stack */}
          <div className="absolute pointer-events-none inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#10B981]/[0.08] blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#38BDF8]/[0.06] blur-[100px]" />
          </div>

          {showCard ? (
            <div
              className={`relative z-10 ${currentSize.padding} rounded-2xl bg-[rgba(17,24,39,0.72)] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7),0_0_1px_1px_rgba(255,255,255,0.06)_inset] transition-all`}
            >
              {/* Subtle top edge specular highlight */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {spinnerContent}
            </div>
          ) : (
            <div className="relative z-10">{spinnerContent}</div>
          )}
        </div>
      ) : showCard ? (
        <div
          className={`relative inline-flex items-center justify-center ${currentSize.padding} rounded-2xl bg-[rgba(17,24,39,0.72)] backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}
        >
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {spinnerContent}
        </div>
      ) : (
        <div className="inline-flex items-center justify-center p-2">{spinnerContent}</div>
      )}
    </>
  );
}

export default Loading;
