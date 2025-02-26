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
      fontSize: {
        heading1: ["10rem", { lineHeight: "110%" }],
        heading2: ["4rem", { lineHeight: "130%" }],
        heading3: ["3rem", { lineHeight: "130%" }],
        heading4: ["1.5rem", { lineHeight: "150%" }],
        textRegular: ["1.5rem", { lineHeight: "150%" }],
        textSmall: ["1rem", { lineHeight: "150%" }],
      },
      spacing: {
        space300: "30rem",
        space240: "24rem",
        space120: "12rem",
        space60: "6rem",
        space30: "3rem",
        space15: "1.5rem",
        spacelg: "0.75rem",
        spacemd: "0.5rem",
        spacesm: "0.25rem",
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

