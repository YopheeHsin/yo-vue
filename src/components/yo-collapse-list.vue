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
		activeNames: [String, Number, Array]
	},

	model: {
		prop: 'activeNames'
	},

	methods: {
		switch(name, expanded) {
			const { activeNames } = this
			if (!this.accordion) {
				name = expanded
					? activeNames.concat(name)
					: activeNames.filter(activeNames => activeNames !== name)
			}
			this.$emit('change', name)
			this.$emit('input', name)
		}
	}
}
</script>
