import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Mail, MessageCircle, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#FFAD32]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Massive Brand Statement */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-3">
              Closing Creed
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white">
              NOISE WITH <span className="text-[#FFAD32]">INTENT.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white hover:text-black self-start md:self-end"
          >
            <span>Start A Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          {/* Col 1: About & Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-md shrink-0">
                <Image
                  src="/brand/emblem-black-bg.png"
                  alt="NoiseCulture Emblem"
                  width={38}
                  height={27}
                  className="object-contain"
                />
              </div>
              <div className="relative h-7 w-40 flex items-center">
                <Image
                  src="/brand/wordmark-dark-mode.png"
                  alt="NoiseCulture"
                  width={160}
                  height={24}
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Independent culture-driven creative marketing, communications and brand growth agency.
              We build attention that compounds into enduring business equity.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FFAD32] hover:border-[#FFAD32]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FFAD32] hover:border-[#FFAD32]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FFAD32] hover:border-[#FFAD32]/40 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-neutral-400 hover:text-[#FFAD32] transition-colors flex items-center gap-1.5">
                  <span>Brands</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#FFAD32] text-black font-mono font-bold rounded">14 CAMPAIGNS</span>
                </Link>
              </li>
              <li>
                <Link href="/for-creators" className="text-neutral-400 hover:text-[#FFAD32] transition-colors flex items-center gap-1.5">
                  <span>For Creators</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#FFAD32] text-black font-mono font-bold rounded">JOIN</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-neutral-400 hover:text-white transition-colors">
                  Culture Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-5">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-xs font-mono">
              {siteConfig.servicesList.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-neutral-400 hover:text-[#FFAD32] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FFAD32]/60">{svc.number}.</span>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Out */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFAD32] mb-5">
              Direct Inquiries
            </div>
            <div className="space-y-3.5 text-xs text-neutral-400 font-mono">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#FFAD32] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FFAD32]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-[#FFAD32] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FFAD32]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFAD32] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Live Chat</span>
              </a>
              <div className="flex items-start gap-2 pt-2 text-neutral-400 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#FFAD32] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-neutral-500 text-center sm:text-left">
            Brand names and trademarks belong to their owners and do not imply endorsement.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
