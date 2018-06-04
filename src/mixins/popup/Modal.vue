<template lang="pug">
	transition(name="yo-fade")
		.yo-modal(
			v-show="visible"
			:class="className"
			:style="style"
			@touchmove.prevent.stop
			@click="$emit('click', $event)"
		)
</template>

<script>
export default {
	name: 'modal',

	props: {
		visible: Boolean,
		zIndex: Number,
		className: String,
		customStyle: Object
	},

	computed: {
		style() {
			return {
				zIndex: this.zIndex,
				...this.customStyle
			}
		}
	}
}
</script>
