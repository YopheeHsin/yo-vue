import { TASKS } from '../types'
import Vue from 'vue'

export default {
	state: {
		baseInfo: [],
		stepsBus: {},
		activeStepId: ''
	},

	getters: {
		baseInfo: state => state.baseInfo,
		activeStepId: state => state.activeStepId,
		activeStep: state => state.stepsBus[state.activeStepId]
	},

	mutations: {
		[TASKS.INIT](state, {
			tasks
		}) {
			tasks.forEach((task, index) => {
				const taskId = 'task_' + index
				const preStepId = taskId + '_pre_step'

				const steps = [{
					name: '前置步骤',
					id: preStepId
				}]
				// state.stepsBus[preStepId] = task.pre_step
				Vue.set(state.stepsBus, preStepId, task.pre_step)
				if(!index) state.activeStepId = preStepId

				task.steps.forEach(step => {
					steps.push({
						name: step.name,
						id: step.id
					})
					// state.stepsBus[step.id] = {
					// 	type: step.type,
					// 	frequency: step.frequency
					// }
					Vue.set(state.stepsBus, step.id, {
						type: step.type,
						frequency: step.frequency
					})
				})

				state.baseInfo.push({
					name: task.name,
					id: taskId,
					steps
				})
			})
		},

		[TASKS.DISPOSE](state) {
			state.baseInfo = []
			state.stepsBus = {}
			state.activeStepId = ''
		},

		[TASKS.SET_ACTIVE_STEP_ID](state, {
			id
		}) {
			state.activeStepId = id
		},

		[TASKS.UPDATE_TASK_NAME](state, {
			task_index,
			name
		}) {
			state.baseInfo[task_index].name = name
		},

		[TASKS.UPDATE_STEP_NAME](state, {
			task_index,
			step_index,
			name
		}) {
			state.baseInfo[task_index].steps[step_index].name = name
		},

		[TASKS.ADD_TASK](state) {
			const timestamp = +new Date()
			const taskId = 'new_task_' + timestamp
			const preStepId = taskId + '_pre_step'
			state.baseInfo.push({
				name: '工序' + (state.baseInfo.length + 1),
				id: taskId,
				steps: [{
					name: '前置步骤',
					id: preStepId
				}]
			})
			Vue.set(state.stepsBus, preStepId, {
				work_info: {
					id: ''
				}
			})
			state.activeStepId = preStepId
		},

		[TASKS.ADD_STEP](state, {
			task_index
		}) {
			const timestamp = +new Date()
			const stepId = 'new_step_' + timestamp
			state.baseInfo[task_index].steps.push({
				name: '步骤' + (state.baseInfo[task_index].steps.length),
				id: stepId
			})
			state.stepsBus[stepId] = {
				type: 'manual',
				frequency: {
					times: 1,
					round: [''],
					rate: 'sameInterval',
					rate_info: {
						num: '1',
						unit: 'day'
					},
					time_range: [2, 2]
				}
			}
			state.activeStepId = stepId
		},

		[TASKS.SET_PRE_STEP](state, {
			work_info_id
		}) {
			state.stepsBus[state.activeStepId].work_info.id = work_info_id
		},
	}
}
