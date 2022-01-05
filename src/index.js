import VueAmazingSelecter from './lib/VueAmazingSelecter'

VueAmazingSelecter.install = (Vue) => {
  Vue.component(VueAmazingSelecter.name, VueAmazingSelecter)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default VueAmazingSelecter

