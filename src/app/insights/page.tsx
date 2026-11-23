import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articlesData } from "@/data/insights";
import { ArrowUpRight, BookOpen, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture Insights & Field Notes | NOISECULTURE",
  description:
    "Original essays and strategic playbooks on meme marketing, creator economy monetization, AEO/GEO search architecture, and the future of attention.",
};

export default function InsightsIndexPage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>FIELD NOTES &amp; CULTURE MANIFESTOS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.95]">
              NOTES FROM<br />
              <span className="text-[#FFAD32]">THE TIMELINE.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
              We deconstruct internet culture, algorithmic ad economics, brand positioning, and the mechanics of turning virality into business equity.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articlesData.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#FFAD32] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Article Cover */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#FFAD32] font-semibold border border-white/10">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                  <span>{article.publishDate}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FFAD32]" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white group-hover:text-[#FFAD32] transition-colors leading-tight">
                  {article.title}
                </h2>

                <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
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
                    <div className="text-[10px] font-mono text-neutral-400">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-[#FFAD32] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
