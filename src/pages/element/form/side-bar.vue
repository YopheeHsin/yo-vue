<template lang="pug">
el-aside(width="200px")
	ul
		li(
			v-for="(item, index) in config"
			:key="item.id"
			:class="{ active: item.id === activeItemId }"
			@click="onClick(index)"
		) {{ item.name }}
</template>

<script>
export default {
	props: {
		config: Array
	},

	data() {
		return {
			activeItemId: ''
		}
	},

	methods: {
		onClick(index) {
			this.activeItemId = this.config[index].id
			this.$emit('change', index)
		}
	},

	created() {
		this.activeItemId = this.config[0].id
	}
}
</script>

<style lang="sass">
.el-aside
	height: 100vh
	border-right: 1px solid #f0f0f0
	li
		line-height: 50px
		background-color: #f9f9f9
		border-bottom: 1px solid #f0f0f0
		text-indent: 20px
		font-size: 14px
		text-transform: uppercase
		cursor: pointer
		&.active
			background-color: #fff
</style>
