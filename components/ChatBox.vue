<template>
	<div>
		<div class="sticky top-0 left-0 w-full bg-gray-200 p-6 grid grid-cols-[auto_100px] gap-3">
		
			<div class="w-full flex items-center">

				<button @click="startListening" class="text-white bg-cyan-500 rounded-md transition duration-300 ease-in-out hover:bg-cyan-400 font-bold py-2 px-4 h-10 mr-2 flex items-center">
					<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.05 122.88" class="w-4"><path d="M59.89,20.83V52.3c0,27-37.73,27-37.73,0V20.83c0-27.77,37.73-27.77,37.73,0Zm-14.18,76V118.2a4.69,4.69,0,0,1-9.37,0V96.78a40.71,40.71,0,0,1-12.45-3.51A41.63,41.63,0,0,1,12.05,85L12,84.91A41.31,41.31,0,0,1,3.12,71.68,40.73,40.73,0,0,1,0,56a4.67,4.67,0,0,1,8-3.31l.1.1A4.68,4.68,0,0,1,9.37,56a31.27,31.27,0,0,0,2.4,12.06A32,32,0,0,0,29,85.28a31.41,31.41,0,0,0,24.13,0,31.89,31.89,0,0,0,10.29-6.9l.08-.07a32,32,0,0,0,6.82-10.22A31.27,31.27,0,0,0,72.68,56a4.69,4.69,0,0,1,9.37,0,40.65,40.65,0,0,1-3.12,15.65A41.45,41.45,0,0,1,70,85l-.09.08a41.34,41.34,0,0,1-11.75,8.18,40.86,40.86,0,0,1-12.46,3.51Z"/></svg>
				</button>

				<button @click="stopListening" class="text-white bg-pink-500 rounded-md transition duration-300 ease-in-out hover:bg-pink-400 font-bold py-2 px-4 h-10 mr-4 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 419 512.5" class="w-4"><path fill-rule="nonzero" d="M302.29 90.86v137.26c0 5.01-.32 9.78-.89 14.36L143.48 54.63c29.13-83.38 158.81-71.32 158.81 36.23zM6.28 58.21c-9.51-11.31-8.05-28.19 3.26-37.7 11.31-9.51 28.19-8.05 37.7 3.26l90.46 107.6v-.45l138.05 164.22-.21.19 40.39 48.05.21-.2 26.35 31.34-.21.2 70.44 83.79c9.51 11.31 8.05 28.2-3.26 37.71-11.31 9.51-28.19 8.05-37.7-3.26l-73.73-87.71-3.25 1.55a177.508 177.508 0 0 1-54.36 15.29v69.98c0 5.63-2.3 10.75-5.99 14.44a20.394 20.394 0 0 1-14.44 5.99c-5.63 0-10.74-2.3-14.43-5.99a20.394 20.394 0 0 1-5.99-14.44v-69.98a176.994 176.994 0 0 1-54.33-15.31c-19.31-8.94-36.77-21.22-51.61-36.06l-.35-.38c-16.37-16.45-29.58-36.04-38.61-57.73a177.451 177.451 0 0 1-13.61-68.25c0-5.6 2.3-10.72 6-14.42 3.68-3.7 8.79-6 14.42-6 5.64 0 10.75 2.3 14.44 5.99l.41.45c3.46 3.65 5.58 8.59 5.58 13.98 0 18.62 3.74 36.4 10.49 52.62 7.03 16.89 17.33 32.13 30.09 44.89 12.78 12.76 28.02 23.08 44.88 30.09a136.933 136.933 0 0 0 52.62 10.49c17.89 0 35.01-3.45 50.71-9.71l-47.35-56.32c-42.23 1.66-85.65-27.78-85.65-88.3v-13.59L6.28 58.21zm341.19 239.07.12-.3c6.75-16.22 10.49-34 10.49-52.62 0-5.63 2.3-10.75 5.99-14.44 3.69-3.69 8.8-5.98 14.43-5.98 5.63 0 10.75 2.29 14.44 5.98l.41.45c3.45 3.66 5.58 8.59 5.58 13.99a177.694 177.694 0 0 1-22.75 87.08l-28.71-34.16z"/></svg>
				</button>

				<div class="flex items-center">
					<label for="flexSwitchCheckDefault">English</label>
					<input
						class="mr-2 ml-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
						v-model="isChecked"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckDefault" />
					<label for="flexSwitchCheckDefault">French</label>
				</div>

			</div>
			<p class="col-span-2">{{ transcript }}</p>
			<input v-model="chatInput" v-on:keyup.enter.prevent="sendMessage" type="text" minlength="3" placeholder="Ask something..." class="p-2 rounded resize-none outline-0" />
			<button @click="sendMessage" class="px-4 py-2 font-bold text-xs text-white bg-cyan-500 rounded-md transition duration-300 ease-in-out hover:bg-cyan-400">Send</button>
		</div>
		<div class="m-4 mt-8 flex flex-col-reverse flex-wrap gap-4">
			<template v-for="message in messages">
				<div :class="[message.from === 'user' ? 'justify-end' : 'justify-start']" class="w-full flex">
					<div :class="[message.from === 'user' ? 'bg-gray-100' : 'bg-pink-200']" class="rounded-md p-3 max-w-[90%]">{{ message.data }}</div>
				</div>
    		</template>
		</div>
	</div>
