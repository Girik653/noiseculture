import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, CheckCircle2, HelpCircle, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do | Integrated Capabilities | NOISECULTURE",
  description:
    "Explore NoiseCulture's 8 interconnected capabilities: Public Relations, Paid Media, Meme Marketing, Influencer Marketing, Creator Management, Brand Strategy, Branding & 360° Campaigns.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      {/* Header Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          <Layers className="w-3.5 h-3.5" />
          <span>FULL-SPECTRUM AGENCY CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.95]">
              CULTURE-DRIVEN<br />
              <span className="text-[#FFAD32]">GROWTH SERVICES.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
              We reject fragmented agency handoffs. We orchestrate strategy, media, creators, memes, PR and visual design as one seamless growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (8 Interconnected Capabilities) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group block p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all duration-300 relative overflow-hidden"
            >
              {/* Image Preview on hover */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black/60 border border-white/10">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#FFAD32] font-bold border border-white/10">
                  {svc.number}. CAPABILITY
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors">
                    {svc.title}
                  </h2>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-[#FFAD32] group-hover:text-black transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-mono text-[#FFAD32] uppercase tracking-wider">
                  {svc.tagline}
                </p>

                <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                  {svc.definition}
                </p>

                {/* Capability tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {svc.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-neutral-400 border border-white/5"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AEO / GEO Agency FAQs */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
            <h3 className="text-lg font-display font-bold text-white uppercase mb-2">
              What does a creative marketing &amp; culture agency do?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              A modern culture agency like NoiseCulture synchronizes digital PR, influencer partnerships, viral meme distribution, performance paid media, and brand identity design. Instead of running disconnected ads, we integrate cultural relevance with measurable revenue growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
            <h3 className="text-lg font-display font-bold text-white uppercase mb-2">
              How does meme marketing work for serious or corporate brands?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Meme marketing embeds brand messaging into relatable, humorous native social formats. We apply strict brand safety standards while crafting clever situational humor that drives exponential organic engagement, lowers customer acquisition costs, and builds genuine affinity with Gen Z and millennial audiences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
            <h3 className="text-lg font-display font-bold text-white uppercase mb-2">
              Can we engage NoiseCulture for a single service or only integrated campaigns?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Both. Many clients begin with a targeted high-stakes project — such as an aggressive Tier-1 PR blitz, a meme distribution drop, or a full rebrand — and expand into a 360° retainer as business impact is proven.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-white transition-all shadow-xl"
        >
          <span>Discuss Your Campaign Needs</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
