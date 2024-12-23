/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'off-white': '#F2F0EF',
      },
      fontFamily: {
        zen: ['"Zen Old Mincho"', 'serif'],
      },
    },
  },
  plugins: [],
}

