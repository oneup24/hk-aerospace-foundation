/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0F1F',
        ink: '#FFFFFF',
        body: '#BBBBBB',
        'body-strong': '#E6E6E6',
        muted: '#7E7E7E',
        hairline: '#2A3050',
        'hairline-strong': '#3C4870',
        surface: '#141A30',
        'surface-elevated': '#1F2747',
        'surface-soft': '#0D1224',
        navy: {
          DEFAULT: '#0A1F44',
          light: '#16306A',
          dark: '#050E22',
        },
        gold: {
          DEFAULT: '#D4A24C',
          light: '#E6BB6E',
          dark: '#A87E2D',
        },
        red: '#E22718',
        warning: '#F4B400',
        success: '#0FA336',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sm: '2px',
        md: '4px',
        lg: '6px',
        full: '9999px',
      },
      letterSpacing: {
        wider2: '0.15em',
        wider3: '0.2em',
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
        'display-sm': ['2rem', { lineHeight: '1.15' }],
        'label-upper': ['0.75rem', { lineHeight: '1.3', letterSpacing: '1.5px' }],
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
