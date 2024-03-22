/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'show-content-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
            height: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
            height: 'auto'
          },
        },
      },
      animation: {
        'show-content-down': 'show-content-down 0.2s ease-in-out',
      }
    },
  },
  plugins: [],
}

