<template lang="pug">
.yo-loading(
	:class="['yo-loading--' + type, 'yo-loading--' + color]"
	:style="style"
)
	span.yo-loading__spinner(:class="'yo-loading__spinner--' + type")
		i(v-for="n in (type === 'spinner' ? 12 : 0)" :key="n")
		svg.yo-loading__circular(v-if="type === 'circular'" viewBox="25 25 50 50")
			circle(cx="50" cy="50" r="20" fill="none")
</template>

<script>
export default {
	name: 'yo-loading',

	props: {
		size: String,
		type: {					//类型，可选值为circular, spinner, circle, gradient-circle
			type: String,
			default: 'circular'
		},
		color: {				//颜色，可选值为black, white
			type: String,
			default: 'black'
		}
	},

	computed: {
		style() {
			return this.size ? {
				width: this.size,
				height: this.size
			} : {}
		}
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.yo-loading
	position: relative
	width: 30px
	height: 30px
	font-size: 0
	line-height: 0
	vertical-align: middle
	z-index: 0

	&__circular
		width: 100%
		height: 100%

		circle
			stroke-width: 3
			stroke-linecap: round
			animation: yo-circular 1.5s ease-in-out infinite

	&__spinner
		display: inline-block
		box-sizing: border-box
		position: relative
		width: 100%
		height: 100%
		z-index: -1
		animation: yo-rotate 0.8s linear infinite

		&--spinner
			animation-timing-function: steps(12)

			i
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%

				&::before
					content: ''
					display: block
					width: 2px
					height: 25%
					margin: 0 auto
					border-radius: 40%
					background-color: currentColor

		&--circle
			border: 3px solid transparent
			border-radius: 100%
			// animation-duration: 2s

		&--gradient-circle
			background-size: contain

	&--black
		.yo-loading__spinner--spinner
			color: $dark

		.yo-loading__spinner--circle
			border-color: $gray
			border-top-color: $light

		.yo-loading__spinner--gradient-circle
			background-image: url('../assets/gradient-circle-black.png')

		circle
			stroke: $dark

	&--white
		.yo-loading__spinner--spinner
			color: $light

		.yo-loading__spinner--circle
			border-color: $light
			border-top-color: $gray

		.yo-loading__spinner--gradient-circle
			background-image: url('../assets/gradient-circle-white.png')

		circle
			stroke: $light

@keyframes yo-rotate
	from
		transform: rotate(0deg)
	to
		transform: rotate(360deg)

@keyframes yo-circular
	0%
		stroke-dasharray: 1, 200
		stroke-dashoffset: 0
	50%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -40
	100%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -120

@for $i from 1 to 12
	.yo-loading__spinner--spinner i:nth-of-type(#{$i})
		opacity: calc(1 - (0.75 / 12) * (#{$i} - 1))
		transform: rotate(calc(#{$i} * 30deg))
</style>
