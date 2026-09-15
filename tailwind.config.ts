import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Espresso / warm dark navy — text and dark section backgrounds
        ink: {
          950: "#231809",
          900: "#2D2011",
          800: "#3A2B18",
          700: "#4A3822",
        },
        // Warm cream / sand — page background
        paper: {
          50: "#FBF3E3",
          100: "#F4E5C7",
        },
        // Deep teal — primary brand colour
        brand: {
          50: "#E7F5F3",
          100: "#C5E8E4",
          200: "#8FD1C9",
          300: "#54B3A9",
          400: "#2C948A",
          500: "#137B73",
          600: "#0F635D",
          700: "#0D504B",
          800: "#0B403C",
          900: "#093330",
        },
        // Warm jade / rich green — secondary
        jade: {
          50: "#EEFAF0",
          100: "#D0F0D6",
          200: "#9EE0AA",
          300: "#68CC7C",
          400: "#3DAE55",
          500: "#25923D",
          600: "#1B7530",
          700: "#165E27",
          800: "#124B20",
          900: "#0F3C1B",
        },
        // Mustard / copper — occasional highlight
        ochre: {
          50: "#FDF5E4",
          100: "#F8E2B3",
          200: "#F1C56E",
          300: "#E6A23A",
          400: "#D48A1F",
          500: "#B0710F",
          600: "#8C5A0C",
          700: "#6B4409",
        },
        clay: {
          500: "#AC3F29",
          600: "#8B321F",
        },
        // Tomato / coral / terracotta — energetic accent
        coral: {
          50: "#FFF0EA",
          100: "#FFD9C9",
          200: "#FFB194",
          300: "#FA8960",
          400: "#F06839",
          500: "#DD4C22",
          600: "#B93A17",
          700: "#8F2D13",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(35,24,9,0.05), 0 10px 28px -10px rgba(35,24,9,0.18)",
        pop: "0 16px 44px -12px rgba(35,24,9,0.3)",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(35,24,9,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(35,24,9,0.05) 1px, transparent 1px)",
        "warm-glow": "radial-gradient(60% 60% at 85% 15%, rgba(240,104,57,0.18) 0%, rgba(240,104,57,0) 100%), radial-gradient(55% 55% at 10% 85%, rgba(19,123,115,0.18) 0%, rgba(19,123,115,0) 100%)",
        "brand-ochre": "linear-gradient(135deg, #0D504B 0%, #137B73 45%, #E6A23A 100%)",
        "teal-jade": "linear-gradient(135deg, #093330 0%, #137B73 55%, #25923D 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
