/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        Titan: ['TitanOne']
      },
      colors: {
        bgOne: '#27292D', //item
        bgTwo: '#1A1D1F', //item
        bgThird: '#1A1D1F',
        bgMain: '#040404', //item
        bgBtn: '#079665',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
