import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "var(--background)",
        foreground: "var(--foreground)",
        // "primary-color": '#D1ADA6',
        // "secondary-color": '#C59C94',
        // "accent-color": '#B6827A'
        pinkColor : {
          DEFAULT: '#D1ADA6',
          light: '#E2C7B9',
          dark: '#B38D82',
        },
      },
      borderRadius:{
        low: '200px',
        med: '2000px',        
        high : '5000px',
      }
    },
  },
  plugins: [],
};
export default config;
