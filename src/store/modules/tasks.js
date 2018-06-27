import { TASKS } from '../types'

export default {
	state: {
		tasks: []
	},

	getters: {
		tasks: state => state.tasks,
		brief: state => {
			const list = []
			state.tasks.forEach((task, index) => {
				const taskId = 'task_' + index
				const steps = [{
					name: '前置步骤',
					id: taskId + '_pre_step'
				}]

				task.steps.forEach(step => {
					steps.push({
						name: step.name,
						id: step.id
					})
				})

				list.push({
					name: task.name,
					id: taskId,
					steps
				})
			})
			return list
		}
	},

	mutations: {
		[TASKS.INIT](state, {
			tasks
		}) {
			state.tasks = tasks
		},
		[TASKS.UPDATETASKNAME](state, {
			index,
			name
		}) {
			state.tasks[index].name = name
		},
		[TASKS.UPDATESTEPNAME](state, {
			task_index,
			step_index,
			name
		}) {
			state.tasks[task_index].steps[step_index - 1].name = name
		},
	}
}
