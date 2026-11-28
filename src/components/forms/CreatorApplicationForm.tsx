"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const WANT_OPTIONS = [
  { id: "brand-deals", label: "Brand deals" },
  { id: "channel-growth", label: "Channel growth" },
  { id: "production-support", label: "Production support" },
  { id: "creator-trips", label: "Creator trips" },
  { id: "building-brand", label: "Building a brand" },
  { id: "supporting-cast", label: "Supporting cast" },
  { id: "other", label: "Other" },
];

export function CreatorApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    languages: "",
    platform: "Instagram",
    handle: "",
    niche: "Culture & Tech",
    customNiche: "",
    audience: "Under 10K",
    customAudience: "",
    wants: [] as string[],
    goals: "",
    consent: false,
    _hp: "", // Honeypot spam prevention
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleWant = (label: string) => {
    setFormData((prev) => {
      const exists = prev.wants.includes(label);
      return {
        ...prev,
        wants: exists ? prev.wants.filter((w) => w !== label) : [...prev.wants, label],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) {
      // Honeypot triggered, pretend success
      setSubmitted(true);
      return;
    }

    if (!formData.consent) {
      setError("Please agree to the privacy statement to submit your application.");
      return;
    }

    setLoading(true);
    setError(null);

    const effectiveNiche =
      formData.niche === "Other" && formData.customNiche.trim()
        ? `Other: ${formData.customNiche.trim()}`
        : formData.niche;

    const effectiveAudience =
      formData.audience === "Custom" && formData.customAudience.trim()
        ? `Custom: ${formData.customAudience.trim()}`
        : formData.audience;

    try {
      const res = await fetch("/api/creator-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          city: formData.city,
          languages: formData.languages,
          platform: formData.platform,
          handle: formData.handle,
          niche: effectiveNiche,
          audience: effectiveAudience,
          wants: formData.wants,
          goals: formData.goals,
          consent: formData.consent,
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
      <div
        id="apply"
        className="p-8 sm:p-12 rounded-3xl bg-[#141414] border-2 border-[#FFAD32] text-center space-y-4 scroll-mt-32"
      >
        <div className="w-14 h-14 rounded-full bg-[#FFAD32]/20 text-[#FFAD32] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          Application Received
        </h3>
        <p className="text-base text-neutral-300 max-w-md mx-auto leading-relaxed">
          Thanks. We have received your application and will be in touch.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              whatsapp: "",
              city: "",
              languages: "",
              platform: "Instagram",
              handle: "",
              niche: "Culture & Tech",
              customNiche: "",
              audience: "Under 10K",
              customAudience: "",
              wants: [],
              goals: "",
              consent: false,
              _hp: "",
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
      id="apply"
      onSubmit={handleSubmit}
      className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/15 shadow-2xl space-y-6 scroll-mt-32"
    >
      {/* Honeypot anti-spam (visually hidden) */}
      <input
        type="text"
        name="_hp"
        value={formData._hp}
        onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
          Creator Application
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          Apply to Join
        </h3>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
          {error}
        </div>
      )}

      {/* Row 1: Full name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Full Name <span className="text-[#FFAD32]">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Email Address <span className="text-[#FFAD32]">*</span>
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.com"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: WhatsApp Number & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            WhatsApp Number <span className="text-[#FFAD32]">*</span>
          </label>
          <input
            required
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Mumbai, New Delhi, Bengaluru"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Primary Platform & Primary Social Handle/Link */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Primary Platform <span className="text-[#FFAD32]">*</span>
          </label>
          <select
            value={formData.platform}
            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          >
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="X">X</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Podcast or newsletter">Podcast or newsletter</option>
            <option value="Live stream">Live stream</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Primary Social Handle or Link <span className="text-[#FFAD32]">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.handle}
            onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
            placeholder="@handle or full channel URL"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Content Language(s) & Niche */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Content Language(s)
          </label>
          <input
            type="text"
            value={formData.languages}
            onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
            placeholder="e.g. English, Hindi, Hinglish"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
          />
        </div>

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
              placeholder="Specify your category or niche..."
              className="mt-2 w-full px-4 py-2.5 rounded-xl bg-black/80 border border-[#FFAD32] text-white placeholder-neutral-500 text-sm focus:outline-none"
            />
          )}
        </div>
      </div>

      {/* Row 5: Total Combined Audience (Includes "Under 10K", no minimum implied) */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Total Combined Audience
        </label>
        <select
          value={formData.audience}
          onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFAD32] transition-colors"
        >
          <option value="Under 10K">Under 10K</option>
          <option value="10K – 50K">10K – 50K</option>
          <option value="50K – 100K">50K – 100K</option>
          <option value="100K – 500K">100K – 500K</option>
          <option value="500K – 1M">500K – 1M</option>
          <option value="1M – 5M">1M – 5M</option>
          <option value="5M+">5M+</option>
          <option value="Custom">Custom / Enter Manually...</option>
        </select>

        {formData.audience === "Custom" && (
          <input
            type="text"
            required
            value={formData.customAudience}
            onChange={(e) => setFormData({ ...formData, customAudience: e.target.value })}
            placeholder="e.g. 8K across YouTube and Instagram..."
            className="mt-2 w-full px-4 py-2.5 rounded-xl bg-black/80 border border-[#FFAD32] text-white placeholder-neutral-500 text-sm focus:outline-none"
          />
        )}
      </div>

      {/* Checkboxes: What would you like from us? */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
          What would you like from us?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
          {WANT_OPTIONS.map((opt) => {
            const isChecked = formData.wants.includes(opt.label);
            return (
              <label
                key={opt.id}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-mono transition-all ${
                  isChecked
                    ? "bg-[#FFAD32]/10 border-[#FFAD32] text-white"
                    : "bg-black/40 border-white/10 text-neutral-400 hover:border-white/20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleWant(opt.label)}
                  className="rounded border-neutral-700 text-[#FFAD32] focus:ring-[#FFAD32] bg-black/80 accent-[#FFAD32]"
                />
                <span>{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Goals for next 12 months (Optional) */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Goals for the next 12 months <span className="text-neutral-500 lowercase">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
          placeholder="Tell us what you are working towards, projects you want to make, or areas where you need support..."
          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FFAD32] transition-colors resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            required
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 rounded border-neutral-700 text-[#FFAD32] focus:ring-[#FFAD32] bg-black/80 accent-[#FFAD32] shrink-0"
          />
          <span className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
            I agree that Noise Culture may store and use these details to review my application and contact me. Read our{" "}
            <Link href="/privacy" className="text-[#FFAD32] underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-white transition-all shadow-xl disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <span>Submit Application</span>
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
