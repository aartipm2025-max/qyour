import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black/dark scale — primary brand
        sand: {
          400: '#767676',
          500: '#404040',
          600: '#111111',
          700: '#000000',
          800: '#000000',
        },
        // White + near-white for section separation
        cream: {
          50:  '#FFFFFF',
          100: '#F7F7F7',
          200: '#EBEBEB',
        },
        // Taupe accents
        taupe: {
          400: '#C0AE9E',
          500: '#A89888',
          600: '#907870',
        },
        // Text scale
        brown: {
          400: '#6b6b6b',
          600: '#3d3d3d',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#000000',
        },
        // Sage — success / positive health
        sage: {
          100: '#D8EDD6',
          600: '#4A7C3F',
        },
        // Terracotta — warning
        terracotta: {
          100: '#F5E4DA',
          500: '#C4714A',
        },
        // Coral — error (soft)
        coral: {
          100: '#FDE6E0',
          600: '#C85A40',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        inter:    ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['3.5rem',  { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.5rem',  { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2':      ['2.5rem',  { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2-sm':   ['2rem',    { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3':      ['2rem',    { lineHeight: '1.4' }],
        'h3-sm':   ['1.75rem', { lineHeight: '1.4' }],
        'h4':      ['1.5rem',  { lineHeight: '1.5' }],
        'h4-sm':   ['1.25rem', { lineHeight: '1.5' }],
        'lg-body': ['1.125rem',{ lineHeight: '1.8' }],
        'body':    ['1rem',    { lineHeight: '1.7' }],
        'sm-body': ['0.875rem',{ lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.5rem',
        'xl4': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'card':       '0 4px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
        'btn-sand':   '0 2px 8px rgba(0,0,0,0.15)',
        'modal':      '0 24px 48px rgba(0,0,0,0.2)',
        'soft':       '0 2px 8px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
        'gradient-sand': 'linear-gradient(90deg, #404040, #111111)',
        'gradient-sage': 'linear-gradient(90deg, #D8EDD6, #FFFFFF)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease forwards',
        'shimmer': 'shimmer 1.5s infinite',
        'spin':    'spin 1s linear infinite',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
