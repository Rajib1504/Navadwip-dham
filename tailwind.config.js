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
        primaryLight:['UltraLight'],
       
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

