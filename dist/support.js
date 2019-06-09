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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0016":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dde5");


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'QIcon',
  props: {
    name: String,
    color: String,
    size: String,
    left: Boolean,
    right: Boolean
  },
  computed: {
    type: function type() {
      var cls;
      var icon = this.name;

      if (!icon) {
        return {
          cls: void 0,
          content: void 0
        };
      }

      var commonCls = 'q-icon' + (this.left === true ? ' on-left' : '') + (this.right === true ? ' on-right' : '');

      if (icon.startsWith('img:') === true) {
        return {
          img: true,
          cls: commonCls,
          src: icon.substring(4)
        };
      }

      var content = ' ';

      if (/^fa[s|r|l|b]{0,1} /.test(icon) || icon.startsWith('icon-') === true) {
        cls = icon;
      } else if (icon.startsWith('bt-') === true) {
        cls = "bt ".concat(icon);
      } else if (icon.startsWith('eva-') === true) {
        cls = "eva ".concat(icon);
      } else if (/^ion-(md|ios|logo)/.test(icon) === true) {
        cls = "ionicons ".concat(icon);
      } else if (icon.startsWith('ion-') === true) {
        cls = "ionicons ion-".concat(this.$q.platform.is.ios === true ? 'ios' : 'md').concat(icon.substr(3));
      } else if (icon.startsWith('mdi-') === true) {
        cls = "mdi ".concat(icon);
      } else if (icon.startsWith('iconfont ') === true) {
        cls = "".concat(icon);
      } else if (icon.startsWith('ti-') === true) {
        cls = "themify-icon ".concat(icon);
      } else {
        cls = 'material-icons';
        content = icon;
      }

      return {
        cls: cls + ' ' + commonCls + (this.color !== void 0 ? " text-".concat(this.color) : ''),
        content: content
      };
    },
    style: function style() {
      if (this.size !== void 0) {
        return {
          fontSize: this.size
        };
      }
    }
  },
  render: function render(h) {
    return this.type.img === true ? h('img', {
      staticClass: this.type.cls,
      style: this.style,
      on: this.$listeners,
      attrs: {
        src: this.type.src
      }
    }) : h('i', {
      staticClass: this.type.cls,
      style: this.style,
      on: this.$listeners,
      attrs: {
        'aria-hidden': true
      }
    }, [this.type.content, Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, 'default')]);
  }
}));

/***/ }),

/***/ "033f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dde5");



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'QItemSection',
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  computed: {
    classes: function classes() {
      var side = this.avatar || this.side || this.thumbnail;
      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        'q-item__section--top': this.top,
        'q-item__section--avatar': this.avatar,
        'q-item__section--thumbnail': this.thumbnail,
        'q-item__section--side': side,
        'q-item__section--nowrap': this.noWrap,
        'q-item__section--main': !side
      }, "justify-".concat(this.top ? 'start' : 'center'), true);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-item__section column',
      class: this.classes,
      on: this.$listeners
    }, Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, 'default'));
  }
}));

/***/ }),

/***/ "05bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/String.vue?vue&type=template&id=8cf6ab96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-string row"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"square":"","dense":"","dark":"","clearable":"","standout":"bg-secondary","value":_vm.prop.value || '',"placeholder":"(未设置)"},on:{"change":_vm.onInput}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/String.vue?vue&type=template&id=8cf6ab96&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/String.vue?vue&type=script&lang=ts&









var Stringvue_type_script_lang_ts_PaStringProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaStringProp, _PropInput);

  function PaStringProp() {
    classCallCheck_default()(this, PaStringProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaStringProp).apply(this, arguments));
  }

  createClass_default()(PaStringProp, [{
    key: "onInput",
    value: function onInput($event) {
      var value = $event.target.value;
      this.commit(value);
    }
  }]);

  return PaStringProp;
}(PropInput["a" /* default */]);

Stringvue_type_script_lang_ts_PaStringProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaStringProp'
})], Stringvue_type_script_lang_ts_PaStringProp);
/* harmony default export */ var Stringvue_type_script_lang_ts_ = (Stringvue_type_script_lang_ts_PaStringProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/String.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Stringvue_type_script_lang_ts_ = (Stringvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/String.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Stringvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var props_String = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0676":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "0831":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollTarget; });
/* unused harmony export getScrollHeight */
/* unused harmony export getScrollWidth */
/* unused harmony export getScrollPosition */
/* unused harmony export getHorizontalScrollPosition */
/* unused harmony export animScrollTo */
/* unused harmony export animHorizontalScrollTo */
/* unused harmony export setScrollPosition */
/* unused harmony export setHorizontalScrollPosition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasScrollbar; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f303");

function getScrollTarget(el) {
  return el.closest('.scroll,.scroll-y,.overflow-auto') || window;
}
function getScrollHeight(el) {
  return (el === window ? document.body : el).scrollHeight;
}
function getScrollWidth(el) {
  return (el === window ? document.body : el).scrollWidth;
}
function getScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
  }

  return scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
  }

  return scrollTarget.scrollLeft;
}
function animScrollTo(el, to, duration) {
  var pos = getScrollPosition(el);

  if (duration <= 0) {
    if (pos !== to) {
      setScroll(el, to);
    }

    return;
  }

  requestAnimationFrame(function () {
    var newPos = pos + (to - pos) / Math.max(16, duration) * 16;
    setScroll(el, newPos);

    if (newPos !== to) {
      animScrollTo(el, to, duration - 16);
    }
  });
}
function animHorizontalScrollTo(el, to, duration) {
  var pos = getHorizontalScrollPosition(el);

  if (duration <= 0) {
    if (pos !== to) {
      setHorizontalScroll(el, to);
    }

    return;
  }

  requestAnimationFrame(function () {
    var newPos = pos + (to - pos) / Math.max(16, duration) * 16;
    setHorizontalScroll(el, newPos);

    if (newPos !== to) {
      animHorizontalScrollTo(el, to, duration - 16);
    }
  });
}

function setScroll(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(0, offset);
    return;
  }

  scrollTarget.scrollTop = offset;
}

function setHorizontalScroll(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(offset, 0);
    return;
  }

  scrollTarget.scrollLeft = offset;
}

function setScrollPosition(scrollTarget, offset, duration) {
  if (duration) {
    animScrollTo(scrollTarget, offset, duration);
    return;
  }

  setScroll(scrollTarget, offset);
}
function setHorizontalScrollPosition(scrollTarget, offset, duration) {
  if (duration) {
    animHorizontalScrollTo(scrollTarget, offset, duration);
    return;
  }

  setHorizontalScroll(scrollTarget, offset);
}
var size;
function getScrollbarWidth() {
  if (size !== undefined) {
    return size;
  }

  var inner = document.createElement('p'),
      outer = document.createElement('div');
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[/* css */ "a"])(inner, {
    width: '100%',
    height: '200px'
  });
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[/* css */ "a"])(outer, {
    position: 'absolute',
    top: '0px',
    left: '0px',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el) {
  var onY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-y'])) : el.scrollWidth > el.clientWidth && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-x']));
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  getScrollTarget: getScrollTarget,
  getScrollHeight: getScrollHeight,
  getScrollWidth: getScrollWidth,
  getScrollPosition: getScrollPosition,
  getHorizontalScrollPosition: getHorizontalScrollPosition,
  animScrollTo: animScrollTo,
  animHorizontalScrollTo: animHorizontalScrollTo,
  setScrollPosition: setScrollPosition,
  setHorizontalScrollPosition: setHorizontalScrollPosition,
  getScrollbarWidth: getScrollbarWidth,
  hasScrollbar: hasScrollbar
});

/***/ }),

/***/ "0967":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onSSR; });
/* unused harmony export hasWebStorage */
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3156");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable no-useless-escape */

/* eslint-disable no-unused-expressions */

/* eslint-disable no-mixed-operators */

var isSSR = typeof window === 'undefined';
var fromSSR = false;
var onSSR = isSSR;

function getMatch(userAgent, platformMatch) {
  var match = /(edge)\/([\w.]+)/.exec(userAgent) || /(opr)[\/]([\w.]+)/.exec(userAgent) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent) || /(chrome)[\/]([\w.]+)/.exec(userAgent) || /(iemobile)[\/]([\w.]+)/.exec(userAgent) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+)/.exec(userAgent) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) || /(msie) ([\w.]+)/.exec(userAgent) || userAgent.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(userAgent) || userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent) || [];
  return {
    browser: match[5] || match[3] || match[1] || '',
    version: match[2] || match[4] || '0',
    versionNumber: match[4] || match[2] || '0',
    platform: platformMatch[0] || ''
  };
}

function getPlatformMatch(userAgent) {
  return /(ipad)/.exec(userAgent) || /(ipod)/.exec(userAgent) || /(windows phone)/.exec(userAgent) || /(iphone)/.exec(userAgent) || /(kindle)/.exec(userAgent) || /(silk)/.exec(userAgent) || /(android)/.exec(userAgent) || /(win)/.exec(userAgent) || /(mac)/.exec(userAgent) || /(linux)/.exec(userAgent) || /(cros)/.exec(userAgent) || /(playbook)/.exec(userAgent) || /(bb)/.exec(userAgent) || /(blackberry)/.exec(userAgent) || [];
}

function getPlatform(userAgent) {
  userAgent = (userAgent || navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
  var platformMatch = getPlatformMatch(userAgent),
      matched = getMatch(userAgent, platformMatch),
      browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if (matched.platform) {
    browser[matched.platform] = true;
  }

  var knownMobiles = browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser['windows phone']; // These are all considered mobile platforms, meaning they run a mobile browser

  if (knownMobiles === true || userAgent.indexOf('mobile') > -1) {
    browser.mobile = true;
  } // If it's not mobile we should consider it's desktop platform, meaning it runs a desktop browser
  // It's a workaround for anonymized user agents
  // (browser.cros || browser.mac || browser.linux || browser.win)
  else {
      browser.desktop = true;
    } // Set iOS if on iPod, iPad or iPhone


  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }

  if (browser['windows phone']) {
    browser.winphone = true;
    delete browser['windows phone'];
  } // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers


  if (browser.chrome || browser.opr || browser.safari || browser.vivaldi || // we expect unknown, non iOS mobile browsers to be webkit based
  browser.mobile === true && browser.ios !== true && knownMobiles !== true) {
    browser.webkit = true;
  } // IE11 has a new token so we will assign it msie to avoid breaking changes


  if (browser.rv || browser.iemobile) {
    matched.browser = 'ie';
    browser.ie = true;
  } // Edge is officially known as Microsoft Edge, so rewrite the key to match


  if (browser.edge) {
    matched.browser = 'edge';
    browser.edge = true;
  } // Blackberry browsers are marked as Safari on BlackBerry


  if (browser.safari && browser.blackberry || browser.bb) {
    matched.browser = 'blackberry';
    browser.blackberry = true;
  } // Playbook browsers are marked as Safari on Playbook


  if (browser.safari && browser.playbook) {
    matched.browser = 'playbook';
    browser.playbook = true;
  } // Opera 15+ are identified as opr


  if (browser.opr) {
    matched.browser = 'opera';
    browser.opera = true;
  } // Stock Android browsers are marked as Safari on Android.


  if (browser.safari && browser.android) {
    matched.browser = 'android';
    browser.android = true;
  } // Kindle browsers are marked as Safari on Kindle


  if (browser.safari && browser.kindle) {
    matched.browser = 'kindle';
    browser.kindle = true;
  } // Kindle Silk browsers are marked as Safari on Kindle


  if (browser.safari && browser.silk) {
    matched.browser = 'silk';
    browser.silk = true;
  }

  if (browser.vivaldi) {
    matched.browser = 'vivaldi';
    browser.vivaldi = true;
  } // Assign the name and platform variable


  browser.name = matched.browser;
  browser.platform = matched.platform;

  if (isSSR === false) {
    if (window.process && window.process.versions && window.process.versions.electron) {
      browser.electron = true;
    } else if (document.location.href.indexOf('chrome-extension://') === 0) {
      browser.chromeExt = true;
    } else if (window._cordovaNative || window.cordova) {
      browser.cordova = true;
    }

    fromSSR = browser.cordova === void 0 && browser.electron === void 0 && !!document.querySelector('[data-server-rendered]');
    fromSSR === true && (onSSR = true);
  }

  return browser;
}

var webStorage;
function hasWebStorage() {
  if (webStorage !== void 0) {
    return webStorage;
  }

  try {
    if (window.localStorage) {
      webStorage = true;
      return true;
    }
  } catch (e) {}

  webStorage = false;
  return false;
}

function getClientProperties() {
  return {
    has: {
      touch: function () {
        return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
      }(),
      webStorage: hasWebStorage()
    },
    within: {
      iframe: window.self !== window.top
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  has: {
    touch: false,
    webStorage: false
  },
  within: {
    iframe: false
  },
  parseSSR: function parseSSR(
  /* ssrContext */
  ssr) {
    return ssr ? {
      is: getPlatform(ssr.req.headers['user-agent']),
      has: this.has,
      within: this.within
    } : _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      is: getPlatform()
    }, getClientProperties());
  },
  install: function install($q, queues) {
    var _this = this;

    if (isSSR === true) {
      queues.server.push(function (q, ctx) {
        q.platform = _this.parseSSR(ctx.ssr);
      });
      return;
    }

    this.is = getPlatform();

    if (fromSSR === true) {
      queues.takeover.push(function (q) {
        onSSR = fromSSR = false;
        Object.assign(q.platform, getClientProperties());
      });
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.util.defineReactive($q, 'platform', this);
    } else {
      Object.assign(this, getClientProperties());
      $q.platform = this;
    }
  }
});

/***/ }),

/***/ "0d59":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/spinner-mixin.js
/* harmony default export */ var spinner_mixin = ({
  props: {
    color: String,
    size: {
      type: [Number, String],
      default: '1em'
    }
  },
  computed: {
    classes: function classes() {
      if (this.color) {
        return "text-".concat(this.color);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js


/* harmony default export */ var QSpinner = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QSpinner',
  mixins: [spinner_mixin],
  props: {
    thickness: {
      type: Number,
      default: 5
    }
  },
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner q-spinner-mat',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.size,
        'height': this.size,
        'viewBox': '25 25 50 50'
      }
    }, [h('circle', {
      staticClass: 'path',
      attrs: {
        'cx': '50',
        'cy': '50',
        'r': '20',
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-width': this.thickness,
        'stroke-miterlimit': '10'
      }
    })]);
  }
}));

/***/ }),

/***/ "11b0":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "1732":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
});

/***/ }),

/***/ "1752":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Theme.vue?vue&type=template&id=2fcaf17a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-theme row"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col"},[_c('q-select',{attrs:{"dense":"","borderless":"","standout":"","clearable":"","dark":"","options-dark":"","toggle-color":"secondary","placeholder":"dark","value":_vm.prop.value? _vm.prop.value.name: undefined,"options":[
        'dark',
        'warm',
        'cold'
      ]},on:{"input":_vm.onInput}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Theme.vue?vue&type=template&id=2fcaf17a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 1 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/ripple.js + 1 modules
var ripple = __webpack_require__("3d69");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/chip/QChip.js






/* harmony default export */ var QChip = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QChip',
  mixins: [ripple["a" /* default */]],
  model: {
    event: 'remove'
  },
  props: {
    dense: Boolean,
    icon: String,
    iconRight: String,
    label: [String, Number],
    color: String,
    textColor: String,
    value: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    tabindex: [String, Number],
    disable: Boolean
  },
  computed: {
    classes: function classes() {
      var _ref;

      var text = this.outline ? this.color || this.textColor : this.textColor;
      return _ref = {}, defineProperty_default()(_ref, "bg-".concat(this.color), this.outline === false && this.color !== void 0), defineProperty_default()(_ref, "text-".concat(text, " q-chip--colored"), text), defineProperty_default()(_ref, "disabled", this.disable), defineProperty_default()(_ref, 'q-chip--dense', this.dense), defineProperty_default()(_ref, 'q-chip--outline', this.outline), defineProperty_default()(_ref, 'q-chip--selected', this.selected), defineProperty_default()(_ref, 'q-chip--clickable cursor-pointer non-selectable q-hoverable', this.isClickable), defineProperty_default()(_ref, 'q-chip--square', this.square), _ref;
    },
    hasLeftIcon: function hasLeftIcon() {
      return this.selected === true || this.icon !== void 0;
    },
    isClickable: function isClickable() {
      return this.disable === false && (this.clickable === true || this.selected !== null);
    },
    computedTabindex: function computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    __onKeyup: function __onKeyup(e) {
      e.keyCode === 13
      /* ENTER */
      && this.__onClick(e);
    },
    __onClick: function __onClick(e) {
      if (!this.disable) {
        this.$emit('update:selected', !this.selected);
        this.$emit('click', e);
      }
    },
    __onRemove: function __onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        Object(utils_event["h" /* stopAndPrevent */])(e);
        !this.disable && this.$emit('remove', false);
      }
    },
    __getContent: function __getContent(h) {
      var child = [];
      this.isClickable && child.push(h('div', {
        staticClass: 'q-focus-helper'
      }));
      this.hasLeftIcon && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--left',
        props: {
          name: this.selected === true ? this.$q.iconSet.chip.selected : this.icon
        }
      }));
      child.push(h('div', {
        staticClass: 'q-chip__content row no-wrap items-center q-anchor--skip'
      }, this.label !== void 0 ? [this.label] : Object(slot["a" /* default */])(this, 'default')));
      this.iconRight && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--right',
        props: {
          name: this.iconRight
        }
      }));
      this.removable && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--remove cursor-pointer',
        props: {
          name: this.$q.iconSet.chip.remove
        },
        attrs: {
          tabindex: this.computedTabindex
        },
        nativeOn: {
          click: this.__onRemove,
          keyup: this.__onRemove
        }
      }));
      return child;
    }
  },
  render: function render(h) {
    if (!this.value) {
      return;
    }

    var data = this.isClickable ? {
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.__onClick,
        keyup: this.__onKeyup
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }]
    } : {};
    data.staticClass = 'q-chip row inline no-wrap items-center';
    data.class = this.classes;
    return h('div', data, this.__getContent(h));
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItem.js + 1 modules
var QItem = __webpack_require__("6ab5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItemSection.js
var QItemSection = __webpack_require__("033f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItemLabel.js
var QItemLabel = __webpack_require__("e208");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 5 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/model-toggle.js
var model_toggle = __webpack_require__("7ee0");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/portal.js + 1 modules
var portal = __webpack_require__("9e62");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/scroll.js
var utils_scroll = __webpack_require__("0831");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/prevent-scroll.js



var registered = 0;

function onWheel(e) {
  if (shouldPreventScroll(e)) {
    Object(utils_event["h" /* stopAndPrevent */])(e);
  }
}

function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) {
    return true;
  }

  var path = Object(utils_event["b" /* getEventPath */])(e),
      shift = e.shiftKey && !e.deltaX,
      scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
      delta = shift || scrollY ? e.deltaY : e.deltaX;

  for (var index = 0; index < path.length; index++) {
    var el = path[index];

    if (Object(utils_scroll["c" /* hasScrollbar */])(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }

  return true;
}

function prevent(register) {
  registered += register ? 1 : -1;

  if (registered > 1) {
    return;
  }

  var action = register ? 'add' : 'remove';

  if (Platform["a" /* default */].is.mobile) {
    document.body.classList[action]('q-body--prevent-scroll');
  } else if (Platform["a" /* default */].is.desktop) {
    // ref. https://developers.google.com/web/updates/2017/01/scrolling-intervention
    window["".concat(action, "EventListener")]('wheel', onWheel, utils_event["d" /* listenOpts */].notPassive);
  }
}

/* harmony default export */ var prevent_scroll = ({
  methods: {
    __preventScroll: function __preventScroll(state) {
      if (this.preventedScroll === void 0 && state !== true) {
        return;
      }

      if (state !== this.preventedScroll) {
        this.preventedScroll = state;
        prevent(state);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/escape-key.js
var escape_key = __webpack_require__("a267");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js








var maximizedModals = 0;
var positionClass = {
  standard: 'fixed-full flex-center',
  top: 'fixed-top justify-center',
  bottom: 'fixed-bottom justify-center',
  right: 'fixed-right items-center',
  left: 'fixed-left items-center'
};
var transitions = {
  top: ['down', 'up'],
  bottom: ['up', 'down'],
  right: ['left', 'right'],
  left: ['right', 'left']
};
/* harmony default export */ var QDialog = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QDialog',
  mixins: [model_toggle["a" /* default */], portal["a" /* default */], prevent_scroll],
  modelToggle: {
    history: true
  },
  props: {
    persistent: Boolean,
    autoClose: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: 'standard',
      validator: function validator(val) {
        return val === 'standard' || ['top', 'bottom', 'left', 'right'].includes(val);
      }
    },
    transitionShow: {
      type: String,
      default: 'scale'
    },
    transitionHide: {
      type: String,
      default: 'scale'
    }
  },
  data: function data() {
    return {
      transitionState: this.showing
    };
  },
  watch: {
    $route: function $route() {
      this.persistent !== true && this.noRouteDismiss !== true && this.seamless !== true && this.hide();
    },
    showing: function showing(val) {
      var _this = this;

      if (this.position !== 'standard' || this.transitionShow !== this.transitionHide) {
        this.$nextTick(function () {
          _this.transitionState = val;
        });
      }
    },
    maximized: function maximized(newV, oldV) {
      if (this.showing === true) {
        this.__updateState(false, oldV);

        this.__updateState(true, newV);
      }
    },
    seamless: function seamless(v) {
      this.showing === true && this.__preventScroll(!v);
    },
    useBackdrop: function useBackdrop(v) {
      if (this.$q.platform.is.desktop === true) {
        var action = "".concat(v === true ? 'add' : 'remove', "EventListener");
        document.body[action]('focusin', this.__onFocusChange);
      }
    }
  },
  computed: {
    classes: function classes() {
      return "q-dialog__inner--".concat(this.maximized === true ? 'maximized' : 'minimized', " ") + "q-dialog__inner--".concat(this.position, " ").concat(positionClass[this.position]) + (this.fullWidth === true ? ' q-dialog__inner--fullwidth' : '') + (this.fullHeight === true ? ' q-dialog__inner--fullheight' : '') + (this.square === true ? ' q-dialog__inner--square' : '');
    },
    transition: function transition() {
      return 'q-transition--' + (this.position === 'standard' ? this.transitionState === true ? this.transitionHide : this.transitionShow : 'slide-' + transitions[this.position][this.transitionState === true ? 1 : 0]);
    },
    useBackdrop: function useBackdrop() {
      return this.showing === true && this.seamless !== true;
    }
  },
  methods: {
    focus: function focus() {
      var node = this.__portal.$refs !== void 0 ? this.__portal.$refs.inner : void 0;

      if (node === void 0 || node.contains(document.activeElement) === true) {
        return;
      }

      if (this.$q.platform.is.ios) {
        // workaround the iOS hover/touch issue
        this.avoidAutoClose = true;
        node.click();
        this.avoidAutoClose = false;
      }

      node = node.querySelector('[autofocus]') || node;
      node.focus();
    },
    shake: function shake() {
      this.focus();
      var node = this.__portal.$refs !== void 0 ? this.__portal.$refs.inner : void 0;

      if (node !== void 0) {
        node.classList.remove('q-animate--scale');
        node.classList.add('q-animate--scale');
        clearTimeout(this.shakeTimeout);
        this.shakeTimeout = setTimeout(function () {
          node.classList.remove('q-animate--scale');
        }, 170);
      }
    },
    __show: function __show(evt) {
      var _this2 = this;

      clearTimeout(this.timer);
      this.__refocusTarget = this.noRefocus === false ? document.activeElement : void 0;
      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-show', {
        bubbles: true
      }));

      this.__updateState(true, this.maximized);

      escape_key["a" /* default */].register(this, function () {
        if (_this2.seamless !== true) {
          if (_this2.persistent === true || _this2.noEscDismiss === true) {
            _this2.maximized !== true && _this2.shake();
          } else {
            _this2.$emit('escape-key');

            _this2.hide();
          }
        }
      });

      this.__showPortal();

      if (this.noFocus !== true) {
        document.activeElement.blur();
        this.$nextTick(function () {
          _this2.focus();
        });
      }

      if (this.$q.platform.is.desktop === true && this.useBackdrop === true) {
        document.body.addEventListener('focusin', this.__onFocusChange);
      }

      this.timer = setTimeout(function () {
        _this2.$emit('show', evt);
      }, 300);
    },
    __hide: function __hide(evt) {
      var _this3 = this;

      this.__cleanup(true);

      if (this.__refocusTarget !== void 0) {
        this.__refocusTarget.focus();
      }

      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));
      this.timer = setTimeout(function () {
        _this3.__hidePortal();

        _this3.$emit('hide', evt);
      }, 300);
    },
    __cleanup: function __cleanup(hiding) {
      clearTimeout(this.timer);
      clearTimeout(this.shakeTimeout);

      if (this.$q.platform.is.desktop === true && this.seamless !== true) {
        document.body.removeEventListener('focusin', this.__onFocusChange);
      }

      if (hiding === true || this.showing === true) {
        escape_key["a" /* default */].pop(this);

        this.__updateState(false, this.maximized);
      }
    },
    __updateState: function __updateState(opening, maximized) {
      if (this.seamless !== true) {
        this.__preventScroll(opening);
      }

      if (maximized === true) {
        if (opening === true) {
          maximizedModals < 1 && document.body.classList.add('q-body--dialog');
        } else if (maximizedModals < 2) {
          document.body.classList.remove('q-body--dialog');
        }

        maximizedModals += opening === true ? 1 : -1;
      }
    },
    __onAutoClose: function __onAutoClose(e) {
      if (this.avoidAutoClose !== true) {
        this.hide(e);
        this.$listeners.click !== void 0 && this.$emit('click', e);
      }
    },
    __onBackdropClick: function __onBackdropClick(e) {
      if (this.persistent !== true && this.noBackdropDismiss !== true) {
        this.hide(e);
      } else {
        this.shake();
      }
    },
    __onFocusChange: function __onFocusChange(e) {
      if (this.__portal !== void 0 && this.__portal.$el !== void 0 && // we don't have another portal opened:
      this.__portal.$el.nextElementSibling === null && this.__portal.$el.contains(e.target) !== true) {
        this.__portal.$refs.inner.focus();
      }
    },
    __render: function __render(h) {
      var on = objectSpread_default()({}, this.$listeners, {
        input: utils_event["g" /* stop */]
      });

      if (this.autoClose === true) {
        on.click = this.__onAutoClose;
      }

      return h('div', {
        staticClass: 'q-dialog fullscreen no-pointer-events',
        class: this.contentClass,
        style: this.contentStyle,
        attrs: this.$attrs
      }, [h('transition', {
        props: {
          name: 'q-transition--fade'
        }
      }, this.useBackdrop === true ? [h('div', {
        staticClass: 'q-dialog__backdrop fixed-full',
        on: {
          touchmove: utils_event["h" /* stopAndPrevent */],
          // prevent iOS page scroll
          click: this.__onBackdropClick
        }
      })] : null), h('transition', {
        props: {
          name: this.transition
        }
      }, [this.showing === true ? h('div', {
        ref: 'inner',
        staticClass: 'q-dialog__inner flex no-pointer-events',
        class: this.classes,
        attrs: {
          tabindex: -1
        },
        on: on
      }, Object(slot["a" /* default */])(this, 'default')) : null])]);
    },
    __onPortalClose: function __onPortalClose(evt) {
      this.hide(evt);
    }
  },
  mounted: function mounted() {
    this.value === true && this.show();
  },
  beforeDestroy: function beforeDestroy() {
    this.__cleanup();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/utils/is.js
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }

  var props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    return false;
  }

  return props.every(function (prop) {
    return isDeepEqual(a[prop], b[prop]);
  });
}
function isPrintableChar(v) {
  return v > 47 && v < 58 || // number keys
  v === 32 || v === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
  v > 64 && v < 91 || // letter keys
  v > 95 && v < 112 || // numpad keys
  v > 185 && v < 193 || // ;=,-./` (in order)
  v > 218 && v < 223;
}
function isObject(v) {
  return Object(v) === v;
}
function isDate(v) {
  return Object.prototype.toString.call(v) === '[object Date]';
}
function isRegexp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]';
}
function isNumber(v) {
  return typeof v === 'number' && isFinite(v);
}
function isString(v) {
  return typeof v === 'string';
}
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__("7937");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/select/QSelect.js















var validateNewValueMode = function validateNewValueMode(v) {
  return ['add', 'add-unique', 'toggle'].includes(v);
};

