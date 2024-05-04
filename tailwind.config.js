/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#545454",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
