/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js',"./src/**/*.{js,jsx,ts,tsx}",'./node_modules/xtendui/src/*.mjs',],
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer'), require('preline/plugin')],
};
