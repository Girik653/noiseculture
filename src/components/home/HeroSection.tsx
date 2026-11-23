"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { AnimatedCurtainTransition } from "@/components/ui/AnimatedCurtainTransition";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Dynamic scroll-driven animation with spring momentum for buttery-smooth slide transitions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { damping: 30, stiffness: 90, mass: 0.4 });

  // Subtle Parallax exit for Hero content as user scrolls towards next section
  const contentOpacity = useTransform(smoothScroll, [0.35, 0.85], [1, 0.2]);
  const contentScale = useTransform(smoothScroll, [0.35, 0.85], [1, 0.98]);
  const contentY = useTransform(smoothScroll, [0.35, 0.85], [0, -35]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#FFF8EA] text-[#080808] pt-28 sm:pt-36 overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle Background Halftone Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#080808 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Brand Background Typography (Subtle Watermark) */}
      <div className="absolute bottom-4 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.035] leading-none">
        <span className="font-display font-black text-[18vw] tracking-tighter whitespace-nowrap block">
          NOISECULTURE
        </span>
      </div>

      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
        }}
        className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full"
      >
        {/* Top Monospace Descriptor */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-mono uppercase tracking-widest text-neutral-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFAD32]" />
          <span>INDEPENDENT CULTURE-DRIVEN GROWTH AGENCY</span>
        </motion.div>

        {/* 2-Column Grid: Headline & Supporting on Left, Custom Illustrated Collage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight text-[#080808] leading-[0.92]">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  WE MAKE
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  BRANDS
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-3">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-block text-[#FFAD32] drop-shadow-sm"
                >
                  UNMISSABLE.
                  {/* Decorative Scribble Underline Vector */}
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#080808] overflow-visible"
                    viewBox="0 0 250 12"
                    fill="none"
                  >
                    <path
                      d="M3 9C55 3 195 2 247 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-lg sm:text-xl text-neutral-700 font-sans max-w-xl leading-relaxed"
            >
              We bring creativity, culture, media and strategy together to make brands impossible to ignore.
              Zero background noise. Pure cultural resonance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#080808] text-white font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#FFAD32] hover:text-[#080808] shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <a
                href="#culture-section"
                className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-black/20 text-[#080808] font-mono text-xs uppercase tracking-wider font-semibold hover:border-black hover:bg-black/5 transition-all duration-200"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1" />
              </a>
            </motion.div>

            {/* Small Monospace Live Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-6 border-t border-black/10 flex items-center gap-6 text-xs font-mono text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Q4 CAMPAIGN ROSTER OPEN</span>
              </div>
              <div className="hidden sm:block text-neutral-400">•</div>
              <div className="hidden sm:block">GLOBAL REACH • NEW DELHI • MUMBAI • JAIPUR</div>
            </motion.div>
          </div>

          {/* Right Column: Custom Illustrated Editorial Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Liquid Wave / Veil Curtain Transition to Dark Culture Section */}
      <AnimatedCurtainTransition
        direction="to-dark"
        className="w-full mt-12 sm:mt-20"
      />
    </section>
  );
}
