import React from "react";
import { Info } from "lucide-react";

interface DisclaimerNoteProps {
  className?: string;
  theme?: "light" | "dark" | "blue";
}

export function DisclaimerNote({ className = "" }: DisclaimerNoteProps) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#141414]/90 backdrop-blur-md flex items-start gap-4 text-xs font-mono text-neutral-400 leading-relaxed transition-colors shadow-lg ${className}`}
    >
      <Info className="w-4 h-4 text-[#FFAD32] mt-0.5 shrink-0" />
      <div className="space-y-1">
        <span className="font-bold text-white uppercase tracking-wider block">
          Editorial &amp; Attribution Disclaimer
        </span>
        <p>
          Featured campaigns were delivered with partner agencies; see each page for Noise Culture&apos;s role.
          Campaign breakdowns are Noise Culture&apos;s analysis of publicly reported work.
          Figures are as reported by the brands, their agencies or trade press. Brand names and trademarks belong to their owners and do not imply endorsement.
        </p>
      </div>
    </div>
  );
}