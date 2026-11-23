"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import campaignsDataRaw from "@/data/campaigns.json";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from "lucide-react";

interface CampaignItem {
  id: string;
  group: "featured" | "breakdown";
  brand: string;
  title: string;
  when: string;
  summary: string;
  stat?: string;
  stat_label?: string;
  lead_image?: string;
}

const campaignsList = (campaignsDataRaw as CampaignItem[]).filter(
  (c) => Boolean(c.lead_image)
);

const filterCategories = ["All Campaigns", "Featured Collabs", "Culture Breakdowns"];

export function CampaignGallerySection() {
  const [activeFilter, setActiveFilter] = useState("All Campaigns");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredCampaigns = campaignsList.filter((item) => {
    if (activeFilter === "All Campaigns") return true;
    if (activeFilter === "Featured Collabs") return item.group === "featured";
    if (activeFilter === "Culture Breakdowns") return item.group === "breakdown";
    return true;
  });

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#080808] text-white py-24 sm:py-32 overflow-hidden">
      {/* Soft Gradient Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CULTURE &amp; BRAND CAMPAIGNS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight">
              THE WORK BEHIND<br />
              <span className="text-[#FFAD32]">THE NOISE.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/brands"
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#FFAD32] flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All 14 Dossiers</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Left/Right Scroll Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFAD32] hover:text-black transition-colors"
                aria-label="Scroll gallery right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-8 pt-2">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFAD32] text-black font-bold shadow-md"
                    : "bg-[#141414] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="shrink-0 w-[300px] sm:w-[380px] md:w-[440px] group"
              >
                <Link href={`/brands/${project.id}`} className="block focus:outline-none">
                  {/* Vertical Poster Container */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-[#FFAD32] transition-all duration-500 shadow-2xl group-hover:-translate-y-2.5 group-hover:shadow-[0_24px_50px_rgba(255,173,50,0.18)]">
                    <Image
                      src={project.lead_image!}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 300px, 440px"
                    />

                    {/* Gradient Atmosphere Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-[#FFAD32] font-semibold">
                        {project.group === "featured" ? "Featured Collab" : "Breakdown"}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#FFAD32] group-hover:text-black transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Bottom Metadata & Hero Metric */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
                      <div className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                        {project.brand} • {project.when}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight leading-tight group-hover:text-[#FFAD32] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Stat Badge */}
                      {project.stat && (
                        <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                          <span className="text-neutral-400">KEY METRIC</span>
                          <span className="text-[#FFAD32] font-bold flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" />
                            {project.stat}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}