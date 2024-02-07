import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        myBlack: "#111222",
        myYellow: "#FFF3CF",
        mySageGreen: "#6d9773",
        myDarkGreen: "#0c3b2e",
        myLink: "#0174BE",
      },
    },
  },
  plugins: [],
};
export default config;
