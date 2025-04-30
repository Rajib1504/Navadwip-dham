/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryLight: ["UltraLight"],
      },
      colors: {
        primaryBlack: "rgb(28,27,27)", // black "rgba(34, 197, 94, 0.8)"
        secondaryBlack: "rgba(28,27,27,0.5)", // black 50%
        accentBlack: "rgba(28,27,27,0.2)", // black 20%
        success: "rgb(233,228,221)", // send
        neutralBlack: "rgba(28,27,27,0.1)", // black 10%
        primaryWhite: "rgba(233,228,221,0.5)", // white 50%
        secondaryWhite: "rgba(233,228,221,0.2)", // white 20 %
        accentWhite: "rgba(233,228,221,0.1)", //white 10%
      },
      fontSize: {
        mobileHero:["5rem",{lineHeight:'110%'}],
        heading1: ["10rem", { lineHeight: "110%" }],
        mobileheading1: ["3rem", { lineHeight: "110%" }],
        heading2: ["4rem", { lineHeight: "130%" }],
        mobileheading2:["2.25rem", { lineHeight: "130%" }],
        heading3: ["3rem", { lineHeight: "130%" }],
        heading4: ["1.5rem", { lineHeight: "150%" }],
        textRegular: ["1.5rem", { lineHeight: "150%" }],
        mobileTextRegular: ["1.25rem", { lineHeight: "150%" }],
        textSmall: ["1rem", { lineHeight: "150%" }],
        mobiletextSmall: ["0.875rem", { lineHeight: "150%" }],
      },
      spacing: {
        space300: "30rem",
        space240: "24rem",
        space312: '312px',
        space120: "12rem",
        space60: "6rem",
        space30: "3rem",
        space15: "1.5rem",
        spacelg: "0.75rem",
        spacemd: "0.5rem",
        spacesm: "0.25rem",
        mobilespace40:" 40px",
        mobilespace47:" 47px",
        mobilespace50:" 50px",
        mobilespace60:" 60px",
        mobilespace130:" 130px",
        mobilespace192:" 192px",
        mobilespace274:" 274px",
        mobilespace285:" 17.8125rem",
        mobilespace314:"19.625rem",
        mobilespace194:"12.125rem",
      },
      screens: {
        smMobile:'320px', //sm Mobile(custom)
        lgMobile: "381px", // Large Mobile (Custom)
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
