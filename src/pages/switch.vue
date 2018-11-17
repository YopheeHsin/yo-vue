<template lang="pug">
.switch-demo
	yo-switch(v-model="checked" size="40px")
		p {{ checked ? '开' : '关' }}
</template>

<script>
import YoSwitch from '../components/yo-switch'

export default {
	components: {
		YoSwitch
	},

	data() {
		return {
			checked: false
		}
	}
}
</script>

<style lang="sass">
.switch-demo
	padding: 20px
</style>