/* harmony default export */ var QSelect = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QSelect',
  mixins: [QField["a" /* default */]],
  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueSanitize: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: Boolean,
    optionsSelectedClass: String,
    optionsCover: Boolean,
    optionsSanitize: Boolean,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    transitionShow: {
      type: String,
      default: 'fade'
    },
    transitionHide: {
      type: String,
      default: 'fade'
    }
  },
  data: function data() {
    return {
      menu: false,
      dialog: false,
      optionIndex: -1,
      optionsToShow: 20,
      inputValue: ''
    };
  },
  watch: {
    innerValue: {
      handler: function handler() {
        if (this.useInput === true && this.fillInput === true && this.multiple !== true && // Prevent re-entering in filter while filtering
        // Also prevent clearing inputValue while filtering
        this.innerLoading !== true && (this.dialog !== true && this.menu !== true || this.hasValue !== true)) {
          this.__resetInputValue();

          if (this.dialog === true || this.menu === true) {
            this.filter('');
          }
        }
      },
      immediate: true
    },
    menu: function menu(show) {
      this.__updateMenu(show);
    }
  },
  computed: {
    fieldClass: function fieldClass() {
      return "q-select q-field--auto-height q-select--with".concat(this.useInput !== true ? 'out' : '', "-input");
    },
    menuClass: function menuClass() {
      return (this.optionsDark === true ? 'q-select__menu--dark' : '') + (this.popupContentClass ? ' ' + this.popupContentClass : '');
    },
    innerValue: function innerValue() {
      var _this = this;

      var mapNull = this.mapOptions === true && this.multiple !== true,
          val = this.value !== void 0 && (this.value !== null || mapNull === true) ? this.multiple === true ? this.value : [this.value] : [];
      return this.mapOptions === true && Array.isArray(this.options) === true ? this.value === null && mapNull === true ? val.map(function (v) {
        return _this.__getOption(v);
      }).filter(function (v) {
        return v !== null;
      }) : val.map(function (v) {
        return _this.__getOption(v);
      }) : val;
    },
    noOptions: function noOptions() {
      return this.options === void 0 || this.options === null || this.options.length === 0;
    },
    selectedString: function selectedString() {
      var _this2 = this;

      return this.innerValue.map(function (opt) {
        return _this2.__getOptionLabel(opt);
      }).join(', ');
    },
    displayAsText: function displayAsText() {
      return this.displayValueSanitize === true || this.displayValue === void 0 && (this.optionsSanitize === true || this.innerValue.some(function (opt) {
        return opt !== null && opt.sanitize === true;
      }));
    },
    selectedScope: function selectedScope() {
      var _this3 = this;

      var tabindex = this.focused === true ? 0 : -1;
      return this.innerValue.map(function (opt, i) {
        return {
          index: i,
          opt: opt,
          sanitize: _this3.optionsSanitize === true || opt.sanitize === true,
          selected: true,
          removeAtIndex: _this3.__removeAtIndexAndFocus,
          toggleOption: _this3.toggleOption,
          tabindex: tabindex
        };
      });
    },
    optionScope: function optionScope() {
      var _this4 = this;

      return this.options.slice(0, this.optionsToShow).map(function (opt, i) {
        var disable = _this4.__isDisabled(opt);

        var itemProps = {
          clickable: true,
          active: false,
          activeClass: _this4.optionsSelectedClass,
          manualFocus: true,
          focused: false,
          disable: disable,
          tabindex: -1,
          dense: _this4.optionsDense,
          dark: _this4.optionsDark
        };

        if (disable !== true) {
          _this4.__isSelected(opt) === true && (itemProps.active = true);
          _this4.optionIndex === i && (itemProps.focused = true);
        }

        var itemEvents = {
          click: function click() {
            _this4.toggleOption(opt);
          }
        };

        if (_this4.$q.platform.is.desktop === true) {
          itemEvents.mousemove = function () {
            _this4.setOptionIndex(i);
          };
        }

        return {
          index: i,
          opt: opt,
          sanitize: _this4.optionsSanitize === true || opt.sanitize === true,
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption: _this4.toggleOption,
          setOptionIndex: _this4.setOptionIndex,
          itemProps: itemProps,
          itemEvents: itemEvents
        };
      });
    },
    dropdownArrowIcon: function dropdownArrowIcon() {
      return this.dropdownIcon !== void 0 ? this.dropdownIcon : this.$q.iconSet.arrow.dropdown;
    },
    squaredMenu: function squaredMenu() {
      return this.optionsCover === false && this.outlined !== true && this.standout !== true && this.borderless !== true && this.rounded !== true;
    }
  },
  methods: {
    removeAtIndex: function removeAtIndex(index) {
      if (index > -1 && index < this.innerValue.length) {
        if (this.multiple === true) {
          var model = [].concat(this.value);
          this.$emit('remove', {
            index: index,
            value: model.splice(index, 1)
          });
          this.$emit('input', model);
        } else {
          this.$emit('input', null);
        }
      }
    },
    __removeAtIndexAndFocus: function __removeAtIndexAndFocus(index) {
      this.removeAtIndex(index);
      this.focus();
    },
    add: function add(opt, unique) {
      var val = this.emitValue === true ? this.__getOptionValue(opt) : opt;

      if (this.multiple !== true) {
        this.$emit('input', val);
        return;
      }

      if (this.innerValue.length === 0) {
        this.$emit('add', {
          index: 0,
          value: val
        });
        this.$emit('input', this.multiple === true ? [val] : val);
        return;
      }

      if (unique === true && this.__isSelected(opt) === true) {
        return;
      }

      var model = [].concat(this.value);

      if (this.maxValues !== void 0 && model.length >= this.maxValues) {
        return;
      }

      this.$emit('add', {
        index: model.length,
        value: val
      });
      model.push(val);
      this.$emit('input', model);
    },
    toggleOption: function toggleOption(opt) {
      var _this5 = this;

      if (this.editable !== true || opt === void 0 || this.__isDisabled(opt) === true) {
        return;
      }

      var optValue = this.__getOptionValue(opt);

      this.multiple !== true && this.updateInputValue(this.fillInput === true ? this.__getOptionLabel(opt) : '', true);
      this.focus();

      if (this.multiple !== true) {
        this.hidePopup();

        if (isDeepEqual(this.__getOptionValue(this.value), optValue) !== true) {
          this.$emit('input', this.emitValue === true ? optValue : opt);
        }

        return;
      }

      if (this.innerValue.length === 0) {
        var val = this.emitValue === true ? optValue : opt;
        this.$emit('add', {
          index: 0,
          value: val
        });
        this.$emit('input', this.multiple === true ? [val] : val);
        return;
      }

      var model = [].concat(this.value),
          index = this.value.findIndex(function (v) {
        return isDeepEqual(_this5.__getOptionValue(v), optValue);
      });

      if (index > -1) {
        this.$emit('remove', {
          index: index,
          value: model.splice(index, 1)
        });
      } else {
        if (this.maxValues !== void 0 && model.length >= this.maxValues) {
          return;
        }

        var _val = this.emitValue === true ? optValue : opt;

        this.$emit('add', {
          index: model.length,
          value: _val
        });
        model.push(_val);
      }

      this.$emit('input', model);
    },
    setOptionIndex: function setOptionIndex(index) {
      if (this.$q.platform.is.desktop !== true) {
        return;
      }

      var val = index >= -1 && index < this.optionsToShow ? index : -1;

      if (this.optionIndex !== val) {
        this.optionIndex = val;
      }
    },
    __getOption: function __getOption(value) {
      var _this6 = this;

      return this.options.find(function (opt) {
        return isDeepEqual(_this6.__getOptionValue(opt), value);
      }) || value;
    },
    __getOptionValue: function __getOptionValue(opt) {
      if (typeof this.optionValue === 'function') {
        return this.optionValue(opt);
      }

      if (Object(opt) === opt) {
        return typeof this.optionValue === 'string' ? opt[this.optionValue] : opt.value;
      }

      return opt;
    },
    __getOptionLabel: function __getOptionLabel(opt) {
      if (typeof this.optionLabel === 'function') {
        return this.optionLabel(opt);
      }

      if (Object(opt) === opt) {
        return typeof this.optionLabel === 'string' ? opt[this.optionLabel] : opt.label;
      }

      return opt;
    },
    __isDisabled: function __isDisabled(opt) {
      if (typeof this.optionDisable === 'function') {
        return this.optionDisable(opt) === true;
      }

      if (Object(opt) === opt) {
        return typeof this.optionDisable === 'string' ? opt[this.optionDisable] === true : opt.disable === true;
      }

      return false;
    },
    __isSelected: function __isSelected(opt) {
      var _this7 = this;

      var val = this.__getOptionValue(opt);

      return this.innerValue.find(function (v) {
        return isDeepEqual(_this7.__getOptionValue(v), val);
      }) !== void 0;
    },
    __onTargetKeydown: function __onTargetKeydown(e) {
      var _this8 = this;

      // escape, tab
      if (e.keyCode === 27 || e.keyCode === 9) {
        this.__closeMenu();

        return;
      }

      if (e.target !== this.$refs.target) {
        return;
      } // down


      if (e.keyCode === 40 && this.innerLoading !== true && this.menu === false) {
        Object(utils_event["h" /* stopAndPrevent */])(e);
        this.showPopup();
        return;
      } // delete


      if (e.keyCode === 8 && this.multiple === true && this.inputValue.length === 0 && Array.isArray(this.value)) {
        this.removeAtIndex(this.value.length - 1);
        return;
      } // up, down


      if (e.keyCode === 38 || e.keyCode === 40) {
        Object(utils_event["h" /* stopAndPrevent */])(e);

        if (this.menu === true) {
          var index = this.optionIndex;

          do {
            index = Object(format["b" /* normalizeToInterval */])(index + (e.keyCode === 38 ? -1 : 1), -1, Math.min(this.optionsToShow, this.options.length) - 1);

            if (index === -1) {
              this.optionIndex = -1;
              return;
            }
          } while (index !== this.optionIndex && this.__isDisabled(this.options[index]) === true);

          var dir = index > this.optionIndex ? 1 : -1;
          this.optionIndex = index;
          this.$nextTick(function () {
            var el = _this8.__getMenuContentEl().querySelector('.q-manual-focusable--focused');

            if (el !== null && el.scrollIntoView !== void 0) {
              if (el.scrollIntoViewIfNeeded !== void 0) {
                el.scrollIntoViewIfNeeded(false);
              } else {
                el.scrollIntoView(dir === -1);
              }
            }
          });
        }
      } // enter


      if (e.target !== this.$refs.target || e.keyCode !== 13) {
        return;
      }

      Object(utils_event["h" /* stopAndPrevent */])(e);

      if (this.optionIndex > -1 && this.optionIndex < this.optionsToShow) {
        this.toggleOption(this.options[this.optionIndex]);
        return;
      } // below is meant for multiple mode only


      if (this.inputValue.length > 0 && (this.newValueMode !== void 0 || this.$listeners['new-value'] !== void 0)) {
        var done = function done(val, mode) {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              console.error('QSelect: invalid new value mode - ' + mode);
              return;
            }
          } else {
            mode = _this8.newValueMode;
          }

          if (val !== void 0 && val !== null) {
            _this8[mode === 'toggle' ? 'toggleOption' : 'add'](val, mode === 'add-unique');
          }

          _this8.updateInputValue('');
        };

        if (this.$listeners['new-value'] !== void 0) {
          this.$emit('new-value', this.inputValue, done);
        } else {
          done(this.inputValue);
        }
      }

      if (this.menu === true) {
        this.dialog !== true && this.__closeMenu();
      } else if (this.innerLoading !== true) {
        this.showPopup();
      }
    },
    __getMenuContentEl: function __getMenuContentEl() {
      return this.hasDialog === true ? this.$refs.menuContent : this.$refs.menu !== void 0 ? this.$refs.menu.__portal.$el : void 0;
    },
    __hydrateOptions: function __hydrateOptions() {
      var _this9 = this;

      if (this.avoidScroll !== true) {
        if (this.optionsToShow < this.options.length) {
          var el = this.__getMenuContentEl();

          if (el.scrollHeight - el.scrollTop - el.clientHeight < 200) {
            this.optionsToShow += 20;
            this.avoidScroll = true;
            this.$nextTick(function () {
              _this9.avoidScroll = false;

              _this9.__hydrateOptions();
            });
          }
        }
      }
    },
    __getSelection: function __getSelection(h, fromDialog) {
      var _this10 = this;

      if (this.hideSelected === true) {
        return fromDialog !== true && this.hasDialog === true ? [h('span', {
          domProps: {
            'textContent': this.inputValue
          }
        })] : [];
      }

      if (this.$scopedSlots['selected-item'] !== void 0) {
        return this.selectedScope.map(function (scope) {
          return _this10.$scopedSlots['selected-item'](scope);
        });
      }

      if (this.$scopedSlots.selected !== void 0) {
        return this.$scopedSlots.selected();
      }

      if (this.useChips === true) {
        var tabindex = this.focused === true ? 0 : -1;
        return this.selectedScope.map(function (scope, i) {
          return h(QChip, {
            key: 'option-' + i,
            props: {
              removable: _this10.__isDisabled(scope.opt) !== true,
              dense: true,
              textColor: _this10.color,
              tabindex: tabindex
            },
            on: {
              remove: function remove() {
                scope.removeAtIndex(i);
              }
            }
          }, [h('span', {
            domProps: defineProperty_default()({}, scope.sanitize === true ? 'textContent' : 'innerHTML', _this10.__getOptionLabel(scope.opt))
          })]);
        });
      }

      return [h('span', {
        domProps: defineProperty_default()({}, this.displayAsText ? 'textContent' : 'innerHTML', this.displayValue !== void 0 ? this.displayValue : this.selectedString)
      })];
    },
    __getControl: function __getControl(h, fromDialog) {
      var data = {};

      var child = this.__getSelection(h, fromDialog);

      if (this.useInput === true && (fromDialog === true || this.hasDialog === false)) {
        child.push(this.__getInput(h));
      } else if (this.editable === true) {
        data = {
          ref: 'target',
          attrs: objectSpread_default()({
            tabindex: 0,
            autofocus: this.autofocus
          }, this.$attrs),
          on: {
            keydown: this.__onTargetKeydown
          }
        };
      }

      data.staticClass = 'q-field__native row items-center';
      return h('div', data, child);
    },
    __getOptions: function __getOptions(h) {
      var _this11 = this;

      var fn = this.$scopedSlots.option !== void 0 ? this.$scopedSlots.option : function (scope) {
        return h(QItem["a" /* default */], {
          key: scope.index,
          props: scope.itemProps,
          on: scope.itemEvents
        }, [h(QItemSection["a" /* default */], [h(QItemLabel["a" /* default */], {
          domProps: defineProperty_default()({}, scope.sanitize === true ? 'textContent' : 'innerHTML', _this11.__getOptionLabel(scope.opt))
        })])]);
      };
      return this.optionScope.map(fn);
    },
    __getInnerAppend: function __getInnerAppend(h) {
      return this.hideDropdownIcon !== true ? [h(QIcon["a" /* default */], {
        staticClass: 'q-select__dropdown-icon',
        props: {
          name: this.dropdownArrowIcon
        }
      })] : null;
    },
    __getInput: function __getInput(h) {
      return h('input', {
        ref: 'target',
        staticClass: 'q-select__input q-placeholder col',
        class: this.hideSelected !== true && this.innerValue.length > 0 ? 'q-select__input--padding' : null,
        domProps: {
          value: this.inputValue
        },
        attrs: objectSpread_default()({
          tabindex: 0,
          autofocus: this.autofocus
        }, this.$attrs, {
          disabled: this.editable !== true
        }),
        on: {
          input: this.__onInputValue,
          keydown: this.__onTargetKeydown
        }
      });
    },
    __onInputValue: function __onInputValue(e) {
      var _this12 = this;

      clearTimeout(this.inputTimer);
      this.inputValue = e.target.value || '';

      if (this.$listeners.filter !== void 0) {
        this.inputTimer = setTimeout(function () {
          _this12.filter(_this12.inputValue, true);
        }, this.inputDebounce);
      }
    },
    updateInputValue: function updateInputValue(val, noFiltering) {
      if (this.useInput === true) {
        if (this.inputValue !== val) {
          this.inputValue = val;
        }

        noFiltering !== true && this.filter(val);
      }
    },
    filter: function filter(val, userInput) {
      var _this13 = this;

      if (this.$listeners.filter === void 0 || this.focused !== true) {
        return;
      }

      if (this.innerLoading === true) {
        this.$emit('filter-abort');
      } else {
        this.innerLoading = true;
      }

      if (val !== '' && this.multiple !== true && this.innerValue.length > 0 && userInput !== true && val === this.__getOptionLabel(this.innerValue[0])) {
        val = '';
      }

      var filterId = setTimeout(function () {
        _this13.menu === true && (_this13.menu = false);
      }, 10);
      clearTimeout(this.filterId);
      this.filterId = filterId;
      this.$emit('filter', val, function (fn) {
        if (_this13.focused === true && _this13.filterId === filterId) {
          clearTimeout(_this13.filterId);
          typeof fn === 'function' && fn();

          _this13.$nextTick(function () {
            _this13.innerLoading = false;

            if (_this13.menu === true) {
              _this13.__updateMenu(true);
            } else {
              _this13.menu = true;
            }
          });
        }
      }, function () {
        if (_this13.focused === true && _this13.filterId === filterId) {
          clearTimeout(_this13.filterId);
          _this13.innerLoading = false;
        }

        _this13.menu === true && (_this13.menu = false);
      });
    },
    __getControlEvents: function __getControlEvents() {
      var _this14 = this;

      var focusout = function focusout(e) {
        _this14.__onControlFocusout(e, function () {
          _this14.__resetInputValue();

          _this14.__closeMenu();
        });
      };

      return {
        focus: function focus(e) {
          _this14.hasDialog !== true && _this14.focus(e);
        },
        focusin: this.__onControlFocusin,
        focusout: focusout,
        'popup-show': this.__onControlPopupShow,
        'popup-hide': function popupHide(e) {
          _this14.hasPopupOpen = false;
          focusout(e);
        },
        click: function click(e) {
          if (_this14.hasDialog !== true && _this14.menu === true) {
            _this14.__closeMenu();
          } else {
            _this14.showPopup(e);
          }
        }
      };
    },
    __getPopup: function __getPopup(h) {
      if (this.editable !== false && (this.dialog === true || // dialog always has menu displayed, so need to render it
      this.noOptions !== true || this.$scopedSlots['no-option'] !== void 0)) {
        return this["__get".concat(this.hasDialog === true ? 'Dialog' : 'Menu')](h);
      }
    },
    __getMenu: function __getMenu(h) {
      var child = this.noOptions === true ? this.$scopedSlots['no-option'] !== void 0 ? this.$scopedSlots['no-option']({
        inputValue: this.inputValue
      }) : null : this.__getOptions(h);
      return h(QMenu["a" /* default */], {
        ref: 'menu',
        props: {
          value: this.menu,
          fit: true,
          cover: this.optionsCover === true && this.noOptions !== true && this.useInput !== true,
          contentClass: this.menuClass,
          contentStyle: this.popupContentStyle,
          noParentEvent: true,
          noRefocus: true,
          noFocus: true,
          square: this.squaredMenu,
          transitionShow: this.transitionShow,
          transitionHide: this.transitionHide
        },
        on: {
          '&scroll': this.__hydrateOptions,
          'before-hide': this.__closeMenu
        }
      }, child);
    },
    __getDialog: function __getDialog(h) {
      var _this15 = this;

      var content = [h(QField["a" /* default */], {
        staticClass: "col-auto ".concat(this.fieldClass),
        props: objectSpread_default()({}, this.$props, {
          dark: this.optionsDark,
          square: true,
          loading: this.innerLoading,
          filled: true,
          stackLabel: this.inputValue.length > 0
        }),
        on: objectSpread_default()({}, this.$listeners, {
          focus: utils_event["g" /* stop */],
          blur: utils_event["g" /* stop */]
        }),
        scopedSlots: objectSpread_default()({}, this.$scopedSlots, {
          rawControl: function rawControl() {
            return _this15.__getControl(h, true);
          },
          before: void 0,
          after: void 0
        })
      })];
      this.menu === true && content.push(h('div', {
        ref: 'menuContent',
        staticClass: 'scroll',
        class: this.popupContentClass,
        style: this.popupContentStyle,
        on: {
          click: utils_event["f" /* prevent */],
          '&scroll': this.__hydrateOptions
        }
      }, this.noOptions === true ? this.$scopedSlots['no-option'] !== void 0 ? this.$scopedSlots['no-option']({
        inputValue: this.inputValue
      }) : null : this.__getOptions(h)));
      return h(QDialog, {
        props: {
          value: this.dialog,
          noRefocus: true,
          noFocus: true,
          position: this.useInput === true ? 'top' : void 0
        },
        on: {
          'before-hide': function beforeHide() {
            _this15.focused = false;
          },
          hide: function hide(e) {
            _this15.hidePopup();

            _this15.$emit('blur', e);

            _this15.__resetInputValue();
          },
          show: function show() {
            _this15.$refs.target.focus();
          }
        }
      }, [h('div', {
        staticClass: 'q-select__dialog' + (this.optionsDark === true ? ' q-select__menu--dark' : '')
      }, content)]);
    },
    __closeMenu: function __closeMenu() {
      this.menu = false;

      if (this.focused === false) {
        clearTimeout(this.filterId);
        this.filterId = void 0;

        if (this.innerLoading === true) {
          this.$emit('filter-abort');
          this.innerLoading = false;
        }
      }
    },
    showPopup: function showPopup(e) {
      if (this.hasDialog === true) {
        this.__onControlFocusin(e);

        this.dialog = true;
      } else {
        this.focus(e);
      }

      if (this.$listeners.filter !== void 0) {
        this.filter(this.inputValue);
      } else if (this.noOptions !== true || this.$scopedSlots['no-option'] !== void 0) {
        this.menu = true;
      }
    },
    hidePopup: function hidePopup() {
      this.dialog = false;

      this.__closeMenu();
    },
    __resetInputValue: function __resetInputValue() {
      this.useInput === true && this.updateInputValue(this.multiple !== true && this.fillInput === true && this.innerValue.length > 0 ? this.__getOptionLabel(this.innerValue[0]) || '' : '', true);
    },
    __updateMenu: function __updateMenu(show) {
      var _this16 = this;

      this.optionIndex = -1;

      if (show === true) {
        this.optionsToShow = 20;
        this.$nextTick(function () {
          _this16.__hydrateOptions();
        });
      }
    },
    __onPreRender: function __onPreRender() {
      this.hasDialog = this.$q.platform.is.mobile !== true ? false : this.useInput === true ? this.$scopedSlots['no-option'] !== void 0 || this.$listeners.filter !== void 0 : true;
    },
    __onPostRender: function __onPostRender() {
      if (this.dialog === false && this.$refs.menu !== void 0) {
        this.$refs.menu.updatePosition();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.inputTimer);
  }
}));
// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Theme.vue?vue&type=script&lang=ts&










var Themevue_type_script_lang_ts_PaThemeProps =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaThemeProps, _PropInput);

  function PaThemeProps() {
    classCallCheck_default()(this, PaThemeProps);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaThemeProps).apply(this, arguments));
  }

  createClass_default()(PaThemeProps, [{
    key: "onInput",
    value: function onInput(selected) {
      this.commit(selected);
    }
  }]);

  return PaThemeProps;
}(PropInput["a" /* default */]);

Themevue_type_script_lang_ts_PaThemeProps = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaThemeProp',
  components: {
    QSelect: QSelect
  }
})], Themevue_type_script_lang_ts_PaThemeProps);
/* harmony default export */ var Themevue_type_script_lang_ts_ = (Themevue_type_script_lang_ts_PaThemeProps);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Theme.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Themevue_type_script_lang_ts_ = (Themevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Theme.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Themevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Theme = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1c16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timeout;

  function debounced() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;

      if (!immediate) {
        fn.apply(_this, args);
      }
    };

    clearTimeout(timeout);

    if (immediate && !timeout) {
      fn.apply(this, args);
    }

    timeout = setTimeout(later, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
  };

  return debounced;
});

/***/ }),

/***/ "2236":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "2248":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearSelection; });
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0967");

function clearSelection() {
  if (window.getSelection !== void 0) {
    var selection = window.getSelection();

    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ "28c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Size.vue?vue&type=template&id=995342fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-size row"},[_c('div',{staticClass:"col col-label"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col col-input"},[_c('q-select',{attrs:{"value":_vm.value,"options":[
      'tn', 'xs', 'sm', 'lg', 'xl'
    ]}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Size.vue?vue&type=template&id=995342fa&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Size.vue?vue&type=script&lang=ts&









var Sizevue_type_script_lang_ts_PaSizeProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaSizeProp, _PropInput);

  function PaSizeProp() {
    classCallCheck_default()(this, PaSizeProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaSizeProp).apply(this, arguments));
  }

  createClass_default()(PaSizeProp, [{
    key: "onInput",
    value: function onInput(value) {
      this.commit(value);
    }
  }, {
    key: "beforeMounted",
    value: function beforeMounted() {
      if (!this.prop.value) {
        this.prop.value = 'sm';
      }
    }
  }]);

  return PaSizeProp;
}(PropInput["a" /* default */]);

Sizevue_type_script_lang_ts_PaSizeProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaSizeProp'
})], Sizevue_type_script_lang_ts_PaSizeProp);
/* harmony default export */ var Sizevue_type_script_lang_ts_ = (Sizevue_type_script_lang_ts_PaSizeProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Size.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Sizevue_type_script_lang_ts_ = (Sizevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Size.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Sizevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Size = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2fe1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDecorator; });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a
        ? superProto.constructor
        : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ __webpack_exports__["b"] = (Component);



/***/ }),

/***/ "3156":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9523");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "3627":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getModifierDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateModifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeObserver; });
var directions = ['left', 'right', 'up', 'down', 'horizontal', 'vertical'];
var modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true,
  all: true
};
function getModifierDirections(mod) {
  var dir = {};
  directions.forEach(function (direction) {
    if (mod[direction]) {
      dir[direction] = true;
    }
  });

  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }

  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  }

  if (dir.vertical === true) {
    dir.up = dir.down = true;
  }

  if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }

  if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }

  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }

  return dir;
}
function updateModifiers(ctx, _ref) {
  var oldValue = _ref.oldValue,
      value = _ref.value,
      modifiers = _ref.modifiers;

  if (oldValue !== value) {
    ctx.handler = value;
  }

  if (directions.some(function (direction) {
    return modifiers[direction] !== ctx.modifiers[direction];
  })) {
    ctx.modifiers = modifiers;
    ctx.direction = getModifierDirections(modifiers);
  }
}
function setObserver(el, evt, ctx) {
  var target = evt.target;
  ctx.touchTargetObserver = new MutationObserver(function () {
    el.contains(target) === false && ctx.end(evt);
  });
  ctx.touchTargetObserver.observe(el, {
    childList: true,
    subtree: true
  });
}
function removeObserver(ctx) {
  if (ctx.touchTargetObserver !== void 0) {
    ctx.touchTargetObserver.disconnect();
    ctx.touchTargetObserver = void 0;
  }
}

/***/ }),

/***/ "36c6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "3bcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prop; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("970b");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5bc3");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Base for Prop of Control other Classes
 */
var Prop =
/*#__PURE__*/
function () {
  function Prop(input) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Prop);

    this.name = '';
    this.description = '';
    this.category = 'props'; // 显示在特定的tab内

    this.readonly = false;
    this.type = String;
    this.order = 999;
    this.__value = undefined;
    Object.assign(this, input);
    this.category = input.category || 'props';
    this.order = input.order || 999;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Prop, [{
    key: "value",
    get: function get() {
      return this.__value;
    },
    set: function set(v) {
      if (v === undefined) {
        this.__value = undefined;
      } else if (false === v instanceof this.type) {
        this.__value = new this.type(v);
      } else {
        this.__value = v;
      }
    }
  }, {
    key: "primitive",
    get: function get() {
      return this.__value ? this.__value.valueOf() : undefined;
    }
  }]);

  return Prop;
}();



/***/ }),

/***/ "3c96":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "3d69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/dom.js
var dom = __webpack_require__("f303");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/directives/Ripple.js




function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && Object(utils_event["g" /* stop */])(evt);
  var _ctx$modifiers = ctx.modifiers,
      center = _ctx$modifiers.center,
      color = _ctx$modifiers.color;
  center = center === true || forceCenter === true;

  var node = document.createElement('span'),
      innerNode = document.createElement('span'),
      pos = Object(utils_event["e" /* position */])(evt),
      _el$getBoundingClient = el.getBoundingClientRect(),
      left = _el$getBoundingClient.left,
      top = _el$getBoundingClient.top,
      width = _el$getBoundingClient.width,
      height = _el$getBoundingClient.height,
      diameter = Math.sqrt(width * width + height * height),
      radius = diameter / 2,
      centerX = "".concat((width - diameter) / 2, "px"),
      x = center ? centerX : "".concat(pos.left - left - radius, "px"),
      centerY = "".concat((height - diameter) / 2, "px"),
      y = center ? centerY : "".concat(pos.top - top - radius, "px");

  innerNode.className = 'q-ripple__inner';
  Object(dom["a" /* css */])(innerNode, {
    height: "".concat(diameter, "px"),
    width: "".concat(diameter, "px"),
    transform: "translate3d(".concat(x, ", ").concat(y, ", 0) scale3d(0.2, 0.2, 1)"),
    opacity: 0
  });
  node.className = "q-ripple".concat(color ? ' text-' + color : '');
  node.setAttribute('dir', 'ltr');
  node.appendChild(innerNode);
  el.appendChild(node);

  ctx.abort = function () {
    node && node.remove();
    clearTimeout(timer);
  };

  var timer = setTimeout(function () {
    innerNode.classList.add('q-ripple__inner--enter');
    innerNode.style.transform = "translate3d(".concat(centerX, ", ").concat(centerY, ", 0) scale3d(1, 1, 1)");
    innerNode.style.opacity = 0.2;
    timer = setTimeout(function () {
      innerNode.classList.remove('q-ripple__inner--enter');
      innerNode.classList.add('q-ripple__inner--leave');
      innerNode.style.opacity = 0;
      timer = setTimeout(function () {
        node && node.remove();
        ctx.abort = void 0;
      }, 275);
    }, 250);
  }, 50);
}

function updateCtx(ctx, _ref) {
  var value = _ref.value,
      modifiers = _ref.modifiers,
      arg = _ref.arg;
  ctx.enabled = value !== false;

  if (ctx.enabled === true) {
    ctx.modifiers = Object(value) === value ? {
      stop: value.stop === true || modifiers.stop === true,
      center: value.center === true || modifiers.center === true,
      color: value.color || arg
    } : {
      stop: modifiers.stop,
      center: modifiers.center,
      color: arg
    };
  }
}

/* harmony default export */ var Ripple = ({
  name: 'ripple',
  inserted: function inserted(el, binding) {
    var ctx = {
      modifiers: {},
      click: function click(evt) {
        // on ENTER in form IE emits a PointerEvent with negative client cordinates
        if (ctx.enabled === true && (Platform["a" /* default */].is.ie !== true || evt.clientX >= 0)) {
          showRipple(evt, el, ctx, evt.qKeyEvent === true);
        }
      },
      keyup: function keyup(evt) {
        if (ctx.enabled === true && evt.keyCode === 13 && evt.qKeyEvent !== true) {
          showRipple(evt, el, ctx, true);
        }
      }
    };
    updateCtx(ctx, binding);

    if (el.__qripple) {
      el.__qripple_old = el.__qripple;
    }

    el.__qripple = ctx;
    el.addEventListener('click', ctx.click);
    el.addEventListener('keyup', ctx.keyup);
  },
  update: function update(el, binding) {
    el.__qripple !== void 0 && updateCtx(el.__qripple, binding);
  },
  unbind: function unbind(el) {
    var ctx = el.__qripple_old || el.__qripple;

    if (ctx !== void 0) {
      ctx.abort !== void 0 && ctx.abort();
      el.removeEventListener('click', ctx.click);
      el.removeEventListener('keyup', ctx.keyup);
      delete el[el.__qripple_old ? '__qripple_old' : '__qripple'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/ripple.js

/* harmony default export */ var ripple = __webpack_exports__["a"] = ({
  directives: {
    Ripple: Ripple
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  }
});

/***/ }),

/***/ "429b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/can-render.js
// using it to manage SSR rendering with best performance

/* harmony default export */ var can_render = ({
  data: function data() {
    return {
      canRender: !Platform["d" /* onSSR */]
    };
  },
  mounted: function mounted() {
    this.canRender === false && (this.canRender = true);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/observer/QResizeObserver.js




/* harmony default export */ var QResizeObserver = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QResizeObserver',
  mixins: [can_render],
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  data: function data() {
    return this.hasObserver ? {} : {
      url: this.$q.platform.is.ie ? null : 'about:blank'
    };
  },
  methods: {
    trigger: function trigger(immediately) {
      if (immediately === true || this.debounce === 0 || this.debounce === '0') {
        this.__onResize();
      } else if (!this.timer) {
        this.timer = setTimeout(this.__onResize, this.debounce);
      }
    },
    __onResize: function __onResize() {
      this.timer = null;

      if (!this.$el || !this.$el.parentNode) {
        return;
      }

      var parent = this.$el.parentNode,
          size = {
        width: parent.offsetWidth,
        height: parent.offsetHeight
      };

      if (size.width === this.size.width && size.height === this.size.height) {
        return;
      }

      this.size = size;
      this.$emit('resize', this.size);
    }
  },
  render: function render(h) {
    var _this = this;

    if (this.canRender === false || this.hasObserver === true) {
      return;
    }

    return h('object', {
      style: this.style,
      attrs: {
        tabindex: -1,
        // fix for Firefox
        type: 'text/html',
        data: this.url,
        'aria-hidden': true
      },
      on: {
        load: function load() {
          _this.$el.contentDocument.defaultView.addEventListener('resize', _this.trigger, utils_event["d" /* listenOpts */].passive);

          _this.trigger(true);
        }
      }
    });
  },
  beforeCreate: function beforeCreate() {
    this.size = {
      width: -1,
      height: -1
    };

    if (Platform["c" /* isSSR */] === true) {
      return;
    }

    this.hasObserver = typeof ResizeObserver !== 'undefined';

    if (this.hasObserver !== true) {
      this.style = "".concat(this.$q.platform.is.ie ? 'visibility:hidden;' : '', "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;");
    }
  },
  mounted: function mounted() {
    if (this.hasObserver === true) {
      this.observer = new ResizeObserver(this.trigger);
      this.observer.observe(this.$el.parentNode);
      return;
    }

    this.trigger(true);

    if (this.$q.platform.is.ie) {
      this.url = 'about:blank';
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);

    if (this.hasObserver === true) {
      this.$el.parentNode && this.observer.unobserve(this.$el.parentNode);
      return;
    }

    if (this.$el.contentDocument) {
      this.$el.contentDocument.defaultView.removeEventListener('resize', this.trigger, utils_event["d" /* listenOpts */].passive);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js







function getIndicatorClass(color, top, vertical) {
  var pos = vertical === true ? ['left', 'right'] : ['top', 'bottom'];
  return "absolute-".concat(top === true ? pos[0] : pos[1]).concat(color ? " text-".concat(color) : '');
}

function bufferPrioritySort(t1, t2) {
  if (t1.priorityMatched === t2.priorityMatched) {
    return t2.priorityHref - t1.priorityHref;
  }

  return t2.priorityMatched - t1.priorityMatched;
}

function bufferCleanSelected(t) {
  t.selected = false;
  return t;
}

var bufferFilters = [function (t) {
  return t.selected === true && t.exact === true && t.redirected !== true;
}, function (t) {
  return t.selected === true && t.exact === true;
}, function (t) {
  return t.selected === true && t.redirected !== true;
}, function (t) {
  return t.selected === true;
}, function (t) {
  return t.exact === true && t.redirected !== true;
}, function (t) {
  return t.redirected !== true;
}, function (t) {
  return t.exact === true;
}, function (t) {
  return true;
}],
    bufferFiltersLen = bufferFilters.length;
/* harmony default export */ var QTabs = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QTabs',
  provide: function provide() {
    return {
      tabs: this.tabs,
      __activateTab: this.__activateTab,
      __activateRoute: this.__activateRoute
    };
  },
  props: {
    value: [Number, String],
    align: {
      type: String,
      default: 'center',
      validator: function validator(v) {
        return ['left', 'center', 'right', 'justify'].includes(v);
      }
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean
  },
  data: function data() {
    return {
      tabs: {
        current: this.value,
        activeColor: this.activeColor,
        activeBgColor: this.activeBgColor,
        indicatorClass: getIndicatorClass(this.indicatorColor, this.switchIndicator, this.vertical),
        narrowIndicator: this.narrowIndicator,
        inlineLabel: this.inlineLabel,
        noCaps: this.noCaps
      },
      scrollable: false,
      leftArrow: true,
      rightArrow: false,
      justify: false
    };
  },
  watch: {
    value: function value(name) {
      this.__activateTab(name);
    },
    activeColor: function activeColor(v) {
      this.tabs.activeColor = v;
    },
    activeBgColor: function activeBgColor(v) {
      this.tabs.activeBgColor = v;
    },
    vertical: function vertical(v) {
      this.tabs.indicatorClass = getIndicatorClass(this.indicatorColor, this.switchIndicator, v);
    },
    indicatorColor: function indicatorColor(v) {
      this.tabs.indicatorClass = getIndicatorClass(v, this.switchIndicator, this.vertical);
    },
    switchIndicator: function switchIndicator(v) {
      this.tabs.indicatorClass = getIndicatorClass(this.indicatorColor, v, this.vertical);
    },
    narrowIndicator: function narrowIndicator(v) {
      this.tabs.narrowIndicator = v;
    },
    inlineLabel: function inlineLabel(v) {
      this.tabs.inlineLabel = v;
    },
    noCaps: function noCaps(v) {
      this.tabs.noCaps = v;
    }
  },
  computed: {
    alignClass: function alignClass() {
      var align = this.scrollable === true ? 'left' : this.justify === true ? 'justify' : this.align;
      return "q-tabs__content--align-".concat(align);
    },
    classes: function classes() {
      return "q-tabs--".concat(this.scrollable === true ? '' : 'not-', "scrollable") + (this.dense === true ? ' q-tabs--dense' : '') + (this.shrink === true ? ' col-shrink' : '') + (this.vertical === true ? ' q-tabs--vertical' : '');
    }
  },
  methods: {
    __activateTab: function __activateTab(name) {
      if (this.tabs.current !== name) {
        this.__animate(this.tabs.current, name);

        this.tabs.current = name;
        this.$emit('input', name);
      }
    },
    __activateRoute: function __activateRoute(params) {
      var _this = this;

      if (this.bufferRoute !== this.$route && this.buffer.length > 0) {
        clearTimeout(this.bufferTimer);
        this.bufferTimer = void 0;
        this.buffer.length = 0;
      }

      this.bufferRoute = this.$route;

      if (params !== void 0) {
        if (params.remove === true) {
          this.buffer = this.buffer.filter(function (t) {
            return t.name !== params.name;
          });
        } else {
          this.buffer.push(params);
        }
      }

      if (this.bufferTimer === void 0) {
        this.bufferTimer = setTimeout(function () {
          var tabs = [];

          for (var i = 0; i < bufferFiltersLen && tabs.length === 0; i++) {
            tabs = _this.buffer.filter(bufferFilters[i]);
          }

          tabs.sort(bufferPrioritySort);

          _this.__activateTab(tabs.length === 0 ? null : tabs[0].name);

          _this.buffer = _this.buffer.map(bufferCleanSelected);
          _this.bufferTimer = void 0;
        }, 1);
      }
    },
    __updateContainer: function __updateContainer(_ref) {
      var _this2 = this;

      var width = _ref.width,
          height = _ref.height;
      var scroll = this.vertical === true ? this.$refs.content.scrollHeight > height : this.$refs.content.scrollWidth > width;

      if (this.scrollable !== scroll) {
        this.scrollable = scroll;
      }

      scroll === true && this.$nextTick(function () {
        return _this2.__updateArrows();
      });
      var justify = (this.vertical === true ? height : width) < parseInt(this.breakpoint, 10);

      if (this.justify !== justify) {
        this.justify = justify;
      }
    },
    __animate: function __animate(oldName, newName) {
      var _this3 = this;

      var oldTab = oldName ? this.$children.find(function (tab) {
        return tab.name === oldName;
      }) : null,
          newTab = newName ? this.$children.find(function (tab) {
        return tab.name === newName;
      }) : null;

      if (oldTab && newTab) {
        var oldEl = oldTab.$el.getElementsByClassName('q-tab__indicator')[0],
            newEl = newTab.$el.getElementsByClassName('q-tab__indicator')[0];
        clearTimeout(this.animateTimer);
        oldEl.style.transition = 'none';
        oldEl.style.transform = 'none';
        newEl.style.transition = 'none';
        newEl.style.transform = 'none';
        var oldPos = oldEl.getBoundingClientRect(),
            newPos = newEl.getBoundingClientRect();
        newEl.style.transform = this.vertical === true ? "translate3d(0, ".concat(oldPos.top - newPos.top, "px, 0) scale3d(1, ").concat(newPos.height ? oldPos.height / newPos.height : 1, ", 1)") : "translate3d(".concat(oldPos.left - newPos.left, "px, 0, 0) scale3d(").concat(newPos.width ? oldPos.width / newPos.width : 1, ", 1, 1)"); // allow scope updates to kick in

        this.$nextTick(function () {
          _this3.animateTimer = setTimeout(function () {
            newEl.style.transition = 'transform .25s cubic-bezier(.4, 0, .2, 1)';
            newEl.style.transform = 'none';
          }, 30);
        });
      }

      if (newTab && this.scrollable) {
        var _this$$refs$content$g = this.$refs.content.getBoundingClientRect(),
            left = _this$$refs$content$g.left,
            width = _this$$refs$content$g.width,
            top = _this$$refs$content$g.top,
            height = _this$$refs$content$g.height,
            _newPos = newTab.$el.getBoundingClientRect();

        var offset = this.vertical === true ? _newPos.top - top : _newPos.left - left;

        if (offset < 0) {
          this.$refs.content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] += offset;

          this.__updateArrows();

          return;
        }

        offset += this.vertical === true ? _newPos.height - height : _newPos.width - width;

        if (offset > 0) {
          this.$refs.content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] += offset;

          this.__updateArrows();
        }
      }
    },
    __updateArrows: function __updateArrows() {
      var content = this.$refs.content,
          rect = content.getBoundingClientRect(),
          left = this.vertical === true ? content.scrollTop : content.scrollLeft;
      this.leftArrow = left > 0;
      this.rightArrow = this.vertical === true ? left + rect.height + 5 < content.scrollHeight : left + rect.width + 5 < content.scrollWidth;
    },
    __animScrollTo: function __animScrollTo(value) {
      var _this4 = this;

      this.__stopAnimScroll();

      this.__scrollTowards(value);

      this.scrollTimer = setInterval(function () {
        if (_this4.__scrollTowards(value)) {
          _this4.__stopAnimScroll();
        }
      }, 5);
    },
    __scrollToStart: function __scrollToStart() {
      this.__animScrollTo(0);
    },
    __scrollToEnd: function __scrollToEnd() {
      this.__animScrollTo(9999);
    },
    __stopAnimScroll: function __stopAnimScroll() {
      clearInterval(this.scrollTimer);
    },
    __scrollTowards: function __scrollTowards(value) {
      var content = this.$refs.content,
          left = this.vertical === true ? content.scrollTop : content.scrollLeft,
          direction = value < left ? -1 : 1,
          done = false;
      left += direction * 5;

      if (left < 0) {
        done = true;
        left = 0;
      } else if (direction === -1 && left <= value || direction === 1 && left >= value) {
        done = true;
        left = value;
      }

      content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] = left;

      this.__updateArrows();

      return done;
    }
  },
  created: function created() {
    this.buffer = [];
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.bufferTimer);
    clearTimeout(this.animateTimer);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-tabs row no-wrap items-center',
      class: this.classes,
      on: objectSpread_default()({
        input: utils_event["g" /* stop */]
      }, this.$listeners),
      attrs: {
        role: 'tablist'
      }
    }, [h(QResizeObserver, {
      on: {
        resize: this.__updateContainer
      }
    }), h(QIcon["a" /* default */], {
      staticClass: 'q-tabs__arrow q-tabs__arrow--left q-tab__icon',
      class: this.leftArrow === true ? '' : 'q-tabs__arrow--faded',
      props: {
        name: this.leftIcon || (this.vertical === true ? this.$q.iconSet.tabs.up : this.$q.iconSet.tabs.left)
      },
      nativeOn: {
        mousedown: this.__scrollToStart,
        touchstart: this.__scrollToStart,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    }), h('div', {
      ref: 'content',
      staticClass: 'q-tabs__content row no-wrap items-center',
      class: this.alignClass
    }, Object(slot["a" /* default */])(this, 'default')), h(QIcon["a" /* default */], {
      staticClass: 'q-tabs__arrow q-tabs__arrow--right q-tab__icon',
      class: this.rightArrow === true ? '' : 'q-tabs__arrow--faded',
      props: {
        name: this.rightIcon || (this.vertical === true ? this.$q.iconSet.tabs.down : this.$q.iconSet.tabs.right)
      },
      nativeOn: {
        mousedown: this.__scrollToEnd,
        touchstart: this.__scrollToEnd,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    })]);
  }
}));

/***/ }),

