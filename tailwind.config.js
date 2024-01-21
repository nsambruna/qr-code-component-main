/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
  theme: {
    extend: {
			colors: {
				lightGray: "#d3dfed",
grayishBlue: "#2b7dfa",
grey: "#8c91a4",
darkBlue: "#121e36"
			},
			fontFamily: {
				sans: ['Outfit', 'sans-serif'],
			},
    },
  },
  plugins: [],
}

