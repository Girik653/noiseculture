export interface CreatorProfile {
  id: string;
  name: string;
  handle: string;
  niche: string;
  totalReach: string;
  platforms: {
    name: string;
    followers: string;
  }[];
  bio: string;
  avatar: string;
  featuredCampaign?: string;
  tags: string[];
}

export const creatorsRoster: CreatorProfile[] = [
  {
    id: "aria-chen",
    name: "Aria Chen",
    handle: "@ariachen.culture",
    niche: "Culture, Tech & Future Media",
    totalReach: "1.4M+",
    platforms: [
      { name: "YouTube", followers: "680K" },
      { name: "Instagram", followers: "490K" },
      { name: "TikTok", followers: "260K" },
    ],
    bio: "Decodes the collision of internet subcultures, consumer technology, and digital design for modern audiences.",
    avatar: "/images/creators/aria-chen.jpg",
    featuredCampaign: "SonicWave Global Launch",
    tags: ["Culture", "Tech", "Podcasting", "Keynotes"],
  },
  {
    id: "kavya-reddy",
    name: "Kavya Reddy",
    handle: "@kavyareddy.studio",
    niche: "Sustainable Streetwear & Visual Arts",
    totalReach: "920K+",
    platforms: [
      { name: "Instagram", followers: "560K" },
      { name: "Pinterest", followers: "240K" },
      { name: "YouTube", followers: "120K" },
    ],
    bio: "Pioneering conscious street fashion styling, sustainable fabric teardowns, and modern architectural aesthetics.",
    avatar: "/images/creators/kavya-reddy.jpg",
    featuredCampaign: "HyperThread Capsule Drop",
    tags: ["Fashion", "Sustainability", "Art Direction"],
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    handle: "@marcusthorne.fit",
    niche: "High-Performance Human Physiology",
    totalReach: "1.8M+",
    platforms: [
      { name: "YouTube", followers: "920K" },
      { name: "Instagram", followers: "610K" },
      { name: "Newsletter", followers: "280K" },
    ],
    bio: "Former collegiate decathlete turning biomechanics research into actionable human performance breakthroughs.",
    avatar: "/images/creators/marcus-thorne.jpg",
    featuredCampaign: "Apex Pro Scaling",
    tags: ["Athletic", "Longevity", "D2C Brand Founder"],
  },
  {
    id: "devon-vance",
    name: "Devon Vance",
    handle: "@devonvance.3d",
    niche: "Motion Design, 3D Art & Web Culture",
    totalReach: "780K+",
    platforms: [
      { name: "TikTok", followers: "430K" },
      { name: "Instagram", followers: "240K" },
      { name: "X (Twitter)", followers: "110K" },
    ],
    bio: "Creates surreal kinetic visuals, meme edits, and pop-culture motion graphics that amass millions of organic loops.",
    avatar: "/images/creators/devon-vance.jpg",
    featuredCampaign: "Volt Energy Rebrand Launch",
    tags: ["3D Animation", "VFX", "Meme Culture"],
  },
];

export const ecosystemNodes = [
  { id: "node-1", label: "Meme Pages", count: "120M+ Audience", x: 20, y: 30, color: "#FFAD32", radius: 52 },
  { id: "node-2", label: "Culture Creators", count: "85+ Talent", x: 75, y: 25, color: "#FFFFFF", radius: 48 },
  { id: "node-3", label: "Digital Newsrooms", count: "40+ Editors", x: 80, y: 70, color: "#FFAD32", radius: 46 },
  { id: "node-4", label: "Subreddits & Discords", count: "25+ Communities", x: 25, y: 75, color: "#FFFFFF", radius: 44 },
  { id: "node-hub", label: "NOISECULTURE", count: "Nerve Center", x: 50, y: 50, color: "#FFAD32", radius: 64, isCenter: true },
];
