import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0f",
        "bg-secondary": "#12121a",
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1aa",
        "text-muted": "#71717a",
        "accent-primary": "#6366f1",
        "accent-secondary": "#8b5cf6",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
