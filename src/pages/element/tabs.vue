<template lang="pug">
.editable-tabs
	el-popover(v-model="visible.editQueue" placement="bottom")
		el-input(v-model="activeIndex")
		el-button(type="primary" @click="confirmEditQueue" :loading="loading.editQueue") 确定
		el-button(@click="visible.editQueue = false") 取消
	el-tabs.project-tabs(v-model="activeIndex", type="card")
		el-tab-pane(v-for="(queue, index) in queues" :key="index" :label="queue.name")
			.project-tab__name(slot="label")
				| {{ queue.name }}
				el-dropdown.project-tab__action
					i.el-icon-more
					el-dropdown-menu(slot="dropdown")
						el-dropdown-item(@click.native="editQueue(queue, index)") 编辑
						el-dropdown-item(
							v-if="queues.length > 1"
							@click.native="deleteQueue(queue, index)"
						) 删除
		el-tab-pane
			.project-tab__name--add(slot='label' @click.stop="addQueue(queues.length)")
				i.el-icon-plus
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '0',
			queues: [{
				name: '燕草如碧丝'
			}, {
				name: '秦桑低绿枝'
			}, {
				name: '当君怀归日'
			}, {
				name: '是妾断肠时'
			}],
			loading: {
				editQueue: false
			},
			visible: {
				editQueue: true
			}
		}
	},

	methods: {
		deleteQueue (queue, index) {
			this.$confirm(`确认删除${queue.name}?`).then(() => {
				this.queues.splice(index, 1)
			})
		},
		addQueue (length) {
			this.queues.push({
				name: 'new' + (length + 1)
			})
		},
		confirmEditQueue () {

		}
	}
}
</script>

<style lang="sass">
.project-tabs
	margin: 50px
.project-tab
	&__name
		display: inline-block
		min-width: 100px
		max-width: 150px
		text-align: center
		overflow: hidden
		text-overflow: ellipsis
		white-space: nowrap
		&--add
			width: 30px
			height: 40px
			text-align: center
			overflow: hidden
	&__action
		position: absolute
		top: 0
		right: 5px
		display: none
		.el-icon-more
			transform: rotate(90deg)
			color: #999
//覆盖
.el-tabs__nav
	height: 41px
	overflow: hidden
.el-tabs__item
	background-color: #f9f9f9
	user-select: none
	&.is-active
		height: 41px
		background-color: #fff
		.project-tab__action
			display: block
	&:last-child
		padding: 0!important
</style>
