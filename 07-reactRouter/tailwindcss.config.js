/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
