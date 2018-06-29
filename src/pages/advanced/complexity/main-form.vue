<template lang="pug">
.main-form(v-if="activeStepId")
	pre-step(v-if="activeStep.work_info")
	el-form(
		v-else
		label-position="left"
		label-width="160px"
	)
		el-form-item(label="NAME")
			el-input
			| {{ activeStep.type }}
</template>

<script>
import { mapGetters } from 'vuex'
import PreStep from './pre-step'

export default {
	components: { PreStep },

	computed: {
		...mapGetters(['activeStepId', 'activeStep'])
	}
}
</script>

<style lang="sass">
.main-form
	.pre-step
		.work-info
			position: relative
			display: inline-block
			max-width: 300px
			padding: 10px 40px 10px 15px
			border: 1px solid #f0f0f0
			border-radius: 4px
			font-size: 14px
			p
				margin: 0
			span
				font-size: 12px
				color: #999
			i
				position: absolute
				top: 50%
				right: 10px
				margin-top: -7px
				color: #999
				cursor: pointer
</style>
