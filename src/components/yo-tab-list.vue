<template lang="pug">
.yo-tab-list
	.yo-tab-list__wrap.yo-hairline--top-bottom(
		ref="wrap"
		:class="[`yo-tab-list__wrap--${position}`, { 'yo-tab-list--scrollable': scrollable }]"
	)
		.yo-tab-list__nav(ref="nav")
			.yo-tab-list__nav-bar(:style="navBarStyle")
			.yo-tab(
				ref="tabs"
				v-for="(tab, index) in tabs"
				:key="index"
				:class="{ 'yo-tab--active': index === curActive, 'yo-tab--disabled': tab.disabled }"
				@click="onClick(index)"
			)
				yo-node(v-if="tab.$slots.title" :node="tab.$slots.title")
				span.yo-ellipsis(v-else) {{ tab.title }}
	.yo-tab-list__content(ref="content")
		slot
</template>

<script>
import YoNode from '../utils/node'
import { on, off } from '../utils/event'
import { getScrollEventTarget, getScrollTop, setScrollTop, getTop } from '../utils'
import { raf } from '../utils/raf'

export default {
	name: 'yo-tab-list',

	components: { YoNode },

	data() {
		return {
			tabs: [],
			position: 'content-top',
			curActive: 0,
			navBarStyle: {}
		}
	},

	props: {
		sticky: Boolean,
		active: {
			type: [Number, String],
			default: 0
		},
		duration: {
			type: Number,
			default: 0.2
		},
		swipeThreshold: {
			type: Number,
			default: 4
		},
		swipeable: Boolean
	},

	computed: {
		scrollable() {
			return this.tabs.length > this.swipeThreshold
		}
	},

	watch: {
		active(val) {
			this.correctActive(val)
		},

		tabs() {
			this.correctActive(this.curActive || this.active)
			this.setNavBar()
		},

		curActive() {
			this.scrollIntoView()
			this.setNavBar()

			if (this.position === 'page-top' || this.position === 'content-bottom') {
				setScrollTop(this.scrollEl, getTop(this.$el))
			}
		},

		sticky(isSticky) {
			this.scrollHandler(isSticky)
		}
	},

	mounted() {
		this.correctActive(this.active)
		this.setNavBar()

		this.$nextTick(() => {
			if (this.sticky) this.scrollHandler(true)
			if (this.swipeable) this.swipeableHandler(true)
			this.scrollIntoView()
		})
	},

	beforeDestroy() {
		if (this.sticky) this.scrollHandler(false)
		if (this.swipeable) this.swipeableHandler(false)
	},

	methods: {
		scrollHandler(init) {
			this.scrollEl = this.scrollEl || getScrollEventTarget(this.$el)
			/* eslint-disable */
			(init ? on : off)(this.scrollEl, 'scroll', this.onScroll, true)
			/* eslint-enable */
			if (init) this.onScroll()
		},

		swipeableHandler(init) {
			const swipeableEl = this.$refs.content
			/* eslint-disable */
			(init ? on : off)(swipeableEl, 'touchstart', this.onTouchStart, false)
			(init ? on : off)(swipeableEl, 'touchmove', this.onTouchMove, false)
			(init ? on : off)(swipeableEl, 'touchend', this.onTouchEnd, false)
			(init ? on : off)(swipeableEl, 'touchcancel', this.onTouchEnd, false)
			/* eslint-enable */
		},

		onTouchStart(e) {
			this.startX = e.touches[0].clientX
			this.startY = e.touches[0].clientY
		},

		onTouchMove(e) {
			this.deltaX = e.touches[0].clientX - this.startX
			this.direction = this.getDirection(event.touches[0])
		},

		onTouchEnd() {
			const { direction, deltaX, curActive } = this
			const minSwipeDistance = 50

			if (direction === 'horizontal' && Math.abs(deltaX) >= minSwipeDistance) {
				if (deltaX > 0 && curActive !== 0) {
					this.curActive = curActive - 1
				} else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
					this.curActive = curActive + 1
				}
			}
		},

		getDirection(touch) {
			const distanceX = Math.abs(touch.clientX - this.startX)
			const distanceY = Math.abs(touch.clientY - this.startY)
			return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : ''
		},

		onScroll() {
			const scrollTop = getScrollTop(this.scrollEl)
			const elTopToPageTop = getTop(this.$el)
			const elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight
			if (scrollTop > elBottomToPageTop) {
				this.position = 'content-bottom'
			} else if (scrollTop > elTopToPageTop) {
				this.position = 'page-top'
			} else {
				this.position = 'content-top'
			}
		},

		setNavBar() {
			this.$nextTick(() => {
				if (!this.$refs.tabs) return

				const tab = this.$refs.tabs[this.curActive]
				this.navBarStyle = {
					width: `${tab.offsetWidth || 0}px`,
					transform: `translate(${tab.offsetLeft || 0}px, 0)`,
					transitionDuration: `${this.duration}s`
				}
			})
		},

		correctActive(active) {
			active = +active
			const exist = this.tabs.some(tab => tab.index === active)
			const defaultActive = (this.tabs[0] || {}).index || 0
			this.curActive = exist ? active : defaultActive
		},

		onClick(index) {
			const { title, disabled } = this.tabs[index]
			if (disabled) {
				this.$emit('disabled', index, title)
			} else {
				this.$emit('click', index, title)
				this.curActive = index
			}
		},

		scrollIntoView() {
			if (!this.scrollable || !this.$refs.tabs) return

			const tab = this.$refs.tabs[this.curActive]
			const { nav } = this.$refs
			const { scrollLeft, offsetWidth: navWidth } = nav
			const { offsetLeft, offsetWidth: tabWidth } = tab

			this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2)
		},

		scrollTo(el, from, to) {
			let count = 0
			const frames = Math.round(this.duration * 1000 / 16)
			const animate = () => {
				el.scrollLeft += (to - from) / frames
				if (++count < frames) raf(animate)
			}
			animate()
		}
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

$yo-tab-height: 44px

.yo-tab-list
	position: relative
	padding-top: $yo-tab-height

	&__wrap
		position: absolute
		top: 0
		right: 0
		left: 0
		height: $yo-tab-height
		overflow: hidden
		z-index: 99

		&--page-top
			position: fixed

		&--content-bottom
			top: auto
			bottom: 0

	&__nav
		display: flex
		position: relative
		height: 100%
		padding-bottom: 15px
		background-color: $white
		user-select: none

		&-bar
			position: absolute
			bottom: 15px
			left: 0
			height: 2px
			background-color: $red
			z-index: 1

	&--scrollable
		.yo-tab
			flex: 0 0 22%

		.yo-tab-list__nav
			overflow: hidden
			overflow-x: auto
			-webkit-overflow-scrolling: touch

			&::-webkit-scrollbar
				display: none

	.yo-tab
		position: relative
		box-sizing: border-box
		// flex: 1
		line-height: $yo-tab-height
		padding: 0 5px
		background-color: $white
		text-align: center
		font-size: 14px
		color: $dark
		min-width: 0 /* hack for flex ellipsis */
		cursor: pointer

		span
			display: block

		&:active
			background-color: $light

		&--active
			color: $red

		&--disabled
			color: $gray

			&:active
				background-color: $white
</style>
