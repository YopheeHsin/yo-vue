<template lang="pug">
.flextree-container
	svg
</template>

<script>
import * as d3 from 'd3'
import { flextree } from 'd3-flextree'

export default {
	// components: { DragPanel, DropPanel },

	data() {
		return {
			container: null
		}
	},

	methods: {
		draw(data) {
			this.setCanvasContainer()

			const layout = flextree()
			const tree = layout.hierarchy(data)
			layout(tree)

			console.log(tree)

				// .nodeSize(node => {
				// 	return [node.width || 1, node.height || 1]
				// })

			// let node = hierarchy.descendants()

			this.nodeEnter(tree)
		},

		setCanvasContainer() {
			const flextreeContainer = document.querySelector('.flextree-container')
			const svg = d3.select('svg')
				.attr('width', flextreeContainer.clientWidth)
				.attr('height', flextreeContainer.clientHeight)
			this.container = svg.append('g')
		},

		// nodeInit(node) {
		// 	let nodeEnter = this.nodeEnter(node)
		// 	// this.nodeUpdate(node.merge(nodeEnter))
		// 	// this.nodeExit(node, source)
		// },

		nodeEnter(node) {
			let nodeEnter = node
				.enter()
				.append('g')
				.attrs('transform', node => `translate(${node.y}, ${node.x})`)
		}
	},

	mounted() {
		this.$http.get('/tree').then(res => {
			this.draw(res.data || {})
		})
	},
}
</script>

<style lang="sass" scoped>
.flextree-container
	position: absolute
	top: 30px
	right: 30px
	bottom: 30px
	left: 30px
</style>
