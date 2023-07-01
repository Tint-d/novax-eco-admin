/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#2B2730",
        "text-color": "#6b7280",
        "title-color": "#0f172a",
        "bg-card": "white",
        "nav-color": "white",
      },
      fontSize: {
        title: "25px",
      },
    },
    fontFamily: {
      custom: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
