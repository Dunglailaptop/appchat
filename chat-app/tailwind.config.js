/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    flowbite.content(),
  ],
  theme: {
    extend: {
      minWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
