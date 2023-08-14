/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': '120px', // Custom height value
      },
      maxHeight: {
        '120': '120px', // Corresponding custom max-height value
      },
    },
  },
  plugins: [],
}

