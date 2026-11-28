export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  h1: string;
  definition: string;
  overview: string;
  capabilities: string[];
  problemsSolved: {
    problem: string;
    solution: string;
  }[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: ServiceFAQ[];
  metaDescription: string;
  keywords: string[];
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "public-relations",
    number: "01",
    title: "Public Relations",
    shortTitle: "PR & Comms",
    tagline: "Reputation is built on truth, amplified by narrative, and defended in public.",
    h1: "Strategic Public Relations & Brand Communications Agency",
    definition:
      "Public Relations (PR) at NoiseCulture is the strategic engineering of brand perception, media narratives, and cultural credibility across top-tier press, digital newsrooms, trade journals, and influential internet communities.",
    overview:
      "Modern PR is no longer about sending boilerplate press releases into journalists' spam folders. We build compelling editorial angles that newsrooms actually want to cover, orchestrate viral digital PR blitzes, and protect institutional trust when high-stakes moments occur.",
    capabilities: [
      "Public Relations Strategy & Planning",
      "Digital PR & High-Authority Backlink Acquisition",
      "Media Relations & Journalist Pitching",
      "Brand Reputation & Crisis Communications",
      "Strategic Communications & Executive Thought Leadership",
      "Press Conferences & Media Junkets",
    ],
    problemsSolved: [
      {
        problem: "Zero organic media coverage despite great product innovations.",
        solution: "We translate corporate milestones into cultural news hooks that national and tier-1 tech/business media rush to report.",
      },
      {
        problem: "Vulnerability to internet outrage cycles and misinformation.",
        solution: "24/7 narrative monitoring and battle-tested crisis response protocols that defuse risk before it metastasizes.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Narrative Discovery",
        description: "We audit your company lore, leadership viewpoints, and market landscape to isolate non-reproducible story hooks.",
      },
      {
        step: "02",
        title: "Newsroom Relationship Engine",
        description: "We pitch directly to accredited beat reporters, podcast hosts, and newsletter curators who command genuine industry influence.",
      },
      {
        step: "03",
        title: "Culture Amplification",
        description: "Earned media is syndicated across social feeds, creator commentary, and digital PR channels for compounding reach.",
      },
    ],
    deliverables: [
      "Targeted Media Lists & Tier-1 Press Access",
      "Op-Eds, Byline Articles & Keynote Scripts",
      "Crisis Management Playbook & War Room Protocols",
      "Monthly Coverage Dossier & Share-of-Voice Analytics",
    ],
    faqs: [
      {
        question: "How does NoiseCulture measure PR success?",
        answer: "We reject vanity impressions. We evaluate earned placements, domain authority uplift, narrative alignment, referral traffic, and inbound investor/partner pipeline generated.",
      },
      {
        question: "How quickly can we see earned media coverage?",
        answer: "Reactive commentary and digital news hooks routinely land within 14–21 days; comprehensive feature profiles and tier-1 magazine spreads typically unfold over 6–8 weeks.",
      },
    ],
    metaDescription: "NoiseCulture drives high-impact PR, digital PR, media relations, and brand reputation campaigns that turn corporate news into cultural conversations.",
    keywords: ["public relations agency", "PR agency", "digital PR", "media relations", "crisis communications", "brand reputation"],
    image: "/images/services/public-relations.jpg",
  },
  {
    slug: "paid-media",
    number: "02",
    title: "Paid Media",
    shortTitle: "Paid Media",
    tagline: "Algorithms reward creative empathy. We engineer paid ads people don't skip.",
    h1: "High-Performance Paid Media & Media Buying Agency",
    definition:
      "Paid Media at NoiseCulture is the convergence of culture-led creative production and rigorous algorithmic media buying across Meta, Google, YouTube, and programmatic networks to drive scalable customer acquisition at profitable unit economics.",
    overview:
      "The era of boring static direct-response ads is dead. Algorithmic ad platforms now favor native, culturally resonant content. We engineer thumb-stopping video ads, meme-native paid assets, and granular retargeting architectures that turn cold scrollers into loyal buyers.",
    capabilities: [
      "Meta Advertising (Instagram & Facebook Ads)",
      "Google Advertising (Search, Performance Max & YouTube)",
      "Performance Marketing & Conversion Rate Optimization (CRO)",
      "High-Volume Media Buying & Budget Allocation",
      "Lead Generation & Full-Funnel Retargeting",
      "First-Party Data Strategy & Post-Cookie Tracking Setup",
    ],
    problemsSolved: [
      {
        problem: "Diminishing ROAS caused by ad fatigue and rising CPMs.",
        solution: "We test 20+ creative variations weekly across diverse visual angles, hooks, and creators to keep algorithmic auction costs consistently low.",
      },
      {
        problem: "Inaccurate attribution and broken tracking following privacy updates.",
        solution: "We deploy server-side Conversions API (CAPI) and blended MER (Marketing Efficiency Ratio) models for bulletproof reporting.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Funnel Architecture",
        description: "We map user psychology across prospecting, consideration, and conversion phases with tailored creative hooks.",
      },
      {
        step: "02",
        title: "Creative-Led Media Buying",
        description: "We deploy high-octane video creative, native creator ads (Spark & Whitelisting), and meme formats into algorithmic bid structures.",
      },
      {
        step: "03",
        title: "Continuous Scale & Optimization",
        description: "We systematically scale winning creative angles and prune underperformers without resetting ad set learning phases.",
      },
    ],
    deliverables: [
      "Omnichannel Media Plan & Budget Forecasts",
      "High-Volume Video & Static Creative Library",
      "Tracking Infrastructure & Server-Side Tracking Setup",
      "Real-Time Executive Performance Dashboard",
    ],
    faqs: [
      {
        question: "What minimum ad spend do you manage?",
        answer: "We typically partner with brands spending $10,000+ (or INR 5,00,000+) monthly across Meta and Google where creative testing creates massive leverage.",
      },
      {
        question: "Do you handle creative production or just ad buying?",
        answer: "Both. We believe separating creative from media buying is why most campaigns fail. Our team writes, shoots, edits, and optimizes all creative assets in-house.",
      },
    ],
    metaDescription: "NoiseCulture scales revenue with performance paid media, Meta ads, Google ads, and culture-first creative that beats rising acquisition costs.",
    keywords: ["paid media agency", "performance marketing", "Meta advertising", "Google ads agency", "media buying", "performance creative"],
    image: "/images/services/paid-media.jpg",
  },
  {
    slug: "meme-marketing",
    number: "03",
    title: "Meme Marketing",
    shortTitle: "Meme Marketing",
    tagline: "Culture moves at the speed of internet humor. We make your brand fluent in it.",
    h1: "Internet Culture & Viral Meme Marketing Agency",
    definition:
      "Meme Marketing at NoiseCulture is the craft of embedding brands seamlessly into internet discourse, humor formats, and trending social phenomena without inducing corporate cringe.",
    overview:
      "Attention cannot be bought; it must be earned through cultural fluency. We operate a direct distribution network across thousands of top-tier meme pages, pop culture channels, and internet communities, deploying witty narrative campaigns that spread organically and drive unprecedented organic virality.",
    capabilities: [
      "Meme Marketing & Viral Content Strategy",
      "Internet Culture Campaigns & Real-Time Trend Hijacking",
      "Community Marketing & Subreddit Seeding",
      "Social-First Viral Campaigns & Audio Trends",
      "Direct Publisher Network Distribution (150M+ Follower Ecosystem)",
      "Meme Formats for Product Launches & Brand Repositioning",
    ],
    problemsSolved: [
      {
        problem: "Brands looking out of touch or 'cringe' when trying to use humor.",
        solution: "Our meme strategists are native internet community moderators and creators who understand the unwritten rules of subcultural irony.",
      },
      {
        problem: "Stagnant engagement rates on owned brand social handles.",
        solution: "We inject native meme formats that trigger massive peer-to-peer shareability, bookmarking, and organic comments.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Cultural Radar Scanning",
        description: "Our listening room tracks nascent audio trends, emerging formats, and Reddit/Twitter discourse 18 hours before mainstream pickup.",
      },
      {
        step: "02",
        title: "Bespoke Meme Engineering",
        description: "We craft contextual humor tailored to your brand values that makes your product the hero or clever punchline.",
      },
      {
        step: "03",
        title: "Synchronized Blast Distribution",
        description: "We deploy the campaign across 50–200 curated meme community pages simultaneously to create an omnipresent cultural moment.",
      },
    ],
    deliverables: [
      "Monthly Viral Meme Asset Calendar",
      "Guaranteed Publisher Network Reach Commitments",
      "Sentiment & Comment Tone Analysis Reports",
      "Brand Safety Safeguards & Whitelist Guidelines",
    ],
    faqs: [
      {
        question: "Is meme marketing safe for regulated or corporate brands?",
        answer: "Yes. We maintain strict brand safety guardrails. We use clever, relatable situational humor that elevates brand warmth without touching controversial or polarizing subjects.",
      },
      {
        question: "How do meme campaigns translate into business results?",
        answer: "By creating massive top-of-funnel recall, brand favorability, direct website surges, and slashing customer acquisition costs when paired with retargeting.",
      },
    ],
    metaDescription: "NoiseCulture is a leading meme marketing agency. We design internet-native viral campaigns, meme syndication, and cultural moments that captivate Gen Z and Millennials.",
    keywords: ["meme marketing agency", "viral marketing", "internet culture campaigns", "meme advertising", "social media memes", "culture marketing"],
    image: "/images/services/meme-marketing.jpg",
  },
  {
    slug: "influencer-marketing",
    number: "04",
    title: "Influencer Marketing",
    shortTitle: "Influencer Marketing",
    tagline: "Authenticity cannot be faked. We connect you with voices that genuinely move culture.",
    h1: "Data-Driven Influencer Marketing & Creator Partnerships Agency",
    definition:
      "Influencer Marketing at NoiseCulture is the data-validated casting, creative orchestration, and commercial management of collaborations between leading brands and digital content creators across YouTube, Instagram, X, and LinkedIn.",
    overview:
      "Most influencer campaigns fail because brands treat creators like human billboards with rigid corporate scripts. We champion creator-led storytelling, pairing deep audience analytics with creative freedom that yields authentic advocacy, fan trust, and measurable conversion.",
    capabilities: [
      "Influencer Discovery & Audience Authenticity Auditing",
      "Macro, Micro & Nano Influencer Campaigns",
      "Creator Partnerships & Long-Term Brand Ambassadorships",
      "Celebrity & Cultural Figure Collaborations",
      "Full Campaign Management & Legal Contract Rights Negotiation",
      "Content Whitelisting & Paid Creator Licensing",
    ],
    problemsSolved: [
      {
        problem: "Wasted budget on influencers with inflated bot followings or low engagement.",
        solution: "We audit audience demographics, comment sentiment, and follower integrity using advanced forensic data tooling.",
      },
      {
        problem: "Rigid scripts that sound forced and kill engagement.",
        solution: "We establish creative briefs with clear guardrails while empowering creators to deliver the message in their distinct native voice.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audience-First Casting",
        description: "We evaluate creators based on audience overlap, engagement quality, and cultural credibility rather than raw vanity numbers.",
      },
      {
        step: "02",
        title: "Collaborative Storyboarding",
        description: "We work alongside creators to integrate product usage naturally into entertaining, educational, or narrative video formats.",
      },
      {
        step: "03",
        title: "Paid Amplification",
        description: "We license the top-performing creator content to run as whitelisted ads directly from the creator's official handle.",
      },
    ],
    deliverables: [
      "Vetted Creator Shortlists with Audience Demographics",
      "Air-tight Talent Contracts, Deliverable Schedules & IP Usage Terms",
      "High-Resolution Raw Content Library for Brand Usage",
      "Full Sales Tracking & Conversion Attribution Dossier",
    ],
    faqs: [
      {
        question: "How do you select creators for our brand?",
        answer: "We analyze historical campaign performance, audience demographics, follower authenticity score, and brand safety history before presenting candidates.",
      },
      {
        question: "Do you manage both micro and celebrity influencers?",
        answer: "Yes. From niche micro-creators with hyper-engaged communities to A-list cultural icons, we handle sourcing, negotiation, and production end-to-end.",
      },
    ],
    metaDescription: "NoiseCulture designs high-converting influencer marketing campaigns and creator partnerships that drive authentic brand love, engagement, and sales.",
    keywords: ["influencer marketing agency", "creator partnerships", "influencer campaigns", "talent collaborations", "influencer discovery", "creator licensing"],
    image: "/images/services/influencer-marketing.jpg",
  },
  {
    slug: "creator-management",
    number: "05",
    title: "Creator Management",
    shortTitle: "Creator Management",
    tagline: "From content creators to enduring cultural enterprises. We manage the business of you.",
    h1: "Full-Service Creator Representation & Talent Management Agency",
    definition:
      "Creator Management at NoiseCulture is the 360-degree commercial representation, career strategy, and business acceleration of exceptional digital talent, video creators, writers, and cultural personalities.",
    overview:
      "Creators are the media companies of tomorrow. We act as your strategic co-pilot: negotiating lucrative brand partnerships, building proprietary consumer products, handling legal and accounting complexities, and developing diversified monetization engines beyond platform ad revenue.",
    capabilities: [
      "Exclusive Creator Representation & Talent Management",
      "Brand Partnership Sourcing & Inbound Deal Negotiation",
      "Personal Branding & Digital Positioning",
      "Creator Monetization & Direct-to-Consumer Product Incubation",
      "Audience Growth Strategy & Multi-Platform Syndication",
      "Legal Contract Protection & Financial Advisory",
    ],
    problemsSolved: [
      {
        problem: "Creators burning out managing emails, negotiating low fees, and chasing unpaid invoices.",
        solution: "We run your back-office like an elite sports agency, maximizing deal sizes and ensuring prompt payment.",
      },
      {
        problem: "Over-reliance on platform algorithms and fluctuating AdSense revenue.",
        solution: "We build sustainable, diversified revenue streams through digital products, premium courses, merchandise, and equity partnerships.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Personal Brand Blue Ocean",
        description: "We define your unique intellectual property, editorial pillar, and long-term positioning within the creator economy.",
      },
      {
        step: "02",
        title: "Aggressive Inbound & Outbound Deal Flow",
        description: "We position you before Fortune 500 brand marketing leads, ensuring multi-campaign ambassadorships rather than one-off posts.",
      },
      {
        step: "03",
        title: "Enterprise Diversification",
        description: "We launch proprietary businesses, podcasts, events, and equity investments that build generational wealth.",
      },
    ],
    deliverables: [
      "Dedicated Talent Manager & Business Development Rep",
      "Custom Media Kit, Rate Card & Case Studies",
      "Full Legal Contract Review & IP Protection",
      "Creator Business Growth Roadmap & Quarterly Review",
    ],
    faqs: [
      {
        question: "How can creators join the NoiseCulture roster?",
        answer: "We maintain a curated roster of high-impact creators. You can submit your portfolio and metrics through our /for-creators page for review.",
      },
      {
        question: "What fee structure do you operate on?",
        answer: "We operate on a transparent commission model based on commercial deals we secure and manage, aligning our incentives directly with your financial growth.",
      },
    ],
    metaDescription: "NoiseCulture represents elite digital creators, managing brand partnerships, career strategy, legal negotiations, and multi-million dollar business ventures.",
    keywords: ["creator management agency", "talent management", "influencer representation", "creator economy", "brand partnerships", "creator monetization"],
    image: "/images/services/creator-management.jpg",
  },
  {
    slug: "brand-management",
    number: "06",
    title: "Brand Management",
    shortTitle: "Brand Management",
    tagline: "A brand is not what you tell people it is. It is what people tell each other it is.",
    h1: "Modern Brand Strategy & Digital Brand Management Agency",
    definition:
      "Brand Management at NoiseCulture is the continuous strategic stewardship of brand equity, positioning, community discourse, and social media presence across all customer touchpoints.",
    overview:
      "Great brands are living, breathing entities that participate in modern culture daily. We oversee social channels, customer touchpoints, and brand storytelling to ensure your company stays sharp, relevant, and consistently chosen over competitors.",
    capabilities: [
      "Brand Strategy & Positioning Architecture",
      "Social Media Management & Organic Growth Operations",
      "Brand Communications & Executive Messaging",
      "Community Building & Moderation",
      "Digital Brand Building & Social Tone-of-Voice Playbooks",
      "Competitive Intelligence & Market Perception Audits",
    ],
    problemsSolved: [
      {
        problem: "Inconsistent brand voice and fragmented social media channels.",
        solution: "We establish a cohesive brand bible, tone-of-voice standards, and centralized content workflows across all channels.",
      },
      {
        problem: "Brand perceived as an outdated commodity facing aggressive modern challengers.",
        solution: "We reposition the brand around cultural resonance, modern aesthetics, and compelling narrative tension.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Perception Audit",
        description: "We interview customers, analyze social sentiment, and map competitor weaknesses to find your undeniable market advantage.",
      },
      {
        step: "02",
        title: "Cultural Positioning",
        description: "We craft your brand manifesto, value proposition, and content pillars that make your voice instantly recognizable.",
      },
      {
        step: "03",
        title: "Always-On Social Engine",
        description: "We execute daily content production, community engagement, and cultural commentary across your primary social channels.",
      },
    ],
    deliverables: [
      "Comprehensive Brand Positioning Manifesto",
      "Social Media Style Guide & Tone-of-Voice Codex",
      "Monthly Content Production & Publishing Schedule",
      "Community Engagement & Sentiment Tracking Reports",
    ],
    faqs: [
      {
        question: "How is brand management different from basic social media marketing?",
        answer: "Social media is merely a distribution channel. Brand management protects long-term positioning, pricing power, customer loyalty, and how the market perceives your worth.",
      },
      {
        question: "Do you handle day-to-day community interactions?",
        answer: "Yes. Our team handles proactive commenting, witty reply banter, customer sentiment resolution, and direct message triaging.",
      },
    ],
    metaDescription: "NoiseCulture provides end-to-end brand management, brand strategy, social media leadership, and community building that builds enduring market authority.",
    keywords: ["brand management agency", "brand strategy", "social media management", "brand positioning", "digital brand building", "community management"],
    image: "/images/services/brand-management.jpg",
  },
  {
    slug: "branding",
    number: "07",
    title: "Branding & Creative",
    shortTitle: "Branding & Creative",
    tagline: "Design is thinking made visual. We build visual identities that command attention.",
    h1: "Visual Identity, Graphic Design & Creative Direction Studio",
    definition:
      "Branding & Creative at NoiseCulture is the art direction, visual identity development, and graphic design architecture that shapes how a company looks, feels, and moves across the physical and digital world.",
    overview:
      "We design bold visual systems that reject generic corporate minimalism. From custom typography and rebellious packaging to motion design and campaign artwork, we create visual languages that define categories and stick in people's minds.",
    capabilities: [
      "Brand Identity & Visual System Design",
      "Creative Direction & Art Direction",
      "Custom Graphic Design, Poster Art & Editorial Layouts",
      "Campaign Concepts & Creative Key Visuals (KVs)",
      "Content Production (Photography, 3D Art & Motion Graphics)",
      "Design Systems, Typography & Packaging Design",
    ],
    problemsSolved: [
      {
        problem: "Generic visual identity that blends in with every other brand in the industry.",
        solution: "We craft high-contrast, editorial visual identities with custom typography, bespoke illustrations, and unmistakable color palettes.",
      },
      {
        problem: "Inflexible design assets that break when applied across digital media, video, and physical collateral.",
        solution: "We build dynamic design tokens and motion-ready component systems engineered specifically for modern screens.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Visual Ideation & Moodboarding",
        description: "We pull inspiration from art history, street culture, brutalist architecture, and internet aesthetics to establish distinct visual territories.",
      },
      {
        step: "02",
        title: "System Crafting",
        description: "We engineer logomarks, typographic hierarchy, responsive color rules, textures, and bespoke graphic elements.",
      },
      {
        step: "03",
        title: "Production Guidelines",
        description: "We stress-test the identity across web UI, packaging, billboards, motion ads, and deliver a comprehensive design system.",
      },
    ],
    deliverables: [
      "Master Vector Logo Suite & Animated Motion Marks",
      "Color Palette, Custom Typography & Design Tokens",
      "Comprehensive Digital Brand Guidelines (Figma & PDF)",
      "High-Res Marketing Collateral, Packaging & 3D Assets",
    ],
    faqs: [
      {
        question: "How long does a complete brand identity project take?",
        answer: "A comprehensive brand identity typically takes 4–6 weeks from initial research to final production-ready design tokens and asset delivery.",
      },
      {
        question: "Do you deliver digital design systems in Figma?",
        answer: "Yes. Every brand identity is delivered with a pristine, fully documented Figma library including responsive components, typography tokens, and usage examples.",
      },
    ],
    metaDescription: "NoiseCulture is an award-winning branding and creative studio. We design visual identities, typography, campaign concepts, and design systems for ambitious brands.",
    keywords: ["branding agency", "brand identity design", "creative direction", "graphic design studio", "visual identity", "packaging design"],
    image: "/images/services/branding.jpg",
  },
  {
    slug: "integrated-campaigns",
    number: "08",
    title: "Integrated Campaigns",
    shortTitle: "360° Campaigns",
    tagline: "When every channel sings the same song in harmony, the world can't help but listen.",
    h1: "360° Integrated Campaigns & Brand Launch Agency",
    definition:
      "Integrated Campaigns at NoiseCulture are multi-channel creative blitzes where PR, meme distribution, influencer activations, paid media, and brand storytelling unite around a singular creative concept to produce an undeniable cultural tsunami.",
    overview:
      "Siloed agencies build fragmented campaigns that bleed budget and confuse consumers. We operate as your single creative orchestrator, synchronizing product launches, cultural takeovers, and brand pivots across all media simultaneously for maximum compound leverage.",
    capabilities: [
      "360° Integrated Campaigns & Brand Launches",
      "Digital Campaigns & Viral Stunts",
      "Experiential Campaigns & Offline Pop-Up Activations",
      "Brand Collaborations & Limited Edition Drops",
      "Cross-Channel Creative Syncing & Timing",
      "Full Campaign Performance & Cultural Impact Auditing",
    ],
    problemsSolved: [
      {
        problem: "Disjointed agency teams fighting over budget while producing conflicting campaign messaging.",
        solution: "One unified creative director, one master campaign roadmap, and synchronized execution across all digital and real-world touchpoints.",
      },
      {
        problem: "Product launches that open with a whimper and fade immediately from public memory.",
        solution: "A phased countdown, launch-day media takeover, and 30-day culture sustaining phase that turns a launch into an enduring movement.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "The Big Creative Concept",
        description: "We uncover a singular, emotionally compelling cultural insight that becomes the anchor for every headline, meme, and video.",
      },
      {
        step: "02",
        title: "Orchestrated Synchrony",
        description: "PR stories break at 9:00 AM, meme publishers post at 11:00 AM, creator unboxings flood feeds at 2:00 PM, and paid ads retarget engaged audiences by 6:00 PM.",
      },
      {
        step: "03",
        title: "Sustained Momentum",
        description: "We harvest user-generated content, customer testimonials, and reactive community memes to keep the campaign alive for weeks.",
      },
    ],
    deliverables: [
      "Master 360° Campaign Playbook & Cross-Channel Roadmap",
      "Integrated Creative Asset Library (Video, Static, Social, PR)",
      "Launch Day Command Center & Live Optimization",
      "Comprehensive Post-Mortem Analytics & Business ROI Report",
    ],
    faqs: [
      {
        question: "Why should we hire one agency for integrated campaigns rather than specialist boutiques?",
        answer: "Speed, coherence, and compound leverage. When PR, memes, paid ads, and creators are orchestrated by the same room, there is zero friction, consistent voice, and maximum ROI.",
      },
      {
        question: "How far in advance should we plan an integrated launch?",
        answer: "We recommend 6–8 weeks for standard launches, and 10–12 weeks for complex multi-market campaigns involving physical stunts or celebrity talent.",
      },
    ],
    metaDescription: "NoiseCulture orchestrates 360° integrated campaigns, product launches, and brand collaborations that synchronize PR, creators, memes, and paid media.",
    keywords: ["integrated marketing agency", "360 campaigns", "product launch agency", "digital campaigns", "brand collaborations", "experiential marketing"],
    image: "/images/services/integrated-campaigns.jpg",
  },
];
