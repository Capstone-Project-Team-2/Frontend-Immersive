/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        bgOne: '#0049CC',
        bgTwo: '#152955',
        bgThird: '#002B77',
        textCol: '#0D3966',
      },
    },
  },
  plugins: [],
};
