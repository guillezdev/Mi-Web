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
        'primary': '#75C2F6',
        'secundary': '#cbd5e1',
      },
    },
  },
  plugins: [],
}

