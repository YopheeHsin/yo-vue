<template lang="pug">
.complexity
	side-bar
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SideBar from './complexity/side-bar'

export default {
	components: { SideBar },

	data() {
		return {
			a: ''
		}
	},

	computed: {
		...mapGetters(['tasks'])
	},

	methods: {
		...mapMutations({
			init: 'TASKS_INIT',
			update: 'TASKS_UPDATE'
		}),

		onClick() {
			this.update({
				name: 'new',
				index: 0
			})
		}
	},

	mounted() {
		this.$http.get('/tasks').then(res => {
			this.init({
				tasks: res.data
			})
		})
	}
}
</script>

<style lang="sass" scoped>
.complexity
	margin: 30px
</style>
