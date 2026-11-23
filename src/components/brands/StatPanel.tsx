import React from "react";
import { TrendingUp, AlertCircle } from "lucide-react";

interface StatPanelProps {
  stat: string;
  statLabel: string;
  className?: string;
}

export function StatPanel({ stat, statLabel, className = "" }: StatPanelProps) {
  if (!stat || !statLabel) return null;

  return (
    <div
      className={`rounded-3xl bg-[#141414] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#FFAD32]/30 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Reported Result / Performance Figure</span>
        </div>

        {/* Big Stat in Electric Orange */}
        <div className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#FFAD32] font-display leading-none drop-shadow-md">
          {stat}
        </div>

        {/* stat_label underneath */}
        <p className="text-base sm:text-xl font-mono text-neutral-200 leading-relaxed max-w-prose">
          {statLabel}
        </p>

        {/* Accuracy and Unaudited Note */}
        <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
          <AlertCircle className="w-3.5 h-3.5 text-[#FFAD32] shrink-0" />
          <span>Figures are as reported by the brand, its agency or trade press, and are not audited by Noise Culture.</span>
        </div>
      </div>
    </div>
  );
}