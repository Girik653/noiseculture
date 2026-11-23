import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { NoiseBadge } from "@/components/ui/NoiseBadge";
import { ArrowUpRight, CheckCircle2, Flame, ShieldAlert, Sparkles, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | NOISECULTURE — Independent Culture-Driven Growth Agency",
  description:
    "We are an independent creative agency built at the collision of culture, media, PR, and internet humor. Learn about our beliefs, creative philosophy, and approach.",
};

export default function AboutPage() {
  const beliefs = [
    {
      title: "SHOW, DON'T EXPLAIN.",
      desc: "Nobody reads corporate mission statements. We make brands unmissable by creating work so arresting that attention is surrendered voluntarily.",
      icon: Flame,
    },
    {
      title: "ATTENTION WITHOUT RELEVANCE IS A GIMMICK.",
      desc: "Anyone can create a stunt. We engineer cultural relevance that converts curiosity into brand equity, customer trust, and scalable revenue.",
      icon: Target,
    },
    {
      title: "CULTURE MOVES AT TIMELINE SPEED.",
      desc: "Bureacratic quarterly approval chains kill momentum. We operate with newsroom agility, hijacking trends 18 hours before mainstream pickup.",
      icon: Zap,
    },
    {
      title: "ONE PARTNER. ZERO AGENCY SILOS.",
      desc: "When PR, creators, meme distribution, and paid media are synchronized by one room, there is zero friction and maximum compound leverage.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          <span>THE NOISECULTURE CREED</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.95]">
              WE DON&apos;T DO<br />
              <span className="text-[#FFAD32]">BACKGROUND NOISE.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
              We are an independent, culture-driven growth agency. Built for brands that refuse to blend into the beige wallpaper of the modern internet.
            </p>
          </div>
        </div>
      </section>

      {/* Massive Editorial Photo & Rotating Badge */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/15 bg-[#141414]">
          <Image
            src="/images/about/collective.jpg"
            alt="NoiseCulture Creative Room"
            fill
            className="object-cover contrast-110 filter grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Integrated Floating Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20">
            <NoiseBadge dark={true} />
          </div>

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 max-w-md">
            <div className="text-xs font-mono text-[#FFAD32] uppercase tracking-widest mb-1">
              Location &amp; Footprint
            </div>
            <div className="text-lg sm:text-2xl font-display font-bold uppercase text-white">
              NEW DELHI • MUMBAI • JAIPUR • GLOBAL TIMELINES
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy / Our Beliefs */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 border-b border-white/10">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
            What Governs Our Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight">
            OUR CORE OPERATING BELIEFS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beliefs.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#FFAD32]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFAD32] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white mb-3 group-hover:text-[#FFAD32] transition-colors">
                  {b.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What We Stand Against */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1A160F] to-[#0A0A0A] border border-[#FFAD32]/30 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              Anti-Corporate Stance
            </div>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white leading-tight">
              NO CORPORATE CRINGE.<br />NO FAKE METRICS.
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              We reject vanity impressions, bot-inflated influencer follower counts, and sanitised ads that test well in focus groups but die unclicked on feeds. We build work meant to be remembered.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white shrink-0 self-start md:self-center shadow-xl"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* Final CTA link */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 text-center">
        <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
          Next Step
        </div>
        <Link
          href="/work"
          className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white hover:text-[#FFAD32] transition-colors inline-flex items-center gap-3"
        >
          <span>See How We Put Intent Into Action</span>
          <ArrowUpRight className="w-6 h-6 text-[#FFAD32]" />
        </Link>
      </section>
    </main>
  );
}
