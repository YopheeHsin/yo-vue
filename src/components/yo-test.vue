<template>
<div class="yo-test" @click="handleClick">add</div>
</template>

<script>
export default {
	props: {
		value: Number
	},

	methods: {
		handleClick() {
			let _value = this.value + 1
			this.$emit('input', _value)
		}
	}
}
</script>

<style lang="less">
.yo-test {
	width: 100px;
	line-height: 100px;
	background-color: #f0f0f0;
	text-align: center;
	user-select: none;
}
</style>
