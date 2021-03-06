import Vue from 'vue'
import Modal from './Modal'
import context from './context'

const defaultConfig = {
	className: '',
	customStyle: {}
}

export default {
	open(vm, config) {
		const exist = context.stack.some(item => item.vm._popupId === vm._popupId)
	},

	close(id) {
		const { stack } = context

		if (stack.length) {
			if (context.top.vm._popupId === id) {
				stack.pop()
				this.update()
			} else {
				context.stack = stack.filter(item => item.vm._popupId !== id)
			}
		}
	},

	update() {
		let { modal } = context

		if (!modal) {
			modal = new (Vue.extend(Modal))({
				el: document.createElement('div')
			})
			modal.$on('click', this.onClick)

			context.modal = modal
		}

		if (modal.$el.parentNode) {
			modal.visible = false
		}

		if (context.top) {
			const { targetNode, config } = context.top

			targetNode.appendChild(modal.$el)
			Object.assign(modal, {
				...defaultConfig,
				...config,
				visible: true
			})
		}
	},

	onClick() {
		if (context.top) {
			const { vm } =context.top
			vm.$emit('click-overlay')
			vm.closeOnClickOverlay && vm.close()
		}
	}
}
