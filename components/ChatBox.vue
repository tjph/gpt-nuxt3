<template>
	<div>
		<template v-for="message in messages">
			{{ message }}
    	</template>
		<div class="input">
			<input v-model="chatInput" v-on:keyup.enter="askGPT" type="text" placeholder="say something...">
			<button @click="askGPT">Send</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const chatInput = ref('');
const res = ref('');
const messages: any = ref([]);


async function askGPT() {

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

<style scoped>
	.input {
		position: fixed;
		bottom: 0
	}
</style>