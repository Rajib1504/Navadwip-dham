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
      textStyles: {
        headin1: "text-[10rem] leading-[110%]",
        headin2: "text-[4rem] leading-[130%]",
        heading3: "text-[3rem] leading-[130%]",
        LuHeading4: "text-[1.5rem] leading-[150%]",
        TextRegular: "text-[1.5rem] leading-[150%]",
        TextSmall: "text-[1rem] leading-[150%]",
      },
      padding: {
        space300: "p-[30rem]",
        space120: "p-[12rem]",
        space60: "p-[6rem]",
        space30: "p-[3rem]",
        space15: "p-[1.5rem]",
        spacelg: "p-[0.75rem]",
        spacemd: "p-[0.5rem]",
        spacesm: "p-[0.25rem]",
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

