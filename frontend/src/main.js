import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import * as jquery from 'jquery'


Vue.config.productionTip = false
Vue.prototype.jquery = jquery

new Vue({
  render: h => h(App),
}).$mount('#app')
