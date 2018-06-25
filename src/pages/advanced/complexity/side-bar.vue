<template lang="pug">
el-collapse(v-model="activeTask" @change="handleChange")
	el-collapse-item(
		v-for="(task, taskIndex) in tasks"
		:key="taskIndex"
		:title="task.name"
		:name="taskIndex"
	)
		.step(
			v-for="(step, stepIndex) in task.steps"
			:key="step.id"
		) {{ step.name }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			activeTask: '0'
		}
	},

	computed: {
		...mapGetters({
			tasks: 'brief'
		})
	},

	methods: {
		handleChange() {

		}
	},

	created() {

	}
}
</script>

<style lang="sass">
.el-aside
	height: 100vh
	border-right: 1px solid #f0f0f0
	li
		line-height: 50px
		background-color: #f9f9f9
		border-bottom: 1px solid #f0f0f0
		text-indent: 20px
		font-size: 14px
		text-transform: uppercase
		cursor: pointer
		&.active
			background-color: #fff
		sup
			position: relative
			top: -3px
			left: 5px
			color: red
			opacity: 0.6
</style>
