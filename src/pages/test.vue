<template lang="pug">
.demo-test
	yo-test(v-model="test")
	p {{ test }}
</template>

<script>
import YoTest from '../components/yo-test'

export default {
	components: {
		YoTest
	},

	data() {
		return {
			test: 1
		}
	}
}
</script>

<style lang="sass">
.demo-test
</style>