/***/ "448a":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("2236");

var iterableToArray = __webpack_require__("11b0");

var nonIterableSpread = __webpack_require__("0676");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "4817":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Number.vue?vue&type=template&id=6b604164&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-number row"},[_c('div',{staticClass:"col col-label"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col col-input"},[_c('q-input',{attrs:{"square":"","dense":"","dark":"","standout":"bg-secondary","color":"secondary","type":"number","placeholder":"(not set)","value":_vm.prop.value},on:{"input":_vm.onInput}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Number.vue?vue&type=template&id=6b604164&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Number.vue?vue&type=script&lang=ts&









var Numbervue_type_script_lang_ts_PaNumberProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaNumberProp, _PropInput);

  function PaNumberProp() {
    classCallCheck_default()(this, PaNumberProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaNumberProp).apply(this, arguments));
  }

  createClass_default()(PaNumberProp, [{
    key: "onInput",
    value: function onInput(value) {
      this.commit(value);
    }
  }]);

  return PaNumberProp;
}(PropInput["a" /* default */]);

Numbervue_type_script_lang_ts_PaNumberProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaNumberProp'
})], Numbervue_type_script_lang_ts_PaNumberProp);
/* harmony default export */ var Numbervue_type_script_lang_ts_ = (Numbervue_type_script_lang_ts_PaNumberProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Number.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Numbervue_type_script_lang_ts_ = (Numbervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Number.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Numbervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var props_Number = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4a4b":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "4ced":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Json.vue?vue&type=template&id=6a744a8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-json"},[_c('div',{staticClass:"prop-label row"},[_c('div',{staticClass:"col"},[_c('h6',[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col text-right"},[_c('q-btn',{attrs:{"size":"xs","label":"保存"},on:{"click":_vm.onSave}})],1)]),_c('div',{staticClass:"editor",staticStyle:{"height":"260px"}},[_c('pa-code-editor',{ref:"input",attrs:{"value":_vm.jsonValue,"options":_vm.options}})],1),(_vm.errorMessage)?_c('q-banner',{staticClass:"bg-primary",attrs:{"dense":"","dark":""}},[_vm._v("\n    "+_vm._s(_vm.errorMessage)+"\n  ")]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Json.vue?vue&type=template&id=6a744a8c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Json.vue?vue&type=script&lang=ts&









var Jsonvue_type_script_lang_ts_PaJsonProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaJsonProp, _PropInput);

  function PaJsonProp() {
    var _this;

    classCallCheck_default()(this, PaJsonProp);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaJsonProp).apply(this, arguments));
    _this.options = {};
    _this.errorMessage = '';
    return _this;
  }

  createClass_default()(PaJsonProp, [{
    key: "onSave",
    value: function onSave() {
      var content = this.$refs.input.editor.getValue();

      try {
        content = content.trim() || '{}';
        var parsed = JSON.parse(content);
        this.errorMessage = '';
        this.emitChange(Object.assign({}, this.prop, {
          value: parsed
        }));
      } catch (e) {
        this.errorMessage = '格式错误';
      }
    }
  }, {
    key: "jsonValue",
    get: function get() {
      return JSON.stringify(this.prop && this.prop.value && this.prop.value.value || {}, null, 2);
    }
  }]);

  return PaJsonProp;
}(PropInput["a" /* default */]);

Jsonvue_type_script_lang_ts_PaJsonProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], Jsonvue_type_script_lang_ts_PaJsonProp);
/* harmony default export */ var Jsonvue_type_script_lang_ts_ = (Jsonvue_type_script_lang_ts_PaJsonProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Json.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Jsonvue_type_script_lang_ts_ = (Jsonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Json.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Jsonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Json = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4e73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/selection.js
var selection = __webpack_require__("2248");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/anchor.js


/* harmony default export */ var mixins_anchor = ({
  props: {
    target: {
      type: [Boolean, String],
      default: true
    },
    contextMenu: Boolean
  },
  watch: {
    contextMenu: function contextMenu(val) {
      if (this.anchorEl !== void 0) {
        this.__unconfigureAnchorEl(!val);

        this.__configureAnchorEl(val);
      }
    },
    target: function target() {
      if (this.anchorEl !== void 0) {
        this.__unconfigureAnchorEl();
      }

      this.__pickAnchorEl();
    }
  },
  methods: {
    __showCondition: function __showCondition(evt) {
      // abort with no parent configured or on multi-touch
      if (this.anchorEl === void 0) {
        return false;
      }

      if (evt === void 0) {
        return true;
      }

      return evt.touches === void 0 || evt.touches.length <= 1;
    },
    __contextClick: function __contextClick(evt) {
      this.hide(evt);
      this.show(evt);
      Object(utils_event["f" /* prevent */])(evt);
    },
    __toggleKey: function __toggleKey(evt) {
      if (evt !== void 0 && evt.keyCode === 13 && evt.qKeyEvent !== true) {
        this.toggle(evt);
      }
    },
    __mobileTouch: function __mobileTouch(evt) {
      var _this = this;

      this.__mobileCleanup(evt);

      if (this.__showCondition(evt) !== true) {
        return;
      }

      this.hide(evt);
      this.anchorEl.classList.add('non-selectable');
      this.touchTimer = setTimeout(function () {
        _this.show(evt);
      }, 300);
    },
    __mobileCleanup: function __mobileCleanup(evt) {
      this.anchorEl.classList.remove('non-selectable');
      clearTimeout(this.touchTimer);

      if (this.showing === true && evt !== void 0) {
        Object(selection["a" /* clearSelection */])();
        Object(utils_event["f" /* prevent */])(evt);
      }
    },
    __unconfigureAnchorEl: function __unconfigureAnchorEl() {
      var _this2 = this;

      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.contextMenu;

      if (context === true) {
        if (this.$q.platform.is.mobile) {
          this.anchorEl.removeEventListener('touchstart', this.__mobileTouch);
          ['touchcancel', 'touchmove', 'touchend'].forEach(function (evt) {
            _this2.anchorEl.removeEventListener(evt, _this2.__mobileCleanup);
          });
        } else {
          this.anchorEl.removeEventListener('click', this.hide);
          this.anchorEl.removeEventListener('contextmenu', this.__contextClick);
        }
      } else {
        this.anchorEl.removeEventListener('click', this.toggle);
        this.anchorEl.removeEventListener('keyup', this.__toggleKey);
      }
    },
    __configureAnchorEl: function __configureAnchorEl() {
      var _this3 = this;

      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.contextMenu;

      if (this.noParentEvent === true) {
        return;
      }

      if (context === true) {
        if (this.$q.platform.is.mobile) {
          this.anchorEl.addEventListener('touchstart', this.__mobileTouch);
          ['touchcancel', 'touchmove', 'touchend'].forEach(function (evt) {
            _this3.anchorEl.addEventListener(evt, _this3.__mobileCleanup);
          });
        } else {
          this.anchorEl.addEventListener('click', this.hide);
          this.anchorEl.addEventListener('contextmenu', this.__contextClick);
        }
      } else {
        this.anchorEl.addEventListener('click', this.toggle);
        this.anchorEl.addEventListener('keyup', this.__toggleKey);
      }
    },
    __setAnchorEl: function __setAnchorEl(el) {
      this.anchorEl = el;

      while (this.anchorEl.classList.contains('q-anchor--skip')) {
        this.anchorEl = this.anchorEl.parentNode;
      }

      this.__configureAnchorEl();
    },
    __pickAnchorEl: function __pickAnchorEl() {
      if (this.target && typeof this.target === 'string') {
        var el = document.querySelector(this.target);

        if (el !== null) {
          this.anchorEl = el;

          this.__configureAnchorEl();
        } else {
          this.anchorEl = void 0;
          console.error("Anchor: target \"".concat(this.target, "\" not found"), this);
        }
      } else if (this.target !== false) {
        this.__setAnchorEl(this.parentEl);
      } else {
        this.anchorEl = void 0;
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.parentEl = this.$el.parentNode;
    this.$nextTick(function () {
      _this4.__pickAnchorEl();

      if (_this4.value === true) {
        if (_this4.anchorEl === void 0) {
          _this4.$emit('input', false);
        } else {
          _this4.show();
        }
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.touchTimer);
    this.__anchorCleanup !== void 0 && this.__anchorCleanup();

    if (this.anchorEl !== void 0) {
      this.__unconfigureAnchorEl();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/model-toggle.js
var model_toggle = __webpack_require__("7ee0");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/portal.js + 1 modules
var portal = __webpack_require__("9e62");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/transition.js
/* harmony default export */ var transition = ({
  props: {
    transitionShow: {
      type: String,
      default: 'fade'
    },
    transitionHide: {
      type: String,
      default: 'fade'
    }
  },
  data: function data() {
    return {
      transitionState: this.showing
    };
  },
  watch: {
    showing: function showing(val) {
      var _this = this;

      this.transitionShow !== this.transitionHide && this.$nextTick(function () {
        _this.transitionState = val;
      });
    }
  },
  computed: {
    transition: function transition() {
      return 'q-transition--' + (this.transitionState === true ? this.transitionHide : this.transitionShow);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("448a");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/ClickOutside.js



var evtOpts = utils_event["d" /* listenOpts */].notPassiveCapture;
/* harmony default export */ var ClickOutside = ({
  name: 'click-outside',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        arg = _ref.arg;
    var ctx = {
      trigger: value,
      handler: function handler(evt) {
        var target = evt && evt.target;

        if (target && target !== document.body) {
          var related = arg !== void 0 ? [].concat(toConsumableArray_default()(arg), [el]) : [el];

          for (var i = related.length - 1; i >= 0; i--) {
            if (related[i].contains(target)) {
              return;
            }
          }

          var parent = target;

          while (parent !== document.body) {
            if (parent.classList.contains('q-menu') || parent.classList.contains('q-dialog')) {
              var sibling = parent;

              while ((sibling = sibling.previousElementSibling) !== null) {
                if (sibling.contains(el)) {
                  return;
                }
              }
            }

            parent = parent.parentNode;
          }
        } // prevent accidental click/tap on something else
        // that has a trigger --> improves UX


        Platform["a" /* default */].is.mobile === true && Object(utils_event["h" /* stopAndPrevent */])(evt);
        ctx.trigger(evt);
      }
    };

    if (el.__qclickoutside) {
      el.__qclickoutside_old = el.__qclickoutside;
    }

    el.__qclickoutside = ctx;
    document.body.addEventListener('mousedown', ctx.handler, evtOpts);
    document.body.addEventListener('touchstart', ctx.handler, evtOpts);
    Platform["a" /* default */].is.desktop === true && document.body.addEventListener('focusin', ctx.handler, evtOpts);
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value !== oldValue) {
      el.__qclickoutside.trigger = value;
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qclickoutside_old || el.__qclickoutside;

    if (ctx !== void 0) {
      document.body.removeEventListener('mousedown', ctx.handler, evtOpts);
      document.body.removeEventListener('touchstart', ctx.handler, evtOpts);
      Platform["a" /* default */].is.desktop === true && document.body.removeEventListener('focusin', ctx.handler, evtOpts);
      delete el[el.__qclickoutside_old ? '__qclickoutside_old' : '__qclickoutside'];
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__("1732");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/scroll.js
var utils_scroll = __webpack_require__("0831");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/escape-key.js
var escape_key = __webpack_require__("a267");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/menu-tree.js

var bus = new external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a(),
    tree = {},
    rootHide = {};
/*
 * Tree has (key: value) entries where
 *
 *    key: menuId
 *
 *    value --> (true / menuId)
 *       true --- means has no sub-menu opened
 *       menuId --- menuId of the sub-menu that is currently opened
 *
 */

function closeRootMenu(id) {
  while (tree[id] !== void 0) {
    var res = Object.keys(tree).find(function (key) {
      return tree[key] === id;
    });

    if (res !== void 0) {
      id = res;
    } else {
      rootHide[id] !== void 0 && rootHide[id]();
      return true;
    }
  }
}
var MenuTreeMixin = {
  methods: {
    __registerTree: function __registerTree() {
      tree[this.menuId] = true;

      if (this.$root.menuParentId === void 0) {
        rootHide[this.menuId] = this.hide;
        return;
      }

      if (tree[this.$root.menuParentId] !== true) {
        bus.$emit('hide', tree[this.$root.menuParentId]);
      }

      bus.$on('hide', this.__processEvent);
      tree[this.$root.menuParentId] = this.menuId;
    },
    __unregisterTree: function __unregisterTree() {
      // if it hasn't been registered or already unregistered (beforeDestroy)
      if (tree[this.menuId] === void 0) {
        return;
      }

      delete rootHide[this.menuId];

      if (this.$root.menuParentId !== void 0) {
        bus.$off('hide', this.__processEvent);
      }

      var child = tree[this.menuId];
      delete tree[this.menuId];

      if (child !== true) {
        bus.$emit('hide', child);
      }
    },
    __processEvent: function __processEvent(id) {
      this.menuId === id && this.hide();
    }
  }
};
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/position-engine.js

function validatePosition(pos) {
  var parts = pos.split(' ');

  if (parts.length !== 2) {
    return false;
  }

  if (!['top', 'center', 'bottom'].includes(parts[0])) {
    console.error('Anchor/Self position must start with one of top/center/bottom');
    return false;
  }

  if (!['left', 'middle', 'right'].includes(parts[1])) {
    console.error('Anchor/Self position must end with one of left/middle/right');
    return false;
  }

  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }

  if (val.length !== 2) {
    return false;
  }

  if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
    return false;
  }

  return true;
}
function parsePosition(pos) {
  var parts = pos.split(' ');
  return {
    vertical: parts[0],
    horizontal: parts[1]
  };
}
function validateCover(val) {
  if (val === true || val === false) {
    return true;
  }

  return validatePosition(val);
}
function getAnchorProps(el, offset) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      right = _el$getBoundingClient.right,
      bottom = _el$getBoundingClient.bottom,
      width = _el$getBoundingClient.width,
      height = _el$getBoundingClient.height;

  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }

  return {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getTargetProps(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  };
} // cfg: { el, anchorEl, anchorOrigin, selfOrigin, offset, absoluteOffset, cover, fit, maxHeight, maxWidth }

function setPosition(cfg) {
  var anchorProps; // scroll position might change
  // if max-height changes, so we
  // need to restore it after we calculate
  // the new positioning

  var scrollTop = cfg.el.scrollTop;
  cfg.el.style.maxHeight = cfg.maxHeight;
  cfg.el.style.maxWidth = cfg.maxWidth;

  if (cfg.absoluteOffset === void 0) {
    anchorProps = getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset);
  } else {
    var _cfg$anchorEl$getBoun = cfg.anchorEl.getBoundingClientRect(),
        anchorTop = _cfg$anchorEl$getBoun.top,
        anchorLeft = _cfg$anchorEl$getBoun.left,
        top = anchorTop + cfg.absoluteOffset.top,
        left = anchorLeft + cfg.absoluteOffset.left;

    anchorProps = {
      top: top,
      left: left,
      width: 1,
      height: 1,
      right: left + 1,
      center: top,
      middle: left,
      bottom: top + 1
    };
  }

  if (cfg.fit === true || cfg.cover === true) {
    cfg.el.style.minWidth = anchorProps.width + 'px';

    if (cfg.cover === true) {
      cfg.el.style.minHeight = anchorProps.height + 'px';
    }
  }

  var targetProps = getTargetProps(cfg.el),
      props = {
    top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
    left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
  };
  applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
  cfg.el.style.top = Math.max(0, Math.floor(props.top)) + 'px';
  cfg.el.style.left = Math.max(0, Math.floor(props.left)) + 'px';

  if (props.maxHeight !== void 0) {
    cfg.el.style.maxHeight = Math.floor(props.maxHeight) + 'px';
  }

  if (props.maxWidth !== void 0) {
    cfg.el.style.maxWidth = Math.floor(props.maxWidth) + 'px';
  } // restore scroll position


  if (cfg.el.scrollTop !== scrollTop) {
    cfg.el.scrollTop = scrollTop;
  }
}

function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  var margin = Object(utils_scroll["b" /* getScrollbarWidth */])();
  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth; // don't go bellow scrollbars

  innerHeight -= margin;
  innerWidth -= margin;

  if (props.top < 0 || props.top + targetProps.bottom > innerHeight) {
    if (selfOrigin.vertical === 'center') {
      props.top = anchorProps[selfOrigin.vertical] > innerHeight / 2 ? innerHeight - targetProps.bottom : 0;
      props.maxHeight = Math.min(targetProps.bottom, innerHeight);
    } else if (anchorProps[selfOrigin.vertical] > innerHeight / 2) {
      var anchorY = Math.min(innerHeight, anchorOrigin.vertical === 'center' ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top);
      props.maxHeight = Math.min(targetProps.bottom, anchorY);
      props.top = Math.max(0, anchorY - props.maxHeight);
    } else {
      props.top = anchorOrigin.vertical === 'center' ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom;
      props.maxHeight = Math.min(targetProps.bottom, innerHeight - props.top);
    }
  }

  if (props.left < 0 || props.left + targetProps.right > innerWidth) {
    props.maxWidth = Math.min(targetProps.right, innerWidth);

    if (selfOrigin.horizontal === 'middle') {
      props.left = anchorProps[selfOrigin.horizontal] > innerWidth / 2 ? innerWidth - targetProps.right : 0;
    } else if (anchorProps[selfOrigin.horizontal] > innerWidth / 2) {
      var anchorX = Math.min(innerWidth, anchorOrigin.horizontal === 'middle' ? anchorProps.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left);
      props.maxWidth = Math.min(targetProps.right, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = anchorOrigin.horizontal === 'middle' ? anchorProps.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right;
      props.maxWidth = Math.min(targetProps.right, innerWidth - props.left);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/QMenu.js














/* harmony default export */ var QMenu = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QMenu',
  mixins: [mixins_anchor, model_toggle["a" /* default */], portal["a" /* default */], MenuTreeMixin, transition],
  directives: {
    ClickOutside: ClickOutside
  },
  props: {
    persistent: Boolean,
    autoClose: Boolean,
    noParentEvent: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      menuId: Object(uid["a" /* default */])()
    };
  },
  computed: {
    horizSide: function horizSide() {
      return this.$q.lang.rtl ? 'right' : 'left';
    },
    anchorOrigin: function anchorOrigin() {
      return parsePosition(this.anchor || (this.cover === true ? "center middle" : "bottom ".concat(this.horizSide)));
    },
    selfOrigin: function selfOrigin() {
      return this.cover === true ? this.anchorOrigin : parsePosition(this.self || "top ".concat(this.horizSide));
    },
    menuClass: function menuClass() {
      return this.square === true ? ' q-menu--square' : '';
    }
  },
  watch: {
    noParentEvent: function noParentEvent(val) {
      if (this.anchorEl !== void 0) {
        if (val === true) {
          this.__unconfigureAnchorEl();
        } else {
          this.__configureAnchorEl();
        }
      }
    }
  },
  methods: {
    focus: function focus() {
      var node = this.__portal.$refs !== void 0 ? this.__portal.$refs.inner : void 0;

      if (node !== void 0 && node.contains(document.activeElement) !== true) {
        node = node.querySelector('[autofocus]') || node;
        node.focus();
      }
    },
    __show: function __show(evt) {
      var _this = this;

      clearTimeout(this.timer);
      this.__refocusTarget = this.noRefocus === false ? document.activeElement : void 0;
      this.scrollTarget = Object(utils_scroll["a" /* getScrollTarget */])(this.anchorEl);
      this.scrollTarget.addEventListener('scroll', this.updatePosition, utils_event["d" /* listenOpts */].passive);

      if (this.scrollTarget !== window) {
        window.addEventListener('scroll', this.updatePosition, utils_event["d" /* listenOpts */].passive);
      }

      escape_key["a" /* default */].register(this, function () {
        if (_this.persistent !== true) {
          _this.$emit('escape-key');

          _this.hide();
        }
      });

      this.__showPortal();

      this.__registerTree();

      this.timer = setTimeout(function () {
        var _this$anchorEl$getBou = _this.anchorEl.getBoundingClientRect(),
            top = _this$anchorEl$getBou.top,
            left = _this$anchorEl$getBou.left;

        if (_this.touchPosition || _this.contextMenu) {
          var pos = Object(utils_event["e" /* position */])(evt);
          _this.absoluteOffset = {
            left: pos.left - left,
            top: pos.top - top
          };
        } else {
          _this.absoluteOffset = void 0;
        }

        _this.updatePosition();

        if (_this.unwatch === void 0) {
          _this.unwatch = _this.$watch('$q.screen.width', _this.updatePosition);
        }

        _this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-show', {
          bubbles: true
        }));

        if (_this.noFocus !== true) {
          document.activeElement.blur();

          _this.$nextTick(function () {
            _this.focus();
          });
        }

        _this.timer = setTimeout(function () {
          _this.$emit('show', evt);
        }, 300);
      }, 0);
    },
    __hide: function __hide(evt) {
      var _this2 = this;

      this.__anchorCleanup(true);

      if (this.__refocusTarget !== void 0) {
        this.__refocusTarget.focus();
      }

      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));
      this.timer = setTimeout(function () {
        _this2.__hidePortal();

        _this2.$emit('hide', evt);
      }, 300);
    },
    __anchorCleanup: function __anchorCleanup(hiding) {
      clearTimeout(this.timer);
      this.absoluteOffset = void 0;

      if (this.unwatch !== void 0) {
        this.unwatch();
        this.unwatch = void 0;
      }

      if (hiding === true || this.showing === true) {
        escape_key["a" /* default */].pop(this);

        this.__unregisterTree();

        this.scrollTarget.removeEventListener('scroll', this.updatePosition, utils_event["d" /* listenOpts */].passive);

        if (this.scrollTarget !== window) {
          window.removeEventListener('scroll', this.updatePosition, utils_event["d" /* listenOpts */].passive);
        }
      }
    },
    __onAutoClose: function __onAutoClose(e) {
      closeRootMenu(this.menuId);
      this.$emit('click', e);
    },
    updatePosition: function updatePosition() {
      var _this3 = this;

      var el = this.__portal.$el;

      if (el.nodeType === 8) {
        // IE replaces the comment with delay
        setTimeout(function () {
          _this3.__portal !== void 0 && _this3.__portal.showing === true && _this3.updatePosition();
        }, 25);
        return;
      }

      setPosition({
        el: el,
        offset: this.offset,
        anchorEl: this.anchorEl,
        anchorOrigin: this.anchorOrigin,
        selfOrigin: this.selfOrigin,
        absoluteOffset: this.absoluteOffset,
        fit: this.fit,
        cover: this.cover,
        maxHeight: this.maxHeight,
        maxWidth: this.maxWidth
      });
    },
    __render: function __render(h) {
      var on = objectSpread_default()({}, this.$listeners, {
        input: utils_event["g" /* stop */]
      });

      if (this.autoClose === true) {
        on.click = this.__onAutoClose;
      }

      return h('transition', {
        props: {
          name: this.transition
        }
      }, [this.showing === true ? h('div', {
        ref: 'inner',
        staticClass: 'q-menu scroll' + this.menuClass,
        class: this.contentClass,
        style: this.contentStyle,
        attrs: objectSpread_default()({
          tabindex: -1
        }, this.$attrs),
        on: on,
        directives: this.persistent !== true ? [{
          name: 'click-outside',
          value: this.hide,
          arg: [this.anchorEl]
        }] : null
      }, Object(slot["a" /* default */])(this, 'default')) : null]);
    },
    __onPortalCreated: function __onPortalCreated(vm) {
      vm.menuParentId = this.menuId;
    },
    __onPortalClose: function __onPortalClose() {
      closeRootMenu(this.menuId);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // When the menu is destroyed while open we can only emit the event on anchorEl
    if (this.value === true && this.anchorEl !== void 0) {
      this.anchorEl.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));
    }
  }
}));

/***/ }),

/***/ "4f23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Styles.vue?vue&type=template&id=0ce94608&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-styles"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))]),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor",staticStyle:{"height":"60px"}},[_c('h6',[_vm._v("Styles")])])}]


// CONCATENATED MODULE: ./support/designtime/inspector/props/Styles.vue?vue&type=template&id=0ce94608&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Styles.vue?vue&type=script&lang=ts&









var Stylesvue_type_script_lang_ts_PaStylesProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaStylesProp, _PropInput);

  function PaStylesProp() {
    classCallCheck_default()(this, PaStylesProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaStylesProp).apply(this, arguments));
  }

  createClass_default()(PaStylesProp, [{
    key: "onChange",
    value: function onChange(val) {
      this.emitChange(Object.assign({}, this.prop, {
        value: val
      }));
    }
  }]);

  return PaStylesProp;
}(PropInput["a" /* default */]);

Stylesvue_type_script_lang_ts_PaStylesProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaStylesProp',
  components: {}
})], Stylesvue_type_script_lang_ts_PaStylesProp);
/* harmony default export */ var Stylesvue_type_script_lang_ts_ = (Stylesvue_type_script_lang_ts_PaStylesProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Styles.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Stylesvue_type_script_lang_ts_ = (Stylesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Styles.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Stylesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Styles = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5694":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderMixin; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7937");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d882");
/* harmony import */ var _directives_TouchPan_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("75c3");



 // PGDOWN, LEFT, DOWN, PGUP, RIGHT, UP

var keyCodes = [34, 37, 40, 33, 39, 38];
function getRatio(evt, dragging, rtl) {
  var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* position */ "e"])(evt),
      val = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__[/* between */ "a"])((pos.left - dragging.left) / dragging.width, 0, 1);
  return rtl ? 1.0 - val : val;
}
function getModel(ratio, min, max, step, decimals) {
  var model = min + ratio * (max - min);

  if (step > 0) {
    var modulo = (model - min) % step;
    model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
  }

  if (decimals > 0) {
    model = parseFloat(model.toFixed(decimals));
  }

  return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__[/* between */ "a"])(model, min, max);
}
var SliderMixin = {
  directives: {
    TouchPan: _directives_TouchPan_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    color: String,
    labelColor: String,
    dark: Boolean,
    dense: Boolean,
    label: Boolean,
    labelAlways: Boolean,
    markers: Boolean,
    snap: Boolean,
    disable: Boolean,
    readonly: Boolean,
    tabindex: [String, Number]
  },
  data: function data() {
    return {
      active: false,
      preventFocus: false,
      focus: false
    };
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "text-".concat(this.color), this.color), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "q-slider--".concat(this.active ? '' : 'in', "active"), true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'disabled', this.disable), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--editable', this.editable), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--focus', this.focus === 'both'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--label', this.label || this.labelAlways), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--label-always', this.labelAlways), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--dark', this.dark), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'q-slider--dense', this.dense), _ref;
    },
    editable: function editable() {
      return !this.disable && !this.readonly;
    },
    decimals: function decimals() {
      return (String(this.step).trim('0').split('.')[1] || '').length;
    },
    computedStep: function computedStep() {
      return this.step === 0 ? 1 : this.step;
    },
    markerStyle: function markerStyle() {
      return {
        backgroundSize: 100 * this.computedStep / (this.max - this.min) + '% 2px'
      };
    },
    computedTabindex: function computedTabindex() {
      return this.editable === true ? this.tabindex || 0 : -1;
    },
    horizProp: function horizProp() {
      return this.$q.lang.rtl === true ? 'right' : 'left';
    }
  },
  methods: {
    __pan: function __pan(event) {
      if (event.isFinal) {
        if (this.dragging) {
          this.__updatePosition(event.evt);

          this.__updateValue(true);

          this.dragging = false;
        }

        this.active = false;
      } else if (event.isFirst) {
        this.dragging = this.__getDragging(event.evt);

        this.__updatePosition(event.evt);

        this.active = true;
      } else {
        this.__updatePosition(event.evt);

        this.__updateValue();
      }
    },
    __blur: function __blur() {
      this.focus = false;
    },
    __activate: function __activate(evt) {
      this.__updatePosition(evt, this.__getDragging(evt));

      this.preventFocus = true;
      this.active = true;
      document.addEventListener('mouseup', this.__deactivate, true);
    },
    __deactivate: function __deactivate() {
      this.preventFocus = false;
      this.active = false;

      this.__updateValue(true);

      this.__blur();

      document.removeEventListener('mouseup', this.__deactivate, true);
    },
    __mobileClick: function __mobileClick(evt) {
      this.__updatePosition(evt, this.__getDragging(evt));

      this.__updateValue(true);
    },
    __keyup: function __keyup(evt) {
      if (keyCodes.includes(evt.keyCode)) {
        this.__updateValue(true);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('mouseup', this.__deactivate, true);
  }
};

/***/ }),

/***/ "582c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0967");

/* harmony default export */ __webpack_exports__["a"] = ({
  __history: [],
  add: function add() {},
  remove: function remove() {},
  install: function install($q, cfg) {
    var _this = this;

    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isSSR */ "c"] || !$q.platform.is.cordova) {
      return;
    }

    this.add = function (definition) {
      _this.__history.push(definition);
    };

    this.remove = function (definition) {
      var index = _this.__history.indexOf(definition);

      if (index >= 0) {
        _this.__history.splice(index, 1);
      }
    };

    var exit = cfg.cordova === void 0 || cfg.cordova.backButtonExit !== false;
    document.addEventListener('deviceready', function () {
      document.addEventListener('backbutton', function () {
        if (_this.__history.length) {
          _this.__history.pop().handler();
        } else if (exit && window.location.hash === '#/') {
          navigator.app.exitApp();
        } else {
          window.history.back();
        }
      }, false);
    });
  }
});

/***/ }),

/***/ "592b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Percent.vue?vue&type=template&id=a8bc5e38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-percent row"},[_c('div',{staticClass:"col col-label"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col col-input"},[_c('q-input',{attrs:{"square":"","dense":"","dark":"","standout":"bg-secondary","type":"number","suffix":"%","placeholder":"(not set)","value":_vm.prop.value && _vm.prop.value.number},on:{"input":_vm.onInput}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Percent.vue?vue&type=template&id=a8bc5e38&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Percent.vue?vue&type=script&lang=ts&









var Percentvue_type_script_lang_ts_PaPercent =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaPercent, _PropInput);

  function PaPercent() {
    classCallCheck_default()(this, PaPercent);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaPercent).apply(this, arguments));
  }

  createClass_default()(PaPercent, [{
    key: "onInput",
    value: function onInput(value) {
      this.commit(value);
    }
  }, {
    key: "beforeMounted",
    value: function beforeMounted() {
      if (!this.prop.value) {
        this.prop.value.number = 10;
      }
    }
  }]);

  return PaPercent;
}(PropInput["a" /* default */]);

