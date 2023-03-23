/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: '#FC6DC1',
        secondary: '#010024',
        tertiary: '#FE9DE2',
        grayStroke: '#E3E2E9',
        about: '#F9E8EC',
        discount: '#FE9DE2',
        line: '#98A2B3',
        loginbg: "#F5F7F9",
        logintext: "#4D4C70",
        loginptext : "#808099"
      },
      fontFamily: {
        dodoo: ['Sacramento']
      }
    },
  },
  plugins: [],
}