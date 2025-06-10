/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
    "./*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Courier", "monospace"],
        crimson: ["Crimson Text", "serif"],
      },
      colors: {
        // Pinkish-brown theme (default)
        primary: {
          100: "#f3e1df",
          200: "#f0f0f0",
          300: "#e5d5d6",
          400: "#d0c2c7",
          500: "#7e6572",
          600: "#674e59",
          700: "#573f4b",
          800: "#452d37",
          900: "#391e2b",
        },
        // Orange theme with blue highlights (alternative)
        "orange-theme": {
          100: "#FAF7F4", // Light orange/peach
          200: "#FFDAB9", // Peach puff
          300: "#FFC49F", // Light salmon
          400: "#F4A261", // Sandy brown
          500: "#E76F51", // Burnt sienna
          600: "#D35400", // Pumpkin
          700: "#BA4A00", // Darker orange
          800: "#A04000", // Brown
          900: "#873600", // Dark brown
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
