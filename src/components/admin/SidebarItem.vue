<script setup>
import { ref } from 'vue'

const props = defineProps({
	item: { type: Object },
})

const collapsible = ref()

function toggleMenu() {
	if (collapsible.value.style.maxHeight) {
		collapsible.value.style.maxHeight = null
	} else {
		collapsible.value.style.maxHeight = collapsible.value.scrollHeight + 'px'
	}
}
</script>

<template>
	<li v-if="props.item?.link == null && props.item?.label && props.item?.children == null" class="my-2">
		<span class="text-xs text-gray-400 uppercase">{{ item.label }}</span>
	</li>
	<li v-else-if="props.item?.link && props.item?.label" class="my-1">
		<a
			:href="props.item.link"
			class="relative flex items-center gap-2 w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600"
			:class="[{ 'bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800': false }]"
		>
			<span class="material-symbols-outlined shrink-0 text-current">{{ item?.icon }}</span>
			<div class="overflow-hidden whitespace-nowrap text-ellipsis">
				<span class="text-sm text-current">{{ props.item.label }}</span>
			</div>
		</a>
	</li>
	<li v-else-if="props.item?.link == null && props.item?.children" class="my-1 relative">
		<span
			class="relative flex items-center gap-2 w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600"
			:class="[{ 'bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800': false }]"
			@click.prevent="toggleMenu"
		>
			<span class="material-symbols-outlined shrink-0 text-current">{{ item?.icon }}</span>
			<div class="overflow-hidden whitespace-nowrap text-ellipsis">
				<span class="text-sm text-current">{{ item.label }}</span>
			</div>
			<div class="ms-auto">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-gray-400">
					<path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
					<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
				</svg>
			</div>
		</span>
		<ul ref="collapsible" class="ps-4 my-1 space-y-1 max-h-[0px] overflow-hidden transition-[max-height] duration-300 ease-in-out">
			<li v-for="(child, idx) in props.item.children" :key="idx" class="before:content-['—'] before:text-gray-400 before:pe-2">
				<a :href="child.link" class="text-xs text-gray-600 hover:text-blue-500 hover:underline">{{ child.label }}</a>
			</li>
		</ul>
	</li>
	<li v-else-if="props.item?.divider" class="my-2">
		<div class="border-b border-gray-200"></div>
	</li>
</template>
