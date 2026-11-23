import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CultureGlobeSection } from "@/components/home/CultureGlobeSection";
import { CampaignGallerySection } from "@/components/home/CampaignGallerySection";
import { CreatorEcosystemSection } from "@/components/home/CreatorEcosystemSection";
import { ExpertiseAccordionSection } from "@/components/home/ExpertiseAccordionSection";
import { ClientMarqueeSection } from "@/components/home/ClientMarqueeSection";
import { EditorialInsightsSection } from "@/components/home/EditorialInsightsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "NOISECULTURE — We Make Brands Unmissable | Culture-Driven Growth Agency",
  description:
    "NoiseCulture is an independent culture-driven creative marketing and brand growth agency offering PR, paid media, meme marketing, influencer marketing, creator management, branding and 360° integrated campaigns.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "NOISECULTURE — We Make Brands Unmissable",
    description:
      "Independent culture-driven creative marketing & brand growth agency. Noise with intent.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOISECULTURE — Independent Culture-Driven Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOISECULTURE — Noise With Intent.",
    description: "We bring creativity, culture, media and strategy together to make brands impossible to ignore.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#080808]">
      {/* SECTION 02: HERO (Warm Ivory) */}
      <HeroSection />

      {/* SECTION 03: FUN FACTS & CULTURE GLOBE (Deep Black) */}
      <CultureGlobeSection />

      {/* SECTION 04: CASE STUDIES & CAMPAIGN GALLERY (Deep Black) */}
      <CampaignGallerySection />

      {/* SECTION 05: CREATOR & MEDIA ECOSYSTEM (Deep Black) */}
      <CreatorEcosystemSection />

      {/* SECTION 06: EXPERTISE & OUTLINED ACCORDION (Deep Black) */}
      <ExpertiseAccordionSection />

      {/* SECTION 07: CLIENTS & BESTIES (Warm Ivory) */}
      <ClientMarqueeSection />

      {/* SECTION 08: INSIGHTS & FIELD NOTES (Deep Black) */}
      <EditorialInsightsSection />

      {/* SECTION 09: FINAL CTA (Deep Black) */}
      <FinalCtaSection />
    </main>
  );
}
