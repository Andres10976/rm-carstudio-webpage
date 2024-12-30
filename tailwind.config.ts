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
          black: "#999999",
          gold: "#F7D046",
          blue: "#0066FF",
          red: "#FF3333",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        // Simplified font families
        trajanPro: ["TrajanPro-Regular", "Trajan Pro Bold", "serif"],
        comfortaa: ["Comfortaa Regular", "Comfortaa Bold V2", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
