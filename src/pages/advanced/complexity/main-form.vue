<template lang="pug">
.main-form(v-if="activeStepId")
	pre-step(v-if="formData.work_info")
	.step(v-else)
		el-button-group.step-type
			el-button(
				:type="formData.type === 'manual' ? 'primary' : 'secondary'"
				size="medium"
			) 手动
			el-button(
				:type="formData.type === 'automatic' ? 'primary' : 'secondary'"
				size="medium"
			) 自动
		el-form(
			label-position="left"
			label-width="160px"
		)
			el-form-item(
				label="年龄"
			)
				el-slider.times-slider(
					v-model="formData.frequency.times"
					:step="1"
					:min="1",
                	:max="5",
				)
				.times-slider-mark
					span(v-for="n in 5" :key="n") {{ n }}



</template>

<script>
import { mapGetters } from 'vuex'
import PreStep from './pre-step'

export default {
	components: { PreStep },

	data() {
		return {
			formData: {}
		}
	},

	computed: {
		...mapGetters(['activeStepId', 'activeStep']),
	},

	watch: {
		activeStepId() {
			this.formData = this._.cloneDeep(this.activeStep)
		}
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
	.step-type
		display: block
		width: 300px
		margin: 0 auto
		.el-button
			width: 150px
	.times-slider
		width: 200px
		&-mark
			display: flex
			justify-content: space-between
			position: relative
			top: -10px
			left: -11px
			width: 200px
			span
				position: relative
				display: inline-block
				height: 40px
				&:before
					content: ''
					width: 1px
					height: 6px
					background-color: #d8d8d8
					position: absolute
					top: 0
					left: 11px
</style>
