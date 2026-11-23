import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import campaignsDataRaw from "@/data/campaigns.json";
import { CampaignData } from "@/components/brands/BrandCard";
import { GroupLabel } from "@/components/brands/GroupLabel";
import { StatPanel } from "@/components/brands/StatPanel";
import { Timeline } from "@/components/brands/Timeline";
import { SourceList } from "@/components/brands/SourceList";
import { DisclaimerNote } from "@/components/brands/DisclaimerNote";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Lightbulb,
  Compass,
  Award,
  ExternalLink,
  ShieldCheck,
  Film,
} from "lucide-react";

const campaigns = campaignsDataRaw as CampaignData[];

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return campaigns.map((campaign) => ({
    slug: campaign.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const campaign = campaigns.find((c) => c.id === params.slug);
  if (!campaign) {
    return { title: "Campaign Not Found | NoiseCulture" };
  }

  const isFeatured = campaign.group === "featured";
  const titlePrefix = isFeatured ? "Featured Work: " : "Campaign Breakdown: ";

  return {
    title: `${titlePrefix}${campaign.brand} — ${campaign.title} | NoiseCulture`,
    description: campaign.summary,
    alternates: {
      canonical: `${siteConfig.url}/brands/${campaign.id}`,
    },
    openGraph: {
      title: `${campaign.brand} — ${campaign.title}`,
      description: campaign.summary,
      url: `${siteConfig.url}/brands/${campaign.id}`,
      siteName: siteConfig.name,
      images: campaign.lead_image ? [{ url: campaign.lead_image }] : [],
      type: "article",
    },
  };
}

export default function CampaignDossierPage({ params }: PageProps) {
  const campaign = campaigns.find((c) => c.id === params.slug);

  if (!campaign) {
    notFound();
  }

  const isFeatured = campaign.group === "featured";
  const hasStat = Boolean(campaign.stat && campaign.stat_label);
  const roleText = campaign.role ? campaign.role : "Delivered with partner agencies";

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-28 pb-24">
      {/* Back Link Breadcrumb */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8">
        <Link
          href="/brands"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAD32] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32] px-2 py-1 rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Campaigns &amp; Breakdowns</span>
        </Link>
      </div>

      <article className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        {/* BLOCK 1: Header (brand, title, when, group label) */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <GroupLabel group={campaign.group} />
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {campaign.when}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-sm font-mono text-[#FFAD32] font-bold uppercase tracking-widest">
              {campaign.brand}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[1.02]">
              {campaign.title}
            </h1>
          </div>
        </header>

        {/* BLOCK 2: Hero (lead image beside brand & title with pink stat chip; or blue band if no image) */}
        {campaign.lead_image ? (
          <section className="rounded-3xl overflow-hidden bg-[#141414] border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="md:col-span-7 space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFAD32] font-bold">
                  Campaign Executive Brief
                </span>
                <p className="text-lg sm:text-2xl font-bold text-white leading-snug">
                  {campaign.summary}
                </p>
              </div>

              {hasStat && (
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#FFAD32] text-black font-mono text-xs font-bold tracking-wider shadow-lg">
                  <TrendingUp className="w-4 h-4" />
                  <span>KEY METRIC: {campaign.stat}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/50">
              <Image
                src={campaign.lead_image}
                alt={campaign.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </section>
        ) : (
          <section className="rounded-3xl bg-[#141414] text-white p-8 sm:p-14 shadow-2xl border border-white/10 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              {campaign.brand} • Executive Breakdown
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight font-display">
              {campaign.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 max-w-prose leading-relaxed">
              {campaign.summary}
            </p>
            {hasStat && (
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFAD32] text-black font-mono text-xs font-bold tracking-wider shadow-md">
                  <TrendingUp className="w-4 h-4" />
                  <span>KEY FIGURE: {campaign.stat}</span>
                </span>
              </div>
            )}
          </section>
        )}

        {/* BLOCK 3: The Idea (paragraph) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold">
            <Lightbulb className="w-4 h-4" />
            <span>01 • The Strategic Idea</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            Core Premise
          </h2>
          <p className="text-base sm:text-lg font-normal text-neutral-300 leading-relaxed max-w-prose font-sans">
            {campaign.idea}
          </p>
        </section>

        {/* BLOCK 4: How It Ran (vertical timeline with electric orange nodes) */}
        <section className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold">
            <Compass className="w-4 h-4" />
            <span>02 • Execution Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            How It Ran
          </h2>
          <div className="pt-2">
            <Timeline steps={campaign.how} />
          </div>
        </section>

        {/* BLOCK 5: Reported Result (big stat in electric orange on dark panel with stat_label underneath) */}
        {hasStat && (
          <section className="pt-6">
            <StatPanel stat={campaign.stat} statLabel={campaign.stat_label} />
          </section>
        )}

        {/* BLOCK 6: Why It Worked (paragraph) */}
        <section className="space-y-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold">
            <Award className="w-4 h-4" />
            <span>03 • Strategic Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            Why It Worked
          </h2>
          <p className="text-base sm:text-lg font-normal text-neutral-300 leading-relaxed max-w-prose font-sans">
            {campaign.why}
          </p>
        </section>

        {/* BLOCK 7: Watch-outs (where given) */}
        {campaign.watchouts && (
          <section className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>04 • Brand Safety &amp; Watch-Outs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
              Critical Nuances
            </h2>
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 text-neutral-300 leading-relaxed max-w-prose text-sm sm:text-base font-sans">
              {campaign.watchouts}
            </div>
          </section>
        )}

        {/* BLOCK 8: What Brands Can Take From It (takeaway paragraph) */}
        <section className="space-y-4 pt-6 border-t border-white/10">
          <div className="text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold">
            <span>05 • Key Takeaway for Brand Leaders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            Actionable Insight
          </h2>
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181818] to-[#111111] border border-[#FFAD32]/40 text-white space-y-2 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] font-semibold">
              Playbook Summary
            </span>
            <p className="text-lg sm:text-xl font-bold leading-snug">
              {campaign.takeaway}
            </p>
          </div>
        </section>

        {/* BLOCK 9: Role and Credits */}
        <section className="space-y-3 pt-6 border-t border-white/10">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">
            Role &amp; Attribution
          </h2>
          {isFeatured ? (
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-2 text-sm font-mono text-neutral-300">
              <div>
                <span className="font-bold text-[#FFAD32]">Noise Culture Role:</span>{" "}
                <span>{roleText}</span>
              </div>
              {campaign.credits && (
                <div>
                  <span className="font-bold text-[#FFAD32]">Credits:</span>{" "}
                  <span>{campaign.credits}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 text-sm font-mono text-neutral-400">
              Breakdown by Noise Culture of publicly reported work.
            </div>
          )}
        </section>

        {/* BLOCK 10: Visuals (every image with caption, videos with poster, plus "See the original" links) */}
        <section className="space-y-8 pt-8 border-t border-white/10">
          <div>
            <div className="text-xs font-mono text-[#FFAD32] uppercase tracking-widest font-bold mb-1">
              Campaign Visual Evidence
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
              Media Gallery
            </h2>
          </div>

          {/* Video Player if provided (Gowardhan #30, Cartesia #32) */}
          {campaign.video && (
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFAD32] uppercase tracking-wider">
                <Film className="w-3.5 h-3.5" />
                <span>Original Campaign Video Asset</span>
              </div>
              <div className="rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl">
                <video
                  controls
                  preload="none"
                  poster={campaign.video.poster}
                  className="w-full max-h-[580px] object-contain mx-auto"
                >
                  <source src={campaign.video.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed italic text-center pt-1">
                {campaign.video.caption}
              </p>
            </div>
          )}

          {/* Images Gallery */}
          {campaign.images && campaign.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {campaign.images.map((img, idx) => (
                <div key={idx} className="space-y-3 flex flex-col justify-between">
                  {/* Alt text displayed above as per section 8 */}
                  <div className="text-[11px] font-mono text-neutral-400 line-clamp-2">
                    <span className="text-[#FFAD32] font-semibold uppercase">Alt:</span> {img.alt}
                  </div>

                  {/* Image container: object-fit: contain */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 p-2 shadow-md flex items-center justify-center">
                    <Image
                      src={img.file}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Caption underneath */}
                  <p className="text-xs font-mono text-neutral-400 leading-relaxed pt-1">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#141414] border border-white/10 text-xs font-mono text-neutral-400 text-center">
              No visual files were packaged for this breakdown in the initial bundle. Refer to original links below.
            </div>
          )}

          {/* Visual External References ("See the original" links) */}
          {campaign.visual_refs && campaign.visual_refs.length > 0 && (
            <div className="pt-4 space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold block">
                Original Media Archives:
              </span>
              <div className="flex flex-wrap gap-3">
                {campaign.visual_refs.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] text-neutral-300 hover:text-white text-xs font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32]"
                  >
                    <span>{ref.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFAD32]" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* BLOCK 11: Sources (sources as links opening in a new tab) */}
        <section className="pt-6 border-t border-white/10">
          <SourceList sources={campaign.sources} />
        </section>

        {/* Section 8 Disclaimer Note */}
        <section className="pt-4">
          <DisclaimerNote />
        </section>

        {/* BLOCK 12: Call to Action */}
        <section className="p-8 sm:p-14 rounded-3xl bg-[#141414] border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFAD32]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] font-bold">
              Ready to Engineer Cultural Resonance?
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
        </section>
      </article>
    </main>
  );
}