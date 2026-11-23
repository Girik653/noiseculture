"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { articlesData } from "@/data/insights";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";

export function EditorialInsightsSection() {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="relative bg-[#080808] text-white pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EDITORIAL &amp; FIELD NOTES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight">
              A LITTLE MORE<br />
              <span className="text-[#FFAD32]">TO THE CULTURE.</span>
            </h2>
          </div>

          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <span>Explore All Culture Notes</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="group flex flex-col justify-between"
            >
              <Link href={`/insights/${article.slug}`} className="block focus:outline-none">
                {/* Article Cover Poster */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-[#FFAD32] transition-all duration-300 mb-5 shadow-lg">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#FFAD32] font-semibold border border-white/10">
                    {article.category}
                  </div>
                </div>

                {/* Article Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span>{article.publishDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FFAD32]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-[#FFAD32] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {article.subtitle}
                  </p>
                </div>
              </Link>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-mono text-neutral-300">
                    {article.author.name}
                  </span>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-[#FFAD32] group-hover:text-black transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
