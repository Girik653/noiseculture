# NOISECULTURE 2.0

> **Independent Culture-Driven Growth Agency**  
> *"Noise with Intent."*

NoiseCulture is an independent, culture-first creative marketing, communications, and brand growth agency operating at the intersection of international advertising, internet subcultures, modern media, and talent management.

---

## ⚡ Overview

NoiseCulture rejects corporate template marketing and sterile agency silos in favor of synchronized, high-impact cultural momentum:
- **Show, Don't Explain**: Visual storytelling, editorial typography, campaign imagery, and tactile interaction.
- **Dual Audience Architecture**: Dedicated, friction-free journeys for **Brands & Enterprise Marketers** and **Creators & Digital Talent**.
- **Data-Backed Campaign Dossiers**: Comprehensive case studies with transparent attribution, live metrics, and campaign post-mortems.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom tokens:
  - Deep Black: `#080808`
  - Warm Ivory: `#FFF8EA`
  - Electric Orange: `#FFAD32`
  - Neutral Soft Grey: `#E7E2D8`
- **Motion & Interactions**:
  - [Framer Motion](https://www.framer.com/motion/) for fluid page transitions, spring physics, and scroll reveals
  - [Lenis](https://github.com/darkroomengineering/lenis) for smooth momentum scrolling
  - Custom SVG canvas for the interactive 3D Culture Globe and Creator Ecosystem Network
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type**: Plus Jakarta Sans, Syne, JetBrains Mono

---

## 🌐 Site Architecture & Sections

### 1. Homepage (`/`)
- **Hero Section**: Warm ivory canvas, bold editorial typography, dynamic creative collage, floating interactive cultural pills.
- **Culture Globe & Fun Facts**: Realistic 3D earth globe, live counter statistics (1B+ monthly views/impressions, 500+ creator collaborations).
- **Campaign Gallery**: Featured brand moments and viral case studies.
- **Creator Ecosystem Visualization**: Interactive network graphing relationships between brands, creators, and meme communities.
- **Capabilities & Expertise Accordion**: 8 interconnected disciplines with high-contrast typography, kinetic hover slides, and dynamic sticky preview dossiers.
- **Brand Collaborators & Marquee**: 12 verified brand partners (Jio, PhonePe, Zomato, Vaseline, Britannia, Netflix, Parle, Infinix, Redmi, Gowardhan, Duolingo, KitKat) linked directly to case study dossiers.
- **Editorial Field Notes & Insights**: Thought leadership and culture playbooks.
- **Final High-Energy CTA**: Direct conversion launchpad.

### 2. Brands & Case Studies (`/brands` & `/brands/[slug]`)
- Driven by unified `campaigns.json` data model.
- 14 full campaign dossiers (3 Featured Collaborations, 11 Analytical Breakdowns).
- Honest attribution and transparent metrics.
- Multi-asset galleries, social embeds, and video players.

### 3. Capabilities (`/services` & `/services/[slug]`)
- Public Relations & Strategic Communications
- Paid Media & Performance Marketing
- Meme & Internet Culture Marketing
- Influencer Marketing & Discovery
- Creator Representation & Talent Management
- Brand Management & Positioning
- Branding & Creative Direction
- 360° Integrated Campaigns

### 4. For Creators (`/for-creators`)
- Dedicated talent representation portal.
- Monetization blueprints, brand matchmaking, and legal/contract support.
- Multi-step interactive application form with custom categories and audience specification.

### 5. Culture Insights (`/insights` & `/insights/[slug]`)
- Strategic breakdowns of internet culture, algorithm mechanics, and viral playbooks.

### 6. Contact & Direct Connect (`/contact`)
- Unified hotline: `+91 9352569163` (WhatsApp direct integration).
- Multi-city footprint: New Delhi, Mumbai, and Jaipur.
- Direct booking and briefing forms.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Girik653/noiseculture.git

# Enter project directory
cd noiseculture

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/campaigns/    # 34 original campaign visual assets and videos
│   ├── images/              # Earth textures, about photography, service visuals
│   ├── logo.svg
│   └── og-image.jpg
├── src/
│   ├── app/                 # Next.js App Router (pages & API routes)
│   ├── components/
│   │   ├── brands/          # Brand dossiers, cards, filter grids, timelines
│   │   ├── forms/           # Contact and creator application forms
│   │   ├── home/            # Homepage interactive sections
│   │   ├── layout/          # Navbar, Footer, Mobile Navigation
│   │   ├── providers/       # Lenis smooth scroll provider
│   │   └── ui/              # Interactive Globe, Hero Illustration, Network Graph
│   ├── data/
│   │   ├── campaigns.json   # 14 complete campaign dossiers
│   │   ├── clients.ts       # Brand partners roster
│   │   ├── creators.ts      # Creator ecosystem data
│   │   ├── services.ts      # 8 capability specifications
│   │   └── siteConfig.ts    # Global site constants and metadata
│   └── lib/                 # Utility functions and SEO helpers
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚖️ Legal & Disclaimer

Brand names, campaign references, and trademarks belong to their respective owners and do not imply endorsement. Work labeled as breakdowns represents editorial analysis of publicly reported industry campaigns.

© 2026 NOISECULTURE. All rights reserved.
