<template lang="pug">
.friends
	el-tag(
		v-for="friend in model"
		:key="friend.id"
		closable
		@close="handleClose(friend)"
	) {{ friend.name }}
	el-input.input-new-tag(
		v-if="inputVisible"
		v-model="inputValue"
		ref="saveTagInput"
		size="small"
		@keyup.enter.native="handleInputConfirm"
		@blur="handleInputConfirm"
	)
	el-button.button-new-tag(
		v-else
		size="small"
		@click="showInput"
	) + New Friend
</template>

<script>
export default {
	props: ['model'],

	data() {
		return {
			dynamicTags: ['标签一', '标签二', '标签三'],
			inputVisible: false,
			inputValue: ''
		}
	},

	methods: {
		handleClose(tag) {
			this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
		},

		showInput() {
			this.inputVisible = true
			this.$nextTick(_ => {
				this.$refs.saveTagInput.$refs.input.focus()
			})
		},

		handleInputConfirm() {
			let inputValue = this.inputValue
			if (inputValue) this.dynamicTags.push(inputValue)
			this.inputVisible = false
			this.inputValue = ''
		}
	}
}
</script>

<style lang="sass">
.el-tag
	margin-right: 10px
.button-new-tag
	height: 32px
	line-height: 30px
	padding-top: 0
	padding-bottom: 0
.input-new-tag
	width: 120px
	vertical-align: bottom
</style>
