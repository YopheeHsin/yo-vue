import Mock from 'mockjs'
const Random = Mock.Random

export default [{
	name: '工序1',
	pre_step: {
		work_info: {
			id: ''
		}
	},
	steps: [{
		name: '步骤1',
		id: Random.guid(),
		type: 'manual',
		frequency: {
			times: 1,
			rounds: ['T1'],
			rate: 'noInterval',
			rate_info: {
				num: '',
				unit: 'day'
			},
			time_range: [1, 1]
		}
	}]
}, {
	name: '工序2',
	pre_step: {
		work_info: {
			id: ''
		}
	},
	steps: [{
		name: '步骤1',
		id: Random.guid(),
		type: 'automatic',
		frequency: {
			times: 2,
			rounds: ['T1', 'T2'],
			rate: 'sameInterval',
			rate_info: {
				num: '1',
				unit: 'day'
			},
			time_range: [1, 1]
		}
	}]
}]
