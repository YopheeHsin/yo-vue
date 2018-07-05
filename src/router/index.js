import Vue from 'vue'
import Router from 'vue-router'
import baseRoutes from './routes'
import advancedRoutes from '../pages/advanced/routes'

Vue.use(Router)

const routes = baseRoutes.concat(advancedRoutes)

const router = new Router({
	routes,
	// mode: 'history'
})

router.afterEach(to => {
	const title = to.meta && to.meta.label || 'yo-vue'
	document.title = title
	window.scrollTo(0, 0)
})

export default router
