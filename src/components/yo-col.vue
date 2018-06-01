<template lang="pug">
.yo-col(
	:class="{
		[`yo-col-${span}`]: span,
		[`yo-col-offset-${offset}`]: offset
	}"
	:style="style"
)
	slot
</template>

<script>
export default {
	name: 'yo-col',

	props: {
		span: [Number, String],
		offset: [Number, String]
	},

	computed: {
		gutter() {
			return (this.$parent && this.$parent.gutter) || 0
		},

		style() {
			const padding = `${this.gutter / 2}px`
			return this.gutter ?
				{ paddingLeft: padding, paddingRight: padding } : {}
		}
	}
}
</script>

<style lang="sass">
.yo-col
	float: left
	box-sizing: border-box

@for $i from 1 to 24
  .yo-col-$i
  		width: calc($i * 100% / 24)
  .yo-col-offset-$i
  		margin-left: calc($i * 100% / 24)
</style>
