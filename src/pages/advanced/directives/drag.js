export default {
	bind(el, binding) {
		// el.addEventListener('mousedown', mouseDown);
		// function mouseDown(event) {
		// 	el.style.left = '200px'
		// }
	},
	update(el, binding) {
		const handler = (binding.value && binding.value.handler && el.querySelector(binding.value.handler)) || el
		const target = (binding.value && binding.value.target && el.querySelector(binding.value.target)) || el

		if (binding && binding.value && binding.value.reset) {
			initializeState()
		}

		if (!handler.getAttribute('draggable')) {
			handler.addEventListener('mousedown', mouseDown)
			handler.setAttribute('draggable', 'true')
			initializeState()
		}

		function mouseDown(event) {
			setState({
				initialMousePos: getInitialMousePosition(event)
			})
			document.addEventListener('mousemove', mouseMove)
			document.addEventListener('mouseup', mouseUp)
		}

		function mouseUp() {
			const currentRectPosition = getRectPosition()
			setState({
				initialMousePos: undefined,
				startDragPosition: currentRectPosition,
				currentDragPosition: currentRectPosition
			})
			document.removeEventListener('mousemove', mouseMove)
			document.removeEventListener('mouseup', mouseUp)
		}

		function mouseMove(event) {
			event.preventDefault()
			if (!state.startDragPosition || !state.initialMousePos) {
				initializeState(event)
			}
			let state = getState()
			const dx = event.clientX - state.initialMousePos.left
			const dy = event.clientY - state.initialMousePos.top
			const currentDragPosition = {
				left: state.startDragPosition.left + dx,
				top: state.startDragPosition.top + dy
			}
			setState({
				currentDragPosition
			})
			updateElementStyle()
		}

		function updateElementStyle() {
			var state = getState()
			if (!state.currentDragPosition) {
				return
			}
			// el.style.position = 'fixed'
			el.style.left = state.currentDragPosition.left + 'px'
			el.style.top = state.currentDragPosition.top + 'px'
		}

		function getInitialMousePosition(event) {
			return event && {
				left: event.clientX,
				top: event.clientY
			}
		}

		function getRectPosition() {
			const clientRect = el.getBoundingClientRect()
			if (!clientRect.height || !clientRect.width) {
				return
			}
			return {
				left: clientRect.left,
				top: clientRect.top
			}
		}

		function initializeState(event) {
			const initialPosition = getRectPosition()
			setState({
				initialPosition: initialPosition,
				startDragPosition: initialPosition,
				currentDragPosition: initialPosition,
				initialMousePos: getInitialMousePosition(event)
			})
			updateElementStyle()
		}

		function setState(partialState) {
			const prevState = getState()
			const state = Object.assign({}, prevState, partialState)
			handler.setAttribute('draggable-state', JSON.stringify(state))
		}

		function getState() {
			return JSON.parse(handler.getAttribute('draggable-state')) || {}
		}

	},
	unbind() {
		console.log('unbind')
	}
}
