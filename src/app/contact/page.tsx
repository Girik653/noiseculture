import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & New Business Inquiries | NOISECULTURE",
  description:
    "Start a conversation with NoiseCulture. Brief us on your campaign, PR requirements, meme marketing, creator management, or branding transformation.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <section className="pb-16 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.95]">
                LET&apos;S TALK<br />
                <span className="text-[#FFAD32]">AMBITION.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
                Whether you need a full 360° product launch, a viral meme distribution blitz, or executive PR positioning — we build attention that compounds.
              </p>
            </div>
          </div>
        </section>

        {/* 2-Column: Direct Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
                Direct Communication Channels
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black/50 border border-white/5 hover:border-[#FFAD32] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFAD32] group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      New Business Email
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-[#FFAD32] transition-colors font-bold">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black/50 border border-white/5 hover:border-[#FFAD32] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFAD32] group-hover:scale-110 transition-transform shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      Direct Agency Phone
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-[#FFAD32] transition-colors font-bold">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black/50 border border-white/5 hover:border-[#FFAD32] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      Live WhatsApp Desk
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-[#25D366] transition-colors font-bold">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                </a>
              </div>

              {/* Physical Studios */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3 text-xs font-mono text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#FFAD32] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">NEW DELHI STUDIO</span>
                    <span>Cyber City Creative District, New Delhi</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs font-mono text-neutral-300 pt-2">
                  <MapPin className="w-4 h-4 text-[#FFAD32] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">MUMBAI STUDIO</span>
                    <span>Lower Parel Creative Quarter, Mumbai</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs font-mono text-neutral-300 pt-2">
                  <MapPin className="w-4 h-4 text-[#FFAD32] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">JAIPUR STUDIO</span>
                    <span>C-Scheme Creative Studio, Jaipur</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-neutral-400">
                <Clock className="w-4 h-4 text-[#FFAD32]" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>

            {/* Response Commitment Badge */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 text-xs font-mono text-neutral-300">
              <ShieldCheck className="w-6 h-6 text-[#FFAD32] shrink-0" />
              <span>
                24-HOUR SLA: Every qualified brief receives a response and initial creative perspective within one business day.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
