import Material from '@primevue/themes/material';

// ? https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	alias: {
		"assets": "/<rootDir>/assets",
	},
	app: {
		rootId: 'arryyxia',	
	},
	image: {
		dir: 'assets/img',
	},

	// ? Tailwind
	css: [
		'~/assets/css/main.css',
		'primeicons/primeicons.css'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// * Prime Vue
	modules: ['@primevue/nuxt-module', '@nuxt/image'],
	primevue: {
		importTheme: { from: '@/themes/mytheme.js' },
		options: {
			theme: {
			preset: Material,
			options: {
					prefix: 'p',
					darkModeSelector: 'system',
					cssLayer: {
					name: 'primevue',
					order: 'tailwind-base, primevue, tailwind-utilities, custom-class'
					}
				}
			}
		}
    }
})