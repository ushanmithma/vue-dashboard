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
			<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
			</svg>
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
			<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
			</svg>
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
		<hr class="border-b border-gray-200" />
	</li>
</template>
