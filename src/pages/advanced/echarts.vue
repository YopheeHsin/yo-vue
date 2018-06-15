<template lang="pug">
.container
	.title
		p Front-end Frameworks Usage
		el-tooltip(effect="light" :visible-arrow="false")
			div(slot="content")
				yo-icon(
					v-for="type in typeList"
					:key="type"
					:name="type"
					:class="{ active: activeType === type }"
					@click="setChartType(type)"
				)
			yo-icon(name="gear")
	.chart(ref="chart" v-show="activeType !== 'table'")
	.table(v-show="activeType === 'table'")
		el-table(
			:data="tableData"
			style="width: 100%"
			max-height="350"
			size="mini"
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
</template>

<script>
import echarts from 'echarts'
import YoIcon from '../../components/yo-icon'

export default {
	components: { YoIcon },

	data() {
		return {
			frameworks: {},
			typeList: ['bar-chart', 'pie-chart', 'table'],
			activeType: 'pie-chart',
			onResizeDebounce: this._.debounce(this.onResize, 300)
		}
	},

	computed: {
		tableData() {
			const _ = this._
			const total = _.sum(_.values(this.frameworks))

			const dt = []
			_.forEach(this.frameworks, (v, k) => {
				dt.push({
					name: k,
					value: v,
					percentage: ((v / total) * 100).toFixed(2) + '%'
				})
			})
			return dt
		},

		barChartData() {
			const x = [], y = []
			this._.forEach(this.frameworks, (v, k) => {
				x.push(k)
				y.push(v)
			})
			return { x, y }
		}
	},

	methods: {
		draw() {
			const type = this.activeType
			let chart = this.getChartInstance()
			if (chart) chart.dispose()

			if (type === 'table') return

			chart = this.getChartInstance()
			if (!chart) return

			if (type === 'bar-chart') {
				chart.setOption({
					xAxis: {
						type: 'category',
						data: this.barChartData.x,
						axisLabel: {
							interval: 0,
							rotate: 30
						}
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						type: 'bar',
						data: this.barChartData.y,
						barMaxWidth: 18
					}]
				})
				return
			}

			if (type === 'pie-chart') {
				chart.setOption({
					tooltip : {
						trigger: 'item',
						formatter: '{b} {d}%'
					},
					series: [{
						type: 'pie',
						radius: ['50%', '60%'],
						data: this.tableData
					}]
				})
				return
			}
		},

		getChartInstance() {
			const el = this.$refs.chart
			let chart

			if (!el) {
				chart = null
			} else {
				chart = echarts.getInstanceByDom(el) || echarts.init(el)
			}

			return chart
		},

		setChartType(type) {
			if (this.activeType === type) return
			this.activeType = type
			this.$nextTick(this.draw)
		},

		onResize() {
			const chart = this.getChartInstance()
			if (!chart) return
			chart.resize()
		},

		bindResizeEvent () {
			window.addEventListener('resize', this.onResizeDebounce)
		},

		unbindResizeEvent () {
			window.removeEventListener('resize', this.onResizeDebounce)
		}
	},

	mounted() {
		this.$http.get('/frameworks').then(res => {
			this.frameworks = res.data
			this.draw()
		})

		this.bindResizeEvent()
	},

	beforeDestroy() {
		this.unbindResizeEvent()
	}
}
</script>

<style lang="sass">
body
	background-color: #f9f9f9
.container
	box-sizing: border-box
	max-width: 600px
	min-width: 400px
	margin: 50px auto
	padding: 10px 30px
	background: #fff
	box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)
	.title
		position: relative
		p
			text-transform: uppercase
		.yo-icon
			position: absolute
			top: 2px
			right: 0
			color: #aaa
			font-size: 17px
	.chart, .table
		height: 350px
@media (max-width: 700px)
	.container
		margin: 50px
.el-tooltip__popper.is-light
	transform: translateY(-8px)
	border-color: #f0f0f0
	.yo-icon
		vertical-align: middle
		color: #aaa
		cursor: pointer
		&.active
			color: inherit
		& + .yo-icon
			margin-left: 6px

</style>
