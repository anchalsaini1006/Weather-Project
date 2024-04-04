/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/src/media/bg.jpg')",
        left: "url('/src/media/right.jpg')",
      },
    },
  },
  plugins: [],
};
