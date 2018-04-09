import App from '../App'
import Loading from '../pages/loading'
import Icon from '../pages/icon'
import Stepper from '../pages/stepper'
import Collapse from '../pages/collapse'
import Test from '../pages/test'

export default [{
	path: '/',
	component: App
},{
	path: '/loading',
	component: Loading
},{
	path: '/icon',
	component: Icon
},{
	path: '/stepper',
	component: Stepper
},{
	path: '/collapse',
	component: Collapse
},{
	path: '/test',
	component: Test
}]
