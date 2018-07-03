<template lang="pug">
.container
	button(
		@click="triggerUpdate()"
	) {{ n }} {{ $options.name }} trigger update
</template>

<script>
import mixin from './mixin'
export default {
	name: 'child-component',
	color: '#8e44ad',
	mixins: [mixin]
}
</script>

<style lang="sass" scoped>
.container
	margin: 20px 0
</style>
