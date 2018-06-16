<template lang="pug">
.lifecycle
	button(
		@click="triggerUpdate()"
	) {{ n }} {{ $options.name }} trigger update
	button(
		@click="toggleComponentRender()"
	) {{ $options.name }} toggle component render
	keep-alive(include="cached-child-component")
		child-component(v-if="r")
		cached-child-component(v-else)
	keep-alive(include="cached-router-component")
		router-view
</template>

<script>
import mixin from './lifecycle/mixin'
import ChildComponent from './lifecycle/child-component.vue'
import CachedChildComponent from './lifecycle/cached-child-component.vue'
export default {
	name: 'lifecycle',
	components: { ChildComponent, CachedChildComponent },
	mixins: [mixin],
	data() {
		return {
			r: true
		}
	},
	methods: {
		toggleComponentRender() {
			this.r = !this.r
		}
	}
}
</script>

<style lang="sass" scoped>
.lifecycle
	margin: 30px
	button
		margin-right: 10px
</style>
