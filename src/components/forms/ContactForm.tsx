"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "Integrated Campaigns",
    website: "",
    projectDetails: "",
    budget: "$25,000 - $50,000",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border-2 border-[#FFAD32] text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#FFAD32]/20 text-[#FFAD32] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          INQUIRY TRANSMITTED.
        </h3>
        <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A Senior Partner or Creative Director will review your project brief and connect within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              serviceRequired: "Integrated Campaigns",
              website: "",
              projectDetails: "",
              budget: "$25,000 - $50,000",
            });
          }}
          className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono uppercase tracking-wider text-white hover:bg-[#FFAD32] hover:text-black transition-colors"
        >
          Send Another Note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/15 shadow-2xl space-y-6"
    >
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
          Brief Submission
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          START A CONVERSATION.
        </h3>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
          {error}
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Your Name *
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Vikram Malhotra"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Company / Brand *
          </label>
          <input
            required
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="HyperThread Apparel"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Work Email *
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="vikram@brand.com"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Phone / WhatsApp (Optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 93525 69163"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Service & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Service Required *
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="Integrated Campaigns">Integrated Campaigns (360°)</option>
            <option value="Meme Marketing">Meme Marketing &amp; Viral Seeding</option>
            <option value="Public Relations">Public Relations &amp; Digital PR</option>
            <option value="Paid Media">Paid Media &amp; Performance</option>
            <option value="Influencer Marketing">Influencer Marketing &amp; Creators</option>
            <option value="Branding & Creative">Branding &amp; Visual Identity</option>
            <option value="Brand Management">Brand Strategy &amp; Social Management</option>
            <option value="Creator Management">Creator Management &amp; Talent</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Estimated Budget (USD / Equivalent)
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="Under $10,000">Under $10,000 / &lt; ₹8 Lakhs</option>
            <option value="$10,000 - $25,000">$10,000 – $25,000 / ₹8–20 Lakhs</option>
            <option value="$25,000 - $50,000">$25,000 – $50,000 / ₹20–40 Lakhs</option>
            <option value="$50,000+">$50,000+ / ₹40 Lakhs+</option>
          </select>
        </div>
      </div>

      {/* Row 4: Website / Social profile */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Website or Social Link (Optional)
        </label>
        <input
          type="text"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          placeholder="https://yourbrand.com or @yourbrand"
          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
        />
      </div>

      {/* Row 5: Project Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Project Brief / Challenge Details *
        </label>
        <textarea
          required
          rows={4}
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          placeholder="Tell us about the launch date, target audience, what unmissable outcome you are aiming for, and where previous agency partners fell short..."
          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-white transition-all shadow-xl disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Brief...</span>
          </>
        ) : (
          <>
            <span>Transmit Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
