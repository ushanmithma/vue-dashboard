import { defineStore } from 'pinia'
import { $auth, $http } from '../utils'

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			user: {},
			isAuthenticated: false,
		}
	},
	getters: {
		user(state) {
			if (state.user['name'] === undefined && localStorage.getItem('user') != null) {
				return JSON.parse(localStorage.getItem('user'))
			}
			return state.user
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
		async login(data) {
			if (!(await this.setCsrfProtection())) return { type: 'error', title: 'Sign in error', message: 'Something went wrong!' }
			const response = await $http.post('/login', data)
			if (response.status === 200 && response.data?.status == 'success') {
				this.isAuthenticated = true
				return {
					type: 'success',
					title: 'Sign in successfully',
					message: 'Thank you for connecting to your account',
				}
			}
			return { type: 'error', title: 'Sign in error', message: response.data.message }
		},
	},
})
