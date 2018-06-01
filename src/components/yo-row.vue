<template lang="pug">
.yo-row(:style="style")
	slot
</template>

<script>
export default {
	name: 'yo-row',

	props: {
		gutter: {
			type: [Number, String],
			default: 0
		}
	},

	computed: {
		style() {
			const margin = `-${Number(this.gutter) / 2}px`
			return this.gutter ?
				{ marginLeft: margin, marginRight: margin } : {}
		}
	}
}
</script>

<style lang="sass">
.yo-row
	&::after
		content: ""
		display: table
		clear: both
</style>
