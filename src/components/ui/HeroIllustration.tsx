"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NoiseBadge } from "./NoiseBadge";
import { Sparkles, Zap, Eye, Volume2, TrendingUp, Radio } from "lucide-react";

export function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse interaction for subtle 3D tilt and floating parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  // Multi-plane parallax transforms for floating stickers
  const sticker1X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const sticker1Y = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const sticker2X = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const sticker2Y = useTransform(smoothY, [-0.5, 0.5], [22, -22]);

  const sticker3X = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const sticker3Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  const sticker4X = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const sticker4Y = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto aspect-[4/5] sm:aspect-[1/1] flex items-center justify-center select-none"
    >
      {/* Background Atmospheric Layer */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#FFAD32]/20 via-[#ECE2CD] to-[#FFF8EA] border border-black/10 -rotate-2 scale-95 shadow-2xl transition-transform duration-500" />

      {/* Main 3D Tilt Wrapper */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[92%] h-[92%] rounded-3xl bg-[#080808] border-2 border-black/15 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8"
      >
        {/* Background Visual Art / Character Portrait */}
        <div className="absolute inset-0 opacity-45 mix-blend-luminosity hover:opacity-60 transition-opacity duration-700">
          <Image
            src="/images/about/collective.jpg"
            alt="NoiseCulture Creative Roster"
            fill
            className="object-cover object-center filter grayscale contrast-125"
            priority
          />
        </div>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#FFAD32]/10" />

        {/* Top Header of the Art Card */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider">
            <Radio className="w-3.5 h-3.5 text-[#FFAD32] animate-pulse" />
            <span>LIVE CULTURE PULSE</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD32]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Center Editorial Visual Framing */}
        <div className="relative z-10 text-center my-auto py-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block relative"
          >
            <div className="font-display font-black text-4xl sm:text-6xl text-white tracking-tighter uppercase leading-none drop-shadow-lg">
              CULTURE<br />
              <span className="text-[#FFAD32] stroke-white">COLLISION</span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#FFF8EA]/80 mt-2">
              [ ART • MEMES • PR • VIRALITY ]
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/90">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#FFAD32]" />
            <span>1B+ MONTHLY VIEWS</span>
          </div>
          <div className="text-[11px] text-[#FFAD32] tracking-widest font-bold">
            UNCENSORED
          </div>
        </div>
      </motion.div>

      {/* Floating Sticker 1: Top-Right Circular Rotating Emblem with Parallax */}
      <motion.div
        style={{ x: sticker1X, y: sticker1Y }}
        animate={{ rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-30"
      >
        <NoiseBadge dark={false} className="shadow-2xl" />
      </motion.div>

      {/* Floating Sticker 2: Bottom-Left Electric Orange "NOISE" Badge with Opposite Parallax */}
      <motion.div
        style={{ x: sticker2X, y: sticker2Y }}
        animate={{ rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-30"
      >
        <div className="px-5 py-3 rounded-2xl bg-[#FFAD32] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_#080808] flex items-center gap-2.5 font-display font-black uppercase text-sm sm:text-base tracking-tight hover:scale-105 transition-transform cursor-default">
          <Zap className="w-5 h-5 fill-current" />
          <span>ZERO BACKGROUND NOISE</span>
        </div>
      </motion.div>

      {/* Floating Sticker 3: Top-Left Eyeball Attention Pill */}
      <motion.div
        style={{ x: sticker3X, y: sticker3Y }}
        className="absolute top-12 -left-6 sm:top-16 sm:-left-10 z-20 hidden sm:block"
      >
        <div className="px-4 py-2 rounded-full bg-white text-[#080808] border-2 border-[#080808] shadow-[3px_3px_0px_#080808] flex items-center gap-2 font-mono text-xs font-bold tracking-wider hover:scale-105 transition-transform cursor-default">
          <Eye className="w-4 h-4 text-[#FFAD32] fill-[#FFAD32]" />
          <span>UNMISSABLE</span>
        </div>
      </motion.div>

      {/* Floating Sticker 4: Right Audio Waveform Tag */}
      <motion.div
        style={{ x: sticker4X, y: sticker4Y }}
        className="absolute bottom-24 -right-4 sm:bottom-28 sm:-right-8 z-20"
      >
        <div className="px-4 py-2.5 rounded-xl bg-[#080808] text-white border border-white/20 shadow-2xl flex items-center gap-3 font-mono text-xs">
          <Volume2 className="w-4 h-4 text-[#FFAD32] animate-bounce" />
          <div>
            <div className="text-[10px] text-neutral-400">AMPLITUDE</div>
            <div className="text-[#FFAD32] font-bold">128.4 dB CULTURE</div>
          </div>
        </div>
      </motion.div>

      {/* Small Starburst Accent */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-1/3 -right-2 text-[#FFAD32] z-30 pointer-events-none"
      >
        <Sparkles className="w-8 h-8 fill-current" />
      </motion.div>
    </div>
  );
}
