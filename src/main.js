import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import { initRouter } from './router'
import DataTables from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-dt'

const app = createApp(App)

;(async () => {
	const router = initRouter(app)
	app.use(router)

	DataTables.use(DataTableLib)
	app.component('DataTables', DataTables)

	app.mount('#app')
})()
