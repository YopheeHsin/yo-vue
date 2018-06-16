import RouterComponent from './router-component'
import CachedRouterComponent from './cached-router-component'

export default [{
	path: '',
	redirect: 'router-component'
}, {
	path: 'router-component',
	component: RouterComponent
}, {
	path: 'cached-router-component',
	component: CachedRouterComponent
}]
