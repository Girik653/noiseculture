import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData, ServiceDetail } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { siteConfig } from "@/data/siteConfig";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ArrowUpRight, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} Agency | NOISECULTURE`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | NOISECULTURE`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Find related case study
  const relatedWork = caseStudiesData.filter((cs) =>
    cs.relatedServices.some((rs) => rs.slug === service.slug)
  );

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const serviceSchema = generateServiceSchema({
    title: service.title,
    slug: service.slug,
    description: service.definition,
  });

  const faqSchema = generateFAQSchema(service.faqs);

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ]);

  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumb Bar */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#FFAD32]">{service.title}</span>
        </div>
      </section>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              <span>CAPABILITY {service.number} OF 08</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1]">
              {service.h1}
            </h1>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#FFAD32]">
              {service.tagline}
            </p>

            {/* AEO Definition Callout */}
            <div className="p-5 rounded-2xl bg-[#141414] border-l-4 border-[#FFAD32] text-sm text-neutral-300 leading-relaxed font-sans">
              <strong className="text-white block mb-1 font-mono uppercase text-xs tracking-wider">
                CORE DEFINITION:
              </strong>
              {service.definition}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFAD32] text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-lg"
              >
                <span>Request {service.shortTitle} Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Visual Poster */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs font-mono text-white/90">
                <span className="text-[#FFAD32] font-bold">NOISECULTURE DIRECTIVE //</span> {service.shortTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Problems Solved */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Key Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              Full Scope
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">
              WHAT WE DELIVER IN {service.shortTitle}.
            </h2>
            <ul className="space-y-4">
              {service.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-white/5 text-sm text-neutral-300 font-sans"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FFAD32] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problems Solved */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
              Commercial Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">
              FRICTION WE ELIMINATE.
            </h2>
            <div className="space-y-4">
              {service.problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-3"
                >
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                    [ THE PROBLEM ]
                  </div>
                  <p className="text-sm text-neutral-300 font-medium">
                    {item.problem}
                  </p>
                  <div className="text-xs font-mono text-[#FFAD32] uppercase tracking-wider font-semibold pt-2 border-t border-white/10">
                    [ NOISECULTURE SOLUTION ]
                  </div>
                  <p className="text-sm text-neutral-300">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach (3 Steps) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            OUR THREE-STEP EXECUTION.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.approach.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden group hover:border-[#FFAD32]/60 transition-all"
            >
              <div className="text-5xl font-display font-black text-white/20 group-hover:text-[#FFAD32]/40 transition-colors mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Case Study Showcase (if available) */}
      {relatedWork.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-1">
                Proof of Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">
                FEATURED {service.shortTitle.toUpperCase()} CASE STUDY.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1"
            >
              <span>All Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedWork.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all p-6 space-y-4"
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60">
                  <Image
                    src={cs.heroImage}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-mono text-neutral-400 uppercase">
                  {cs.client} • {cs.category}
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-2">
                  {cs.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Service FAQs */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 border-b border-white/10">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
            Detailed Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight">
            SERVICE FAQS.
          </h2>
        </div>

        <div className="space-y-6">
          {service.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-2"
            >
              <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white">
                {faq.question}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Related Services */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
          Explore Other Agency Capabilities
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {otherServices.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all group"
            >
              <div className="text-xs font-mono text-[#FFAD32] mb-1 font-bold">
                {s.number}.
              </div>
              <div className="text-sm font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors leading-tight">
                {s.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#141414] border border-[#FFAD32]/30 space-y-5">
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white">
            READY TO DEPLOY {service.shortTitle.toUpperCase()}?
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Schedule a confidential narrative or media strategy consultation with our senior creative directors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-white transition-all shadow-xl"
          >
            <span>Start {service.shortTitle} Briefing</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
