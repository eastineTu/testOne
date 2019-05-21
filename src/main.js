import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Bmob from "hydrogen-js-sdk"
import '@/assets/flexible.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$bmob = Bmob

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
