/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef6',
          200: '#d7dbea',
          300: '#b3bccf',
          400: '#7d8aa3',
          500: '#4e5a75',
          600: '#3b445d',
          700: '#2b3347',
          800: '#1f2433',
          900: '#141824'
        },
        accent: {
          50: '#f2f8ff',
          100: '#dfeeff',
          200: '#b7d7ff',
          300: '#7fb6ff',
          400: '#4b93ff',
          500: '#2e77ff',
          600: '#1957db',
          700: '#1546b1',
          800: '#133a8a',
          900: '#0f2a63'
        },
        sand: {
          50: '#fdfbf7',
          100: '#f7f1e8',
          200: '#efe4d1',
          300: '#e0ccaa',
          400: '#c8ab77',
          500: '#b08b4b',
          600: '#8e6d35',
          700: '#6f532a',
          800: '#4f3c20',
          900: '#352916'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
        card: '0 12px 30px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif']
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out both'
      }
    }
  },
  plugins: []
}
