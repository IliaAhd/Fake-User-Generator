/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#7289da",
        "gary-stone": "#424549",
        "light-gray": "#36393e",
        "dark-gray": "#282b30",
        "dark-black": "#1e2124",
      },
    },
  },
  plugins: [],
};
