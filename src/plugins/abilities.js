import { defineAbility } from '@casl/ability'
import { $http } from '../utils'

const abilities = defineAbility(async (can) => {
	const response = await $http.get('/user-permissions')
	if (response.status == 200) can(response.data.data)
	else can([])
})

export default abilities
