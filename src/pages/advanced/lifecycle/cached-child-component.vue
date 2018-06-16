<template lang="pug">
.container
	button(
		@click="triggerUpdate()"
	) {{ n }} {{ $options.name }} trigger update
</template>

<script>
import mixin from './mixin'
export default {
	name: 'cached-child-component',
	mixins: [mixin]
}
</script>

<style lang="sass" scoped>
.container
	margin: 20px 0
</style>
