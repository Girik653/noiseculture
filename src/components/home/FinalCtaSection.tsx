"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FinalCtaSection() {
  return (
    <section className="relative bg-[#080808] text-white py-28 sm:py-40 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Soft Gradient Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Dynamic Background Halftone & Glow */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFAD32]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono uppercase tracking-widest text-[#FFAD32]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE CONVERSATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold uppercase tracking-tight leading-[0.9] text-white"
        >
          LET&apos;S MAKE<br />
          <span className="text-[#FFAD32]">SOME NOISE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-2xl font-sans text-neutral-300 max-w-2xl mx-auto leading-relaxed"
        >
          Have a brand to build, a campaign to launch, or a conversation to start?
          We are ready when you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-9 py-5 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-extrabold transition-all duration-300 hover:bg-white hover:text-black shadow-[0_0_40px_rgba(255,173,50,0.4)] hover:scale-105"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all border border-white/10"
          >
            <MessageCircle className="w-4 h-4 text-[#FFAD32]" />
            <span>DIRECT WHATSAPP</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
