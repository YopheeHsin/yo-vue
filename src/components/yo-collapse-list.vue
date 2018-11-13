<template lang="pug">
.yo-collapse-list.yo-line--top-bottom
	slot
</template>

<script>
export default {
	name: 'yo-collapse-list',

	data() {
		return {
			items: []
		}
	},

	props: {
		accordion: Boolean,
		value: [String, Number, Array]
	},

	methods: {
		switch(name, expanded) {
			if (!this.accordion) {
				name = expanded
					? this.value.concat(name)
					: this.value.filter(item => item !== name)
			}
			this.$emit('change', name)
			this.$emit('input', name)
		}
	}
}
</script>
