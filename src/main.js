import Vue from 'vue'
import App from './App.vue'
import Select from './lib/vue-amazing-select/lib'

Vue.use(Select)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
