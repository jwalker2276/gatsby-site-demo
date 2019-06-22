import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Fira Sans Condensed", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  googleFonts: [
    {
      name: "Fira Sans Condensed",
      styles: ["300", "400", "600", "700", "900"],
    },
    {
      name: "Open Sans",
      styles: ["400"],
    },
  ],
  includeNormalize: false,
});

export default typography;
