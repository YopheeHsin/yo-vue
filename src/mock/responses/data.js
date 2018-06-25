import Mock from 'mockjs'
const Random = Mock.Random

const frameworks = {
	React: 63,
	Vue: 50,
	'No Framework': 27,
	'Angular 2': 14,
	Angular: 14,
	Backbone: 6,
	Polymer: 3,
	Ember: 2
}

const tasks = [{
	name: Random.cword(3),
	type: '',
	pre_step: {
		work_info: {}
	},
	steps: [{
		name: Random.cword(3),
		step_id: Random.guid(),
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

export { frameworks, tasks }
