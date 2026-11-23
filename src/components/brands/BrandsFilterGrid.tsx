"use client";

import { useState } from "react";
import { BrandCard, CampaignData } from "./BrandCard";
import { motion, AnimatePresence } from "framer-motion";

interface BrandsFilterGridProps {
  campaigns: CampaignData[];
}

export function BrandsFilterGrid({ campaigns }: BrandsFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured" | "breakdown">("all");

  const featuredCount = campaigns.filter((c) => c.group === "featured").length;
  const breakdownCount = campaigns.filter((c) => c.group === "breakdown").length;
  const allCount = campaigns.length;

  // Default All, with featured campaigns sorted first
  const sortedCampaigns = [...campaigns].sort((a, b) => {
    if (a.group === "featured" && b.group !== "featured") return -1;
    if (a.group !== "featured" && b.group === "featured") return 1;
    return 0;
  });

  const filteredCampaigns = sortedCampaigns.filter((item) => {
    if (activeFilter === "all") return true;
    return item.group === activeFilter;
  });

  return (
    <div className="space-y-12">
      {/* Accessible Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter campaign categories"
        className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-2"
      >
        <button
          role="tab"
          aria-selected={activeFilter === "all"}
          aria-controls="campaigns-grid"
          id="tab-all"
          onClick={() => setActiveFilter("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32] ${
            activeFilter === "all"
              ? "bg-[#FFAD32] text-black font-bold shadow-[0_0_20px_rgba(255,173,50,0.35)]"
              : "bg-[#141414] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
          }`}
        >
          All ({allCount})
        </button>

        <button
          role="tab"
          aria-selected={activeFilter === "featured"}
          aria-controls="campaigns-grid"
          id="tab-featured"
          onClick={() => setActiveFilter("featured")}
          className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32] ${
            activeFilter === "featured"
              ? "bg-[#FFAD32] text-black font-bold shadow-[0_0_20px_rgba(255,173,50,0.35)]"
              : "bg-[#141414] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
          }`}
        >
          Featured ({featuredCount})
        </button>

        <button
          role="tab"
          aria-selected={activeFilter === "breakdown"}
          aria-controls="campaigns-grid"
          id="tab-breakdown"
          onClick={() => setActiveFilter("breakdown")}
          className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32] ${
            activeFilter === "breakdown"
              ? "bg-[#FFAD32] text-black font-bold shadow-[0_0_20px_rgba(255,173,50,0.35)]"
              : "bg-[#141414] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
          }`}
        >
          Breakdowns ({breakdownCount})
        </button>
      </div>

      {/* 3 Columns Desktop / 1 Column Mobile Grid */}
      <div
        id="campaigns-grid"
        role="tabpanel"
        aria-labelledby={`tab-${activeFilter}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCampaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <BrandCard campaign={campaign} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}