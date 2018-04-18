<template>
<div class="yo-tab__pane" :class={
	'yo-tab__pane--select': index === parentGroup.curActive
}>
	<slot/>
</div>
</template>

<script>
import findParent from '../mixins/find-parent'

export default {
	name: 'yo-tab-item',

	mixins: [findParent],

	props: {
		title: String,
		disabled: Boolean
	},

	computed: {
		index() {
			return this.parentGroup.tabs.indexOf(this)
		}
	},

	created() {
		this.findParentByName('yo-tab-list')
		this.parentGroup.tabs.push(this)
	},

	destroyed() {
		this.parentGroup.tabs.splice(this.index, 1)
	}
}
</script>

<style lang="less">
@import '../css/common/var';

.yo-tab-item {

}
</style>
