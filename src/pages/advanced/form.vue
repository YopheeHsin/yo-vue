<template lang="pug">
el-container
	side-bar(:config="asideConfig" @change="onAsideChange")
	el-main
		main-form(:model="formModel" @update="onFormUpdate")
</template>

<script>
import SideBar from './form/side-bar'
import MainForm from './form/main-form'
import { list } from './form/list'
export default {
	components: { SideBar, MainForm },

	data() {
		return {
			list,
			activeItemIndex: '',
			formModel: {}
		}
	},

	computed: {
		asideConfig() {
			return this.list.map(item => {
				return {
					id: item.id,
					name: item.name,
					friendsNum: item.friends.length
				}
			})
		}
	},

	methods: {
		setFormModel(index) {
			if (this.activeItemIndex === index) return
			this.activeItemIndex = index
			this.formModel = this.list[index]
		},

		onAsideChange(index) {
			this.setFormModel(index)
		},

		onFormUpdate(formData) {
			this.$set(this.list, this.activeItemIndex, formData)
			// this.list.splice(this.activeItemIndex, 1, formData)
		}
	},

	created() {
		this.setFormModel(0)
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
.el-main
	padding: 30px 50px
</style>
