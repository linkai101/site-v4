/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // bool or 'media' (system setting) or 'class' (toggle manually)
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
        sans: ["Epilogue", "sans-serif"],
        display: ["Anybody", "sans-serif"],
        // fancy: ["", "cursive"],
      },
      colors: {
        theme: {
          primary: "#373e98", //81a4cd
          primaryVariant: "#7377b6", //dbe4ee
          secondary: "#fee36e",
          secondaryVariant: "#ceb92c",
          background: "#f2f6ff",
          surface: "#e7e8ec",
          // error: "",
          onPrimary: "#f2f6ff",
          // onSecondary: "#",
          onBackground: "#2a2a2a",
          onSurface: "#2a2a2a",
          // onError: ""
        },
        notion: {
          default: "#7377b6",
          gray: "#808080",
          brown: "#9e7a4c",
          orange: "#d9822b",
          yellow: "#e1ad01",
          green: "#3eb370",
          blue: "#3b88c3",
          purple: "#a36ac7",
          pink: "#e671b8",
          red: "#e74c3c",
        },
      },
      cursor: {
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
  safelist: [
    { pattern: /(bg|text|border|decoration|ring-offset|ring|outline|divide|from|to|via|caret|accent|shadow)-notion-(default|gray|brown|orange|yellow|green|blue|purple|pink|red)/ }
  ],
}
