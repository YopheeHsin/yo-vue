import manager from './manager'
import context from './context'
// import scrollUtils from '../../utils/scroll'
import { on, off } from '../../utils/event'

export default {
	props: {
		value: Boolean,
		overlay: Boolean,
		overlayStyle: Object,
		overlayClass: String,
		closeOnClickOverlay: Boolean,
		zIndex: [String, Number],
		getContainer: Function,
		lockScroll: {
			type: Boolean,
			default: true
		}
	},

	watch: {
		value(val) {
			this[val ? 'open' : 'close']()
		},

		getContainer() {
			this.move()
		},

		overlay() {
			this.renderOverlay()
		}
	},

	created() {
		this._popupId = 'popup-' + content.plusKey('id')
		this.pos = {
			x: 0,
			y: 0
		}
	},

	mounted() {
		if (this.getContainer) this.move()
		if (this.value) this.open()
	},

	beforeDestroy() {
		this.close()
	},

	methods: {

	}
}
