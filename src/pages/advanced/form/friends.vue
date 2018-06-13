<template lang="pug">
.friends
	el-tag(
		v-for="(friend, index) in friends"
		:key="index"
		:disable-transitions="true"
		closable
		@close="handleClose(index)"
	) {{ friend }}
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
	props: {
		value: Array
	},

	data() {
		return {
			friends: [].concat(this.value),
			inputVisible: false,
			inputValue: ''
		}
	},

	watch: {
		value(val) {
			this.friends = [].concat(val)
			// this.friends = val.slice(0)
		}
	},

	methods: {
		update() {
			this.$emit('input', this.friends)
		},

		handleClose(index) {
			this.friends.splice(index, 1)
			this.update()
		},

		showInput() {
			this.inputVisible = true
			this.$nextTick(() => {
				this.$refs.saveTagInput.$refs.input.focus()
			})
		},

		handleInputConfirm() {
			let inputValue = this.inputValue.trim()
			if (inputValue) {
				this.friends.push(inputValue)
				this.update()
			}
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
