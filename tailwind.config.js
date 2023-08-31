/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ["Roboto Slab", "sanf-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "brand-white": "#EFE9F4",
        "brand-dark-green": "#082022",
        "brand-aqua": "#319795",
        "brand-yellow": "#D7AF70",
        "brand-red": "#ED0A0A",
        "brand-green": "#319754",
        "brand-purple": "#953197",
        "bran-blue": "#2C39B5",
      },
    },
  },
  plugins: [],
};
