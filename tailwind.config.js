/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Path to your HTML file
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [] // This is for Tailwind-specific plugins, not PostCSS plugins
};