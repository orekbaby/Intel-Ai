const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        guaruja: ["var(--font-guaruja)", "sans-serif"], // Add your custom font here
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
