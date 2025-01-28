<script setup>
import { reactive, ref } from 'vue'
import Checkbox from '../components/Checkbox.vue'
import LoadingButton from '../components/LoadingButton.vue'
import { useAuthStore } from '../stores'

const authStore = useAuthStore()

const form = reactive({
	email: '',
	password: '',
	remember: false,
})

const isLoading = ref(false)

const login = () => {
	isLoading.value = true
	authStore.login(form).then(async (result) => {
		if (result.type === 'success') {
			isLoading.value = false
			window.location.href = '/admin'
		} else {
			isLoading.value = false
			console.error(result.message)
		}
	})
}
</script>

<template>
	<div class="flex justify-center lg:h-screen lg:items-center">
		<div class="flex w-full flex-col justify-center px-6 py-12 lg:px-8 lg:w-96 lg:mt-6 lg:rounded-md lg:border lg:border-gray-200 lg:shadow-md">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600" alt="Your Company" />
				<h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
			</div>
			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form class="space-y-6">
					<div>
						<label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
						<div class="mt-2">
							<input
								type="email"
								name="email"
								id="email"
								v-model="form.email"
								autocomplete="email"
								required
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
							/>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between">
							<label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
							<div class="text-sm">
								<a href="#" class="font-semibold text-blue-600 hover:text-blue-500 hover:underline">Forgot password?</a>
							</div>
						</div>
						<div class="mt-2">
							<input
								type="password"
								name="password"
								id="password"
								v-model="form.password"
								autocomplete="current-password"
								required
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
							/>
						</div>
					</div>
					<div>
						<Checkbox v-model="form.remember" :value="true" label="Remember me" />
					</div>
					<div>
						<LoadingButton
							type="submit"
							class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm cursor-pointer hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							:is-loading="isLoading"
							:disabled="isLoading"
							@click.prevent="login"
							>Sign in</LoadingButton
						>
					</div>
				</form>
				<p class="mt-10 text-center text-sm/6 text-gray-500">
					Don't have an account?
					<a href="#" class="font-semibold text-blue-600 hover:text-blue-500 hover:underline">Register</a>
				</p>
			</div>
		</div>
	</div>
</template>
