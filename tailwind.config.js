/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightModeText: "#111517",
        lightModeBackground: "#E9E9Eb",
        darkModeElements: "#1E1E1E",
        orangeElements: "#E2582C",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
