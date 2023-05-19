/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      lightGrey: "hsl(217, 12%, 63%)",
      mediumGrey: "hsl(216, 12%, 54%)",
      darkBlue: "hsl(213, 19%, 18%)",
      veryDarkBlue: "hsl(216, 12%, 8%)",
    },

    screens: {
      md: "768px",
      xl: "1024px",
    },
  },
  plugins: [],
};
