<template lang="pug">
.container
	button(
		@click="triggerUpdate()"
	) {{ n }} {{ $options.name }} trigger update
	router-link(to="router-component" tag="button") go to router-component
</template>

<script>
import mixin from './mixin'
export default {
	name: 'cached-router-component',
	color: '#d35400',
	mixins: [mixin]
}
</script>

<style lang="sass" scoped>
.container
	margin: 20px 0
	button
		margin-right: 10px
</style>
