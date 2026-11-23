"use client";

import { motion } from "framer-motion";

interface NoiseBadgeProps {
  text?: string;
  className?: string;
  dark?: boolean;
}

export function NoiseBadge({
  text = "NOISE WITH INTENT • NOISECULTURE • 2026 • ",
  className = "",
  dark = false,
}: NoiseBadgeProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="w-28 h-28 sm:w-32 sm:h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text
            className={`text-[9.2px] uppercase font-mono font-bold tracking-[0.22em] ${
              dark ? "fill-white/80" : "fill-[#080808]"
            }`}
          >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Icon Badge */}
      <div
        className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-xs transition-transform duration-300 hover:scale-110 shadow-lg ${
          dark
            ? "bg-[#FFAD32] text-[#080808]"
            : "bg-[#080808] text-[#FFAD32]"
        }`}
      >
        <span className="tracking-tighter">NC*</span>
      </div>
    </div>
  );
}
