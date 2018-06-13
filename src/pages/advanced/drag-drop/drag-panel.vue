<template lang="pug">
ul.list
	li(
		v-for="(item, index) in list"
		:key="index"
	)
		drag(
			:transfer-data="item"
			@dragstart="setDragType(item.type)"
			@dragend="setDragType(null)"
		)
			.drag-wrapper
				icon
				| {{ item.title }}
			div.drag-content(slot="image")
				| {{ item.title }}
				p {{ item.content }}
</template>

<script>
import { mapMutations } from 'vuex'
import { Drag } from 'vue-drag-drop'
import Icon from './icon'

export default {
	components: { Drag, Icon },

	props: {
		list: Array
	},

	methods: {
		...mapMutations({
			setDragType: 'DRAG_TYPE'
		})
		// setDragType(type) {
		// 	this.$store.commit('DRAG_TYPE', type)
		// }
	}
}
</script>

<style lang="sass" scoped>
.list
	margin: 20px
	li
		display: inline-block
		margin: 5px
		background: #fff
		border: 1px solid #e6e6e6
		border-radius: 3px
		font-size: 14px
		cursor: pointer
		.drag-wrapper
			position: relative
			line-height: 16px
			padding: 6px 15px 6px 22px
			svg
				position: absolute
				left: 3px
		.drag-content
			width: 200px
			padding: 10px 15px 0
			background: #fff
			border: 1px solid #e6e6e6
			border-radius: 3px
			p
				line-height: 2
				font-size: 12px
				color: #666
</style>
