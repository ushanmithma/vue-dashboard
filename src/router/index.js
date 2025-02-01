import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/admin',
		name: 'admin',
		component: () => import('../layouts/Admin.vue'),
		children: [
			{ path: '', name: 'admin-dashboard', component: () => import('../pages/admin/dashboard.vue') },
			{
				path: '/settings/roles',
				name: 'role-list',
				component: () => import('../pages/admin/settings/role/index.vue'),
				meta: { gates: ['MANAGE_ROLE'] },
			},
			{
				path: '/settings/roles/create',
				name: 'role-create',
				component: () => import('../pages/admin/settings/role/create.vue'),
				meta: { gates: ['MANAGE_ROLE', 'CREATE_ROLE'] },
			},
			{
				path: '/settings/roles/:id/edit',
				name: 'role-edit',
				component: () => import('../pages/admin/settings/role/create.vue'),
				meta: { gates: ['MANAGE_ROLE', 'EDIT_ROLE'] },
			},
			{
				path: '/settings/users',
				name: 'user-list',
				component: () => import('../pages/admin/settings/user/index.vue'),
				meta: { gates: ['MANAGE_USER'] },
			},
			{
				path: '/settings/users/create',
				name: 'user-create',
				component: () => import('../pages/admin/settings/user/create.vue'),
				meta: { gates: ['MANAGE_USER', 'CREATE_USER'] },
			},
			{
				path: '/settings/users/:id/edit',
				name: 'user-edit',
				component: () => import('../pages/admin/settings/user/create.vue'),
				meta: { gates: ['MANAGE_USER', 'EDIT_USER'] },
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../pages/login.vue'),
		meta: { guest: true },
	},
	{ path: '/error', name: 'error', component: () => import('../pages/error.vue') },
	{ path: '/not-found', name: 'not-found', component: () => import('../pages/not-found.vue') },
	{ path: '/access-denied', name: 'access-denied', component: () => import('../pages/access-denied.vue') },
	{ path: '/:pathMatch(.*)', name: 'not-found', component: () => import('../pages/not-found.vue') },
]

export const initRouter = (app, authStore) => {
	let can = app.config.globalProperties.$can

	const router = createRouter({
		history: createWebHistory(),
		routes: routes,
	})

	router.beforeEach(async (to) => {
		if (to.meta.guarded && !(await authStore.isAuth())) {
			return { name: 'login', query: { redirect: to.fullPath } }
		}
		if (to.meta.guest && (await authStore.isAuth())) {
			return { name: 'admin-dashboard' }
		}
		if (to.meta.gates != undefined && to.meta.gates.length !== 0) {
			const canNavigate = to.meta.gates.every((gate) => {
				return can(gate)
			})
			if (!canNavigate) {
				return { name: 'access-denied' }
			}
		}
	})

	return router
}
