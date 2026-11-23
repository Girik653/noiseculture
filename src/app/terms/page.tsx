import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Engagement | NOISECULTURE",
  description: "NoiseCulture client engagement terms and creative intellectual property standards.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-white">
          TERMS OF ENGAGEMENT.
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          Last Updated: March 2026 • NoiseCulture Creative Operations
        </p>

        <div className="prose prose-invert max-w-none text-neutral-300 font-sans leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            By accessing {siteConfig.url} or entering into an agency client engagement with NoiseCulture, you agree to these Terms of Engagement.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            1. Intellectual Property &amp; Creative Assets
          </h2>
          <p>
            All custom creative concepts, campaign assets, brand identities, and editorial content produced under executed client contracts become the property of the client upon final settlement of invoices, subject to standard agency portfolio display rights.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            2. Brand Safety &amp; Non-Infringement
          </h2>
          <p>
            NoiseCulture maintains rigorous brand safety and intellectual property verification protocols across all meme syndication, influencer activations, and PR pitches.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            3. Governing Law
          </h2>
          <p>
            All agreements are governed by the commercial laws of India, with exclusive jurisdiction in the courts of New Delhi and Mumbai.
          </p>
        </div>
      </div>
    </main>
  );
}