Percentvue_type_script_lang_ts_PaPercent = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaPercentProp'
})], Percentvue_type_script_lang_ts_PaPercent);
/* harmony default export */ var Percentvue_type_script_lang_ts_ = (Percentvue_type_script_lang_ts_PaPercent);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Percent.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Percentvue_type_script_lang_ts_ = (Percentvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Percent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Percentvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Percent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5bc3":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "60a3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Inject */
/* unused harmony export Provide */
/* unused harmony export Model */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Prop; });
/* unused harmony export Watch */
/* unused harmony export Emit */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fe1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/** vue-property-decorator verson 8.1.1 MIT LICENSE copyright 2018 kaorun343 */
/// <reference types='reflect-metadata'/>




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__[/* createDecorator */ "a"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__[/* createDecorator */ "a"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) && typeof options !== 'function' && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__[/* createDecorator */ "a"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__[/* createDecorator */ "a"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__[/* createDecorator */ "a"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ "628b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/align.js
var alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around'
},
    alignValues = Object.keys(alignMap);
/* harmony default export */ var align = ({
  props: {
    align: {
      type: String,
      default: 'left',
      validator: function validator(v) {
        return alignValues.includes(v);
      }
    }
  },
  computed: {
    alignClass: function alignClass() {
      return "justify-".concat(alignMap[this.align]);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/ripple.js + 1 modules
var ripple = __webpack_require__("3d69");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/btn-mixin.js


var sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
/* harmony default export */ var btn_mixin = __webpack_exports__["a"] = ({
  mixins: [ripple["a" /* default */], align],
  props: {
    type: String,
    to: [Object, String],
    replace: Boolean,
    label: [Number, String],
    icon: String,
    iconRight: String,
    round: Boolean,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    align: {
      default: 'center'
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
      type: Boolean,
      default: null
    },
    disable: Boolean
  },
  computed: {
    style: function style() {
      if (this.size && !this.fab && !this.fabMini) {
        return {
          fontSize: this.size in sizes ? "".concat(sizes[this.size], "px") : this.size
        };
      }
    },
    isRound: function isRound() {
      return this.round === true || this.fab === true || this.fabMini === true;
    },
    isDisabled: function isDisabled() {
      return this.disable === true || this.loading === true;
    },
    computedTabIndex: function computedTabIndex() {
      return this.isDisabled === true ? -1 : this.tabindex || 0;
    },
    hasRouterLink: function hasRouterLink() {
      return this.disable !== true && this.to !== void 0 && this.to !== null && this.to !== '';
    },
    isLink: function isLink() {
      return this.type === 'a' || this.hasRouterLink === true;
    },
    design: function design() {
      if (this.flat === true) return 'flat';
      if (this.outline === true) return 'outline';
      if (this.push === true) return 'push';
      if (this.unelevated === true) return 'unelevated';
      return 'standard';
    },
    attrs: function attrs() {
      var att = {
        tabindex: this.computedTabIndex
      };

      if (this.type !== 'a') {
        att.type = this.type || 'button';
      }

      if (this.hasRouterLink === true) {
        att.href = this.$router.resolve(this.to).href;
      }

      if (this.isDisabled === true) {
        att.disabled = true;
      }

      return att;
    },
    classes: function classes() {
      var colors;

      if (this.color !== void 0) {
        if (this.flat === true || this.outline === true) {
          colors = "text-".concat(this.textColor || this.color);
        } else {
          colors = "bg-".concat(this.color, " text-").concat(this.textColor || 'white');
        }
      } else if (this.textColor) {
        colors = "text-".concat(this.textColor);
      }

      return "q-btn--".concat(this.design, " q-btn--").concat(this.isRound === true ? 'round' : 'rectangle') + (colors !== void 0 ? ' ' + colors : '') + (this.isDisabled !== true ? ' q-focusable q-hoverable' : ' disabled') + (this.fab === true ? ' q-btn--fab' : this.fabMini === true ? ' q-btn--fab-mini' : '') + (this.noCaps === true ? ' q-btn--no-uppercase' : '') + (this.rounded === true ? ' q-btn--rounded' : '') + (this.dense === true ? ' q-btn--dense' : '') + (this.stretch === true ? ' no-border-radius self-stretch' : '') + (this.glossy === true ? ' glossy' : '');
    },
    innerClasses: function innerClasses() {
      return this.alignClass + (this.stack === true ? ' column' : ' row') + (this.noWrap === true ? ' no-wrap text-no-wrap' : '') + (this.loading === true ? ' q-btn__content--hidden' : '');
    }
  }
});

/***/ }),

/***/ "6475":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Colors.vue?vue&type=template&id=3ba5abd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-colors row"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col"},[(_vm.sequence.length > 0)?_c('div',{staticClass:"chips"},[_c('q-btn-group',{staticClass:"pipe"},_vm._l((_vm.sequence),function(c,i){return _c('q-btn',{key:i,style:({backgroundColor:c}),attrs:{"size":"xs","label":i + 1},on:{"click":function($event){$event.stopPropagation();return _vm.onChipsClick(i)}}})}),1),_c('q-btn',{staticClass:"append-btn",attrs:{"size":"xs","label":"+"},on:{"click":function($event){$event.stopPropagation();return _vm.onAppendClick($event)}}}),_c('q-btn',{staticClass:"clear-btn",attrs:{"size":"xs","label":"X"},on:{"click":function($event){$event.stopPropagation();return _vm.onDeleteClick($event)}}})],1):_c('div',{staticClass:"empty"},[_c('span',[_vm._v("(not set)")]),_c('q-btn',{attrs:{"flat":""},on:{"click":_vm.onCreateClick}},[_vm._v("➡️")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Colors.vue?vue&type=template&id=3ba5abd8&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("448a");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtnGroup.js
var QBtnGroup = __webpack_require__("8c8f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 1 modules
var QField = __webpack_require__("8572");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/mask.js
// leave NAMED_MASKS at top of file (code referenced from docs)
var NAMED_MASKS = {
  date: '####/##/##',
  datetime: '####/##/## ##:##',
  time: '##:##',
  fulltime: '##:##:##',
  phone: '(###) ### - ####',
  card: '#### #### #### ####'
};
var TOKENS = {
  '#': {
    pattern: '[\\d]',
    negate: '[^\\d]'
  },
  S: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]'
  },
  N: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]'
  },
  A: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleUpperCase();
    }
  },
  a: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleLowerCase();
    }
  },
  X: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleUpperCase();
    }
  },
  x: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleLowerCase();
    }
  }
};
var KEYS = Object.keys(TOKENS);
KEYS.forEach(function (key) {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
var tokenRegexMask = new RegExp('\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + KEYS.join('') + '])|(.)', 'g'),
    escRegex = /[.*+?^${}()|[\]\\]/g;
var MARKER = String.fromCharCode(1);
/* harmony default export */ var mask = ({
  props: {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean
  },
  watch: {
    type: function type() {
      this.__updateMaskInternals();
    },
    mask: function mask(v) {
      if (v !== void 0) {
        this.__updateMaskValue(this.innerValue, true);
      } else {
        var val = this.__unmask(this.innerValue);

        this.__updateMaskInternals();

        this.value !== val && this.$emit('input', val);
      }
    },
    fillMask: function fillMask() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue, true);
    },
    reverseFillMask: function reverseFillMask() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue, true);
    },
    unmaskedValue: function unmaskedValue() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue);
    }
  },
  methods: {
    __getInitialMaskedValue: function __getInitialMaskedValue() {
      this.__updateMaskInternals();

      if (this.hasMask === true) {
        var masked = this.__mask(this.__unmask(this.value));

        return this.fillMask !== false ? this.__fillWithMask(masked) : masked;
      }

      return this.value;
    },
    __getPaddedMaskMarked: function __getPaddedMaskMarked(size) {
      if (size < this.maskMarked.length) {
        return this.maskMarked.slice(-size);
      }

      var maskMarked = this.maskMarked,
          padPos = maskMarked.indexOf(MARKER),
          pad = '';

      if (padPos > -1) {
        for (var i = size - maskMarked.length; i > 0; i--) {
          pad += MARKER;
        }

        maskMarked = maskMarked.slice(0, padPos) + pad + maskMarked.slice(padPos);
      }

      return maskMarked;
    },
    __updateMaskInternals: function __updateMaskInternals() {
      this.hasMask = this.mask !== void 0 && this.mask.length > 0 && ['text', 'search', 'url', 'tel', 'password'].includes(this.type);

      if (this.hasMask === false) {
        this.computedUnmask = void 0;
        this.maskMarked = '';
        this.maskReplaced = '';
        return;
      }

      var computedMask = NAMED_MASKS[this.mask] === void 0 ? this.mask : NAMED_MASKS[this.mask],
          fillChar = typeof this.fillMask === 'string' && this.fillMask.length > 0 ? this.fillMask.slice(0, 1) : '_',
          fillCharEscaped = fillChar.replace(escRegex, '\\$&'),
          unmask = [],
          extract = [],
          mask = [];
      var firstMatch = this.reverseFillMask === true,
          unmaskChar = '',
          negateChar = '';
      computedMask.replace(tokenRegexMask, function (_, char1, esc, token, char2) {
        if (token !== void 0) {
          var c = TOKENS[token];
          mask.push(c);
          negateChar = c.negate;

          if (firstMatch === true) {
            extract.push('(?:' + negateChar + '+?)?(' + c.pattern + '+)?(?:' + negateChar + '+?)?(' + c.pattern + '+)?');
            firstMatch = false;
          }

          extract.push('(?:' + negateChar + '+?)?(' + c.pattern + ')?');
        } else if (esc !== void 0) {
          unmaskChar = '\\' + esc;
          mask.push(esc);
          unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
        } else {
          var _c = char1 !== void 0 ? char1 : char2;

          unmaskChar = _c.replace(escRegex, '\\\\$&');
          mask.push(_c);
          unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
        }
      });
      var unmaskMatcher = new RegExp('^' + unmask.join('') + '(' + (unmaskChar === '' ? '.' : '[^' + unmaskChar + ']') + '+)?' + '$'),
          extractMatcher = new RegExp('^' + (this.reverseFillMask === true ? fillCharEscaped + '*' : '') + extract.join('') + '(' + (negateChar === '' ? '.' : negateChar) + '+)?' + (this.reverseFillMask === true ? '' : fillCharEscaped + '*') + '$');
      this.computedMask = mask;

      this.computedUnmask = function (val) {
        var unmaskMatch = unmaskMatcher.exec(val);

        if (unmaskMatch !== null) {
          val = unmaskMatch.slice(1).join('');
        }

        var extractMatch = extractMatcher.exec(val);

        if (extractMatch !== null) {
          return extractMatch.slice(1).join('');
        }

        return val;
      };

      this.maskMarked = mask.map(function (v) {
        return typeof v === 'string' ? v : MARKER;
      }).join('');
      this.maskReplaced = this.maskMarked.split(MARKER).join(fillChar);
    },
    __updateMaskValue: function __updateMaskValue(rawVal, updateMaskInternals) {
      var _this = this;

      var inp = this.$refs.input,
          oldCursor = this.reverseFillMask === true ? inp.value.length - inp.selectionEnd : inp.selectionEnd,
          unmasked = this.__unmask(rawVal); // Update here so unmask uses the original fillChar


      updateMaskInternals === true && this.__updateMaskInternals();
      var masked = this.fillMask !== false ? this.__fillWithMask(this.__mask(unmasked)) : this.__mask(unmasked),
          changed = this.innerValue !== masked; // We want to avoid "flickering" so we set value immediately

      inp.value !== masked && (inp.value = masked);
      changed === true && (this.innerValue = masked);
      this.$nextTick(function () {
        if (_this.reverseFillMask === true) {
          if (changed === true) {
            var cursor = Math.max(0, masked.length - (masked === _this.maskReplaced ? 0 : oldCursor + 1));

            _this.__moveCursorRightReverse(inp, cursor, cursor);
          } else {
            var _cursor = masked.length - oldCursor;

            inp.setSelectionRange(_cursor, _cursor);
          }
        } else if (changed === true) {
          if (masked === _this.maskReplaced) {
            _this.__moveCursorLeft(inp, 0, 0);
          } else {
            var _cursor2 = Math.max(0, _this.maskMarked.indexOf(MARKER), oldCursor - 1);

            _this.__moveCursorRight(inp, _cursor2, _cursor2);
          }
        } else {
          _this.__moveCursorLeft(inp, oldCursor, oldCursor);
        }
      });
      var val = this.unmaskedValue === true ? this.__unmask(masked) : masked;
      this.value !== val && this.__emitValue(val, true);
    },
    __moveCursorLeft: function __moveCursorLeft(inp, start, end, selection) {
      var noMarkBefore = this.maskMarked.slice(start - 1).indexOf(MARKER) === -1;
      var i = Math.max(0, start - 1);

      for (; i >= 0; i--) {
        if (this.maskMarked[i] === MARKER) {
          start = i;
          noMarkBefore === true && start++;
          break;
        }
      }

      if (i < 0 && this.maskMarked[start] !== void 0 && this.maskMarked[start] !== MARKER) {
        return this.__moveCursorRight(inp, 0, 0);
      }

      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, 'backward');
    },
    __moveCursorRight: function __moveCursorRight(inp, start, end, selection) {
      var limit = inp.value.length;
      var i = Math.min(limit, end + 1);

      for (; i <= limit; i++) {
        if (this.maskMarked[i] === MARKER) {
          end = i;
          break;
        } else if (this.maskMarked[i - 1] === MARKER) {
          end = i;
        }
      }

      if (i > limit && this.maskMarked[end - 1] !== void 0 && this.maskMarked[end - 1] !== MARKER) {
        return this.__moveCursorLeft(inp, limit, limit);
      }

      inp.setSelectionRange(selection ? start : end, end, 'forward');
    },
    __moveCursorLeftReverse: function __moveCursorLeftReverse(inp, start, end, selection) {
      var maskMarked = this.__getPaddedMaskMarked(inp.value.length);

      var i = Math.max(0, start - 1);

      for (; i >= 0; i--) {
        if (maskMarked[i - 1] === MARKER) {
          start = i;
          break;
        } else if (maskMarked[i] === MARKER) {
          start = i;

          if (i === 0) {
            break;
          }
        }
      }

      if (i < 0 && maskMarked[start] !== void 0 && maskMarked[start] !== MARKER) {
        return this.__moveCursorRightReverse(inp, 0, 0);
      }

      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, 'backward');
    },
    __moveCursorRightReverse: function __moveCursorRightReverse(inp, start, end, selection) {
      var limit = inp.value.length,
          maskMarked = this.__getPaddedMaskMarked(limit),
          noMarkBefore = maskMarked.slice(0, end + 1).indexOf(MARKER) === -1;

      var i = Math.min(limit, end + 1);

      for (; i <= limit; i++) {
        if (maskMarked[i - 1] === MARKER) {
          end = i;
          end > 0 && noMarkBefore === true && end--;
          break;
        }
      }

      if (i > limit && maskMarked[end - 1] !== void 0 && maskMarked[end - 1] !== MARKER) {
        return this.__moveCursorLeftReverse(inp, limit, limit);
      }

      inp.setSelectionRange(selection === true ? start : end, end, 'forward');
    },
    __onMaskedKeydown: function __onMaskedKeydown(e) {
      var inp = this.$refs.input,
          start = inp.selectionStart,
          end = inp.selectionEnd;

      if (e.keyCode === 37 || e.keyCode === 39) {
        // Left / Right
        var fn = this['__moveCursor' + (e.keyCode === 39 ? 'Right' : 'Left') + (this.reverseFillMask === true ? 'Reverse' : '')];
        e.preventDefault();
        fn(inp, start, end, e.shiftKey);
      } else if (e.keyCode === 8 && // Backspace
      this.reverseFillMask !== true && start === end) {
        this.__moveCursorLeft(inp, start, end, true);
      } else if (e.keyCode === 46 && // Delete
      this.reverseFillMask === true && start === end) {
        this.__moveCursorRightReverse(inp, start, end, true);
      }

      this.$emit('keydown', e);
    },
    __mask: function __mask(val) {
      if (val === void 0 || val === null || val === '') {
        return '';
      }

      if (this.reverseFillMask === true) {
        return this.__maskReverse(val);
      }

      var mask = this.computedMask;
      var valIndex = 0,
          output = '';

      for (var maskIndex = 0; maskIndex < mask.length; maskIndex++) {
        var valChar = val[valIndex],
            maskDef = mask[maskIndex];

        if (typeof maskDef === 'string') {
          output += maskDef;
          valChar === maskDef && valIndex++;
        } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
          output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
          valIndex++;
        } else {
          return output;
        }
      }

      return output;
    },
    __maskReverse: function __maskReverse(val) {
      var mask = this.computedMask,
          firstTokenIndex = this.maskMarked.indexOf(MARKER);
      var valIndex = val.length - 1,
          output = '';

      for (var maskIndex = mask.length - 1; maskIndex >= 0; maskIndex--) {
        var maskDef = mask[maskIndex];
        var valChar = val[valIndex];

        if (typeof maskDef === 'string') {
          output = maskDef + output;
          valChar === maskDef && valIndex--;
        } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
          do {
            output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
            valIndex--;
            valChar = val[valIndex]; // eslint-disable-next-line no-unmodified-loop-condition
          } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
        } else {
          return output;
        }
      }

      return output;
    },
    __unmask: function __unmask(val) {
      return typeof val !== 'string' || this.computedUnmask === void 0 ? val : this.computedUnmask(val);
    },
    __fillWithMask: function __fillWithMask(val) {
      if (this.maskReplaced.length - val.length <= 0) {
        return val;
      }

      return this.reverseFillMask === true && val.length > 0 ? this.maskReplaced.slice(0, -val.length) + val : val + this.maskReplaced.slice(val.length);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/debounce.js
var debounce = __webpack_require__("1c16");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/input/QInput.js






/* harmony default export */ var QInput = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QInput',
  mixins: [QField["a" /* default */], mask],
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    debounce: [String, Number],
    maxlength: [Number, String],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  watch: {
    value: function value(v) {
      if (this.hasMask === true) {
        if (this.stopValueWatcher === true) {
          this.stopValueWatcher = false;
          return;
        }

        this.__updateMaskValue(v);
      } else if (this.innerValue !== v) {
        this.innerValue = v;
      } // textarea only


      this.autogrow === true && this.$nextTick(this.__adjustHeightDebounce);
    },
    autogrow: function autogrow(_autogrow) {
      // textarea only
      if (_autogrow === true) {
        this.$nextTick(this.__adjustHeightDebounce);
      } // if it has a number of rows set respect it
      else if (this.$attrs.rows > 0) {
          var inp = this.$refs.input;
          inp.style.height = 'auto';
        }
    }
  },
  data: function data() {
    return {
      innerValue: this.__getInitialMaskedValue()
    };
  },
  computed: {
    isTextarea: function isTextarea() {
      return this.type === 'textarea' || this.autogrow === true;
    },
    fieldClass: function fieldClass() {
      return "q-".concat(this.isTextarea === true ? 'textarea' : 'input') + (this.autogrow === true ? ' q-textarea--autogrow' : '');
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    select: function select() {
      this.$refs.input.select();
    },
    __onInput: function __onInput(e) {
      if (this.type === 'file') {
        this.$emit('input', e.target.files);
        return;
      }

      var val = e.target.value;

      if (this.hasMask === true) {
        this.__updateMaskValue(val);
      } else {
        this.__emitValue(val);
      } // we need to trigger it immediately too,
      // to avoid "flickering"


      this.autogrow === true && this.__adjustHeight();
    },
    __emitValue: function __emitValue(val, stopWatcher) {
      var _this = this;

      var fn = function fn() {
        if (_this.hasOwnProperty('tempValue') === true) {
          delete _this.tempValue;
        }

        if (_this.value !== val) {
          stopWatcher === true && (_this.stopValueWatcher = true);

          _this.$emit('input', val);
        }
      };

      if (this.debounce !== void 0) {
        clearTimeout(this.emitTimer);
        this.tempValue = val;
        this.emitTimer = setTimeout(fn, this.debounce);
      } else {
        fn();
      }
    },
    // textarea only
    __adjustHeight: function __adjustHeight() {
      var inp = this.$refs.input;
      inp.style.height = '1px';
      inp.style.height = inp.scrollHeight + 'px';
    },
    __getControl: function __getControl(h) {
      var on = objectSpread_default()({}, this.$listeners, {
        input: this.__onInput,
        focus: utils_event["g" /* stop */],
        blur: utils_event["g" /* stop */]
      });

      if (this.hasMask === true) {
        on.keydown = this.__onMaskedKeydown;
      }

      var attrs = objectSpread_default()({
        tabindex: 0,
        autofocus: this.autofocus,
        rows: this.type === 'textarea' ? 6 : void 0
      }, this.$attrs, {
        'aria-label': this.label,
        type: this.type,
        maxlength: this.maxlength,
        disabled: this.disable,
        readonly: this.readonly
      });

      if (this.autogrow === true) {
        attrs.rows = 1;
      }

      return h(this.isTextarea ? 'textarea' : 'input', {
        ref: 'input',
        staticClass: 'q-field__native q-placeholder',
        style: this.inputStyle,
        class: this.inputClass,
        attrs: attrs,
        on: on,
        domProps: this.type !== 'file' ? {
          value: this.hasOwnProperty('tempValue') === true ? this.tempValue : this.innerValue
        } : null
      });
    }
  },
  created: function created() {
    // textarea only
    this.__adjustHeightDebounce = Object(debounce["a" /* default */])(this.__adjustHeight, 100);
  },
  mounted: function mounted() {
    // textarea only
    this.autogrow === true && this.__adjustHeight();
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.emitTimer);
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/components/color/QColor.js + 2 modules
var QColor = __webpack_require__("b498");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
var vue_class_component_esm = __webpack_require__("2fe1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Colors.vue?vue&type=script&lang=ts&














var Colorsvue_type_script_lang_ts_PaColorsProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaColorsProp, _PropInput);

  function PaColorsProp() {
    var _this;

    classCallCheck_default()(this, PaColorsProp);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaColorsProp).apply(this, arguments));
    _this.activeIndex = -1;
    return _this;
  }

  createClass_default()(PaColorsProp, [{
    key: "onCreateClick",
    value: function onCreateClick() {
      var seq = ['#000'];
      this.commit(seq);
    }
  }, {
    key: "onChipsClick",
    value: function onChipsClick(selected) {
      this.activeIndex = selected;
      this.callColorPicker(this.sequence[selected]);
    }
  }, {
    key: "callColorPicker",
    value: function callColorPicker(data) {
      this.$emit('drawerRequired', {
        command: 'color',
        payload: {
          data: data,
          callback: this.colorUpdated
        }
      });
    }
  }, {
    key: "onAppendClick",
    value: function onAppendClick() {
      var seq = toConsumableArray_default()(this.sequence);

      seq.push('#000000');
      this.commit(seq);
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      var seq = toConsumableArray_default()(this.sequence);

      seq.pop();
      this.commit(seq);
    }
  }, {
    key: "colorUpdated",
    value: function colorUpdated(color) {
      console.log('Colors.vue____________colorUpdated', color, this.activeIndex);

      var seq = toConsumableArray_default()(this.sequence);

      seq[this.activeIndex] = color;
      this.commit(seq);
    }
  }, {
    key: "sequence",
    get: function get() {
      return this.prop && this.prop.value && this.prop.value.value || [];
    }
  }]);

  return PaColorsProp;
}(PropInput["a" /* default */]);

Colorsvue_type_script_lang_ts_PaColorsProp = tslib_es6["a" /* __decorate */]([Object(vue_class_component_esm["b" /* default */])({
  name: 'PaColorsProp',
  components: {
    QBtnGroup: QBtnGroup["a" /* default */],
    QBtn: QBtn["a" /* default */],
    QInput: QInput,
    QColor: QColor["a" /* default */]
  }
})], Colorsvue_type_script_lang_ts_PaColorsProp);
/* harmony default export */ var Colorsvue_type_script_lang_ts_ = (Colorsvue_type_script_lang_ts_PaColorsProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Colors.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Colorsvue_type_script_lang_ts_ = (Colorsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Colors.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Colorsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Colors = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6ab5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/router-link.js
var routerLinkProps = {
  to: [String, Object],
  exact: Boolean,
  append: Boolean,
  replace: Boolean,
  activeClass: String,
  exactActiveClass: String,
  disable: Boolean
};
var RouterLinkMixin = {
  props: routerLinkProps,
  computed: {
    hasRouterLink: function hasRouterLink() {
      return this.disable !== true && this.to !== void 0 && this.to !== null && this.to !== '';
    },
    routerLinkProps: function routerLinkProps() {
      return {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass || 'q-router-link--active',
        exactActiveClass: this.exactActiveClass || 'q-router-link--exact-active',
        event: this.disable === true ? '' : void 0
      };
    }
  }
};
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QItem.js






/* harmony default export */ var QItem = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QItem',
  mixins: [RouterLinkMixin],
  props: {
    active: Boolean,
    dark: Boolean,
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    tag: {
      type: String,
      default: 'div'
    },
    focused: Boolean,
    manualFocus: Boolean
  },
  computed: {
    isClickable: function isClickable() {
      return this.disable !== true && (this.clickable === true || this.hasRouterLink === true || this.tag === 'a' || this.tag === 'label');
    },
    classes: function classes() {
      var _ref;

      return _ref = {
        'q-item--clickable q-link cursor-pointer': this.isClickable,
        'q-focusable q-hoverable': this.isClickable === true && this.manualFocus === false,
        'q-manual-focusable': this.isClickable === true && this.manualFocus === true,
        'q-manual-focusable--focused': this.isClickable === true && this.focused === true,
        'q-item--dense': this.dense,
        'q-item--dark': this.dark,
        'q-item--active': this.active
      }, defineProperty_default()(_ref, this.activeClass, this.active === true && this.hasRouterLink !== true && this.activeClass !== void 0), defineProperty_default()(_ref, 'disabled', this.disable), _ref;
    },
    style: function style() {
      if (this.insetLevel !== void 0) {
        return {
          paddingLeft: 16 + this.insetLevel * 56 + 'px'
        };
      }
    }
  },
  methods: {
    __getContent: function __getContent(h) {
      var child = [].concat(Object(slot["a" /* default */])(this, 'default'));
      this.isClickable === true && child.unshift(h('div', {
        staticClass: 'q-focus-helper',
        attrs: {
          tabindex: -1
        },
        ref: 'blurTarget'
      }));
      return child;
    },
    __onClick: function __onClick(e) {
      if (this.isClickable === true) {
        if (e.qKeyEvent !== true && this.$refs.blurTarget !== void 0) {
          this.$refs.blurTarget.focus();
        }

        this.$emit('click', e);
      }
    },
    __onKeyup: function __onKeyup(e) {
      if (e.keyCode === 13 && this.isClickable === true) {
        Object(utils_event["h" /* stopAndPrevent */])(e); // for ripple

        e.qKeyEvent = true; // for click trigger

        var evt = new MouseEvent('click', e);
        evt.qKeyEvent = true;
        this.$el.dispatchEvent(evt);
      }

      this.$emit('keyup', e);
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'q-item q-item-type row no-wrap',
      class: this.classes,
      style: this.style
    };
    var evtProp = this.hasRouterLink === true ? 'nativeOn' : 'on';
    data[evtProp] = objectSpread_default()({}, this.$listeners, {
      click: this.__onClick,
      keyup: this.__onKeyup
    });

    if (this.isClickable === true) {
      data.attrs = {
        tabindex: this.tabindex || '0'
      };
    }

    if (this.hasRouterLink === true) {
      data.tag = 'a';
      data.props = this.routerLinkProps;
      return h('router-link', data, this.__getContent(h));
    }

    return h(this.tag, data, this.__getContent(h));
  }
}));

/***/ }),

/***/ "6b58":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("7037");

var assertThisInitialized = __webpack_require__("3c96");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "6caf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Boolean.vue?vue&type=template&id=5ef7df74&
var Booleanvue_type_template_id_5ef7df74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-boolean row"},[_c('div',{staticClass:"col col-label"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col col-input"},[_c('q-checkbox',{attrs:{"dark":"","color":"secondary","value":_vm.prop.primitive || false},on:{"input":_vm.onInput}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Boolean.vue?vue&type=template&id=5ef7df74&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/checkbox.js

/* harmony default export */ var mixins_checkbox = ({
  props: {
    value: {
      required: true
    },
    val: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dark: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  computed: {
    isTrue: function isTrue() {
      return this.modelIsArray ? this.index > -1 : this.value === this.trueValue;
    },
    isFalse: function isFalse() {
      return this.modelIsArray ? this.index === -1 : this.value === this.falseValue;
    },
    index: function index() {
      if (this.modelIsArray === true) {
        return this.value.indexOf(this.val);
      }
    },
    modelIsArray: function modelIsArray() {
      return Array.isArray(this.value);
    },
    computedTabindex: function computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    toggle: function toggle(e) {
      e !== void 0 && Object(utils_event["h" /* stopAndPrevent */])(e);

      if (this.disable === true) {
        return;
      }

      var val;

      if (this.modelIsArray === true) {
        if (this.isTrue === true) {
          val = this.value.slice();
          val.splice(this.index, 1);
        } else {
          val = this.value.concat(this.val);
        }
      } else if (this.isTrue === true) {
        val = this.toggleIndeterminate ? this.indeterminateValue : this.falseValue;
      } else if (this.isFalse === true) {
        val = this.trueValue;
      } else {
        val = this.falseValue;
      }

      this.$emit('input', val);
    },
    __keyDown: function __keyDown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.toggle(e);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js



/* harmony default export */ var QCheckbox = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QCheckbox',
  mixins: [mixins_checkbox],
  props: {
    toggleIndeterminate: Boolean,
    indeterminateValue: {
      default: null
    }
  },
  computed: {
    isIndeterminate: function isIndeterminate() {
      return this.value === void 0 || this.value === this.indeterminateValue;
    },
    classes: function classes() {
      return {
        'disabled': this.disable,
        'q-checkbox--dark': this.dark,
        'q-checkbox--dense': this.dense,
        'reverse': this.leftLabel
      };
    },
    innerClass: function innerClass() {
      if (this.isTrue === true) {
        return 'q-checkbox__inner--active' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.isIndeterminate === true) {
        return 'q-checkbox__inner--indeterminate' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.keepColor === true && this.color !== void 0) {
        return 'text-' + this.color;
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-checkbox cursor-pointer no-outline row inline no-wrap items-center',
      class: this.classes,
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.toggle,
        keydown: this.__keyDown
      }
    }, [h('div', {
      staticClass: 'q-checkbox__inner relative-position',
      class: this.innerClass
    }, [this.disable !== true ? h('input', {
      staticClass: 'q-checkbox__native q-ma-none q-pa-none invisible',
      attrs: {
        type: 'checkbox'
      },
      on: {
        change: this.toggle
      }
    }) : null, h('div', {
      staticClass: 'q-checkbox__bg absolute'
    }, [h('svg', {
      staticClass: 'q-checkbox__check fit absolute-full',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        fill: 'none',
        d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
      }
    })]), h('div', {
      staticClass: 'q-checkbox__check-indet absolute'
    })])]), this.label !== void 0 || this.$scopedSlots.default !== void 0 ? h('div', {
      staticClass: 'q-checkbox__label q-anchor--skip'
    }, (this.label !== void 0 ? [this.label] : []).concat(Object(slot["a" /* default */])(this, 'default'))) : null]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Boolean.vue?vue&type=script&lang=ts&










var Booleanvue_type_script_lang_ts_PaBooleanProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaBooleanProp, _PropInput);

  function PaBooleanProp() {
    classCallCheck_default()(this, PaBooleanProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaBooleanProp).apply(this, arguments));
  }

  createClass_default()(PaBooleanProp, [{
    key: "onInput",
    value: function onInput(value) {
      this.commit(value);
    }
  }]);

  return PaBooleanProp;
}(PropInput["a" /* default */]);

Booleanvue_type_script_lang_ts_PaBooleanProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaBooeleanProp',
  components: {
    QCheckbox: QCheckbox
  }
})], Booleanvue_type_script_lang_ts_PaBooleanProp);
/* harmony default export */ var Booleanvue_type_script_lang_ts_ = (Booleanvue_type_script_lang_ts_PaBooleanProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Boolean.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Booleanvue_type_script_lang_ts_ = (Booleanvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Boolean.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Booleanvue_type_script_lang_ts_,
  Booleanvue_type_template_id_5ef7df74_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var props_Boolean = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6e1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("970b");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5bc3");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6b58");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("36c6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ed6d");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9ab4");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60a3");
/* harmony import */ var _inspectable_Prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3bcf");






var _a;





var PropInput =
/*#__PURE__*/
function (_Vue) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PropInput, _Vue);

  function PropInput() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropInput);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PropInput).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropInput, [{
    key: "commit",
    value: function commit(value) {
      if (this.prop) {
        this.prop.value = value;
        this.emitChange({
          name: this.prop.name,
          value: this.prop.primitive
        });
      }
    }
  }, {
    key: "emitChange",
    value: function emitChange(data) {
      this.$emit('change', data);
    }
  }, {
    key: "prop",
    get: function get() {
      return this.value || new _inspectable_Prop__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]({
        name: '',
        value: undefined
      });
    },
    set: function set(v) {
      this.commit(v);
    }
  }]);

  return PropInput;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__[/* Vue */ "c"]);

tslib__WEBPACK_IMPORTED_MODULE_5__[/* __decorate */ "a"]([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__[/* Prop */ "b"])({
  type: Object
}), tslib__WEBPACK_IMPORTED_MODULE_5__[/* __metadata */ "b"]("design:type", typeof (_a = typeof _inspectable_Prop__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] !== "undefined" && _inspectable_Prop__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]) === "function" ? _a : Object)], PropInput.prototype, "value", void 0);

PropInput = tslib__WEBPACK_IMPORTED_MODULE_5__[/* __decorate */ "a"]([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__[/* Component */ "a"])({
  template: ''
})], PropInput);
/* harmony default export */ __webpack_exports__["a"] = (PropInput);

/***/ }),

/***/ "7037":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "72eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Dimension.vue?vue&type=template&id=53574a1b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-dimension"},[_c('p',{staticClass:"text-center"},[_vm._v("宽度: "+_vm._s(_vm.prop.value.width)+" 高度: "+_vm._s(_vm.prop.value.height))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Dimension.vue?vue&type=template&id=53574a1b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Dimension.vue?vue&type=script&lang=ts&








var Dimensionvue_type_script_lang_ts_PaDimensionProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaDimensionProp, _PropInput);

  function PaDimensionProp() {
    classCallCheck_default()(this, PaDimensionProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaDimensionProp).apply(this, arguments));
  }

  return PaDimensionProp;
}(PropInput["a" /* default */]);

Dimensionvue_type_script_lang_ts_PaDimensionProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaDimensionProp'
})], Dimensionvue_type_script_lang_ts_PaDimensionProp);
/* harmony default export */ var Dimensionvue_type_script_lang_ts_ = (Dimensionvue_type_script_lang_ts_PaDimensionProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Dimension.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Dimensionvue_type_script_lang_ts_ = (Dimensionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Dimension.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Dimensionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dimension = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7358":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Position.vue?vue&type=template&id=345d1ad0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-display prop-position"},[_c('p',[_vm._v("X: "+_vm._s(_vm.prop.value.x)+" Y: "+_vm._s(_vm.prop.value.y)+" Z: "+_vm._s(_vm.prop.value.z))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Position.vue?vue&type=template&id=345d1ad0&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Position.vue?vue&type=script&lang=ts&








var Positionvue_type_script_lang_ts_PaPositionProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaPositionProp, _PropInput);

  function PaPositionProp() {
    classCallCheck_default()(this, PaPositionProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaPositionProp).apply(this, arguments));
  }

  return PaPositionProp;
}(PropInput["a" /* default */]);

Positionvue_type_script_lang_ts_PaPositionProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaPositionProp'
})], Positionvue_type_script_lang_ts_PaPositionProp);
/* harmony default export */ var Positionvue_type_script_lang_ts_ = (Positionvue_type_script_lang_ts_PaPositionProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Position.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Positionvue_type_script_lang_ts_ = (Positionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Position.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Positionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Position = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7460":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3156");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9523");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_uid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1732");
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0016");
/* harmony import */ var _mixins_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3d69");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d882");
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("dde5");








