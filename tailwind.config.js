
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          light: '#243F7A',
          dark: '#142d54',
          50: '#EEF2F9',
          100: '#D5DFF0',
          200: '#ABBFE1',
          300: '#7A9ACE',
          400: '#4E77BC',
          500: '#2D5AA8',
          600: '#243F7A',
          700: '#1B3A6B',
          800: '#142d54',
          900: '#0d1f3c',
        },
        brand: {
          navy: '#1B3A6B',
          'navy-light': '#243F7A',
          green: '#2D7A3A',
          'green-light': '#3A9447',
          'green-pale': '#e8f5ea',
          bg: '#F0F4F8',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d2347 0%, #1B3A6B 40%, #1e4d7a 70%, #1a5c6e 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(27, 58, 107, 0.08)',
        'card-hover': '0 20px 40px rgba(27, 58, 107, 0.15)',
        'nav': '0 2px 20px rgba(27, 58, 107, 0.08)',
      }
    },
  },
  plugins: [],
}
