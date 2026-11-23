import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FFF8EA",
          card: "#FAF2DF",
          dark: "#ECE2CD",
          light: "#FFFDF9",
        },
        black: {
          DEFAULT: "#080808",
          charcoal: "#111111",
          card: "#141414",
          light: "#1C1C1C",
          border: "#262626",
        },
        orange: {
          DEFAULT: "#FFAD32",
          glow: "#FFB74D",
          deep: "#F2951B",
          dark: "#D67D0C",
        },
        softgrey: "#E7E2D8",
        borderIvory: "rgba(8, 8, 8, 0.08)",
        borderDark: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "float-slow": "float 9s ease-in-out 1s infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
