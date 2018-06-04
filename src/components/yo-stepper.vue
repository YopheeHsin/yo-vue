<template lang="pug">
.yo-stepper(:class="{ 'yo-stepper--disabled': disabled }")
	button.yo-stepper__stepper.yo-stepper__minus(
		:class="{ 'yo-stepper__minus--disabled': isMinusDisabled }"
		@click="onChange('minus')"
	)
	input.yo-stepper__input(
		type="number"
		:value="currentValue"
		:disabled="disabled || disableInput"
		@input="onInput"
	)
	button.yo-stepper__stepper.yo-stepper__plus(
		:class="{ 'yo-stepper__plus--disabled': isPlusDisabled }"
		@click="onChange('plus')"
	)
</template>

<script>
export default {
	name: 'yo-stepper',

	data() {
		let value = this.value ? +this.value : +this.defaultValue
		const correctedValue = this.correctValue(value)
		if (value !== correctedValue) {
			value = correctedValue
			this.$emit('input', value)
		}

		return {
			currentValue: value
		}
	},

	props: {
		value: {},
		disabled: Boolean,
		disableInput: Boolean,
		min: {
			type: [String, Number],
			default: 1
		},
		max: {
			type: [String, Number],
			default: Infinity
		},
		step: {
			type: [String, Number],
			default: 1
		},
		defaultValue: {
			type: [String, Number],
			default: 1
		}
	},

	computed: {
		isMinusDisabled() {
			const min = +this.min
			const step = +this.step
			const currentValue = +this.currentValue
			return min === currentValue || (currentValue - step) < min || this.disabled
		},

		isPlusDisabled() {
			const max = +this.max
			const step = +this.step
			const currentValue = +this.currentValue
			return max === currentValue || (currentValue + step) > max || this.disabled
		}
	},

	watch: {
		value(val) {
			if (val !== '') {
				val = this.correctValue(+val)
				if (val !== this.currentValue) {
					this.currentValue = val
				}
			}
		}
	},

	methods: {
		correctValue(value) {
			if (Number.isNaN(value)) {
				value = this.min
			} else {
				value = Math.max(this.min, value)
				value = Math.min(this.max, value)
			}

			return value
		},

		onInput(event) {
			const { value } = event.target
			this.currentValue = value ? this.correctValue(+value) : value
			event.target.value = this.currentValue
			this.emitInput()
		},

		onChange(type) {
			if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
				this.$emit('overlimit', type)
				return
			}

			const step = +this.step
			const currentValue = +this.currentValue
			this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step)
			this.emitInput()
			this.$emit(type)
		},

		emitInput() {
			this.$emit('input', this.currentValue)
			this.$emit('change', this.currentValue)
		}
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.yo-stepper
	font-size: 0

	&--disabled
		.yo-stepper__input,
		.yo-stepper__minus,
		.yo-stepper__plus
			border-color: $light
			color: $light

	&__stepper
		position: relative
		box-sizing: border-box
		width: 40px
		height: 30px
		background-color: $white
		border: 1px solid $gray
		vertical-align: middle

		&::before
			width: 9px
			height: 1px

		&::after
			width: 1px
			height: 9px

		&::before, &::after
			content: ''
			position: absolute
			top: 0
			right: 0
			bottom: 0
			left: 0
			margin: auto
			background-color: $dark

	&__minus, &__plus
		&:active
			background-color: $light

		&--disabled
			&:active
				background-color: $white

			&::before, &::after
				background-color: $light

	&__minus
		border-radius: 2px 0 0 2px

		&::after
			display: none

		&--disabled
			border-color: $light $gray $light $light

	&__plus
		border-radius: 0 2px 2px 0

		&--disabled
			border-color: $light $light $light $gray

	&__input
		box-sizing: content-box
		width: 33px
		height: 26px
		padding: 1px
		border: 1px solid $gray
		border-width: 1px 0
		border-radius: 0
		color: $dark
		font-size: 14px
		text-align: center
		vertical-align: middle
		-webkit-appearance: none

	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button
		margin: 0
		-webkit-appearance: none
</style>
