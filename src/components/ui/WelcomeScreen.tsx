"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"statement" | "brand">("statement");
  const [counter, setCounter] = useState(0);

  // Allow clicking anywhere to skip immediately
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    // Lock body scrolling during the welcome screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Phase 1 -> Phase 2 transition at 1450ms (generous time to comfortably read Phase 1)
    const phaseTimer = setTimeout(() => {
      setPhase("brand");
    }, 1450);

    // Smooth mechanical counter (0 -> 100 over 2800ms)
    const startTime = performance.now();
    const duration = 2800;
    let animFrame: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Eased counter progression
      const eased = Math.floor((1 - Math.pow(1 - progress, 2.8)) * 100);
      setCounter(eased);

      if (progress < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        setCounter(100);
        // Generous hold on brand lockup before smooth curtain reveal
        setTimeout(() => {
          handleDismiss();
        }, 350);
      }
    };

    animFrame = requestAnimationFrame(tick);

    // Safety fallback
    const safety = setTimeout(() => {
      handleDismiss();
    }, 3600);

    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(safety);
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleDismiss]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-overlay"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Smooth exponential deceleration
            },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[99999] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none overflow-hidden cursor-pointer"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_45%,rgba(255,173,50,0.06),transparent_70%)] pointer-events-none" />

          {/* Top Header Row */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 z-10 w-full">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FFAD32] shadow-[0_0_10px_#FFAD32]" />
              <span className="font-bold text-white tracking-widest">NOISECULTURE</span>
              <span className="text-neutral-500 hidden sm:inline">— CREATIVE &amp; GROWTH</span>
            </div>

            <div className="text-neutral-500 hidden sm:block">
              <span>MUMBAI • NEW DELHI • JAIPUR</span>
            </div>

            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 hover:text-white transition-colors">
              <span>CLICK TO SKIP</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFAD32]" />
            </div>
          </div>

          {/* Center Stage: Thoughtful, Legible Typography (Generous reading time) */}
          <div className="my-auto max-w-5xl mx-auto w-full text-center py-8 z-10 px-4">
            <AnimatePresence mode="wait">
              {phase === "statement" ? (
                <motion.div
                  key="phase-statement"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFAD32]">
                    <span>[ BRAND PHILOSOPHY ]</span>
                  </div>

                  <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                    WE DON’T DO<br />
                    <span className="text-[#FFAD32]">BACKGROUND NOISE.</span>
                  </h1>

                  <p className="text-xs sm:text-base font-mono text-neutral-400 tracking-[0.2em] uppercase max-w-xl mx-auto pt-2">
                    Where Brands Become Culture.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="phase-brand"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFAD32]">
                    <span>[ INDEPENDENT AGENCY ]</span>
                  </div>

                  <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight text-white leading-tight">
                    NOISE<span className="text-[#FFAD32]">CULTURE</span>
                    <span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#FFAD32] ml-2 sm:ml-4 shadow-[0_0_20px_#FFAD32]" />
                  </h1>

                  <p className="text-sm sm:text-xl font-mono text-[#FFAD32] tracking-[0.25em] uppercase font-bold pt-1">
                    NOISE WITH INTENT.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Metre & Numerical Counter */}
          <div className="flex items-end justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 z-10 w-full">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 block">AGENCY IDENTITY</span>
              <span className="text-white text-xs font-semibold">CULTURE-DRIVEN GROWTH</span>
            </div>

            <div className="text-right flex items-baseline gap-2">
              <span className="text-neutral-500 text-[10px]">LOADING</span>
              <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight tabular-nums">
                <span className="text-[#FFAD32]">{counter.toString().padStart(2, "0")}</span>
                <span className="text-neutral-500 text-base sm:text-2xl font-light ml-0.5">%</span>
              </div>
            </div>
          </div>

          {/* Bottom Hairline Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#FFAD32] via-[#FFAD32] to-white shadow-[0_0_12px_#FFAD32] transition-all duration-75"
              style={{ width: `${counter}%` }}
            />
          </div>

          {/* Bottom Curved Liquid Seam for Smooth Exit Peel */}
          <div className="absolute -bottom-16 sm:-bottom-24 left-0 w-full h-16 sm:h-24 pointer-events-none">
            <svg
              className="w-full h-full text-[#080808] fill-current"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" />
            </svg>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFAD32]/60 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
