import { createApp } from 'vue'
import './libs/jquery'
import './scss/style.scss'
import App from './App.vue'
import DataTables from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-dt'
import SimpleBar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import { abilities, helpers } from './plugins'
import { abilitiesPlugin } from '@casl/vue'
import pinia from './stores/pinia'
import { initRouter } from './router'
import { useAuthStore } from './stores'
import { getCookie } from './utils'

const app = createApp(App)

;(async () => {
	app.config.globalProperties.$activePage = reactive({ parentSelection: null, elementName: null })

	DataTables.use(DataTableLib)
	app.component('DataTables', DataTables)
	app.component('SimpleBar', SimpleBar)

	app.use(helpers)
	app.use(abilitiesPlugin, await abilities, { useGlobalProperties: true })

	const authStore = useAuthStore(pinia)
	await authStore.setAuth()

	const router = initRouter(app, authStore)

	app.use(pinia)
	app.use(router)

	router.beforeEach(function (to, from, next) {
		window.scrollTo(0, 0)
		next()
	})

	$.ajaxSetup({
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
		},
		dataType: 'json',
		xhrFields: {
			withCredentials: true,
		},
		crossDomain: false,
	})

	app.mount('#app')
})()
