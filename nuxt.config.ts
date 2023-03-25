// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		OPENAI_KEY: process.env.OPENAI_KEY, // add to .env file
		public: {
			XRAPID_KEY: process.env.XRAPID_KEY // add to .env file
		}
	},
	modules: [
		'@nuxtjs/tailwindcss'
	]
})
