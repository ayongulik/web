/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Spline Sans", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
