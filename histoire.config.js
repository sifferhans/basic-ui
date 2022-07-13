import { defineConfig } from "histoire";

export default defineConfig({
	theme: {
		title: 'Basic UI',
		logo: {
			square: '/favicon.svg',
			dark: '/Logo_light.svg',
			light: '/Logo_dark.svg',
		},
		logoHref: '/',
		favicon: '/favicon.svg',
		colors: {
			primary: {
				50: '#f9f9f9',
				100: '#d9d9d9',
				200: '#bcbcbc',
				300: '#9e9e9e',
				400: '#828282',
				500: '#000000',
				600: '#4d4d4d',
				700: '#343434',
				800: '#1d1d1d',
				900: '#000000'
			}
		}
	},
	setupFile: '/src/histoire.setup.js'
})