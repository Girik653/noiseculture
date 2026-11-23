export interface SiteConfig {
  name: string;
  legalName: string;
  descriptor: string;
  tagline: string;
  subtagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    address: {
      streetAddress: string;
      city: string;
      region: string;
      postalCode: string;
      country: string;
    };
    studios: {
      city: string;
      label: string;
      location: string;
    }[];
    hours: string;
  };
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube?: string;
  };
  nav: {
    title: string;
    href: string;
    badge?: string;
  }[];
  servicesList: {
    title: string;
    slug: string;
    number: string;
  }[];
  meta: {
    titleTemplate: string;
    defaultTitle: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "NOISECULTURE",
  legalName: "NoiseCulture Media & Creative Studio",
  descriptor: "INDEPENDENT CULTURE-DRIVEN GROWTH AGENCY",
  tagline: "NOISE WITH INTENT.",
  subtagline: "WE MAKE BRANDS UNMISSABLE.",
  description:
    "NoiseCulture is an independent culture-driven creative marketing and brand growth agency offering public relations, paid media, meme marketing, influencer marketing, creator management, branding and integrated campaigns.",
  url: "https://noiseculture.in",
  contact: {
    email: "connect@noiseculture.in",
    phone: "+919352569163",
    phoneDisplay: "+91 93525 69163",
    whatsapp: "https://wa.me/919352569163?text=Hi%20NoiseCulture,%20we%20want%20to%20make%20some%20noise",
    address: {
      streetAddress: "Creative Hub, Cyber City, BKC & C-Scheme",
      city: "New Delhi, Mumbai & Jaipur",
      region: "NCR / MH / RJ",
      postalCode: "110001",
      country: "India",
    },
    studios: [
      {
        city: "New Delhi",
        label: "NCR Flagship",
        location: "Cyber City Creative District, New Delhi",
      },
      {
        city: "Mumbai",
        label: "Commercial & PR Hub",
        location: "Lower Parel Creative Quarter, Mumbai",
      },
      {
        city: "Jaipur",
        label: "Culture & Content Lab",
        location: "C-Scheme Creative Studio, Jaipur",
      },
    ],
    hours: "Monday – Friday: 10:00 AM – 7:00 PM IST",
  },
  socials: {
    instagram: "https://www.instagram.com/noiiseculture/?hl=en",
    linkedin: "https://www.linkedin.com/company/noise-culture/home/",
    twitter: "https://x.com/noiiseculture",
  },
  nav: [
    { title: "About", href: "/about" },
    { title: "What We Do", href: "/services" },
    { title: "Brands", href: "/brands" },
    { title: "For Creators", href: "/for-creators", badge: "JOIN" },
    { title: "Insights", href: "/insights" },
    { title: "Contact", href: "/contact" },
  ],
  servicesList: [
    { title: "Public Relations", slug: "public-relations", number: "01" },
    { title: "Paid Media", slug: "paid-media", number: "02" },
    { title: "Meme Marketing", slug: "meme-marketing", number: "03" },
    { title: "Influencer Marketing", slug: "influencer-marketing", number: "04" },
    { title: "Creator Management", slug: "creator-management", number: "05" },
    { title: "Brand Management", slug: "brand-management", number: "06" },
    { title: "Branding & Creative", slug: "branding", number: "07" },
    { title: "Integrated Campaigns", slug: "integrated-campaigns", number: "08" },
  ],
  meta: {
    titleTemplate: "%s | NOISECULTURE — Independent Culture-Driven Growth Agency",
    defaultTitle: "NOISECULTURE — We Make Brands Unmissable | Independent Culture Agency",
    keywords: [
      "creative marketing agency",
      "culture-driven growth agency",
      "meme marketing agency",
      "influencer marketing agency",
      "creator management agency",
      "PR and communications agency",
      "paid media agency",
      "performance marketing",
      "integrated marketing agency",
      "branding agency",
      "NoiseCulture",
      "Noise with Intent",
    ],
  },
};
