import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Bmob from "hydrogen-js-sdk"
import '@/assets/flexible.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Bmob.initialize('5341f8e254942033b3dae717daa7eed5', '4e0664824ca488cccad8fe1508a2baa0');
Vue.prototype.$bmob = Bmob

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
