<template lang="pug">
.reactivity(v-if="r")
	.obj {{ obj_dt.key }}
	.arr {{ arr_dt[0] }}
	button(@click="update") update
	button(@click="rFn") r
</template>

<script>
export default {
	data() {
		return {
			r: true,
			obj_dt: {},
			arr_dt: []
		}
	},

	methods: {
		update() {
			this.obj_dt.key = 'val-2'
			this.arr_dt.push(2)
		},
		rFn() {
			this.r = false
			this.$nextTick(() => {
				this.r = true
			})
		}
	},

	created() {
		const vm = this
		setTimeout(() => {
			console.log('created...')
			vm.obj_dt.key = 'val-0'
			vm.arr_dt[0] = 0
		}, 10000)
	},

	mounted() {
		// this.obj_dt.key = 'val-1'
		// this.arr_dt[0] = 1
	}
}
</script>
