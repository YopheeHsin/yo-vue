<template>
<div class="yo-collapse-item" :class="{
	'yo-hairline--top': index,
	'yo-collapse-item--expanded': expanded
}">
	<yo-cell class="yo-collapse-item__title" is-link @click="onClick">
		<slot name="title">{{ title }}</slot>
	</yo-cell>
	<div class="yo-collapse-item__content" v-show="expanded">
		<slot />
	</div>
</div>
</template>

<script>
import YoCell from './yo-cell'
import findParent from '../mixins/find-parent'
import { isDef } from '../utils'

export default {
	name: 'yo-collapse-item',

	components: {
		YoCell
	},

	mixins: [findParent],

	props: {
		name: [String, Number],
		title: String
	},

	computed: {
		items() {
			return this.parentGroup.items
		},

		index() {
			return this.items.indexOf(this)
		},

		currentName() {
			return isDef(this.name) ? this.name : this.index
		},

		expanded() {
			const { activeNames } = this.parentGroup
			return this.parentGroup.accordion
				? activeNames === this.currentName
				: activeNames.some(name => name === this.currentName)
		}
	},

	created() {
		this.findParentByName('yo-collapse-list')
		this.items.push(this)
	},

	destroyed() {
		this.items.splice(this.index, 1)
	},

	methods: {
		onClick() {
			const { parentGroup } = this
			const name = parentGroup.accordion
				&& this.currentName === parentGroup.activeNames
				? '' : this.currentName
			this.parentGroup.switch(name, !this.expanded)
		}
	}
}
</script>

<style lang="less">
@import '../css/common/var';

.yo-collapse-item {
	&__title {
		.yo-cell__right-icon::before {
			transition: .3s;
			transform: rotate(90deg);
		}

		&::after {
			visibility: hidden;
		}
	}

	&__content {
		padding: 15px;
		background-color: @white;
	}

	&--expanded {
		.yo-collapse-item__title {
			.yo-cell__right-icon::before {
				transform: rotate(-90deg);
			}

			&::after {
				visibility: visible;
			}

		}
	}
}
</style>
