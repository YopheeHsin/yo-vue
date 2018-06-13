import axios from 'axios'
import adapter from 'axios-mock-adapter'

// import {
// 	Todos
// } from './data/todoList'; // 导入Todos数据

const responses = [
	['GET', '/foo', 200, {
		foo: 'foo'
	}],
	['POST', '/bar', 200, {
		bar: 'bar'
	}]
]

export default {
	init() {
		const mock = new adapter(axios)

		mock.onAny().reply(config => {
			return new Promise((resolve, reject) => {

				setTimeout(() => {
					if (Math.random() > 0.01) {
						const item = responses.filter(([method, url]) => {
							return config.method.toUpperCase() === method && config.url === url
						})

						const [ , , ...response] = item ? item : [null, null, 404, {}]

						resolve(response)
					} else {
						reject([500, {
							code: 500,
							msg: 'Internal Server Error)',
							data: null
						}])
					}
				}, Math.floor(200 + Math.random() * 800))


			})
		})
	}
}
