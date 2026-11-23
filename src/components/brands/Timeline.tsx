import React from "react";

interface TimelineProps {
  steps: string[];
  className?: string;
}

export function Timeline({ steps, className = "" }: TimelineProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={`relative pl-6 sm:pl-8 space-y-8 sm:space-y-10 ${className}`}>
      {/* Vertical Spine Line */}
      <div className="absolute top-3 bottom-3 left-2.5 sm:left-3.5 w-0.5 bg-white/15 -translate-x-1/2" />

      {steps.map((step, idx) => (
        <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
          {/* Electric Orange Node */}
          <div className="relative z-10 w-5 h-5 rounded-full bg-[#FFAD32] border-4 border-[#080808] shadow-[0_0_14px_rgba(255,173,50,0.85)] shrink-0 mt-1 -ml-6 sm:-ml-8 transition-transform group-hover:scale-125" />

          {/* Timeline Step Content */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-[#FFAD32] font-bold uppercase tracking-wider block">
              Step 0{idx + 1}
            </span>
            <p className="text-sm sm:text-base font-sans font-normal text-neutral-300 leading-relaxed max-w-prose">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}