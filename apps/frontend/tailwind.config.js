/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
        tifinagh: ['\"Noto Sans Tifinagh\"', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#4f46e5',
        background: '#f9fafb',
        surface: '#ffffff',
        muted: '#f3f4f6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
      },
    },
  },
}
