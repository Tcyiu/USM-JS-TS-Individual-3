/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        patina: {
          50: "#f4f9f7",
          100: "#dcebe6",
          200: "#b8d7cd",
          300: "#8dbbaf",
          400: "#679d90",
          500: "#4b8175",
          600: "#3a675e",
          700: "#32534d",
          800: "#2b443f",
          900: "#273a37",
          950: "#12211e",
        },
      },
    },
  },
  plugins: [],
};
