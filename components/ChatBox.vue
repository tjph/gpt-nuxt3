<template>
	<div>
		<div class="sticky top-0 left-0 w-full bg-gray-200 p-6 grid grid-cols-[auto_100px] gap-3">
			<input v-model="chatInput" v-on:keyup.enter.prevent="askGPT" type="text" minlength="3" placeholder="Ask something..." class="p-2 rounded resize-none outline-0" />
			<button @click="askGPT" class="px-4 py-2 font-bold text-xs text-white bg-cyan-500 rounded-md transition duration-300 ease-in-out hover:bg-cyan-400">Send</button>
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


async function askGPT() {

	const messageLength = parseInt(chatInput?.value?.length as any);
	
	if (messageLength < 2) {
		return false;
	}

	messages.value.push({
		from: 'user',
		data: chatInput.value
	})

	const message = chatInput.value;
	const response = $fetch('/api/chat', {
        method: 'post',
        body: { 
			message 
		}
    })
    const result: any = await response

	messages.value.push({
		from: 'gpt',
		data: result.text?.slice(0)
	})     
}
</script>