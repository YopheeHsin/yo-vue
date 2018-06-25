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
					step_id: taskId + '_pre_step'
				}]

				task.steps.forEach(step => {
					steps.push({
						name: step.name,
						step_id: step.step_id
					})
				})

				list.push({
					name: task.name,
					steps
				})
			})
			return list
		}
	},

	mutations: {
		[TASKS.UPDATE](state, {
			name,
			index
		}) {
			state.tasks[index].name = name
		},
		[TASKS.INIT](state, {
			tasks
		}) {
			state.tasks = tasks
		}
	}
}
