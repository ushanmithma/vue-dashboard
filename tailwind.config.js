const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				0.1: '0.1',
			},
		},
	},
	plugins: [],
}
