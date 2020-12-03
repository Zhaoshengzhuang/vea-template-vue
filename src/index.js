import Vue from 'vue'
import vealPlugin from '@aev/vue'
import App from './App.vue'
import store from './store'
import router from './router'
import service from './service.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(vealPlugin, {})
Vue.prototype.$service = service(Vue)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
