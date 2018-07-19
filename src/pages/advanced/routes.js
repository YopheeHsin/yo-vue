import Index from './index'
import Tabs from './tabs'
import Form from './form'
import DragDrop from './drag-drop'
import Echarts from './echarts'
import Lifecycle from './lifecycle'
import lifecycleRoutes from './lifecycle/routes'
import Complexity from './complexity'
import Directive from './directive'
import Reactivity from './reactivity'

const nestedRoutesComponent = {
	template: '<router-view />'
}

export default [{
	path: '/advanced',
	component: nestedRoutesComponent,
	children: [{
		path: '',
		component: Index
	}, {
		path: 'tabs',
		component: Tabs,
		meta: {
			label: 'Tabs标签页增删改'
		}
	}, {
		path: 'form',
		component: Form,
		meta: {
			label: '多层表单传值'
		}
	}, {
		path: 'drag-drop',
		component: DragDrop,
		meta: {
			label: '拖放+Vuex状态管理'
		}
	}, {
		path: 'echarts',
		component: Echarts,
		meta: {
			label: 'ECharts图表'
		}
	}, {
		path: 'lifecycle',
		component: Lifecycle,
		meta: {
			label: '生命周期'
		},
		children: lifecycleRoutes
	}, {
		path: 'complexity',
		component: Complexity,
		meta: {
			label: '复杂状态管理'
		}
	}, {
		path: 'directive',
		component: Directive,
		meta: {
			label: '自定义指令'
		}
	}, {
		path: 'reactivity',
		component: Reactivity,
		meta: {
			label: '检测数据变化'
		}
	}]
}]
