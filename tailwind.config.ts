import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          light: "#FAFAFA",
          dark: "#1F1F1F",
        },
        accent: {
          DEFAULT: "#0F766E", // Soft Teal
          light: "#14B8A6",
          blue: "#2563EB",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#FAFAFA",
          300: "#F5F5F5",
          800: "#1F1F1F",
          900: "#111111",
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },

    },
  },
  plugins: [],
};
export default config;
