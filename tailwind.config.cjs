/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'sizebg': '#F9F5FF',
        'purple': {
          5: '#F4EBFF',
          10: '#D6BBFB',
          450: '#7F56D9',
          950: '#53389E'
        },
        'slate': {
          550:'#667085'
        }
      }
    },
  },
  plugins: [],
}
