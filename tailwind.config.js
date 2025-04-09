/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundSec: "var(--background-sec)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        descText: "var(--desc-text)",
        descTextSec: "var(--desc-text-sec)",
        descTextThird: "var(--desc-text-third)",
        headingText: "var(--heading-text)",
        borderColor: "var(--border-color)",
        borderColorSec: "var(--border-color-sec)",
        borderColorThird: "var(--border-color-third)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
