
import { Configuration, OpenAIApi } from 'openai'
const config = useRuntimeConfig();
const configuration = new Configuration({
	apiKey: config.OPENAI_KEY,
});

export default defineEventHandler(async (event) => {

	const { message } = await readBody(event)
	const openai = new OpenAIApi(configuration)

	let prompt = `${message}`;
	let chat_reply = '';

	try {

		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: prompt,
			temperature: 0.5,
			max_tokens: 150,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0
		})

		chat_reply = response.data.choices[0].text

	} catch (error) {

		console.log(error);

	}

	return { text: chat_reply }

});