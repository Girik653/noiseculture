import { Metadata } from "next";
import Link from "next/link";
import creatorsData from "@/data/creators.json";
import { CreatorApplicationForm } from "@/components/forms/CreatorApplicationForm";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Compass,
  FileCheck,
  HeartHandshake,
  Layers,
  MapPin,
  MessageCircle,
  Network,
  Plane,
  Receipt,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Tv,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: creatorsData.metaTitle,
  description: creatorsData.metaDescription,
  openGraph: {
    title: creatorsData.metaTitle,
    description: creatorsData.metaDescription,
    url: "https://noiseculture.in/for-creators",
    siteName: "NoiseCulture",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoiseCulture — For Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: creatorsData.metaTitle,
    description: creatorsData.metaDescription,
    images: ["/og-image.jpg"],
  },
};

// Benefit icon mapper
const benefitIcons = [
  Briefcase, // Brand deals that last
  TrendingUp, // Help growing your channel
  Video, // Support from idea to upload
  Plane, // Sponsored creator trips
  Sparkles, // Build a brand with us
  Users, // Supporting cast, found for you
];

// "Also with us" icon mapper
const alsoIcons = [
  FileCheck, // Written contracts
  Sparkles, // Creative freedom
  ShieldCheck, // Free to say no
  Receipt, // Invoicing and tax guidance
  HeartHandshake, // A creator community
];

export default function ForCreatorsPage() {
  const { hero, benefits, alsoWithUs, trips, steps, faqs } = creatorsData;

  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24 selection:bg-[#FFAD32] selection:text-[#080808]">
      {/* 1. HERO BLOCK */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 border-b border-white/10 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFAD32]/10 border border-[#FFAD32]/30 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>{hero.eyebrow}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.96]">
              YOUR TALENT.<br />
              OUR NETWORK.<br />
              <span className="text-[#FFAD32]">BIGGER POSSIBILITIES.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2 space-y-6">
            <p className="text-neutral-300 text-base sm:text-lg font-sans leading-relaxed">
              {hero.text}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={hero.primaryCta.href}
                className="px-6 py-3.5 rounded-full bg-[#FFAD32] text-black font-mono text-xs uppercase tracking-wider font-bold transition-all hover:bg-white hover:text-black flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAD32]"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS BLOCK (Six Cards) */}
      <section id="benefits" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10 scroll-mt-24">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
          Creator Architecture
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase text-white mb-12">
          {creatorsData.benefitsHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = benefitIcons[idx % benefitIcons.length];
            return (
              <div
                key={b.id}
                className="p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#FFAD32]/80 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFAD32] mb-6 group-hover:scale-105 group-hover:bg-[#FFAD32]/10 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase text-white mb-3 group-hover:text-[#FFAD32] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                    {b.text}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  Benefit 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ALSO WITH US (Compact row of five points) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 border-b border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
          Core Standards
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white mb-8">
          {creatorsData.alsoWithUsHeading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {alsoWithUs.map((item, idx) => {
            const Icon = alsoIcons[idx % alsoIcons.length];
            return (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#111111] border border-white/10 flex flex-col justify-between space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFAD32]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CREATOR TRIPS AND COLLABORATIONS (Replaces Current Roster) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              <Compass className="w-3.5 h-3.5" />
              <span>Collaborative Field Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase text-white leading-tight">
              {trips.title}
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              {trips.text}
            </p>

            <div className="space-y-3 pt-2">
              {trips.bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm font-mono text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-[#FFAD32] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Original Graphic in Site Dark Theme with Orange Accent (Route / Journey style) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/15 p-8 sm:p-10 overflow-hidden shadow-2xl">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6 flex items-center justify-between">
                <span>Trip Architecture</span>
                <span>Collaboration Route</span>
              </div>

              {/* Waypoint Connection Map Graphic */}
              <div className="relative space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFAD32] text-black flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-lg">
                      01
                    </div>
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#FFAD32] to-white/20" />
                  </div>
                  <div className="pt-1.5">
                    <div className="text-sm font-display font-bold uppercase text-white">
                      Group Creator Cohort
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Cross-pollinating creative perspectives in new environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-[#FFAD32] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                      02
                    </div>
                    <div className="w-0.5 h-12 bg-gradient-to-b from-white/20 to-white/10" />
                  </div>
                  <div className="pt-1.5">
                    <div className="text-sm font-display font-bold uppercase text-white">
                      Joint Collaboration Content
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Organic crossover videos, podcast conversations, and shared formats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-[#FFAD32] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                      03
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <div className="text-sm font-display font-bold uppercase text-white">
                      Arranged Brand Projects
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      On-location commercial activations integrated seamlessly into trip narratives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional gallery: hidden while empty per brief */}
              {trips.gallery && trips.gallery.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
                  {/* Photo gallery will render here once founder supplies photos */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK WITH YOU (Four Steps) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
          Onboarding Blueprint
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase text-white mb-12">
          {creatorsData.stepsHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-mono font-bold text-[#FFAD32] mb-6">
                  {st.step}
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {st.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQS BLOCK */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
          Clear Answers
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase text-white mb-12">
          {creatorsData.faqsHeading}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-2.5"
            >
              <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase">
                {faq.q}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. APPLICATION FORM */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <CreatorApplicationForm />
      </section>

      {/* 8. CLOSING CREED & CONTACT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] via-[#111111] to-[#0A0A0A] border border-white/10 p-10 sm:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
              Closing Creed
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
              NOISE WITH <span className="text-[#FFAD32]">INTENT.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-lg">
              Have questions or want to speak with our partnership leads before applying?
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white hover:text-black self-start md:self-auto shrink-0 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAD32]"
          >
            <span>Start A Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
