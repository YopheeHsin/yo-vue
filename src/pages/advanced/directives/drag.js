const ctx = '@@Drag'

export default {
	bind(el, binding) {
		const handler = (binding.value && binding.value.handler && el.querySelector(binding.value.handler)) || el
		const target = (binding.value && binding.value.target && el.querySelector(binding.value.target)) || el
		el[ctx] = {
			handler,
			target,
			mouseDown,
			dblClick
		}

		if (!handler.getAttribute('draggable')) {
			handler.addEventListener('mousedown', mouseDown)
			handler.addEventListener('dblclick', dblClick)
			handler.setAttribute('draggable', 'true')
			initializeState()
		}

		function mouseDown(event) {
			handler.style.cursor = 'move'
			setState({
				initialMousePos: getInitialMousePosition(event)
			})
			document.addEventListener('mousemove', mouseMove)
			document.addEventListener('mouseup', mouseUp)
		}

		function mouseUp() {
			handler.style.cursor = 'default'
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
			let state = getState()
			if (!state.startDragPosition || !state.initialMousePos) {
				initializeState(event)
				state = getState()
			}
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

		function dblClick() {
			initializeState()
		}

		function updateElementStyle() {
			var state = getState()
			if (!state.currentDragPosition) {
				return
			}
			// target.style.position = 'fixed'
			target.style.left = state.currentDragPosition.left + 'px'
			target.style.top = state.currentDragPosition.top + 'px'
		}

		function getInitialMousePosition(event) {
			return event && {
				left: event.clientX,
				top: event.clientY
			}
		}

		function getRectPosition() {
			const clientRect = target.getBoundingClientRect()
			if (!clientRect.width || !clientRect.height) {
				return
			}
			return {
				left: clientRect.left + clientRect.width / 2,
				top: clientRect.top + clientRect.height / 2
			}
		}

		function initializeState(event) {
			const state = getState()
			const initialPositionFromState = state.initialPosition
			const currentRectPosition = getRectPosition()
			const initialPosition = initialPositionFromState || currentRectPosition
			setState({
				initialPosition,
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

	unbind(el) {
		const { handler, mouseDown, dblClick } = el[ctx]

		if (handler.getAttribute('draggable')) {
			handler.removeEventListener('mousedown', mouseDown)
			handler.removeEventListener('dblclick', dblClick)
			handler.removeAttribute('draggable')
		}
	}
}
