import React from "react";

interface GroupLabelProps {
  group: "featured" | "breakdown";
  className?: string;
  onDark?: boolean;
}

export function GroupLabel({ group, className = "" }: GroupLabelProps) {
  const isFeatured = group === "featured";
  const text = isFeatured ? "Featured campaign" : "Campaign breakdown";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider ${
        isFeatured
          ? "bg-[#FFAD32]/15 text-[#FFAD32] border border-[#FFAD32]/40 shadow-[0_0_15px_rgba(255,173,50,0.2)]"
          : "bg-white/5 text-neutral-300 border border-white/15"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isFeatured ? "bg-[#FFAD32] animate-ping" : "bg-neutral-400"
        }`}
        style={{ animationDuration: isFeatured ? "2.5s" : undefined }}
      />
      <span>{text}</span>
    </span>
  );
}