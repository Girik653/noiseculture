"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { clientsList } from "@/data/clients";
import { AnimatedCurtainTransition } from "@/components/ui/AnimatedCurtainTransition";
import { Handshake, ArrowUpRight } from "lucide-react";

export function ClientMarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { damping: 30, stiffness: 90, mass: 0.4 });
  const contentOpacity = useTransform(smoothScroll, [0.1, 0.25, 0.8, 0.95], [0.5, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FFF8EA] text-[#080808] overflow-hidden"
    >
      {/* Top Animated Liquid Veil from Deep Black (Expertise) into Warm Ivory */}
      <AnimatedCurtainTransition
        direction="to-ivory"
        className="w-full"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-5 sm:px-8 relative z-20 py-20 sm:py-28"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono uppercase tracking-widest text-neutral-800 mb-4">
              <Handshake className="w-3.5 h-3.5 text-[#FFAD32]" />
              <span>BRAND COLLABORATORS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-[#080808]">
              GOOD COMPANY.<br />
              <span className="text-[#FFAD32]">BETTER COLLABORATIONS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-sans text-neutral-700 max-w-md leading-relaxed">
            From Fortune 500 institutions to viral hyper-growth platforms, we orchestrate cultural momentum that commands attention and leaves an indelible mark.
          </p>
        </div>

        {/* Clean Logo / Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 pt-12">
          {clientsList.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="h-full"
            >
              <Link
                href={client.slug ? `/brands/${client.slug}` : "/brands"}
                className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-black/10 hover:border-[#FFAD32] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[190px] sm:min-h-[205px] h-full group shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest truncate">
                    {client.category}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FFAD32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <div className="my-auto py-2">
                  <span className="text-xl sm:text-2xl font-display font-black tracking-tighter uppercase text-[#080808] group-hover:text-[#FFAD32] transition-colors block">
                    {client.name}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-600 block mt-1 line-clamp-2">
                    {client.tagline}
                  </span>
                </div>

                <div className="pt-2 border-t border-black/5 text-[9px] font-mono text-neutral-500 uppercase tracking-wider flex items-center justify-between gap-1">
                  <span className="truncate">{client.role}</span>
                  {client.stat && (
                    <span className="text-[#FFAD32] font-bold shrink-0">
                      {client.stat}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subtle Marquee Bar at bottom */}
        <div className="mt-14 pt-8 border-t border-black/10 overflow-hidden select-none">
          <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-default">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                <span>JIO PLATFORMS</span>
                <span className="text-[#FFAD32]">•</span>
                <span>PHONEPE</span>
                <span className="text-[#FFAD32]">•</span>
                <span>ZOMATO</span>
                <span className="text-[#FFAD32]">•</span>
                <span>VASELINE</span>
                <span className="text-[#FFAD32]">•</span>
                <span>BRITANNIA</span>
                <span className="text-[#FFAD32]">•</span>
                <span>NETFLIX INDIA</span>
                <span className="text-[#FFAD32]">•</span>
                <span>PARLE MELODY</span>
                <span className="text-[#FFAD32]">•</span>
                <span>INFINIX</span>
                <span className="text-[#FFAD32]">•</span>
                <span>REDMI</span>
                <span className="text-[#FFAD32]">•</span>
                <span>GOWARDHAN GHEE</span>
                <span className="text-[#FFAD32]">•</span>
                <span>DUOLINGO INDIA</span>
                <span className="text-[#FFAD32]">•</span>
                <span>KITKAT</span>
                <span className="text-[#FFAD32]">•</span>
                <span>ZEPTO</span>
                <span className="text-[#FFAD32]">•</span>
                <span>BLINKIT</span>
                <span className="text-[#FFAD32]">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Explore All Brand Dossiers */}
        <div className="mt-12 text-center">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#080808] text-white hover:bg-[#FFAD32] hover:text-[#080808] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Explore All 14 Brand Dossiers &amp; Breakdowns</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Bottom Animated Liquid Veil from Warm Ivory to Deep Black (Insights) */}
      <AnimatedCurtainTransition
        direction="to-dark"
        className="w-full"
      />
    </section>
  );
}
