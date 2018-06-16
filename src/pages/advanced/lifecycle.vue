<template lang="pug">
.lifecycle
	button(
		@click="triggerUpdate()"
	) {{ n }} lifecycle triggerUpdate
	router-view
</template>

<script>
import mixin from './lifecycle/mixin'
export default {
	name: 'lifecycle',
	mixins: [mixin]
}
</script>

<style lang="sass">
.lifecycle
	margin: 30px
</style>
