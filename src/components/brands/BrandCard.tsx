import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GroupLabel } from "./GroupLabel";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

export interface CampaignData {
  id: string;
  group: "featured" | "breakdown";
  brand: string;
  title: string;
  when: string;
  summary: string;
  idea: string;
  how: string[];
  stat: string;
  stat_label: string;
  why: string;
  watchouts?: string;
  takeaway: string;
  role: string;
  credits: string;
  lead_image?: string;
  video?: {
    file: string;
    poster: string;
    caption: string;
  };
  images: Array<{
    file: string;
    alt: string;
    caption: string;
  }>;
  visual_refs?: Array<{
    label: string;
    url: string;
  }>;
  sources: Array<{
    label: string;
    url: string;
  }>;
}

interface BrandCardProps {
  campaign: CampaignData;
}

export function BrandCard({ campaign }: BrandCardProps) {
  const hasImage = Boolean(campaign.lead_image);

  // If a campaign has no image, render a distinctive text-only card in the dark aesthetic
  if (!hasImage) {
    return (
      <Link
        href={`/brands/${campaign.id}`}
        className="group relative rounded-3xl bg-[#141414] text-white p-7 sm:p-8 flex flex-col justify-between aspect-[4/5] border border-white/10 hover:border-[#FFAD32] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(255,173,50,0.16)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32] overflow-hidden"
      >
        {/* Ambient Radial Accent */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFAD32]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between gap-3">
            <GroupLabel group={campaign.group} />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              {campaign.when}
            </span>
          </div>

          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] font-semibold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{campaign.brand}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-white leading-tight group-hover:text-[#FFAD32] transition-colors">
              {campaign.title}
            </h3>
          </div>

          <p className="text-sm font-sans font-normal text-neutral-300 leading-relaxed line-clamp-4 max-w-prose">
            {campaign.summary}
          </p>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto relative z-10">
          {campaign.stat ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFAD32] text-black text-xs font-mono font-bold tracking-wider shadow-md">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{campaign.stat}</span>
            </span>
          ) : (
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Analysis Dossier
            </span>
          )}

          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#FFAD32] group-hover:text-black transition-colors">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    );
  }

  // Standard visual card with 4:5 image crop anchored to top
  return (
    <Link
      href={`/brands/${campaign.id}`}
      className="group relative rounded-3xl bg-[#141414] text-white border border-white/10 hover:border-[#FFAD32] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_24px_50px_rgba(255,173,50,0.18)] hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32]"
    >
      {/* 4:5 image crop anchored to top */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
        <Image
          src={campaign.lead_image!}
          alt={campaign.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40 opacity-80" />

        <div className="absolute top-4 left-4 z-10">
          <GroupLabel group={campaign.group} />
        </div>

        {campaign.stat && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFAD32] text-black text-xs font-mono font-bold shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{campaign.stat}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
            <span className="font-bold text-[#FFAD32]">{campaign.brand}</span>
            <span>{campaign.when}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-tight text-white group-hover:text-[#FFAD32] transition-colors leading-snug">
            {campaign.title}
          </h3>

          <p className="text-xs sm:text-sm font-sans font-normal text-neutral-300 mt-2.5 leading-relaxed line-clamp-3 max-w-prose">
            {campaign.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mt-auto">
          <span className="group-hover:text-[#FFAD32] font-semibold transition-colors">
            Read Case Dossier
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FFAD32] group-hover:text-black transition-colors">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}