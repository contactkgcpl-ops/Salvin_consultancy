/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Salvin.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        navy2: '#0f2044',
        blue: '#1a3a8f',
        blue2: '#2255cc',
        accent: '#0ea5e9',
        accent2: '#38bdf8',
        cyan: '#06b6d4',
        light: '#f8fafc',
        gray2: '#64748b',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      zIndex: {
        999: '999',
        998: '998',
      },
    },
  },
  plugins: [],
}
