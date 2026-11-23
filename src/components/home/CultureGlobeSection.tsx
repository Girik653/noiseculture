"use client";

import { motion } from "framer-motion";
import { InteractiveGlobe } from "@/components/ui/InteractiveGlobe";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Globe, ShieldCheck } from "lucide-react";

export function CultureGlobeSection() {
  const stats = [
    {
      numericValue: 1,
      suffix: "B+",
      label: "Monthly Views & Impressions",
      desc: "Audited brand impressions generated monthly across viral social, streaming, and earned media.",
    },
    {
      numericValue: 150,
      suffix: "M+",
      label: "Meme & Publisher Network Reach",
      desc: "Direct access to top-tier meme channels and cultural aggregators.",
    },
    {
      numericValue: 500,
      suffix: "+",
      label: "Creator & Culture Collabs",
      desc: "High-impact creator activations, viral talent, and cultural pioneers moving timelines.",
    },
    {
      numericValue: 100,
      suffix: "%",
      label: "Intentional Noise",
      desc: "Zero generic stock ads. Every campaign engineered for cultural impact.",
    },
  ];

  return (
    <section
      id="culture-section"
      className="relative bg-[#080808] text-white pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden"
    >
      {/* Ambient Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFAD32]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL REACH • HYPERLOCAL CULTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight"
          >
            ATTENTION HAS<br />
            <span className="text-[#FFAD32]">NO BORDERS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed"
          >
            Internet culture travels at the speed of light. From memes born in Discord to tier-1 headlines across Delhi, Mumbai, Jaipur, London, and New York, we synchronize attention that moves markets.
          </motion.p>
        </div>

        {/* Globe & Surround Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Stats Cards with Animated Counters */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            {stats.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-3xl bg-[#141414]/90 backdrop-blur-md border border-white/10 hover:border-[#FFAD32]/60 transition-colors duration-300 group shadow-xl"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white group-hover:text-[#FFAD32] transition-colors tracking-tight leading-none">
                  <AnimatedCounter
                    value={item.numericValue}
                    suffix={item.suffix}
                    duration={1.8}
                  />
                </div>
                <div className="text-sm font-mono uppercase tracking-wider text-[#FFAD32] font-bold mt-3">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Photorealistic 3D Earth Globe */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <InteractiveGlobe />
          </div>

          {/* Right Stats Cards with Animated Counters */}
          <div className="lg:col-span-3 space-y-8 order-3">
            {stats.slice(2, 4).map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-3xl bg-[#141414]/90 backdrop-blur-md border border-white/10 hover:border-[#FFAD32]/60 transition-colors duration-300 group shadow-xl"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white group-hover:text-[#FFAD32] transition-colors tracking-tight leading-none">
                  <AnimatedCounter
                    value={item.numericValue}
                    suffix={item.suffix}
                    duration={1.8}
                  />
                </div>
                <div className="text-sm font-mono uppercase tracking-wider text-[#FFAD32] font-bold mt-3">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-300"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FFAD32] shrink-0" />
            <span>AUTHENTICITY GUARANTEED: Zero bot traffic, zero fraudulent engagement, 100% verified distribution across 1B+ monthly views.</span>
          </div>
          <div className="text-[#FFAD32] font-bold uppercase tracking-wider shrink-0">
            AUDITED NETWORK 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
