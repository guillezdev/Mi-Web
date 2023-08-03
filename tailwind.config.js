/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo': '#121821',
        'fondoclaro': '#222831',
        'primary': '#28DF99',
        'secundary': '#DFF6FF',
      },
      fontFamily: {
        'primary': ['Roboto+Mono'],
      },
    },
  },
  plugins: [],
}

