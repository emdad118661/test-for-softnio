/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      screens: {
        'xxl': '1920px', // Custom breakpoint for 1920px screens
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
