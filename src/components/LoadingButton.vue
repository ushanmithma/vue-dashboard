<script setup>
import { twMerge } from 'tailwind-merge'
import { ref } from 'vue'

const props = defineProps({
	isLoading: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	class: {
		type: String,
		default: () => '',
	},
})

const defaultClasses = 'relative'

const classes = ref(twMerge(defaultClasses, props.class))
</script>

<template>
	<button :class="classes" :disabled="disabled">
		<svg
			v-show="isLoading"
			class="text-current w-[1.25rem] h-[1.25rem] absolute left-[50%] top-[50%] -ms-[0.625rem] -mt-[0.625rem] animate-spin"
			fill="none"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" stroke="currentColor" style="opacity: 0.25" stroke-width="4"></circle>
			<path
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				fill="currentColor"
				style="opacity: 0.75"
			></path>
		</svg>
		<span :class="{ invisible: isLoading }">
			<slot />
		</span>
	</button>
</template>
