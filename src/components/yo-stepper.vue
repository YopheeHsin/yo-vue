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
import { isDef } from '../utils'

export default {
	name: 'yo-stepper',

	data() {
		const value = this.range(isDef(this.value) ? this.value : this.defaultValue)
		if (value !== +this.value) this.$emit('input', value)

		return {
			currentValue: value
		}
	},

	props: {
		value: null,
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
			return this.disabled || this.currentValue <= +this.min
		},

		isPlusDisabled() {
			return this.disabled || this.currentValue >= +this.max
		}
	},

	watch: {
		value(val) {
			if (val !== this.currentValue) this.currentValue = this.format(val)
		},

		currentValue(val) {
			this.$emit('input', val)
			this.$emit('change', val)
		}
	},

	methods: {
		format(value) {
			// eslint-disable-next-line
			value = String(value).replace(/[^0-9\.-]/g, '')
			return value === '' ? 0 : +value
		},

		range(value) {
			return Math.max(Math.min(this.max, this.format(value)), this.min)
		},

		onInput(event) {
			const { value } = event.target
			const formatted = this.format(value)
			if (+value !== formatted) event.target.value = formatted
			this.currentValue = formatted
		},

		onChange(type) {
			if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
				this.$emit('overlimit', type)
				return
			}

			const diff = type === 'minus' ? -this.step : +this.step
			const value = this.currentValue + diff
			this.currentValue = this.range(value)
			this.$emit(type)
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
