/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'primary': '#5F6FFF',
=======
        'primary': '#5f6FFF',
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
>>>>>>> 8e093b1d3d8c1ecceb38b9d9aa15f5cae94958bc
      }
    },
  },
  plugins: [],
}