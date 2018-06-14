import Index from './index'
import Tabs from './tabs'
import Form from './form'
import DragDrop from './drag-drop'
import Echarts from './echarts'

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
	}]
}]
