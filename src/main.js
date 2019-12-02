import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)

const moment = require('moment')

new Vue({
  render: h => h(App),
  router,
  store,
  Vuex
}).$mount('#app')

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  if (value) {
    return moment(value).format(formatString)
  } else {
    return '加载中...'
  }
})