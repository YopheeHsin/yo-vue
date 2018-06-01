<template>
.yo-switch(
	:class="{
		'yo-switch--on': value,
		'yo-switch--disabled': disabled
	}"
	:style="style"
	@click="onClick"
)
	.yo-switch__node
		yo-loading(v-if="loading" class="yo-switch__loading")
</template>

<script>
import YoLoading from './yo-loading'

export default {
	name: 'yo-switch',

	components: { YoLoading },

	props: {
		value: Boolean,
		loading: Boolean,
		disabled: Boolean,
		size: {
			type: String,
			default: '30px'
		}
	},

	computed: {
		style() {
			return {
				fontSize: this.size
			}
		}
	},

	methods: {
		onClick() {
			if (!this.disabled && !this.loading) {
				this.$emit('input', !this.value)
				this.$emit('change', !this.value)
			}
		}
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.yo-switch
	display: inline-block
	position: relative
	height: 1em
	width: 1.6em
	background: @white
	border: 1px solid rgba(0, 0, 0, .1)
	border-radius: 1em

	&__node
		position: absolute
		top: 0
		left: 0
		width: 1em
		height: 1em
		background-color: @white
		box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05)
		border-radius: 100%
		transition: .3s
		z-index: 1

	&__loading
		top: 25%
		left: 25%
		width: 50%!important
		height: 50%!important

	&--on
		background-color: @green

		.yo-switch__node
			transform: translateX(.6em)

	&--disabled
		opacity: .4
</style>
