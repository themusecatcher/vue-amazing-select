// 引入组件
import VueAmazingSelector from './VueAmazingSelector.vue'

// 为组件提供 install 安装方法，供按需引入
VueAmazingSelector.install = (Vue) => {
  Vue.component(VueAmazingSelector.name, VueAmazingSelector)
}

// 导出组件
export default VueAmazingSelector