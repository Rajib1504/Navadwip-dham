/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primayRegular:['Regular'],
        primaryItalic:['Italic'],
        primaryBoldItalic:['UltraBoldItalic'],
        primaryLightItalic:['UltraLightItalic'],
        primaryBold:['UltraBold'],
        primaryLight:['UltraLight']
      },
      colors: {
        primaryBlack: "#1C1B1B", // black
        secondaryBlack: "#1C1B1B", // black 50%
        accentBlack: "#1C1B1B", // black 20%
        neutralBlack: "#1C1B1B", // black 10%
        success: "#E9E4DD", // send
        primaryWhite: "#E9E4DD", // white 50%
        secondaryWhite: "#E9E4DD", // white 20 %
        accentWhite:"#E9E4DD",//white 10%
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