/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
  name: 'QTab',
  mixins: [_mixins_ripple_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]],
  inject: {
    tabs: {
      default: function _default() {
        console.error('QTab/QRouteTab components need to be child of QTabsBar');
      }
    },
    __activateTab: {}
  },
  props: {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    name: {
      type: [Number, String],
      default: function _default() {
        return Object(_utils_uid_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
      }
    },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean
  },
  computed: {
    isActive: function isActive() {
      return this.tabs.current === this.name;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, "q-tab--".concat(this.isActive ? '' : 'in', "active"), true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, "text-".concat(this.tabs.activeColor), this.isActive && this.tabs.activeColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, "bg-".concat(this.tabs.activeBgColor), this.isActive && this.tabs.activeBgColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 'q-tab--full', this.icon && this.label && !this.tabs.inlineLabel), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 'q-tab--no-caps', this.noCaps === true || this.tabs.noCaps === true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 'q-focusable q-hoverable cursor-pointer', !this.disable), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref, "disabled", this.disable), _ref;
    },
    computedTabIndex: function computedTabIndex() {
      return this.disable === true || this.isActive === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    activate: function activate(e, keyboard) {
      keyboard !== true && this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus();

      if (this.disable !== true) {
        this.$listeners.click !== void 0 && this.$emit('click', e);

        this.__activateTab(this.name);
      }
    },
    __onKeyup: function __onKeyup(e) {
      e.keyCode === 13 && this.activate(e, true);
    },
    __getContent: function __getContent(h) {
      var narrow = this.tabs.narrowIndicator,
          content = [],
          indicator = h('div', {
        staticClass: 'q-tab__indicator',
        class: this.tabs.indicatorClass
      });
      this.icon !== void 0 && content.push(h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        staticClass: 'q-tab__icon',
        props: {
          name: this.icon
        }
      }));
      this.label !== void 0 && content.push(h('div', {
        staticClass: 'q-tab__label'
      }, [this.label]));
      this.alert !== false && content.push(h('div', {
        staticClass: 'q-tab__alert',
        class: this.alert !== true ? "text-".concat(this.alert) : null
      }));
      narrow && content.push(indicator);
      var node = [h('div', {
        staticClass: 'q-focus-helper',
        attrs: {
          tabindex: -1
        },
        ref: 'blurTarget'
      }), h('div', {
        staticClass: 'q-tab__content flex-center relative-position no-pointer-events non-selectable',
        class: this.tabs.inlineLabel === true ? 'row no-wrap q-tab__content--inline' : 'column'
      }, content.concat(Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, 'default')))];
      !narrow && node.push(indicator);
      return node;
    },
    __render: function __render(h, tag, props) {
      var data = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
        staticClass: 'q-tab relative-position self-stretch flex flex-center text-center',
        class: this.classes,
        attrs: {
          tabindex: this.computedTabIndex,
          role: 'tab',
          'aria-selected': this.isActive
        },
        directives: this.ripple !== false && this.disable === true ? null : [{
          name: 'ripple',
          value: this.ripple
        }]
      }, tag === 'div' ? 'on' : 'nativeOn', _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
        input: _utils_event_js__WEBPACK_IMPORTED_MODULE_6__[/* stop */ "g"]
      }, this.$listeners, {
        click: this.activate,
        keyup: this.__onKeyup
      }));

      if (props !== void 0) {
        data.props = props;
      }

      return h(tag, data, this.__getContent(h));
    }
  },
  render: function render(h) {
    return this.__render(h, 'div');
  }
}));

/***/ }),

/***/ "75c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0967");
/* harmony import */ var _utils_touch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3627");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d882");
/* harmony import */ var _utils_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2248");





function getChanges(evt, ctx, isFinal) {
  var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* position */ "e"])(evt),
      dir,
      distX = pos.left - ctx.event.x,
      distY = pos.top - ctx.event.y,
      absX = Math.abs(distX),
      absY = Math.abs(distY);
  var direction = ctx.direction;

  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? 'left' : 'right';
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? 'up' : 'down';
  } else if (direction.up === true && distY < 0) {
    dir = 'up';

    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = 'left';
      } else if (direction.right === true && distX > 0) {
        dir = 'right';
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = 'down';

    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = 'left';
      } else if (direction.right === true && distX > 0) {
        dir = 'right';
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = 'left';

    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = 'up';
      } else if (direction.down === true && distY > 0) {
        dir = 'down';
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = 'right';

    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = 'up';
      } else if (direction.down === true && distY > 0) {
        dir = 'down';
      }
    }
  }

  if (dir === void 0 && isFinal !== true) {
    return;
  }

  return {
    evt: evt,
    touch: ctx.event.mouse !== true,
    mouse: ctx.event.mouse,
    position: pos,
    direction: dir,
    isFirst: ctx.event.isFirst,
    isFinal: isFinal === true,
    duration: new Date().getTime() - ctx.event.time,
    distance: {
      x: absX,
      y: absY
    },
    offset: {
      x: distX,
      y: distY
    },
    delta: {
      x: pos.left - ctx.event.lastX,
      y: pos.top - ctx.event.lastY
    }
  };
}

var mouseEvtOpts = _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* listenOpts */ "d"].notPassiveCapture;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'touch-pan',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;

    if (el.__qtouchpan) {
      el.__qtouchpan_old = el.__qtouchpan;
    } // early return, we don't need to do anything


    if (modifiers.mouse !== true && _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].has.touch !== true) {
      return;
    }

    var touchPassiveStr = modifiers.mightPrevent !== true && modifiers.prevent !== true ? 'passive' : 'notPassive',
        touchEvtOpts = _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* listenOpts */ "d"][touchPassiveStr + (modifiers.capture === true ? 'Capture' : '')];

    function handleEvent(evt, mouseEvent) {
      if (modifiers.mouse === true && mouseEvent === true) {
        Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* stopAndPrevent */ "h"])(evt);
      } else {
        modifiers.stop && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* stop */ "g"])(evt);
        modifiers.prevent && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* prevent */ "f"])(evt);
      }
    }

    var ctx = {
      handler: value,
      modifiers: modifiers,
      direction: Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* getModifierDirections */ "a"])(modifiers),
      mouseStart: function mouseStart(evt) {
        if (Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* leftClick */ "c"])(evt)) {
          // stop propagation so possible upper v-touch-pan don't catch this as well
          modifiers.mouseAllDir === true && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* stop */ "g"])(evt);
          document.addEventListener('mousemove', ctx.move, mouseEvtOpts);
          document.addEventListener('mouseup', ctx.mouseEnd, mouseEvtOpts);
          ctx.start(evt, true);
        }
      },
      mouseEnd: function mouseEnd(evt) {
        document.removeEventListener('mousemove', ctx.move, mouseEvtOpts);
        document.removeEventListener('mouseup', ctx.mouseEnd, mouseEvtOpts);
        ctx.end(evt);
      },
      start: function start(evt, mouseEvent) {
        Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* removeObserver */ "b"])(ctx);
        mouseEvent !== true && Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* setObserver */ "c"])(el, evt, ctx);
        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* position */ "e"])(evt);
        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          mouse: mouseEvent === true,
          detected: false,
          abort: false,
          isFirst: true,
          isFinal: false,
          lastX: pos.left,
          lastY: pos.top
        };
      },
      move: function move(evt) {
        if (ctx.event === void 0 || ctx.event.abort === true) {
          return;
        }

        if (ctx.event.detected === true) {
          ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
          var changes = getChanges(evt, ctx, false);

          if (changes !== void 0) {
            if (ctx.handler(changes) === false) {
              ctx.mouseEnd(evt);
            } else {
              if (ctx.event.isFirst === true) {
                handleEvent(evt, ctx.event.mouse);
                document.documentElement.style.cursor = 'grabbing';
                document.body.classList.add('no-pointer-events');
                document.body.classList.add('non-selectable');
                Object(_utils_selection_js__WEBPACK_IMPORTED_MODULE_3__[/* clearSelection */ "a"])();
              }

              ctx.event.lastX = changes.position.left;
              ctx.event.lastY = changes.position.top;
              ctx.event.isFirst = false;
            }
          }

          return;
        }

        if (ctx.direction.all === true || ctx.event.mouse === true && modifiers.mouseAllDir === true) {
          ctx.event.detected = true;
          ctx.move(evt);
          return;
        }

        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* position */ "e"])(evt),
            distX = pos.left - ctx.event.x,
            distY = pos.top - ctx.event.y,
            absX = Math.abs(distX),
            absY = Math.abs(distY);

        if (absX === absY) {
          return;
        }

        if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
          ctx.event.detected = true;
          ctx.move(evt);
        } else {
          ctx.event.abort = true;
        }
      },
      end: function end(evt) {
        if (ctx.event === void 0) {
          return;
        }

        ctx.event.mouse !== true && Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* removeObserver */ "b"])(ctx);
        document.documentElement.style.cursor = '';
        document.body.classList.remove('no-pointer-events');
        document.body.classList.remove('non-selectable');

        if (ctx.event.abort !== true && ctx.event.detected === true && ctx.event.isFirst !== true) {
          handleEvent(evt, ctx.event.mouse);
          ctx.handler(getChanges(evt, ctx, true));
        }

        ctx.event = void 0;
      }
    };
    el.__qtouchpan = ctx;

    if (modifiers.mouse === true) {
      el.addEventListener('mousedown', ctx.mouseStart, _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* listenOpts */ "d"]["notPassive".concat(modifiers.mouseCapture === true ? 'Capture' : '')]);
    }

    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].has.touch === true) {
      el.addEventListener('touchstart', ctx.start, touchEvtOpts);
      el.addEventListener('touchmove', ctx.move, touchEvtOpts);
      el.addEventListener('touchcancel', ctx.end, modifiers.capture);
      el.addEventListener('touchend', ctx.end, modifiers.capture);
    }
  },
  update: function update(el, binding) {
    var ctx = el.__qtouchpan;

    if (ctx !== void 0) {
      Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* updateModifiers */ "d"])(ctx, binding);
    }
  },
  unbind: function unbind(el, _ref2) {
    var modifiers = _ref2.modifiers;
    var ctx = el.__qtouchpan_old || el.__qtouchpan;

    if (ctx !== void 0) {
      Object(_utils_touch_js__WEBPACK_IMPORTED_MODULE_1__[/* removeObserver */ "b"])(ctx);
      document.documentElement.style.cursor = '';
      document.body.classList.remove('no-pointer-events');
      document.body.classList.remove('non-selectable');
      var touchPassiveStr = modifiers.mightPrevent !== true && modifiers.prevent !== true ? 'passive' : 'notPassive',
          touchEvtOpts = _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* listenOpts */ "d"][touchPassiveStr + (modifiers.capture === true ? 'Capture' : '')];

      if (modifiers.mouse === true) {
        el.removeEventListener('mousedown', ctx.mouseStart, _utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* listenOpts */ "d"]["notPassive".concat(modifiers.mouseCapture === true ? 'Capture' : '')]);
        document.removeEventListener('mousemove', ctx.move, mouseEvtOpts);
        document.removeEventListener('mouseup', ctx.mouseEnd, mouseEvtOpts);
      }

      if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].has.touch === true) {
        el.removeEventListener('touchstart', ctx.start, touchEvtOpts);
        el.removeEventListener('touchmove', ctx.move, touchEvtOpts);
        el.removeEventListener('touchcancel', ctx.end, modifiers.capture);
        el.removeEventListener('touchend', ctx.end, modifiers.capture);
      }

      delete el[el.__qtouchpan_old ? '__qtouchpan_old' : '__qtouchpan'];
    }
  }
});

/***/ }),

/***/ "7937":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export humanStorageSize */
/* unused harmony export capitalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeToInterval; });
/* unused harmony export pad */
var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
function humanStorageSize(bytes) {
  var u = 0;

  while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }

  return "".concat(bytes.toFixed(1), " ").concat(units[u]);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }

  var size = max - min + 1;
  var index = min + (v - min) % size;

  if (index < min) {
    index = size + index;
  }

  return index === 0 ? 0 : index; // fix for (-a % a) => -0
}
function pad(v) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

  if (v === void 0 || v === null) {
    return v;
  }

  var val = '' + v;
  return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  humanStorageSize: humanStorageSize,
  capitalize: capitalize,
  between: between,
  normalizeToInterval: normalizeToInterval,
  pad: pad
});

/***/ }),

/***/ "7ee0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("582c");

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: Boolean
  },
  data: function data() {
    return {
      showing: false
    };
  },
  watch: {
    value: function value(val) {
      if (this.disable === true && val === true) {
        this.$emit('input', false);
        return;
      }

      if (val !== this.showing) {
        this[val ? 'show' : 'hide']();
      }
    }
  },
  methods: {
    toggle: function toggle(evt) {
      this[this.showing === true ? 'hide' : 'show'](evt);
    },
    show: function show(evt) {
      var _this = this;

      if (this.disable === true || this.showing === true) {
        return;
      }

      if (this.__showCondition !== void 0 && this.__showCondition(evt) !== true) {
        return;
      }

      this.$emit('before-show', evt);

      if (this.$q.platform.is.ie === true) {
        // IE sometimes performs a focus on body after click;
        // the delay prevents the click-outside to trigger on this focus
        setTimeout(function () {
          _this.showing = true;
        }, 0);
      } else {
        this.showing = true;
      }

      this.$emit('input', true);

      if (this.$options.modelToggle !== void 0 && this.$options.modelToggle.history === true) {
        this.__historyEntry = {
          handler: this.hide
        };
        _history_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].add(this.__historyEntry);
      }

      if (this.__show !== void 0) {
        this.__show(evt);
      } else {
        this.$emit('show', evt);
      }
    },
    hide: function hide(evt) {
      if (this.disable === true || this.showing === false) {
        return;
      }

      this.$emit('before-hide', evt);
      this.showing = false;
      this.value !== false && this.$emit('input', false);

      this.__removeHistory();

      if (this.__hide !== void 0) {
        this.__hide(evt);
      } else {
        this.$emit('hide', evt);
      }
    },
    __removeHistory: function __removeHistory() {
      if (this.__historyEntry !== void 0) {
        _history_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].remove(this.__historyEntry);
        this.__historyEntry = void 0;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.showing === true && this.__removeHistory();
  }
});

/***/ }),

/***/ "823b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ae22");
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dde5");



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'QTabPanel',
  mixins: [_mixins_panel_js__WEBPACK_IMPORTED_MODULE_1__[/* PanelChildMixin */ "a"]],
  render: function render(h) {
    return h('div', {
      staticClass: 'q-tab-panel',
      on: this.$listeners
    }, Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, 'default'));
  }
}));

/***/ }),

/***/ "8572":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js + 1 modules
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/patterns.js
var patterns = __webpack_require__("8621");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/validate.js

/* harmony default export */ var mixins_validate = ({
  props: {
    value: {},
    error: {
      type: Boolean,
      default: null
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    lazyRules: Boolean
  },
  data: function data() {
    return {
      isDirty: false,
      innerError: false,
      innerErrorMessage: void 0
    };
  },
  watch: {
    value: function value(v) {
      if (this.rules === void 0) {
        return;
      }

      if (this.lazyRules === true && this.isDirty === false) {
        return;
      }

      this.validate(v);
    },
    focused: function focused(_focused) {
      _focused === false && this.__triggerValidation();
    }
  },
  computed: {
    hasError: function hasError() {
      return this.error === true || this.innerError === true;
    },
    computedErrorMessage: function computedErrorMessage() {
      return typeof this.errorMessage === 'string' && this.errorMessage.length > 0 ? this.errorMessage : this.innerErrorMessage;
    }
  },
  mounted: function mounted() {
    this.validateIndex = 0;
    this.focused === void 0 && this.$el.addEventListener('focusout', this.__triggerValidation);
  },
  beforeDestroy: function beforeDestroy() {
    this.focused === void 0 && this.$el.removeEventListener('focusout', this.__triggerValidation);
  },
  methods: {
    resetValidation: function resetValidation() {
      this.validateIndex++;
      this.innerLoading = false;
      this.isDirty = false;
      this.innerError = false;
      this.innerErrorMessage = void 0;
    },

    /*
     * Return value
     *   - true (validation succeeded)
     *   - false (validation failed)
     *   - Promise (pending async validation)
     */
    validate: function validate() {
      var _this = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      if (!this.rules || this.rules.length === 0) {
        return true;
      }

      this.validateIndex++;

      if (this.innerLoading !== true && this.lazyRules !== true) {
        this.isDirty = true;
      }

      var update = function update(err, msg) {
        if (_this.innerError !== err) {
          _this.innerError = err;
        }

        var m = msg || void 0;

        if (_this.innerErrorMessage !== m) {
          _this.innerErrorMessage = m;
        }

        if (_this.innerLoading !== false) {
          _this.innerLoading = false;
        }
      };

      var promises = [];

      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var res = void 0;

        if (typeof rule === 'function') {
          res = rule(val);
        } else if (typeof rule === 'string' && patterns["a" /* testPattern */][rule] !== void 0) {
          res = patterns["a" /* testPattern */][rule](val);
        }

        if (res === false || typeof res === 'string') {
          update(true, res);
          return false;
        } else if (res !== true && res !== void 0) {
          promises.push(res);
        }
      }

      if (promises.length === 0) {
        update(false);
        return true;
      }

      if (this.innerLoading !== true) {
        this.innerLoading = true;
      }

      var index = this.validateIndex;
      return Promise.all(promises).then(function (res) {
        if (index === _this.validateIndex) {
          if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
            update(false);
            return true;
          } else {
            var msg = res.find(function (r) {
              return r === false || typeof r === 'string';
            });
            update(msg !== void 0, msg);
            return msg === void 0;
          }
        }

        return true;
      }, function (e) {
        if (index === _this.validateIndex) {
          console.error(e);
          update(true);
          return false;
        }
      });
    },
    __triggerValidation: function __triggerValidation() {
      if (this.isDirty === false && this.rules !== void 0) {
        this.isDirty = true;
        this.validate(this.value);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/field/QField.js








/* harmony default export */ var QField = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QField',
  inheritAttrs: false,
  mixins: [mixins_validate],
  props: {
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    color: String,
    bgColor: String,
    dark: Boolean,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    maxlength: [Number, String],
    maxValues: [Number, String] // do not add to JSON, internally needed by QSelect

  },
  data: function data() {
    return {
      focused: false,
      // used internally by validation for QInput
      // or menu handling for QSelect
      innerLoading: false
    };
  },
  computed: {
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    },
    hasValue: function hasValue() {
      var value = this.__getControl === void 0 ? this.value : this.innerValue;
      return value !== void 0 && value !== null && ('' + value).length > 0;
    },
    computedCounter: function computedCounter() {
      if (this.counter !== false) {
        var len = typeof this.value === 'string' || typeof this.value === 'number' ? ('' + this.value).length : Array.isArray(this.value) === true ? this.value.length : 0;
        var max = this.maxlength !== void 0 ? this.maxlength : this.maxValues;
        return len + (max !== void 0 ? ' / ' + max : '');
      }
    },
    floatingLabel: function floatingLabel() {
      return this.hasError === true || this.stackLabel === true || this.focused === true || (this.inputValue !== void 0 && this.hideSelected === true ? this.inputValue.length > 0 : this.hasValue === true) || this.displayValue !== void 0 && this.displayValue !== null && ('' + this.displayValue).length > 0;
    },
    shouldRenderBottom: function shouldRenderBottom() {
      return this.bottomSlots === true || this.hint !== void 0 || this.rules !== void 0 || this.counter === true || this.error !== null;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, this.fieldClass, this.fieldClass !== void 0), defineProperty_default()(_ref, "q-field--".concat(this.styleType), true), defineProperty_default()(_ref, 'q-field--rounded', this.rounded), defineProperty_default()(_ref, 'q-field--square', this.square), defineProperty_default()(_ref, 'q-field--focused', this.focused === true || this.hasError === true), defineProperty_default()(_ref, 'q-field--float', this.floatingLabel), defineProperty_default()(_ref, 'q-field--labeled', this.label !== void 0), defineProperty_default()(_ref, 'q-field--dense', this.dense), defineProperty_default()(_ref, 'q-field--item-aligned q-item-type', this.itemAligned), defineProperty_default()(_ref, 'q-field--dark', this.dark), defineProperty_default()(_ref, 'q-field--auto-height', this.__getControl === void 0), defineProperty_default()(_ref, 'q-field--with-bottom', this.hideBottomSpace !== true && this.shouldRenderBottom === true), defineProperty_default()(_ref, 'q-field--error', this.hasError), defineProperty_default()(_ref, 'q-field--readonly', this.readonly), defineProperty_default()(_ref, 'q-field--disabled', this.disable), _ref;
    },
    styleType: function styleType() {
      if (this.filled === true) {
        return 'filled';
      }

      if (this.outlined === true) {
        return 'outlined';
      }

      if (this.borderless === true) {
        return 'borderless';
      }

      if (this.standout) {
        return 'standout';
      }

      return 'standard';
    },
    contentClass: function contentClass() {
      var cls = [];

      if (this.hasError === true) {
        cls.push('text-negative');
      } else if (typeof this.standout === 'string' && this.standout.length > 0 && this.focused === true) {
        return this.standout;
      } else if (this.color !== void 0) {
        cls.push('text-' + this.color);
      }

      if (this.bgColor !== void 0) {
        cls.push("bg-".concat(this.bgColor));
      }

      return cls;
    }
  },
  methods: {
    focus: function focus() {
      if (this.showPopup !== void 0 && this.$q.platform.is.desktop !== true) {
        this.showPopup();
        return;
      }

      var target = this.$refs.target;

      if (target !== void 0) {
        target.matches('[tabindex]') || (target = target.querySelector('[tabindex]'));
        target !== null && target.focus();
      }
    },
    blur: function blur() {
      var el = document.activeElement;
      this.$el.contains(el) && el.blur();
    },
    __getContent: function __getContent(h) {
      var node = [];
      this.$scopedSlots.prepend !== void 0 && node.push(h('div', {
        staticClass: 'q-field__prepend q-field__marginal row no-wrap items-center',
        key: 'prepend'
      }, this.$scopedSlots.prepend()));
      node.push(h('div', {
        staticClass: 'q-field__control-container col relative-position row no-wrap q-anchor--skip'
      }, this.__getControlContainer(h)));
      this.hasError === true && this.noErrorIcon === false && node.push(this.__getInnerAppendNode(h, 'error', [h(QIcon["a" /* default */], {
        props: {
          name: this.$q.iconSet.field.error,
          color: 'negative'
        }
      })]));

      if (this.loading === true || this.innerLoading === true) {
        node.push(this.__getInnerAppendNode(h, 'inner-loading-append', this.$scopedSlots.loading !== void 0 ? this.$scopedSlots.loading() : [h(QSpinner["a" /* default */], {
          props: {
            color: this.color
          }
        })]));
      }

      if (this.clearable === true && this.hasValue === true && this.editable === true) {
        node.push(this.__getInnerAppendNode(h, 'inner-clearable-append', [h(QIcon["a" /* default */], {
          staticClass: 'cursor-pointer',
          props: {
            name: this.clearIcon || this.$q.iconSet.field.clear
          },
          on: {
            click: this.__clearValue
          }
        })]));
      }

      this.$scopedSlots.append !== void 0 && node.push(h('div', {
        staticClass: 'q-field__append q-field__marginal row no-wrap items-center',
        key: 'append'
      }, this.$scopedSlots.append()));
      this.__getInnerAppend !== void 0 && node.push(this.__getInnerAppendNode(h, 'inner-append', this.__getInnerAppend(h)));
      this.__getPopup !== void 0 && node.push(this.__getPopup(h));
      return node;
    },
    __getControlContainer: function __getControlContainer(h) {
      var node = [];
      this.prefix !== void 0 && this.prefix !== null && node.push(h('div', {
        staticClass: 'q-field__prefix no-pointer-events row items-center'
      }, [this.prefix]));

      if (this.__getControl !== void 0) {
        node.push(this.__getControl(h));
      } // internal usage only:
      else if (this.$scopedSlots.rawControl !== void 0) {
          node.push(this.$scopedSlots.rawControl());
        } else if (this.$scopedSlots.control !== void 0) {
          node.push(h('div', {
            ref: 'target',
            staticClass: 'q-field__native row',
            attrs: objectSpread_default()({}, this.$attrs, {
              autofocus: this.autofocus
            })
          }, this.$scopedSlots.control()));
        }

      this.label !== void 0 && node.push(h('div', {
        staticClass: 'q-field__label no-pointer-events absolute ellipsis'
      }, [this.label]));
      this.suffix !== void 0 && this.suffix !== null && node.push(h('div', {
        staticClass: 'q-field__suffix no-pointer-events row items-center'
      }, [this.suffix]));
      return node.concat(this.__getDefaultSlot !== void 0 ? this.__getDefaultSlot(h) : Object(slot["a" /* default */])(this, 'default'));
    },
    __getBottom: function __getBottom(h) {
      var msg, key;

      if (this.hasError === true) {
        if (this.computedErrorMessage !== void 0) {
          msg = [h('div', [this.computedErrorMessage])];
          key = this.computedErrorMessage;
        } else {
          msg = Object(slot["a" /* default */])(this, 'error');
          key = 'q--slot-error';
        }
      } else if (this.hideHint !== true || this.focused === true) {
        if (this.hint !== void 0) {
          msg = [h('div', [this.hint])];
          key = this.hint;
        } else {
          msg = Object(slot["a" /* default */])(this, 'hint');
          key = 'q--slot-hint';
        }
      }

      var hasCounter = this.counter === true || this.$scopedSlots.counter !== void 0;

      if (this.hideBottomSpace === true && hasCounter === false && msg === void 0) {
        return;
      }

      var main = h('div', {
        key: key,
        staticClass: 'q-field__messages col'
      }, msg);
      return h('div', {
        staticClass: 'q-field__bottom row items-start q-field__bottom--' + (this.hideBottomSpace !== true ? 'animated' : 'stale')
      }, [this.hideBottomSpace === true ? main : h('transition', {
        props: {
          name: 'q-transition--field-message'
        }
      }, [main]), hasCounter === true ? h('div', {
        staticClass: 'q-field__counter'
      }, this.$scopedSlots.counter !== void 0 ? this.$scopedSlots.counter() : [this.computedCounter]) : null]);
    },
    __getInnerAppendNode: function __getInnerAppendNode(h, key, content) {
      return h('div', {
        staticClass: 'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
        key: key
      }, content);
    },
    __onControlPopupShow: function __onControlPopupShow(e) {
      this.hasPopupOpen = true;

      this.__onControlFocusin(e);
    },
    __onControlPopupHide: function __onControlPopupHide(e) {
      this.hasPopupOpen = false;

      this.__onControlFocusout(e);
    },
    __onControlFocusin: function __onControlFocusin(e) {
      if (this.editable === true && this.focused === false) {
        this.focused = true;
        this.$emit('focus', e);
      }
    },
    __onControlFocusout: function __onControlFocusout(e, then) {
      var _this = this;

      clearTimeout(this.focusoutTimer);
      this.focusoutTimer = setTimeout(function () {
        if (document.hasFocus() === true && (_this.hasPopupOpen === true || _this.$refs === void 0 || _this.$refs.control === void 0 || _this.$refs.control.contains(document.activeElement) !== false)) {
          return;
        }

        if (_this.focused === true) {
          _this.focused = false;

          _this.$emit('blur', e);
        }

        then !== void 0 && then();
      });
    },
    __clearValue: function __clearValue(e) {
      Object(utils_event["g" /* stop */])(e);
      this.$emit('input', null);
    }
  },
  render: function render(h) {
    this.__onPreRender !== void 0 && this.__onPreRender();
    this.__onPostRender !== void 0 && this.$nextTick(this.__onPostRender);
    return h('div', {
      staticClass: 'q-field row no-wrap items-start',
      class: this.classes
    }, [this.$scopedSlots.before !== void 0 ? h('div', {
      staticClass: 'q-field__before q-field__marginal row no-wrap items-center'
    }, this.$scopedSlots.before()) : null, h('div', {
      staticClass: 'q-field__inner relative-position col self-stretch column justify-center'
    }, [h('div', {
      ref: 'control',
      staticClass: 'q-field__control relative-position row no-wrap',
      class: this.contentClass,
      attrs: {
        tabindex: -1
      },
      on: this.controlEvents
    }, this.__getContent(h)), this.shouldRenderBottom === true ? this.__getBottom(h) : null]), this.$scopedSlots.after !== void 0 ? h('div', {
      staticClass: 'q-field__after q-field__marginal row no-wrap items-center'
    }, this.$scopedSlots.after()) : null]);
  },
  created: function created() {
    this.__onPreRender !== void 0 && this.__onPreRender();
    this.controlEvents = this.__getControlEvents !== void 0 ? this.__getControlEvents() : {
      focus: this.focus,
      focusin: this.__onControlFocusin,
      focusout: this.__onControlFocusout,
      'popup-show': this.__onControlPopupShow,
      'popup-hide': this.__onControlPopupHide
    };
  },
  mounted: function mounted() {
    this.autofocus === true && setTimeout(this.focus);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.focusoutTimer);
  }
}));

/***/ }),

/***/ "8621":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testPattern; });
// file referenced from docs
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
    hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
    hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
    rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = {
  date: function date(v) {
    return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v);
  },
  time: function time(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v);
  },
  fulltime: function fulltime(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v);
  },
  timeOrFulltime: function timeOrFulltime(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v);
  },
  hexColor: function hexColor(v) {
    return hex.test(v);
  },
  hexaColor: function hexaColor(v) {
    return hexa.test(v);
  },
  hexOrHexaColor: function hexOrHexaColor(v) {
    return hexOrHexa.test(v);
  },
  rgbColor: function rgbColor(v) {
    return rgb.test(v);
  },
  rgbaColor: function rgbaColor(v) {
    return rgba.test(v);
  },
  rgbOrRgbaColor: function rgbOrRgbaColor(v) {
    return rgb.test(v) || rgba.test(v);
  },
  hexOrRgbColor: function hexOrRgbColor(v) {
    return hex.test(v) || rgb.test(v);
  },
  hexaOrRgbaColor: function hexaOrRgbaColor(v) {
    return hexa.test(v) || rgba.test(v);
  },
  anyColor: function anyColor(v) {
    return hexOrHexa.test(v) || rgb.test(v) || rgba.test(v);
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  testPattern: testPattern
});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dde5");


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'QBtnGroup',
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  computed: {
    classes: function classes() {
      var _this = this;

      return ['unelevated', 'outline', 'flat', 'rounded', 'push', 'stretch', 'glossy'].filter(function (t) {
        return _this[t] === true;
      }).map(function (t) {
        return "q-btn-group--".concat(t);
      }).join(' ');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-btn-group row no-wrap ' + (this.spread === true ? 'q-btn-group--spread' : 'inline'),
      class: this.classes,
      on: this.$listeners
    }, Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, 'default'));
  }
}));

/***/ }),

/***/ "907e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Boolean.vue": "6caf",
	"./Colors.vue": "6475",
	"./Dimension.vue": "72eb",
	"./Json.vue": "4ced",
	"./Number.vue": "4817",
	"./Percent.vue": "592b",
	"./Position.vue": "7358",
	"./Range.vue": "9b20",
	"./Size.vue": "28c6",
	"./String.vue": "05bf",
	"./Styles.vue": "4f23",
	"./Theme.vue": "1752"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "907e";

/***/ }),

/***/ "9497":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9523":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "970b":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "98db":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && Object({"NODE_ENV":"production","BASE_URL":"/"}) && Object({"NODE_ENV":"production","BASE_URL":"/"})["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c"), __webpack_require__("c8ba")))

/***/ }),

/***/ "9ab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __decorate; });
/* unused harmony export __param */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __metadata; });
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "9b20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Range.vue?vue&type=template&id=bcb7cab2&
var Rangevue_type_template_id_bcb7cab2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prop-range row"},[_c('div',{staticClass:"col col-label"},[_c('div',{staticClass:"prop-label"},[_vm._v(_vm._s(_vm.prop.label))])]),_c('div',{staticClass:"col col-input"},[_c('q-range',{attrs:{"label":"","color":"secondary","value":_vm.range,"min":0,"max":100},on:{"change":_vm.onChange}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/props/Range.vue?vue&type=template&id=bcb7cab2&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./support/designtime/inspector/props/PropInput.ts
var PropInput = __webpack_require__("6e1c");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/slider-utils.js
var slider_utils = __webpack_require__("5694");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__("7937");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/range/QRange.js






