<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const emits = defineEmits(['toggleSidebar'])

defineProps({
	expanded: {
		type: Boolean,
		required: true,
	},
})
</script>

<template>
	<header class="py-3 px-4 lg:px-8 border-b border-gray-200 sticky top-0 z-10 bg-white">
		<div class="flex items-center justify-between gap-4">
			<div class="flex gap-3 items-center">
				<div class="lg:hidden">
					<button type="button" class="transition-colors hover:bg-gray-200 rounded text-gray-600 px-1" @click.prevent="emits('toggleSidebar')">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="fill-gray-400" viewBox="0 0 24 24">
							<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
						</svg>
					</button>
				</div>
				<div>
					<h1 class="text-2xl font-bold tracking-wide text-gray-700">Products</h1>
				</div>
			</div>
			<div class="flex items-center gap-3">
				<div>
					<div class="relative h-10 w-56 overflow-hidden rounded-full">
						<div class="absolute top-0 left-0 z-10 h-full flex items-center">
							<svg class="ml-3 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
								></path>
							</svg>
						</div>
						<input
							type="search"
							placeholder="Search for..."
							class="absolute inset-0 w-full h-full bg-gray-200 rounded-full px-4 pl-10 transition-all text-sm outline outline-offset-2 outline-1 outline-gray-300"
						/>
					</div>
				</div>
				<div>
					<div class="w-8 h-8 bg-blue-500 flex justify-center items-center rounded-full">
						<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						</svg>
					</div>
				</div>
				<div class="border-l border-gray-200 pl-3">
					<Menu as="div" class="relative">
						<MenuButton class="flex items-center gap-2 cursor-pointer">
							<div class="w-8 h-8 overflow-hidden rounded-full outline outline-1 outline-gray-200 outline-offset-1">
								<img src="/images/avatar/placeholder.png" alt="" />
							</div>
							<div class="hidden md:block text-left">
								<p class="font-bold text-gray-800 text-sm whitespace-nowrap text-ellipsis overflow-hidden max-w-24">Greatest Lord</p>
								<small class="text-gray-400 text-xs leading-none block">Super Admin</small>
							</div>
							<svg class="shrink-0 fill-gray-400 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
								<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
							</svg>
						</MenuButton>
						<Transition
							enter-active-class="transition duration-100 ease-out"
							enter-from-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-in"
							leave-from-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0"
						>
							<MenuItems
								class="absolute z-[999] right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none min-w-max md:w-full md:min-w-44 z-50 flex flex-col py-2"
							>
								<div class="pb-2">
									<MenuItem>
										<a href="#" class="py-1 px-2 block text-gray-600 hover:bg-gray-100">
											<svg
												class="w-5 align-middle inline fill-current"
												xmlns="http://www.w3.org/2000/svg"
												enable-background="new 0 0 24 24"
												viewBox="0 0 24 24"
											>
												<g><rect fill="none" height="24" width="24" /></g>
												<g>
													<g>
														<path
															d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"
														/>
														<path
															d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
														/>
													</g>
												</g>
											</svg>
											<span class="align-middle text-xs ml-2 text-current">My Profile</span>
										</a>
									</MenuItem>
									<MenuItem>
										<a href="#" class="py-1 px-2 block text-gray-600 hover:bg-gray-100">
											<svg class="w-5 align-middle inline fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path
													d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
												/>
											</svg>
											<span class="align-middle text-xs ml-2 text-current">Settings</span>
										</a>
									</MenuItem>
									<MenuItem>
										<a href="#" class="py-1 px-2 block text-gray-600 hover:bg-gray-100">
											<svg class="w-5 align-middle inline fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path
													d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
												/>
											</svg>
											<span class="align-middle text-xs ml-2 text-current">Messages</span>
										</a>
									</MenuItem>
								</div>
								<div class="pt-2">
									<MenuItem>
										<a href="#" class="py-1 px-2 block text-gray-600 hover:bg-gray-100">
											<svg
												class="w-5 align-middle inline fill-current"
												xmlns="http://www.w3.org/2000/svg"
												enable-background="new 0 0 24 24"
												viewBox="0 0 24 24"
											>
												<g><path d="M0,0h24v24H0V0z" fill="none" /></g>
												<g>
													<path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
												</g>
											</svg>
											<span class="align-middle text-xs ml-1 text-current">Log Out</span>
										</a>
									</MenuItem>
								</div>
							</MenuItems>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	</header>
</template>
