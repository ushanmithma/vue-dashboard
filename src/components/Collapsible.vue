<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false,
		required: true,
	},
})

const collapsible = ref()

function toggleContent(status) {
	if (!status && collapsible.value.style.maxHeight) {
		collapsible.value.style.maxHeight = null
	} else {
		collapsible.value.style.maxHeight = collapsible.value.scrollHeight + 'px'
	}
}

watch(
	() => props.isOpen,
	(newVal) => {
		toggleContent(newVal)
	}
)
</script>

<template>
	<div ref="collapsible" class="max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-200">
		<slot />
	</div>
</template>
