// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		OPENAI_KEY: process.env.OPENAI_KEY,
		public: {}
	}
})
