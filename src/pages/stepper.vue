<template>
<div class="demo-stepper">
	<yo-stepper v-model="value" :min="5" :max="25" :step="5" :default-value="10"
		@overlimit="handleOverlimit"
		@input="handleInput"
	/>
	<p>数值为：{{ value }}</p>
	<p>{{ overTips }}</p>
</div>
</template>

<script>
import yoStepper from '../components/yo-stepper'

export default {
	components: {
		yoStepper
	},

	data() {
		return {
			value: 15,
			overTips: ''
		}
	},

	methods: {
		handleOverlimit(type) {
			this.overTips = type === 'minus' ? '超过最小值' : '超过最大值'
		},

		handleInput() {
			this.overTips = ''
		}
	}
}
</script>

<style lang="less">
.demo-stepper {
	margin: 20px;

	p {
		padding-top: 10px;

		&:last-of-type {
			font-size: 12px;
			color: #999;
		}
	}
}
</style>
