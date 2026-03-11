/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A9B5',
          dark: '#008a94',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          second: '#2D2D2D',
        },
        accent: {
          peach: '#FFD7C4',
          pink: '#FFC4E1',
          cyan: '#C4F5FF',
          lavender: '#E1C4FF',
          yellow: '#FFF5C4',
          orange: '#FFD7A0',
        },
        teal: '#0CBBC7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
