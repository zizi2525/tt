/** @type {import('tailwindcss').Config} */
const {tailwindcssPaletteGenerator} = require("@bobthered/tailwindcss-palette-generator");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const PRIMARY_COLOR = "#570df8";
const SECONDARY_COLOR = "#f002b8"; 
const BG_LIGHT_MODE = "#fcfcfc";
const BG_DARK_MODE = "#031022";
const TEXT_LIGHT_MODE = "#000000";
const TEXT_DARK_MODE = "#ffffff";
const ROUNDED_CORNER = "5px";
const HEADING_FONT = "DM Sans";
const BODY_FONT = "DM Sans";
const BTN_BORDER = "0";
const BTN_TEXT_CASE = "capitalize";
const Ta_color = "#ff0040";
const bgta_color = "#625c84";
const colors = tailwindcssPaletteGenerator({
  names: ["primary", "secondary", "tacolor", "bgta_color"],
  colors: [PRIMARY_COLOR, SECONDARY_COLOR, Ta_color, bgta_color],
});

//adding default colors
colors.primary.DEFAULT = PRIMARY_COLOR;
colors.secondary.DEFAULT= SECONDARY_COLOR;
colors.tacolor.DEFAULT= Ta_color;
colors.bgta_color.DEFAULT= bgta_color;
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      typography: (theme) => ({}),
      colors: colors
    },
  },
  variants: {
    typography: ['dark'],
    extend: {
        display: ["group-hover"],
    },
},


}