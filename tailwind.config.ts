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
          50: "#EEF6F3",
          100: "#D6EBE2",
          200: "#AEDAC8",
          300: "#7FC3A9",
          400: "#4FA688",
          500: "#2F8A6E",
          600: "#226E57",
          700: "#1C5847",
          800: "#17453A",
          900: "#123830",
        },
        ochre: {
          50: "#FDF6EC",
          100: "#FAE9CB",
          200: "#F3CE8E",
          300: "#EAB05A",
          400: "#DE9536",
          500: "#C97B22",
          600: "#A6621A",
          700: "#7F4B16",
        },
        clay: {
          500: "#C1553F",
          600: "#A3402D",
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
      },
    },
  },
  plugins: [],
};
export default config;
