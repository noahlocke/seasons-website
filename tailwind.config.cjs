/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			'seasons-blue-600': 'rgb(34,177,217)',
			'seasons-blue-700': 'rgb(30,159,195)',
			'warm-gray': colors.warmGray,
			'teal': colors.teal
		  },
		  fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		  }
		},
	  },
	plugins: [
	  require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
	],
}
