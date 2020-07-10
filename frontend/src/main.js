import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import * as jquery from 'jquery'
import VeeValidate from 'vee-validate'


Vue.config.productionTip = false
Vue.prototype.jquery = jquery
Vue.use(VeeValidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
