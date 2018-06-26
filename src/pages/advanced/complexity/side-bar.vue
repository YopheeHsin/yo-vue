<template lang="pug">
el-aside(width="200px")
	el-collapse(v-model="activeTask" @change="handleChange")
		el-collapse-item(
			v-for="(task, taskIndex) in tasks"
			:key="task.id"
			:name="taskIndex"
		)
			.task-title(slot="title")
				span {{ task.name }}
				el-dropdown.task-action.action
					i.el-icon-more
					el-dropdown-menu(slot="dropdown")
						el-dropdown-item(@click.native="setActiveInputId(task.id)") 编辑
						el-dropdown-item 删除
				el-input(
					v-show="activeInputId === task.id"
					:value="task.name"
					size="small"
				)
			.step(
				v-for="(step, stepIndex) in task.steps"
				:key="step.id"
				:class="{ active: step.id === activeStep.id }"
				@click="onClickStep(step)"
			)
				span {{ step.name }}
				el-dropdown.step-action.action(v-if="stepIndex")
					i.el-icon-more
					el-dropdown-menu(slot="dropdown")
						el-dropdown-item(@click.native="setActiveInputId(step.id)") 编辑
						el-dropdown-item 删除
				el-input(:value="step.name" size="small")
	.b
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			activeTask: [0],
			activeStep: {
				id: 'task_0_pre_step'
			},
			activeInputId: ''
		}
	},

	computed: {
		...mapGetters({
			tasks: 'brief'
		})
	},

	methods: {
		handleChange() {

		},
		onClickStep(step) {
			this.activeStep.id = step.id
		},
		setActiveInputId(id) {
			this.activeInputId = id
		}
	},

	created() {

	}
}
</script>

<style lang="sass" scoped>
.el-aside
	display: flex
	flex-direction: column
	height: 100vh
	user-select: none
	/deep/ .el-collapse-item__header
		position: relative
		background-color: #f9f9f9
		border-right: 1px solid #f0f0f0
		font-size: 14px
		font-weight: normal
		.task-action
			top: 16px
		.el-input
			position: absolute
			left: 10px
			width: 180px
	/deep/ .el-collapse-item__arrow
		float: left
		margin-left: 10px
	/deep/ .el-collapse-item__content
		padding-bottom: 0
	.step
		position: relative
		line-height: 42px
		background-color: #f9f9f9
		border-top: 1px solid #f0f0f0
		border-right: 1px solid #f0f0f0
		border-left: 5px solid #f9f9f9
		padding: 0 27px
		font-size: 12px
		cursor: pointer
		&.active
			position: relative
			background-color: #fff
			border-right-color: #fff
			border-left-color: #337ab7
		&-action
			top: 13px
		.el-input
			position: absolute
			left: 10px
			width: 175px
	.action
		position: absolute
		right: 5px
		line-height: 14px
		.el-icon-more
			transform: rotate(90deg)
			font-size: 10px
			color: #999
	.b
		flex: 1
		border-right: 1px solid #f0f0f0
</style>
