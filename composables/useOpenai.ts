import { Configuration, OpenAIApi } from "openai";

export const useOpenAi = () => {
	const config = useRuntimeConfig();
	const configuration = new Configuration({
		apiKey: config.OPENAI_KEY,
	});

	const openai = new OpenAIApi(configuration);

	return {
		openai
	}
}