module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'fade-in-down': 'fadeInDown 0.8s ease-out both',
        'fade-in-left': 'fadeInLeft 0.8s ease-out both',
        'fade-in-right': 'fadeInRight 0.8s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      colors: {
        t: {
          primary: 'var(--c-primary)',
          'primary-light': 'var(--c-primary-light)',
          secondary: 'var(--c-secondary)',
          accent: 'var(--c-accent)',
          base: 'var(--c-bg-base)',
          alt: 'var(--c-bg-alt)',
          card: 'var(--c-bg-card)',
          nav: 'var(--c-bg-nav)',
          'nav-scroll': 'var(--c-bg-nav-scroll)',
          text: 'var(--c-text)',
          'text-secondary': 'var(--c-text-secondary)',
          'text-muted': 'var(--c-text-muted)',
          border: 'var(--c-border)',
          'border-accent': 'var(--c-border-accent)',
          ring: 'var(--c-ring)',
          'stat-1-from': 'var(--c-stat-1-from)',
          'stat-1-to': 'var(--c-stat-1-to)',
          'stat-2-from': 'var(--c-stat-2-from)',
          'stat-2-to': 'var(--c-stat-2-to)',
          'stat-3-from': 'var(--c-stat-3-from)',
          'stat-3-to': 'var(--c-stat-3-to)',
          'stat-4-from': 'var(--c-stat-4-from)',
          'stat-4-to': 'var(--c-stat-4-to)',
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
