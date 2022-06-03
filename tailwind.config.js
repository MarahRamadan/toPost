module.exports = {
  content: [
    './*.html',
    './resources/views/layouts/app.blade.php',
    // "./resources/**/*.blade.php",
    // "./resources/**/*.js",
    // "./resources/**/*.vue",
    "./resources/css/app.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  purge: [
    './resources/views/**/*.blade.php',
  ]
}
