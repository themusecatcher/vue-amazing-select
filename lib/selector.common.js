module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b739":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_14a2df36_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d0cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_14a2df36_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_14a2df36_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d0cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1db13b7e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=template&id=14a2df36&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-amazing-selector",style:(("height: " + _vm.height + "px;"))},[_c('div',{class:['m-select-wrap', { 'hover focus': !_vm.disabled, 'disabled': _vm.disabled }],style:(("width: " + (_vm.width - 2) + "px; height: " + (_vm.height - 2) + "px;")),attrs:{"tabindex":"0"},on:{"blur":_vm.onBlur,"click":function($event){_vm.disabled ? function (e) { return e.preventDefault(); } : _vm.openSelect()}}},[_c('div',{class:['u-select-input', { 'placeholder': !_vm.selectedName }],style:(("line-height: " + (_vm.height - 2) + "px;width: " + (_vm.width - 37) + "px; height: " + (_vm.height - 2) + "px;")),attrs:{"title":_vm.selectedName}},[_vm._v(_vm._s(_vm.selectedName || _vm.placeholder))]),_c('svg',{class:['triangle', { 'rotate': _vm.showOptions }],attrs:{"viewBox":"64 64 896 896","data-icon":"down","aria-hidden":"true","focusable":"false"},on:{"click":_vm.openSelect}},[_c('path',{attrs:{"d":"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}})])]),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOptions),expression:"showOptions"}],staticClass:"m-options-panel",style:(("top: " + (_vm.height + 6) + "px; line-height: " + (_vm.height - 12) + "px; max-height: " + (_vm.num * (_vm.height - 2)) + "px; width: " + _vm.width + "px;")),on:{"mouseleave":_vm.onLeave}},_vm._l((_vm.selectData),function(item,index){return _c('p',{key:index,class:['u-option', {'option-selected': item[_vm.name]===_vm.selectedName, 'option-hover': !item.disabled&&item[_vm.value]===_vm.hoverValue, 'option-disabled': item.disabled }],attrs:{"title":item[_vm.name]},on:{"mouseenter":function($event){return _vm.onEnter(item[_vm.value])},"click":function($event){item.disabled ? function (e) { return e.preventDefault(); } : _vm.onChange(item[_vm.name], item[_vm.value], index)}}},[_vm._v(" "+_vm._s(item[_vm.name])+" ")])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=template&id=14a2df36&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VueAmazingSelectorvue_type_script_lang_js_ = ({
  name: 'VueAmazingSelector',
  model: {
    prop: 'selectedValue',
    event: 'model'
  },
  props: {
    selectData: { // 下拉框字典数据
      type: Array,
      default: () => {
        return []
      }
    },
    defaultValue: { // 下拉初始默认值，在未设置selectedValue（v-model）时生效
      type: [Number, String],
      default: null
    },
    name: { // 下拉字典项的文本字段名
      type: String,
      default: 'name'
    },
    value: { // 下拉字典项的值字段名
      type: String,
      default: 'value'
    },
    labelInValue: { // 是否要同时获取选中项的文本name和值value，默认只能拿到选中项的值value
      type: Boolean,
      default: false
    },
    placeholder: { // 下拉框默认文字
      type: String,
      default: '请选择'
    },
    disabled: { // 是否禁用下拉
      type: Boolean,
      default: false
    },
    width: { // 下拉框宽度
      type: Number,
      default: 200
    },
    height: { // 下拉框高度
      type: Number,
      default: 36
    },
    num: { // 下拉面板最多能展示的下拉项数，超过后滚动显示
      type: Number,
      default: 6
    },
    selectedValue: { // v-model当前选中的下拉值
      type: [Number, String, Object],
      default: null
    }
  },
  data () {
    return {
      selectedName: null,
      hoverValue: null, // 鼠标悬浮项的value值
      showOptions: false
    }
  },
  created () {
    if (this.selectedValue) {
      if (this.labelInValue) {
        this.hoverValue = this.selectedValue[this.value] || ''
        this.selectedName = this.selectedValue[this.name] || ''
      } else {
        this.hoverValue = this.selectedValue || ''
        const target = this.selectData.find(item => item[this.value] === this.selectedValue)
        this.selectedName = target ? target[this.name] : null
      }
    }
    if (!this.selectedValue && this.defaultValue) {
      this.hoverValue = this.defaultValue
      const target = this.selectData.find(item => item[this.value] === this.defaultValue)
      this.selectedName = target ? target[this.name] : null
      if (this.labelInValue) {
        this.$emit('model', target)
      } else {
        this.$emit('model', target[this.value])
      }
    }
  },
  methods: {
    onBlur () {
      if (this.showOptions) {
        this.showOptions = false
      }
    },
    onEnter (value) {
      this.hoverValue = value
    },
    onLeave () {
      this.hoverValue = null
    },
    openSelect () {
      this.showOptions = !this.showOptions
      if (!this.hoverValue) {
        const target = this.selectData.find(item => item[this.name] === this.selectedName)
        this.hoverValue = target[this.value]
      }
    },
    onChange (name, value, index) { // 选中下拉项后的回调
      this.selectedName = name
      this.hoverValue = value
      this.showOptions = false
      if (this.labelInValue) {
        this.$emit('model', { [this.name]: name, [this.value]: value })
      } else {
        this.$emit('model', value)
      }
      this.$emit('change', name, value, index)
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_amazing_selector_VueAmazingSelectorvue_type_script_lang_js_ = (VueAmazingSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=style&index=0&id=14a2df36&lang=less&scoped=true&
var VueAmazingSelectorvue_type_style_index_0_id_14a2df36_lang_less_scoped_true_ = __webpack_require__("b739");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue






/* normalize component */

var component = normalizeComponent(
  vue_amazing_selector_VueAmazingSelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "14a2df36",
  null
  
)

/* harmony default export */ var VueAmazingSelector = (component.exports);
// CONCATENATED MODULE: ./packages/vue-amazing-selector/index.js
// 引入组件


// 为组件提供 install 安装方法，供按需引入
VueAmazingSelector.install = (Vue) => {
  Vue.component(VueAmazingSelector.name, VueAmazingSelector)
}

// 导出组件
/* harmony default export */ var vue_amazing_selector = (VueAmazingSelector);
// CONCATENATED MODULE: ./packages/index.js

// 存储组件列表
const components = [
  vue_amazing_selector
]
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) { return }
  // 遍历所有组件
  components.map(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install,
  VueAmazingSelector: vue_amazing_selector
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=selector.common.js.map