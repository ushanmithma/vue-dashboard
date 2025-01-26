import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/postcss'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		vue({
			template: {
				transformAssetUrls: {
					includeAbsolute: false,
				},
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': path.resolve(__dirname, 'node_modules'),
			'~public': path.resolve(__dirname, 'public'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			},
		},
	},
	base: '',
	publicDir: 'public',
	build: {
		emptyOutDir: true,
	},
})
