import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["var(--font-inter)"],
        'bvp': ["var(--font-bvp)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "signUp-pattern": "url('/images/bg-pattern.png')",
          "welcome-savings": "url('/images/savings-main-bg.png')",
          "start-savings": "url('/images/start-savings-bg.png')",
          "view-savings": "url('/images/savings-progress-bg.png')",
          "single-savings": "url('/images/savings-single-bg.png')",
      },
      colors: {
        primary: {
          DEFAULT: '#20525C',
          10: "#2D7381",
          20: "#83B3BE",
          30: "#4f7e89",
        },
        secondary: {
          DEFAULT: "#7CCDDE"
        },
        FBlack: "#313030",
        appGrey: "#ECEEEE",
        leafGreen: {
          DEFAULT: '#213502',
          5: "#557726",
          10: "#42650B",
          20: "#618F19",
          30: "#7FB42D",
          40: "#99C653",
          50: "#A4C374",
          60: "#BACB9F",
          70: "#D1D8C5",
          80: "#EBF7DF",
        }
      }
    },
  },
  plugins: [],
};
export default config;
