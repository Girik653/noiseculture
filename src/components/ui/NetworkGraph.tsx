"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Users, MessageSquare, Newspaper, Zap } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  category: string;
  stat: string;
  angle: number; // degrees around center
  distance: number; // percentage from center
  icon: any;
  color: string;
}

const networkNodes: NodeData[] = [
  {
    id: "memes",
    title: "Meme Community Network",
    category: "Internet Culture & Viral Pages",
    stat: "120M+ Reach",
    angle: 30,
    distance: 40,
    icon: Zap,
    color: "#FFAD32",
  },
  {
    id: "creators",
    title: "Creator & Talent Network",
    category: "Culture Personalities & Talent",
    stat: "Culture Network",
    angle: 110,
    distance: 42,
    icon: Users,
    color: "#FFFFFF",
  },
  {
    id: "publishers",
    title: "Digital Newsrooms & Press",
    category: "Tier-1 Editorial & PR Media",
    stat: "85+ Outlets",
    angle: 190,
    distance: 38,
    icon: Newspaper,
    color: "#FFAD32",
  },
  {
    id: "communities",
    title: "Subreddits & Discord Hubs",
    category: "Hyper-Engaged Subcultures",
    stat: "25+ Communities",
    angle: 260,
    distance: 42,
    icon: MessageSquare,
    color: "#FFFFFF",
  },
  {
    id: "studios",
    title: "Creative Studios & Curators",
    category: "Design, 3D Art & Visual Production",
    stat: "Creative Network",
    angle: 330,
    distance: 39,
    icon: Sparkles,
    color: "#FFAD32",
  },
];

export function NetworkGraph() {
  const [activeNode, setActiveNode] = useState<NodeData | null>(networkNodes[0]);

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Interactive Orbiting Stage */}
      <div className="relative w-full aspect-square max-w-[680px] mx-auto flex items-center justify-center">
        {/* Concentric Orbit Rings */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-white/10 border-dashed animate-spin-slow pointer-events-none" />
        <div className="absolute w-[58%] h-[58%] rounded-full border border-[#FFAD32]/15 pointer-events-none" />
        <div className="absolute w-[36%] h-[36%] rounded-full border border-white/5 pointer-events-none" />

        {/* Ambient Center Glow */}
        <div className="absolute w-48 h-48 rounded-full bg-[#FFAD32]/10 blur-3xl pointer-events-none" />

        {/* SVG Connecting Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {networkNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x2 = 50 + Math.cos(rad) * node.distance;
            const y2 = 50 + Math.sin(rad) * node.distance;
            const isActive = activeNode?.id === node.id;

            return (
              <g key={node.id}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={isActive ? "#FFAD32" : "rgba(255, 255, 255, 0.14)"}
                  strokeWidth={isActive ? "2" : "1"}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  className="transition-all duration-300"
                />
                {/* Dynamic traveling photon pulse along connection line */}
                <motion.circle
                  r={isActive ? "3.5" : "2"}
                  fill="#FFAD32"
                  animate={{
                    cx: ["50%", `${x2}%`],
                    cy: ["50%", `${y2}%`],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                    ease: "easeInOut",
                    delay: (node.angle / 360) * 1.8,
                  }}
                />
                {isActive && (
                  <circle
                    cx={`${x2}%`}
                    cy={`${y2}%`}
                    r="8"
                    fill="#FFAD32"
                    fillOpacity="0.25"
                    className="animate-ping"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center Hub: NOISECULTURE Core */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#080808] border-2 border-[#FFAD32] shadow-[0_0_40px_rgba(255,173,50,0.35)] flex flex-col items-center justify-center p-3 text-center cursor-default"
        >
          <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FFAD32] font-semibold">
            NERVE CENTER
          </div>
          <div className="font-display font-black text-sm sm:text-base text-white tracking-tight uppercase leading-none mt-1">
            NOISE<br />
            <span className="text-[#FFAD32]">CULTURE</span>
          </div>
          <div className="text-[9px] font-mono text-neutral-400 mt-1">
            ECOSYSTEM
          </div>
        </motion.div>

        {/* Orbiting Satellite Nodes (Plain icons only, no portraits per brief) */}
        {networkNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * node.distance;
          const y = 50 + Math.sin(rad) * node.distance;
          const isActive = activeNode?.id === node.id;
          const Icon = node.icon;

          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node)}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.15 }}
              className={`absolute z-30 group p-2.5 rounded-2xl transition-all duration-300 flex items-center gap-2.5 ${
                isActive
                  ? "bg-[#FFAD32] text-black shadow-[0_0_30px_rgba(255,173,50,0.5)] border-2 border-white"
                  : "bg-[#141414] text-white border border-white/15 hover:border-[#FFAD32]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive ? "bg-black text-[#FFAD32]" : "bg-white/10 text-[#FFAD32]"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div className="text-left pr-1.5 hidden sm:block">
                <div className="text-[11px] font-display font-bold uppercase leading-tight tracking-tight">
                  {node.title}
                </div>
                <div
                  className={`text-[9px] font-mono ${
                    isActive ? "text-black/80 font-bold" : "text-neutral-400"
                  }`}
                >
                  {node.stat}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg mt-6 p-5 rounded-2xl bg-[#141414] border border-white/10 text-center flex flex-col items-center"
          >
            <div className="text-[11px] font-mono text-[#FFAD32] uppercase tracking-widest mb-1">
              Active Network Node • {activeNode.category}
            </div>
            <div className="text-xl font-display font-bold text-white uppercase tracking-tight">
              {activeNode.title}
            </div>
            <div className="text-sm font-mono text-neutral-300 mt-1">
              Verified Focus: <span className="text-[#FFAD32] font-bold">{activeNode.stat}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Two Clear Audience Pathways */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Pathway 1: For Brands */}
        <Link
          href="/services"
          className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-[#FFAD32] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAD32]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase text-[#FFAD32] tracking-wider mb-4">
              Pathway 01 • Enterprise &amp; Scaleups
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight mb-2">
              FOR BRANDS ↗
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Launch 360° viral campaigns, dominate news cycles with digital PR, scale high-ROAS paid media, and partner with top creators.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAD32] group-hover:text-white transition-colors">
            <span>Explore Agency Capabilities</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Pathway 2: For Creators (Updated per Brief Section 7) */}
        <Link
          href="/for-creators"
          className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1A160F] to-[#0A0A0A] border border-[#FFAD32]/30 hover:border-[#FFAD32] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAD32]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFAD32]/20 border border-[#FFAD32]/40 text-[10px] font-mono uppercase text-[#FFAD32] tracking-wider mb-4">
              Pathway 02 • Creators &amp; Talent
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight mb-2">
              FOR CREATORS ↗
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              For creators: brand deals that last, help growing your channel, production support, creator trips and brand building. Apply to join.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAD32] group-hover:text-white transition-colors">
            <span>Apply to join</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
