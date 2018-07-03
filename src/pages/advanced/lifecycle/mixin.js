export default {
	data() {
		return {
			n: 0
		}
	},
	methods: {
		time() {
			const date = new Date()
			let m = date.getMinutes()
			let s = date.getSeconds()
			let ms = date.getMilliseconds()
			m = m < 10 ? '0' + m : m
			s = s < 10 ? '0' + s : s
			ms = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms
			return m + ':' + s + ':' + ms
		},
		log(log) {
			const timeStyle = `background-color:${this.$options.color};color:#fff;`
			// eslint-disable-next-line no-console
			console.log('%c' + this.time(), timeStyle, this.$options.name + ' ' + log)
		},
		triggerUpdate() {
			this.n++
		}
	},
	beforeCreate() {
		// this.log('beforeCreate')
	},
	created() {
		this.log('created')
	},
	beforeMount() {
		this.log('beforeMount')
	},
	mounted() {
		this.log('mounted')
	},
	beforeUpdate() {
		this.log('beforeUpdate')
	},
	updated() {
		this.log('updated')
	},
	activated() {
		this.log('activated')
	},
	deactivated() {
		this.log('deactivated')
	},
	beforeDestroy() {
		this.log('beforeDestroy')
	},
	destroyed() {
		this.log('destroyed')
	}
}
