/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [preline],
}
