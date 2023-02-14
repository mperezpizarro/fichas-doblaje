/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue"
  ],
  theme: {
    extend: {
      screens: {
        "mmd": "870px"
      }
    },
  },
  plugins: [],
}
