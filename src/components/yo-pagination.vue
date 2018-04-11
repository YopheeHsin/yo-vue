<template>
<ul class="yo-pagination" :class="{ 'yo-pagination-simple': !isMultiMode }">
	<li class="yo-pagination__item yo-pagination__prev yo-hairline"
		:class="{ 'yo-pagination--disabled': value === 1 }"
		@click="selectPage(value - 1)"
	>
		{{ prevText || $t('prev') }}
	</li>
	<li v-if="isMultiMode" v-for="(page, index) in pages" :key="index"
		class="yo-pagination__item yo-pagination__page yo-hairline"
		:class="{ 'yo-pagination--active': page.active }"
		@click="selectPage(page.nubmer)"
	>
		{{ page.text }}
	</li>
	<li v-if="!isMultiMode" class="yo-pagination__page-desc">
		<slot name="pageDesc">{{ pageDesc }}</slot>
	</li>
	<li class="yo-pagination__item yo-pagination__next yo-hairline"
		:class="{ 'yo-pagination--disabled': value === computedPageCount }"
		@click="selectPage(value + 1)"
	>
		{{ nextText || $t('next') }}
	</li>
</ul>
</template>

<script>
export default {
	name: 'yo-pagination',

	props: {
		value: Number,
		prevText: String,
		nextText: String,
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
	}
}
</script>

<style lang="less">

</style>
