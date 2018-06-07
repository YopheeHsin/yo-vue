import Vue from 'vue'
import Router from 'vue-router'
import baseRoutes from './routes'
import elementRoutes from '../pages/element/routes'

Vue.use(Router)

const routes = baseRoutes.concat(elementRoutes)

export default new Router({
	routes,
	// mode: 'history'
})
