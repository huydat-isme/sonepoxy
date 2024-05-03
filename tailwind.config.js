/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./style.css","./products.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

