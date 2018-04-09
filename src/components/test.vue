<template>
<div class="yo-collapse-item">
	<yo-cell class="yo-collapse-item__title" is-link>
		<slot name="title">{{ title }}</slot>
	</yo-cell>
</div>
</template>

<script>
import YoCell from './yo-cell'

export default {
	name: 'yo-collapse-item',



	components: {
		YoCell
	},

	props: {
		title: String
	}
}
</script>
