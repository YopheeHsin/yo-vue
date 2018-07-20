<template lang="pug">
.directive-container
	el-button(size="mini" @click="dialogVisible = true") open dialog
	dragable-dialog.dragable-dialog(v-if="dialogVisible" @close="dialogVisible = $event")
</template>

<script>
import drug from './directives/drag'

const DragableDialog = {
	directives: { drug },
	props: {
		visible: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			drugConfig: {
				handler: '.el-dialog__header',
				target: '.el-dialog'
			}
		}
	},
	template: `
		<el-dialog
			v-drug="drugConfig"
			title="Dialog"
			:visible="true"
			@close="$emit('close', false)"
			:close-on-click-modal="false"
			append-to-body
		>double click to reset</el-dialog>
	`
}

export default {
	components: { DragableDialog },

	data() {
		return {
			dialogVisible: false
		}
	}
}
</script>

<style lang="sass" scoped>
.dragable-dialog /deep/
	.el-dialog
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		margin: 0!important
		width: 500px
		height: 300px
	.el-dialog__header
		background-color: #f9f9f9
		padding: 20px
</style>
