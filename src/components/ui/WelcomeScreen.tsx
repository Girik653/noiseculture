"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    "WE DON'T DO BACKGROUND NOISE.",
    "THE UNCOMMON, MADE UNMISSABLE.",
    "WHERE BRANDS BECOME CULTURE.",
  ];

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoading(false);
      return;
    }

    // Lock body scrolling while loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1450; // Total count duration in ms

    let animFrame: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth cubic-bezier ease out deceleration for natural mechanical feel
      const easedT = 1 - Math.pow(1 - t, 3);
      const currentVal = Math.min(100, Math.floor(easedT * 100));

      setProgress(currentVal);

      // Switch phrases smoothly at 33% and 66%
      if (t < 0.35) {
        setPhraseIndex(0);
      } else if (t < 0.7) {
        setPhraseIndex(1);
      } else {
        setPhraseIndex(2);
      }

      if (t < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        // Brief deliberate pause at 100% before initiating the liquid curtain reveal
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = originalOverflow;
        }, 280);
      }
    };

    animFrame = requestAnimationFrame(tick);

    // Fallback safety timeout in case RAF is backgrounded or tab loses focus
    const safetyTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = originalOverflow;
    }, 2800);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="welcome-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1], // Cinematic exponential deceleration
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden pointer-events-auto select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,173,50,0.07),transparent_70%)] pointer-events-none" />

          {/* Top Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
            className="flex items-center justify-between z-10 w-full"
          >
            <div className="flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FFAD32] animate-pulse shadow-[0_0_8px_#FFAD32]" />
              <span className="hidden sm:inline">[ 28°38'N 77°13'E // DEL • BOM • JAI ]</span>
              <span className="sm:hidden">DEL • BOM • JAI</span>
            </div>

            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>NOISECULTURE ENGINE // 2.0</span>
            </div>
          </motion.div>

          {/* Center Stage: Kinetic Typography & Wordmark */}
          <motion.div
            exit={{ opacity: 0, y: -40, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
            className="my-auto text-center space-y-6 sm:space-y-8 z-10 max-w-4xl mx-auto px-4 w-full"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFAD32]"
            >
              <span>INDEPENDENT CULTURE-DRIVEN GROWTH</span>
            </motion.div>

            {/* Giant Brand Wordmark */}
            <div className="relative overflow-hidden py-1">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter uppercase text-white"
              >
                NOISE<span className="text-[#FFAD32]">CULTURE</span>
                <span className="inline-block w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#FFAD32] ml-1.5 sm:ml-3 align-baseline shadow-[0_0_15px_#FFAD32]" />
              </motion.h1>
            </div>

            {/* Cycling Kinetic Sub-line */}
            <div className="h-8 sm:h-10 relative flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xs sm:text-base md:text-lg font-mono tracking-widest text-neutral-300 font-medium"
                >
                  {phrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Precision 1px Progress Track */}
            <div className="max-w-xs sm:max-w-md mx-auto pt-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FFAD32] via-[#FFAD32] to-white shadow-[0_0_10px_#FFAD32]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Metre & Numerical Counter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
            className="flex items-end justify-between z-10 w-full"
          >
            <div className="space-y-1">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                SYSTEM STATUS
              </div>
              <div className="text-xs sm:text-sm font-mono text-white font-medium flex items-center gap-2">
                <span>SYNCHRONIZING</span>
                <span className="text-[#FFAD32]">
                  {progress < 100 ? "BUFFERING" : "LIVE"}
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-4xl sm:text-6xl md:text-7xl font-mono font-bold tracking-tight text-white tabular-nums">
                <span className="text-[#FFAD32]">{progress.toString().padStart(2, "0")}</span>
                <span className="text-neutral-500 text-lg sm:text-3xl font-light ml-1">%</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Elastic Curved Edge (Liquid Peel Effect on Exit) */}
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
