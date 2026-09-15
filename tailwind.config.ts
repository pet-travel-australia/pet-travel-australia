import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B1220",
          900: "#0F1B2D",
          800: "#16263D",
          700: "#1E3350",
        },
        paper: {
          50: "#FAF9F6",
          100: "#F4F2EC",
        },
        brand: {
          50: "#E9FBF2",
          100: "#C8F3DE",
          200: "#93E4BE",
          300: "#57CE9B",
          400: "#22B37E",
          500: "#0EA06C",
          600: "#0A8459",
          700: "#0A6A49",
          800: "#0B543C",
          900: "#0A4132",
        },
        ochre: {
          50: "#FFF8EA",
          100: "#FEEAC0",
          200: "#FDD07E",
          300: "#FBB246",
          400: "#F6961F",
          500: "#EC7C0D",
          600: "#C2620A",
          700: "#8F480A",
        },
        clay: {
          500: "#E1543A",
          600: "#C13F28",
        },
        coral: {
          50: "#FFF1EE",
          100: "#FFDDD4",
          200: "#FFB9A8",
          300: "#FF9179",
          400: "#FB6E4D",
          500: "#F0512E",
          600: "#CC3C1D",
          700: "#9E3018",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -8px rgba(11,18,32,0.12)",
        pop: "0 12px 40px -12px rgba(11,18,32,0.25)",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(11,18,32,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.04) 1px, transparent 1px)",
        "warm-glow": "radial-gradient(60% 60% at 85% 15%, rgba(246,150,31,0.16) 0%, rgba(246,150,31,0) 100%), radial-gradient(55% 55% at 10% 85%, rgba(14,160,108,0.14) 0%, rgba(14,160,108,0) 100%)",
        "brand-ochre": "linear-gradient(135deg, #0A8459 0%, #0EA06C 45%, #F6961F 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
