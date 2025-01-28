import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import { initRouter } from './router'
import DataTables from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-dt'
import SimpleBar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import pinia from './stores/pinia'

const app = createApp(App)

;(async () => {
	const router = initRouter(app)

	app.use(pinia)
	app.use(router)

	DataTables.use(DataTableLib)
	app.component('DataTables', DataTables)
	app.component('SimpleBar', SimpleBar)

	app.mount('#app')
})()
