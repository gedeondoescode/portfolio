/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    colors: {
      transparent: "transparent",
      primary: "#262626",
      secondary: "#4731bd",
      accent: "#8c8c8c",
    },
    container: {
      center: true,
    },
    fontFamily: {
      heading: ["Unbounded Variable", ...defaultTheme.fontFamily.sans],
      sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
