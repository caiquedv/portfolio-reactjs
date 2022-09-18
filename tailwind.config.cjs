/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner-1': '5px 5px 15px 5px #1E293B inset',
        'custom-inner-2': '5px 5px 15px 5px #64748B inset;'
      }
    },
  },
  plugins: [],
}
