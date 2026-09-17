/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF5',
        foreground: '#1E293B',
        muted: '#F1F5F9',
        mutedForeground: '#64748B',
        accent: '#8B5CF6',
        accentForeground: '#FFFFFF',
        secondary: '#F472B6',
        tertiary: '#FBBF24',
        quaternary: '#34D399',
        border: '#E2E8F0',
        input: '#FFFFFF',
        card: '#FFFFFF',
        ring: '#8B5CF6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #1E293B',
        'hard-hover': '6px 6px 0px 0px #1E293B',
        'hard-active': '2px 2px 0px 0px #1E293B',
        'soft-hard': '8px 8px 0px 0px #E2E8F0',
        'soft-hard-pink': '8px 8px 0px 0px #F472B6',
      },
      borderRadius: {
        'blob-1': '2rem 2rem 2rem 0',
        'blob-2': '9999px 9999px 0 0',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
