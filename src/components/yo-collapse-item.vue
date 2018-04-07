<template>
	<div class="yo-collapse-item" :class="{
		'yo-hairline--top': index,
		'yo-collapse-item--expanded': expanded
	}">
		<cell class="yo-collapse-item__title" is-link @click="onClick">
			<slot name="title">{{ title }}</slot>
		</cell>
		<div class="yo-collapse-item__content" v-show="expanded">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>
