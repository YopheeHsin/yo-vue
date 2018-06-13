import Vue from 'vue'
import Router from 'vue-router'
import baseRoutes from './routes'
import advancedRoutes from '../pages/advanced/routes'

Vue.use(Router)

const routes = baseRoutes.concat(advancedRoutes)

export default new Router({
	routes,
	// mode: 'history'
})
