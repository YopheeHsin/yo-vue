<template lang="pug">
el-form.main-form(
	v-if="activeStepId"
	label-position="left"
	label-width="160px"
)
	el-form-item(label="NAME")
		el-input
		| {{ activeStep.type }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {

		}
	},

	computed: {
		...mapGetters(['activeStepId', 'activeStep'])
	},

	watch: {
		// activeStepId(val) {
		// 	console.log(val, 'werwqrwerwer......')
		// }
	}
}
</script>

<style lang="sass">
.main-form
</style>
