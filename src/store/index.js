import Vue from 'vue'
import Vuex from 'vuex'

import drag from './modules/drag'
import collections from './modules/collections'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		drag,
		collections,
		tasks
	},
	strict: process.env.NODE_ENV !== 'production'	// eslint-disable-line
})
