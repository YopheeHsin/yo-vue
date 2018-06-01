<template>
<div class="demo-pagination">
	<yo-cell-group>
		<yo-cell v-for="(item, index) in items" :key="index">{{ item }}</yo-cell>
	</yo-cell-group>
	<yo-pagination v-model="currentPage" :showPageSize="3" force-ellipses
		:total-items="totalItems" :items-per-page="itemsPerPage" />
</div>
</template>

<script>
import YoCellGroup from '../components/yo-cell-group'
import YoCell from '../components/yo-cell'
import YoPagination from '../components/yo-pagination'

export default {
	components: {
		YoCellGroup,
		YoCell,
		YoPagination
	},

	data() {
		return {
			currentPage: 1,
			totalItems: 50,
			itemsPerPage: 5
		}
	},

	computed: {
		items() {
			let start = (this.currentPage - 1) * this.itemsPerPage + 1
			let end = this.currentPage * this.itemsPerPage
			return this.rangeArray(start, end)
		}
	},

	methods: {
		rangeArray(start, end) {
			return Array(end - start + 1).fill(0).map((v, i) => i + start)
		}
	}
}
</script>

<style lang="sass">
.demo-pagination
</style>
