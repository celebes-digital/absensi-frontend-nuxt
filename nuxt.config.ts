import Material from '@primevue/themes/material';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	// ? Tailwind
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	// * Prime Vue
	modules: [
		'@primevue/nuxt-module'
	],
	primevue: {
        options: {
            theme: {
                preset: Material
            }
        }
    }
})
