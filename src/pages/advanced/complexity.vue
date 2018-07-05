<template lang="pug">
el-container.complexity
	side-bar
	el-main(v-if="activeStepId")
		pre-step(v-if="activeStep.work_info")
		main-step(v-else)
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SideBar from './complexity/side-bar'
import PreStep from './complexity/pre-step'
import MainStep from './complexity/main-step'

export default {
	components: { SideBar, PreStep, MainStep },

	computed: {
		...mapGetters(['activeStepId', 'activeStep'])
	},

	methods: {
		...mapMutations({
			init: 'TASKS_INIT',
			dispose: 'TASKS_DISPOSE'
		})
	},

	created() {
		this.$http.get('/tasks').then(res => {
			this.init({
				tasks: res.data
			})
		})
	},

	destroyed() {
		this.dispose()
	}
}
</script>

<style lang="sass" scoped>
.el-main
	height: 100vh
	overflow-y: auto
</style>
