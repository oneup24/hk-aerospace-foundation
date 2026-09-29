/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        ink: '#0A1F44',
        body: '#4B5563',
        'body-strong': '#1F2937',
        muted: '#9CA3AF',
        hairline: '#E5E7EB',
        'hairline-strong': '#D1D5DB',
        surface: '#F9FAFB',
        'surface-elevated': '#F3F4F6',
        'surface-soft': '#FAFAFA',
        navy: {
          DEFAULT: '#0A1F44',
          light: '#16306A',
          dark: '#050E22',
        },
        gold: {
          DEFAULT: '#B8893E',
          light: '#D4A24C',
          dark: '#8E6826',
        },
        red: '#C81F11',
        warning: '#C68A00',
        success: '#0A8C2E',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1080px',
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
        soft: '0 1px 2px 0 rgba(10, 31, 68, 0.04)',
        elev: '0 4px 12px -2px rgba(10, 31, 68, 0.08)',
      },
    },
  },
  plugins: [],
};