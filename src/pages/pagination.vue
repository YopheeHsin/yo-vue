<template>
<div class="demo-pagination">
	<yo-pagination></yo-pagination>
</div>
</template>

<script>
import YoPagination from '../components/yo-pagination'

export default {
	components: {
		YoPagination
	},

	data() {
		return {
			value: 15
		}
	}
}
</script>

<style lang="less">
.demo-pagination {
	margin: 20px;
}
</style>
