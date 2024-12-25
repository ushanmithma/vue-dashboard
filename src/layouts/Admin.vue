<script setup>
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const expanded = ref(true)
const active = ref(true)
</script>

<template>
	<div class="flex relative h-screen overflow-y-auto">
		<aside class="fixed z-50 top-0 left-0 bottom-0 h-screen bg-gray-100 border-r shadow-sm transition-all" :class="[expanded ? 'w-64' : 'w-16']">
			<nav class="h-full flex flex-col">
				<div class="p-3 pb-2 flex justify-between items-center">
					<svg class="overflow-hidden transition-all" :class="[expanded ? 'w-32' : 'w-0']" viewBox="0 0 132 35" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M38.51 11.26H41.72V24.26H38.51V11.26ZM43 19.37C43 16.15 45 14.22 48 14.22C51 14.22 53 16.15 53 19.37C53 22.59 51.07 24.54 48 24.54C44.93 24.54 43 22.66 43 19.37ZM49.82 19.37C49.82 17.6 49.13 16.56 48.03 16.56C46.93 16.56 46.25 17.56 46.25 19.37C46.25 21.18 46.93 22.17 48.03 22.17C49.13 22.17 49.84 21.18 49.84 19.38L49.82 19.37ZM54.28 24.93H57.38C57.5211 25.2637 57.7676 25.5422 58.0818 25.7227C58.396 25.9033 58.7606 25.9761 59.12 25.93C60.35 25.93 60.99 25.27 60.99 24.29V22.49H61C60.7351 23.0505 60.3067 23.5176 59.7713 23.83C59.2358 24.1424 58.6183 24.2853 58 24.24C55.65 24.24 54.09 22.45 54.09 19.37C54.09 16.29 55.58 14.37 58.09 14.37C58.7241 14.3361 59.3532 14.4996 59.8904 14.8381C60.4277 15.1766 60.8468 15.6734 61.09 16.26H61V14.45H64.18V24.19C64.18 26.54 62.1 28.01 59.04 28.01C56.26 28 54.48 26.73 54.3 24.94L54.28 24.93ZM61 19.37C61 17.8 60.28 16.81 59.14 16.81C58 16.81 57.3 17.81 57.3 19.37C57.3 20.93 57.99 21.85 59.14 21.85C60.29 21.85 61 21 61 19.37ZM65.45 19.37C65.45 16.15 67.45 14.22 70.45 14.22C73.45 14.22 75.45 16.15 75.45 19.37C75.45 22.59 73.51 24.54 70.45 24.54C67.39 24.54 65.47 22.66 65.47 19.37H65.45ZM72.27 19.37C72.27 17.6 71.57 16.56 70.48 16.56C69.39 16.56 68.7 17.56 68.7 19.37C68.7 21.18 69.38 22.17 70.48 22.17C71.58 22.17 72.29 21.18 72.29 19.38L72.27 19.37ZM76.75 12.08C76.736 11.753 76.8202 11.4293 76.9917 11.1506C77.1632 10.8718 77.4142 10.6508 77.7124 10.5159C78.0106 10.3809 78.3423 10.3383 78.6649 10.3935C78.9875 10.4486 79.2862 10.599 79.5226 10.8253C79.759 11.0517 79.9223 11.3435 79.9915 11.6634C80.0606 11.9833 80.0325 12.3166 79.9107 12.6203C79.7889 12.9241 79.579 13.1845 79.308 13.368C79.037 13.5515 78.7173 13.6497 78.39 13.65C78.1809 13.6553 77.9727 13.619 77.7777 13.5433C77.5827 13.4675 77.4046 13.3537 77.2539 13.2086C77.1032 13.0635 76.9828 12.8899 76.8998 12.6978C76.8167 12.5058 76.7726 12.2992 76.77 12.09L76.75 12.08ZM76.75 14.44H80V24.3H76.8L76.75 14.44ZM91.69 19.37C91.69 22.58 90.25 24.44 87.8 24.44C87.1728 24.4787 86.5488 24.3239 86.0123 23.9967C85.4758 23.6694 85.0527 23.1854 84.8 22.61H84.74V27.47H81.53V14.47H84.72V16.23H84.78C85.024 15.6433 85.443 15.146 85.9798 14.806C86.5167 14.466 87.1453 14.2998 87.78 14.33C90.3 14.31 91.75 16.16 91.75 19.38L91.69 19.37ZM88.42 19.37C88.42 17.81 87.69 16.8 86.56 16.8C85.43 16.8 84.72 17.8 84.71 19.37C84.7 20.94 85.43 21.93 86.56 21.93C87.69 21.93 88.48 21 88.48 19.38L88.42 19.37ZM97.17 14.21C99.86 14.21 101.53 15.48 101.55 17.52H98.62C98.62 16.81 98.03 16.37 97.15 16.37C96.27 16.37 95.85 16.71 95.85 17.22C95.85 17.73 96.22 17.89 96.96 18.04L99.02 18.46C101.02 18.88 101.82 19.68 101.82 21.17C101.82 23.17 99.97 24.53 97.22 24.53C94.47 24.53 92.68 23.21 92.55 21.2H95.66C95.75 21.93 96.33 22.36 97.27 22.36C98.21 22.36 98.65 22.06 98.65 21.53C98.65 21 98.35 20.91 97.58 20.75L95.72 20.36C93.79 19.95 92.78 18.94 92.78 17.43C92.84 15.47 94.52 14.22 97.23 14.22L97.17 14.21ZM112.57 24.29H109.46V22.44H109.4C109.226 23.0571 108.847 23.5964 108.325 23.969C107.803 24.3417 107.17 24.5254 106.53 24.49C106.047 24.5057 105.565 24.4191 105.118 24.2357C104.671 24.0524 104.267 23.7765 103.934 23.4262C103.6 23.0758 103.345 22.6589 103.184 22.2029C103.023 21.7469 102.96 21.2619 103 20.78V14.45H106.21V20.09C106.21 21.25 106.82 21.88 107.82 21.88C108.055 21.8782 108.286 21.8261 108.499 21.7273C108.712 21.6284 108.901 21.485 109.053 21.3068C109.206 21.1286 109.319 20.9197 109.384 20.6943C109.448 20.4688 109.464 20.2321 109.43 20V14.45H112.63L112.57 24.29ZM114.12 14.44H117.24V16.34H117.31C117.482 15.7313 117.852 15.197 118.36 14.8206C118.869 14.4443 119.488 14.2471 120.12 14.26C120.755 14.2048 121.388 14.3884 121.894 14.7749C122.401 15.1614 122.745 15.7231 122.86 16.35H123C123.2 15.7197 123.602 15.1731 124.145 14.7952C124.687 14.4172 125.34 14.2291 126 14.26C126.439 14.2433 126.877 14.3195 127.284 14.4836C127.692 14.6476 128.06 14.8959 128.365 15.2122C128.67 15.5284 128.904 15.9055 129.053 16.3187C129.203 16.7319 129.263 17.1719 129.23 17.61V24.3H126V18.43C126 17.43 125.53 16.87 124.62 16.87C124.418 16.8667 124.218 16.9071 124.033 16.9883C123.848 17.0696 123.684 17.1899 123.55 17.3409C123.416 17.492 123.316 17.6701 123.257 17.8633C123.199 18.0565 123.183 18.26 123.21 18.46V24.3H120.15V18.4C120.15 17.4 119.66 16.87 118.78 16.87C118.576 16.8684 118.374 16.9104 118.188 16.9932C118.001 17.0761 117.835 17.1978 117.699 17.3503C117.564 17.5028 117.463 17.6825 117.403 17.8773C117.342 18.0722 117.324 18.2777 117.35 18.48V24.3H114.14L114.12 14.44Z"
							class="ccustom"
						></path>
						<path
							d="M32.16 12.11C32.1601 10.1197 31.5591 8.17576 30.4357 6.53282C29.3123 4.88988 27.7188 3.62453 25.8641 2.90253C24.0094 2.18052 21.9798 2.03552 20.0413 2.48651C18.1027 2.9375 16.3456 3.96346 15 5.43H2.52002V31.77H28.87V19.46C29.9042 18.535 30.7318 17.4023 31.2987 16.1358C31.8656 14.8693 32.1591 13.4976 32.16 12.11V12.11ZM27.09 12.11C27.092 13.0637 26.811 13.9966 26.2826 14.7906C25.7541 15.5845 25.0021 16.2039 24.1215 16.5702C23.2409 16.9366 22.2715 17.0335 21.3358 16.8486C20.4002 16.6638 19.5404 16.2055 18.8653 15.5318C18.1902 14.8581 17.7302 13.9993 17.5434 13.064C17.3566 12.1288 17.4515 11.1591 17.816 10.2778C18.1805 9.39646 18.7983 8.64309 19.5911 8.11302C20.384 7.58295 21.3163 7.30001 22.27 7.3C23.5466 7.3 24.7711 7.80645 25.6747 8.70821C26.5784 9.60997 27.0874 10.8334 27.09 12.11V12.11ZM23.8 26.7H7.59002V10.5H12.53C12.4346 11.0315 12.3844 11.5701 12.38 12.11C12.3827 14.7322 13.4255 17.2462 15.2797 19.1004C17.1338 20.9545 19.6478 21.9974 22.27 22C22.7827 21.9973 23.2943 21.9538 23.8 21.87V26.7Z"
							class="ccustom"
						></path>
					</svg>
					<button class="shrink-0 transition-colors hover:bg-gray-200 rounded text-gray-600 px-1" @click.prevent="expanded = !expanded">
						<svg v-if="expanded" class="w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
						</svg>
						<svg v-else class="w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
						</svg>
					</button>
				</div>
				<ul class="flex-1 flex flex-col justify-between p-3">
					<div>
						<li class="my-2">
							<span class="text-xs text-gray-400" :class="{ invisible: !expanded }">BASIC</span>
						</li>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[
									expanded ? 'justify-start' : 'justify-center',
									{ 'gap-2': expanded, 'bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800': active },
								]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Dashboard</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Dashboard</span>
								</div>
							</a>
						</li>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[expanded ? 'justify-start' : 'justify-center', { 'gap-2': expanded }]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path
										d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"
									/>
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Reservations</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Reservations</span>
								</div>
							</a>
						</li>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[expanded ? 'justify-start' : 'justify-center', { 'gap-2': expanded }]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<g>
										<rect fill="none" height="24" width="24" />
										<path
											d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"
										/>
									</g>
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Accounts</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Accounts</span>
								</div>
							</a>
						</li>
						<li class="my-2">
							<hr />
						</li>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[expanded ? 'justify-start' : 'justify-center', { 'gap-2': expanded }]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<rect fill="none" height="24" width="24" />
									<g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" /></g>
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Sales</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Sales</span>
								</div>
							</a>
						</li>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[expanded ? 'justify-start' : 'justify-center', { 'gap-2': expanded }]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<g><path d="M0,0h24v24H0V0z" fill="none" /></g>
									<g>
										<path
											d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h5v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z"
										/>
									</g>
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Payment Methods</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Payment Methods</span>
								</div>
							</a>
						</li>
					</div>
					<div>
						<li class="my-1">
							<a
								href="#"
								class="relative flex items-center w-full py-1 px-2 rounded cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-800 text-gray-600 group"
								:class="[expanded ? 'justify-start' : 'justify-center', { 'gap-2': expanded }]"
							>
								<svg class="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path
										d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
									/>
								</svg>
								<div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="[expanded ? 'w-auto' : 'w-0']">
									<span class="text-sm text-current">Settings</span>
								</div>
								<div
									v-if="!expanded"
									class="absolute left-full rounded py-1 px-2 ml-6 bg-blue-100 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
								>
									<span class="text-xs text-blue-800 whitespace-nowrap">Settings</span>
								</div>
							</a>
						</li>
					</div>
				</ul>
			</nav>
		</aside>
		<main class="flex-1 transition-all" :class="[expanded ? 'ml-64' : 'ml-16']">
			<header class="py-3 px-8 border-b">
				<div class="flex items-center justify-between">
					<div>
						<h1 class="text-2xl font-bold tracking-wide text-gray-700">Products</h1>
					</div>
					<div class="flex items-center gap-3">
						<div>
							<div class="relative h-10 w-56 overflow-hidden">
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
									class="absolute inset-0 w-full h-full bg-gray-200 rounded-full px-4 pl-10 transition-all text-sm focus:outline outline-1 outline-gray-300"
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
						<div class="border-l pl-3">
							<Menu as="div" class="relative">
								<div>
									<MenuButton class="flex items-center gap-2">
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
								</div>
								<Transition
									enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0"
									enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-in"
									leave-from-class="transform scale-100 opacity-100"
									leave-to-class="transform scale-95 opacity-0"
								>
									<MenuItems
										class="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none min-w-max md:w-full md:min-w-44 z-50 flex flex-col py-2"
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
													<span class="align-middle text-xs ml-1 text-current">My Profile</span>
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
													<span class="align-middle text-xs ml-1 text-current">Settings</span>
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
													<span class="align-middle text-xs ml-1 text-current">Messages</span>
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
			<div class="border-b">
				<div class="px-8 py-2">
					<ul class="flex gap-2">
						<li><a href="#" class="text-sm text-gray-700">Dashboard</a></li>
						<li class="flex items-center">
							<svg class="fill-gray-400 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
							</svg>
						</li>
						<li><a href="#" class="text-sm text-blue-700">Home</a></li>
					</ul>
				</div>
			</div>
			<RouterView />
		</main>
	</div>
</template>
