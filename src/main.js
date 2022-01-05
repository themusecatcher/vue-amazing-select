import Vue from 'vue'
import App from './App.vue'
import VueAmazingSelecter from '../packages'

Vue.config.productionTip = false
Vue.use(VueAmazingSelecter)

new Vue({
  render: h => h(App),
}).$mount('#app')
