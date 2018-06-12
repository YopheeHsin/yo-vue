import { DRAG } from '../types'

export default {
	state: {
		dragType: null
	},

	getters: {
		dragType: state => state.dragType
	},

	mutations: {
		[DRAG.TYPE](state, dragType) {
			state.dragType = dragType
		}
	}
}
