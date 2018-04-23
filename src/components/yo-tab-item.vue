<template>
<div class="yo-tab__pane" :class="{
	'yo-tab__pane--select': index === parentGroup.curActive
}">
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

@yo-tab-height: 44px;

.yo-tab-item {
flex: 1;
  cursor: pointer;
  padding: 0 5px;
  font-size: 14px;
  position: relative;
  color: @text-color;
  line-height: @yo-tab-height;
  text-align: center;
  box-sizing: border-box;
  background-color: @white;
  min-width: 0; /* hack for flex ellipsis */

  span {
    display: block;
  }

  &:active {
    background-color: @active-color;
  }

  &--active {
    color: @red;
  }

  &--disabled {
    color: @gray;

    &:active {
      background-color: @white;
    }
  }

  &__pane {
    display: none;

    &--select {
      display: block;
    }
  }
}
</style>
