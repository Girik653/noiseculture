"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface AnimatedCurtainTransitionProps {
  direction: "to-dark" | "to-ivory";
  className?: string;
}

export function AnimatedCurtainTransition({
  direction,
  className = "",
}: AnimatedCurtainTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Spring physics for buttery-smooth liquid momentum when changing slides/scrolling up and down
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 32,
    stiffness: 90,
    mass: 0.35,
  });

  const isToDark = direction === "to-dark";

  // Primary wave parallax transforms with spring smoothing
  const yPrimary = useTransform(smoothProgress, [0.05, 0.75], ["22%", "0%"]);
  const scaleYPrimary = useTransform(smoothProgress, [0.05, 0.75], [0.82, 1]);
  const opacityPrimary = useTransform(smoothProgress, [0.02, 0.35, 0.9], [0.5, 1, 1]);

  // Secondary delayed wave for layered fluid depth
  const ySecondary = useTransform(smoothProgress, [0.08, 0.82], ["32%", "0%"]);
  const scaleYSecondary = useTransform(smoothProgress, [0.08, 0.82], [0.7, 1]);
  const opacitySecondary = useTransform(smoothProgress, [0.08, 0.45, 0.85], [0.25, 0.75, 0.9]);

  // Dynamic Crest Glow Intensity along the organic curve
  const crestGlowOpacity = useTransform(smoothProgress, [0.1, 0.45, 0.85], [0.3, 1, 0.6]);

  // Ambient Light Atmosphere blur interpolation
  const ambientSpread = useTransform(smoothProgress, [0.1, 0.5, 0.9], [0.3, 0.85, 0.4]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-56 sm:h-72 md:h-88 pointer-events-none select-none z-20 overflow-hidden ${
        isToDark ? "bg-[#FFF8EA]" : "bg-[#080808]"
      } ${className}`}
    >
      {/* Ambient Radial Color Bleed for Soft Atmosphere */}
      <motion.div
        style={{ opacity: ambientSpread }}
        className={`absolute inset-0 w-full h-full filter blur-3xl pointer-events-none ${
          isToDark
            ? "bg-gradient-to-b from-[#FFF8EA] via-[#FFAD32]/10 to-[#080808]"
            : "bg-gradient-to-b from-[#080808] via-[#FFAD32]/15 to-[#FFF8EA]"
        }`}
      />

      {/* Floating Stardust / Embers moving organically across the seam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[
          { x: "12%", y: "45%", size: 4, delay: 0 },
          { x: "28%", y: "60%", size: 3, delay: 1.2 },
          { x: "45%", y: "38%", size: 5, delay: 0.5 },
          { x: "62%", y: "52%", size: 3.5, delay: 1.8 },
          { x: "78%", y: "42%", size: 4.5, delay: 0.9 },
          { x: "90%", y: "65%", size: 3, delay: 2.1 },
        ].map((ember, i) => (
          <motion.div
            key={i}
            style={{
              left: ember.x,
              top: ember.y,
              width: ember.size,
              height: ember.size,
            }}
            animate={{
              y: [-15, -45, -15],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5 + i * 0.7,
              delay: ember.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#FFAD32] shadow-[0_0_12px_#FFAD32]"
          />
        ))}
      </div>

      {/* Secondary Fluid Wave (Under-Layer for 3D depth) */}
      <motion.div
        style={{
          y: ySecondary,
          scaleY: scaleYSecondary,
          opacity: opacitySecondary,
          transformOrigin: "bottom center",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,110 C 320,30 680,170 1020,90 C 1240,40 1370,120 1440,85 L 1440,320 L 0,320 Z"
            fill={isToDark ? "#141414" : "#F3EBD8"}
            fillOpacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Primary Animated Liquid Wave (Front-Layer) */}
      <motion.div
        style={{
          y: yPrimary,
          scaleY: scaleYPrimary,
          opacity: opacityPrimary,
          transformOrigin: "bottom center",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Main Solid Body of the Liquid Wave */}
          <path
            d="M 0,85 C 360,10 640,145 1000,65 C 1220,15 1360,85 1440,55 L 1440,320 L 0,320 Z"
            fill={isToDark ? "#080808" : "#FFF8EA"}
          />

          {/* Luminous Golden / Amber Energy Crest along the rim of the wave */}
          <path
            d="M 0,85 C 360,10 640,145 1000,65 C 1220,15 1360,85 1440,55"
            fill="none"
            stroke="#FFAD32"
            strokeWidth="3.5"
            strokeOpacity="0.85"
            className="filter drop-shadow-[0_0_14px_rgba(255,173,50,0.95)]"
          />

          {/* Secondary softer halo along the crest line */}
          <path
            d="M 0,85 C 360,10 640,145 1000,65 C 1220,15 1360,85 1440,55"
            fill="none"
            stroke="#FFE082"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Crest Glow Atmosphere Shimmer */}
      <motion.div
        style={{ opacity: crestGlowOpacity }}
        className="absolute top-1/4 left-0 right-0 h-28 bg-gradient-to-b from-[#FFAD32]/18 via-transparent to-transparent filter blur-xl pointer-events-none"
      />
    </div>
  );
}