/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#292b27',
        paper: '#f7f5f0',
        moss: '#68745b',
      },
    },
  },
  plugins: [],
}
