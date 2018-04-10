<template>
	<div class="yo-cell-group" :class="{ 'yo-hairline--top-bottom': border }">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'yo-cell-group',

	props: {
		border: {
			type: Boolean,
			default: true
		}
	}
}
</script>
