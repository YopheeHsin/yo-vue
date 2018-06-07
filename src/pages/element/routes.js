import Index from './index'
import Tabs from './tabs'

export default [{
	path: '/element',
	component: Index
},{
	path: '/element/tabs',
	component: Tabs,
	meta: {
		label: 'Tabs标签页动态增减'
	}
}]
