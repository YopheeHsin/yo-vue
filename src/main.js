import Vue from 'vue'
import router from './router'
import store from './store'
import './css/common/normalize'

import _ from 'lodash'
Vue.prototype._ = _

import axios from 'axios'
axios.defaults.timeout = 30000
axios.interceptors.response.use(({ data }) => {
	if (data.code > 0) Vue.prototype.$message.error(data.msg)
	return data
}, error => {
	Vue.prototype.$message.error('未知错误')
	return Promise.reject(error)
})
Vue.prototype.$http = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

import mock from './mock'
// eslint-disable-next-line
process.env.NODE_ENV === 'development' && mock.init()

new Vue({
	router,
	store
}).$mount('#app')
