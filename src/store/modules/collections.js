import { COLLECTIONS } from '../types'

export default {
	state: {
		collections: {
			t: {
				des: '唐诗',
				list: []
			},
			s: {
				des: '宋词',
				list: []
			}
		}
	},

	getters: {
		collections: state => state.collections
	},

	mutations: {
		[COLLECTIONS.ADD](state, { type, title }) {
			state.collections[type].list.push(title)
		}
	}
}
