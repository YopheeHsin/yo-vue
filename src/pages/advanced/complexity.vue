<template lang="pug">
el-container.complexity
	side-bar
	el-main
		main-form
</template>

<script>
import { mapMutations } from 'vuex'
import SideBar from './complexity/side-bar'
import MainForm from './complexity/main-form'

export default {
	components: { SideBar, MainForm },

	data() {
		return {

		}
	},

	methods: {
		...mapMutations({
			init: 'TASKS_INIT',
			dispose: 'TASKS_DISPOSE'
		})
	},

	created() {
		this.$http.get('/tasks').then(res => {
			this.init({
				tasks: res.data
			})
		})
	},

	destroyed() {
		this.dispose()
	}
}
</script>
