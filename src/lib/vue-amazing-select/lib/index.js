import Select from './Select'

// 定义插件
const plugin = {
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  install(Vue) {
    // 将其注册为vue的组件，'vpay'是组件名，keyboard是我们开发的组件
    Vue.component('Select', Select)
  }
}

// 导出插件，在main.js中通过Vue.use()即可使用
export default plugin
