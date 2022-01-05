// 引入组件
import VueAmazingSelecter from './VueAmazingSelecter.vue'

// 为组件提供 install 安装方法，供按需引入
VueAmazingSelecter.install = (Vue) => {
  Vue.component(VueAmazingSelecter.name, VueAmazingSelecter)
}

// 导出组件
export default VueAmazingSelecter