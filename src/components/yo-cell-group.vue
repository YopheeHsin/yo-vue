<template lang="pug">
.yo-cell-group(:class="{ 'yo-line--top-bottom': border }")
	slot
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
