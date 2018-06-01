<template lang="pug">
ul.yo-pagination(:class="{ 'yo-pagination-simple': !isMultiMode }")
	li.yo-pagination__item.yo-pagination__prev.yo-hairline(
		:class="{ 'yo-pagination--disabled': value === 1 }"
		@click="selectPage(value - 1)"
	) {{ prevText }}
	li.yo-pagination__item.yo-pagination__page.yo-hairline(
		v-for="(page, index) in (isMultiMode ? pages : [])"
		:key="index"
		:class="{ 'yo-pagination--active': page.active }"
		@click="selectPage(page.number)"
	) {{ page.text }}
	li.yo-pagination__page-desc(v-if="!isMultiMode")
		slot(name="pageDesc") {{ pageDesc }}
	li.yo-pagination__item.yo-pagination__next.yo-hairline(
		:class="{ 'yo-pagination--disabled': value === computedPageCount }"
		@click="selectPage(value + 1)"
	) {{ nextText }}
</template>

<script>
export default {
	name: 'yo-pagination',

	props: {
		value: Number,
		prevText: {
			type: String,
			default: '上一页'
		},
		nextText: {
			type: String,
			default: '下一页'
		},
		pageCount: Number,
		forceEllipses: Boolean,
		mode: {
			type: String,
			default: 'multi'
		},
		itemsPerPage: {
			type: Number,
			default: 10
		},
		showPageSize: {
			type: Number,
			default: 5
		},
		totalItems: {
			type: Number,
			default: 0
		}
	},

	computed: {
		isMultiMode() {
			return this.mode === 'multi'
		},

		computedPageCount() {
			const count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage)
			return Math.max(1, count)
		},

		pageDesc() {
			return this.value + '/' + this.computedPageCount
		},

		pages() {
			const pages = []
			const pageCount = this.computedPageCount

			let startPage = 1
			let endPage = pageCount
			const isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount

			if (isMaxSized) {
				startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1)
				endPage = startPage + this.showPageSize - 1
				if (endPage > pageCount) {
					endPage = pageCount
					startPage = endPage - this.showPageSize + 1
				}
			}

			for (let number = startPage; number <= endPage; number++) {
				const page = this.makePage(number, number, number === this.value)
				pages.push(page)
			}

			if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
				if (startPage > 1) {
					const previousPageSet = this.makePage(startPage - 1, '...', false)
					pages.unshift(previousPageSet)
				}

				if (endPage < pageCount) {
					const nextPageSet = this.makePage(endPage + 1, '...', false)
					pages.push(nextPageSet)
				}
			}

			return pages
		}
	},

	created() {
		this.selectPage(this.value)
	},

	watch: {
		value(page) {
			this.selectPage(page)
		}
	},

	methods: {
		selectPage(page) {
			page = Math.max(1, page)
			page = Math.min(this.computedPageCount, page)
			if (this.value !== page) {
				this.$emit('input', page)
				this.$emit('change', page)
			}
		},

		makePage(number, text, active) {
			return { number, text, active }
		}
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.yo-pagination
	display: flex
	line-height: 40px
	text-align: center
	font-size: 14px

	&__item
		flex: 1
		box-sizing: border-box
		min-width: 36px
		height: 40px
		background-color: $white
		color: $blue
		user-select: none

		&:active
			background-color: $blue
			color: $white
			opacity: 0.8

		&::after
			border-width: 1px 0 1px 1px

		&:last-child::after
			border-right-width: 1px

	&__prev, &__next
		&.yo-pagination__item
			padding: 0 5px

	&__page
		flex-grow: 0

		&.yo-pagination--active
			background-color: $blue
			color: $white

	&--disabled
		&.yo-pagination__item
			background-color: $light
			color: $gray
			opacity: 0.6

	&__page-desc
		flex: 1
		height: 40px
		color: $gray

.yo-pagination-simple
	.yo-pagination__prev, .yo-pagination__next
		&.yo-pagination__item::after
			border-width: 1px

</style>
