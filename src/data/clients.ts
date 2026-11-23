export interface ClientPartner {
  name: string;
  fullName?: string;
  category: string;
  role: string;
  tagline: string;
  slug?: string;
  stat?: string;
}

export const clientsList: ClientPartner[] = [
  {
    name: "Jio",
    fullName: "Jio Platforms",
    category: "Telecom & Digital",
    role: "Integrated PR & Narrative",
    tagline: "India's Largest IPO Campaign",
    slug: "jio-ipo",
    stat: "21.3% Gain",
  },
  {
    name: "PhonePe",
    category: "Fintech & Payments",
    role: "Viral Video Amplification",
    tagline: "10th Anniversary Anthem",
    slug: "phonepe-10-years",
    stat: "70Cr Users",
  },
  {
    name: "Zomato",
    fullName: "Cartesia x Nugget by Zomato",
    category: "Voice AI & Foodtech",
    role: "Campaign Distribution",
    tagline: "AI So Natural Diwali Film",
    slug: "zomato-diwali-2026",
  },
  {
    name: "Vaseline",
    fullName: "Vaseline India (HUL)",
    category: "Beauty & Personal Care",
    role: "Meme Marketing & Culture",
    tagline: "Basseline Hijack Campaign",
    slug: "vaseline-basseline",
    stat: "4.2M Views",
  },
  {
    name: "Britannia",
    category: "FMCG & Bakery",
    role: "Culture-Led Rebrand",
    tagline: "Croissant or Prashant",
    slug: "britannia-prashant",
    stat: "7.5M Views",
  },
  {
    name: "Netflix",
    fullName: "Netflix India x MI",
    category: "Entertainment & OTT",
    role: "Pop Culture Content",
    tagline: "Garden Mein Aaya Hai Kya?",
    slug: "netflix-mumbai-indians",
  },
  {
    name: "Parle",
    fullName: "Parle Melody",
    category: "Confectionery & Food",
    role: "Real-Time Moment Marketing",
    tagline: "Melody Tiramisu Launch",
    slug: "parle-melodi",
  },
  {
    name: "Infinix",
    category: "Tech & Hardware",
    role: "Anti-Hype Meme Blitz",
    tagline: "Note 50x #QuestionTheNoise",
    slug: "infinix-questionthenoise",
    stat: "250M Reach",
  },
  {
    name: "Redmi",
    category: "Smartphones & Mobile",
    role: "Creator & Star Campaign",
    tagline: "Note 14 Pro+ x Karan Aujla",
    slug: "redmi-karan-aujla",
    stat: "210K Engagements",
  },
  {
    name: "Gowardhan",
    fullName: "Gowardhan Ghee",
    category: "Dairy & FMCG",
    role: "Meme to Commercial Ad",
    tagline: "Saif Ali Khan Viral Response",
    slug: "gowardhan-saif",
  },
  {
    name: "Duolingo",
    category: "EdTech & Apps",
    role: "Vernacular Pop Culture",
    tagline: "Regional Mascot Strategy",
    slug: "duolingo-india-regional",
    stat: "Regional Impact",
  },
  {
    name: "KitKat",
    fullName: "KitKat (Nestlé)",
    category: "Confectionery",
    role: "Real-Time Crisis Humour",
    tagline: "The 12-Tonne Heist",
    slug: "kitkat-heist-india",
    stat: "12-Tonne Heist",
  },
];
