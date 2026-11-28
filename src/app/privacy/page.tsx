import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | NOISECULTURE",
  description: "NoiseCulture privacy policy and data governance practices.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-white">
          PRIVACY POLICY.
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          Last Updated: March 2026 • NoiseCulture Media &amp; Creative Studio
        </p>

        <div className="prose prose-invert max-w-none text-neutral-300 font-sans leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            NoiseCulture (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates {siteConfig.url}. This document outlines our transparent protocols regarding the collection, use, and disclosure of personal data when you interact with our website or submit project briefs.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            1. Information Collection and Intent
          </h2>
          <p>
            We collect personal details that you voluntarily supply via our contact forms, creator representation applications, or direct email inquiries. This includes your name, email address, phone number, company name, social media handles, and project details. We do not sell, rent, or monetize your contact information.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            2. Creator Applications &amp; Talent Evaluation
          </h2>
          <p>
            When you apply through our creator application form at {siteConfig.url}/for-creators, we collect your full name, email address, WhatsApp contact number, city, content language(s), primary platform, social handle or channel URL, content niche, combined audience tier, collaboration preferences (such as brand deals, channel growth, production support, creator trips, brand building, or supporting cast), and optional 12-month goals.
          </p>
          <p>
            This information is used strictly by Noise Culture to evaluate your content, determine fit with upcoming brand collaborations, and contact you directly regarding prospective representation or partnership opportunities. We do not sell, rent, or publicly disclose your contact details or application data.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            3. Cookies &amp; Algorithmic Tracking
          </h2>
          <p>
            We implement privacy-compliant analytics to evaluate site traffic and user experience. We respect global Do Not Track (DNT) browser signals.
          </p>

          <h2 className="text-xl font-display font-bold uppercase text-white pt-4">
            4. Contact
          </h2>
          <p>
            For privacy inquiries or data deletion requests, contact our privacy desk at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[#FFAD32] underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
