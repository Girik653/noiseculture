"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  // High-fashion agency editorial word sequence
  const sequence = [
    { label: "01", text: "ATTENTION", subtitle: "CAPTURING CULTURAL REAL ESTATE" },
    { label: "02", text: "MOMENTUM", subtitle: "MAKING BRANDS IMPOSSIBLE TO IGNORE" },
    { label: "03", text: "NOISECULTURE", subtitle: "NOISE WITH INTENT." },
  ];

  const columns = [0, 1, 2, 3, 4];

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    // Lock body scrolling during the opening reveal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Step 1: Advance words at crisp, intentional beats
    const timer1 = setTimeout(() => setWordIndex(1), 480);
    const timer2 = setTimeout(() => setWordIndex(2), 960);

    // Step 2: Smooth mechanical counter (0 -> 100)
    const startTime = performance.now();
    const duration = 1400;
    let animFrame: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: rapid start, smooth finish
      const eased = Math.floor((1 - Math.pow(1 - progress, 3)) * 100);
      setCounter(eased);

      if (progress < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        setCounter(100);
        // Step 3: Trigger cascading shutter exit
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = originalOverflow;
        }, 320);
      }
    };

    animFrame = requestAnimationFrame(tick);

    // Fallback safety timeout
    const safety = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(safety);
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden">
          {/* Background: 5 Cascading Editorial Shutter Columns */}
          <div className="absolute inset-0 grid grid-cols-5 w-full h-full">
            {columns.map((colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ y: 0 }}
                exit={{
                  y: "-100%",
                  transition: {
                    duration: 0.85,
                    delay: colIndex * 0.055, // Cascading liquid shutter wave
                    ease: [0.85, 0, 0.15, 1], // Luxury cubic bezier
                  },
                }}
                className="relative h-full bg-[#080808] border-r border-white/[0.04] last:border-r-0"
              >
                {/* Micro-glow accent on bottom edge of each shutter */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFAD32]/40 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Foreground: Editorial Layout */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -35,
              transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
            }}
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-12 md:p-16 text-white"
          >
            {/* Top Corner Meta */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFAD32]" />
                <span className="font-semibold text-white">NOISECULTURE</span>
                <span className="text-neutral-500 hidden sm:inline">— CULTURE &amp; BRAND GROWTH</span>
              </div>
              <div className="text-neutral-400">
                <span>EST. 2026 // INDEPENDENT</span>
              </div>
            </div>

            {/* Center Stage: Oversized Masked Kinetic Typography */}
            <div className="my-auto max-w-5xl mx-auto w-full text-center py-6 sm:py-10">
              {/* Step indicator */}
              <div className="mb-4 sm:mb-6 overflow-hidden h-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wordIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFAD32]"
                  >
                    <span>[ {sequence[wordIndex].label} / 03 ]</span>
                    <span className="text-neutral-500">•</span>
                    <span>{sequence[wordIndex].subtitle}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Massive Bold Kinetic Headline */}
              <div className="overflow-hidden py-2">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={wordIndex}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1], // Swift editorial snap
                    }}
                    className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-none"
                  >
                    {sequence[wordIndex].text === "NOISECULTURE" ? (
                      <span className="inline-block">
                        NOISE<span className="text-[#FFAD32]">CULTURE</span>
                        <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#FFAD32] ml-2 sm:ml-4 align-baseline shadow-[0_0_20px_#FFAD32]" />
                      </span>
                    ) : (
                      <span className="text-white">
                        {sequence[wordIndex].text}
                      </span>
                    )}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Understated Minimalist Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xs sm:text-sm font-sans tracking-widest text-neutral-400 uppercase mt-4 sm:mt-6 font-medium"
              >
                Independent Culture-Driven Creative Agency
              </motion.p>
            </div>

            {/* Bottom Corner Meta & Precision Counter */}
            <div className="flex items-end justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
              <div className="hidden sm:block">
                <span className="text-neutral-500">FOOTPRINT:</span>
                <span className="text-white ml-2">DELHI • MUMBAI • JAIPUR</span>
              </div>

              <div className="flex items-baseline gap-2 ml-auto sm:ml-0">
                <span className="text-neutral-500 text-[10px]">PROGRESS</span>
                <div className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight tabular-nums">
                  <span className="text-[#FFAD32]">{counter.toString().padStart(3, "0")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
