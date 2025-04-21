/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c22085", // pink
          dark: "#c22085",
          light: "#c22085",
        },
        secondary: {
          DEFAULT: "#2d9687", // Green
          dark: "#2d9687",
          light: "#2d9687",
        },
        tertiary: {
          DEFAULT: "#e9b171", // Yellow
          dark: "#e2b8aa",
          light: "#e9b171",
        },
        background: {
          light: "#f3f3f3",
          dark: "#0c0c0c",
        },
        surface: {
          light: "#dcdcdc",
          dark: "#242424",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
      fontFamily: {
        livvic: "var(--font-serif)",
        openSans: "var(--font-sans)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
        "slide-in-right": "slideInRight 0.5s ease-in-out",
        "slide-in-left": "slideInLeft 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  plugins: [],
};
