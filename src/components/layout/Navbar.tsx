"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if current page is on ivory background (like home hero or about)
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 text-white shadow-xl"
            : isHome
            ? "bg-transparent py-5 text-[#080808]"
            : "bg-[#080808]/80 backdrop-blur-sm border-b border-white/5 py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
            aria-label="NoiseCulture Home"
          >
            {/* Monogram Emblem Badge */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-black border border-white/10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-md shrink-0">
              <Image
                src="/brand/emblem-black-bg.png"
                alt="NoiseCulture Emblem"
                width={36}
                height={26}
                className="object-contain"
                priority
              />
            </div>

            {/* Dynamic Adaptive Wordmark */}
            <div className="relative h-6 sm:h-7 w-36 sm:w-44 flex items-center">
              <Image
                src={!isScrolled && isHome ? "/brand/wordmark-light-mode.png" : "/brand/wordmark-dark-mode.png"}
                alt="NoiseCulture"
                width={170}
                height={25}
                className="object-contain object-left transition-opacity duration-200"
                priority
              />
            </div>

            <span
              className="hidden md:inline-block w-2 h-2 rounded-full bg-[#FFAD32] animate-ping ml-0.5"
              style={{ animationDuration: "3s" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-mono font-medium">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              const isDarkText = !isScrolled && isHome;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-200 group ${
                    isActive
                      ? "text-[#FFAD32] font-semibold"
                      : isDarkText
                      ? "text-[#080808]/80 hover:text-[#080808]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.title}
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] tracking-tight bg-[#FFAD32] text-[#080808] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFAD32]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                !isScrolled && isHome
                  ? "bg-[#080808] text-white hover:bg-[#FFAD32] hover:text-[#080808]"
                  : "bg-[#FFAD32] text-[#080808] hover:bg-white hover:text-[#080808]"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              !isScrolled && isHome ? "text-[#080808] hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#080808] pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-800">
                Menu Directory
              </div>
              {siteConfig.nav.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between text-2xl font-display font-bold uppercase tracking-tight py-2 ${
                      pathname === item.href ? "text-[#FFAD32]" : "text-white hover:text-[#FFAD32]"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.badge ? (
                      <span className="text-xs px-2 py-0.5 rounded bg-[#FFAD32] text-black font-mono">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-neutral-600" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/lockup-transparent.png"
                  alt="NoiseCulture"
                  width={110}
                  height={96}
                  className="w-20 h-auto object-contain opacity-85"
                />
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Independent Culture-Driven Growth Agency.
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFAD32] text-black font-mono text-sm uppercase tracking-wider font-bold"
              >
                <span>Start A Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
