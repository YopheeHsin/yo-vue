<template lang="pug">
.pre-step
	.work-info(v-if="activeStep.work_info.id")
		p 前置步骤
		span id: {{ activeStep.work_info.id }}
		i.el-icon-circle-close-outline(@click="setPreStepFn(true)")
	.add(v-else @click="setPreStepFn(false)")
		| 添加内容
		i.el-icon-plus
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	computed: {
		...mapGetters(['activeStep'])
	},

	methods: {
		...mapMutations({
			setPreStep: 'TASKS_SET_PRE_STEP'
		}),
		setPreStepFn(reset) {
			const timestamp = +new Date()
			const work_info_id = reset ? '' : timestamp
			this.setPreStep({
				work_info_id
			})
		}
	}
}
</script>

<style lang="sass">
.pre-step
	.work-info
		position: relative
		display: inline-block
		min-width: 200px
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
	.add
		width: 200px
		line-height: 50px
		text-align: center
		border: 1px solid #f0f0f0
		border-radius: 4px
		font-size: 14px
		cursor: pointer
		i
			padding-left: 3px
			font-size: 12px
</style>
