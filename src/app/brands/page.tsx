import { Metadata } from "next";
import campaignsDataRaw from "@/data/campaigns.json";
import { CampaignData } from "@/components/brands/BrandCard";
import { BrandsFilterGrid } from "@/components/brands/BrandsFilterGrid";
import { DisclaimerNote } from "@/components/brands/DisclaimerNote";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "The Work Behind the Noise — Brands & Campaign Breakdowns | NoiseCulture",
  description:
    "Campaigns we contributed to through partners, and the viral culture campaigns India is talking about, thoroughly analysed.",
  alternates: {
    canonical: `${siteConfig.url}/brands`,
  },
  openGraph: {
    title: "The Work Behind the Noise — NoiseCulture Brands Section",
    description: "Campaigns we contributed to, and the campaigns India is talking about, broken down.",
    url: `${siteConfig.url}/brands`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const campaignsData = campaignsDataRaw as CampaignData[];

export default function BrandsIndexPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* 1. Hero on Deep Black with Signature NoiseCulture Lighting */}
      <section className="relative bg-[#080808] text-white pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Ambient Radial Accent Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFAD32]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOISECULTURE CAMPAIGN ARCHIVE &amp; BREAKDOWNS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.92] max-w-4xl">
            The work behind<br />
            <span className="text-[#FFAD32]">the noise.</span>
          </h1>

          <p className="text-base sm:text-xl font-normal text-neutral-300 max-w-2xl leading-relaxed">
            Campaigns we contributed to, and the campaigns India is talking about, broken down.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="text-white font-bold">14 IN-DEPTH DOSSIERS</span>
            <span>•</span>
            <span className="text-[#FFAD32]">3 FEATURED COLLABS</span>
            <span>•</span>
            <span>11 CULTURE BREAKDOWNS</span>
          </div>
        </div>
      </section>

      {/* 2 & 3. Filter Tabs + Card Grid (3 cols desktop, 1 col mobile) */}
      <section className="py-16 sm:py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <BrandsFilterGrid campaigns={campaignsData} />

          {/* 4. Footer Note: Disclaimer Text from Section 8 */}
          <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10">
            <DisclaimerNote />
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-12 p-8 sm:p-14 rounded-3xl bg-[#141414] border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-1">
              <span className="text-xs font-mono uppercase text-[#FFAD32] tracking-widest font-bold block mb-1">
                Collaborate With Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
                Want a campaign like this?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
                We engineer culture-first PR, viral memes, performance media and creator distribution.
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-extrabold hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,173,50,0.35)] shrink-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32]"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}