var dragType = {
  MIN: 0,
  RANGE: 1,
  MAX: 2
};
/* harmony default export */ var QRange = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QRange',
  mixins: [slider_utils["a" /* SliderMixin */]],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          min: 0,
          max: 0
        };
      },
      validator: function validator(val) {
        return 'min' in val && 'max' in val;
      }
    },
    dragRange: Boolean,
    dragOnlyRange: Boolean,
    leftLabelColor: String,
    rightLabelColor: String,
    leftLabelValue: [String, Number],
    rightLabelValue: [String, Number]
  },
  data: function data() {
    return {
      model: objectSpread_default()({}, this.value),
      curMinRatio: 0,
      curMaxRatio: 0
    };
  },
  watch: {
    'value.min': function valueMin(val) {
      this.model.min = val;
    },
    'value.max': function valueMax(val) {
      this.model.max = val;
    },
    min: function min(value) {
      if (this.model.min < value) {
        this.model.min = value;
      }

      if (this.model.max < value) {
        this.model.max = value;
      }
    },
    max: function max(value) {
      if (this.model.min > value) {
        this.model.min = value;
      }

      if (this.model.max > value) {
        this.model.max = value;
      }
    }
  },
  computed: {
    ratioMin: function ratioMin() {
      return this.active === true ? this.curMinRatio : this.modelMinRatio;
    },
    ratioMax: function ratioMax() {
      return this.active === true ? this.curMaxRatio : this.modelMaxRatio;
    },
    modelMinRatio: function modelMinRatio() {
      return (this.model.min - this.min) / (this.max - this.min);
    },
    modelMaxRatio: function modelMaxRatio() {
      return (this.model.max - this.min) / (this.max - this.min);
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, this.horizProp, 100 * this.ratioMin + '%'), defineProperty_default()(_ref, "width", 100 * (this.ratioMax - this.ratioMin) + '%'), _ref;
    },
    minThumbStyle: function minThumbStyle() {
      var _ref2;

      return _ref2 = {}, defineProperty_default()(_ref2, this.horizProp, 100 * this.ratioMin + '%'), defineProperty_default()(_ref2, 'z-index', this.__nextFocus === 'min' ? 2 : void 0), _ref2;
    },
    maxThumbStyle: function maxThumbStyle() {
      return defineProperty_default()({}, this.horizProp, 100 * this.ratioMax + '%');
    },
    minThumbClass: function minThumbClass() {
      return this.preventFocus === false && this.focus === 'min' ? 'q-slider--focus' : null;
    },
    maxThumbClass: function maxThumbClass() {
      return this.preventFocus === false && this.focus === 'max' ? 'q-slider--focus' : null;
    },
    events: function events() {
      var _this = this;

      if (this.editable === true) {
        if (this.$q.platform.is.mobile === true) {
          return {
            click: this.__mobileClick
          };
        }

        var evt = {
          mousedown: this.__activate
        };
        this.dragOnlyRange === true && Object.assign(evt, {
          focus: function focus() {
            _this.__focus('both');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        });
        return evt;
      }
    },
    minEvents: function minEvents() {
      var _this2 = this;

      if (this.editable && !this.$q.platform.is.mobile && this.dragOnlyRange !== true) {
        return {
          focus: function focus() {
            _this2.__focus('min');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    maxEvents: function maxEvents() {
      var _this3 = this;

      if (this.editable && !this.$q.platform.is.mobile && this.dragOnlyRange !== true) {
        return {
          focus: function focus() {
            _this3.__focus('max');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    minPinClass: function minPinClass() {
      var color = this.leftLabelColor || this.labelColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    maxPinClass: function maxPinClass() {
      var color = this.rightLabelColor || this.labelColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    minLabel: function minLabel() {
      return this.leftLabelValue !== void 0 ? this.leftLabelValue : this.model.min;
    },
    maxLabel: function maxLabel() {
      return this.rightLabelValue !== void 0 ? this.rightLabelValue : this.model.max;
    }
  },
  methods: {
    __updateValue: function __updateValue(change) {
      if (this.model.min !== this.value.min || this.model.max !== this.value.max) {
        this.$emit('input', this.model);
        change === true && this.$emit('change', this.model);
      }
    },
    __getDragging: function __getDragging(event) {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          left = _this$$el$getBounding.left,
          width = _this$$el$getBounding.width,
          sensitivity = this.dragOnlyRange ? 0 : this.$refs.minThumb.offsetWidth / (2 * width),
          diff = this.max - this.min;

      var dragging = {
        left: left,
        width: width,
        valueMin: this.model.min,
        valueMax: this.model.max,
        ratioMin: (this.value.min - this.min) / diff,
        ratioMax: (this.value.max - this.min) / diff
      };
      var ratio = Object(slider_utils["c" /* getRatio */])(event, dragging, this.$q.lang.rtl),
          type;

      if (this.dragOnlyRange !== true && ratio < dragging.ratioMin + sensitivity) {
        type = dragType.MIN;
      } else if (this.dragOnlyRange === true || ratio < dragging.ratioMax - sensitivity) {
        if (this.dragRange || this.dragOnlyRange) {
          type = dragType.RANGE;
          Object.assign(dragging, {
            offsetRatio: ratio,
            offsetModel: Object(slider_utils["b" /* getModel */])(ratio, this.min, this.max, this.step, this.decimals),
            rangeValue: dragging.valueMax - dragging.valueMin,
            rangeRatio: dragging.ratioMax - dragging.ratioMin
          });
        } else {
          type = dragging.ratioMax - ratio < ratio - dragging.ratioMin ? dragType.MAX : dragType.MIN;
        }
      } else {
        type = dragType.MAX;
      }

      dragging.type = type;
      this.__nextFocus = void 0;
      return dragging;
    },
    __updatePosition: function __updatePosition(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;
      var ratio = Object(slider_utils["c" /* getRatio */])(event, dragging, this.$q.lang.rtl),
          model = Object(slider_utils["b" /* getModel */])(ratio, this.min, this.max, this.step, this.decimals),
          pos;

      switch (dragging.type) {
        case dragType.MIN:
          if (ratio <= dragging.ratioMax) {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMax,
              min: model,
              max: dragging.valueMax
            };
            this.__nextFocus = 'min';
          } else {
            pos = {
              minR: dragging.ratioMax,
              maxR: ratio,
              min: dragging.valueMax,
              max: model
            };
            this.__nextFocus = 'max';
          }

          break;

        case dragType.MAX:
          if (ratio >= dragging.ratioMin) {
            pos = {
              minR: dragging.ratioMin,
              maxR: ratio,
              min: dragging.valueMin,
              max: model
            };
            this.__nextFocus = 'max';
          } else {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMin,
              min: model,
              max: dragging.valueMin
            };
            this.__nextFocus = 'min';
          }

          break;

        case dragType.RANGE:
          var ratioDelta = ratio - dragging.offsetRatio,
              minR = Object(format["a" /* between */])(dragging.ratioMin + ratioDelta, 0, 1 - dragging.rangeRatio),
              modelDelta = model - dragging.offsetModel,
              min = Object(format["a" /* between */])(dragging.valueMin + modelDelta, this.min, this.max - dragging.rangeValue);
          pos = {
            minR: minR,
            maxR: minR + dragging.rangeRatio,
            min: parseFloat(min.toFixed(this.decimals)),
            max: parseFloat((min + dragging.rangeValue).toFixed(this.decimals))
          };
          break;
      }

      this.model = {
        min: pos.min,
        max: pos.max
      };

      if (this.snap !== true || this.step === 0) {
        this.curMinRatio = pos.minR;
        this.curMaxRatio = pos.maxR;
      } else {
        var diff = this.max - this.min;
        this.curMinRatio = (this.model.min - this.min) / diff;
        this.curMaxRatio = (this.model.max - this.min) / diff;
      }
    },
    __focus: function __focus(which) {
      this.focus = which;
    },
    __keydown: function __keydown(evt) {
      // PGDOWN, LEFT, DOWN, PGUP, RIGHT, UP
      if (![34, 37, 40, 33, 39, 38].includes(evt.keyCode)) {
        return;
      }

      Object(utils_event["h" /* stopAndPrevent */])(evt);
      var step = ([34, 33].includes(evt.keyCode) ? 10 : 1) * this.computedStep,
          offset = [34, 37, 40].includes(evt.keyCode) ? -step : step;

      if (this.dragOnlyRange) {
        var interval = this.dragOnlyRange ? this.model.max - this.model.min : 0;
        this.model.min = Object(format["a" /* between */])(parseFloat((this.model.min + offset).toFixed(this.decimals)), this.min, this.max - interval);
        this.model.max = parseFloat((this.model.min + interval).toFixed(this.decimals));
      } else {
        var which = this.focus;
        this.model[which] = Object(format["a" /* between */])(parseFloat((this.model[which] + offset).toFixed(this.decimals)), which === 'min' ? this.min : this.model.min, which === 'max' ? this.max : this.model.max);
      }

      this.__updateValue();
    },
    __getThumb: function __getThumb(h, which) {
      return h('div', {
        ref: which + 'Thumb',
        staticClass: 'q-slider__thumb-container absolute non-selectable',
        style: this[which + 'ThumbStyle'],
        class: this[which + 'ThumbClass'],
        on: this[which + 'Events'],
        attrs: {
          tabindex: this.dragOnlyRange !== true ? this.computedTabindex : null
        }
      }, [h('svg', {
        staticClass: 'q-slider__thumb absolute',
        attrs: {
          width: '21',
          height: '21'
        }
      }, [h('circle', {
        attrs: {
          cx: '10.5',
          cy: '10.5',
          r: '7.875'
        }
      })]), this.label === true || this.labelAlways === true ? h('div', {
        staticClass: 'q-slider__pin absolute flex flex-center',
        class: this[which + 'PinClass']
      }, [h('div', {
        staticClass: 'q-slider__pin-value-marker'
      }, [h('div', {
        staticClass: 'q-slider__pin-value-marker-bg'
      }), h('div', {
        staticClass: 'q-slider__pin-value-marker-text'
      }, [this[which + 'Label']])])]) : null, h('div', {
        staticClass: 'q-slider__focus-ring'
      })]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-slider',
      attrs: {
        role: 'slider',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'data-step': this.step,
        'aria-disabled': this.disable,
        tabindex: this.dragOnlyRange && !this.$q.platform.is.mobile ? this.computedTabindex : null
      },
      class: this.classes,
      on: this.events,
      directives: this.editable ? [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }] : null
    }, [h('div', {
      staticClass: 'q-slider__track-container absolute overflow-hidden'
    }, [h('div', {
      staticClass: 'q-slider__track absolute-full',
      style: this.trackStyle
    }), this.markers === true ? h('div', {
      staticClass: 'q-slider__track-markers absolute-full fit',
      style: this.markerStyle
    }) : null]), this.__getThumb(h, 'min'), this.__getThumb(h, 'max')]);
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/badge/QBadge.js


/* harmony default export */ var QBadge = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QBadge',
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: function validator(v) {
        return ['top', 'middle', 'bottom'].includes(v);
      }
    }
  },
  computed: {
    style: function style() {
      if (this.align !== void 0) {
        return {
          verticalAlign: this.align
        };
      }
    },
    classes: function classes() {
      return 'q-badge flex inline items-center no-wrap' + " q-badge--".concat(this.multiLine === true ? 'multi' : 'single', "-line") + (this.color !== void 0 ? " bg-".concat(this.color) : '') + (this.textColor !== void 0 ? " text-".concat(this.textColor) : '') + (this.floating === true ? ' q-badge--floating' : '') + (this.transparent === true ? ' q-badge--transparent' : '');
    }
  },
  render: function render(h) {
    return h('div', {
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, this.label !== void 0 ? [this.label] : Object(slot["a" /* default */])(this, 'default'));
  }
}));
// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/props/Range.vue?vue&type=script&lang=ts&











var Rangevue_type_script_lang_ts_PaRangeProp =
/*#__PURE__*/
function (_PropInput) {
  inherits_default()(PaRangeProp, _PropInput);

  function PaRangeProp() {
    classCallCheck_default()(this, PaRangeProp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaRangeProp).apply(this, arguments));
  }

  createClass_default()(PaRangeProp, [{
    key: "onChange",
    value: function onChange(val) {
      this.emitChange(Object.assign({}, this.prop, {
        value: [val.min, val.max]
      }));
    }
  }, {
    key: "range",
    get: function get() {
      return this.prop.value && this.prop.value.value ? {
        min: this.prop.value.value[0],
        max: this.prop.value.value[1]
      } : {
        min: this.prop.default[0],
        max: this.prop.default[1]
      };
    },
    set: function set(value) {}
  }]);

  return PaRangeProp;
}(PropInput["a" /* default */]);

Rangevue_type_script_lang_ts_PaRangeProp = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  name: 'PaRangeProp',
  components: {
    QRange: QRange,
    QBadge: QBadge
  }
})], Rangevue_type_script_lang_ts_PaRangeProp);
/* harmony default export */ var Rangevue_type_script_lang_ts_ = (Rangevue_type_script_lang_ts_PaRangeProp);
// CONCATENATED MODULE: ./support/designtime/inspector/props/Range.vue?vue&type=script&lang=ts&
 /* harmony default export */ var props_Rangevue_type_script_lang_ts_ = (Rangevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/props/Range.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  props_Rangevue_type_script_lang_ts_,
  Rangevue_type_template_id_bcb7cab2_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Range = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9c40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3156");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0016");
/* harmony import */ var _spinner_QSpinner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0d59");
/* harmony import */ var _btn_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("628b");
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dde5");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d882");







/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'QBtn',
  mixins: [_btn_mixin_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]],
  props: {
    percentage: {
      type: Number,
      validator: function validator(v) {
        return v >= 0 && v <= 100;
      }
    },
    darkPercentage: Boolean
  },
  computed: {
    hasLabel: function hasLabel() {
      return this.label !== void 0 && this.label !== null && this.label !== '';
    }
  },
  methods: {
    click: function click(e) {
      var _this = this;

      if (this.pressed === true) {
        return;
      }

      if (e !== void 0) {
        // focus button if it came from ENTER on form
        // prevent the new submit (already done)
        if (this.type === 'submit') {
          if (document.activeElement !== document.body && this.$el.contains(document.activeElement) === false || this.$q.platform.is.ie === true && e.clientX < 0) {
            Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_6__[/* stopAndPrevent */ "h"])(e);
            this.$el.focus();
            return;
          }
        }

        if (e.qKeyEvent !== true && this.$refs.blurTarget !== void 0) {
          this.$refs.blurTarget.focus();
        }

        if (e.defaultPrevented === true) {
          return;
        }

        this.hasRouterLink === true && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_6__[/* stopAndPrevent */ "h"])(e);
      }

      var go = function go() {
        _this.$router[_this.replace === true ? 'replace' : 'push'](_this.to);
      };

      this.$emit('click', e, go);
      this.hasRouterLink === true && e.navigate !== false && go();
    },
    __onKeydown: function __onKeydown(e) {
      if ([13, 32].includes(e.keyCode) === true) {
        // focus external button if the focus helper was focused before
        this.$el.focus();
        Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_6__[/* stopAndPrevent */ "h"])(e);

        if (this.pressed !== true) {
          this.pressed = true;
          this.$el.classList.add('q-btn--active');
          document.addEventListener('keyup', this.__onKeyupAbort);
        }
      }

      this.$emit('keydown', e);
    },
    __onKeyup: function __onKeyup(e) {
      if ([13, 32].includes(e.keyCode) === true) {
        this.__onKeyupAbort(); // for click trigger


        var evt = new MouseEvent('click', e);
        evt.qKeyEvent = true;
        e.defaultPrevented === true && evt.preventDefault();
        this.$el.dispatchEvent(evt);
        Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_6__[/* stopAndPrevent */ "h"])(e); // for ripple

        e.qKeyEvent = true;
      }

      this.$emit('keyup', e);
    },
    __onKeyupAbort: function __onKeyupAbort() {
      this.pressed = false;
      document.removeEventListener('keyup', this.__onKeyupAbort);
      this.$el && this.$el.classList.remove('q-btn--active');
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keyup', this.__onKeyupAbort);
  },
  render: function render(h) {
    var inner = [].concat(Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, 'default')),
        data = {
      staticClass: 'q-btn inline q-btn-item non-selectable',
      class: this.classes,
      style: this.style,
      attrs: this.attrs
    };

    if (this.isDisabled === false) {
      data.on = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.$listeners, {
        click: this.click,
        keydown: this.__onKeydown,
        keyup: this.__onKeyup
      });

      if (this.ripple !== false) {
        data.directives = [{
          name: 'ripple',
          value: this.ripple,
          modifiers: {
            center: this.isRound
          }
        }];
      }
    }

    if (this.hasLabel === true) {
      inner.unshift(h('div', [this.label]));
    }

    if (this.icon !== void 0) {
      inner.unshift(h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          name: this.icon,
          left: this.stack === false && this.hasLabel === true
        }
      }));
    }

    if (this.iconRight !== void 0 && this.isRound === false) {
      inner.push(h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          name: this.iconRight,
          right: this.stack === false && this.hasLabel === true
        }
      }));
    }

    return h(this.isLink ? 'a' : 'button', data, [h('div', {
      staticClass: 'q-focus-helper',
      ref: 'blurTarget',
      attrs: {
        tabindex: -1
      }
    }), this.loading === true && this.percentage !== void 0 ? h('div', {
      staticClass: 'q-btn__progress absolute-full',
      class: this.darkPercentage ? 'q-btn__progress--dark' : null,
      style: {
        transform: "scale3d(".concat(this.percentage / 100, ",1,1)")
      }
    }) : null, h('div', {
      staticClass: 'q-btn__content text-center col items-center q-anchor--skip',
      class: this.innerClasses
    }, inner), this.loading !== null ? h('transition', {
      props: {
        name: 'q-transition--fade'
      }
    }, this.loading === true ? [h('div', {
      key: 'loading',
      staticClass: 'absolute-full flex flex-center'
    }, this.$scopedSlots.loading !== void 0 ? this.$scopedSlots.loading() : [h(_spinner_QSpinner_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])])] : void 0) : null]);
  }
}));

/***/ }),

/***/ "9e62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/vm.js


var inject;

function fillInject(root) {
  var options = new external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a().$root.$options,
      skip = ['el', 'methods', 'render', 'mixins'].concat(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.config._lifecycleHooks).concat(Object.keys(options).filter(function (key) {
    return options[key] !== null;
  }));
  inject = {};
  Object.keys(root).filter(function (name) {
    return skip.includes(name) === false;
  }).forEach(function (p) {
    inject[p] = root[p];
  });
}

function getVm(root, vm) {
  inject === void 0 && root !== void 0 && fillInject(root.$root.$options);
  return new external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a(inject !== void 0 ? objectSpread_default()({}, inject, vm) : vm);
}
function getAllChildren(vm) {
  var children = vm.$children;
  vm.$children.forEach(function (child) {
    if (child.$children.length > 0) {
      children = children.concat(getAllChildren(child));
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/portal.js

/* harmony default export */ var portal = __webpack_exports__["a"] = ({
  inheritAttrs: false,
  props: {
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object]
  },
  methods: {
    __showPortal: function __showPortal() {
      if (this.__portal !== void 0 && this.__portal.showing !== true) {
        document.body.appendChild(this.__portal.$el);
        this.__portal.showing = true;
      }
    },
    __hidePortal: function __hidePortal() {
      if (this.__portal !== void 0 && this.__portal.showing === true) {
        this.__portal.$el.remove();

        this.__portal.showing = false;
      }
    }
  },
  render: function render() {
    this.__portal !== void 0 && this.__portal.$forceUpdate();
  },
  beforeMount: function beforeMount() {
    var _this = this;

    var obj = {
      inheritAttrs: false,
      render: function render(h) {
        return _this.__render(h);
      },
      components: this.$options.components,
      directives: this.$options.directives
    };

    if (this.__onPortalClose !== void 0) {
      obj.methods = {
        __qClosePopup: this.__onPortalClose
      };
    }

    var onCreated = this.__onPortalCreated;

    if (onCreated !== void 0) {
      obj.created = function () {
        onCreated(this);
      };
    }

    this.__portal = getVm(this, obj).$mount();
  },
  beforeDestroy: function beforeDestroy() {
    this.__portal.$destroy();

    this.__portal.$el.remove();

    this.__portal = void 0;
  }
});

/***/ }),

/***/ "a267":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0967");

var handlers = [];
/* harmony default export */ __webpack_exports__["a"] = ({
  __install: function __install() {
    this.__installed = true;
    window.addEventListener('keyup', function (evt) {
      if (handlers.length !== 0 && (evt.which === 27 || evt.keyCode === 27)) {
        handlers[handlers.length - 1].fn(evt);
      }
    });
  },
  register: function register(comp, fn) {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].is.desktop === true) {
      this.__installed !== true && this.__install();
      handlers.push({
        comp: comp,
        fn: fn
      });
    }
  },
  pop: function pop(comp) {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].is.desktop === true) {
      var index = handlers.findIndex(function (h) {
        return h.comp === comp;
      });

      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
});

/***/ }),

/***/ "adad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ae22");


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'QTabPanels',
  mixins: [_mixins_panel_js__WEBPACK_IMPORTED_MODULE_1__[/* PanelParentMixin */ "b"]],
  methods: {
    __render: function __render(h) {
      return h('div', {
        staticClass: 'q-tab-panels q-panel-parent',
        directives: this.panelDirectives,
        on: this.$listeners
      }, this.__getPanelContent(h));
    }
  }
}));

/***/ }),

/***/ "ae22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/touch.js
var touch = __webpack_require__("3627");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/selection.js
var selection = __webpack_require__("2248");

// CONCATENATED MODULE: ./node_modules/quasar/src/directives/TouchSwipe.js





function parseArg(arg) {
  // delta (min velocity -- dist / time)
  // mobile min distance on first move
  // desktop min distance until deciding if it's a swipe or not
  var data = [0.06, 6, 50];

  if (typeof arg === 'string' && arg.length) {
    arg.split(':').forEach(function (val, index) {
      var v = parseInt(val, 10);
      v && (data[index] = v);
    });
  }

  return data;
}

/* harmony default export */ var TouchSwipe = ({
  name: 'touch-swipe',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        arg = _ref.arg,
        modifiers = _ref.modifiers;

    if (el.__qtouchswipe) {
      el.__qtouchswipe_old = el.__qtouchswipe;
    } // early return, we don't need to do anything


    if (modifiers.mouse !== true && Platform["a" /* default */].has.touch !== true) {
      return;
    }

    var ctx = {
      handler: value,
      sensitivity: parseArg(arg),
      modifiers: modifiers,
      direction: Object(touch["a" /* getModifierDirections */])(modifiers),
      mouseStart: function mouseStart(evt) {
        if (Object(utils_event["c" /* leftClick */])(evt)) {
          document.addEventListener('mousemove', ctx.move, true);
          document.addEventListener('mouseup', ctx.mouseEnd, true);
          ctx.start(evt, true);
        }
      },
      mouseEnd: function mouseEnd(evt) {
        document.removeEventListener('mousemove', ctx.move, true);
        document.removeEventListener('mouseup', ctx.mouseEnd, true);
        ctx.end(evt);
      },
      start: function start(evt, mouseEvent) {
        Object(touch["b" /* removeObserver */])(ctx);
        mouseEvent !== true && Object(touch["c" /* setObserver */])(el, evt, ctx);
        var pos = Object(utils_event["e" /* position */])(evt);
        ctx.mouse = mouseEvent;
        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          dir: false,
          abort: false
        };
      },
      move: function move(evt) {
        if (ctx.event === void 0 || ctx.event.abort === true) {
          return;
        }

        if (ctx.event.dir !== false) {
          Object(utils_event["h" /* stopAndPrevent */])(evt);
          return;
        }

        var time = new Date().getTime() - ctx.event.time;

        if (time === 0) {
          return;
        }

        var pos = Object(utils_event["e" /* position */])(evt),
            distX = pos.left - ctx.event.x,
            absX = Math.abs(distX),
            distY = pos.top - ctx.event.y,
            absY = Math.abs(distY);

        if (Platform["a" /* default */].is.mobile === true) {
          if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
            ctx.event.abort = true;
            return;
          }
        } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
          return;
        }

        var velX = absX / time,
            velY = absY / time;

        if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = distY < 0 ? 'up' : 'down';
        }

        if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = distX < 0 ? 'left' : 'right';
        }

        if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = 'up';
        }

        if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = 'down';
        }

        if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = 'left';
        }

        if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = 'right';
        }

        if (ctx.event.dir !== false) {
          document.body.classList.add('no-pointer-events');
          Object(utils_event["h" /* stopAndPrevent */])(evt);
          Object(selection["a" /* clearSelection */])();
          ctx.handler({
            evt: evt,
            touch: ctx.mouse !== true,
            mouse: ctx.mouse === true,
            direction: ctx.event.dir,
            duration: time,
            distance: {
              x: absX,
              y: absY
            }
          });
        } else {
          ctx.event.abort = true;
        }
      },
      end: function end(evt) {
        if (ctx.event === void 0) {
          return;
        }

        Object(touch["b" /* removeObserver */])(ctx);

        if (ctx.event.abort === false && ctx.event.dir !== false) {
          document.body.classList.remove('no-pointer-events');
          Object(utils_event["h" /* stopAndPrevent */])(evt);
        }

        ctx.event = void 0;
      }
    };
    el.__qtouchswipe = ctx;

    if (modifiers.mouse === true) {
      el.addEventListener('mousedown', ctx.mouseStart, modifiers.mouseCapture);
    }

    if (Platform["a" /* default */].has.touch === true) {
      var opts = utils_event["d" /* listenOpts */]['notPassive' + (modifiers.capture === true ? 'Capture' : '')];
      el.addEventListener('touchstart', ctx.start, opts);
      el.addEventListener('touchmove', ctx.move, opts);
      el.addEventListener('touchcancel', ctx.end, opts);
      el.addEventListener('touchend', ctx.end, opts);
    }
  },
  update: function update(el, binding) {
    var ctx = el.__qtouchswipe;

    if (ctx !== void 0) {
      Object(touch["d" /* updateModifiers */])(ctx, binding);
    }
  },
  unbind: function unbind(el, _ref2) {
    var modifiers = _ref2.modifiers;
    var ctx = el.__qtouchswipe_old || el.__qtouchswipe;

    if (ctx !== void 0) {
      Object(touch["b" /* removeObserver */])(ctx);
      document.body.classList.remove('no-pointer-events');

      if (modifiers.mouse === true) {
        el.removeEventListener('mousedown', ctx.mouseStart, modifiers.mouseCapture);
        document.removeEventListener('mousemove', ctx.move, true);
        document.removeEventListener('mouseup', ctx.mouseEnd, true);
      }

      if (Platform["a" /* default */].has.touch === true) {
        var opts = utils_event["d" /* listenOpts */]['notPassive' + (modifiers.capture === true ? 'Capture' : '')];
        el.removeEventListener('touchstart', ctx.start, opts);
        el.removeEventListener('touchmove', ctx.move, opts);
        el.removeEventListener('touchcancel', ctx.end, opts);
        el.removeEventListener('touchend', ctx.end, opts);
      }

      delete el[el.__qtouchswipe_old ? '__qtouchswipe_old' : '__qtouchswipe'];
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/panel.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PanelParentMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelChildMixin; });




var PanelWrapper = external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QTabPanelWrapper',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-panel scroll',
      attrs: {
        role: 'tabpanel'
      },
      // stop propagation of content emitted @input
      // which would tamper with Panel's model
      on: {
        input: utils_event["g" /* stop */]
      }
    }, Object(slot["a" /* default */])(this, 'default'));
  }
});
var PanelParentMixin = {
  directives: {
    TouchSwipe: TouchSwipe
  },
  props: {
    value: {
      required: true
    },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    transitionPrev: {
      type: String,
      default: 'slide-right'
    },
    transitionNext: {
      type: String,
      default: 'slide-left'
    },
    keepAlive: Boolean
  },
  data: function data() {
    return {
      panelIndex: null,
      panelTransition: null
    };
  },
  computed: {
    panelDirectives: function panelDirectives() {
      if (this.swipeable) {
        return [{
          name: 'touch-swipe',
          value: this.__swipe,
          modifiers: {
            horizontal: true,
            mouse: true
          }
        }];
      }
    },
    contentKey: function contentKey() {
      return typeof this.value === 'string' || typeof this.value === 'number' ? this.value : String(this.value);
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      var _this = this;

      var index = this.__isValidPanelName(newVal) === true ? this.__getPanelIndex(newVal) : -1;

      if (this.__forcedPanelTransition !== true) {
        this.__updatePanelTransition(index === -1 ? 0 : index < this.__getPanelIndex(oldVal) ? -1 : 1);
      }

      if (this.panelIndex !== index) {
        this.panelIndex = index;
        this.$emit('before-transition', newVal, oldVal);
        this.$nextTick(function () {
          _this.$emit('transition', newVal, oldVal);
        });
      }
    }
  },
  methods: {
    next: function next() {
      this.__go(1);
    },
    previous: function previous() {
      this.__go(-1);
    },
    goTo: function goTo(name) {
      this.$emit('input', name);
    },
    __isValidPanelName: function __isValidPanelName(name) {
      return name !== void 0 && name !== null && name !== '';
    },
    __getPanelIndex: function __getPanelIndex(name) {
      return this.panels.findIndex(function (panel) {
        var opt = panel.componentOptions;
        return opt && opt.propsData.name === name && opt.propsData.disable !== '' && opt.propsData.disable !== true;
      });
    },
    __getAllPanels: function __getAllPanels() {
      var _this2 = this;

      return this.panels.filter(function (panel) {
        return panel.componentOptions !== void 0 && _this2.__isValidPanelName(panel.componentOptions.propsData.name);
      });
    },
    __getAvailablePanels: function __getAvailablePanels() {
      return this.panels.filter(function (panel) {
        var opt = panel.componentOptions;
        return opt && opt.propsData.name !== void 0 && opt.propsData.disable !== '' && opt.propsData.disable !== true;
      });
    },
    __updatePanelTransition: function __updatePanelTransition(direction) {
      var val = direction !== 0 && this.animated === true && this.panelIndex !== -1 ? 'q-transition--' + (direction === -1 ? this.transitionPrev : this.transitionNext) : null;

      if (this.panelTransition !== val) {
        this.panelTransition = val;
      }
    },
    __go: function __go(direction) {
      var _this3 = this;

      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.panelIndex;
      var index = startIndex + direction;
      var slots = this.panels;

      while (index > -1 && index < slots.length) {
        var opt = slots[index].componentOptions;

        if (opt !== void 0 && opt.propsData.disable !== '' && opt.propsData.disable !== true) {
          this.__updatePanelTransition(direction);

          this.__forcedPanelTransition = true;
          this.$emit('input', slots[index].componentOptions.propsData.name);
          setTimeout(function () {
            _this3.__forcedPanelTransition = false;
          });
          return;
        }

        index += direction;
      }

      if (this.infinite === true && slots.length > 0 && startIndex !== -1 && startIndex !== slots.length) {
        this.__go(direction, direction === -1 ? slots.length : -1);
      }
    },
    __swipe: function __swipe(evt) {
      this.__go((this.$q.lang.rtl === true ? -1 : 1) * (evt.direction === 'left' ? 1 : -1));
    },
    __updatePanelIndex: function __updatePanelIndex() {
      var index = this.__getPanelIndex(this.value);

      if (this.panelIndex !== index) {
        this.panelIndex = index;
      }

      return true;
    },
    __getPanelContent: function __getPanelContent(h) {
      if (this.panels.length === 0) {
        return;
      }

      var panel = this.__isValidPanelName(this.value) && this.__updatePanelIndex() && this.panels[this.panelIndex];
      var content = this.keepAlive === true ? [h('keep-alive', [h(PanelWrapper, {
        key: this.contentKey
      }, [panel])])] : [h('div', {
        staticClass: 'q-panel scroll',
        key: this.contentKey,
        attrs: {
          role: 'tabpanel'
        },
        // stop propagation of content emitted @input
        // which would tamper with Panel's model
        on: {
          input: utils_event["g" /* stop */]
        }
      }, [panel])];
      return this.animated === true ? [h('transition', {
        props: {
          name: this.panelTransition
        }
      }, content)] : content;
    }
  },
  render: function render(h) {
    this.panels = this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [];
    return this.__render(h);
  }
};
var PanelChildMixin = {
  props: {
    name: {
      required: true
    },
    disable: Boolean
  }
};

/***/ }),

