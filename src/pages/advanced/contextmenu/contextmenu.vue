<template lang="pug">
.contextmenu-list(v-if="visible" :style="style" v-clickoutside="hide")
	.contextmenu-item(
		v-for="item in config"
		:key="item.command"
		@click="onClick(item.command)"
	) {{ item.label }}
</template>

<script>
import clickoutside from './clickoutside'

export default {
	props: ['config'],

	directives: { clickoutside },

	data() {
		return {
			visible: false,
			style: {},
			data: null
		}
	},

	methods: {
		show(row, event) {
			event.preventDefault()
			this.data = row
			this.style = {
				left: (event.clientX - 3) + 'px',
				top: (event.clientY - 3) + 'px'
			}
			this.visible = true
		},

		hide() {
			this.visible = false
			this.data = null
		},

		onClick(command) {
			this.$emit('command', command, this.data)
			this.hide()
		}
	}
}
</script>

<style lang="sass" scoped>
.contextmenu
	&-list
		position: fixed
		min-width: 100px
		background-color: #f9f9f9
		border: 1px solid #f0f0f0
		border-radius: 3px
		box-shadow: 0 0 5px #e6e6e6
	&-item
		line-height: 34px
		padding: 0 10px
		border-top: 1px solid #f0f0f0
		font-size: 14px
		text-align: center
		cursor: pointer
		&:first-child
			border-top-width: 0
		&:hover
			background-color: #f0f0f0
</style>
