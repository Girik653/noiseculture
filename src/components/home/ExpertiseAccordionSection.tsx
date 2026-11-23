"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, ServiceDetail } from "@/data/services";
import { ArrowUpRight, Plus, Minus, Layers } from "lucide-react";

export function ExpertiseAccordionSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const previewService = hoveredIndex !== null
    ? servicesData[hoveredIndex]
    : expandedIndex !== null
    ? servicesData[expandedIndex]
    : servicesData[0];

  return (
    <section className="relative bg-[#080808] text-white py-28 sm:py-36 overflow-hidden">
      {/* Soft Gradient Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITIES &amp; EXPERTISE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight">
              WHAT WE BRING<br />
              <span className="text-[#FFAD32]">TO THE CULTURE.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-sans text-neutral-400 max-w-md leading-relaxed">
            Eight interconnected capabilities orchestrated under one roof. No fragmented agency silos.
            Just synchronized cultural impact.
          </p>
        </div>

        {/* Main Grid: Outlined Typography Accordion on Left, Dynamic Image Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start">
          {/* Left Column: Typography Accordion List */}
          <div className="lg:col-span-8 divide-y divide-white/10">
            {servicesData.map((service, index) => {
              const isExpanded = expandedIndex === index;
              const isHovered = hoveredIndex === index;
              const isActive = isExpanded || isHovered;

              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`py-6 sm:py-8 px-4 -mx-4 rounded-2xl transition-all duration-300 group cursor-pointer ${
                    isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.02]"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-8 transition-transform duration-300 ease-out group-hover:translate-x-3 sm:group-hover:translate-x-4">
                      <span
                        className={`text-xs sm:text-sm font-mono tracking-wider font-bold transition-all duration-300 shrink-0 ${
                          isActive
                            ? "text-[#FFAD32] scale-110"
                            : "text-[#FFAD32]/80 group-hover:text-[#FFAD32] group-hover:scale-110"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-[#FFAD32] scale-[1.01]"
                            : "text-neutral-200 group-hover:text-[#FFAD32]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#FFAD32] text-black border-[#FFAD32] rotate-45 scale-110 shadow-[0_0_25px_rgba(255,173,50,0.5)]"
                            : "border-white/20 bg-white/[0.03] text-neutral-300 group-hover:border-[#FFAD32] group-hover:bg-[#FFAD32] group-hover:text-black group-hover:rotate-45 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,173,50,0.4)]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pl-8 sm:pl-16 pr-4 space-y-4">
                          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl">
                            {service.overview}
                          </p>

                          {/* Quick Capabilities Pills */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {service.capabilities.slice(0, 4).map((cap) => (
                              <span
                                key={cap}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>

                          <div className="pt-4">
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAD32] hover:text-white transition-colors"
                            >
                              <span>Explore Full Service Specifications</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Image Preview Card */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-white/15 p-4 shadow-2xl space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={previewService.slug}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={previewService.image}
                      alt={previewService.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white z-10">
                  <span className="text-[#FFAD32] font-bold">{previewService.number}.</span>
                  <span className="uppercase tracking-wider">{previewService.shortTitle}</span>
                </div>
              </div>

              <div className="space-y-2 px-1">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Culture Strategy
                </div>
                <div className="text-sm font-display font-bold text-white uppercase leading-snug">
                  {previewService.tagline}
                </div>
              </div>

              <Link
                href={`/services/${previewService.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-[#FFAD32] hover:text-black transition-colors text-xs font-mono uppercase tracking-wider font-bold text-white"
              >
                <span>Dedicated Service Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
