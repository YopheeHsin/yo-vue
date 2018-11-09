<template lang="pug">
.demo-stepper
	yo-stepper(
		v-model="value"
		:min="5"
		:max="25"
		:step="5"
	)
	p 数值为：{{ value }}
</template>

<script>
import YoStepper from '../components/yo-stepper'

export default {
	components: { YoStepper },

	data() {
		return {
			value: 10,
		}
	}
}
</script>

<style lang="sass" scoped>
.demo-stepper
	margin: 20px

	p
		padding-top: 10px
</style>
