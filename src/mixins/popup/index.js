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
		open() {

		},

		close() {

		},

		move() {

		},

		onTouchStart(e) {
			this.pos = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY
			}
		},

		onTouchMove(e) {
			const { pos } = $(this)
			const dx = e.touches[0].clientX - pos.x
			const dy = e.touches[0].clientY - pos.y
			const direction = dy > 0 ? '10' : '01'
			const el = scrollUtils.getScrollEventTarget(e.target, this.$el)
			const { scrollHeight, offsetHeight, scrollTop } = el
			const isVertical = Math.abs(dx) < Math.abs(dy)

			let status = '11'

			if (scrollTop === 0) {
				status = offsetHeight >= scrollHeight ? '00' : '01'
			} else if (scrollTop + offsetHeight >= scrollHeight) {
				status = '10'
			}

			if (status !== '11')

		}
	}
}
