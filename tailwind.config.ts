import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /** Page base — warm ivory (spiritual / welcoming) */
        background: '#fff9f0',
        'palm-cream': '#fff3e0',
        /** Deep forest — headings & body on light sections */
        'brand-forest': '#14532d',
        'brand-forest-dark': '#0f2919',
        'brand-forest-muted': '#2d5a45',
        /** Hero band — dark green + white text */
        'brand-hero': '#0f2919',
        'brand-hero-mid': '#0a1f14',
        'brand-hero-dark': '#07150f',
        /** Warm surfaces */
        'brand-cream': '#fff9f0',
        'brand-peach': '#ffedd5',
        'brand-apricot': '#fde68a',
        /** Gold / saffron accents (CTA, highlights, logo harmony) */
        'accent-amber': '#d97706',
        'accent-gold': '#b45309',
        'accent-gold-bright': '#f59e0b',
        'accent-brown': '#422006',
        'text-primary': '#0f2419',
        'text-muted': '#4a6658',
        'text-on-hero': '#fefcf8',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(165deg, #0f2919 0%, #0a1f14 45%, #07150f 100%)',
        'warm-gradient':
          'linear-gradient(180deg, #fff9f0 0%, #fff3e0 50%, #ffedd5 100%)',
        'cta-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 45%, #b45309 100%)',
      },
      boxShadow: {
        hero: '0 25px 50px -12px rgba(15, 41, 25, 0.45)',
        card: '0 4px 24px rgba(15, 41, 25, 0.08)',
        'cta-glow': '0 8px 24px rgba(217, 119, 6, 0.35)',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
