import Vue from 'vue'
import Vuex from 'vuex'
import drag from './modules/drag'
import collections from './modules/collections'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		drag,
		collections
	},
	strict: process.env.NODE_ENV !== 'production'	// eslint-disable-line
})
