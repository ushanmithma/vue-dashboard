import axios from 'axios'
import pinia from '../stores/pinia'
import { useAuthStore } from '../stores'

const authStore = useAuthStore(pinia)

export const SERVER_URL = import.meta.env.VITE_SERVER_URL
export const API_PATH = import.meta.env.VITE_API_PATH
export const FULL_PATH = SERVER_URL + API_PATH

export const $auth = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true,
})

export const $http = axios.create({
	baseURL: SERVER_URL + API_PATH,
	headers: {
		Accept: 'application/json',
	},
	withCredentials: true,
	withXSRFToken: true,
})

$http.interceptors.response.use(
	function (response) {
		authStore.resetTimer()
		return response
	},
	function (error) {
		authStore.resetTimer()
		return error.response
	}
)
