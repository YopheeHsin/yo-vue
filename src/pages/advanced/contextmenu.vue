<template lang="pug">
.contextmenu-container
	el-table(
		v-loading="loading"
		:data="frameworks"
		style="width: 100%"
		@row-contextmenu="onRowContextmenu"
	)
		el-table-column(
			prop="name"
			label="FRAMEWORK"
			align="center"
		)
		el-table-column(
			prop="value"
			label="NUMBER"
			align="center"
		)
		el-table-column(
			prop="percentage"
			label="PERCENTAGE"
			align="center"
		)
	Contextmenu(
		ref="contextmenu"
		:config="contextmenuConfig"
		@command="onContextmenu"
	)
</template>

<script>
import Contextmenu from './contextmenu/contextmenu'

export default {
	components: { Contextmenu },

	data() {
		return {
			loading: true,
			frameworks: [],
			contextmenuConfig: [{
				command: 'detail',
				label: '查看'
			}, {
				command: 'edit',
				label: '编辑'
			}]
		}
	},

	methods: {
		onRowContextmenu(row, event) {
			this.$refs.contextmenu && this.$refs.contextmenu.show(row, event)
		},

		onContextmenu(command, row) {
			this.$message(command.toUpperCase() + ' - ' + row.name)
		}
	},

	created() {
		const _this = this
		const _ = _this._
		_this.$http.get('/frameworks').then(res => {
			const data = _.get(res, 'data', {})
			const total = _.sum(_.values(data))
			_.forEach(data, (v, k) => {
				_this.frameworks.push({
					name: k,
					value: v,
					percentage: ((v / total) * 100).toFixed(2) + '%'
				})
			})
			_this.loading = false
		})
	}
}
</script>
