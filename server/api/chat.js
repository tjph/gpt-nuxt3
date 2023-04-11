
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

		// Use gpt-3.5-turbo model
		// const response = await openai.createChatCompletion({
		// 	model: "gpt-3.5-turbo",
		// 	messages: [
		// 		{
		// 			role: "user",
		// 			content: prompt
		// 		}
		// 	],
		// 	temperature: 0.5,
		// 	max_tokens: 2000
		// })
		
		// Use text-davinci-003 model
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

		// chat_reply = response.data.choices[0].message.content

	} catch (error) {

		console.log(error);

	}

	return { text: chat_reply }

});