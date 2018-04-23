export default {
	functional: true,
	props: {
		node: Array
	},
	render(h, ctx) {
		return ctx.props.node
	}
}