</template>

<script setup lang="ts">
const chatInput = ref('');
const res = ref('');
const isChecked = ref(true)
const lang = ref('fr-FR');
const messages: any = ref([]);
const pricesList = ref('');
const chatInputMod = ref('');
const config = useRuntimeConfig();
const transcript = ref('');
const recognition = ref(null);
const mychatInput = ref(chatInput)

watch(isChecked, (newValue) => {
	lang.value = isChecked.value ? 'fr-FR' : 'en-EN'
	console.log(lang.value);
})

// listen to trigger key words to send messages by voice
watchEffect(() => {
	const words = mychatInput.value.trim().split(' ')
	const lastWord = words.pop()
	const triggerWords = ['send', 'delete', 'envoyer', 'effacer']

	if (lastWord === 'envoyer' || lastWord === 'send') {

		if (triggerWords.includes(lastWord)) {
			chatInput.value = words.join(' ');
		}
		sendMessage();
	}

	if (lastWord === 'effacer' || lastWord === 'delete') {
		chatInput.value = '';
		transcript.value = '';
	}
});

// text to voice
function speak(text) {

	if (!('speechSynthesis' in window)) {
        alert('Web Speech API is not supported in this browser. Try using Google Chrome.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = lang.value;
    window.speechSynthesis.speak(utterance);
}

// voice to text
function startListening() {
	if (!('webkitSpeechRecognition' in window)) {
		alert('Web Speech API is not supported in this browser. Try using Google Chrome.');
		return;
	}

	recognition.value = new webkitSpeechRecognition();
	recognition.value.continuous = true;
	recognition.value.interimResults = false;
	recognition.value.lang = lang.value;

	recognition.value.onresult = (event) => {
		let interimTranscript = '';

		for (let i = event.resultIndex; i < event.results.length; i++) {
			const transcriptPiece = event.results[i][0].transcript;
			if (event.results[i].isFinal) {
				transcript.value += transcriptPiece;
			} else {
				interimTranscript += transcriptPiece;
			}
		}

		transcript.value = transcript.value + '\n' + interimTranscript;
		chatInput.value = transcript.value;
	};

	recognition.value.onerror = (event) => {
		console.error('Error occurred in recognition: ' + event.error);
	};

	recognition.value.start();
};

const stopListening = () => {
	if (recognition.value) {
		recognition.value.stop();
		recognition.value = null;
	}
};


// Make GPT interact with data from another API
async function getCryptoData() {
	const getCrypto = $fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history', {
		method: "GET",
		params: {"referenceCurrencyUuid": "yhjMzLPhuIDl", "timePeriod": "7d"},
		headers: {
			"X-RapidAPI-Key": config.public.XRAPID_KEY,
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	})

	const cryptoData = await getCrypto;
	let prices: any[] = [];

	for (let history of cryptoData.data.history){
  		prices.push(history.price);
	}

	pricesList.value = prices.join(',');
	chatInputMod.value = `Hello ChatGPT! Could you provide a brief analysis based on the recent Bitcoin prices over the last seven days? I'll share the price data with you, and I'd love to hear your insights on what this could mean for the cryptocurrency market. Thanks in advance for your help! price list: ${pricesList.value}`
}

// Send question to GPT
async function askGPT() {

	const question = chatInputMod.value !== '' ? chatInputMod.value : chatInput.value;
	const messageLength = parseInt(question.length as any);

	if (messageLength < 2) {
		return false;
	}

	messages.value.push({
		from: 'user',
		data: chatInput.value
	})

	const message = question;
	const response = $fetch('/api/chat', {
        method: 'post',
        body: { 
			message: question 
		}
    })
    const result: any = await response;

	speak(result.text)

	messages.value.push({
		from: 'gpt',
		data: result.text?.slice(0)
	})     
}

async function sendMessage() {
	stopListening();
	const isCrypto = chatInput?.value?.includes("crypto");

	if (isCrypto) {
		getCryptoData().then(response => {
			askGPT();
			chatInputMod.value = '';
		});
	} else {
		askGPT();
		chatInput.value = '';
		transcript.value = '';
	}
}
</script>