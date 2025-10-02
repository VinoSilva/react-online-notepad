export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
      colors: {
        primary: "#0066fe",
        "primary-light": "#3385fe",
        // white: "#dee8ff",
      },
    },
  },
  plugins: [],
};
