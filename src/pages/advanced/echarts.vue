<template lang="pug">
.container
	.title
		p Front-end Frameworks Usage
		el-tooltip(placement="bottom")
			div(slot="content")
				|多行信息
			yo-icon(name="gear")
	.chart temp

</template>

<script>
import YoIcon from '../../components/yo-icon'

export default {
	components: { YoIcon },

	data() {
		return {
			data: {}
		}
	},

	methods: {

	},

	mounted() {
		this.$http.get('/frameworks').then(res => {
			this.data = res
		})
	}
}
</script>

<style lang="sass">
body
	background-color: #f9f9f9
.container
	box-sizing: border-box
	max-width: 1000px
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
			top: 0
			right: 0
			color: #999
	.chart
		height: 300px
@media (max-width: 1100px)
	.container
		margin: 50px
</style>


React: 63
Vue: 50
No Framework: 27
Angular 2: 14
Angular: 14
Backbone: 6
Polymer: 3
Ember: 2

