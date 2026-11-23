import { Metadata } from "next";
import Image from "next/image";
import { creatorsRoster } from "@/data/creators";
import { CreatorApplicationForm } from "@/components/forms/CreatorApplicationForm";
import { ArrowUpRight, CheckCircle2, DollarSign, Flame, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "For Creators | Talent Representation & Growth | NOISECULTURE",
  description:
    "We represent elite digital creators, managing brand partnerships, career strategy, legal negotiations, and multi-million dollar business ventures.",
};

export default function ForCreatorsPage() {
  const pillars = [
    {
      title: "TIER-1 BRAND PARTNERSHIPS",
      desc: "We negotiate multi-campaign ambassadorships and exclusive sponsorships with top-tier consumer, tech, fashion, and lifestyle brands.",
      icon: DollarSign,
    },
    {
      title: "ENTERPRISE INCUBATION",
      desc: "Turn your audience into enduring equity. We co-found, fund, and launch direct-to-consumer consumer products, podcasts, and digital franchises.",
      icon: Sparkles,
    },
    {
      title: "WHITE-GLOVE BACK OFFICE",
      desc: "We handle inbound inquiry filtering, rate negotiations, contract rights, deliverable scheduling, and invoice collections so you just create.",
      icon: Users,
    },
    {
      title: "CROSS-PLATFORM SYNDICATION",
      desc: "Diversify beyond YouTube and Instagram algorithms into owned newsletter communities, private Discord networks, and live tours.",
      icon: TrendingUp,
    },
  ];

  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFAD32]/10 border border-[#FFAD32]/30 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>TALENT REPRESENTATION &amp; BUSINESS CO-PILOTS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.95]">
              YOUR TALENT.<br />
              OUR NETWORK.<br />
              <span className="text-[#FFAD32]">BIGGER POSSIBILITIES.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
              Creators are the media conglomerates of tomorrow. We build the commercial infrastructure, negotiate the eight-figure deals, and turn personal influence into enduring enterprise equity.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-4">
          Representation Architecture
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase text-white mb-12">
          WHAT WE MANAGE FOR OUR TALENT ROSTER.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFAD32] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold uppercase text-white mb-2 group-hover:text-[#FFAD32] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Roster Showcase */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-2">
              Current Roster
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase text-white">
              CREATORS DEFINING CULTURE.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            TOTAL REACH: <span className="text-[#FFAD32] font-bold">40M+ AUDIENCE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {creatorsRoster.map((creator) => (
            <div
              key={creator.id}
              className="rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all duration-300 p-5 space-y-4 group shadow-xl"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#FFAD32] font-bold border border-white/10">
                  {creator.totalReach} COMBINED
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors">
                  {creator.name}
                </h3>
                <div className="text-xs font-mono text-neutral-400">
                  {creator.handle}
                </div>
                <div className="text-xs text-neutral-300 mt-2 line-clamp-2">
                  {creator.bio}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {creator.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
        <CreatorApplicationForm />
      </section>
    </main>
  );
}
