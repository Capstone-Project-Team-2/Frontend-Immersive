/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        Titan: ['TitanOne'],
      },
      colors: {
        bgOne: '#313338',
        bgTwo: '#1A1D1F',
        bgThird: '#1A1D1F',
        bgMain: '#27292D',
        bgBtn: '#252EFF',
        bgHov: '#152955',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
