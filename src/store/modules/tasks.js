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
				const taskId = 'task_' + (+new Date())
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
