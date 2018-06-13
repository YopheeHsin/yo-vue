<template lang="pug">
.drop-container
	drop.drop-wrapper(
		v-for="(v, k) in collections"
		:key="k"
		:class="{ active: k === dragType, passive: dragType && k !== dragType }"
		@dragover="handleDragover(k, ...arguments)"
		@drop="handleDrop"
	)
		h2 {{ v.des }}收藏：
		ul
			li(
				v-for="(item, index) in v.list"
				:key="index"
			) {{ item }}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Drop } from 'vue-drag-drop'

export default {
	components: { Drop },

	computed: {
		...mapGetters(['collections', 'dragType'])
	},

	methods: {
		...mapMutations({
			addCollection: 'COLLECTIONS_ADD'
		}),

		handleDragover(type, data, event) {
			if (type !== data.type) {
				event.dataTransfer.dropEffect = 'none'
			}
		},

		handleDrop({ title }) {
			const list = this.collections[this.dragType].list
			if (list.indexOf(title) === -1) {
				this.addCollection({
					type: this.dragType,
					title
				})
			} else {
				this.$message.warning('重复收藏')
			}
		}
	}
}
</script>

<style lang="sass">
.drop-container
	display: flex
	flex-direction: column
	height: 100vh
.drop-wrapper
	flex: 1
	margin: 25px
	padding: 0 15px
	background: #fff
	border: 1px solid #e6e6e6
	border-radius: 3px
	overflow: scroll
	& + .drop-wrapper
		margin-top: 0
	h2
		font-size: 12px
		color: #ccc
		font-weight: normal
	li
		display: inline-block
		padding-right: 1em
		line-height: 1.8
		font-size: 14px
		&::after
			content: ','
		&:last-child::after
			content: ''
	&.active
		box-shadow: 0 0 5px #e6e6e6
	&.passive
		opacity: 0.3
</style>
