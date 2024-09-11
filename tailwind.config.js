
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
      
        'grayBg': '#F7F7F7',
        'csBlack': '#282828',
        'csBlue': '#0147FF',
        'cs': '#1D1D1B',
      
      },
    },
  },
  plugins: [],
};
