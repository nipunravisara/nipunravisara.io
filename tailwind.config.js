module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
      serif: ["Overpass", "serif"],
    },
    letterSpacing: {
      widest: "1em",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
