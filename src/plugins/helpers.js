const helpers = {
	getFirstChar(text) {
		if (text == undefined) return
		return text.charAt(0).toUpperCase()
	},

	generateRandomString(stringLength) {
		var pass = ''
		var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
		for (let i = 1; i <= stringLength; i++) {
			var char = Math.floor(Math.random() * str.length + 1)
			pass += str.charAt(char)
		}
		return pass
	},

	formatNumber(number) {
		if (isNaN(number)) return number
		return new Intl.NumberFormat('en-US').format(parseFloat(number).toFixed(2))
	},
}

export default {
	install: (app) => {
		app.config.globalProperties.$helpers = helpers
	},
}
