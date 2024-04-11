import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans':['Helvetica'],
      'serif':["Rische"]
    },

    colors: {
      'black': '#0A0908',
      'white': '#EFE9E1',
      "gold": "#CD9900",
      "red":"#98473E"
    },

    extend: {
    
    },
  },
  plugins: [],
};
export default config;