/***/ "b498":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/patterns.js
var patterns = __webpack_require__("8621");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/throttle.js
/* harmony default export */ var throttle = (function (fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var wait = false;
  var result;
  return function () {
    if (wait) {
      return result;
    }

    wait = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    result = fn.apply(this, args);
    setTimeout(function () {
      wait = false;
    }, limit);
    return result;
  };
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__("bc78");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/TouchPan.js
var TouchPan = __webpack_require__("75c3");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/slider-utils.js
var slider_utils = __webpack_require__("5694");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__("7937");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/slider/QSlider.js





/* harmony default export */ var QSlider = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QSlider',
  mixins: [slider_utils["a" /* SliderMixin */]],
  props: {
    value: {
      type: Number,
      required: true
    },
    labelValue: [String, Number]
  },
  data: function data() {
    return {
      model: this.value,
      curRatio: 0
    };
  },
  watch: {
    value: function value(v) {
      this.model = Object(format["a" /* between */])(v, this.min, this.max);
    },
    min: function min(v) {
      this.model = Object(format["a" /* between */])(this.model, v, this.max);
    },
    max: function max(v) {
      this.model = Object(format["a" /* between */])(this.model, this.min, v);
    }
  },
  computed: {
    ratio: function ratio() {
      return this.active === true ? this.curRatio : this.modelRatio;
    },
    modelRatio: function modelRatio() {
      return (this.model - this.min) / (this.max - this.min);
    },
    trackStyle: function trackStyle() {
      return {
        width: 100 * this.ratio + '%'
      };
    },
    thumbStyle: function thumbStyle() {
      return defineProperty_default()({}, this.horizProp, 100 * this.ratio + '%');
    },
    thumbClass: function thumbClass() {
      return this.preventFocus === false && this.focus === true ? 'q-slider--focus' : null;
    },
    pinClass: function pinClass() {
      return this.labelColor !== void 0 ? "text-".concat(this.labelColor) : null;
    },
    events: function events() {
      if (this.editable === true) {
        return this.$q.platform.is.mobile === true ? {
          click: this.__mobileClick
        } : {
          mousedown: this.__activate,
          focus: this.__focus,
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    computedLabel: function computedLabel() {
      return this.labelValue !== void 0 ? this.labelValue : this.model;
    }
  },
  methods: {
    __updateValue: function __updateValue(change) {
      if (this.model !== this.value) {
        this.$emit('input', this.model);
        change === true && this.$emit('change', this.model);
      }
    },
    __getDragging: function __getDragging() {
      return this.$el.getBoundingClientRect();
    },
    __updatePosition: function __updatePosition(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;
      var ratio = Object(slider_utils["c" /* getRatio */])(event, dragging, this.$q.lang.rtl);
      this.model = Object(slider_utils["b" /* getModel */])(ratio, this.min, this.max, this.step, this.decimals);
      this.curRatio = this.snap !== true || this.step === 0 ? ratio : (this.model - this.min) / (this.max - this.min);
    },
    __focus: function __focus() {
      this.focus = true;
    },
    __keydown: function __keydown(evt) {
      if (!slider_utils["d" /* keyCodes */].includes(evt.keyCode)) {
        return;
      }

      Object(utils_event["h" /* stopAndPrevent */])(evt);
      var step = ([34, 33].includes(evt.keyCode) ? 10 : 1) * this.computedStep,
          offset = [34, 37, 40].includes(evt.keyCode) ? -step : step;
      this.model = Object(format["a" /* between */])(parseFloat((this.model + offset).toFixed(this.decimals)), this.min, this.max);

      this.__updateValue();
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-slider',
      attrs: {
        role: 'slider',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'aria-valuenow': this.value,
        'data-step': this.step,
        'aria-disabled': this.disable,
        tabindex: this.computedTabindex
      },
      class: this.classes,
      on: this.events,
      directives: this.editable ? [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }] : null
    }, [h('div', {
      staticClass: 'q-slider__track-container absolute overflow-hidden'
    }, [h('div', {
      staticClass: 'q-slider__track absolute-full',
      style: this.trackStyle
    }), this.markers === true ? h('div', {
      staticClass: 'q-slider__track-markers absolute-full fit',
      style: this.markerStyle
    }) : null]), h('div', {
      staticClass: 'q-slider__thumb-container absolute non-selectable',
      class: this.thumbClass,
      style: this.thumbStyle
    }, [h('svg', {
      staticClass: 'q-slider__thumb absolute',
      attrs: {
        width: '21',
        height: '21'
      }
    }, [h('circle', {
      attrs: {
        cx: '10.5',
        cy: '10.5',
        r: '7.875'
      }
    })]), this.label === true || this.labelAlways === true ? h('div', {
      staticClass: 'q-slider__pin absolute flex flex-center',
      class: this.pinClass
    }, [h('div', {
      staticClass: 'q-slider__pin-value-marker'
    }, [h('div', {
      staticClass: 'q-slider__pin-value-marker-bg'
    }), h('div', {
      staticClass: 'q-slider__pin-value-marker-text'
    }, [this.computedLabel])])]) : null, h('div', {
      staticClass: 'q-slider__focus-ring'
    })])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js + 2 modules
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/color/QColor.js












var palette = ['rgb(255,204,204)', 'rgb(255,230,204)', 'rgb(255,255,204)', 'rgb(204,255,204)', 'rgb(204,255,230)', 'rgb(204,255,255)', 'rgb(204,230,255)', 'rgb(204,204,255)', 'rgb(230,204,255)', 'rgb(255,204,255)', 'rgb(255,153,153)', 'rgb(255,204,153)', 'rgb(255,255,153)', 'rgb(153,255,153)', 'rgb(153,255,204)', 'rgb(153,255,255)', 'rgb(153,204,255)', 'rgb(153,153,255)', 'rgb(204,153,255)', 'rgb(255,153,255)', 'rgb(255,102,102)', 'rgb(255,179,102)', 'rgb(255,255,102)', 'rgb(102,255,102)', 'rgb(102,255,179)', 'rgb(102,255,255)', 'rgb(102,179,255)', 'rgb(102,102,255)', 'rgb(179,102,255)', 'rgb(255,102,255)', 'rgb(255,51,51)', 'rgb(255,153,51)', 'rgb(255,255,51)', 'rgb(51,255,51)', 'rgb(51,255,153)', 'rgb(51,255,255)', 'rgb(51,153,255)', 'rgb(51,51,255)', 'rgb(153,51,255)', 'rgb(255,51,255)', 'rgb(255,0,0)', 'rgb(255,128,0)', 'rgb(255,255,0)', 'rgb(0,255,0)', 'rgb(0,255,128)', 'rgb(0,255,255)', 'rgb(0,128,255)', 'rgb(0,0,255)', 'rgb(128,0,255)', 'rgb(255,0,255)', 'rgb(245,0,0)', 'rgb(245,123,0)', 'rgb(245,245,0)', 'rgb(0,245,0)', 'rgb(0,245,123)', 'rgb(0,245,245)', 'rgb(0,123,245)', 'rgb(0,0,245)', 'rgb(123,0,245)', 'rgb(245,0,245)', 'rgb(214,0,0)', 'rgb(214,108,0)', 'rgb(214,214,0)', 'rgb(0,214,0)', 'rgb(0,214,108)', 'rgb(0,214,214)', 'rgb(0,108,214)', 'rgb(0,0,214)', 'rgb(108,0,214)', 'rgb(214,0,214)', 'rgb(163,0,0)', 'rgb(163,82,0)', 'rgb(163,163,0)', 'rgb(0,163,0)', 'rgb(0,163,82)', 'rgb(0,163,163)', 'rgb(0,82,163)', 'rgb(0,0,163)', 'rgb(82,0,163)', 'rgb(163,0,163)', 'rgb(92,0,0)', 'rgb(92,46,0)', 'rgb(92,92,0)', 'rgb(0,92,0)', 'rgb(0,92,46)', 'rgb(0,92,92)', 'rgb(0,46,92)', 'rgb(0,0,92)', 'rgb(46,0,92)', 'rgb(92,0,92)', 'rgb(255,255,255)', 'rgb(205,205,205)', 'rgb(178,178,178)', 'rgb(153,153,153)', 'rgb(127,127,127)', 'rgb(102,102,102)', 'rgb(76,76,76)', 'rgb(51,51,51)', 'rgb(25,25,25)', 'rgb(0,0,0)'];
/* harmony default export */ var QColor = __webpack_exports__["a"] = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QColor',
  directives: {
    TouchPan: TouchPan["a" /* default */]
  },
  props: {
    value: String,
    defaultValue: String,
    defaultView: {
      type: String,
      default: 'spectrum',
      validator: function validator(v) {
        return ['spectrum', 'tune', 'palette'].includes(v);
      }
    },
    formatModel: {
      type: String,
      default: 'auto',
      validator: function validator(v) {
        return ['auto', 'hex', 'rgb', 'hexa', 'rgba'].includes(v);
      }
    },
    noHeader: Boolean,
    noFooter: Boolean,
    disable: Boolean,
    readonly: Boolean,
    dark: Boolean
  },
  data: function data() {
    return {
      topView: this.formatModel === 'auto' ? this.value === void 0 || this.value === null || this.value === '' || this.value.startsWith('#') ? 'hex' : 'rgb' : this.formatModel.startsWith('hex') ? 'hex' : 'rgb',
      view: this.defaultView,
      model: this.__parseModel(this.value || this.defaultValue)
    };
  },
  watch: {
    value: function value(v) {
      var model = this.__parseModel(v || this.defaultValue);

      if (model.hex !== this.model.hex) {
        this.model = model;
      }
    },
    defaultValue: function defaultValue(v) {
      if (!this.value && v) {
        var model = this.__parseModel(v);

        if (model.hex !== this.model.hex) {
          this.model = model;
        }
      }
    }
  },
  computed: {
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    },
    forceHex: function forceHex() {
      return this.formatModel === 'auto' ? null : this.formatModel.indexOf('hex') > -1;
    },
    forceAlpha: function forceAlpha() {
      return this.formatModel === 'auto' ? null : this.formatModel.indexOf('a') > -1;
    },
    isHex: function isHex() {
      return this.value === void 0 || this.value === null || this.value === '' || this.value.startsWith('#');
    },
    isOutputHex: function isOutputHex() {
      return this.forceHex !== null ? this.forceHex : this.isHex;
    },
    hasAlpha: function hasAlpha() {
      if (this.forceAlpha !== null) {
        return this.forceAlpha;
      }

      return this.model.a !== void 0;
    },
    currentBgColor: function currentBgColor() {
      return {
        backgroundColor: this.model.rgb || '#000'
      };
    },
    headerClass: function headerClass() {
      var light = this.model.a !== void 0 && this.model.a < 65 ? true : Object(colors["c" /* luminosity */])(this.model) > 0.4;
      return "q-color-picker__header-content--".concat(light ? 'light' : 'dark');
    },
    spectrumStyle: function spectrumStyle() {
      return {
        background: "hsl(".concat(this.model.h, ",100%,50%)")
      };
    },
    spectrumPointerStyle: function spectrumPointerStyle() {
      return defineProperty_default()({
        top: "".concat(100 - this.model.v, "%")
      }, this.$q.lang.rtl ? 'right' : 'left', "".concat(this.model.s, "%"));
    },
    inputsArray: function inputsArray() {
      var inp = ['r', 'g', 'b'];

      if (this.hasAlpha === true) {
        inp.push('a');
      }

      return inp;
    }
  },
  created: function created() {
    this.__spectrumChange = throttle(this.__spectrumChange, 20);
  },
  render: function render(h) {
    var child = [this.__getContent(h)];
    this.noHeader !== true && child.unshift(this.__getHeader(h));
    this.noFooter !== true && child.push(this.__getFooter(h));
    return h('div', {
      staticClass: 'q-color-picker',
      class: {
        disabled: this.disable,
        'q-color-picker--dark': this.dark
      }
    }, child);
  },
  methods: {
    __getHeader: function __getHeader(h) {
      var _this = this;

      return h('div', {
        staticClass: 'q-color-picker__header relative-position overflow-hidden'
      }, [h('div', {
        staticClass: 'q-color-picker__header-bg absolute-full'
      }), h('div', {
        staticClass: 'q-color-picker__header-content absolute-full',
        class: this.headerClass,
        style: this.currentBgColor
      }, [h(QTabs["a" /* default */], {
        props: {
          value: this.topView,
          dense: true,
          align: 'justify'
        },
        on: {
          input: function input(val) {
            _this.topView = val;
          }
        }
      }, [h(QTab["a" /* default */], {
        props: {
          label: 'HEX' + (this.hasAlpha === true ? 'A' : ''),
          name: 'hex',
          ripple: false
        }
      }), h(QTab["a" /* default */], {
        props: {
          label: 'RGB' + (this.hasAlpha === true ? 'A' : ''),
          name: 'rgb',
          ripple: false
        }
      })]), h('div', {
        staticClass: 'q-color-picker__header-banner row flex-center no-wrap'
      }, [h('input', {
        staticClass: 'fit',
        domProps: {
          value: this.model[this.topView]
        },
        attrs: !this.editable ? {
          readonly: true
        } : null,
        on: {
          input: function input(evt) {
            _this.__updateErrorIcon(_this.__onEditorChange(evt) === true);
          },
          blur: function blur(evt) {
            _this.__onEditorChange(evt, true) === true && _this.$forceUpdate();

            _this.__updateErrorIcon(false);
          }
        }
      }), h(QIcon["a" /* default */], {
        ref: 'errorIcon',
        staticClass: 'q-color-picker__error-icon absolute no-pointer-events',
        props: {
          name: this.$q.iconSet.type.negative
        }
      })])])]);
    },
    __getContent: function __getContent(h) {
      return h(QTabPanels["a" /* default */], {
        props: {
          value: this.view,
          animated: true
        }
      }, [h(QTabPanel["a" /* default */], {
        staticClass: 'q-color-picker__spectrum-tab',
        props: {
          name: 'spectrum'
        }
      }, this.__getSpectrumTab(h)), h(QTabPanel["a" /* default */], {
        staticClass: 'q-pa-md q-color-picker__tune-tab',
        props: {
          name: 'tune'
        }
      }, this.__getTuneTab(h)), h(QTabPanel["a" /* default */], {
        staticClass: 'q-pa-sm q-color-picker__palette-tab',
        props: {
          name: 'palette'
        }
      }, this.__getPaletteTab(h))]);
    },
    __getFooter: function __getFooter(h) {
      var _this2 = this;

      return h(QTabs["a" /* default */], {
        staticClass: 'q-color-picker__footer',
        props: {
          value: this.view,
          dense: true,
          align: 'justify'
        },
        on: {
          input: function input(val) {
            _this2.view = val;
          }
        }
      }, [h(QTab["a" /* default */], {
        props: {
          icon: this.$q.iconSet.colorPicker.spectrum,
          name: 'spectrum',
          ripple: false
        }
      }), h(QTab["a" /* default */], {
        props: {
          icon: this.$q.iconSet.colorPicker.tune,
          name: 'tune',
          ripple: false
        }
      }), h(QTab["a" /* default */], {
        props: {
          icon: this.$q.iconSet.colorPicker.palette,
          name: 'palette',
          ripple: false
        }
      })]);
    },
    __getSpectrumTab: function __getSpectrumTab(h) {
      var _this3 = this;

      return [h('div', {
        ref: 'spectrum',
        staticClass: 'q-color-picker__spectrum non-selectable relative-position cursor-pointer',
        style: this.spectrumStyle,
        class: {
          readonly: !this.editable
        },
        on: this.editable ? {
          click: this.__spectrumClick
        } : null,
        directives: this.editable ? [{
          name: 'touch-pan',
          modifiers: {
            prevent: true,
            stop: true,
            mouse: true
          },
          value: this.__spectrumPan
        }] : null
      }, [h('div', {
        style: {
          paddingBottom: '100%'
        }
      }), h('div', {
        staticClass: 'q-color-picker__spectrum-white absolute-full'
      }), h('div', {
        staticClass: 'q-color-picker__spectrum-black absolute-full'
      }), h('div', {
        staticClass: 'absolute',
        style: this.spectrumPointerStyle
      }, [this.model.hex !== void 0 ? h('div', {
        staticClass: 'q-color-picker__spectrum-circle'
      }) : null])]), h('div', {
        staticClass: 'q-color-picker__sliders'
      }, [h('div', {
        staticClass: 'q-color-picker__hue q-mx-sm non-selectable'
      }, [h(QSlider, {
        props: {
          value: this.model.h,
          min: 0,
          max: 360,
          fillHandleAlways: true,
          readonly: !this.editable
        },
        on: {
          input: this.__onHueChange,
          dragend: function dragend(val) {
            return _this3.__onHueChange(val, true);
          }
        }
      })]), this.hasAlpha === true ? h('div', {
        staticClass: 'q-mx-sm q-color-picker__alpha non-selectable'
      }, [h(QSlider, {
        props: {
          value: this.model.a,
          min: 0,
          max: 100,
          fillHandleAlways: true,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this3.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100);
          },
          dragend: function dragend(value) {
            return _this3.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100, true);
          }
        }
      })]) : null])];
    },
    __getTuneTab: function __getTuneTab(h) {
      var _this4 = this;

      return [h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['R']), h(QSlider, {
        props: {
          value: this.model.r,
          min: 0,
          max: 255,
          color: 'red',
          dark: this.dark,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'r', 255);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.r
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'r', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'r', 255, true);
          }
        }
      })]), h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['G']), h(QSlider, {
        props: {
          value: this.model.g,
          min: 0,
          max: 255,
          color: 'green',
          dark: this.dark,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'g', 255);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.g
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'g', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'g', 255, true);
          }
        }
      })]), h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['B']), h(QSlider, {
        props: {
          value: this.model.b,
          min: 0,
          max: 255,
          color: 'blue',
          readonly: !this.editable,
          dark: this.dark
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'b', 255);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.b
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'b', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'b', 255, true);
          }
        }
      })]), this.hasAlpha === true ? h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['A']), h(QSlider, {
        props: {
          value: this.model.a,
          color: 'grey',
          readonly: !this.editable,
          dark: this.dark
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.a
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'a', 100);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'a', 100, true);
          }
        }
      })]) : null];
    },
    __getPaletteTab: function __getPaletteTab(h) {
      var _this5 = this;

      return [h('div', {
        staticClass: 'row items-center',
        class: this.editable ? 'cursor-pointer' : null
      }, palette.map(function (color) {
        return h('div', {
          staticClass: 'q-color-picker__cube col-auto',
          style: {
            backgroundColor: color
          },
          on: _this5.editable ? {
            click: function click() {
              _this5.__onPalettePick(color);
            }
          } : null
        });
      }))];
    },
    __onSpectrumChange: function __onSpectrumChange(left, top, change) {
      var panel = this.$refs.spectrum;

      if (panel === void 0) {
        return;
      }

      var width = panel.clientWidth,
          height = panel.clientHeight,
          rect = panel.getBoundingClientRect();
      var x = Math.min(width, Math.max(0, left - rect.left));

      if (this.$q.lang.rtl) {
        x = width - x;
      }

      var y = Math.min(height, Math.max(0, top - rect.top)),
          s = Math.round(100 * x / width),
          v = Math.round(100 * Math.max(0, Math.min(1, -(y / height) + 1))),
          rgb = Object(colors["b" /* hsvToRgb */])({
        h: this.model.h,
        s: s,
        v: v,
        a: this.hasAlpha === true ? this.model.a : void 0
      });
      this.model.s = s;
      this.model.v = v;

      this.__update(rgb, change);
    },
    __onHueChange: function __onHueChange(h, change) {
      h = Math.round(h);
      var rgb = Object(colors["b" /* hsvToRgb */])({
        h: h,
        s: this.model.s,
        v: this.model.v,
        a: this.hasAlpha === true ? this.model.a : void 0
      });
      this.model.h = h;

      this.__update(rgb, change);
    },
    __onNumericChange: function __onNumericChange(evt, formatModel, max, change) {
      if (!/^[0-9]+$/.test(evt.target.value)) {
        change && this.$forceUpdate();
        return;
      }

      var val = Math.floor(Number(evt.target.value));

      if (val < 0 || val > max) {
        change && this.$forceUpdate();
        return;
      }

      var rgb = {
        r: formatModel === 'r' ? val : this.model.r,
        g: formatModel === 'g' ? val : this.model.g,
        b: formatModel === 'b' ? val : this.model.b,
        a: this.hasAlpha === true ? formatModel === 'a' ? val : this.model.a : void 0
      };

      if (formatModel !== 'a') {
        var hsv = Object(colors["e" /* rgbToHsv */])(rgb);
        this.model.h = hsv.h;
        this.model.s = hsv.s;
        this.model.v = hsv.v;
      }

      this.__update(rgb, change);

      if (change !== true && evt.target.selectionEnd !== void 0) {
        var index = evt.target.selectionEnd;
        this.$nextTick(function () {
          evt.target.setSelectionRange(index, index);
        });
      }
    },
    __onEditorChange: function __onEditorChange(evt, change) {
      var rgb;
      var inp = evt.target.value;

      if (this.topView === 'hex') {
        if (inp.length !== (this.hasAlpha === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(inp)) {
          return true;
        }

        rgb = Object(colors["a" /* hexToRgb */])(inp);
      } else {
        var model;

        if (!inp.endsWith(')')) {
          return true;
        } else if (this.hasAlpha !== true && inp.startsWith('rgb(')) {
          model = inp.substring(4, inp.length - 1).split(',').map(function (n) {
            return parseInt(n, 10);
          });

          if (model.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(inp)) {
            return true;
          }
        } else if (this.hasAlpha === true && inp.startsWith('rgba(')) {
          model = inp.substring(5, inp.length - 1).split(',');

          if (model.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(inp)) {
            return true;
          }

          for (var i = 0; i < 3; i++) {
            var _v = parseInt(model[i], 10);

            if (_v < 0 || _v > 255) {
              return true;
            }

            model[i] = _v;
          }

          var v = parseFloat(model[3]);

          if (v < 0 || v > 1) {
            return true;
          }

          model[3] = v;
        } else {
          return true;
        }

        if (model[0] < 0 || model[0] > 255 || model[1] < 0 || model[1] > 255 || model[2] < 0 || model[2] > 255 || this.hasAlpha === true && (model[3] < 0 || model[3] > 1)) {
          return true;
        }

        rgb = {
          r: model[0],
          g: model[1],
          b: model[2],
          a: this.hasAlpha === true ? model[3] * 100 : void 0
        };
      }

      var hsv = Object(colors["e" /* rgbToHsv */])(rgb);
      this.model.h = hsv.h;
      this.model.s = hsv.s;
      this.model.v = hsv.v;

      this.__update(rgb, change);

      if (change !== true) {
        var index = evt.target.selectionEnd;
        this.$nextTick(function () {
          evt.target.setSelectionRange(index, index);
        });
      }
    },
    __onPalettePick: function __onPalettePick(color) {
      var model = color.substring(4, color.length - 1).split(',');
      var rgb = {
        r: parseInt(model[0], 10),
        g: parseInt(model[1], 10),
        b: parseInt(model[2], 10),
        a: this.model.a
      };
      var hsv = Object(colors["e" /* rgbToHsv */])(rgb);
      this.model.h = hsv.h;
      this.model.s = hsv.s;
      this.model.v = hsv.v;

      this.__update(rgb, true);
    },
    __update: function __update(rgb, change) {
      // update internally
      this.model.hex = Object(colors["d" /* rgbToHex */])(rgb);
      this.model.rgb = Object(colors["f" /* rgbToString */])(rgb);
      this.model.r = rgb.r;
      this.model.g = rgb.g;
      this.model.b = rgb.b;
      this.model.a = rgb.a;
      var value = this.model[this.isOutputHex === true ? 'hex' : 'rgb']; // emit new value

      this.$emit('input', value);
      change && value !== this.value && this.$emit('change', value);
    },
    __updateErrorIcon: function __updateErrorIcon(val) {
      // we MUST avoid vue triggering a render,
      // so manually changing this
      this.$refs.errorIcon.$el.style.opacity = val ? 1 : 0;
    },
    __parseModel: function __parseModel(v) {
      var forceAlpha = this.forceAlpha !== void 0 ? this.forceAlpha : this.formatModel === 'auto' ? null : this.formatModel.indexOf('a') > -1;

      if (v === null || v === void 0 || v === '' || patterns["a" /* testPattern */].anyColor(v) !== true) {
        return {
          h: 0,
          s: 0,
          v: 0,
          r: 0,
          g: 0,
          b: 0,
          a: forceAlpha === true ? 100 : void 0,
          hex: void 0,
          rgb: void 0
        };
      }

      var model = Object(colors["h" /* stringToRgb */])(v);

      if (forceAlpha === true && model.a === void 0) {
        model.a = 100;
      }

      model.hex = Object(colors["d" /* rgbToHex */])(model);
      model.rgb = Object(colors["f" /* rgbToString */])(model);
      return Object.assign(model, Object(colors["e" /* rgbToHsv */])(model));
    },
    __spectrumPan: function __spectrumPan(evt) {
      if (evt.isFinal) {
        this.__onSpectrumChange(evt.position.left, evt.position.top, true);
      } else {
        this.__spectrumChange(evt);
      }
    },
    // throttled in created()
    __spectrumChange: function __spectrumChange(evt) {
      this.__onSpectrumChange(evt.position.left, evt.position.top);
    },
    __spectrumClick: function __spectrumClick(evt) {
      this.__onSpectrumChange(evt.pageX - window.pageXOffset, evt.pageY - window.pageYOffset, true);
    }
  }
}));

/***/ }),

/***/ "bc78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return rgbToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stringToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rgbToHsv; });
/* unused harmony export textToRgb */
/* unused harmony export lighten */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return luminosity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setBrand; });
/* unused harmony export getBrand */
function rgbToHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
  var alpha = a !== void 0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  if (r > 255 || g > 255 || b > 255 || alpha && a > 100) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)');
  }

  a = alpha ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1) : '';
  return '#' + (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + a;
}
function rgbToString(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b,
      a = _ref2.a;
  return "rgb".concat(a !== void 0 ? 'a' : '', "(").concat(r, ",").concat(g, ",").concat(b).concat(a !== void 0 ? ',' + a / 100 : '', ")");
}
function stringToRgb(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  str = str.replace(/ /g, '');

  if (str.startsWith('#')) {
    return hexToRgb(str);
  }

  var model = str.substring(str.indexOf('(') + 1, str.length - 1).split(',');
  return {
    r: parseInt(model[0], 10),
    g: parseInt(model[1], 10),
    b: parseInt(model[2], 10),
    a: model[3] !== void 0 ? parseFloat(model[3]) * 100 : void 0
  };
}
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  var num = parseInt(hex, 16);
  return hex.length > 6 ? {
    r: num >> 24 & 255,
    g: num >> 16 & 255,
    b: num >> 8 & 255,
    a: Math.round((num & 255) / 2.55)
  } : {
    r: num >> 16,
    g: num >> 8 & 255,
    b: num & 255
  };
}
function hsvToRgb(_ref3) {
  var h = _ref3.h,
      s = _ref3.s,
      v = _ref3.v,
      a = _ref3.a;
  var r, g, b, i, f, p, q, t;
  s = s / 100;
  v = v / 100;
  h = h / 360;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = v;
      b = p;
      break;

    case 2:
      r = p;
      g = v;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = v;
      break;

    case 4:
      r = t;
      g = p;
      b = v;
      break;

    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a: a
  };
}
function rgbToHsv(_ref4) {
  var r = _ref4.r,
      g = _ref4.g,
      b = _ref4.b,
      a = _ref4.a;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min,
      h,
      s = max === 0 ? 0 : d / max,
      v = max / 255;

  switch (max) {
    case min:
      h = 0;
      break;

    case r:
      h = g - b + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;

    case g:
      h = b - r + d * 2;
      h /= 6 * d;
      break;

    case b:
      h = r - g + d * 4;
      h /= 6 * d;
      break;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a: a
  };
}
var reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;
function textToRgb(color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string');
  }

  var m = reRGBA.exec(color);

  if (m) {
    var rgb = {
      r: Math.max(255, parseInt(m[2], 10)),
      g: Math.max(255, parseInt(m[3], 10)),
      b: Math.max(255, parseInt(m[4], 10))
    };

    if (m[1]) {
      rgb.a = Math.max(1, parseFloat(m[5]));
    }

    return rgb;
  }

  return hexToRgb(color);
}
/* works as darken if percent < 0 */

function lighten(color, percent) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (typeof percent !== 'number') {
    throw new TypeError('Expected a numeric percent');
  }

  var rgb = textToRgb(color),
      t = percent < 0 ? 0 : 255,
      p = Math.abs(percent) / 100,
      R = rgb.r,
      G = rgb.g,
      B = rgb.b;
  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
function luminosity(color) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color');
  }

  var rgb = typeof color === 'string' ? textToRgb(color) : color,
      r = rgb.r / 255,
      g = rgb.g / 255,
      b = rgb.b / 255,
      R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
      G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
      B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function setBrand(color, value) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as value');
  }

  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element');
  }

  element.style.setProperty("--q-color-".concat(color), value);

  switch (color) {
    case 'negative':
    case 'warning':
      element.style.setProperty("--q-color-".concat(color, "-l"), lighten(value, 46));
      break;

    case 'light':
      element.style.setProperty("--q-color-".concat(color, "-d"), lighten(value, -10));
  }
}
function getBrand(color) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element');
  }

  return getComputedStyle(element).getPropertyValue("--q-color-".concat(color)).trim() || null;
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  rgbToHex: rgbToHex,
  hexToRgb: hexToRgb,
  hsvToRgb: hsvToRgb,
  rgbToHsv: rgbToHsv,
  textToRgb: textToRgb,
  lighten: lighten,
  luminosity: luminosity,
  setBrand: setBrand,
  getBrand: getBrand
});

/***/ }),

/***/ "c0a8":
/***/ (function(module) {

module.exports = {"a":"1.0.0-rc.4"};

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d556":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d882":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listenOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return leftClick; });
/* unused harmony export middleClick */
/* unused harmony export rightClick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEventPath; });
/* unused harmony export getMouseWheelDistance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return prevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stopAndPrevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
var listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
};

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: {
          passive: true
        },
        notPassive: {
          passive: false
        },
        passiveCapture: {
          passive: true,
          capture: true
        },
        notPassiveCapture: {
          passive: false,
          capture: true
        }
      });
    }
  });
  window.addEventListener('qtest', null, opts);
  window.removeEventListener('qtest', null, opts);
} catch (e) {}

function leftClick(e) {
  return e.button === 0;
}
function middleClick(e) {
  return e.button === 1;
}
function rightClick(e) {
  return e.button === 2;
}
function position(e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0];
  } else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0];
  }

  return {
    top: e.clientY,
    left: e.clientX
  };
}
function getEventPath(e) {
  if (e.path) {
    return e.path;
  }

  if (e.composedPath) {
    return e.composedPath();
  }

  var path = [];
  var el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }
} // Reasonable defaults

var LINE_HEIGHT = 40,
    PAGE_HEIGHT = 800;
function getMouseWheelDistance(e) {
  var x = e.deltaX,
      y = e.deltaY;

  if ((x || y) && e.deltaMode) {
    var multiplier = e.deltaMode === 1 ? LINE_HEIGHT : PAGE_HEIGHT;
    x *= multiplier;
    y *= multiplier;
  }

  if (e.shiftKey && !x) {
    var _ref = [x, y];
    y = _ref[0];
    x = _ref[1];
  }

  return {
    x: x,
    y: y
  };
}
function stop(e) {
  e.stopPropagation();
}
function prevent(e) {
  e.cancelable !== false && e.preventDefault();
}
function stopAndPrevent(e) {
  e.cancelable !== false && e.preventDefault();
  e.stopPropagation();
}
function create(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$bubbles = _ref2.bubbles,
      bubbles = _ref2$bubbles === void 0 ? false : _ref2$bubbles,
      _ref2$cancelable = _ref2.cancelable,
      cancelable = _ref2$cancelable === void 0 ? false : _ref2$cancelable;

  try {
    return new Event(name, {
      bubbles: bubbles,
      cancelable: cancelable
    });
  } catch (e) {
    // IE doesn't support `new Event()`, so...`
    var evt = document.createEvent('Event');
    evt.initEvent(name, bubbles, cancelable);
    return evt;
  }
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  listenOpts: listenOpts,
  leftClick: leftClick,
  middleClick: middleClick,
  rightClick: rightClick,
  position: position,
  getEventPath: getEventPath,
  getMouseWheelDistance: getMouseWheelDistance,
  stop: stop,
  prevent: prevent,
  stopAndPrevent: stopAndPrevent,
  create: create
});

/***/ }),

/***/ "dde5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (vm, slotName) {
  return vm.$scopedSlots[slotName] !== void 0 ? vm.$scopedSlots[slotName]() : void 0;
});

/***/ }),

/***/ "e208":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_slot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dde5");


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'QItemLabel',
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  computed: {
    classes: function classes() {
      return {
        'q-item__label--overline text-overline': this.overline,
        'q-item__label--caption text-caption': this.caption,
        'q-item__label--header': this.header,
        'ellipsis': parseInt(this.lines, 10) === 1
      };
    },
    style: function style() {
      if (this.lines !== void 0 && parseInt(this.lines, 10) > 1) {
        return {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': this.lines
        };
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-item__label',
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, Object(_utils_slot_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, 'default'));
  }
}));

/***/ }),

/***/ "ed6d":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("4a4b");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "f28c":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "f303":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export offset */
/* unused harmony export style */
/* unused harmony export height */
/* unused harmony export width */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/* unused harmony export cssBatch */
/* unused harmony export ready */
function offset(el) {
  if (el === window) {
    return {
      top: 0,
      left: 0
    };
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    top: top,
    left: left
  };
}
function style(el, property) {
  return window.getComputedStyle(el).getPropertyValue(property);
}
function height(el) {
  return el === window ? window.innerHeight : el.getBoundingClientRect().height;
}
function width(el) {
  return el === window ? window.innerWidth : el.getBoundingClientRect().width;
}
function css(element, css) {
  var style = element.style;
  Object.keys(css).forEach(function (prop) {
    style[prop] = css[prop];
  });
}
function cssBatch(elements, style) {
  elements.forEach(function (el) {
    return css(el, style);
  });
}
function ready(fn) {
  if (typeof fn !== 'function') {
    return;
  }

  if (document.readyState !== 'loading') {
    return fn();
  }

  document.addEventListener('DOMContentLoaded', fn, false);
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  offset: offset,
  style: style,
  height: height,
  width: width,
  css: css,
  cssBatch: cssBatch,
  ready: ready
});

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./support/designtime/inspectable/Prop.ts
var Prop = __webpack_require__("3bcf");

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__("98db");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./src/core/shared/configs/index.ts
/**
 * 应用于所有图表的底层配置
 */
var globalConfigs = {
  theme: 'cold',
  themes: ['dark', 'cold', 'warm']
};
/* harmony default export */ var shared_configs = (globalConfigs);
var setGlobalConfigs = function setGlobalConfigs(configs) {
  Object.assign(globalConfigs, configs);
};
// CONCATENATED MODULE: ./src/core/shared/events/bus.ts

var Bus = new external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a({
  methods: {
    emit: function emit(event, args) {
      this.$emit(event, args);
    },
    on: function on(event, args) {
      this.$on(event, args);
    },
    off: function off(event, args) {
      this.$off(event, args);
    },
    once: function once(event, args) {
      this.$once(event, args);
    }
  }
});
/* harmony default export */ var bus = (Bus);
// CONCATENATED MODULE: ./src/Service.ts






var Service_Service =
/*#__PURE__*/
function () {
  function Service() {
    classCallCheck_default()(this, Service);
  }

  createClass_default()(Service, null, [{
    key: "instance",
    get: function get() {
      if (!external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.prototype.$chartlib) {
        external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.prototype.$chartlib = new external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a({
          data: function data() {
            return {
              popups: [],
              inspectable: {}
            };
          },
          computed: {
            configs: {
              get: function get() {
                return shared_configs;
              },
              set: function set(configs) {
                setGlobalConfigs(configs);
                this.$emit('configs.changed', {
                  configs: configs
                });
              }
            },
            theme: {
              get: function get() {
                return shared_configs.theme;
              },
              set: function set(theme) {
                shared_configs.theme = theme;
                setGlobalConfigs(shared_configs);
                bus.emit('theme.changed', {
                  theme: theme
                });
              }
            }
          },
          methods: {
            popup: function popup() {}
          }
        });
      }

      return external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.prototype.$chartlib;
    }
  }]);

  return Service;
}();


// CONCATENATED MODULE: ./support/designtime/inspectable/Inspectable.ts



var INSPECTABLE_FIELD_NAME = '__inspectable__';
var INSPECTABLE_METHOD_NAME = 'getInspectableProps';

function setInspectableForTarget(target, prop, options) {
  // 给 target 内部设置一个 inspectable 队列
  Inspectable.set(target, prop, options);
}
/**
 * 使属性项可以在属性面板编辑
 */


function Inspectable(options) {
  return function (target, key) {
    setInspectableForTarget(target, key, options);
  };
}

Inspectable.set = function (control, field, options) {
  var __class = control.constructor.name;
  var service = Service_Service.instance;
  var book = service.inspectable;

  if (!Reflect.has(book, __class)) {
    book[__class] = [];
  }

  var props = book[__class] || [];
  var value = Reflect.get(this, field);
  props.push(new Prop["a" /* default */]({
    name: field,
    value: value,
    default: options.default,
    label: options.label,
    category: options.category,
    readonly: options.readonly,
    order: options.order,
    type: options.type
  }));
  book[__class] = props;
};

Inspectable.get = function (control) {
  var result = [];
  var proto = control.__proto__;
  var service = Service_Service.instance;
  var book = service.inspectable; // 沿原型链向上查找

  while (proto.constructor.name.startsWith('Pa')) {
    var up = book[proto.constructor.name];

    if (up) {
      result = result.concat(up);
    }

    proto = proto.__proto__;
  }

  result.forEach(function (p) {
    p.value = control[p.name];
  });
  return result;
};

/* harmony default export */ var inspectable_Inspectable = (Inspectable);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./support/designtime/inspectable/PropTypes.ts






/**
 * 属性类型用于定义属性面板输入模式
 */
var PropTypes_PropTypes;

(function (PropTypes) {
  var PropValueType = function PropValueType() {
    classCallCheck_default()(this, PropValueType);
  };

  PropTypes.PropValueType = PropValueType;
  /**
   * 尺寸
   */

  var Dimension =
  /*#__PURE__*/
  function (_PropValueType) {
    inherits_default()(Dimension, _PropValueType);

    function Dimension(input) {
      var _this;

      classCallCheck_default()(this, Dimension);

      _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Dimension).call(this));
      _this.width = input.width;
      _this.height = input.height;
      return _this;
    }

    createClass_default()(Dimension, [{
      key: "valueOf",
      value: function valueOf() {
        return [this.width, this.height];
      }
    }]);

    return Dimension;
  }(PropValueType);

  PropTypes.Dimension = Dimension;
  /**
   * 位置
   */

  var Position =
  /*#__PURE__*/
  function (_PropValueType2) {
    inherits_default()(Position, _PropValueType2);

    function Position(input) {
      var _this2;

      classCallCheck_default()(this, Position);

      _this2 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Position).call(this));
      _this2.x = input.x;
      _this2.y = input.y;
      _this2.z = input.z;
      return _this2;
    }

    createClass_default()(Position, [{
      key: "valueOf",
      value: function valueOf() {
        return this.z ? [this.x, this.y, this.z] : [this.x, this.y];
      }
    }]);

    return Position;
  }(PropValueType);

  PropTypes.Position = Position;
  /**
   * 百分比
   */

  var Percent =
  /*#__PURE__*/
  function (_PropValueType3) {
    inherits_default()(Percent, _PropValueType3);

    function Percent(number) {
      var _this3;

      classCallCheck_default()(this, Percent);

      _this3 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Percent).call(this));

      if (typeof number === 'string') {
        number = parseInt(number, 10);
      }

      _this3.number = number;
      return _this3;
    }

    createClass_default()(Percent, [{
      key: "valueOf",
      value: function valueOf() {
        return this.number + '%';
      }
    }]);

    return Percent;
  }(PropValueType);

  PropTypes.Percent = Percent;
  /**
   * 数值范围
   */

  var Range =
  /*#__PURE__*/
  function (_PropValueType4) {
    inherits_default()(Range, _PropValueType4);

    function Range(input) {
      var _this4;

      classCallCheck_default()(this, Range);

      _this4 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Range).call(this));
      _this4.value = input ? [parseInt(input[0] + '', 10), parseInt(input[1] + '', 10)] : undefined;
      return _this4;
    }

    createClass_default()(Range, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Range;
  }(PropValueType);

  PropTypes.Range = Range;
  /**
   * 纯Json数据
   */

  var Json =
  /*#__PURE__*/
  function (_PropValueType5) {
    inherits_default()(Json, _PropValueType5);

    function Json(input) {
      var _this5;

      classCallCheck_default()(this, Json);

      _this5 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Json).call(this));
      _this5.value = input;
      return _this5;
    }

    createClass_default()(Json, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Json;
  }(PropValueType);

  PropTypes.Json = Json;
  /**
   * 样式集
   */

  var Styles =
  /*#__PURE__*/
  function (_PropValueType6) {
    inherits_default()(Styles, _PropValueType6);

    function Styles(input) {
      var _this6;

      classCallCheck_default()(this, Styles);

      _this6 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Styles).call(this));
      _this6.value = input;
      return _this6;
    }

    createClass_default()(Styles, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Styles;
  }(PropValueType);

  PropTypes.Styles = Styles;
  /**
   * 设定主题
   */

  var Theme =
  /*#__PURE__*/
  function (_PropValueType7) {
    inherits_default()(Theme, _PropValueType7);

    function Theme(input) {
      var _this7;

      classCallCheck_default()(this, Theme);

      _this7 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Theme).call(this));
      _this7.name = input;
      return _this7;
    }

    createClass_default()(Theme, [{
      key: "valueOf",
      value: function valueOf() {
        return this.name;
      }
    }]);

    return Theme;
  }(PropValueType);

  PropTypes.Theme = Theme;
  /**
   * 颜色序列
   */

  var Colors =
  /*#__PURE__*/
  function (_PropValueType8) {
    inherits_default()(Colors, _PropValueType8);

    function Colors(input) {
      var _this8;

      classCallCheck_default()(this, Colors);

      _this8 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Colors).call(this));
      _this8.value = input;
      return _this8;
    }

    createClass_default()(Colors, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Colors;
  }(PropValueType);

  PropTypes.Colors = Colors;
  /**
   * 选项
   */

  var Select =
  /*#__PURE__*/
  function (_PropValueType9) {
    inherits_default()(Select, _PropValueType9);

    function Select(input) {
      var _this9;

      classCallCheck_default()(this, Select);

      _this9 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Select).call(this));
      _this9.value = input;
      return _this9;
    }

    createClass_default()(Select, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Select;
  }(PropValueType);

  PropTypes.Select = Select;
  /**
   * 尺码
   */

  var Size =
  /*#__PURE__*/
  function (_PropValueType10) {
    inherits_default()(Size, _PropValueType10);

    function Size(input) {
      var _this10;

      classCallCheck_default()(this, Size);

      _this10 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Size).call(this));
      _this10.value = input;
      return _this10;
    }

    createClass_default()(Size, [{
      key: "valueOf",
      value: function valueOf() {
        return this.value;
      }
    }]);

    return Size;
  }(PropValueType);

  PropTypes.Size = Size;
})(PropTypes_PropTypes || (PropTypes_PropTypes = {}));

