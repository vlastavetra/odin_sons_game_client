import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    listStyleType: {
      'square': 'square'
    },
    colors: {
      'd-black': '#191C22',
      'd-white': '#DADCE0',
      'd-gray': '#D9D9D9',
      'd-dark-gray': '#2A3139',
      'd-light-green': '#4AD395',
      'd-blue': '#3EAAEB',
      },
    extend: {
      fontFamily: {
        galaktika: ['Galaktika', 'sans-serif'],
        gilroy: ['RTG', 'sans-serif'],
      },
      padding: {
        '8': '30px',
      },
      fontSize: {
      '3xl': '32px',
      },
      borderRadius: {
      'lg': '10px',
      },
      transitionTimingFunction: {},
      gridTemplateColumns: {},
      boxShadow: {},
      backgroundImage: {},
      animation: {},
      keyframes: {}
    },
  },
  plugins: [],
};
export default config;
