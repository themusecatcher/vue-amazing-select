import Vue from 'vue'
import App from './App.vue'
import VueAmazingSelector from '../packages'

Vue.config.productionTip = false
Vue.use(VueAmazingSelector)

new Vue({
  render: h => h(App),
}).$mount('#app')
