import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "signUp-pattern": "url('/images/bg-rectangle.png')"
      },
      colors: {
        primary: '#20525C',
        FBlack: "#313030",
        appGrey: "#ECEEEE",
        leafGreen: {
          DEFAULT: '#213502',
          10: "#42650B",
          20: "#618F19",
          30: "#7FB42D",
          40: "#99C653",
          50: "#A4C374",
          60: "#BACB9F",
          70: "#D1D8C5",
        }
      }
    },
  },
  plugins: [],
};
export default config;
