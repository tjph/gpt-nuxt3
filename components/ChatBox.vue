<template>
	<div>
		<div class="sticky top-0 left-0 w-full bg-gray-200 p-6 grid grid-cols-[auto_100px] gap-3">
			<input v-model="chatInput" v-on:keyup.enter.prevent="sendMessage" type="text" minlength="3" placeholder="Ask something..." class="p-2 rounded resize-none outline-0" />
			<button @click="sendMessage" class="px-4 py-2 font-bold text-xs text-white bg-cyan-500 rounded-md transition duration-300 ease-in-out hover:bg-cyan-400">Send</button>
		</div>
		<div class="m-4 mt-8 grid grid-cols-1 gap-4">
			<template v-for="message in messages">
				<div :class="[message.from === 'user' ? 'justify-end' : 'justify-start']" class="flex">
					<div :class="[message.from === 'user' ? 'bg-gray-100' : 'bg-pink-200']" class="rounded-md p-3 max-w-[90%]">{{ message.data }}</div>
				</div>
    		</template>
		</div>
	</div>
</template>

<script setup lang="ts">
const chatInput = ref('');
const res = ref('');
const messages: any = ref([]);
const pricesList = ref('');
const chatInputMod = ref('');

// Make GPT interact with data from another API
async function getCryptoData() {
	const getCrypto = $fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history', {
		method: "GET",
		params: {"referenceCurrencyUuid": "yhjMzLPhuIDl", "timePeriod": "7d"},
		headers: {
			"X-RapidAPI-Key": "a617d6467dmshac84323ce581a72p11caa9jsn1adf8bbcbd47",
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
    const result: any = await response

	messages.value.push({
		from: 'gpt',
		data: result.text?.slice(0)
	})     
}

async function sendMessage() {
	const isCrypto = chatInput?.value?.includes("crypto");
	console.log(isCrypto);
	if (isCrypto) {
		getCryptoData().then(response => {
			askGPT();
			chatInputMod.value = '';
		});
	} else {
		askGPT();
	}
}
</script>