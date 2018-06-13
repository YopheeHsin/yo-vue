<template lang="pug">
el-row
	el-col(:span="11" :offset="4")
		drop-panel
	el-col(:span="5")
		drag-panel(:list="list")
</template>

<script>
import DragPanel from './drag-drop/drag-panel'
import DropPanel from './drag-drop/drop-panel'
import { list } from './drag-drop/list'

export default {
	components: { DragPanel, DropPanel },

	data() {
		return {
			list: this._.shuffle(list)
		}
	}
}
</script>

<style lang="sass">
.el-col
	height: 100vh
	background-color: #f9f9f9
	overflow: scroll
	& + .el-col
		background-color: #f0f0f0
</style>
