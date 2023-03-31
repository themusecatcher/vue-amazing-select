import Vue from 'vue'
import App from './App.vue'
// import VueAmazingSelector from '../lib/selector.umd.min' // 引入打包后的组件验证使用
import VueAmazingSelector from '../packages'

Vue.config.productionTip = false
Vue.use(VueAmazingSelector)

new Vue({
  render: h => h(App),
}).$mount('#app')
