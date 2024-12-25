import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
	{
		name: 'src',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},
	{
		name: 'public',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},
	...pluginVue.configs['flat/essential'],
	{
		rules: {
			quotes: 'off',
			camelcase: 'off',
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'func-names': 'off',
			'no-undef': 'off',
			'no-prototype-builtins': 'off',
			'vue/no-unused-vars': 'warn',
			'vue/script-setup-uses-vars': 'warn',
			'vue/no-useless-template-attributes': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-reserved-component-names': 'off',
		},
	},
	skipFormatting,
]
