import Index from './index'
import Tabs from './tabs'
import Form from './form'

const nestedRoutesComponent = {
	template: '<router-view />'
}

export default [{
	path: '/element',
	component: nestedRoutesComponent,
	children: [
		{
			path: '',
			component: Index
		},
		{
			path: 'tabs',
			component: Tabs,
			meta: {
				label: 'Tabs标签页增删改'
			}
		},
		{
			path: 'form',
			component: Form,
			meta: {
				label: '多层表单传值'
			}
		}
	]
}]
