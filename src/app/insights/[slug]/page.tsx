import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData, Article } from "@/data/insights";
import { siteConfig } from "@/data/siteConfig";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ArrowLeft, ArrowUpRight, ChevronRight, Clock, Quote, Share2, Sparkles } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | NOISECULTURE Insights`,
    description: article.summary,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${siteConfig.url}/insights/${article.slug}`,
      images: [{ url: article.featuredImage }],
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author.name],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const otherArticles = articlesData.filter((a) => a.slug !== article.slug);

  const articleSchema = generateArticleSchema({
    title: article.title,
    subtitle: article.subtitle,
    slug: article.slug,
    publishDate: article.publishDate,
    author: { name: article.author.name },
    featuredImage: article.featuredImage,
    summary: article.summary,
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Insights", url: `${siteConfig.url}/insights` },
    { name: article.title, url: `${siteConfig.url}/insights/${article.slug}` },
  ]);

  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#FFAD32] truncate">{article.category}</span>
        </div>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="space-y-6 pb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author & Meta Line */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white">
                  {article.author.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#FFAD32]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="my-10">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#141414] border border-white/10 shadow-2xl">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Executive Takeaways Callout */}
        <div className="p-8 rounded-3xl bg-[#141414] border border-[#FFAD32]/40 mb-12 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] font-bold">
            EXECUTIVE TAKEAWAYS //
          </div>
          <ul className="space-y-2.5">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                <span className="text-[#FFAD32] font-bold">0{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-12">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-tight">
                {section.heading}
              </h2>

              <div className="space-y-4 text-neutral-300 font-sans leading-relaxed text-base sm:text-lg">
                {section.body.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {section.quote && (
                <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#1A160F] border-l-4 border-[#FFAD32] text-lg sm:text-xl font-display italic text-white leading-relaxed">
                  &ldquo;{section.quote}&rdquo;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Return Button */}
        <div className="pt-12 mt-12 border-t border-white/10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FFAD32] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Field Notes</span>
          </Link>
        </div>
      </article>

      {/* Related Reading */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 mt-20 border-t border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          Further Reading
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherArticles.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all group"
            >
              <div className="text-[10px] font-mono text-[#FFAD32] uppercase mb-2">
                {item.category}
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors line-clamp-2">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
