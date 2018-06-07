<template lang="pug">
yo-cell-group(border)
	yo-cell(
		v-for="(item, index) in list"
		:key="index"
		:title="item.meta.label"
		:to="item.path"
		is-link
	)
</template>

<script>
import YoCellGroup from '../../components/yo-cell-group'
import YoCell from '../../components/yo-cell'
import routes from './routes'

export default {
	components: { YoCellGroup, YoCell },

	data() {
		const list = routes.filter(item => {
			return item.meta && item.meta.label
		})

		return {
			list
		}
	}
}
</script>
