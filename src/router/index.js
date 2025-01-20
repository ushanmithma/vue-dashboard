import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/admin',
		name: 'admin',
		component: () => import('../layouts/Admin.vue'),
		children: [{ path: '', name: 'admin-dashboard', component: () => import('../pages/admin/dashboard.vue') }],
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../pages/login.vue'),
	},
]

export const initRouter = (app) => {
	const router = createRouter({
		history: createWebHistory(),
		routes: routes,
	})

	return router
}
