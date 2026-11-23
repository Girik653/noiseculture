"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export function CreatorApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    primaryHandle: "",
    platform: "Instagram",
    niche: "Culture & Tech",
    customNiche: "",
    followerCount: "100K - 500K",
    customFollowerCount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Calculate effective values
    const effectiveNiche =
      formData.niche === "Other" && formData.customNiche.trim()
        ? `Other: ${formData.customNiche.trim()}`
        : formData.niche;

    const effectiveAudience =
      formData.followerCount === "Custom" && formData.customFollowerCount.trim()
        ? `Custom: ${formData.customFollowerCount.trim()}`
        : formData.followerCount;

    try {
      const res = await fetch("/api/creator-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          niche: effectiveNiche,
          followerCount: effectiveAudience,
        }),
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please check your connection.");
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
          APPLICATION RECEIVED.
        </h3>
        <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
          Our creator management talent board reviews submissions every 48 hours. If your portfolio aligns with upcoming brand partner campaigns, our team will reach out directly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              primaryHandle: "",
              platform: "Instagram",
              niche: "Culture & Tech",
              customNiche: "",
              followerCount: "100K - 500K",
              customFollowerCount: "",
              message: "",
            });
          }}
          className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono uppercase tracking-wider text-white hover:bg-[#FFAD32] hover:text-black transition-colors"
        >
          Submit Another Application
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
          Representation Dossier
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          APPLY FOR TALENT MANAGEMENT.
        </h3>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
          {error}
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Full Name *
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Aria Chen"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Email Address *
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="aria@management.com"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Handle & Platform */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Primary Social Handle / URL *
          </label>
          <input
            required
            type="text"
            value={formData.primaryHandle}
            onChange={(e) => setFormData({ ...formData, primaryHandle: e.target.value })}
            placeholder="@ariachen.culture or youtube.com/@..."
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Primary Platform
          </label>
          <select
            value={formData.platform}
            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="X / Twitter">X / Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Podcast / Newsletter">Podcast / Newsletter</option>
            <option value="Twitch / Live Stream">Twitch / Live Stream</option>
          </select>
        </div>
      </div>

      {/* Row 3: Niche & Audience (with manual inputs when 'Other' or 'Custom' is selected) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Niche Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Content Niche / Category
          </label>
          <select
            value={formData.niche}
            onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="Culture & Tech">Culture &amp; Tech</option>
            <option value="Fashion & Streetwear">Fashion &amp; Streetwear</option>
            <option value="Fitness & Longevity">Fitness &amp; Longevity</option>
            <option value="3D Art & Motion Design">3D Art &amp; Motion Design</option>
            <option value="Comedy & Satire">Comedy &amp; Satire</option>
            <option value="Finance & Business">Finance &amp; Business</option>
            <option value="Beauty & Wellness">Beauty &amp; Wellness</option>
            <option value="Gaming & Esports">Gaming &amp; Esports</option>
            <option value="Music & DJ Culture">Music &amp; DJ Culture</option>
            <option value="Food, Travel & Lifestyle">Food, Travel &amp; Lifestyle</option>
            <option value="Photography & Film">Photography &amp; Film</option>
            <option value="Automotive & Mobility">Automotive &amp; Mobility</option>
            <option value="Other">Other (Write Manually...)</option>
          </select>

          {formData.niche === "Other" && (
            <input
              type="text"
              required
              value={formData.customNiche}
              onChange={(e) => setFormData({ ...formData, customNiche: e.target.value })}
              placeholder="Specify your category / niche manually..."
              className="mt-2 w-full px-4 py-2.5 rounded-xl bg-black/80 border border-[#FFAD32] text-white placeholder-neutral-500 text-sm focus:outline-none"
            />
          )}
        </div>

        {/* Audience Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Total Combined Audience
          </label>
          <select
            value={formData.followerCount}
            onChange={(e) => setFormData({ ...formData, followerCount: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="10K - 50K">10K – 50K</option>
            <option value="50K - 100K">50K – 100K</option>
            <option value="100K - 500K">100K – 500K</option>
            <option value="500K - 1M">500K – 1M</option>
            <option value="1M - 5M">1M – 5M</option>
            <option value="5M+">5M+</option>
            <option value="Custom">Custom / Enter Manually...</option>
          </select>

          {formData.followerCount === "Custom" && (
            <input
              type="text"
              required
              value={formData.customFollowerCount}
              onChange={(e) =>
                setFormData({ ...formData, customFollowerCount: e.target.value })
              }
              placeholder="e.g. 750K across YouTube and Instagram..."
              className="mt-2 w-full px-4 py-2.5 rounded-xl bg-black/80 border border-[#FFAD32] text-white placeholder-neutral-500 text-sm focus:outline-none"
            />
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          What are your goals for the next 12 months?
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about the dream brand partnerships you want, products you want to launch, or areas where you need business co-pilots..."
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
            <span>Transmitting Portfolio...</span>
          </>
        ) : (
          <>
            <span>Submit Representation Application</span>
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
