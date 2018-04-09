<template>
<div class="yo-cell" :class="{
	'yo-hairline': border,
	'yo-cell--center': center,
	'yo-cell--required': required,
	'yo-cell--clickable': isLink || clickable
}" @click="onClick">
	<div class="yo-cell__title" v-if="title || icon || $slots.title || $slots.icon">
		<slot name="icon">
			<yo-icon v-if="icon" :name="icon" />
		</slot>
		<slot name="title">
			<span class="yo-cell__text" v-text="title" />
			<div class="yo-cell__label" v-if="label" v-text="label" />
		</slot>
	</div>
	<div class="yo-cell__value" v-if="value || $slots.default" :class="{
		'yo-cell__value--link': islink,
		'yo-cell__value--alone': !$slots.title && !title && !label
	}">
		<slot>
			<span v-text="value" />
		</slot>
	</div>
	<slot name="right-icon">
		<yo-icon name="angle-right" class="yo-cell__right-icon" v-if="isLink" />
	</slot>
	<slot name="extra" />
</div>
</template>

<script>
import yoIcon from './yo-icon'
import routerLink from '../mixins/router-link'

export default {
	name: 'yo-cell',

	components: {
		yoIcon
	},

	mixins: [routerLink],

	props: {
		icon: String,
		title: String,
		label: String,
		center: Boolean,
		isLink: Boolean,
		required: Boolean,
		clickable: Boolean,
		value: [String, Number],
		border: {
			type: Boolean,
			default: true
		}
	},

	mounted() {
/*eslint-disable*/
console.log(this.isLink)
	},

	created() {
/*eslint-disable*/
console.log(this.isLink)
	},

	methods: {
		onClick() {
			this.$emit('click')
			this.routerLink()
		}
	}
}
</script>

<style lang="less">
@import '../css/common/var';

.yo-cell {
	display: flex;
	box-sizing: border-box;
	position: relative;
	width: 100%;
	line-height: 24px;
	padding: 10px 15px;
	background-color: @white;
	color: @text-color;
	font-size: 14px;
	overflow: hidden;

	&:not(:last-child):after {
		right: 0;
		left: 15px;
		width: auto;
		border-bottom-width: 1px;
		transform: scale(1, .5);
	}

	&__title {
		.yo-icon {
			font-size: 16px;
			margin-right: 5px;
			vertical-align: middle;
		}
	}

	&__text {
		vertical-align: middle;
	}

	&__label {
		font-size: 12px;
		line-height: 1.2;
		color: @gray-darker;
	}

	&__value {
		flex: 1;
		text-align: right;
		vertical-align: middle;
		overflow: hidden;

		&--alone {
			text-align: left;
		}

		&--link {
			padding-right: 15px;
		}
	}

	&--clickable {
		&:active {
			background-color: @active-color;
		}
	}

	&--required {
		overflow: visible;

		&:before {
			content: '*';
			position: absolute;
			left: 7px;
			font-size: 14px;
			color: @red;
		}
	}

	&--center {
		align-items: center;
	}

	&__right-icon.yo-icon {
		position: absolute;
		top: 50%;
		right: 15px;
		font-size: 12px;
		color: @gray-dark;
		transform: translateY(-50%);
	}
}
</style>
