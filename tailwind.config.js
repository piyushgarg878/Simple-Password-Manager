/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { spacing: {
      '34': '8.5rem',
    }
  }},
  plugins: [],
}