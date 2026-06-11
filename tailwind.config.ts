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
        "bg-primary": "#0A0A0F",
        "accent-blue": "#00D4FF",
        "accent-purple": "#B400FF",
        "accent-magenta": "#FF00B8",
      },
      fontFamily: {
        astonix: ["ASTONIX", "Orbitron", "sans-serif"],
        cyber: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        pulse: "pulse-glow 2s ease-in-out infinite",
        glitch: "glitch-left 3s infinite linear alternate-reverse",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "scroll-dot": {
          "0%": { transform: "translateX(-50%) translateY(0)", opacity: "1" },
          "100%": { transform: "translateX(-50%) translateY(14px)", opacity: "0" },
        },
        "glitch-left": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(-1px, -1px)" },
          "60%": { transform: "translate(1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;