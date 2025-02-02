import { defineStore } from 'pinia'
import { $auth, $http } from '../utils'
import { AbilityBuilder, Ability } from '@casl/ability'

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			isAuthenticated: false,
			user: {},
			roles: [],
			logoutTimer: null,
		}
	},
	getters: {
		currentUser(state) {
			if (state.user['name'] === undefined && localStorage.getItem('user') != null) {
				return JSON.parse(localStorage.getItem('user'))
			}
			return state.user
		},
		userRoles(state) {
			if (state.roles.length === 0) return []
			return state.roles
		},
	},
	actions: {
		async setCsrfProtection() {
			return new Promise((resolve, reject) => {
				$auth
					.get('/sanctum/csrf-cookie')
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		async isAuth() {
			return this.isAuthenticated
		},
		async setAuth() {
			let user = await this.getUser()
			if (user) {
				this.isAuthenticated = true
				return user
			} else {
				this.isAuthenticated = false
				return false
			}
		},
		setRoles(roles) {
			this.roles = roles
		},
		setUser(user) {
			this.user = user
			localStorage.setItem('user', JSON.stringify(this.user))
		},
		async login(data) {
			if (!(await this.setCsrfProtection())) return { type: 'error', title: 'Sign in error', message: 'Something went wrong!' }
			const response = await $http.post('/login', data)
			if (response.status === 200 && response.data?.status == 'success') {
				this.isAuthenticated = true
				this.setUser(response.data.user)
				this.setRoles(response.data.roles)
				return {
					type: 'success',
					title: 'Sign in successfully',
					message: 'Thank you for connecting to your account',
				}
			}
			return { type: 'error', title: 'Sign in error', message: response.data.message }
		},
		async getUser() {
			const res = await $http.get('/user')
			if (res === undefined) return false
			if (res.status === 200) {
				this.setUser(res.data.user)
				this.setRoles(res.data.roles)
				return res.data.user
			} else return false
		},
		async logout() {
			const response = await $http.post('/logout')
			if (response.status === 200 && response.data?.status == 'success') {
				this.user = {}
				this.isAuthenticated = false
				localStorage.removeItem('user')
				return { type: 'success', title: 'Sign out success', message: 'Sign out successfully' }
			}
			return { type: 'error', title: 'Sign out error', message: response.data.message }
		},
		async updateAbilities(ability, permissions = null) {
			const { can, rules } = new AbilityBuilder(Ability)
			if (permissions == null) {
				const response = await $http.get('/user-permissions')
				if (response.status === 200) {
					can(response.data.data)
				}
			} else {
				can(permissions)
			}
			ability.update(rules)
		},
		setTimers() {
			this.logoutTimer = setTimeout(
				async () => {
					await this.logout()
				},
				import.meta.env.VITE_SESSION_LIFETIME * 60 * 1000
			)
		},
		async resetTimer() {
			clearTimeout(this.logoutTimer)
			if (this.isAuthenticated) this.setTimers()
		},
	},
})
