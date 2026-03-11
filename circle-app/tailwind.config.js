/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#00D9FF',
        'cyan-dark': '#00B8CC',
      }
    },
  },
  plugins: [],
}
