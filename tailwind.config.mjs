/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas':             ['"Bebas Neue"', 'sans-serif'],
        'barlow':            ['Barlow', 'sans-serif'],
        'barlow-condensed':  ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        'dark': {
          DEFAULT:  '#0a0a0a',
          surface:  '#111111',
          elevated: '#1a1a1a',
        },
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      animation: {
        fadeUp:  'fadeUp 0.6s ease both',
        ticker:  'ticker 25s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
