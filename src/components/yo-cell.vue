<template lang="pug">
.yo-cell(
	:class="{
		'yo-hairline': border,
		'yo-cell--center': center,
		'yo-cell--required': required,
		'yo-cell--clickable': isLink || clickable
	}"
	@click="onClick"
)
	.yo-cell__title(v-if="title || icon || $slots.title || $slots.icon)
		slot(name="icon")
			yo-icon(v-if="icon" :name="icon")
		slot(name="title")
			span.yo-cell__text(v-text="title")
			.yo-cell__label(v-if="label" v-text="label")
	.yo-cell__value(
		v-if="value || $slots.default"
		:class="{
			'yo-cell__value--link': isLink,
			'yo-cell__value--alone': !$slots.title && !title && !label
		}"
	)
		slot
			span(v-text="value")
	slot(name="right-icon")
		yo-icon.yo-cell__right-icon(v-if="isLink" name="angle-right")
	slot(name="extra")
</template>

<script>
import YoIcon from './yo-icon'
import routerLink from '../mixins/router-link'

export default {
	name: 'yo-cell',

	components: { YoIcon },

	mixins: [routerLink],

	props: {
		icon: String,				//左侧图标，可选值见Icon组件
		title: String,				//左侧标题
		label: String,				//左侧标题下方的描述信息
		value: [String, Number],	//右侧内容
		clickable: Boolean,			//是否开启点击反馈
		isLink: Boolean,			//是否展示右侧箭头并开启点击反馈
		required: Boolean,			//是否显示表单必填星号
		center: Boolean,			//是否使内容垂直居中
		border: {					//是否显示内边框
			type: Boolean,
			default: true
		}
	},

	methods: {
		onClick() {
			this.$emit('click')
			this.routerLink()
		}
	}
}
</script>

<style lang="sass">
$import '../css/common/var'

.yo-cell
	display: flex
	box-sizing: border-box
	position: relative
	width: 100%
	line-height: 24px
	padding: 10px 15px
	background-color: $white
	color: $dark
	font-size: 14px
	overflow: hidden

	&:not(:last-child)::after
		right: 0
		left: 15px
		width: auto
		border-bottom-width: 1px
		transform: scale(1, .5)

	&__title
		.yo-icon
			font-size: 16px
			margin-right: 5px
			vertical-align: middle

	&__text
		vertical-align: middle

	&__label
		font-size: 12px
		line-height: 1.2
		color: $gray

	&__value
		flex: 1
		text-align: right
		vertical-align: middle
		overflow: hidden

		&--alone
			text-align: left

		&--link
			padding-right: 15px

	&--clickable
		&:active
			background-color: $light

	&--required
		overflow: visible

		&::before
			content: '*'
			position: absolute
			left: 7px
			font-size: 14px
			color: $red

	&--center
		align-items: center

	&__right-icon.yo-icon
		position: absolute
		top: 50%
		right: 15px
		font-size: 12px
		color: $gray
		transform: translateY(-50%)
</style>
