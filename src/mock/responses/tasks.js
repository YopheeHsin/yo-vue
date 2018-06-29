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
			round: [''],
			rate: 'sameInterval',
			rate_info: {
				num: '1',
				unit: 'day'
			},
			time_range: [2, 2]
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
			times: 1,
			round: [''],
			rate: 'sameInterval',
			rate_info: {
				num: '1',
				unit: 'day'
			},
			time_range: [2, 2]
		}
	}]
}]
