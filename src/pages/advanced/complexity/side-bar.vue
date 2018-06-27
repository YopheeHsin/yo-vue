<template lang="pug">
el-aside(width="200px")
	el-collapse(v-model="activeTask")
		el-collapse-item(
			v-for="(task, taskIndex) in tasks"
			:key="task.id"
			:name="taskIndex"
		)
			.task-title(slot="title")
				span {{ task.name }}
				el-dropdown.action.action-task
					i.el-icon-more
					el-dropdown-menu(slot="dropdown")
						el-dropdown-item(@click.native="setActiveInput(task)") 编辑
						el-dropdown-item 删除
				el-input(
					:ref="'input' + task.id"
					v-if="activeInputId === task.id"
					v-model="editingNameValue"
					size="small"
					@change="updateTaskName({index: taskIndex, name: editingNameValue})"
					@blur="activeInputId = ''"
				)
			.step(
				v-for="(step, stepIndex) in task.steps"
				:key="step.id"
				:class="{ active: step.id === activeStepId }"
				@click="setActiveStep(step)"
			)
				span {{ step.name }}
				el-dropdown.action.action-step(v-if="stepIndex")
					i.el-icon-more
					el-dropdown-menu(slot="dropdown")
						el-dropdown-item(@click.native="setActiveInput(step)") 编辑
						el-dropdown-item 删除
				el-input(
					:ref="'input' + step.id"
					v-if="stepIndex && activeInputId === step.id"
					v-model="editingNameValue"
					size="small"
					@change="updateStepName({task_index: taskIndex, step_index: stepIndex, name: editingNameValue})"
					@blur="activeInputId = ''"
				)
			.add.add-step
				el-button(size="mini") 添加步骤
		.add.add-task
			el-button(size="mini") 添加工序
	.b
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			activeTask: [0],
			activeStepId: 'task_0_pre_step',
			activeInputId: '',
			editingNameValue: ''
		}
	},

	computed: {
		...mapGetters({
			tasks: 'brief'
		})
	},

	methods: {
		...mapMutations({
			updateTaskName: 'TASKS_UPDATE_TASK_NAME',
			updateStepName: 'TASKS_UPDATE_STEP_NAME'
		}),
		setActiveStep(step) {
			this.activeStepId = step.id
		},
		setActiveInput({id, name}) {
			this.activeInputId = id
			this.editingNameValue = name
			this.$nextTick(() => {
				this.$refs['input' + id][0].focus()
			})
		}
	}
}
</script>

<style lang="sass" scoped>
.el-aside
	display: flex
	flex-direction: column
	height: 100vh
	user-select: none
	.el-collapse
		border-bottom-width: 0
	/deep/ .el-collapse-item__header
		position: relative
		background-color: #f9f9f9
		border-right: 1px solid #f0f0f0
		font-size: 14px
		font-weight: normal
		.el-input
			position: absolute
			left: 10px
			width: 180px
	/deep/ .el-collapse-item__arrow
		float: left
		margin-left: 10px
	/deep/ .el-icon-arrow-right:before
		content: "\E60E"
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
			border-left-color: #409EFF
		.el-input
			position: absolute
			left: 10px
			width: 175px
	.action
		position: absolute
		right: 5px
		line-height: 14px
		&-task
			top: 16px
		&-step
			top: 13px
		.el-icon-more
			transform: rotate(90deg)
			font-size: 10px
			color: #999
	.add
		border-right: 1px solid #f0f0f0
		padding: 5px 32px
		button
			width: 100%
		&-step
			border-top: 1px solid #f0f0f0
		span
			padding-left: 3px
	.b
		flex: 1
		border-right: 1px solid #f0f0f0
</style>
