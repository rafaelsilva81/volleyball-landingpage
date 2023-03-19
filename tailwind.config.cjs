/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED3237",
        secondary: "#3973B8",
        tertiary: "#3C4D6B",
      },
      dropShadow: {
        // white text solid border (shadow)
        white: "0 0 0 1px #fff",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
