<script setup>
import { computed, defineEmits } from 'vue'

const props = defineProps({
	modelValue: { type: Boolean },
	value: { type: Boolean },
	label: { type: String },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	},
})
</script>

<template>
	<div>
		<div class="relative flex gap-x-1">
			<div class="flex h-6 items-center">
				<input id="condition" v-model="model" type="checkbox" class="appearance-none hidden" :value="props.value" />
				<label for="condition" class="cursor-pointer">
					<svg v-if="model" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-blue-500 cursor-pointer">
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-500 cursor-pointer">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
					</svg>
				</label>
			</div>
			<div class="text-sm leading-6">
				<label for="condition" class="text-gray-500 select-none cursor-pointer">{{ props.label }}</label>
			</div>
		</div>
	</div>
</template>
