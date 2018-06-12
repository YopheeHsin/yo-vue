import Vue from 'vue'
import router from './router'
import store from './store'
import './css/common/normalize'
import _ from 'lodash'
Vue.prototype._ = _

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	router,
	store
}).$mount('#app')
