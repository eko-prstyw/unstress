import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    colors: {
      black: "#161616",
      white: "#FFFFFF",
      error: "#EE2233",
      warning: "#EDB95E",
      success: "#82DD55",
      neutral: "#64748B",
      primary: "#135589",
      "primary-50": "#F2F8FD",
      "primary-100": "#E3EFFB",
      "primary-200": "#C1DFF6",
      "primary-300": "#8BC5EE",
      "primary-400": "#4DA8E3",
      "primary-500": "#268DD1",
      "primary-600": "#1770B2",
      "primary-700": "#135589",
      "primary-800": "#154D77",
      "primary-900": "#174063",
      "primary-950": "#0F2A42",
      secondary: "#2A93D5",
      "secondary-50": "#F2F8FD",
      "secondary-100": "#E4EFFA",
      "secondary-200": "#C2DFF5",
      "secondary-300": "#8CC7ED",
      "secondary-400": "#4FA9E1",
      "secondary-600": "#1A71AF",
      "secondary-700": "#165A8E",
      "secondary-800": "#164D76",
      "secondary-900": "#184162",
      "secondary-950": "#102941",
      tertiary: "#3DDAD7",
      "tertiary-50": "#F0FDFB",
      "tertiary-100": "#CBFCF6",
      "tertiary-200": "#98F7EF",
      "tertiary-300": "#5CECE4",
      "tertiary-500": "#12BABA",
      "tertiary-600": "#0B9396",
      "tertiary-700": "#0D7678",
      "tertiary-800": "#105C5F",
      "tertiary-900": "#124C4F",
      "tertiary-950": "#032C30",
      quaternary: "#AED9DA",
      "quaternary-50": "#F2F9F8",
      "quaternary-100": "#DDF0F0",
      "quaternary-300": "#93CBCD",
      "quaternary-400": "#5FADB1",
      "quaternary-500": "#449196",
      "quaternary-600": "#3B777F",
      "quaternary-700": "#356269",
      "quaternary-800": "#325258",
      "quaternary-900": "#2D464C",
      "quaternary-950": "#1A2D32",
      quinary: "#EDFAFD",
      "quinary-100": "#D4F1F9",
      "quinary-200": "#AEE3F3",
      "quinary-300": "#76CDEA",
      "quinary-400": "#36AEDA",
      "quinary-500": "#1B91BF",
      "quinary-600": "#1975A1",
      "quinary-700": "#1B5F83",
      "quinary-800": "#1F4F6B",
      "quinary-900": "#1E435B",
      "quinary-950": "#0E2A3E",
    },
    keyframes: {
      bounce: {
        "0%, 100%": { transform: "translateX(30%)" },
        "50%": { transform: "translateX(0)" },
      },
    },
    animation: {
      sideBounce: "bounce 1s linear infinite",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
