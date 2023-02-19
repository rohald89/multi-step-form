/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop-nav': 'url(./images/bg-sidebar-desktop.svg)',
        'mobile-nav': 'url(./images/bg-sidebar-mobile.svg)',
        check: 'url(./images/icon-checkmark.svg)',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        'wrapper-lg': '15px',
        'wrapper-md': '10px',
      },
      boxShadow: {
        main: '0 25px 40px -20px rgba(0, 0, 0, 0.095)',
      },
    },
  },
  plugins: [],
}
