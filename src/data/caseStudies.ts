export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientIndustry: string;
  year: string;
  category: string;
  tagline: string;
  isFlagship?: boolean;
  heroImage: string;
  galleryImages: string[];
  deliverables: string[];
  summary: string;
  challenge: string;
  audienceInsight: string;
  strategy: string;
  creativeExecution: string;
  distributionChannels: string[];
  results: {
    metric: string;
    label: string;
    detail: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedServices: {
    title: string;
    slug: string;
  }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "hyper-thread-culture",
    title: "The Unsubscribe Revolution",
    client: "HyperThread Apparel",
    clientIndustry: "Sustainable Streetwear & D2C",
    year: "2025",
    category: "Meme Marketing",
    tagline: "Turning fast-fashion fatigue into an anti-consumerist internet meme storm.",
    isFlagship: true,
    heroImage: "/images/case-studies/hyper-thread-hero.jpg",
    galleryImages: [
      "/images/case-studies/hyper-thread-1.jpg",
      "/images/case-studies/hyper-thread-2.jpg",
      "/images/case-studies/hyper-thread-3.jpg",
    ],
    deliverables: [
      "Meme Culture Strategy",
      "Network Distribution across 85+ Pages",
      "Interactive Counter-Culture Microsite",
      "Reactive Social Commentary Engine",
    ],
    summary:
      "When HyperThread launched their recycled hemp collection, they refused to run another preachy greenwashing ad. Instead, NoiseCulture engineered an audacious campaign satirizing fast fashion micro-trends, sparking a viral meme movement across Instagram and social channels.",
    challenge:
      "The sustainable fashion market was saturated with solemn, guilt-inducing environmental messaging that Gen Z scrollers routinely ignored. HyperThread needed to achieve massive brand awareness without coming across as sanctimonious or out of touch.",
    audienceInsight:
      "Internet youth culture doesn't respond to corporate lectures about recycling; they bond over shared irony, absurd humor, and roasting fast-fashion hauls that disintegrate after one laundry cycle.",
    strategy:
      "We leaned into counter-intuitive satire. Rather than telling people to buy HyperThread, we launched 'The Unsubscribe Movement' — encouraging shoppers to publicly delete spammy fast-fashion promo codes in exchange for exclusive, limited-run drops.",
    creativeExecution:
      "Over 48 hours, 85 curated pop culture and satire meme channels posted original comic strips, relatable video sketches, and audio formats mocking disposable wardrobe culture, culminating in an exclusive drop reveal that sold out in 14 minutes.",
    distributionChannels: [
      "Instagram Meme Publisher Ecosystem (65M+ combined reach)",
      "Short-Form Audio & Trend Seeding",
      "Reddit r/streetwear & r/anticonsumption community seeding",
      "PR digital newsroom pickup across lifestyle publications",
    ],
    results: [
      {
        metric: "42M+",
        label: "Organic Impressions",
        detail: "Zero paid media spend on primary social distribution.",
      },
      {
        metric: "14 Min",
        label: "Inventory Sellout",
        detail: "First capsule drop completely exhausted on day one.",
      },
      {
        metric: "320%",
        label: "D2C Referral Spike",
        detail: "Sustained increase in organic brand searches for 60 days.",
      },
      {
        metric: "98.4%",
        label: "Positive Sentiment",
        detail: "Audited comment sentiment across all partner meme nodes.",
      },
    ],
    testimonial: {
      quote:
        "NoiseCulture didn't just give us a marketing campaign. They gave our brand a voice that Gen Z actually respects. They understand internet irony better than any agency on earth.",
      author: "Vikram Malhotra",
      role: "Founder & Creative Director, HyperThread",
    },
    relatedServices: [
      { title: "Meme Marketing", slug: "meme-marketing" },
      { title: "PR & Communications", slug: "public-relations" },
    ],
  },
  {
    slug: "neo-pay-breakthrough",
    title: "Money Without The Suit",
    client: "NeoPay Digital Banking",
    clientIndustry: "Fintech & Mobile Banking",
    year: "2025",
    category: "PR & Communications",
    tagline: "Debunking legacy banking bureaucracy with aggressive media relations.",
    isFlagship: true,
    heroImage: "/images/case-studies/neo-pay-hero.jpg",
    galleryImages: [
      "/images/case-studies/neo-pay-1.jpg",
    ],
    deliverables: [
      "Tier-1 Financial PR Blitz",
      "Executive Thought Leadership Op-Eds",
      "Digital PR & Backlink Strategy",
      "Founder Podcast Tour Orchestration",
    ],
    summary:
      "NeoPay needed to establish institutional credibility while positioning itself as the anti-establishment alternative to legacy banks. NoiseCulture orchestrated an unmissable PR campaign that dominated national financial headlines.",
    challenge:
      "Traditional media viewed fintech apps with skepticism following market corrections. Breaking through the noise required hard news value, unassailable financial transparency, and a provocative founder narrative.",
    audienceInsight:
      "Young professionals and freelancers feel alienated by legacy banking jargon and hidden penalty fees. They crave straightforward financial control delivered with radical transparency.",
    strategy:
      "We turned NeoPay's CEO into the chief champion for retail banking transparency. We published an investigative whitepaper analyzing hidden fees charged by major national banks, creating an irresistible news peg for investigative business reporters.",
    creativeExecution:
      "A synchronized press release, interactive data visualization, and syndicated founder op-eds landed on front pages of national financial dailies, accompanied by 24 hours of live broadcast TV interviews.",
    distributionChannels: [
      "National Tier-1 Business Press & Financial Dailies",
      "Leading Tech & Fintech News Portals",
      "Top Business Podcasts & YouTube Talk Shows",
      "LinkedIn Executive Positioning",
    ],
    results: [
      {
        metric: "140+",
        label: "Earned Press Features",
        detail: "Zero paid native advertorials; 100% organic editorial pickup.",
      },
      {
        metric: "4.8X",
        label: "Inbound App Signups",
        detail: "Record-breaking weekly user acquisition without paid ads.",
      },
      {
        metric: "$18M",
        label: "Series B Oversubscribed",
        detail: "Directly cited by lead investors during fundraising closure.",
      },
      {
        metric: "82 DR",
        label: "Average Media Domain Rating",
        detail: "Massive SEO authority boost from top-tier publications.",
      },
    ],
    testimonial: {
      quote:
        "The media presence NoiseCulture unlocked for us altered the trajectory of our company. Journalists who had ignored our emails for two years suddenly started calling us for expert commentary.",
      author: "Pooja Singhania",
      role: "Chief Operating Officer, NeoPay",
    },
    relatedServices: [
      { title: "Public Relations", slug: "public-relations" },
      { title: "Brand Management", slug: "brand-management" },
    ],
  },
  {
    slug: "sonic-wave-launch",
    title: "Sound Beyond Silence",
    client: "SonicWave Audio",
    clientIndustry: "Consumer Electronics & Premium Acoustics",
    year: "2024",
    category: "Integrated Campaigns",
    tagline: "A 360° sensory takeover turning audiophile hardware into a cultural style icon.",
    isFlagship: true,
    heroImage: "/images/case-studies/sonic-wave-hero.jpg",
    galleryImages: [
      "/images/case-studies/sonic-wave-1.jpg",
      "/images/case-studies/sonic-wave-2.jpg",
    ],
    deliverables: [
      "Master 360° Launch Architecture",
      "Creator Gifting & Unboxing Blitz",
      "Experiential Soundscape Pop-Up",
      "Performance Paid Media Pipeline",
    ],
    summary:
      "Entering a headphone category dominated by Sony and Apple seemed suicidal. NoiseCulture integrated street-style aesthetics, underground music producer endorsements, and precision performance marketing to position SonicWave as the audio badge of the creative class.",
    challenge:
      "Consumer audio is crowded with spec-heavy marketing. SonicWave had superior custom planar drivers, but technical jargon was failing to convert lifestyle and culture-conscious buyers.",
    audienceInsight:
      "Creative directors, music producers, and design purists don't buy headphones for technical specs; they buy them as an extension of their personal taste and aesthetic identity.",
    strategy:
      "We framed silence as a luxury. We built an integrated launch narrative around 'Defending Your Focus' in an over-stimulated world, synchronizing creator unboxings with underground listening rooms.",
    creativeExecution:
      "We sent custom-molded matte black cases to 40 visionary music producers with bespoke vinyl pressings. Concurrently, dark-aesthetic video ads launched on Meta and YouTube, capturing the tactile physical experience of noise cancellation.",
    distributionChannels: [
      "YouTube Audiophile & Tech Review Ecosystem",
      "Instagram Fashion & Industrial Design Creators",
      "Meta Performance Retargeting & Lookalikes",
      "Offline Listening Gallery in Mumbai & Bengaluru",
    ],
    results: [
      {
        metric: "68,000+",
        label: "Waitlist Registrations",
        detail: "Generated 30 days prior to commercial launch.",
      },
      {
        metric: "5.4X",
        label: "Blended Launch ROAS",
        detail: "High-ticket hardware sales at exceptional return on ad spend.",
      },
      {
        metric: "94%",
        label: "Creator Review Conversion",
        detail: "38 out of 40 gifted creators produced unpaid organic reviews.",
      },
      {
        metric: "2.8M",
        label: "Video Views",
        detail: "Editorial launch film watched across YouTube and Instagram.",
      },
    ],
    testimonial: {
      quote:
        "Every agency pitched us boring studio renders and spec comparisons. NoiseCulture gave us a cultural posture. They turned our hardware into a cult obsession.",
      author: "Aditya Roy",
      role: "Head of Brand Marketing, SonicWave",
    },
    relatedServices: [
      { title: "Integrated Campaigns", slug: "integrated-campaigns" },
      { title: "Paid Media", slug: "paid-media" },
      { title: "Influencer Marketing", slug: "influencer-marketing" },
    ],
  },
  {
    slug: "volt-energy-rebrand",
    title: "Recharging The Rebellious",
    client: "Volt Energy Labs",
    clientIndustry: "Functional Beverages & Wellness",
    year: "2024",
    category: "Branding",
    tagline: "Total visual identity and packaging overhaul for clean-label plant energy.",
    heroImage: "/images/case-studies/volt-hero.jpg",
    galleryImages: [
      "/images/case-studies/volt-1.jpg",
      "/images/case-studies/volt-2.jpg",
    ],
    deliverables: [
      "Master Visual Identity & Logomark",
      "Matte Aluminum Can Packaging Suite",
      "Brand Guidelines & Motion System",
      "Retail Display Key Visuals",
    ],
    summary:
      "Volt wanted to shed the neon-green, toxic-waste aesthetics of 2000s energy drinks. NoiseCulture designed an ultra-minimalist, brutalist visual identity inspired by Swiss modernism and industrial typography.",
    challenge:
      "The energy drink shelf was an eyesore of aggressive tribal art and aggressive slogans. Volt needed a premium aesthetic that looked at home on a design studio desk or in high-end specialty grocery stores.",
    audienceInsight:
      "Modern knowledge workers, designers, and founders consume caffeine constantly, but are embarrassed to be seen holding legacy energy drink cans covered in flame graphics.",
    strategy:
      "We treated caffeine like clean architectural power. We eliminated all clutter, introducing custom monospace typography, monochromatic aluminum cans, and a bold electric orange voltage accent.",
    creativeExecution:
      "We designed an iconic typographic hierarchy featuring bold mathematical iconography, matte finish textures, and tactile embossing that begs to be held and photographed.",
    distributionChannels: [
      "Specialty Retail & Modern Trade Displays",
      "D2C E-Commerce Experience",
      "Design & Architecture Publications (Dezeen, Brand New)",
      "High-Impact Out-of-Home (OOH) Billboards",
    ],
    results: [
      {
        metric: "+240%",
        label: "Retail Velocity Uplift",
        detail: "Immediate shelf sell-through increase post-rebrand.",
      },
      {
        metric: "18",
        label: "Global Design Accolades",
        detail: "Featured across top international branding showcases.",
      },
      {
        metric: "3.2X",
        label: "D2C Average Order Value",
        detail: "Customers transitioned from single cans to 24-can display cases.",
      },
      {
        metric: "400+",
        label: "New Retail Outlets",
        detail: "Premium grocery chains onboarded after packaging debut.",
      },
    ],
    testimonial: {
      quote:
        "The packaging NoiseCulture created transformed our business overnight. Buyers who ignored us for two years were suddenly calling our distributors demanding shelf stock.",
      author: "Karan Mehta",
      role: "Co-Founder, Volt Energy",
    },
    relatedServices: [
      { title: "Branding & Creative", slug: "branding" },
      { title: "Brand Management", slug: "brand-management" },
    ],
  },
  {
    slug: "aura-skincare-drop",
    title: "Unfiltered Glow",
    client: "Aura Skin Lab",
    clientIndustry: "Clinical Skincare & Clean Beauty",
    year: "2024",
    category: "Influencer Marketing",
    tagline: "Deploying 120 authentic dermatologist and esthetician creators without filters.",
    heroImage: "/images/case-studies/aura-hero.jpg",
    galleryImages: [
      "/images/case-studies/aura-1.jpg",
    ],
    deliverables: [
      "Creator Casting & Credential Verification",
      "No-Filter Content Production Protocol",
      "Spark Ads & Paid Whitelisting Strategy",
      "Sales Attribution & Coupon Engine",
    ],
    summary:
      "In a beauty landscape suffocated by Photoshop and deceptive ring lights, NoiseCulture banned smoothing filters entirely. We partnered with 120 certified skin specialists and micro-creators to showcase real barrier repair.",
    challenge:
      "Consumers had developed extreme skepticism toward influencer skincare endorsements due to unrealistic expectations and undisclosed paid partnerships.",
    audienceInsight:
      "Skincare enthusiasts look at the comments section before buying. They trust creators who show real pores, texture, and honest 30-day timelines over airbrushed celebrities.",
    strategy:
      "The 'Unfiltered Protocol': every creator had to agree to shoot under natural daylight with zero beautification filters, documenting their daily skin barrier progression over a full 4-week cycle.",
    creativeExecution:
      "Macro dermatologists provided deep ingredient breakdowns, while everyday micro-creators documented real morning routines, creating a multi-layered trust ecosystem that drove unprecedented conversions.",
    distributionChannels: [
      "Instagram Reels & Carousel Education",
      "Reels & Short-Form Progression Series",
      "Meta Whitelisted Spark Ads",
      "Reddit r/SkincareAddiction Organic Community Threads",
    ],
    results: [
      {
        metric: "120+",
        label: "Vetted Creators Activated",
        detail: "Over 80% with verified medical or esthetician credentials.",
      },
      {
        metric: "4.1X",
        label: "Direct Attribution ROAS",
        detail: "Tracked via unique creator conversion codes and pixel attribution.",
      },
      {
        metric: "74%",
        label: "Repeat Purchase Rate",
        detail: "Highest 90-day retention in brand history.",
      },
      {
        metric: "1.4M",
        label: "Saves & Bookmarks",
        detail: "Educational routines saved by engaged beauty consumers.",
      },
    ],
    testimonial: {
      quote:
        "NoiseCulture proved that radical honesty in influencer marketing outperforms slick corporate commercials every single day of the week.",
      author: "Dr. Alisha Kapoor",
      role: "Scientific Lead, Aura Skin Lab",
    },
    relatedServices: [
      { title: "Influencer Marketing", slug: "influencer-marketing" },
      { title: "Paid Media", slug: "paid-media" },
    ],
  },
  {
    slug: "apex-fitness-scale",
    title: "Zero Excuses",
    client: "Apex Pro Training",
    clientIndustry: "Connected Fitness & Athletic Apparel",
    year: "2024",
    category: "Paid Media",
    tagline: "Algorithmic paid media scaling customer acquisition by 450% across Meta and Google.",
    heroImage: "/images/case-studies/apex-hero.jpg",
    galleryImages: [
      "/images/case-studies/apex-1.jpg",
    ],
    deliverables: [
      "Full-Funnel Meta & Google Ad Architecture",
      "High-Velocity Creative Testing Engine (30+ weekly)",
      "Server-Side CAPI & GA4 Custom Tracking",
      "Conversion Rate Optimized (CRO) Landing Pages",
    ],
    summary:
      "Apex was burning cash on high CPM ads with stagnant revenue. NoiseCulture took over creative production and algorithmic bidding, dropping customer acquisition cost (CAC) by 42% while scaling monthly spend 5x.",
    challenge:
      "Rising privacy restrictions and algorithmic ad auction inflation made Apex's previous static direct-response ads unprofitable, threatening their expansion plans.",
    audienceInsight:
      "Serious athletes don't click on generic fitness model photos; they click on intense workout breakdowns, candid founder stories, and rigorous equipment teardowns.",
    strategy:
      "We instituted an aggressive creative testing matrix: writing, filming, and launching 30 new UGC, meme, and cinematic video hooks every Monday, letting Meta's algorithm find niche athletic subcultures.",
    creativeExecution:
      "We produced modular video hooks featuring collegiate athletes, powerlifters, and physical therapists, pairing high-energy music with fast-paced kinetic typography.",
    distributionChannels: [
      "Meta (Instagram Stories, Reels & Feed)",
      "Google Search & Performance Max",
      "YouTube Shorts & In-Stream",
      "Custom CRO-Engineered Landing Pages",
    ],
    results: [
      {
        metric: "-42%",
        label: "Reduction in CAC",
        detail: "Customer acquisition cost dropped dramatically within 60 days.",
      },
      {
        metric: "+450%",
        label: "Revenue Scale",
        detail: "Monthly recurring revenue scaled 5.5x over 9 months.",
      },
      {
        metric: "3.8X",
        label: "Blended Return on Ad Spend",
        detail: "Consistently sustained across 7-figure ad budgets.",
      },
      {
        metric: "280+",
        label: "Tested Video Hooks",
        detail: "Proprietary high-performing creative library built for client.",
      },
    ],
    testimonial: {
      quote:
        "NoiseCulture is the only agency we've ever hired that treats media buying and creative production as two sides of the exact same coin. They are growth machines.",
      author: "Marcus Chen",
      role: "VP of Growth, Apex Pro Training",
    },
    relatedServices: [
      { title: "Paid Media", slug: "paid-media" },
      { title: "Integrated Campaigns", slug: "integrated-campaigns" },
    ],
  },
];
