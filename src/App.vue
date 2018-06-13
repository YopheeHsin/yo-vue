<template lang="pug">
yo-cell-group(border)
	yo-cell(
		v-for="item in list"
		:key="item"
		:title="item"
		:to="'/' + item"
		is-link
	)
</template>

<script>
import YoCellGroup from './components/yo-cell-group'
import YoCell from './components/yo-cell'
import routes from './router/routes'

export default {
	name: 'App',

	components: { YoCellGroup, YoCell },

	data() {
		const list = []
		routes.forEach(item => {
			if (['/', '/test'].indexOf(item.path) === -1) list.push(item.path.replace('/', ''))
		})
		list.push('advanced')

		return {
			list
		}
	}
}
</script>
