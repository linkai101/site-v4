/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Anybody", "sans-serif"],
        // fancy: ["", "cursive"],
      },
      colors: {
        theme: {
          primary: "#81A4CD",
          primaryVariant: "#DBE4EE",
          secondary: "#DEB841",
          secondaryVariant: "#EFCB68",
          background: "#F5FEFD",
          surface: "#F5FEFD", //#FBFCF8
          // error: "",
          onPrimary: "#F5FEFD",
          onSecondary: "#F5FEFD",
          onBackground: "#292F36",
          onSurface: "#292F36",
          // onError: ""
        }
      }
    },
  },
  plugins: [],
}
