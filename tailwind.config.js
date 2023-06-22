/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Lato ", "sans-serif"],
        lato: ["Roboto", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
