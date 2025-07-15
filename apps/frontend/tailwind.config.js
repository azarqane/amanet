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
      },
      colors: {
        primary: '#818cf8',
        'primary-dark': '#6366f1',
        background: '#f9fafb',
        surface: '#ffffff',
        muted: '#f3f4f6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
}
