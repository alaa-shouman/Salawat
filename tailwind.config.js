/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green_primary: "#588157",
        green_secondary: "#3a5a40",
        green_dark: "#344e41",
        green_light: "#a3b18a",
        green_lightest: "#dad7cd",
      },
    },
  },
  plugins: [],
};

