import Index from './index'
import Tabs from './tabs'

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
		}
	]
}]
