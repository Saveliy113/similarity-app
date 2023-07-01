import { fontFamily } from 'tailwindcss/defaultTheme';
import { colors } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  container: {
    center: true,
    padding: '1.5rem',
    screens: {
      '2xl': '1360px  ',
    },
  },
  extend: {
    // fontFamily: {
    //   sans: ['var(--font-inter', ...fontFamily.sans],
    // },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      ...colors,
      'light-gold': '#f5bc51',
      'dark-gold': '#533519',
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
