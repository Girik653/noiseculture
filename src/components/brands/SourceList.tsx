import React from "react";
import { ExternalLink } from "lucide-react";

interface SourceItem {
  label: string;
  url: string;
}

interface SourceListProps {
  sources: SourceItem[];
  className?: string;
}

export function SourceList({ sources, className = "" }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] font-bold">
        Cited Public Sources &amp; Industry Reporting
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {sources.map((src, idx) => (
          <a
            key={idx}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141414] border border-white/10 hover:border-[#FFAD32] text-neutral-300 hover:text-white text-xs font-mono transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFAD32]"
          >
            <span>{src.label}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FFAD32] shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}