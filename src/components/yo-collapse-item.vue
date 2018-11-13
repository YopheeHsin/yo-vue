<template lang="pug">
.yo-collapse-item(
	:class="{ 'yo-line--top': index, 'yo-collapse-item--expanded': expanded }"
)
	yo-cell.yo-collapse-item__title(is-link @click="onClick")
		slot(name="title") {{ title }}
	.yo-collapse-item__wrapper(
		ref="wrapper"
		v-if="inited"
		v-show="show"
		@transitionend="onTransitionEnd"
	)
		.yo-collapse-item__content(ref="content")
			slot
</template>

<script>
import YoCell from './yo-cell'
import findParent from '../mixins/find-parent'
import { isDef } from '../utils'
import { raf } from '../utils/raf'

export default {
	name: 'yo-collapse-item',

	components: { YoCell },

	mixins: [findParent],

	data() {
		return {
			show: null,
			inited: null
		}
	},

	props: {
		name: [String, Number],
		title: String
	},

	computed: {
		items() {
			return this.parent.items
		},

		index() {
			return this.items.indexOf(this)
		},

		currentName() {
			return isDef(this.name) ? this.name : this.index
		},

		expanded() {
			if (!this.parent) return null
			const { value } = this.parent
			return this.parent.accordion
				? value === this.currentName
				: value.some(name => name === this.currentName)
		}
	},

	watch: {
		expanded(expanded, prev) {
			if (prev === null) return
			if (expanded) {
				this.show = true
				this.inited = true
			}

			this.$nextTick(() => {
				const { wrapper, content } = this.$refs
				if (!wrapper || !content ) return
				const contentHeight = content.clientHeight + 'px'
				wrapper.style.height = expanded ? 0 : contentHeight
				raf(() => {
					wrapper.style.height = expanded ? contentHeight : 0
				})
			})
		}
	},

	methods: {
		onClick() {
			const { parent } = this
			const name = parent.accordion
				&& this.currentName === parent.value
				? '' : this.currentName
			this.parent.switch(name, !this.expanded)
		},

		onTransitionEnd() {
			if (!this.expanded) {
				this.show = false
			} else {
				this.$refs.wrapper.style.height = null
			}
		}
	},

	created() {
		this.findParentByName('yo-collapse-list')
		this.items.push(this)
		this.show = this.expanded
		this.inited = this.expanded
	},

	destroyed() {
		this.items.splice(this.index, 1)
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.yo-collapse-item
	&__title
		.yo-cell__right-icon::before
			transition: .3s
			transform: rotate(90deg)

		&::after
			visibility: hidden

	&__wrapper
		overflow: hidden
		will-change: height
		transition: height .3s ease-in-out

	&__content
		padding: 15px
		background-color: $white

	&--expanded
		.yo-collapse-item__title
			.yo-cell__right-icon::before
				transform: rotate(-90deg)

			&::after
				visibility: visible
</style>
