import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sicredi: {
          green: '#3FA110',
          dark: '#146E37',
          soft: '#D7E6C8',
          surface: '#F5F5F5',
          text: '#323C32',
          muted: '#5A645A',
          yellow: '#FFCD00',
        },
      },
      fontFamily: {
        heading: ['"Exo 2"', 'Arial', 'sans-serif'],
        body: ['Nunito', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        sicredi: '0 14px 14px 14px',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(20, 110, 55, 0.14)',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
