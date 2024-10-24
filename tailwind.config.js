/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      
      colors: {
        'background-black': 'var(--background-black)',
        'dark-grey': 'var(--dark-grey)',
        'dormant-grey': 'var(--dormant-grey)',
        'active-grey': 'var(--active-grey)',
        'white': 'var(--white)',
        'key-red': 'var(--key-red)',
        'key-red-compliment': 'var(--key-red-compliment)',
        'darker-red': 'var(--darker-red)',
        'darkest-red': 'var(--darkest-red)',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, key-red, key-red-compliment)', 
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(to right, var(--key-red), var(--key-red-compliment))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
    
  ],
}
