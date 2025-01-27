import axios from 'axios'

export const SERVER_URL = import.meta.env.VITE_SERVER_URL
export const API_PATH = import.meta.env.VITE_API_PATH
export const FULL_PATH = SERVER_URL + API_PATH

export const $auth = axios.create({
	baseURL: SERVER_URL,
})

export const $http = axios.create({
	baseURL: SERVER_URL + API_PATH,
	withCredentials: true,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
	},
})

$http.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		return error.response
	}
)
