function isDef(val) {
	return val !== undefined && val !== null
}


function debounce(func, wait, immediate) {
	let timeout, context, args, timestamp, result

	const later = () => {
		const last = +new Date() - timestamp

		if (last < wait && last >= 0) {
			timeout = setTimeout(later, wait - last)
		} else {
			timeout = null
			if (!immediate) {
				result = func.apply(context, args)
				if (!timeout) context = args = null
			}
		}
	}

	return function() {
		context = this
		args = arguments
		timestamp = +new Date()
		const callNow = immediate && !timeout
		if (!timeout) timeout = setTimeout(later, wait)
		if (callNow) {
			result = func.apply(context, args)
			context = args = null
		}

		return result
	}
}


function throttle(func, wait, options) {
	let timeout, context, args, result
	let previous = 0
	if (!options) options = {}

	const later = () => {
		previous = options.leading === false ? 0 : +new Date()
		timeout = null
		result = func.apply(context, args)
		if (!timeout) context = args = null
	}

	return function() {
		context = this
		args = arguments
		const now = +new Date()
		if (!previous && options.leading === false) previous = now
		const remaining = wait - (now - previous)
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout)
				timeout = null
			}
			previous = now
			result = func.apply(context, args)
			if (!timeout) context = args = null
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining)
		}

		return result
	}
}


function getScrollEventTarget(el, rootParent = window) {
	let currentNode = el
	while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY'
		&& currentNode.nodeType === 1 && currentNode !== rootParent) {
		const overflowY = this.getComputedStyle(currentNode).overflowY
		if (overflowY === 'scroll' || overflowY === 'auto') return currentNode
		currentNode = currentNode.parentNode
	}
	return rootParent
}


function isAttached(el) {
	let currentNode = el.parentNode
	while (currentNode) {
		if (currentNode.tagName === 'HTML') return true
		if (currentNode.nodeType === 11) return false
		currentNode = currentNode.parentNode
	}
	return false
}


function isWindow(el) {
	return el != null && el == el.window
}


function getScrollLeft(el) {
	return isWindow(el) ?
		'pageXOffset' in el ? el.pageXOffset : el.document.documentElement.scrollLeft :
		el.scrollLeft
}


function getScrollTop(el) {
	return isWindow(el) ?
		'pageYOffset' in el ? el.pageYOffset : el.document.documentElement.scrollTop :
		el.scrollTop
}


function setScrollTop(el, val) {
	if (isWindow(el)) {
		el.scrollTo(
			getScrollLeft(el),
			val
		)
	} else {
		el.scrollTop = val
	}
}


function getTop(el) {
	return (isWindow(el) ? 0 : el.getBoundingClientRect().top) + getScrollTop(window)
}


export {
	isDef,
	debounce,
	throttle,
	isAttached,
	getScrollEventTarget,
	getScrollTop,
	setScrollTop,
	getTop
}
