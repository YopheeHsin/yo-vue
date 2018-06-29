<template lang="pug">
el-aside(width="200px")
	el-collapse(v-model="activeTask" accordion)
		el-collapse-item(
			v-for="(task, taskIndex) in tasks"
			:key="task.id"
			:name="taskIndex + ''"
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
					@change="updateTaskName({task_index: taskIndex, name: editingNameValue})"
					@blur="activeInputId = ''"
				)
			.step(
				v-for="(step, stepIndex) in task.steps"
				:key="step.id"
				:class="{ active: step.id === activeStepId }"
				@click="setActiveStep({id: step.id})"
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
				el-button(size="mini" @click="addStep({task_index: taskIndex})")
					| 添加步骤
					i.el-icon-plus
		.add.add-task
			el-button(size="mini" @click="addTaskFn")
				| 添加工序
				i.el-icon-plus
	.b
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	props: {
		activeStep: {}
	},

	data() {
		return {
			activeTask: '0',
			activeInputId: '',
			editingNameValue: ''
		}
	},

	computed: {
		...mapGetters({
			tasks: 'baseInfo',
			activeStepId: 'activeStepId'
		})
	},

	methods: {
		...mapMutations({
			setActiveStep: 'TASKS_SET_ACTIVE_STEP_ID',
			updateTaskName: 'TASKS_UPDATE_TASK_NAME',
			updateStepName: 'TASKS_UPDATE_STEP_NAME',
			addTask: 'TASKS_ADD_TASK',
			addStep: 'TASKS_ADD_STEP'
		}),
		addTaskFn() {
			this.addTask()
			this.activeTask = this.tasks.length - 1 + ''
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
		background-color: #f9f9f9
		border-bottom-width: 0
	/deep/ .el-collapse-item__header
		position: relative
		background-color: #f9f9f9
		border-right: 1px solid #f0f0f0
		font-weight: normal
	/deep/ .el-collapse-item__arrow
		float: left
		margin-left: 9px
	/deep/ .el-icon-arrow-right:before
		content: "\E60E"
	/deep/ .el-collapse-item__content
		padding-bottom: 0
	.step
		position: relative
		line-height: 48px
		background-color: #f9f9f9
		border-top: 1px solid #f0f0f0
		border-right: 1px solid #f0f0f0
		padding: 0 30px
		cursor: pointer
		&.active
			position: relative
			background-color: #fff
			border-right-color: #fff
	.el-input
		position: absolute
		left: 10px
		width: 180px
	.action
		position: absolute
		top: 16px
		right: 5px
		line-height: 14px
		.el-icon-more
			transform: rotate(90deg)
			font-size: 10px
			color: #999
	.add
		background-color: #f9f9f9
		border-right: 1px solid #f0f0f0
		padding: 10px 30px
		button
			width: 100%
			padding-left: 25px
			i
				padding-left: 3px
				transform: scale(.8)
		&-step
			border-top: 1px solid #f0f0f0
		span
			padding-left: 3px
	.b
		flex: 1
		background-color: #f9f9f9
		border-right: 1px solid #f0f0f0
</style>
