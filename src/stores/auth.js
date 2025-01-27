import { defineStore } from 'pinia'
import { $auth } from '../utils'

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			user: {},
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
	},
})
