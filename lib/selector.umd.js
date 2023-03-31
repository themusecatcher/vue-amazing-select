(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["selector"] = factory();
	else
		root["selector"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "0ab7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "P[data-v-c780a9dc]{margin:0}.m-amazing-select[data-v-c780a9dc]{position:relative;display:inline-block;font-size:14px;font-weight:400;color:rgba(0,0,0,.65)}.fade-enter-active[data-v-c780a9dc],.fade-leave-active[data-v-c780a9dc]{transform:scaleY(1);transform-origin:0 0;opacity:1;transition:all .2s}.fade-enter[data-v-c780a9dc]{transform:scaleY(.8);transform-origin:0 0;opacity:0}.fade-leave-to[data-v-c780a9dc]{transform:scaleY(1);opacity:0}.m-select-wrap[data-v-c780a9dc]{position:relative;display:inline-block;border:1px solid #d9d9d9;border-radius:4px;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1)}.m-select-wrap .u-select-input[data-v-c780a9dc]{display:block;text-align:left;margin-left:11px;margin-right:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.m-select-wrap .placeholder[data-v-c780a9dc]{color:#bfbfbf}.m-select-wrap .triangle[data-v-c780a9dc]{position:absolute;top:0;bottom:0;margin:auto 0;right:12px;width:12px;height:12px;fill:rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:all .3s ease-in-out}.m-select-wrap .rotate[data-v-c780a9dc]{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.m-select-wrap .close[data-v-c780a9dc]{opacity:0;pointer-events:none;transition:all .3s ease-in-out;position:absolute;top:0;bottom:0;margin:auto 0;right:12px;width:12px;height:12px;fill:hsla(0,0%,54.9%,.6)}.m-select-wrap .close[data-v-c780a9dc]:hover{fill:hsla(0,0%,39.2%,.8)}.m-select-wrap .show[data-v-c780a9dc]{opacity:1;pointer-events:auto}.focus[data-v-c780a9dc],.hover[data-v-c780a9dc]:hover{border-color:#1890ff}.focus[data-v-c780a9dc]{box-shadow:0 0 0 2px rgba(24,144,255,.2)}.disabled[data-v-c780a9dc]{color:rgba(0,0,0,.25);background:#f5f5f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}.m-options-panel[data-v-c780a9dc]{position:absolute;z-index:999;overflow:auto;background:#fff;padding:4px 0;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}.m-options-panel .u-option[data-v-c780a9dc]{text-align:left;position:relative;display:block;padding:5px 12px;font-weight:400;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;transition:background .3s ease}.m-options-panel .option-selected[data-v-c780a9dc]{font-weight:600;background:#fafafa}.m-options-panel .option-hover[data-v-c780a9dc]{background:#e6f7ff}.m-options-panel .option-disabled[data-v-c780a9dc]{color:rgba(0,0,0,.25);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "22de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_c780a9dc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a09");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_c780a9dc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueAmazingSelector_vue_vue_type_style_index_0_id_c780a9dc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

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

/***/ "8a09":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0ab7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a870b8b4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueAmazingSelector", function() { return /* reexport */ vue_amazing_selector; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1db13b7e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=template&id=c780a9dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-amazing-select",style:(("height: " + _vm.height + "px;"))},[_c('div',{class:['m-select-wrap', {'hover': !_vm.disabled, 'focus': _vm.showOptions, 'disabled': _vm.disabled}],style:(("width: " + (_vm.width - 2) + "px; height: " + (_vm.height - 2) + "px;")),attrs:{"tabindex":"0"},on:{"mouseenter":_vm.onInputEnter,"mouseleave":_vm.onInputLeave,"blur":function($event){_vm.activeBlur && !_vm.disabled ? _vm.onBlur() : function (e) { return e.preventDefault(); }},"click":function($event){_vm.disabled ? function (e) { return e.preventDefault(); } : _vm.openSelect()}}},[_c('div',{class:['u-select-input', {'placeholder': !_vm.selectedName}],style:(("line-height: " + (_vm.height - 2) + "px;width: " + (_vm.width - 37) + "px; height: " + (_vm.height - 2) + "px;")),attrs:{"title":_vm.selectedName}},[_vm._v(_vm._s(_vm.selectedName || _vm.placeholder))]),_c('svg',{class:['triangle', {'rotate': _vm.showOptions, 'show': !_vm.showClose}],attrs:{"viewBox":"64 64 896 896","data-icon":"down","aria-hidden":"true","focusable":"false"}},[_c('path',{attrs:{"d":"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}})]),_c('svg',{class:['close', {'show': _vm.showClose}],attrs:{"focusable":"false","data-icon":"close-circle","aria-hidden":"true","viewBox":"64 64 896 896"},on:{"click":function($event){$event.stopPropagation();return _vm.onClear.apply(null, arguments)}}},[_c('path',{attrs:{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}})])]),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOptions),expression:"showOptions"}],staticClass:"m-options-panel",style:(("top: " + (_vm.height + 6) + "px; line-height: " + (_vm.height - 12) + "px; max-height: " + (_vm.num * (_vm.height - 2)) + "px; width: " + _vm.width + "px;")),on:{"mouseenter":_vm.onEnter,"mouseleave":_vm.onLeave}},_vm._l((_vm.options),function(option,index){return _c('p',{key:index,class:['u-option', {'option-selected': option[_vm.label]===_vm.selectedName, 'option-hover': !option.disabled&&option[_vm.value]===_vm.hoverValue, 'option-disabled': option.disabled }],attrs:{"title":option[_vm.label]},on:{"mouseenter":function($event){return _vm.onHover(option[_vm.value])},"click":function($event){option.disabled ? function (e) { return e.preventDefault(); } : _vm.onChange(option[_vm.value], option[_vm.label], index)}}},[_vm._v(" "+_vm._s(option[_vm.label])+" ")])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=template&id=c780a9dc&scoped=true&

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
    options: { // 选项数据
      type: Array,
      default: () => []
    },
    label: { // 选择器字典项的文本字段名
      type: String,
      default: 'label'
    },
    value: { // 选择器字典项的值字段名
      type: String,
      default: 'value'
    },
    placeholder: { // 选择框默认文字
      type: String,
      default: '请选择'
    },
    disabled: { // 是否禁用下拉
      type: Boolean,
      default: false
    },
    allowClear: { // 是否支持清除
      type: Boolean,
      default: false
    },
    width: { // 选择框宽度
      type: Number,
      default: 200
    },
    height: { // 选择框高度
      type: Number,
      default: 36
    },
    num: { // 下拉面板最多能展示的下拉项数，超过后滚动显示
      type: Number,
      default: 6
    },
    selectedValue: { // 当前选中的option条目（v-model）
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      selectedName: null,
      hoverValue: null, // 鼠标悬浮项的value值
      activeBlur: true, // 是否激活blur事件
      showClose: false, // 清除按钮显隐
      showOptions: false // options面板
    }
  },
  watch: {
    options () {
      this.initSelector()
      console.log('options')
    },
    selectedValue () {
      this.initSelector()
      console.log('selectedValue')
    }
  },
  mounted () {
    this.initSelector()
  },
  methods: {
    initSelector () {
      if (this.selectedValue) {
        const target = this.options.find(option => option[this.value] === this.selectedValue)
        if (target) {
          this.selectedName = target[this.label]
          this.hoverValue = target[this.value]
        } else {
          this.selectedName = this.selectedValue
          this.hoverValue = null
        }
      } else {
        this.selectedName = null
        this.hoverValue = null
      }
    },
    onBlur () {
      if (this.showOptions) {
        this.showOptions = false
      }
    },
    onInputEnter () {
  // console.log('input enter')
      if (this.allowClear && this.selectedName) {
        this.showClose = true
      }
    },
    onInputLeave () {
      // console.log('input leave')
      if (this.allowClear && this.showClose) {
        this.showClose = false
      }
    },
    onHover (value) {
      this.hoverValue = value
    },
    onEnter () {
      this.activeBlur = false
    },
    onLeave () {
      this.hoverValue = null
      this.activeBlur = true
    },
    openSelect () {
      this.showOptions = !this.showOptions
      if (!this.hoverValue && this.selectedName) {
        const target = this.options.find(option => option[this.label] === this.selectedName)
        this.hoverValue = target ? target[this.value] : null
      }
    },
    onClear () {
      this.showClose = false
      this.selectedName = null
      this.hoverValue = null
    },
    onChange (value, label, index) { // 选中下拉项后的回调
      if (this.selectedValue !== value) {
        this.selectedName = label
        this.hoverValue = value
        this.$emit('model', value)
        this.$emit('change', value, label, index)
      }
      this.showOptions = false
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_amazing_selector_VueAmazingSelectorvue_type_script_lang_js_ = (VueAmazingSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-amazing-selector/VueAmazingSelector.vue?vue&type=style&index=0&id=c780a9dc&lang=less&scoped=true&
var VueAmazingSelectorvue_type_style_index_0_id_c780a9dc_lang_less_scoped_true_ = __webpack_require__("22de");

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
  "c780a9dc",
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
  components.map(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=selector.umd.js.map