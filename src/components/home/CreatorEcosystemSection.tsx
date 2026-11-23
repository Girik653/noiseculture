"use client";

import { motion } from "framer-motion";
import { NetworkGraph } from "@/components/ui/NetworkGraph";
import { Network, Zap } from "lucide-react";

export function CreatorEcosystemSection() {
  return (
    <section className="relative bg-[#080808] text-white py-28 sm:py-36 overflow-hidden">
      {/* Soft Gradient Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFAD32]/10 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]"
          >
            <Network className="w-3.5 h-3.5" />
            <span>INTERCONNECTED CULTURE NETWORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight"
          >
            BUILT ON CONNECTIONS.<br />
            <span className="text-[#FFAD32]">POWERED BY CULTURE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed"
          >
            We don’t treat creators as media buy checkboxes, and we don’t treat meme communities like billboards. We operate a living nerve center linking elite talent, subcultural publishers, and ambitious brands.
          </motion.p>
        </div>

        {/* Network Graph Interactive Visualization */}
        <NetworkGraph />
      </div>
    </section>
  );
}
