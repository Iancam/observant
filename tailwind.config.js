/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier', 'monospace'],
      },
      colors: {
        // Pinkish-brown theme (default)
        'primary': {
          100: '#e6c3c0',
          200: '#dbbaba',
          300: '#caacaf',
          400: '#a28892',
          500: '#7e6572',
          600: '#674e59',
          700: '#573f4b',
          800: '#452d37',
          900: '#391e2b',
        },
        // Orange theme with blue highlights (alternative)
        'orange-theme': {
          100: '#FFE8D6', // Light orange/peach
          200: '#FFDAB9', // Peach puff
          300: '#FFC49F', // Light salmon
          400: '#F4A261', // Sandy brown
          500: '#E76F51', // Burnt sienna
          600: '#D35400', // Pumpkin
          700: '#BA4A00', // Darker orange
          800: '#A04000', // Brown
          900: '#873600', // Dark brown
        },
        'blue-accent': {
          100: '#D6EAF8', // Light blue
          200: '#AED6F1', // Pale blue
          300: '#85C1E9', // Sky blue
          400: '#5DADE2', // Medium blue
          500: '#3498DB', // Primary blue
          600: '#2874A6', // Ocean blue
          700: '#1B4F72', // Dark blue
          800: '#154360', // Navy blue
          900: '#0E2F44', // Deep navy
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
