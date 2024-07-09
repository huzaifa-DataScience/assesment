/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
      slideInLeft: {
        '0%': {
          transform: 'translateX(-100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      fadeUp: {
        '0%': {
          opacity: '0',
          transform: 'translateY(30px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      fadeIn: {
        '0%': {
          opacity: '0',
          
        },
        '100%': {
          opacity: '1',
          
        },
      },

    },
    animation: {
      slideInLeft: 'slideInLeft 1s ease-out',
      fadeUp: 'fadeUp 2s ease-out',
      fadeIn :'fadeIn 1s ease-in'
    },
    boxShadow: {
      'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
      'custom': '0 4px 8px rgba(0, 0, 0, 0.2)',
      'custom-heavy': '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  
  },
  },
  plugins: [],
}