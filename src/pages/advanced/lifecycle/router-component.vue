<template lang="pug">
.container
	button(
		@click="triggerUpdate()"
	) {{ n }} {{ $options.name }} trigger update
	router-link(to="cached-router-component" tag="button") go to cached-router-component
</template>

<script>
import mixin from './mixin'
export default {
	name: 'router-component',
	color: '#f1c40f',
	mixins: [mixin]
}
</script>

<style lang="sass" scoped>
.container
	margin: 20px 0
	button
		margin-right: 10px
</style>