/* harmony default export */ var inspectable_PropTypes = (PropTypes_PropTypes);
// CONCATENATED MODULE: ./support/designtime/inspectable/index.ts



/* harmony default export */ var inspectable = (inspectable_Inspectable);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ab606b96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/Inspector.vue?vue&type=template&id=4640e864&
var Inspectorvue_type_template_id_4640e864_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inspector"},[_c('div',{staticClass:"front",on:{"click":_vm.onFrontClick}},[_c('q-toolbar',{attrs:{"dark":""}},[_c('q-toolbar-title',[_vm._v("属性")]),_c('q-btn-dropdown',{staticClass:"realm-select",attrs:{"stretch":"","flat":"","dark":"","label":_vm.getLabel(),"menu-anchor":"top left"}},[_c('q-list',{staticClass:"inspector-realm-menu bg-primary",staticStyle:{"width":"160px"},attrs:{"dark":""}},[_c('q-item',{attrs:{"clickable":""},on:{"click":function($event){return _vm.applyProps('main')}}},[_c('q-item-section',[_c('q-item-label',[_vm._v("外层图表")])],1)],1),_c('q-item-label',{attrs:{"header":""}},[_vm._v("内嵌图表")]),_vm._l((_vm.value.layers),function(layer,index){return _c('q-item',{key:index,attrs:{"clickable":""},on:{"click":function($event){return _vm.applyProps('layer-' + index)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(layer.name))])],1)],1)}),_c('q-item-label',{attrs:{"header":""}},[_vm._v("内嵌组件")]),_c('q-item',{attrs:{"clickable":""}},[_c('q-item-section',[_c('q-item-label',[_vm._v("pa-tooltiip")])],1)],1)],2)],1)],1),_c('q-tabs',{attrs:{"dense":"","inline-label":"","align":"right","breakpoint":0},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.tabs),function(t){return _c('q-tab',{key:t.name,attrs:{"name":t.name,"label":t.label}})}),1),_c('q-tab-panels',{attrs:{"animated":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.tabs),function(t){return _c('q-tab-panel',{key:t.name,attrs:{"name":t.name}},[(_vm.props.length > 0)?_c('q-list',{staticClass:"items"},_vm._l((_vm.props.filter(function (p) { return p.category === t.name; }).sort(function (a, b) { return a.order - b.order; })),function(prop,index){return _c('q-item',{key:index},[_c('q-item-section',[(prop.input)?_c('div',{staticClass:"prop-item"},[_c(prop.input,{tag:"component",attrs:{"value":prop},on:{"change":function($event){return _vm.onPropChange(prop.name, $event)},"drawerRequired":_vm.callDrawer}})],1):_c('div',{staticClass:"prop-item-na"},[_c('h6',[_vm._v(_vm._s(prop.label))]),_c('p',[_vm._v("尚未实现")])])])],1)}),1):_vm._e()],1)}),1),(_vm.value.length === 0)?_c('div',{staticClass:"empty full-height"},[_c('h6',{staticClass:"info text-center"},[_vm._v("无可用配置项")])]):_vm._e()],1),_c('div',{staticClass:"drawer",class:{'active': _vm.drawerActive}},[_c('div',{staticClass:"color-picker-container"},[(_vm.drawerColor)?_c('q-color',{staticClass:"color-picker",attrs:{"dark":"","value":_vm.drawerColor},on:{"input":_vm.onColorPickerInput}}):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./support/designtime/inspector/Inspector.vue?vue&type=template&id=4640e864&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("448a");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./support/designtime/inspector/inspector.css
var inspector = __webpack_require__("d556");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QList.js


/* harmony default export */ var QList = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QList',
  props: {
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    dark: Boolean,
    padding: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'q-list--bordered': this.bordered,
        'q-list--dense': this.dense,
        'q-list--separator': this.separator,
        'q-list--dark': this.dark,
        'q-list--padding': this.padding
      };
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-list',
      class: this.classes,
      on: this.$listeners
    }, Object(slot["a" /* default */])(this, 'default'));
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItem.js + 1 modules
var QItem = __webpack_require__("6ab5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItemSection.js
var QItemSection = __webpack_require__("033f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/list/QItemLabel.js
var QItemLabel = __webpack_require__("e208");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js + 2 modules
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/color/QColor.js + 2 modules
var QColor = __webpack_require__("b498");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js


/* harmony default export */ var QToolbar = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QToolbar',
  props: {
    inset: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar row no-wrap items-center',
      class: this.inset ? 'q-toolbar--inset' : null,
      on: this.$listeners
    }, Object(slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js


/* harmony default export */ var QToolbarTitle = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QToolbarTitle',
  props: {
    shrink: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar__title ellipsis',
      class: this.shrink === true ? 'col-shrink' : null,
      on: this.$listeners
    }, Object(slot["a" /* default */])(this, 'default'));
  }
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/btn-mixin.js + 1 modules
var btn_mixin = __webpack_require__("628b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtnGroup.js
var QBtnGroup = __webpack_require__("8c8f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 5 modules
var QMenu = __webpack_require__("4e73");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/QBtnDropdown.js








/* harmony default export */ var QBtnDropdown = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QBtnDropdown',
  mixins: [btn_mixin["a" /* default */]],
  props: {
    value: Boolean,
    split: Boolean,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: 'bottom right'
    },
    menuSelf: {
      type: String,
      default: 'top right'
    },
    disableMainBtn: Boolean,
    disableDropdown: Boolean
  },
  data: function data() {
    return {
      showing: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.$refs.menu !== void 0 && this.$refs.menu[val ? 'show' : 'hide']();
    }
  },
  render: function render(h) {
    var _this = this;

    var label = this.$scopedSlots.label !== void 0 ? this.$scopedSlots.label() : [];
    var Arrow = [h(QIcon["a" /* default */], {
      props: {
        name: this.$q.iconSet.arrow.dropdown
      },
      staticClass: 'q-btn-dropdown__arrow',
      class: {
        'rotate-180': this.showing,
        'q-btn-dropdown__arrow-container': this.split === false
      }
    })];
    this.disableDropdown !== true && Arrow.push(h(QMenu["a" /* default */], {
      ref: 'menu',
      props: {
        cover: this.cover,
        fit: true,
        persistent: this.persistent,
        autoClose: this.autoClose,
        anchor: this.menuAnchor,
        self: this.menuSelf,
        contentClass: this.contentClass,
        contentStyle: this.contentStyle
      },
      on: {
        'before-show': function beforeShow(e) {
          _this.showing = true;

          _this.$emit('before-show', e);
        },
        show: function show(e) {
          _this.$emit('show', e);

          _this.$emit('input', true);
        },
        'before-hide': function beforeHide(e) {
          _this.showing = false;

          _this.$emit('before-hide', e);
        },
        hide: function hide(e) {
          _this.$emit('hide', e);

          _this.$emit('input', false);
        }
      }
    }, Object(slot["a" /* default */])(this, 'default')));

    if (this.split === false) {
      return h(QBtn["a" /* default */], {
        class: 'q-btn-dropdown q-btn-dropdown--simple',
        props: objectSpread_default()({}, this.$props, {
          disable: this.disable === true || this.disableMainBtn === true,
          noWrap: true
        }),
        on: {
          click: function click(e) {
            _this.$emit('click', e);
          }
        }
      }, label.concat(Arrow));
    }

    var Btn = h(QBtn["a" /* default */], {
      class: 'q-btn-dropdown--current',
      props: objectSpread_default()({}, this.$props, {
        disable: this.disable === true || this.disableMainBtn === true,
        noWrap: true,
        iconRight: this.iconRight
      }),
      on: {
        click: function click(e) {
          _this.hide();

          _this.$emit('click', e);
        }
      }
    }, label);
    return h(QBtnGroup["a" /* default */], {
      props: {
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        unelevated: this.unelevated,
        glossy: this.glossy
      },
      staticClass: 'q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item',
      class: this.stretch === true ? 'self-stretch no-border-radius' : null
    }, [Btn, h(QBtn["a" /* default */], {
      staticClass: 'q-btn-dropdown__arrow-container',
      props: {
        disable: this.disable === true || this.disableDropdown === true,
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        size: this.size,
        color: this.color,
        textColor: this.textColor,
        dense: this.dense,
        ripple: this.ripple
      }
    }, Arrow)]);
  },
  methods: {
    toggle: function toggle(evt) {
      this.$refs.menu && this.$refs.menu.toggle(evt);
    },
    show: function show(evt) {
      this.$refs.menu && this.$refs.menu.show(evt);
    },
    hide: function hide(evt) {
      this.$refs.menu && this.$refs.menu.hide(evt);
    }
  },
  mounted: function mounted() {
    this.value === true && this.show();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/space/QSpace.js

/* harmony default export */ var QSpace = (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({
  name: 'QSpace',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-space'
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
/* harmony default export */ var ClosePopup = ({
  name: 'close-popup',
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value;
    var ctx = {
      enabled: value !== false,
      handler: function handler(evt) {
        // allow @click to be emitted
        ctx.enabled !== false && setTimeout(function () {
          var vm = (vnode.componentInstance || vnode.context).$root;
          vm.__qClosePopup !== void 0 && vm.__qClosePopup(evt);
        });
      },
      handlerKey: function handlerKey(evt) {
        evt.keyCode === 13 && ctx.handler(evt);
      }
    };

    if (el.__qclosepopup !== void 0) {
      el.__qclosepopup_old = el.__qclosepopup;
    }

    el.__qclosepopup = ctx;
    el.addEventListener('click', ctx.handler);
    el.addEventListener('keyup', ctx.handlerKey);
  },
  update: function update(el, _ref2) {
    var value = _ref2.value;

    if (el.__qclosepopup !== void 0) {
      el.__qclosepopup.enabled = value !== false;
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qclosepopup_old || el.__qclosepopup;

    if (ctx !== void 0) {
      el.removeEventListener('click', ctx.handler);
      el.removeEventListener('keyup', ctx.handlerKey);
      delete el[el.__qclosepopup_old ? '__qclosepopup_old' : '__qclosepopup'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./support/designtime/inspector/Inspector.vue?vue&type=script&lang=js&

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















/* harmony default export */ var Inspectorvue_type_script_lang_js_ = ({
  name: 'PaInspector',
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    uuid: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      components: {},
      props: this.value.main,
      realm: 'main',
      // 右上角属性组
      tabs: [{
        name: 'props',
        label: '关键属性'
      }, {
        name: 'styles',
        label: '样式'
      }, {
        name: 'events',
        label: '联动'
      }],
      tab: 'props',
      drawerActive: false,
      drawerColor: '',
      drawColorCallback: undefined
    };
  },
  computed: {},
  watch: {
    value: {
      handler: function handler() {
        this.applyProps();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var req = __webpack_require__("907e");

    req.keys().forEach(function (filename) {
      var name = filename.match(/([\w\-]+)\.vue$/)[1];
      _this.components[name] = req(filename).default;
    });
    this.applyProps();
  },
  methods: {
    onPropChange: function onPropChange(name, prop) {
      // 更新本地数据并向上通知
      console.log('Inspector.vue________________________onPropChange', prop);

      var updated = toConsumableArray_default()(this.props);

      updated.forEach(function (p) {
        if (p.name === name) {
          p.value = prop.value;
        }
      });
      this.props = updated;
      this.$emit('change', [prop]);
    },
    applyProps: function applyProps(realm) {
      var _this2 = this;

      this.realm = realm || 'main';
      var activeProps = [];

      if (this.realm === 'main') {
        activeProps = this.value.main;
      } else if (this.realm.startsWith('layer')) {
        var index = parseInt(this.realm.replace('layer-', ''), 10);
        activeProps = this.value.layers[index].props;
      } else if (this.realm.startsWith('accessory')) {
        var _index = parseInt(this.realm.replace('accessory-', ''), 10);

        activeProps = this.value.accessories[_index].props;
      }

      this.props = activeProps.map(function (p) {
        var type = typeof p.type === 'string' ? p.type : p.type.name;
        p.input = _this2.components[type];
        return p;
      });
    },
    callDrawer: function callDrawer(data) {
      var command = data.command,
          payload = data.payload;

      if (payload.data === false) {
        this.drawerActive = false;
      } else {
        this.drawerActive = true;
        this.drawerColor = payload.data;
        this.drawColorCallback = payload.callback;
      }
    },
    onColorPickerInput: function onColorPickerInput(value) {
      if (this.drawColorCallback) {
        this.drawColorCallback.call(this, value);
      }
    },
    onFrontClick: function onFrontClick() {
      this.callDrawer({
        command: 'command',
        payload: {
          data: false
        }
      });
    },
    getLabel: function getLabel() {
      if (this.realm === 'main') {
        return '外层图表';
      } else if (this.realm.startsWith('layer')) {
        var index = parseInt(this.realm.replace('layer-', ''), 10);
        var t = this.value.layers[index].name;
        return '内嵌图表:' + t;
      } else if (this.realm.startsWith('accessory')) {
        var _index2 = parseInt(ths.realm.replace('accessory-', ''), 10);

        var _t = this.value.accessories[_index2].name;
        return '内嵌图表:' + _t;
      }

      return '(NA)';
    }
  },
  components: {
    QList: QList,
    QItem: QItem["a" /* default */],
    QItemSection: QItemSection["a" /* default */],
    QItemLabel: QItemLabel["a" /* default */],
    QTabs: QTabs["a" /* default */],
    QTab: QTab["a" /* default */],
    QTabPanels: QTabPanels["a" /* default */],
    QTabPanel: QTabPanel["a" /* default */],
    QColor: QColor["a" /* default */],
    QToolbar: QToolbar,
    QToolbarTitle: QToolbarTitle,
    QBtnDropdown: QBtnDropdown,
    QSpace: QSpace,
    ClosePopup: ClosePopup
  }
});
// CONCATENATED MODULE: ./support/designtime/inspector/Inspector.vue?vue&type=script&lang=js&
 /* harmony default export */ var inspector_Inspectorvue_type_script_lang_js_ = (Inspectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./support/designtime/inspector/Inspector.vue?vue&type=style&index=0&lang=stylus&
var Inspectorvue_type_style_index_0_lang_stylus_ = __webpack_require__("fb1c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./support/designtime/inspector/Inspector.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  inspector_Inspectorvue_type_script_lang_js_,
  Inspectorvue_type_template_id_4640e864_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Inspector = (component.exports);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/polyfills.js
/* eslint-disable no-extend-native, one-var, no-self-compare */


function polyfills_assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];

    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));

    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }

  return to;
}

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: polyfills_assign
  });
}

if (!Number.isInteger) {
  Number.isInteger = function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchEl, startFrom) {
    'use strict';

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;

    if (len === 0) {
      return false;
    }

    var n = parseInt(startFrom, 10) || 0;
    var k;

    if (n >= 0) {
      k = n;
    } else {
      k = len + n;

      if (k < 0) {
        k = 0;
      }
    }

    var curEl;

    while (k < len) {
      curEl = O[k];

      if (searchEl === curEl || searchEl !== searchEl && curEl !== curEl) {
        // NaN !== NaN
        return true;
      }

      k++;
    }

    return false;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (str, position) {
    position = position || 0;
    return this.substr(position, str.length) === str;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (str, position) {
    var subjectString = this.toString();

    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }

    position -= str.length;
    var lastIndex = subjectString.indexOf(str, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (Platform["c" /* isSSR */] === false) {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this,
          elements = (element.document || element.ownerDocument).querySelectorAll(selector),
          index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var el = this;

      while (el && el.nodeType === 1) {
        if (el.matches(selector)) {
          return el;
        }

        el = el.parentNode;
      }

      return null;
    };
  } // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }

      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var value;
      var list = Object(this),
          length = list.length >>> 0,
          thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        value = list[i];

        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }

      return undefined;
    }
  });
}
// EXTERNAL MODULE: ./node_modules/quasar/package.json
var quasar_package = __webpack_require__("c0a8");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/debounce.js
var debounce = __webpack_require__("1c16");

// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/Screen.js




var SIZE_LIST = ['sm', 'md', 'lg', 'xl'];
/* harmony default export */ var Screen = ({
  width: 0,
  height: 0,
  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  lt: {
    sm: true,
    md: true,
    lg: true,
    xl: true
  },
  gt: {
    xs: false,
    sm: false,
    md: false,
    lg: false
  },
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  setSizes: function setSizes() {},
  setDebounce: function setDebounce() {},
  install: function install($q, queues) {
    var _this = this;

    if (Platform["c" /* isSSR */] === true) {
      $q.screen = this;
      return;
    }

    var update = function update(force) {
      if (window.innerHeight !== _this.height) {
        _this.height = window.innerHeight;
      }

      var w = window.innerWidth;

      if (w !== _this.width) {
        _this.width = w;
      } else if (force !== true) {
        return;
      }

      var s = _this.sizes;
      _this.gt.xs = w >= s.sm;
      _this.gt.sm = w >= s.md;
      _this.gt.md = w >= s.lg;
      _this.gt.lg = w >= s.xl;
      _this.lt.sm = w < s.sm;
      _this.lt.md = w < s.md;
      _this.lt.lg = w < s.lg;
      _this.lt.xl = w < s.xl;
      _this.xs = _this.lt.sm;
      _this.sm = _this.gt.xs && _this.lt.md;
      _this.md = _this.gt.sm && _this.lt.lg;
      _this.lg = _this.gt.md && _this.lt.xl;
      _this.xl = w > s.xl;
    };

    var updateEvt,
        updateSizes = {},
        updateDebounce = 16;

    this.setSizes = function (sizes) {
      SIZE_LIST.forEach(function (name) {
        if (sizes[name] !== void 0) {
          updateSizes[name] = sizes[name];
        }
      });
    };

    this.setDebounce = function (deb) {
      updateDebounce = deb;
    };

    var start = function start() {
      var style = getComputedStyle(document.body); // if css props available

      if (style.getPropertyValue('--q-size-sm')) {
        SIZE_LIST.forEach(function (name) {
          _this.sizes[name] = parseInt(style.getPropertyValue("--q-size-".concat(name)), 10);
        });
      }

      _this.setSizes = function (sizes) {
        SIZE_LIST.forEach(function (name) {
          if (sizes[name]) {
            _this.sizes[name] = sizes[name];
          }
        });
        update(true);
      };

      _this.setDebounce = function (delay) {
        var fn = function fn() {
          update();
        };

        updateEvt && window.removeEventListener('resize', updateEvt, utils_event["d" /* listenOpts */].passive);
        updateEvt = delay > 0 ? Object(debounce["a" /* default */])(fn, delay) : fn;
        window.addEventListener('resize', updateEvt, utils_event["d" /* listenOpts */].passive);
      };

      _this.setDebounce(updateDebounce);

      if (Object.keys(updateSizes).length > 0) {
        _this.setSizes(updateSizes);

        updateSizes = void 0; // free up memory
      } else {
        update();
      }
    };

    if (Platform["b" /* fromSSR */] === true) {
      queues.takeover.push(start);
    } else {
      start();
    }

    external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.util.defineReactive($q, 'screen', this);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/history.js
var src_history = __webpack_require__("582c");

// CONCATENATED MODULE: ./node_modules/quasar/lang/en-us.js
/* harmony default export */ var en_us = ({
  isoName: 'en-us',
  nativeName: 'English (US)',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh'
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: function selectedRecords(rows) {
      return rows === 1 ? '1 record selected.' : (rows === 0 ? 'No' : rows) + ' records selected.';
    },
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: function pagination(start, end, total) {
      return start + '-' + end + ' of ' + total;
    },
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    header1: 'Header 1',
    header2: 'Header 2',
    header3: 'Header 3',
    header4: 'Header 4',
    header5: 'Header 5',
    header6: 'Header 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/lang.js



/* harmony default export */ var src_lang = ({
  install: function install($q, queues, lang) {
    var _this = this;

    if (Platform["c" /* isSSR */] === true) {
      queues.server.push(function (q, ctx) {
        var opt = {
          lang: q.lang.isoName,
          dir: q.lang.rtl === true ? 'rtl' : 'ltr'
        },
            fn = ctx.ssr.setHtmlAttrs;

        if (typeof fn === 'function') {
          fn(opt);
        } else {
          ctx.ssr.Q_HTML_ATTRS = Object.keys(opt).map(function (key) {
            return "".concat(key, "=").concat(opt[key]);
          }).join(' ');
        }
      });
    }

    this.set = function () {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : en_us;
      lang.set = _this.set;
      lang.getLocale = _this.getLocale;
      lang.rtl = lang.rtl || false;

      if (Platform["c" /* isSSR */] === false) {
        var el = document.documentElement;
        el.setAttribute('dir', lang.rtl ? 'rtl' : 'ltr');
        el.setAttribute('lang', lang.isoName);
      }

      if (Platform["c" /* isSSR */] === true || $q.lang !== void 0) {
        $q.lang = lang;
      } else {
        external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.util.defineReactive($q, 'lang', lang);
      }

      _this.isoName = lang.isoName;
      _this.nativeName = lang.nativeName;
      _this.props = lang;
    };

    this.set(lang);
  },
  getLocale: function getLocale() {
    if (Platform["c" /* isSSR */] === true) {
      return;
    }

    var val = navigator.language || navigator.languages[0] || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;

    if (val) {
      return val.toLowerCase();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__("bc78");

// CONCATENATED MODULE: ./node_modules/quasar/src/body.js



function getMobilePlatform(is) {
  if (is.ios === true) return 'ios';
  if (is.android === true) return 'android';
  if (is.winphone === true) return 'winphone';
}

function getBodyClasses(_ref, cfg) {
  var is = _ref.is,
      has = _ref.has,
      within = _ref.within;
  var cls = [is.desktop ? 'desktop' : 'mobile', has.touch ? 'touch' : 'no-touch'];

  if (is.mobile === true) {
    var mobile = getMobilePlatform(is);

    if (mobile !== void 0) {
      cls.push('platform-' + mobile);
    }
  }

  if (is.cordova === true) {
    cls.push('cordova');

    if (is.ios === true && (cfg.cordova === void 0 || cfg.cordova.iosStatusBarPadding !== false)) {
      cls.push('q-ios-padding');
    }
  } else if (is.electron === true) {
    cls.push('electron');
  }

  within.iframe === true && cls.push('within-iframe');
  return cls;
}

function bodyInit(Platform, cfg) {
  var cls = getBodyClasses(Platform, cfg);

  if (Platform.is.ie === true && Platform.is.versionNumber === 11) {
    cls.forEach(function (c) {
      return document.body.classList.add(c);
    });
  } else {
    document.body.classList.add.apply(document.body.classList, cls);
  }

  if (Platform.is.ios === true) {
    // needed for iOS button active state
    document.body.addEventListener('touchstart', function () {});
  }
}

function setColors(brand) {
  for (var color in brand) {
    Object(colors["g" /* setBrand */])(color, brand[color]);
  }
}

/* harmony default export */ var body = ({
  install: function install($q, queues, cfg) {
    if (Platform["c" /* isSSR */] === true) {
      queues.server.push(function (q, ctx) {
        var cls = getBodyClasses(q.platform, cfg),
            fn = ctx.ssr.setBodyClasses;

        if (typeof fn === 'function') {
          fn(cls);
        } else {
          ctx.ssr.Q_BODY_CLASSES = cls.join(' ');
        }
      });
      return;
    }

    cfg.brand && setColors(cfg.brand);
    bodyInit($q.platform, cfg);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/icon-set/material-icons.js
/* harmony default export */ var material_icons = ({
  name: 'material-icons',
  type: {
    positive: 'check_circle',
    negative: 'warning',
    info: 'info',
    warning: 'priority_high'
  },
  arrow: {
    up: 'arrow_upward',
    right: 'arrow_forward',
    down: 'arrow_downward',
    left: 'arrow_back',
    dropdown: 'arrow_drop_down'
  },
  chevron: {
    left: 'chevron_left',
    right: 'chevron_right'
  },
  colorPicker: {
    spectrum: 'gradient',
    tune: 'tune',
    palette: 'style'
  },
  pullToRefresh: {
    icon: 'refresh'
  },
  carousel: {
    left: 'chevron_left',
    right: 'chevron_right',
    navigationIcon: 'lens',
    thumbnails: 'view_carousel'
  },
  chip: {
    remove: 'cancel',
    selected: 'check'
  },
  datetime: {
    arrowLeft: 'chevron_left',
    arrowRight: 'chevron_right',
    now: 'access_time',
    today: 'today'
  },
  editor: {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    underline: 'format_underlined',
    unorderedList: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    subscript: 'vertical_align_bottom',
    superscript: 'vertical_align_top',
    hyperlink: 'link',
    toggleFullscreen: 'fullscreen',
    quote: 'format_quote',
    left: 'format_align_left',
    center: 'format_align_center',
    right: 'format_align_right',
    justify: 'format_align_justify',
    print: 'print',
    outdent: 'format_indent_decrease',
    indent: 'format_indent_increase',
    removeFormat: 'format_clear',
    formatting: 'text_format',
    fontSize: 'format_size',
    align: 'format_align_left',
    hr: 'remove',
    undo: 'undo',
    redo: 'redo',
    header: 'format_size',
    code: 'code',
    size: 'format_size',
    font: 'font_download'
  },
  expansionItem: {
    icon: 'keyboard_arrow_down',
    denseIcon: 'arrow_drop_down'
  },
  fab: {
    icon: 'add',
    activeIcon: 'close'
  },
  field: {
    clear: 'cancel',
    error: 'error'
  },
  pagination: {
    first: 'first_page',
    prev: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
    last: 'last_page'
  },
  rating: {
    icon: 'grade'
  },
  stepper: {
    done: 'check',
    active: 'edit',
    error: 'warning'
  },
  tabs: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down'
  },
  table: {
    arrowUp: 'arrow_upward',
    warning: 'warning',
    prevPage: 'chevron_left',
    nextPage: 'chevron_right'
  },
  tree: {
    icon: 'play_arrow'
  },
  uploader: {
    done: 'done',
    clear: 'clear',
    add: 'add_box',
    upload: 'cloud_upload',
    removeQueue: 'clear_all',
    removeUploaded: 'done_all'
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/icon-set.js



/* harmony default export */ var icon_set = ({
  __installed: false,
  install: function install($q, iconSet) {
    var _this = this;

    this.set = function () {
      var iconDef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : material_icons;
      iconDef.set = _this.set;

      if (Platform["c" /* isSSR */] === true || $q.iconSet !== void 0) {
        $q.iconSet = iconDef;
      } else {
        external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.util.defineReactive($q, 'iconSet', iconDef);
      }

      _this.name = iconDef.name;
      _this.def = iconDef;
    };

    this.set(iconSet);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/install.js








var install_queues = {
  server: [],
  // on SSR update
  takeover: [] // on client takeover

};
var install_$q = {
  version: quasar_package["a" /* version */]
};
/* harmony default export */ var src_install = (function (Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (this.__installed) {
    return;
  }

  this.__installed = true;
  var cfg = opts.config || {}; // required plugins

  Platform["a" /* default */].install(install_$q, install_queues);
  body.install(install_$q, install_queues, cfg);
  Screen.install(install_$q, install_queues);
  src_history["a" /* default */].install(install_$q, cfg);
  src_lang.install(install_$q, install_queues, opts.lang);
  icon_set.install(install_$q, opts.iconSet);

  if (Platform["c" /* isSSR */] === true) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        this.$q = this.$root.$options.$q;
      }
    });
  } else {
    Vue.prototype.$q = install_$q;
  }

  opts.components && Object.keys(opts.components).forEach(function (key) {
    var c = opts.components[key];

    if (typeof c === 'function') {
      Vue.component(c.options.name, c);
    }
  });
  opts.directives && Object.keys(opts.directives).forEach(function (key) {
    var d = opts.directives[key];

    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d);
    }
  });

  if (opts.plugins) {
    var param = {
      $q: install_$q,
      queues: install_queues,
      cfg: cfg
    };
    Object.keys(opts.plugins).forEach(function (key) {
      var p = opts.plugins[key];

      if (typeof p.install === 'function' && p !== Platform["a" /* default */] && p !== Screen) {
        p.install(param);
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/ssr-update.js


var mixin = {
  mounted: function mounted() {
    var _this = this;

    install_queues.takeover.forEach(function (run) {
      run(_this.$q);
    });
  }
};
/* harmony default export */ var ssr_update = (function (ctx) {
  if (ctx.ssr) {
    var q = objectSpread_default()({}, install_$q);

    Object.assign(ctx.ssr, {
      Q_HEAD_TAGS: '',
      Q_BODY_ATTRS: '',
      Q_BODY_TAGS: ''
    });
    install_queues.server.forEach(function (run) {
      run(q, ctx);
    });
    ctx.app.$q = q;
  } else {
    var mixins = ctx.app.mixins || [];

    if (!mixins.includes(mixin)) {
      ctx.app.mixins = mixins.concat(mixin);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/vue-plugin.js





/* harmony default export */ var vue_plugin = ({
  version: quasar_package["a" /* version */],
  install: src_install,
  lang: src_lang,
  iconSet: icon_set,
  ssrUpdate: ssr_update
});
// CONCATENATED MODULE: ./node_modules/quasar/icon-set/fontawesome-v5.js
/* harmony default export */ var fontawesome_v5 = ({
  name: 'fontawesome-v5',
  type: {
    positive: 'fas fa-check',
    negative: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation'
  },
  arrow: {
    up: 'fas fa-arrow-up',
    right: 'fas fa-arrow-right',
    down: 'fas fa-arrow-down',
    left: 'fas fa-arrow-left',
    dropdown: 'fas fa-caret-down'
  },
  chevron: {
    left: 'fas fa-chevron-left',
    right: 'fas fa-chevron-right'
  },
  colorPicker: {
    spectrum: 'fas fa-eye-dropper',
    tune: 'fas fa-sliders-h',
    palette: 'fas fa-swatchbook'
  },
  pullToRefresh: {
    icon: 'fas fa-sync-alt'
  },
  carousel: {
    left: 'fas fa-chevron-left',
    right: 'fas fa-chevron-right',
    // TODO
    navigationIcon: 'fas fa-circle',
    thumbnails: 'fas fa-th'
  },
  chip: {
    remove: 'fas fa-times-circle',
    selected: 'fas fa-check'
  },
  datetime: {
    arrowLeft: 'fas fa-chevron-left',
    arrowRight: 'fas fa-chevron-right',
    now: 'far fa-clock',
    today: 'far fa-calendar-check'
  },
  editor: {
    bold: 'fas fa-bold',
    italic: 'fas fa-italic',
    strikethrough: 'fas fa-strikethrough',
    underline: 'fas fa-underline',
    unorderedList: 'fas fa-list-ul',
    orderedList: 'fas fa-list-ol',
    subscript: 'fas fa-subscript',
    superscript: 'fas fa-superscript',
    hyperlink: 'fas fa-link',
    toggleFullscreen: 'fas fa-expand-arrows-alt',
    quote: 'fas fa-quote-right',
    left: 'fas fa-align-left',
    center: 'fas fa-align-center',
    right: 'fas fa-align-right',
    justify: 'fas fa-align-justify',
    print: 'fas fa-print',
    outdent: 'fas fa-outdent',
    indent: 'fas fa-indent',
    removeFormat: 'fas fa-eraser',
    formatting: 'fas fa-heading',
    fontSize: 'fas fa-text-height',
    align: 'fas fa-align-left',
    hr: 'far fa-minus-square',
    undo: 'fas fa-undo',
    redo: 'fas fa-redo',
    header: 'fas fa-heading',
    code: 'fas fa-code',
    size: 'fas fa-text-height',
    font: 'fas fa-font'
  },
  expansionItem: {
    icon: 'fas fa-chevron-down',
    denseIcon: 'fas fa-caret-down'
  },
  fab: {
    icon: 'fas fa-plus',
    activeIcon: 'fas fa-times'
  },
  field: {
    clear: 'fas fa-times-circle',
    error: 'fas fa-exclamation-circle'
  },
  pagination: {
    first: 'fas fa-step-backward',
    prev: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    last: 'fas fa-step-forward'
  },
  rating: {
    icon: 'fas fa-star'
  },
  stepper: {
    done: 'fas fa-check',
    active: 'fas fa-pencil-alt',
    error: 'fas fa-exclamation-triangle'
  },
  tabs: {
    left: 'fas fa-chevron-left',
    right: 'fas fa-chevron-right',
    up: 'fas fa-chevron-up',
    down: 'fas fa-chevron-down'
  },
  table: {
    arrowUp: 'fas fa-arrow-up',
    warning: 'fas fa-exclamation-triangle',
    prevPage: 'fas fa-chevron-left',
    nextPage: 'fas fa-chevron-right'
  },
  tree: {
    icon: 'fas fa-play'
  },
  uploader: {
    done: 'fas fa-check',
    clear: 'fas fa-times',
    add: 'fas fa-plus-square',
    upload: 'fas fa-upload',
    removeQueue: 'fas fa-stream',
    removeUploaded: 'fas fa-clipboard-check'
  }
});
// CONCATENATED MODULE: ./support/designtime/inspector/quasar.js


/* harmony default export */ var quasar = (function (Vue, options) {
  Vue.use(vue_plugin, {
    iconSet: fontawesome_v5
  });
});
// CONCATENATED MODULE: ./support/designtime/inspector/index.ts


 // @ts-ignore

external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.use(quasar);
/* harmony default export */ var designtime_inspector = (Inspector);
// CONCATENATED MODULE: ./support/designtime/index.ts



// CONCATENATED MODULE: ./support/index.ts


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Inspector */__webpack_require__.d(__webpack_exports__, "Inspector", function() { return designtime_inspector; });
/* concated harmony reexport Inspectable */__webpack_require__.d(__webpack_exports__, "Inspectable", function() { return inspectable; });
/* concated harmony reexport Prop */__webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop["a" /* default */]; });
/* concated harmony reexport PropTypes */__webpack_require__.d(__webpack_exports__, "PropTypes", function() { return inspectable_PropTypes; });




/***/ }),

/***/ "fb1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9497");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
//# sourceMappingURL=support.common.js.map