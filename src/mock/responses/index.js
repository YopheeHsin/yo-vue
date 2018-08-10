import frameworks from './frameworks'
import tasks from './tasks'
import tree from './tree'

const res = [
	['GET', '/frameworks', frameworks],
	['GET', '/tasks', tasks],
	['GET', '/tree', tree],
]

export default res
