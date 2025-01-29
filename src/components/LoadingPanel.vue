<script setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	isVisible: {
		type: Boolean,
		default: () => false,
	},
	class: {
		type: String,
		default: () => '',
	},
})
</script>

<template>
	<div v-if="isVisible" :class="twMerge('absolute inset-0 w-full h-full flex justify-center items-center bg-[rgba(255,255,255,0.95)]', props.class)">
		<div class="loader-line"></div>
	</div>
</template>
