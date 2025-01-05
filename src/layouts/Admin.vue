<script setup>
import { ref } from 'vue'
import Header from '../compontents/admin/Header.vue'
import Sidebar from '../compontents/admin/Sidebar.vue'
import Breadcrumb from '../compontents/admin/Breadcrumb.vue'

const expanded = ref(false)

const toggleSidebar = () => {
  expanded.value = !expanded.value
}
</script>

<template>
	<div class="flex relative max-h-screen overflow-y-auto">
    <Sidebar :expanded="expanded" @toggle-sidebar="toggleSidebar" />
		<main class="flex-1 transition-all overflow-y-auto">
			<Header :expanded="expanded" @toggle-sidebar="toggleSidebar" />
			<Breadcrumb />
			<RouterView />
		</main>
	</div>
</template>
