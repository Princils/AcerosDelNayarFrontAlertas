 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./src/**/*.{html,js}",
  './node_modules/preline/preline.js',
  'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'mycolorprimary': '#08207c',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}
