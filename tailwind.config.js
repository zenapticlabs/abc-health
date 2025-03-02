/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pontano Sans"', "sans-serif"],
        passenger: ["Passenger Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
