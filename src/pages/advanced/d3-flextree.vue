<!-- <template lang="pug">
.flextree-container
	svg
		g.links
		g.nodes
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



			const layout1 = flextree()
			const tree1 = layout1.hierarchy(JSON.parse(JSON.stringify(data)))
			console.log(tree1)

			const tree2 = d3.hierarchy(JSON.parse(JSON.stringify(data)))
			console.log(tree2)



			// layout(tree)
			// console.log(tree)

			// .nodeSize(node => {
			// 	return [node.width || 1, node.height || 1]
			// })

			// let node = hierarchy.descendants()
			// this.nodeEnter(tree)

			// var root = d3.hierarchy(data)
			// var treeLayout = d3.tree()
			// treeLayout.size([400, 200])
			// treeLayout(root)

			// d3.select('svg g.nodes')
			// 	.selectAll('circle.node')
			// 	.data(root.descendants())
			// 	.enter()
			// 	.append('circle')
			// 	.classed('node', true)
			// 	.attr('cx', function(d) {return d.x})
			// 	.attr('cy', function(d) {return d.y})
			// 	.attr('r', 4)

			// d3.select('svg g.links')
			// 	.selectAll('line.link')
			// 	.data(root.links())
			// 	.enter()
			// 	.append('line')
			// 	.classed('link', true)
			// 	.attr('x1', function(d) {return d.source.x})
			// 	.attr('y1', function(d) {return d.source.y})
			// 	.attr('x2', function(d) {return d.target.x})
			// 	.attr('y2', function(d) {return d.target.y})
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
	/deep/ .node
		fill: steelblue
		stroke: none
	/deep/ .link
		fill: none
		stroke: #ccc
		stroke-width: 1px
</style>
 -->
