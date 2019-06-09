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

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "0676":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "0730":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var symbolSize = props.symbol;
  return {
    symbolSize: symbolSize
  };
});

/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "0949":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  if (props.gap === undefined) return {};
  var xAxis = [{
    boundaryGap: props.gap
  }];
  return {
    xAxis: xAxis
  };
});

/***/ }),

/***/ "09fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  var item = {
    areaStyle: {
      normal: {
        opacity: 0.8
      }
    }
  };
  return series.map(function (s) {
    return Object.assign({}, s, item);
  });
});

/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0dbc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'title-center',
  props: {
    styles: {
      title: {
        position: 'center'
      }
    }
  }
});

/***/ }),

/***/ "0e09":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3d-bar.ts": "d1b2",
	"./baidu-map-scatter.ts": "5533",
	"./bar.ts": "b500",
	"./funnel.ts": "340a",
	"./gauge.ts": "3d6c",
	"./line.ts": "ca1c",
	"./lines.ts": "b616",
	"./liquid.ts": "c1c1",
	"./network.ts": "f43a",
	"./pictorialBar.ts": "a2e2",
	"./pie.ts": "4482",
	"./polar.ts": "2ef1",
	"./radar.ts": "09fb",
	"./ring.ts": "ebdc",
	"./scatter.ts": "8ee9",
	"./tree.ts": "2095",
	"./treemap.ts": "ba21"
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
webpackContext.id = "0e09";

/***/ }),

/***/ "0ee1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (rules) {
  var result = {};
  var line = rules.line;

  if (typeof line === 'string') {
    if ('dotted,dashed'.split(',').includes(line)) {
      result.type = line;
    }
  } else {}

  return {
    lineStyle: result,
    color: rules.color && rules.color[0]
  };
});

/***/ }),

/***/ "100e":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("cd9d"),
    overRest = __webpack_require__("2286"),
    setToString = __webpack_require__("c1c9");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "1127":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  value: [1800, 1500, 1400, 1400, 1500, 1500],
  name: '上月'
}, {
  value: [1400, 1600, 1600, 1600, 1600, 1600],
  name: '本月'
}]]);

/***/ }),

/***/ "112d":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar-simple.ts": "a157",
	"./funnel-simple.ts": "f4aa",
	"./gdp-by-years-dataset.ts": "fd38",
	"./gdp-by-years.ts": "2d07",
	"./line-simple.ts": "2628",
	"./lines-simple.ts": "210c",
	"./map-scatter.ts": "c7ba",
	"./network-simple.ts": "3752",
	"./pictorialBar-simple.ts": "1644",
	"./pie-simple.ts": "425b",
	"./radar-simple.ts": "1127",
	"./rose-simple.ts": "f8a6",
	"./scatter-medium.ts": "834a",
	"./scatter-simple.ts": "2add",
	"./tree-simple.ts": "9566",
	"./treemap-simple.ts": "ed07"
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
webpackContext.id = "112d";

/***/ }),

/***/ "11b0":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "12f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: [{
    type: 'value',
    show: false
  }],
  yAxis: [{
    show: false
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "1644":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[150, 160, 115, 170, 187]]);

/***/ }),

/***/ "164e":
/***/ (function(module, exports) {

module.exports = require("echarts");

/***/ }),

/***/ "172f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props, providerOptions) {
  var tooltip = props.accessories.tooltip;
  var output = Object.assign({}, providerOptions.tooltip, {
    padding: 0,
    backgroundColor: 'transparent',
    show: true,
    trigger: props.type === 'pie' ? 'item' : 'axis',
    positon: tooltip.positon,
    confine: true
  });

  if (tooltip.formatter) {
    output.borderWidth = 0;
    output.extraCssText = '';
    output.formatter = ['<div class="tooltip">', tooltip.formatter, '</div>'].join('');
  }

  if (tooltip.data) {
    // 当tooltip提供了data，使用对应位置的内容
    // tooltip的dat应与chart的data格式相同
    output.formatter = function (params) {
      var dataIndex = params[0].dataIndex; // X轴位置

      var legend = Array.isArray(props.legend) ? props.legend : props.legend.data;
      var content = tooltip.data.map(function (line, x) {
        return [params.axisValueLabel, legend[x], ': ', line[dataIndex]].join('');
      }).join('<br>');
      return ['<div class="tooltip">', params[0].axisValueLabel, '年<br>', content, '</div>'].join('');
    };
  } // tooltip的坐标轴十字准星指示器


  if (tooltip.axisPointer) {
    output.axisPointer = {
      type: 'cross',
      lineStyle: {
        type: 'dotted'
      }
    };
  }

  return {
    tooltip: output
  };
});

/***/ }),

/***/ "181f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "1857":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'legend-right-vertical',
  props: {
    accessories: {
      legend: {
        x: 'right',
        direction: 'vertical',
        right: 10,
        top: 'middle'
      }
    },
    styles: {
      label: false,
      canvas: {
        center: ['38%', '50%']
      },
      title: {
        left: '28%'
      }
    }
  }
});

/***/ }),

/***/ "1881":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  barWidth: 15
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "1a46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 将styles.label翻译为series内的字段
 * @param rules
 * @param props
 */
/* harmony default export */ __webpack_exports__["default"] = (function (rules) {
  var label = {};
  /***
   * styles.label = '{c}%'
   * styles.label = 'top'
   */

  if (rules.label === false) {
    label = {
      show: false
    };
  } else if (typeof rules.label === 'string') {
    if (['top'].includes(rules.label)) {
      label = {
        show: true,
        position: rules.label
      };
    }
  } else {
    if (rules.label.formats) {
      var formats = rules.label.formats;
      label = {
        normal: {
          formatter: function formatter(params) {
            return ['{name|' + params.name + '}\n', formats.hr ? '{hr|}\n' : '', '{value|' + params.value + '}', rules.label.percent && params.percent ? '\n{percent|' + params.percent + '%}' : ''].join('');
          },
          rich: formats
        }
      };
    } else {
      label = {
        show: true,
        position: rules.label.position,
        offset: rules.label.offset || [0, 0],
        fontSize: rules.label.fontSize
      };
    }
  }

  return {
    label: label
  };
});

/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1cc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false,
  calculable: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "1d20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'no-legend',
  props: {
    styles: {
      label: false
    }
  }
});

/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1f44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var output = {};
  var t = props.symbol.constructor.name;

  if (t === 'String') {
    output.symbol = props.symbol;
  }

  if (t === 'Number') {
    output.symbol = 'circle';
    output.symbolSize = props.symbol;
  }

  if (t === 'Object') {
    output.symbol = props.symbol.shape;
    output.symbol = props.symbol.size;
  }

  return output;
});

/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("42454");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "2095":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  series.forEach(function (s) {
    var item = {
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          color: '#fff'
        }
      }
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "210c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[[{
  coord: [0, 0]
}, {
  coord: [1000, 140]
}], [{
  coord: [0, 100]
}, {
  coord: [1000, 140]
}]]]);

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

/***/ "2286":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("85e3");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("42454");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "2628":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[120, 132, 101, 124, 90, 230], [80, 65, 190, 56, 14, 38], [87, 78, 50, 83, 67, 104], [34, 35, 23, 26, 87, 76], [99, 49, 44, 90, 49, 50]]);

/***/ }),

/***/ "272d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var colors = props.colors;
  return {
    color: colors
  };
});

/***/ }),

/***/ "278c":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("c135");

var iterableToArrayLimit = __webpack_require__("9b42");

var nonIterableRest = __webpack_require__("c240");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2add":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'default',
  value: [[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]]
}]);

/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2d07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([// ['福田区', '罗湖区', '盐田区', '南山区', '宝安区',
[3574.5612, 1976.2459, 540.2693, 3978.4758, 3071.2452, 1884.5820, 742.0341, 3470.4725, 530.7729, 311.0454], [3820.5692, 2161.6969, 585.9975, 4617.7993, 3453.1796, 2139.4243, 852.2589, 3871.1358, 607.9395, 331.2546]]);

/***/ }),

/***/ "2dcb":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "2ec1":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("100e"),
    isIterateeCall = __webpack_require__("9aff");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "2ef1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  var result = [];
  var type = 'bar';
  var max = 100;
  series.forEach(function (s) {
    type = s.type;

    if (s.data && s.data.length > 0) {
      max = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(s.data));
      s.data.map(function (v) {
        result.push({
          value: v
        });
      });
    }
  });
  var addOPtions = {
    angleAxis: {
      clockwise: false,
      interval: 1,
      type: 'category',
      data: props.labelName,
      z: 10,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: '#00c7ff'
      }
    },
    radiusAxis: {
      min: 0,
      max: max,
      // interval:80,
      axisLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value}',
        color: '#b3b7c3'
      },
      splitLine: {
        lineStyle: {
          color: '#313c5c'
        }
      }
    },
    polar: {}
  };
  Object.assign(options, addOPtions);
  var addSerise = {
    type: type,
    itemStyle: {
      color: function color(params) {
        return options.color[params.dataIndex];
      }
    },
    data: result,
    coordinateSystem: 'polar'
  };
  return [addSerise];
});

/***/ }),

/***/ "2f72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/core/shared/styles/Color.ts
var Color = __webpack_require__("769b");

// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__("164e");
var external_echarts_default = /*#__PURE__*/__webpack_require__.n(external_echarts_);

// CONCATENATED MODULE: ./src/providers/echarts/helpers/gradient.ts

/* harmony default export */ var gradient = ({
  make: function make(color) {
    var stops = color.stops.map(function (s, i) {
      return {
        offset: 1 / (color.stops.length - 1) * i,
        color: s
      };
    });
    var result = new external_echarts_default.a.graphic.LinearGradient(0, 0, 0, 1, stops);
    return result;
  }
});
// CONCATENATED MODULE: ./src/providers/echarts/options/series/features/area.ts


/* harmony default export */ var features_area = __webpack_exports__["default"] = (function (props, index) {
  var normalStyle;

  if (props.area === true) {
    return {
      areaStyle: {}
    };
  } else if (props.area) {
    // 解决多个面积图的情况
    var area = props.area[index] || props.area[0];
    normalStyle = {
      normal: Object.assign({}, area.color && {
        color: gradient.make(Color["a" /* Gradient */].from(area.color))
      })
    }; // 冰山图的渐变是itemStyle

    if (props.type === 'pictorialBar') {
      return {
        itemStyle: normalStyle
      };
    } else {
      return {
        areaStyle: normalStyle
      };
    }
  }
});

/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "301d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/formats/bignumber.ts
/* harmony default export */ var bignumber = ({
  name: {
    color: '#fff',
    align: 'center',
    fontSize: 12,
    padding: [2, 0]
  },
  value: {
    color: '#ffc72b',
    fontSize: 24,
    padding: [2, 0],
    align: 'center'
  },
  total: {
    color: '#ffc72b',
    fontSize: 40,
    align: 'center'
  },
  percent: {
    color: '#49dff0',
    fontSize: 16,
    align: 'center'
  },
  hr: {
    borderColor: '#0b5263',
    width: '100%',
    borderWidth: 1,
    height: 0
  }
});
// CONCATENATED MODULE: ./src/formats/name-value-percent.ts
/* harmony default export */ var name_value_percent = ({
  name: {
    color: '#fff',
    align: 'right',
    fontSize: 12,
    padding: [2, 0]
  },
  value: {
    color: '#44aff0',
    fontSize: 12,
    padding: [2, 0],
    align: 'right'
  },
  percent: {
    color: '#49dff0',
    fontSize: 10,
    align: 'right',
    padding: [1, 0]
  }
});
// CONCATENATED MODULE: ./src/formats/index.ts


/* harmony default export */ var formats = __webpack_exports__["a"] = ({
  bignumber: bignumber,
  nameValuePercent: name_value_percent
});

/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "326b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "340a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  var canPosition = props.canPosition;
  var item = {
    left: canPosition.left || '5%',
    right: canPosition.right || '35%',
    top: canPosition.top || '10%',
    bottom: canPosition.bottom || '10%',
    sort: props.sort || 'ascending',
    maxSize: '50%',
    label: {
      show: true
    }
  };

  function setNameValue(data, v) {
    if (data === 'name-value') {
      return v.name + '\n{white|' + v.value + '}';
    } else if (data === 'name') {
      return function () {
        return v.name;
      };
    } else if (data === 'value') {
      return function () {
        return v.value;
      };
    }
  }

  function getMarkerLineData(data) {
    data.map(function (v, i) {
      var lineData = {};
      lineData.position = i % 2 ? 'left' : 'right';
      lineData.formatter = setNameValue(props.nameOrValue, v);
      lineData.rich = {
        white: {
          color: '#fff',
          align: 'center',
          fontSize: 20
        }
      };
      Object.assign(v, {
        label: lineData
      });
    });
  }

  getMarkerLineData(series[0].data);
  series.forEach(function (s) {
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "3456":
/***/ (function(module, exports) {



/***/ }),

/***/ "347e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("301d");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'rich-label-percent',
  props: {
    styles: {
      label: {
        formats: _formats__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].nameValuePercent,
        percent: true
      }
    }
  }
});

/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "357b":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3d-bar.ts": "89cf",
	"./baidu-map.ts": "7c5c",
	"./bar.ts": "1881",
	"./funnel.ts": "1cc7",
	"./gauge.ts": "e328",
	"./lines.ts": "12f3",
	"./liquid.ts": "326b",
	"./network.ts": "563f",
	"./pictorialBar.ts": "181f",
	"./pie.ts": "7c81",
	"./polar.ts": "db2e",
	"./radar.ts": "f074",
	"./ring.ts": "8866",
	"./scatter.ts": "a5b2",
	"./tree.ts": "d4d1",
	"./treemap.ts": "3938"
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
webpackContext.id = "357b";

/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


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

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "3752":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  name: "数据中心",
  value: [1000, 140],
  symbolSize: 60
}, {
  name: "平台1",
  category: 0,
  speed: '50kb/s',
  value: [0, 0]
}, {
  name: "平台2",
  category: 0,
  speed: '50kb/s',
  value: [0, 100]
}, {
  name: "平台3",
  category: 1,
  value: [0, 200]
}, {
  name: "平台4",
  category: 1,
  value: [0, 300]
}]]);

/***/ }),

/***/ "3938":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


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

/***/ "3cbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var yAxis = {},
      y = props.y;

  if (y === false) {
    yAxis = {
      show: false
    };
    return {
      yAxis: [yAxis]
    };
  }

  'name,show,data,min'.split(',').forEach(function (p) {
    if (Reflect.has(y, p)) {
      yAxis[p] = y[p];
    }
  });

  if (y.unit) {
    yAxis.axisLabel = {
      formatter: y.unit === '100%' ? function (value, index) {
        return value * 100 + '%';
      } : '{value}' + y.unit
    };
  }

  if (Reflect.has(y, 'line')) {
    var line = y.line;

    if (line === false) {
      yAxis.axisLine = {
        show: false
      };
    } else {}
  }

  if (Reflect.has(y, 'ticks')) {
    var ticks = y.ticks;

    if (ticks === false) {
      yAxis.axisTick = {
        show: false
      };
    }
  }

  return {
    yAxis: [yAxis]
  };
});

/***/ }),

/***/ "3d6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  var changegaugeColor = props.gaugeGradientColor;
  series.forEach(function (s, i) {
    var item = {
      data: [{
        value: props.data[i],
        name: props.titleName[i]
      }],
      center: props.center[i],
      detail: {
        formatter: props.data[i] + '%',
        color: '#fff',
        offsetCenter: [0, '-55%']
      },
      radius: props.radius[i] + '%',
      startAngle: props.startEndAngle[i][0],
      endAngle: props.startEndAngle[i][1],
      title: {
        color: '#fff',
        fontSize: 12,
        offsetCenter: [0, 0]
      },
      splitLine: {
        length: 10
      },
      pointer: {
        length: '50%',
        width: 5
      },
      axisTick: {
        length: 5,
        lineStyle: {
          color: '#454859'
        }
      },
      axisLine: {
        lineStyle: {
          width: 5
        }
      }
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "41c3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isPrototype = __webpack_require__("eac5"),
    nativeKeysIn = __webpack_require__("ec8c");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("f909"),
    createAssigner = __webpack_require__("2ec1");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "42454":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "425b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  name: 'A',
  value: 100
}, {
  name: 'B',
  value: 150
}, {
  name: 'C',
  value: 500
}, {
  name: 'D',
  value: 250
}, {
  name: 'E',
  value: 400
}]]);

/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "4482":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  series.forEach(function (s) {
    var item = {
      radius: props.radius || ['0%', '50%'],
      labelLine: {
        show: true,
        normal: {
          show: true,
          smooth: false,
          length: 10,
          length2: 10
        },
        emphasis: {
          show: true
        }
      }
    };

    if (!props.labelShow) {
      item.label = {
        normal: {
          show: props.labelShow
        }
      };
    }

    if (s.data[0].name === '' || s.data[0].name === ' ') {
      s.silent = true, s.color = props.outPieColor || options.color[0];
    }

    if (props.name === 'PaRoseChart') {
      // 处理 pa-rose-chart
      item.roseType = 'area';

      if (props.half) {
        var data = Array(s.data.length).fill({
          value: 0,
          name: '',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        });
        s.data = s.data.concat(data);
      }
    }

    Object.assign(s, item);
  });
  return series;
});

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

/***/ "4521":
/***/ (function(module, exports) {

module.exports = require("echarts-gl");

/***/ }),

/***/ "477e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'gdp-by-years',
  title: '经济指标',
  parent: 'gdp',
  props: {
    barWidth: 10,
    barGap: '5%'
  }
});

/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


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

/***/ "4c88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  if (!props.styles) return {};
  var styles = props.styles.main.rules || {};
  var output = {};

  if (styles.background) {
    output.backgroundColor = styles.background;
  }

  if (styles.x) {
    output.xAxis = [{
      axisLabel: {
        rotate: styles.x.rotate,
        fontSize: styles.x.fontSize
      }
    }];

    if (styles.x.gap === false) {
      output.xAxis[0].boundaryGap = false;
    }
  }

  if (styles.canvas) {
    if (styles.canvas.grid) {
      var grid = styles.canvas.grid;
      output.grid = grid;
    }
  }

  if (styles.title) {
    output.title = {
      text: props.title
    };

    if (styles.title.position === 'center') {
      output.title.left = 'center';
      output.title.top = 'center';
      output.title.textStyle = {
        align: 'center'
      };
    }

    if (styles.title.left) {
      output.title.left = styles.title.left;
    }
  }

  return output;
});

/***/ }),

/***/ "4f50":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("b760"),
    cloneBuffer = __webpack_require__("e538"),
    cloneTypedArray = __webpack_require__("c8fe"),
    copyArray = __webpack_require__("4359"),
    initCloneObject = __webpack_require__("fa21"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isArrayLikeObject = __webpack_require__("dcbe"),
    isBuffer = __webpack_require__("0d24"),
    isFunction = __webpack_require__("9520"),
    isObject = __webpack_require__("1a8c"),
    isPlainObject = __webpack_require__("60ed"),
    isTypedArray = __webpack_require__("73ac"),
    safeGet = __webpack_require__("8adb"),
    toPlainObject = __webpack_require__("8de2");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "5533":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  series.forEach(function (s) {
    var item = {
      name: '',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: s.data,
      symbolSize: function symbolSize(val) {
        return val[2] / 10;
      },
      itemStyle: {
        normal: {
          color: '#009688'
        }
      }
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "563f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: [{
    type: 'value',
    nameTextStyle: {
      fontSize: 10
    },
    show: false,
    min: 0,
    max: 1000
  }],
  yAxis: [{
    show: false
  }],
  tooltip: {
    trigger: 'item' // xAxis: false,
    // yAxis: false,
    // coordinateSystem: 'cartesian2d'

  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "5741":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./border.ts": "95c5",
	"./label.ts": "1a46",
	"./line.ts": "0ee1"
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
webpackContext.id = "5741";

/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

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

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "5f49":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area": "2f72",
	"./area.ts": "2f72",
	"./axis": "f9dd",
	"./axis.ts": "f9dd",
	"./marks": "810d",
	"./marks.ts": "810d",
	"./symbol": "0730",
	"./symbol.ts": "0730"
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
webpackContext.id = "5f49";

/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "60ed":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    getPrototype = __webpack_require__("2dcb"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6534":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./legend-right-vertical.ts": "cfdf"
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
webpackContext.id = "6534";

/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


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

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


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

/***/ "70c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var input = props.accessories.legend;

  if (input === false) {
    return {
      legend: {
        show: false
      }
    };
  }

  var output = {};
  'top,right,bottom'.split(',').forEach(function (p) {
    if (Reflect.has(input, p)) {
      output[p] = input[p];
    }
  });
  var aligns = {
    right: {
      right: '10%'
    },
    left: {
      left: '10%'
    }
  };
  output = Object.assign({}, output, aligns[input.align]);

  if (input.data) {
    output.data = input.data;
  }

  if (input.direction) {
    output.orient = input.direction;
  }

  return {
    legend: output
  };
});

/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "72f0":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "769b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gradient; });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b58");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("36c6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ed6d");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("970b");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5bc3");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






/**
 * 用于表示图表中用到的颜色组
 * bar条, line-color
 * 组装到Styles内
 */
var Color =
/*#__PURE__*/
function () {
  function Color() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Color);

    this.value = '';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Color, null, [{
    key: "from",
    value: function from(input) {
      if (input.startsWith('gradient:')) {
        return Gradient.from(input);
      } else {
        var color = new Color();
        color.value = input;
        return color;
      }
    }
  }]);

  return Color;
}();


var Gradient =
/*#__PURE__*/
function (_Color) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Gradient, _Color);

  function Gradient() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Gradient);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(Gradient).apply(this, arguments));
    _this.stops = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Gradient, null, [{
    key: "from",
    value: function from(input) {
      var gradient = new Gradient();
      input = input.replace(/^gradient\:/, '');
      gradient.stops = input.split(';');
      return gradient;
    }
  }]);

  return Gradient;
}(Color);

/***/ }),

/***/ "78bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var x = props.x;
  x = x || [];
  var xAxis = {};
  'name,show,data,min'.split(',').forEach(function (p) {
    if (Reflect.has(x, p)) {
      xAxis[p] = x[p];
    }
  });

  if (x.type && x.type !== 'value') {
    xAxis = {
      type: 'category'
    };

    if (x.data) {
      xAxis.data = x.data;
    }
  }

  if (x.label) {
    xAxis.axisLabel = {
      formatter: x.label
    };
  }

  if (Reflect.has(x, 'line')) {
    var line = x.line;

    if (line === false) {
      xAxis.axisLine = {
        show: false
      };
    } else {}
  }

  if (Reflect.has(x, 'ticks')) {
    var ticks = x.ticks;

    if (ticks === false) {
      xAxis.axisTick = {
        show: false
      };
    }
  }

  return {
    xAxis: [xAxis]
  };
});

/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7ac5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7c5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts_extension_bmap_bmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dee0");
/* harmony import */ var echarts_extension_bmap_bmap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts_extension_bmap_bmap__WEBPACK_IMPORTED_MODULE_0__);

var options = {
  xAxis: false,
  yAxis: false,
  grid: false,
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 6,
    roam: true,
    tooltip: {
      trigger: 'item'
    },
    mapStyle: {
      styleJson: [{
        featureType: 'water',
        elementType: 'all',
        stylers: {
          color: '#044161'
        }
      }, {
        featureType: 'land',
        elementType: 'all',
        stylers: {
          color: '#004981'
        }
      }, {
        featureType: 'boundary',
        elementType: 'geometry',
        stylers: {
          color: '#064f85'
        }
      }, {
        featureType: 'railway',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
          color: '#004981'
        }
      }, {
        featureType: 'highway',
        elementType: 'geometry.fill',
        stylers: {
          color: '#005b96',
          lightness: 1
        }
      }, {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'arterial',
        elementType: 'geometry',
        stylers: {
          color: '#004981'
        }
      }, {
        featureType: 'arterial',
        elementType: 'geometry.fill',
        stylers: {
          color: '#00508b'
        }
      }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'green',
        elementType: 'all',
        stylers: {
          color: '#056197',
          visibility: 'off'
        }
      }, {
        featureType: 'subway',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'manmade',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'local',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'arterial',
        elementType: 'labels',
        stylers: {
          visibility: 'off'
        }
      }, {
        featureType: 'boundary',
        elementType: 'geometry.fill',
        stylers: {
          color: '#029fd4'
        }
      }, {
        featureType: 'building',
        elementType: 'all',
        stylers: {
          color: '#1a5787'
        }
      }, {
        featureType: 'label',
        elementType: 'all',
        stylers: {
          visibility: 'off'
        }
      }]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7c7c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7eb8":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./axis.ts": "bf06",
	"./flow.ts": "ee2c",
	"./legend.ts": "70c0",
	"./markareas.ts": "9c69",
	"./marks.ts": "7ac5",
	"./tooltip.ts": "172f",
	"./visualMap.ts": "fe0c"
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
webpackContext.id = "7eb8";

/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "810d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var markPoint;

  if (props.marks) {
    if (props.marks.type === 'max-min') {
      markPoint = {
        data: [{
          type: 'max',
          name: '最大值'
        }, {
          type: 'min',
          name: '最小值'
        }]
      };
    }
  }

  return {
    markPoint: markPoint
  };
});

/***/ }),

/***/ "81f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'no-lines',
  props: {
    y: {
      line: false,
      ticks: false
    },
    x: {
      line: false,
      ticks: false
    }
  }
});

/***/ }),

/***/ "834a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: '女性',
  value: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0], [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8], [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8], [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3], [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0], [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7], [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5], [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2], [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8], [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9], [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2], [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4], [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4], [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2], [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0], [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0], [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4], [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4], [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5], [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5], [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2], [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3], [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5], [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4], [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6], [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8], [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1], [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5], [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2], [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6], [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0], [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0], [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9], [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1], [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4], [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7], [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5], [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8], [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0], [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]
}, {
  name: '男性',
  value: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9], [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9], [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1], [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1], [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2], [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2], [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0], [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2], [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2], [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9], [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9], [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0], [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3], [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7], [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5], [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3], [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1], [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0], [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2], [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1], [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6], [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1], [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5], [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1], [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5], [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5], [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9], [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5], [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4], [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5], [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6], [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7], [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5], [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6], [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7], [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0], [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3], [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3], [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9], [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1], [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1], [180.3, 83.2], [180.3, 83.2]]
}]);

/***/ }),

/***/ "8505":
/***/ (function(module, exports) {

module.exports = require("echarts-liquidfill");

/***/ }),

/***/ "85e3":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "8819":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ring',
  props: {
    radius: ['40%', '50%']
  }
});

/***/ }),

/***/ "8866":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "8877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'title-center',
  props: {
    styles: {
      title: {
        position: 'center'
      }
    }
  }
});

/***/ }),

/***/ "89cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false,
  backgroundColor: 'transparent',
  visualMap: {
    max: 20,
    inRange: {
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
  },
  xAxis3D: {
    type: 'category',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    },
    data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p']
  },
  yAxis3D: {
    type: 'category',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    },
    data: ['一', '二', '三', '四', '五', '六', '日']
  },
  zAxis3D: {
    type: 'value',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    }
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 80,
    light: {
      main: {
        intensity: 1.2
      },
      ambient: {
        intensity: 0.3
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "8adb":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "8b12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'no-legend',
  props: {
    accessories: {
      legend: false
    }
  }
});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8de2":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "8ee9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  return series;
});

/***/ }),

/***/ "8eeb":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    baseAssignValue = __webpack_require__("872a");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "8fb1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("301d");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'rich-label-big-number',
  props: {
    styles: {
      label: {
        formats: _formats__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bignumber
      }
    }
  }
});

/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("42454");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9566":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  name: 'flare',
  children: [{
    name: 'animate',
    symbolSize: 16,
    label: {
      fontSize: 16,
      color: '#fff' //字体颜色

    },
    itemStyle: {
      color: '#ff0000',
      borderColor: '#0000ff',
      borderWidth: 3,
      normal: {
        color: '#00ff00'
      }
    },
    lineStyle: {
      color: '#fff',
      width: 4,
      type: 'dotted' //'dotted'虚线 'solid'实线

    },
    children: [{
      name: 'Easing',
      value: 17010
    }, {
      name: 'FunctionSequence',
      value: 5842
    }, {
      name: 'interpolate',
      children: [{
        name: 'ArrayInterpolator',
        value: 1983
      }, {
        name: 'ColorInterpolator',
        value: 2047
      }, {
        name: 'DateInterpolator',
        value: 1375
      }, {
        name: 'Interpolator',
        value: 8746
      }, {
        name: 'MatrixInterpolator',
        value: 2202
      }]
    }, {
      name: 'ISchedulable',
      value: 1041
    }, {
      name: 'Parallel',
      value: 5176
    }, {
      name: 'Pause',
      value: 449
    }]
  }, {
    name: 'data',
    category: 'tree2',
    label: {
      normal: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        show: false,
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'green' // 0% 处的颜色

          }, {
            offset: 1,
            color: 'white' // 100% 处的颜色

          }],
          globalCoord: false // 缺省为 false

        },
        borderColor: 'blue',
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowBlur: 10
      },
      emphasis: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'green' // 0% 处的颜色

          }, {
            offset: 1,
            color: 'white' // 100% 处的颜色

          }],
          globalCoord: false // 缺省为 false

        }
      }
    },
    children: [{
      name: 'converters',
      children: [{
        name: 'Converters',
        value: 721
      }, {
        name: 'DelimitedTextConverter',
        value: 4294
      }, {
        name: 'GraphMLConverter',
        value: 9800
      }, {
        name: 'IDataConverter',
        value: 1314
      }, {
        name: 'JSONConverter',
        value: 2220
      }]
    }, {
      name: 'DataField',
      value: 1759
    }, {
      name: 'DataSchema',
      value: 2165
    }]
  }]
}]]);

/***/ }),

/***/ "95c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (rules) {
  var result = {};
  var border = rules.border;

  if (border === true) {
    result.itemStyle = {
      normal: {
        borderColor: '#000'
      }
    };
  }

  return Object.assign({}, result);
});

/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


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

/***/ "9934":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeysIn = __webpack_require__("41c3"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9ac4":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./colors.ts": "272d",
	"./gap.ts": "0949",
	"./preset.ts": "b89a",
	"./styles.ts": "4c88",
	"./symbol.ts": "1f44",
	"./x.radar.ts": "c09b",
	"./x.ts": "78bb",
	"./y.radar.ts": "dec5",
	"./y.ts": "3cbf"
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
webpackContext.id = "9ac4";

/***/ }),

/***/ "9aff":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638"),
    isArrayLike = __webpack_require__("30c9"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "9b42":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "9c69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props, options) {
  var attributes = props.accessories.markareas;
  var series = [];

  if (attributes.mode === 'max-min') {
    series = [{
      type: 'custom',
      data: [{
        name: '',
        xAxis: 'min',
        yAxis: 'min'
      }, {
        xAxis: 'max',
        yAxis: 'max'
      }]
    }];
  } else if (['columns', 'rows'].includes(attributes.mode)) {
    series = attributes.data.map(function (d) {
      var item = {
        type: 'custom',
        silent: true,
        color: d.color,
        markArea: {
          data: [[{
            name: d.label,
            xAxis: d.coords[0]
          }, {
            xAxis: d.coords[1]
          }]],
          label: {
            show: true,
            position: 'top'
          }
        }
      };
      return item;
    });
  }

  var output = options.series || [];
  output.push.apply(output, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(series));
  return {
    series: output
  };
});

/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "a157":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[100, 150, 500, 250, 400], [47, 100, 100, 430, 210]]);

/***/ }),

/***/ "a2e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  var item = {
    barCategoryGap: '0%',
    label: {
      normal: {
        show: true,
        position: 'top'
      }
    },
    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'
  };

  if (props.symbol) {
    var symbolStyle = {};
    var symbolType = ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'];

    if (symbolType.indexOf(props.symbol) === -1) {
      symbolStyle.symbol = props.symbol;
    } else {
      symbolStyle.symbol = props.symbol, symbolStyle.symbolRepeat = 'fixed', symbolStyle.symbolClip = true, symbolStyle.symbolSize = [10, 20];
    }

    Object.assign(item, symbolStyle);
  }

  series.forEach(function (s) {
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "a454":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("72f0"),
    defineProperty = __webpack_require__("3b4a"),
    identity = __webpack_require__("cd9d");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("42454");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a5b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: [{
    type: 'value'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "a963":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b500":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("278c");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7037");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (series, props, options) {
  var item = {
    barWidth: props.barWidth + '%',
    barGap: props.barGap
  };

  if (props.stacked) {
    item.stack = props.stacked || 'stack-1';
  }

  if (props.round) {
    item.itemStyle = {
      barBorderRadius: props.barWidth / 2
    };
  }

  series.forEach(function (s) {
    Object.assign(s, item);
  });
  /**
   * 处理 shadow
   */

  if (props.shadow) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(options.xAxis) === 'object') {
      options.xAxis = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(options.xAxis), [{
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: options.xAxis[0].data
      }]);
    } // 阴影 插入一个表示阴影的series


    var shadow = {
      type: 'bar',
      data: []
    };
    var max = 0;
    props.data.forEach(function (d) {
      max = Math.max.apply(Math, [max].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(d)));
    }); // 对数字取整

    var _max$toPrecision$spli = max.toPrecision(2).split('e+'),
        _max$toPrecision$spli2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_max$toPrecision$spli, 2),
        m = _max$toPrecision$spli2[0],
        pow = _max$toPrecision$spli2[1];

    max = Math.ceil(parseFloat(m)) * Math.pow(10, parseInt(pow, 10));
    shadow.data = Array(props.data[0].length).fill(max);
    shadow.barGap = '-100%';
    shadow.xAxisIndex = 1;
    shadow.barCategoryGap = '-100%';
    shadow.barWidth = props.barWidth * (props.data.length + 2) + '%';
    shadow.itemStyle = {
      normal: {
        color: 'rgba(255,255,255,0.2)'
      }
    }; // let seriesWithSadows: any[] = []
    // series.forEach((s: any) => {
    //   Reflect.deleteProperty(s, 'barGap')
    //   seriesWithSadows.push(shadow)
    //   seriesWithSadows.push(s)
    // })
    // series = seriesWithSadows

    series.push(shadow);
  }

  return series;
});

/***/ }),

/***/ "b616":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props) {
  series.forEach(function (s, i) {
    var item = {
      coordinateSystem: 'cartesian2d',
      z: 1,
      effect: {
        show: true,
        smooth: false,
        trailLength: 0,
        symbol: "arrow",
        color: 'rgba(55,155,255,0.5)',
        symbolSize: 12
      },
      lineStyle: {
        normal: {
          curveness: 0.2
        }
      }
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "b691":
/***/ (function(module, exports) {



/***/ }),

/***/ "b760":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "b866":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 经济数据专用 preset
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'gdp',
  theme: 'dark',
  props: {
    barWidth: 10,
    barGap: '10%',
    styles: {
      canvas: ['15%', '10%', '15%', '10%']
    }
  }
});

/***/ }),

/***/ "b89a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4245");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);


var presets = {};

var requires = __webpack_require__("6534");

requires.keys().forEach(function (k) {
  var matches = k.match(/([\w\-]+)\.ts$/);

  if (matches && matches[1]) {
    var name = matches[1];
    presets[name] = requires(k).default;
  }
});
/**
 * 直接在provider阶段处理preset
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var preset = (props.preset || '').split(',');
  var results = preset.map(function (p) {
    if (p in presets) {
      return presets[p];
    } else {
      return {};
    }
  });
  return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, [{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(results)));
});

/***/ }),

/***/ "ba21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  var defaults = {
    roam: false,
    nodeClick: false,
    breadcrumb: {
      show: false
    }
  };
  series = series.map(function (s) {
    return Object.assign({}, s, defaults);
  });
  return series;
});

/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "bf06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props, providerOptions) {
  var input = props.accessories.axis;
  var axis = {};
  axis.position = input.position || 'right';
  axis.type = input.type || 'value';
  axis.splitLine = {
    show: false
  };

  if (input.unit) {
    axis.axisLabel = {
      formatter: input.unit === '100%' ? function (value) {
        return value * 100 + '%';
      } : '{value}' + input.unit
    };
  }

  var yAxis = providerOptions.yAxis || [{
    type: 'value'
  }];
  yAxis.push(axis); //添加yAxis name值 

  if (input.yName) {
    yAxis.forEach(function (value, i) {
      value.name = input.yName[i];
    });
  } //添加xAxis name值 


  var xAxis = providerOptions.xAxis;

  if (input.xName) {
    xAxis.forEach(function (value, i) {
      value.name = input.xName[i];

      if (input.xSplitLine) {
        var splitLineObj = {
          splitLine: {
            show: input.xSplitLine[0] || false,
            lineStyle: {
              color: input.xSplitLine[1] || 'rgba(255,255,255,0.7)',
              type: input.xSplitLine[2] || 'solid'
            }
          }
        };
        Object.assign(value, splitLineObj);
      }
    });
  }

  return {
    yAxis: yAxis,
    xAxis: xAxis
  };
});

/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c09b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var x = props.x;
  var radar = {};

  if (Array.isArray(x)) {
    x = {
      data: x
    };
  }

  radar.indicator = x.data.map(function (d) {
    return Object.assign({
      name: d
    }, props.y.max && {
      max: props.y.max
    });
  });
  return {
    radar: radar
  };
});

/***/ }),

/***/ "c135":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "c1c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props) {
  var autoDistribute = Array(series.length).fill(0).map(function (x, i) {
    return 100 * (i + 1) / (series.length + 1);
  }).map(function (x) {
    return x + '%';
  });
  var distribute = props.distribute || autoDistribute;
  return series.map(function (s, i) {
    return Object.assign({}, s, {
      center: [distribute[i], '50%'],
      backgroundStyle: {
        borderWidth: 0,
        color: 'transparent'
      }
    });
  });
});

/***/ }),

/***/ "c1c9":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("a454"),
    shortOut = __webpack_require__("f3c1");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "c240":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "c7ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  name: '海门',
  value: 9
}, {
  name: '鄂尔多斯',
  value: 12
}, {
  name: '招远',
  value: 12
}, {
  name: '舟山',
  value: 12
}, {
  name: '齐齐哈尔',
  value: 14
}, {
  name: '盐城',
  value: 15
}, {
  name: '赤峰',
  value: 16
}, {
  name: '青岛',
  value: 18
}, {
  name: '乳山',
  value: 18
}, {
  name: '金昌',
  value: 19
}, {
  name: '泉州',
  value: 21
}, {
  name: '莱西',
  value: 21
}, {
  name: '日照',
  value: 21
}, {
  name: '胶南',
  value: 22
}, {
  name: '南通',
  value: 23
}, {
  name: '拉萨',
  value: 24
}, {
  name: '云浮',
  value: 24
}, {
  name: '梅州',
  value: 25
}, {
  name: '文登',
  value: 25
}, {
  name: '上海',
  value: 25
}, {
  name: '攀枝花',
  value: 25
}, {
  name: '威海',
  value: 25
}, {
  name: '承德',
  value: 25
}, {
  name: '厦门',
  value: 26
}, {
  name: '汕尾',
  value: 26
}, {
  name: '潮州',
  value: 26
}, {
  name: '丹东',
  value: 27
}, {
  name: '太仓',
  value: 27
}, {
  name: '曲靖',
  value: 27
}, {
  name: '烟台',
  value: 28
}, {
  name: '福州',
  value: 29
}, {
  name: '瓦房店',
  value: 30
}, {
  name: '即墨',
  value: 30
}, {
  name: '抚顺',
  value: 31
}, {
  name: '玉溪',
  value: 31
}, {
  name: '张家口',
  value: 31
}, {
  name: '阳泉',
  value: 31
}, {
  name: '莱州',
  value: 32
}, {
  name: '湖州',
  value: 32
}, {
  name: '汕头',
  value: 32
}, {
  name: '昆山',
  value: 33
}, {
  name: '宁波',
  value: 33
}, {
  name: '湛江',
  value: 33
}, {
  name: '揭阳',
  value: 34
}, {
  name: '荣成',
  value: 34
}, {
  name: '连云港',
  value: 35
}, {
  name: '葫芦岛',
  value: 35
}, {
  name: '常熟',
  value: 36
}, {
  name: '东莞',
  value: 36
}, {
  name: '河源',
  value: 36
}, {
  name: '淮安',
  value: 36
}, {
  name: '泰州',
  value: 36
}, {
  name: '南宁',
  value: 37
}, {
  name: '营口',
  value: 37
}, {
  name: '惠州',
  value: 37
}, {
  name: '江阴',
  value: 37
}, {
  name: '蓬莱',
  value: 37
}, {
  name: '韶关',
  value: 38
}, {
  name: '嘉峪关',
  value: 38
}, {
  name: '广州',
  value: 38
}, {
  name: '延安',
  value: 38
}, {
  name: '太原',
  value: 39
}, {
  name: '清远',
  value: 39
}, {
  name: '中山',
  value: 39
}, {
  name: '昆明',
  value: 39
}, {
  name: '寿光',
  value: 40
}, {
  name: '盘锦',
  value: 40
}, {
  name: '长治',
  value: 41
}, {
  name: '深圳',
  value: 41
}, {
  name: '珠海',
  value: 42
}, {
  name: '宿迁',
  value: 43
}, {
  name: '咸阳',
  value: 43
}, {
  name: '铜川',
  value: 44
}, {
  name: '平度',
  value: 44
}, {
  name: '佛山',
  value: 44
}, {
  name: '海口',
  value: 44
}, {
  name: '江门',
  value: 45
}, {
  name: '章丘',
  value: 45
}, {
  name: '肇庆',
  value: 46
}, {
  name: '大连',
  value: 47
}, {
  name: '临汾',
  value: 47
}, {
  name: '吴江',
  value: 47
}, {
  name: '石嘴山',
  value: 49
}, {
  name: '沈阳',
  value: 50
}, {
  name: '苏州',
  value: 50
}, {
  name: '茂名',
  value: 50
}, {
  name: '嘉兴',
  value: 51
}, {
  name: '长春',
  value: 51
}, {
  name: '胶州',
  value: 52
}, {
  name: '银川',
  value: 52
}, {
  name: '张家港',
  value: 52
}, {
  name: '三门峡',
  value: 53
}, {
  name: '锦州',
  value: 54
}, {
  name: '南昌',
  value: 54
}, {
  name: '柳州',
  value: 54
}, {
  name: '三亚',
  value: 54
}, {
  name: '自贡',
  value: 56
}, {
  name: '吉林',
  value: 56
}, {
  name: '阳江',
  value: 57
}, {
  name: '泸州',
  value: 57
}, {
  name: '西宁',
  value: 57
}, {
  name: '宜宾',
  value: 58
}, {
  name: '呼和浩特',
  value: 58
}, {
  name: '成都',
  value: 58
}, {
  name: '大同',
  value: 58
}, {
  name: '镇江',
  value: 59
}, {
  name: '桂林',
  value: 59
}, {
  name: '张家界',
  value: 59
}, {
  name: '宜兴',
  value: 59
}, {
  name: '北海',
  value: 60
}, {
  name: '西安',
  value: 61
}, {
  name: '金坛',
  value: 62
}, {
  name: '东营',
  value: 62
}, {
  name: '牡丹江',
  value: 63
}, {
  name: '遵义',
  value: 63
}, {
  name: '绍兴',
  value: 63
}, {
  name: '扬州',
  value: 64
}, {
  name: '常州',
  value: 64
}, {
  name: '潍坊',
  value: 65
}, {
  name: '重庆',
  value: 66
}, {
  name: '台州',
  value: 67
}, {
  name: '南京',
  value: 67
}, {
  name: '滨州',
  value: 70
}, {
  name: '贵阳',
  value: 71
}, {
  name: '无锡',
  value: 71
}, {
  name: '本溪',
  value: 71
}, {
  name: '克拉玛依',
  value: 72
}, {
  name: '渭南',
  value: 72
}, {
  name: '马鞍山',
  value: 72
}, {
  name: '宝鸡',
  value: 72
}, {
  name: '焦作',
  value: 75
}, {
  name: '句容',
  value: 75
}, {
  name: '北京',
  value: 79
}, {
  name: '徐州',
  value: 79
}, {
  name: '衡水',
  value: 80
}, {
  name: '包头',
  value: 80
}, {
  name: '绵阳',
  value: 80
}, {
  name: '乌鲁木齐',
  value: 84
}, {
  name: '枣庄',
  value: 84
}, {
  name: '杭州',
  value: 84
}, {
  name: '淄博',
  value: 85
}, {
  name: '鞍山',
  value: 86
}, {
  name: '溧阳',
  value: 86
}, {
  name: '库尔勒',
  value: 86
}, {
  name: '安阳',
  value: 90
}, {
  name: '开封',
  value: 90
}, {
  name: '济南',
  value: 92
}, {
  name: '德阳',
  value: 93
}, {
  name: '温州',
  value: 95
}, {
  name: '九江',
  value: 96
}, {
  name: '邯郸',
  value: 98
}, {
  name: '临安',
  value: 99
}, {
  name: '兰州',
  value: 99
}, {
  name: '沧州',
  value: 100
}, {
  name: '临沂',
  value: 103
}, {
  name: '南充',
  value: 104
}, {
  name: '天津',
  value: 105
}, {
  name: '富阳',
  value: 106
}, {
  name: '泰安',
  value: 112
}, {
  name: '诸暨',
  value: 112
}, {
  name: '郑州',
  value: 113
}, {
  name: '哈尔滨',
  value: 114
}, {
  name: '聊城',
  value: 116
}, {
  name: '芜湖',
  value: 117
}, {
  name: '唐山',
  value: 119
}, {
  name: '平顶山',
  value: 119
}, {
  name: '邢台',
  value: 119
}, {
  name: '德州',
  value: 120
}, {
  name: '济宁',
  value: 120
}, {
  name: '荆州',
  value: 127
}, {
  name: '宜昌',
  value: 130
}, {
  name: '义乌',
  value: 132
}, {
  name: '丽水',
  value: 133
}, {
  name: '洛阳',
  value: 134
}, {
  name: '秦皇岛',
  value: 136
}, {
  name: '株洲',
  value: 143
}, {
  name: '石家庄',
  value: 147
}, {
  name: '莱芜',
  value: 148
}, {
  name: '常德',
  value: 152
}, {
  name: '保定',
  value: 153
}, {
  name: '湘潭',
  value: 154
}, {
  name: '金华',
  value: 157
}, {
  name: '岳阳',
  value: 169
}, {
  name: '长沙',
  value: 175
}, {
  name: '衢州',
  value: 177
}, {
  name: '廊坊',
  value: 193
}, {
  name: '菏泽',
  value: 194
}, {
  name: '合肥',
  value: 229
}, {
  name: '武汉',
  value: 273
}, {
  name: '大庆',
  value: 279
}];
var geoCoordMap = {
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
  舟山: [122.207216, 29.985295],
  齐齐哈尔: [123.97, 47.33],
  盐城: [120.13, 33.38],
  赤峰: [118.87, 42.28],
  青岛: [120.33, 36.07],
  乳山: [121.52, 36.89],
  金昌: [102.188043, 38.520089],
  泉州: [118.58, 24.93],
  莱西: [120.53, 36.86],
  日照: [119.46, 35.42],
  胶南: [119.97, 35.88],
  南通: [121.05, 32.08],
  拉萨: [91.11, 29.97],
  云浮: [112.02, 22.93],
  梅州: [116.1, 24.55],
  文登: [122.05, 37.2],
  上海: [121.48, 31.22],
  攀枝花: [101.718637, 26.582347],
  威海: [122.1, 37.5],
  承德: [117.93, 40.97],
  厦门: [118.1, 24.46],
  汕尾: [115.375279, 22.786211],
  潮州: [116.63, 23.68],
  丹东: [124.37, 40.13],
  太仓: [121.1, 31.45],
  曲靖: [103.79, 25.51],
  烟台: [121.39, 37.52],
  福州: [119.3, 26.08],
  瓦房店: [121.979603, 39.627114],
  即墨: [120.45, 36.38],
  抚顺: [123.97, 41.97],
  玉溪: [102.52, 24.35],
  张家口: [114.87, 40.82],
  阳泉: [113.57, 37.85],
  莱州: [119.942327, 37.177017],
  湖州: [120.1, 30.86],
  汕头: [116.69, 23.39],
  昆山: [120.95, 31.39],
  宁波: [121.56, 29.86],
  湛江: [110.359377, 21.270708],
  揭阳: [116.35, 23.55],
  荣成: [122.41, 37.16],
  连云港: [119.16, 34.59],
  葫芦岛: [120.836932, 40.711052],
  常熟: [120.74, 31.64],
  东莞: [113.75, 23.04],
  河源: [114.68, 23.73],
  淮安: [119.15, 33.5],
  泰州: [119.9, 32.49],
  南宁: [108.33, 22.84],
  营口: [122.18, 40.65],
  惠州: [114.4, 23.09],
  江阴: [120.26, 31.91],
  蓬莱: [120.75, 37.8],
  韶关: [113.62, 24.84],
  嘉峪关: [98.289152, 39.77313],
  广州: [113.23, 23.16],
  延安: [109.47, 36.6],
  太原: [112.53, 37.87],
  清远: [113.01, 23.7],
  中山: [113.38, 22.52],
  昆明: [102.73, 25.04],
  寿光: [118.73, 36.86],
  盘锦: [122.070714, 41.119997],
  长治: [113.08, 36.18],
  深圳: [114.07, 22.62],
  珠海: [113.52, 22.3],
  宿迁: [118.3, 33.96],
  咸阳: [108.72, 34.36],
  铜川: [109.11, 35.09],
  平度: [119.97, 36.77],
  佛山: [113.11, 23.05],
  海口: [110.35, 20.02],
  江门: [113.06, 22.61],
  章丘: [117.53, 36.72],
  肇庆: [112.44, 23.05],
  大连: [121.62, 38.92],
  临汾: [111.5, 36.08],
  吴江: [120.63, 31.16],
  石嘴山: [106.39, 39.04],
  沈阳: [123.38, 41.8],
  苏州: [120.62, 31.32],
  茂名: [110.88, 21.68],
  嘉兴: [120.76, 30.77],
  长春: [125.35, 43.88],
  胶州: [120.03336, 36.264622],
  银川: [106.27, 38.47],
  张家港: [120.555821, 31.875428],
  三门峡: [111.19, 34.76],
  锦州: [121.15, 41.13],
  南昌: [115.89, 28.68],
  柳州: [109.4, 24.33],
  三亚: [109.511909, 18.252847],
  自贡: [104.778442, 29.33903],
  吉林: [126.57, 43.87],
  阳江: [111.95, 21.85],
  泸州: [105.39, 28.91],
  西宁: [101.74, 36.56],
  宜宾: [104.56, 29.77],
  呼和浩特: [111.65, 40.82],
  成都: [104.06, 30.67],
  大同: [113.3, 40.12],
  镇江: [119.44, 32.2],
  桂林: [110.28, 25.29],
  张家界: [110.479191, 29.117096],
  宜兴: [119.82, 31.36],
  北海: [109.12, 21.49],
  西安: [108.95, 34.27],
  金坛: [119.56, 31.74],
  东营: [118.49, 37.46],
  牡丹江: [129.58, 44.6],
  遵义: [106.9, 27.7],
  绍兴: [120.58, 30.01],
  扬州: [119.42, 32.39],
  常州: [119.95, 31.79],
  潍坊: [119.1, 36.62],
  重庆: [106.54, 29.59],
  台州: [121.420757, 28.656386],
  南京: [118.78, 32.04],
  滨州: [118.03, 37.36],
  贵阳: [106.71, 26.57],
  无锡: [120.29, 31.59],
  本溪: [123.73, 41.3],
  克拉玛依: [84.77, 45.59],
  渭南: [109.5, 34.52],
  马鞍山: [118.48, 31.56],
  宝鸡: [107.15, 34.38],
  焦作: [113.21, 35.24],
  句容: [119.16, 31.95],
  北京: [116.46, 39.92],
  徐州: [117.2, 34.26],
  衡水: [115.72, 37.72],
  包头: [110, 40.58],
  绵阳: [104.73, 31.48],
  乌鲁木齐: [87.68, 43.77],
  枣庄: [117.57, 34.86],
  杭州: [120.19, 30.26],
  淄博: [118.05, 36.78],
  鞍山: [122.85, 41.12],
  溧阳: [119.48, 31.43],
  库尔勒: [86.06, 41.68],
  安阳: [114.35, 36.1],
  开封: [114.35, 34.79],
  济南: [117, 36.65],
  德阳: [104.37, 31.13],
  温州: [120.65, 28.01],
  九江: [115.97, 29.71],
  邯郸: [114.47, 36.6],
  临安: [119.72, 30.23],
  兰州: [103.73, 36.03],
  沧州: [116.83, 38.33],
  临沂: [118.35, 35.05],
  南充: [106.110698, 30.837793],
  天津: [117.2, 39.13],
  富阳: [119.95, 30.07],
  泰安: [117.13, 36.18],
  诸暨: [120.23, 29.71],
  郑州: [113.65, 34.76],
  哈尔滨: [126.63, 45.75],
  聊城: [115.97, 36.45],
  芜湖: [118.38, 31.33],
  唐山: [118.02, 39.63],
  平顶山: [113.29, 33.75],
  邢台: [114.48, 37.05],
  德州: [116.29, 37.45],
  济宁: [116.59, 35.38],
  荆州: [112.239741, 30.335165],
  宜昌: [111.3, 30.7],
  义乌: [120.06, 29.32],
  丽水: [119.92, 28.45],
  洛阳: [112.44, 34.7],
  秦皇岛: [119.57, 39.95],
  株洲: [113.16, 27.83],
  石家庄: [114.48, 38.03],
  莱芜: [117.67, 36.19],
  常德: [111.69, 29.05],
  保定: [115.48, 38.85],
  湘潭: [112.91, 27.87],
  金华: [119.64, 29.12],
  岳阳: [113.09, 29.37],
  长沙: [113, 28.21],
  衢州: [118.88, 28.97],
  廊坊: [116.7, 39.53],
  菏泽: [115.480656, 35.23375],
  合肥: [117.27, 31.86],
  武汉: [114.31, 30.52],
  大庆: [125.03, 46.58]
};

var convertData = function convertData(data) {
  var res = [];

  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];

    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }

  return res;
};

/* harmony default export */ __webpack_exports__["default"] = ([convertData(data)]);

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

/***/ "c8fe":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "ca1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props) {
  series.forEach(function (s) {
    var item = {
      smooth: props.smooth
    };

    if (props.stacked) {
      item.stack = props.stacked || 'stack-1';
    }

    if (props.lineWidth) {
      item.lineStyle = {
        width: props.lineWidth
      };
    }

    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "cfdf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
console.log('provider-preset-legend-right-vertical))))))_________________');
/* harmony default export */ __webpack_exports__["default"] = ({
  title: {
    left: '38%'
  }
});

/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d1b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (series) {
  series.forEach(function (s) {
    var item = {
      shading: 'color',
      itemStyle: {
        opacity: 0.4
      }
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d4d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "d66a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "db2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "dcbe":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9"),
    isObjectLike = __webpack_require__("1310");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "dd46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("301d");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'rich-label',
  props: {
    styles: {
      label: {
        formats: _formats__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].nameValuePercent
      }
    }
  }
});

/***/ }),

/***/ "dec5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    yAxis: false
  };
});

/***/ }),

/***/ "dee0":
/***/ (function(module, exports) {

module.exports = require("echarts/extension/bmap/bmap");

/***/ }),

/***/ "e10e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./business/gdp-by-years.ts": "477e",
	"./business/gdp.ts": "b866",
	"./features/legend-right-vertical.ts": "1857",
	"./features/no-label.ts": "1d20",
	"./features/no-legend.ts": "8b12",
	"./features/no-lines.ts": "81f8",
	"./system/area-gradient.ts": "8877",
	"./system/circle.ts": "8819",
	"./system/rich-label-big-number.ts": "8fb1",
	"./system/rich-label-percent.ts": "347e",
	"./system/rich-label.ts": "dd46",
	"./system/title-center.ts": "0dbc"
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
webpackContext.id = "e10e";

/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("2524");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e328":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ebdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("278c");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (series, props) {
  console.log('ring.ts____________________________', series);
  var result = [];
  var invisibleStyle = {
    color: 'rgba(0,0,0,0)'
  };

  var _ref = props.radius || ['40%', '80%'],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
      innerRadius = _ref2[0],
      outerRadius = _ref2[1];

  var innerRadiusNumber = parseFloat(innerRadius);
  var outerHeightNumber = parseFloat(outerRadius);
  series.forEach(function (s) {
    var ringWidth = (outerHeightNumber - innerRadiusNumber) / s.data.length;
    var max = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(s.data.map(function (d) {
      return d.value;
    })));
    max = max * 1.25;
    var newSeries = s.data.map(function (d, i) {
      var radius1 = innerRadiusNumber + ringWidth * i;
      var radius2 = innerRadiusNumber + ringWidth * (i + 1);
      var data = [{
        name: d.name,
        value: d.value
      }, {
        name: 'invisible',
        value: max - d.value,
        itemStyle: invisibleStyle
      }];
      return {
        name: d.name,
        type: 'pie',
        clockWise: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        hoverAnimation: false,
        radius: [radius1 + '%', radius2 + '%'],
        data: data
      };
    });
    result = result.concat(newSeries);
  });
  return result;
});

/***/ }),

/***/ "ec8c":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "ed07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  value: 25,
  name: '对公银行'
}, {
  value: 70,
  name: '个人网银'
}, {
  value: 25,
  name: '直销银行'
}, {
  value: 25,
  name: '瑶瑶缴费'
}, {
  value: 10,
  name: '手机银行'
}]]);

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

/***/ "ee2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props, providerOptions) {
  return {
    series: [{
      type: 'lines',
      data: [[{
        coord: [0, 0]
      }, {
        coord: [1000, 140]
      }], [{
        coord: [0, 100]
      }, {
        coord: [1000, 140]
      }]]
    }]
  };
});

/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f074":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  xAxis: false,
  yAxis: false,
  radar: {
    radius: '60%',
    splitNumber: 8,
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: .5
      }
    },
    splitLine: {
      lineStyle: {
        color: '#fff',
        opacity: .0
      }
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 0
      }
    },
    name: {
      formatter: '{value}',
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12
      }
    },
    indicator: [{
      name: 'A',
      max: 2000
    }, {
      name: 'B',
      max: 2000
    }, {
      name: 'C',
      max: 2000
    }, {
      name: 'D',
      max: 2000
    }, {
      name: 'E',
      max: 2000
    }, {
      name: 'F',
      max: 2000
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

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

/***/ "f3c1":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "f43a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("164e");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_mocks_chart_network_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3752");

 // 根据category 设置不同分类的样式，name 可以作为legend的name

var categories = [{
  // name: ' 流入中',
  itemStyle: {
    normal: {
      color: new echarts__WEBPACK_IMPORTED_MODULE_0___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#4B79A1'
      }, {
        offset: 1,
        color: '#283E51'
      }])
    }
  }
}, {
  itemStyle: {
    // name: '暂无流入',
    normal: {
      color: new echarts__WEBPACK_IMPORTED_MODULE_0___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#157eff'
      }, {
        offset: 1,
        color: '#35c2ff'
      }])
    }
  }
}]; // 默认截取第一个数据作为被连接的点

var targetDot = _src_mocks_chart_network_simple__WEBPACK_IMPORTED_MODULE_1__["default"][0][0];
targetDot.itemStyle = {
  normal: {
    color: new echarts__WEBPACK_IMPORTED_MODULE_0___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
      offset: 0,
      color: '#16BFFD'
    }, {
      offset: 1,
      color: '#CB3066'
    }])
  }
}; // 剩余的数据作为原点(去连接的点)

var length = _src_mocks_chart_network_simple__WEBPACK_IMPORTED_MODULE_1__["default"][0].length;
var sourceDot = _src_mocks_chart_network_simple__WEBPACK_IMPORTED_MODULE_1__["default"][0].slice(1, length);
/* harmony default export */ __webpack_exports__["default"] = (function (series, props) {
  series.forEach(function (s, i) {
    var item = {
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 14
          },
          formatter: function formatter(params) {
            var txt = '';

            if (params.data.speed !== undefined) {
              txt = params.data.speed;
            }

            return txt;
          }
        }
      },
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      },
      categories: categories,
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      links: sourceDot.map(function (el) {
        return {
          source: el.name,
          target: targetDot.name,
          speed: el.speed,
          lineStyle: {
            normal: {
              color: el.speed ? '#12b5d0' : '#ff0000',
              curveness: 0.2,
              width: 1
            }
          }
        };
      })
    };
    Object.assign(s, item);
  });
  return series;
});

/***/ }),

/***/ "f4aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  value: 1,
  name: '博士'
}, {
  value: 2,
  name: '研究生'
}, {
  value: 3,
  name: '本科'
}, {
  value: 4,
  name: '专科'
}, {
  value: 5,
  name: '专科以下'
}]]);

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

/***/ "f8a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([[{
  name: 'A',
  value: 100
}, {
  name: 'B',
  value: 150
}, {
  name: 'C',
  value: 500
}, {
  name: 'D',
  value: 250
}, {
  name: 'E',
  value: 398
}, {
  name: 'F',
  value: 250
}, {
  name: 'G',
  value: 90
}, {
  name: 'H',
  value: 580
}]]);

/***/ }),

/***/ "f8af":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("2474");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "f909":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    assignMergeValue = __webpack_require__("b760"),
    baseFor = __webpack_require__("72af"),
    baseMergeDeep = __webpack_require__("4f50"),
    isObject = __webpack_require__("1a8c"),
    keysIn = __webpack_require__("9934"),
    safeGet = __webpack_require__("8adb");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "f9dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var yAxisIndex = 0;

  if (props.axis === 'right' || props.aixs === 1) {
    yAxisIndex = 1;
  }

  return {
    yAxisIndex: yAxisIndex
  };
});

/***/ }),

/***/ "fa21":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("7530"),
    getPrototype = __webpack_require__("2dcb"),
    isPrototype = __webpack_require__("eac5");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

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

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
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
    return external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a.extend({ mixins: Ctors });
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
    var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a
        ? superProto.constructor
        : external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a;
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

function vue_class_component_esm_Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.1.1 MIT LICENSE copyright 2018 kaorun343 */
/// <reference types='reflect-metadata'/>




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
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
    return createDecorator(function (componentOptions, k) {
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
        createDecorator(function (componentOptions, k) {
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
function vue_property_decorator_Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
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
    return createDecorator(function (componentOptions, handler) {
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("448a");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./support/designtime/inspectable/Prop.ts



/**
 * Base for Prop of Control other Classes
 */
var Prop_Prop =
/*#__PURE__*/
function () {
  function Prop(input) {
    classCallCheck_default()(this, Prop);

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

  createClass_default()(Prop, [{
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


// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__("98db");

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





/**
 * Chartlib Service
 * as a global API at Vue.prototype
 * usage
 *  this.$chartlib
 *  Service.instance
 */

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
              inspectable: {},
              dataDesigntime: false
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
            },
            bus: {
              get: function get() {
                return bus;
              }
            },
            designtime: {
              get: function get() {
                return Reflect.get(this, 'dataDesigntime');
              },
              set: function set(v) {
                Reflect.set(this, 'dataDesigntime', v);
                bus.emit('designtime.toggled', v);
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
  props.push(new Prop_Prop({
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

// CONCATENATED MODULE: ./src/core/chart/Component.ts






var Component_a;






/**
 * Base of PaChart/PaElement
 * PaComponent -> PaChart
 *             -> PaElement
 */

var Component_PaComponent =
/*#__PURE__*/
function (_Vue) {
  inherits_default()(PaComponent, _Vue);

  /**
   * Base of PaChart/PaElement
   * PaComponent -> PaChart
   *             -> PaElement
   */
  function PaComponent() {
    var _this;

    classCallCheck_default()(this, PaComponent);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaComponent).apply(this, arguments));
    _this.uuid = '';
    _this.type = '';
    _this.subType = ''; // event bus of all components/charts/elements

    _this.bus = Service_Service.instance.bus;
    return _this;
  }

  createClass_default()(PaComponent, [{
    key: "props",
    get: function get() {
      return this.$props;
    }
  }]);

  return PaComponent;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a);

__decorate([inspectable({
  label: '配色主题',
  type: inspectable_PropTypes.Theme,
  category: 'styles',
  order: 1,
  default: ''
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Component_PaComponent.prototype, "theme", void 0);

__decorate([inspectable({
  label: '样式定义',
  type: inspectable_PropTypes.Json,
  category: 'styles',
  default: {}
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Component_PaComponent.prototype, "styles", void 0);

Component_PaComponent = __decorate([vue_class_component_esm({})], Component_PaComponent);
/* harmony default export */ var chart_Component = (Component_PaComponent);
// CONCATENATED MODULE: ./src/core/accessories/slots.ts
/**
 * 将 <chart>内slot包含的内容转化为标准选项或layer
 */
function resolveSlot(slots) {
  var result = [];

  if (slots) {
    console.log('slots.ts--------/////////slots/////', slots);
    slots.forEach(function (s) {
      if (s.tag) {
        var tag = s.componentOptions && s.componentOptions.tag || s.tag || '';
        var component = s.componentInstance;
        console.log('slots.ts______componnet', component);
        var name = tag;

        if (tag !== null && tag.endsWith('-chart')) {
          // 嵌入的 chart
          var matched = tag.match(/pa\-(\w+)\-chart/);
          var chartType = matched ? matched[1] : 'none';
          component = processLayer(chartType, component);
          result.push({
            name: 'layer',
            component: component
          });
        } else {
          result.push({
            name: name,
            component: component
          });
        }
      }
    });
  } // console.log('slots.ts--------/////////slots result/////', result)


  return result;
}
/**
 *
 * @param chartType
 * @param props
 */

function processLayer(chartType, component) {
  return component;
}
// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__("164e");
var external_echarts_default = /*#__PURE__*/__webpack_require__.n(external_echarts_);

// CONCATENATED MODULE: ./src/providers/echarts/options/common.ts
/**
 * 负责组装echarts原生配置项
 */

/**
  * 全体图表类型共用的基本配置
  */
var common = {
  grid: {
    top: '15%',
    left: '12%',
    right: '12%',
    bottom: '15%'
  },
  xAxis: [{
    type: 'category',
    data: ['a', 'b', 'c', 'd', 'e']
  }],
  yAxis: [{
    type: 'value',
    nameTextStyle: {
      fontSize: 10
    }
  }],
  legend: {
    right: 0,
    top: 0,
    itemHeight: 8,
    itemWidth: 8,
    fontSize: 8
  },
  backgroundColor: 'rgba(0,0,0,0.2)',
  tooltip: {
    trigger: 'axis',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.33)',
    textStyle: {
      fontSize: 12
    },
    axisPointer: {
      type: 'shadow'
    },
    extraCssText: ['border-radius: 12px', 'background-color： rgba(0,0,0,0.5)'].join(';')
  }
};
/* harmony default export */ var options_common = (common);
// CONCATENATED MODULE: ./src/providers/echarts/options/series/specs.ts
/**
 *  全部图表类型的字段定义
 *  意义: 此一图表类型需要处理如下字段
 */
var specs = [{
  type: 'line',
  features: ['axis', 'area', 'marks']
}, {
  type: 'bar',
  features: []
}, {
  type: 'scatter',
  features: ['symbol']
}, {
  type: 'pictorialBar',
  features: ['area']
}, {
  type: 'network',
  features: ['symbol']
}];
/* harmony default export */ var series_specs = (specs);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__("4245");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// CONCATENATED MODULE: ./src/utils/pack.ts
/**
 * 读取某位置下所有文件
 * 使用 require.context
 * @param dir 目录位置
 */
function pack(context) {
  var result = {};
  context.keys().forEach(function (p) {
    var name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1];
    result[name] = context(p)['default'];
  });
  return result;
}

/* harmony default export */ var utils_pack = (pack);
// CONCATENATED MODULE: ./src/providers/echarts/options/series/styles.ts



var styles_fields = utils_pack(__webpack_require__("5741"));
/**
 * :styles="{
      colors: ['#009688', '#ffffff'],
      background: '#333'
    }"
 * 渐变色 gradient 写法A 单渐变
 * :styles="{
      colors: 'gradient:#009688;#000',
      background: '#333'
    }"
    写法B 多渐变
    :styles="{
      colors: [
        'gradient:#009688;#ffffff',
        'gradient:#e57373;#ffffff',
      ],
      background: '#333'
    }"
 */

/**
 * 处理styles中colors与label定义
 * @param props
 * @param index
 */

function makeSeriesStyles(styles, props, index) {
  if (!styles) return {};
  var rules = styles.rules || {};
  rules.colors = rules.colors || [];
  var result = {};
  var dataItem = props.data[index];
  var color = rules.colors[index];

  if (color && dataItem) {
    result.itemStyle = {
      normal: {},
      emphasis: {}
    };

    if (color.constructor.name === 'Gradient') {
      if (['bar'].includes(props.subType || props.type)) {
        var stops = color.stops.map(function (s, i) {
          return {
            offset: 1 / (color.stops.length - 1) * i,
            color: s
          };
        });
        result.itemStyle.normal = {
          color: new external_echarts_default.a.graphic.LinearGradient(0, 0, 0, 1, stops)
        };
      }
    }
  }

  if (rules.canvas) {
    var center = rules.canvas.center;
    result.center = center;
  }

  ['label', 'line', 'border'].forEach(function (f) {
    if (Reflect.has(rules, f)) {
      if (Reflect.has(styles_fields, f)) {
        var computed = styles_fields[f].apply(null, [rules, props]);
        result = merge_default()({}, result, computed);
      }
    } // label

  });
  return result;
}
// CONCATENATED MODULE: ./src/providers/echarts/options/series.ts

 // import atrrToSeries from './series/addToseries'




var types = utils_pack(__webpack_require__("0e09"));

function buildFeatures(props, index) {
  var features = [],
      fields = []; // 查找某一图表类型的字段定义

  var spec = series_specs.find(function (s) {
    return s.type === (props.subType || props.type);
  });
  fields = spec ? spec.features : [];
  features = fields.map(function (f) {
    var feature = __webpack_require__("5f49")("./".concat(f)).default;

    return f = feature.call(null, props, index);
  });
  return features;
}

function buildStyles(props, index) {
  var styles = props.styles ? props.styles.item(index) : null;
  return makeSeriesStyles(styles, props, index);
} // 将Y轴单位或formatter复制到图表


function applyFormatterFromAxis(series, options) {
  return series.map(function (s) {
    var yAxisIndex = s.yAxisIndex || 0;
    var yAxis = options.yAxis[yAxisIndex];

    if (yAxis) {
      if (s.label && s.label.show) {
        var label = yAxis.axisLabel;

        if (label && label.formatter && typeof label.formatter === 'string') {
          s.label.formatter = yAxis.axisLabel.formatter.replace('{value}', '{c}');
        }
      }
    }

    return s;
  });
}
/**
 * 将 data 组装为 series
 * @param props
 */


function makeSeries(layers, options) {
  // 输入的是多套 props/data 外层以及layers合并而来
  var final = [],
      seriesIndex = 0;
  layers.forEach(function (layer) {
    var series = layer.data.map(function (d, dataIndex) {
      var features = buildFeatures(layer, dataIndex);
      var styles = buildStyles(layers[0], seriesIndex++); // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项

      return merge_default.a.apply(void 0, [{
        type: layer.type || 'bar',
        data: Array.isArray(d) ? d : d.value,
        name: layer.accessories && layer.accessories.legend ? layer.accessories.legend[dataIndex] : ''
      }].concat(toConsumableArray_default()(features), [styles])); // 从props定义的属性
    });
    var typeFn = Reflect.get(types, layer.subType || layer.type);

    if (typeFn) {
      series = typeFn.call(null, series, layer, options);
    }

    series = applyFormatterFromAxis(series, options); // series = atrrToSeries(series, options)

    final.push(series);
  });
  return final;
}
function populateSeries(props, options) {
  return options;
}
// CONCATENATED MODULE: ./src/providers/echarts/options/handler.ts
var requires = __webpack_require__("9ac4");

var handler_rules = {};
requires.keys().forEach(function (p) {
  var name = (p.match(/\.\/([\.\w]+)\.ts$/) || ['', 'null'])[1];
  handler_rules[name] = requires(p)['default'];
});
var handler_accessories = {};
requires = __webpack_require__("7eb8");
requires.keys().forEach(function (p) {
  var name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1];
  handler_accessories[name] = requires(p)['default'];
});
/**
 * 将 chart props 转换为 echart 原生配置项
 */

var handler = {
  has: function has(key) {
    return Reflect.has(handler_rules, key);
  },
  translate: function translate(key, props) {
    var rule = handler_rules[key];

    if (rule) {
      if (typeof rule === 'function') {
        return rule.call(this, props);
      } else {
        return {};
      }
    }
  },
  take: function take(key, props, providerOptions) {
    var tag = handler_accessories[key];

    if (tag) {
      if (typeof tag === 'function') {
        return tag.call(this, props, providerOptions);
      } else {
        return {};
      }
    }
  }
};
/* harmony default export */ var options_handler = (handler);
// CONCATENATED MODULE: ./src/providers/echarts/options/index.ts





var defaults = {};

var options_requires = __webpack_require__("357b");

options_requires.keys().forEach(function (p) {
  var name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1];
  defaults[name] = options_requires(p)['default'];
});

function buildProps(props) {
  var options = {}; // 转换规则按字段集中在 rules 目录
  // 文件名为字段名

  var names = Object.keys(props); // 将 styles 挪到最后一个

  names = names.sort(function (a, b) {
    return b === 'styles' ? -1 : 1;
  });
  names.forEach(function (k) {
    var type = props.subType || props.type; // transfer to typed field function

    var fieldWithType = k + '.' + type;
    var field = options_handler.has(fieldWithType) ? fieldWithType : k;
    var output = options_handler.translate(field, props);
    options = merge_default()({}, options, output);
  });
  return options;
}

function buildAccessories(props, options) {
  var output = {};
  Object.keys(props.accessories).forEach(function (k) {
    output = merge_default()(output, options_handler.take(k, props, options));
  });
  return output;
}

function buildSeries(props, options) {
  return makeSeries([props].concat(toConsumableArray_default()(props.layers)), options);
}

function applyLegend(options) {
  // 将 legend 内的文本写入到 series 的 name
  var legend = options.legend;

  if (legend && legend.data) {
    options.series.forEach(function (s, i) {
      s.name = options.legend.data[i];
    });
  }
}
/**
 *  从 chart props 计算最终的 echarts 配置项
 */


var OptionsManager = {
  make: function make(props) {
    var _final$series;

    /**
     * 步骤：
     * 1. defaults
     * 2. props
     * 3. accessories
     * 4. series
     */
    var propsOptions = buildProps(props);
    var commonOptions = JSON.parse(JSON.stringify(options_common));
    console.log('options/index______________commonOptions', commonOptions);
    var final = merge_default()({}, commonOptions, defaults[props.subType || props.type], propsOptions);
    final = merge_default()(final, buildAccessories(props, final));
    var series = buildSeries(props, final);
    final.series = final.series || [];
    final.series = (_final$series = final.series).concat.apply(_final$series, toConsumableArray_default()(series));
    applyLegend(final);
    final = populateSeries(props, final);

    if (props.rotate) {
      if (props.rotate === 90) {
        // 旋转90度(顺时针)
        var xAxis = final.xAxis,
            yAxis = final.yAxis;
        final.xAxis = yAxis;
        final.yAxis = xAxis;
      }
    }

    return final;
  }
};
/* harmony default export */ var echarts_options = (OptionsManager);
// CONCATENATED MODULE: ./src/providers/echarts/index.ts






var echarts_Provider =
/*#__PURE__*/
function () {
  function Provider(container) {
    classCallCheck_default()(this, Provider);

    this.container = container;
  }

  createClass_default()(Provider, [{
    key: "draw",
    value: function draw(props, beforePaint) {
      var theme = shared_configs.theme;
      var chart = external_echarts_default.a.init(this.container, theme);
      var finalOption = echarts_options.make(props);
      console.log('%c>>>FINAL PROVIDER OPTIONS', 'background:#e57373;color:#fff', finalOption);

      if (beforePaint) {
        finalOption = beforePaint(finalOption);
      }

      chart.setOption(finalOption);
      return chart;
    }
  }, {
    key: "make",
    value: function make(options) {}
  }]);

  return Provider;
}();

/* harmony default export */ var echarts = (echarts_Provider);
// EXTERNAL MODULE: ./src/core/shared/styles/Color.ts
var Color = __webpack_require__("769b");

// CONCATENATED MODULE: ./src/core/shared/styles/Styles.ts




/**
 *  将有关样式的选项集中在styles里
 *  colors
 *  backgrounds
 *  borders
 */

var Styles_Styles =
/*#__PURE__*/
function () {
  function Styles() {
    classCallCheck_default()(this, Styles);

    this.rules = {};
  }

  createClass_default()(Styles, null, [{
    key: "create",
    value: function create(input) {
      var styles = new Styles();

      if ('string' === typeof input) {
        styles.rules = {
          colors: [Color["b" /* default */].from(input)]
        };
      } else {
        if (input.colors) {
          styles.rules.colors = [];

          for (var c = 0; c < input.colors.length; c++) {
            var color = input.colors[c];

            if (typeof color === 'string') {
              color = Color["b" /* default */].from(color);
            }

            styles.rules.colors.push(color);
          }
        }

        styles.rules = Object.assign({}, input, styles.rules);
      }

      return styles;
    }
  }]);

  return Styles;
}();
/**
 * 包含Styles的序列
 */



var Styles_StyleSet =
/*#__PURE__*/
function () {
  function StyleSet() {
    classCallCheck_default()(this, StyleSet);

    this.items = [];
  }

  createClass_default()(StyleSet, [{
    key: "add",
    value: function add(items) {
      var _this$items;

      if (!Array.isArray(items)) {
        items = [items];
      }

      (_this$items = this.items).push.apply(_this$items, toConsumableArray_default()(items));
    }
  }, {
    key: "item",
    value: function item(index) {
      return this.items[index];
    }
    /**
     * main styles
     */

  }, {
    key: "main",
    get: function get() {
      return this.items[0] || {
        rules: {}
      };
    }
  }]);

  return StyleSet;
}();
// CONCATENATED MODULE: ./src/core/shared/styles/index.ts

var StyleManager = {
  /**
   * 处理props里已经layers里定义的styles属性
   * 给styles编号以独立应用到各个sereies
   * @param props
   */
  make: function make(props) {
    var result = new Styles_StyleSet();
    var styles = Styles_Styles.create(props.styles || {});
    var StylesArray = Array(props.data.length).fill(styles);
    result.add(StylesArray);
    props.layers.forEach(function (l) {
      styles = Styles_Styles.create(l.styles || {});
      result.add(styles);
    });
    return result;
  }
};

/* harmony default export */ var shared_styles = (Styles_Styles);
// CONCATENATED MODULE: ./src/core/shared/themes/dark.ts
/* harmony default export */ var dark = ({
  props: {
    colors: ['#106FFF', '#32AAFA', '#628AFF', '#00D5A1', '#DFE7FD', '#F3DE7F', '#F3D600', '#FFA334', '#FF62C5', '#35D88A'],
    background: '#1f2146',
    styles: {
      colors: []
    }
  }
});
// CONCATENATED MODULE: ./src/core/shared/themes/warm.ts
/* harmony default export */ var warm = ({
  props: {
    colors: ['#FF5757', '#FF86A9', '#FF4E13', '#FF8E00', '#FFC140', '#FFCB8B', '#733CFF', '#0098FB', '#3CF0FF', '#983FFF'],
    styles: {}
  }
});
// CONCATENATED MODULE: ./src/core/shared/themes/cold.ts
/* harmony default export */ var cold = ({
  props: {
    colors: ['#FF304A', '#FF7200', '#FEFF47', '#3CAB56', '#6BECB4', '#00DCF9', '#FFCB00', '#F3FFA4', '#A765B2', '#737BFF'],
    styles: {}
  }
});
// CONCATENATED MODULE: ./src/core/shared/themes/index.ts



var themes = {
  dark: dark,
  warm: warm,
  cold: cold
};
/* harmony default export */ var shared_themes = (themes);
// CONCATENATED MODULE: ./src/core/shared/presets/index.ts



var presets = {};

var presets_requires = __webpack_require__("e10e");

presets_requires.keys().forEach(function (k) {
  var matches = k.match(/([\w\-]+)\.ts$/);

  if (matches && matches[1]) {
    var name = matches[1];
    presets[name] = presets_requires(k).default;
  }
});
/* harmony default export */ var shared_presets = (presets);
/**
 * 管理图表预设
 * 预设是一组属性值的组合
 * <pa-chart preset="gdp-by-years">
 * {
 *   name: 'gdp-by-years',
*   title: '年度GDP'
 * }
 */

var presets_PresetManager =
/*#__PURE__*/
function () {
  function PresetManager() {
    classCallCheck_default()(this, PresetManager);
  }

  createClass_default()(PresetManager, null, [{
    key: "init",
    value: function init() {}
  }, {
    key: "get",
    value: function get(name) {
      if (!name) {
        return {};
      }

      if (typeof name === 'string') {
        name = name.split(/\,/);
      }

      var result = {};
      name.forEach(function (n) {
        if (!Reflect.has(presets, n)) {
          console.warn('[Chartlib warn] preset not found, given: ' + name);
        }

        var preset = presets[n] || {};

        if (preset.parent) {
          var parent = PresetManager.get(preset.parent);
          preset = merge_default()({}, parent, preset);
        }

        result = merge_default()({}, result, preset);
        console.log('presetmanager.get_______________', result, n);
      });
      return result;
    }
  }]);

  return PresetManager;
}();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("278c");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/core/data/GenericTypes.ts
var GenericTypes = __webpack_require__("3456");

// EXTERNAL MODULE: ./src/core/data/ChartDataTypes.ts
var ChartDataTypes = __webpack_require__("b691");

// CONCATENATED MODULE: ./src/mocks/index.ts
var mocks = {};

var mocks_requires = __webpack_require__("112d");

mocks_requires.keys().forEach(function (k) {
  var matches = k.match(/([\w\-]+)\.ts$/);

  if (matches && matches[1]) {
    var name = matches[1];
    mocks[name] = mocks_requires(k).default;
  }
});
/* harmony default export */ var src_mocks = (mocks);
// CONCATENATED MODULE: ./src/core/data/index.ts





function parseUrl(input) {
  var matched = input.match(/(\w+)\:([\w\/\-]+)/);

  if (matched) {
    var _matched = slicedToArray_default()(matched, 3),
        method = _matched[1],
        path = _matched[2];

    return {
      method: method,
      path: path
    };
  } else {
    return {
      method: undefined,
      path: undefined
    };
  }
}

function __load(url) {
  return new Promise(function (resolve, reject) {
    var _parseUrl = parseUrl(url),
        method = _parseUrl.method,
        path = _parseUrl.path;

    if (!method || !path) {
      resolve([]);
    } else {
      if (method === 'mocks') {
        var data = loadFromMocks(path);
        resolve(data);
      }
    }
  });
}

function parseDataSet(dataset) {
  var x = {
    data: dataset[0].slice(1)
  },
      // 横轴
  y = {
    name: dataset[0][0]
  },
      data = dataset.slice(1).map(function (item) {
    return item.slice(1);
  }),
      legend = dataset.slice(1).map(function (item) {
    return item[0];
  });
  return {
    data: data,
    x: x,
    y: y,
    accessories: {
      legend: {
        data: legend
      }
    }
  };
}

function loadFromMocks(path) {
  return Reflect.get(src_mocks, path);
}
/**
 * 负责请求远程API数据
 * 可处理 dataset 格式的数据并解释为X轴data以及legend
 */


var DataManager = {
  load: function load(props) {
    return new Promise(function (resolve, reject) {
      var output = {};

      if (props.dataset) {
        var dataset = props.dataset;

        if (dataset.constructor.name === 'Array') {
          output = parseDataSet(dataset);
          resolve(output); // data非字符串直接返回
        } else {
          __load(dataset).then(function (d) {
            output = parseDataSet(d);
            resolve(output);
          });
        }
      } else {
        var data = props.data;

        if (!data) {
          resolve({
            data: []
          });
        }

        if (data.constructor.name === 'Array') {
          resolve({
            data: data
          }); // data非字符串直接返回
        } else {
          __load(data).then(function (d) {
            resolve({
              data: d
            });
          });
        }
      }
    });
  }
};

// CONCATENATED MODULE: ./src/core/shared/props/x.ts
/* harmony default export */ var x = (function (input) {
  var output = {};

  if (input === false) {
    output = {
      show: false
    };
  } else {
    if (Array.isArray(input)) {
      output = {
        type: 'category',
        data: input
      };
    } else {
      output = input;
    }
  }

  return output;
});
// CONCATENATED MODULE: ./src/core/shared/props/y.ts
/* harmony default export */ var y = (function (input) {
  var output = {};

  if (input === false) {
    output = {
      show: false
    };
  } else {
    if (Array.isArray(input)) {
      output = {
        type: 'value',
        data: input
      };
    } else {
      output = input;
    }
  }

  return output;
});
// CONCATENATED MODULE: ./src/core/shared/props/index.ts


var defs = {
  x: x,
  y: y
};
/**
 * 将简写的props转为标准格式
 * 将x=['A', 'B', 'C', 'D', 'E'] 格式化为
 * x={data: ['A', 'B', 'C', 'D', 'E']}
 * @param prop
 * @param name
 */

function normalizeProps(prop, name) {
  if (Reflect.has(defs, name)) {
    return defs[name](prop);
  } else {
    return prop;
  }
}
// EXTERNAL MODULE: ./src/css/chart.css
var css_chart = __webpack_require__("a963");

// EXTERNAL MODULE: ./src/css/designtime.css
var designtime = __webpack_require__("d66a");

// EXTERNAL MODULE: ./src/css/helpers.css
var helpers = __webpack_require__("7c7c");

// CONCATENATED MODULE: ./src/core/chart/DesignTools.ts









var DesignTools_DesignTool =
/*#__PURE__*/
function (_Vue) {
  inherits_default()(DesignTool, _Vue);

  function DesignTool() {
    classCallCheck_default()(this, DesignTool);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DesignTool).apply(this, arguments));
  }

  createClass_default()(DesignTool, [{
    key: "onPropsButtonClick",
    value: function onPropsButtonClick() {
      this.$emit('propsClick');
    }
  }]);

  return DesignTool;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a);

DesignTools_DesignTool = __decorate([vue_class_component_esm({
  template: "<div class=\"designtools\">\n    <a href=\"#\" class=\"button\" @click=\"onPropsButtonClick\">\u5C5E\u6027</a>\n  </div>"
})], DesignTools_DesignTool);
/* harmony default export */ var DesignTools = (DesignTools_DesignTool);
// CONCATENATED MODULE: ./src/core/chart/Chart.ts






var PaChart_1;


















var Chart_PaChart = PaChart_1 =
/*#__PURE__*/
function (_PaComponent) {
  inherits_default()(PaChart, _PaComponent);

  function PaChart() {
    var _this;

    classCallCheck_default()(this, PaChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaChart).call(this));
    _this.canvas = null;
    /**
     * 渲染模式 layer 为不可见
     */

    _this.mode = 'chart';
    _this.layers = [];
    _this.accessories = {};
    _this.type = '';
    return _this;
  }

  createClass_default()(PaChart, [{
    key: "dataAvailable",
    // hooks
    value: function dataAvailable(data, props) {
      return data;
    }
  }, {
    key: "afterCreate",

    /**
     * Custom hook, called when props set
     * in Factory.ts
     */
    value: function afterCreate() {} // console.log('///////////Chart.ts afterCreate', this.props)

    /**
     * 拿到所有chart specified props
     * 用于生成 echart options
     */

  }, {
    key: "addLayer",
    value: function addLayer() {}
  }, {
    key: "addAxis",
    value: function addAxis() {}
  }, {
    key: "applyOptions",
    value: function applyOptions(options) {}
  }, {
    key: "appendOptions",
    value: function appendOptions() {}
  }, {
    key: "onLayerDataLoad",
    value: function onLayerDataLoad(layer) {
      console.log('Chart.ts___________________onLayerDataLoad', layer);
    }
  }, {
    key: "processSlots",
    value: function processSlots() {
      var _this2 = this;

      // 将 slot 内容处理为 layers/accessories
      var slots = resolveSlot(this.$slots.default || []);
      var results = {
        layers: [],
        accessories: {}
      };

      if (slots.length) {
        slots.forEach(function (s) {
          // 处理 layers
          var name = s.name.replace(/^pa-/, '');

          if (name === 'layer') {
            s.component.$on('dataFetched', _this2.onLayerDataLoad);
            results.layers.push(s.component);
          } else {
            // 处理 props
            results.accessories[name] = s.component;
          }
        });
      }

      results = this.postProcessSlots(results);
      return results;
    }
    /**
     * slot 之后的特别处理, 由子类实现
     * @param props 输入的 props 项目
     */

  }, {
    key: "postProcessSlots",
    value: function postProcessSlots(props) {
      return props;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      // 计算最终的 options 并交给 echart 绘图
      var finalProps = this.computedProps;
      var withLayers = [finalProps].concat(toConsumableArray_default()(finalProps.layers));
      var dataPromises = withLayers.map(function (props) {
        return DataManager.load(props);
      });
      Promise.all(dataPromises).then(function (props) {
        _this3.__data = props[0].data;
        finalProps = merge_default()({}, finalProps, props[0]);
        var layersProps = props.slice(1);
        finalProps.layers = finalProps.layers.map(function (l, i) {
          return merge_default()({}, l, layersProps[i]);
        });

        if (finalProps.styles) {
          finalProps.styles = StyleManager.make(finalProps);
        }

        _this3.$emit('dataFetched');

        if (_this3.dataAvailable) {
          var dataWithPercent = _this3.dataAvailable(finalProps.data, finalProps);

          finalProps = Object.assign({}, finalProps, {
            data: dataWithPercent
          });
        }

        if (_this3.mode === 'layer') return;
        var provider = new echarts(_this3.$refs.chart);

        var defautlCallback = function defautlCallback(options) {
          return options;
        };

        _this3.canvas = provider.draw(finalProps, _this3.beforePaint || defautlCallback);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.draw(); // watch 放在draw后面 不然会引起死循环

      Object.keys(this.props).forEach(function (p) {
        if (!'layers,accessories'.split(',').includes(p)) {
          _this4.$watch(p, function () {
            this.repaint();
          }, {
            deep: true
          });
        }
      });
    }
  }, {
    key: "repaint",
    value: function repaint() {
      this.canvas && this.canvas.dispose();
      this.draw();
    }
  }, {
    key: "onDesignToolsPropsClick",
    value: function onDesignToolsPropsClick() {
      var props = inspectable.get(this);
      Service_Service.instance.bus.emit('props', {
        uuid: this.uuid,
        data: this.inspectable
      });
    }
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {
      var _this5 = this;

      // determin mode by parent
      // to prevent layer chart to draw
      this.mode = this.$parent instanceof PaChart_1 ? 'layer' : 'chart';
      this.$nextTick(function () {
        _this5.init();
      });
      this.bus.on('theme.changed', this.repaint);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      this.bus.off('theme.changed', this.repaint);
    }
  }, {
    key: "realData",
    get: function get() {
      return typeof this.data === 'string' ? this.__data || [] : this.data;
    }
  }, {
    key: "hooks",
    get: function get() {
      return {
        beforePaint: this.beforePaint,
        dataAvailable: this.dataAvailable
      };
    }
  }, {
    key: "props",
    get: function get() {
      var _this6 = this;

      var accessories = {};

      if (this.accessories) {
        Object.keys(this.accessories).forEach(function (a) {
          accessories[a] = _this6.accessories[a].props;
        });
      }

      return Object.assign({}, this.$props, {
        __data: this.__data,
        uuid: this.uuid,
        type: this.type,
        subType: this.subType,
        layers: this.layers.map(function (l) {
          return l.props;
        }),
        accessories: accessories
      });
    }
  }, {
    key: "inspectable",
    get: function get() {
      var main = inspectable.get(this);
      var layers = [];
      this.layers.forEach(function (l) {
        layers.push({
          name: l.type,
          props: inspectable.get(l)
        });
      });
      var accessories = [];
      return {
        main: main,
        layers: layers,
        accessories: accessories
      };
    }
  }, {
    key: "computedProps",
    get: function get() {
      var _this$layers;

      var _this$processSlots = this.processSlots(),
          layers = _this$processSlots.layers,
          accessories = _this$processSlots.accessories;

      this.layers = (_this$layers = this.layers).concat.apply(_this$layers, toConsumableArray_default()(layers));
      this.accessories = merge_default()({}, this.accessories, accessories);
      var preset = presets_PresetManager.get(this.preset);
      var theme = shared_themes[this.theme || 'dark'];
      var assignedProps = {};
      var props = this.props;
      Object.keys(props).forEach(function (p) {
        if (props[p] !== undefined) {
          // 直接给定的props
          assignedProps[p] = props[p];
        }
      });
      Object.keys(assignedProps).forEach(function (p) {
        assignedProps[p] = normalizeProps(assignedProps[p], p);
      });
      var finalProps = merge_default()({}, // 覆盖顺序
      theme.props, // props in theme
      preset.props, // preset props
      assignedProps, // props assigned
      {
        name: this.constructor.name
      });
      console.log('%c///Chart.ts: get computedProps: finalProps', 'background-color:#009688;color:#fff;', finalProps);
      return finalProps;
    }
  }]);

  return PaChart;
}(chart_Component);

__decorate([inspectable({
  type: String,
  label: '标题',
  order: 2
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "title", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "x", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "y", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "axis", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "options", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "legend", void 0);

__decorate([inspectable({
  type: String,
  label: '预设组',
  order: 1
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "preset", void 0);

__decorate([inspectable({
  label: '颜色序列',
  type: inspectable_PropTypes.Colors,
  order: 3,
  default: []
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "colors", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "dataset", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "rotate", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Chart_PaChart.prototype, "beforePaint", void 0);

Chart_PaChart = PaChart_1 = __decorate([vue_class_component_esm({
  template: "\n    <div class=\"chart-container\"\n      :class=\"{'designtime': $chartlib.designtime}\">\n      <pa-design-tools\n        v-if=\"$chartlib.designtime\"\n        @propsClick=\"onDesignToolsPropsClick\" />\n      <div class=\"chart-header\">\n        <h6 v-if=\"title\">{{title}}</h6>\n      </div>\n      <div class=\"chart\" ref=\"chart\">\n        <slot></slot>\n      </div>\n    </div>",
  components: {
    PaDesignTools: DesignTools
  }
}), __metadata("design:paramtypes", [])], Chart_PaChart);
/* harmony default export */ var Chart = (Chart_PaChart);
// CONCATENATED MODULE: ./src/core/chart/index.ts


/* harmony default export */ var core_chart = (Chart);

// CONCATENATED MODULE: ./src/charts/bar/Bar.ts










var Bar_PaBarChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaBarChart, _PaChart);

  function PaBarChart() {
    var _this;

    classCallCheck_default()(this, PaBarChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaBarChart).call(this));
    _this.type = 'bar';
    return _this;
  }

  createClass_default()(PaBarChart, [{
    key: "onBarClick",
    value: function onBarClick() {
      this.$emit('click');
    }
  }]);

  return PaBarChart;
}(core_chart);

__decorate([inspectable({
  type: Boolean,
  label: '圆角'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "round", void 0);

__decorate([inspectable({
  type: Number,
  label: '单柱宽度'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "barWidth", void 0);

__decorate([inspectable({
  type: inspectable_PropTypes.Percent,
  label: '柱间距',
  default: '10%'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "barGap", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '堆叠'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "stacked", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '阴影'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "shadow", void 0);

__decorate([vue_property_decorator_Prop({
  type: [String, Array]
}), __metadata("design:type", Object)], Bar_PaBarChart.prototype, "data", void 0);

Bar_PaBarChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Bar_PaBarChart);
/* harmony default export */ var Bar = (Bar_PaBarChart);
// CONCATENATED MODULE: ./src/charts/bar/Polar.ts








var Polar_PaPolarChart =
/*#__PURE__*/
function (_PaBarChart) {
  inherits_default()(PaPolarChart, _PaBarChart);

  function PaPolarChart() {
    var _this;

    classCallCheck_default()(this, PaPolarChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaPolarChart).call(this));
    _this.type = 'bar';
    _this.subType = 'polar';
    return _this;
  }

  return PaPolarChart;
}(Bar);

__decorate([vue_property_decorator_Prop({
  type: [String, Array]
}), __metadata("design:type", Object)], Polar_PaPolarChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Polar_PaPolarChart.prototype, "labelName", void 0);

Polar_PaPolarChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Polar_PaPolarChart);
/* harmony default export */ var Polar = (Polar_PaPolarChart);
// CONCATENATED MODULE: ./src/charts/bar/index.ts


var Plugin = {
  install: function install(Vue) {
    Vue.component(Bar.name, Bar);
    Vue.component(Polar.name, Polar);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var bar = (Plugin);

// CONCATENATED MODULE: ./src/charts/pie/Pie.ts






var Pie_a;






var Pie_PaPieChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaPieChart, _PaChart);

  function PaPieChart() {
    var _this;

    classCallCheck_default()(this, PaPieChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaPieChart).call(this));
    _this.type = 'pie';
    return _this;
  } // hooks


  createClass_default()(PaPieChart, [{
    key: "dataAvailable",
    value: function dataAvailable(data, props) {
      // 计算出百分比值
      var dataWithPercent = [];

      if (Array.isArray(this.realData)) {
        this.realData.forEach(function (groupArray) {
          var sum = groupArray.map(function (x) {
            return x.value;
          }).reduce(function (a, v) {
            return a + v;
          });
          var groupData = groupArray.map(function (item) {
            return Object.assign({}, item, {
              percent: parseFloat((100 * (item.value / sum)).toPrecision(2))
            });
          });
          dataWithPercent.push(groupData);
        });
        return dataWithPercent;
      } else {
        return props;
      }
    }
  }]);

  return PaPieChart;
}(core_chart);

__decorate([inspectable({
  type: inspectable_PropTypes.Range,
  label: '内外径',
  default: [0, 50]
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Pie_PaPieChart.prototype, "radius", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Pie_PaPieChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop({
  default: true
}), __metadata("design:type", Object)], Pie_PaPieChart.prototype, "labelShow", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Pie_PaPieChart.prototype, "outPieColor", void 0);

Pie_PaPieChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Pie_PaPieChart);
/* harmony default export */ var Pie = (Pie_PaPieChart);
// CONCATENATED MODULE: ./src/charts/pie/Ring.ts








var Ring_PaRingChart =
/*#__PURE__*/
function (_PaPieChart) {
  inherits_default()(PaRingChart, _PaPieChart);

  function PaRingChart() {
    var _this;

    classCallCheck_default()(this, PaRingChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaRingChart).call(this));
    _this.type = 'pie';
    _this.subType = 'ring';
    return _this;
  }

  return PaRingChart;
}(Pie);

Ring_PaRingChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Ring_PaRingChart);
/* harmony default export */ var Ring = (Ring_PaRingChart);
// CONCATENATED MODULE: ./src/charts/pie/index.ts


var pie_Plugin = {
  install: function install(Vue) {
    Vue.component(Pie.name, Pie);
    Vue.component(Ring.name, Ring);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var pie = (pie_Plugin);

// CONCATENATED MODULE: ./src/charts/line/Line.ts





var Line_a;






var Line_PaLineChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaLineChart, _PaChart);

  function PaLineChart() {
    var _this;

    classCallCheck_default()(this, PaLineChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaLineChart).call(this));
    _this.type = 'line';
    return _this;
  }

  return PaLineChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Line_PaLineChart.prototype, "data", void 0);

__decorate([inspectable({
  type: Number,
  label: '线型宽度'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Line_PaLineChart.prototype, "lineWidth", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '坐标轴间隙'
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Object)], Line_PaLineChart.prototype, "gap", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '堆叠'
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Object)], Line_PaLineChart.prototype, "stacked", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '平滑曲线'
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Line_PaLineChart.prototype, "smooth", void 0);

__decorate([inspectable({
  type: Boolean,
  label: '面积'
}), vue_property_decorator_Prop(), __metadata("design:type", Object)], Line_PaLineChart.prototype, "area", void 0);

Line_PaLineChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Line_PaLineChart);
/* harmony default export */ var Line = (Line_PaLineChart);
// CONCATENATED MODULE: ./src/charts/line/index.ts

var line_Plugin = {
  install: function install(Vue) {
    Vue.component(Line.name, Line);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var line = (line_Plugin);

// CONCATENATED MODULE: ./src/charts/scatter/Scatter.ts









var Scatter_PaScatterChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaScatterChart, _PaChart);

  function PaScatterChart() {
    var _this;

    classCallCheck_default()(this, PaScatterChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaScatterChart).call(this));
    _this.type = 'scatter';
    return _this;
  }

  return PaScatterChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Scatter_PaScatterChart.prototype, "data", void 0);

__decorate([inspectable({
  label: '散点形状',
  type: Number
}), vue_property_decorator_Prop({}), __metadata("design:type", Object)], Scatter_PaScatterChart.prototype, "symbol", void 0);

Scatter_PaScatterChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Scatter_PaScatterChart);
/* harmony default export */ var Scatter = (Scatter_PaScatterChart);
// CONCATENATED MODULE: ./src/charts/scatter/index.ts

var scatter_Plugin = {
  install: function install(Vue) {
    Vue.component(Scatter.name, Scatter);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var scatter = (scatter_Plugin);

// CONCATENATED MODULE: ./src/charts/map/Map.ts








var Map_PaMap =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaMap, _PaChart);

  function PaMap() {
    var _this;

    classCallCheck_default()(this, PaMap);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaMap).call(this));
    _this.type = 'map';
    return _this;
  }

  return PaMap;
}(core_chart);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Map_PaMap.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Map_PaMap.prototype, "x", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Map_PaMap.prototype, "y", void 0);

Map_PaMap = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Map_PaMap);
/* harmony default export */ var Map = (Map_PaMap);
// CONCATENATED MODULE: ./src/charts/map/BaiduMap.ts









var BaiduMap_PaBaiduMap =
/*#__PURE__*/
function (_PaMap) {
  inherits_default()(PaBaiduMap, _PaMap);

  function PaBaiduMap() {
    var _this;

    classCallCheck_default()(this, PaBaiduMap);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaBaiduMap).call(this));
    _this.subType = 'baidu-map';
    return _this;
  }

  createClass_default()(PaBaiduMap, [{
    key: "afterCreate",
    value: function afterCreate() {}
  }, {
    key: "postProcessSlots",
    value: function postProcessSlots(props) {
      Object.keys(props).forEach(function (p) {
        if (p === 'layers') {
          props[p].forEach(function (l) {
            l.subType = 'baidu-map-scatter';
          });
        }
      });
      return props;
    }
  }]);

  return PaBaiduMap;
}(Map);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], BaiduMap_PaBaiduMap.prototype, "data", void 0);

BaiduMap_PaBaiduMap = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], BaiduMap_PaBaiduMap);
/* harmony default export */ var BaiduMap = (BaiduMap_PaBaiduMap);
// CONCATENATED MODULE: ./src/charts/map/index.ts


var map_Plugin = {
  install: function install(Vue) {
    Vue.component(Map.name, Map);
    Vue.component(BaiduMap.name, BaiduMap);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var map = (map_Plugin);

// CONCATENATED MODULE: ./src/charts/tree/Tree.ts








var Tree_PaTreeChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaTreeChart, _PaChart);

  function PaTreeChart() {
    var _this;

    classCallCheck_default()(this, PaTreeChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaTreeChart).call(this));
    _this.type = 'tree';
    return _this;
  }

  return PaTreeChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({
  default: function _default() {
    return null;
  }
}), __metadata("design:type", Object)], Tree_PaTreeChart.prototype, "data", void 0);

Tree_PaTreeChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Tree_PaTreeChart);
/* harmony default export */ var Tree = (Tree_PaTreeChart);
// CONCATENATED MODULE: ./src/charts/tree/index.ts

var tree_Plugin = {
  install: function install(Vue) {
    Vue.component(Tree.name, Tree);
  }
};
/* harmony default export */ var tree = (tree_Plugin);

// CONCATENATED MODULE: ./src/charts/treemap/Treemap.ts








var Treemap_PaTreemapChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaTreemapChart, _PaChart);

  function PaTreemapChart() {
    var _this;

    classCallCheck_default()(this, PaTreemapChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaTreemapChart).call(this));
    _this.type = 'treemap';
    return _this;
  }

  return PaTreemapChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({
  default: function _default() {
    return null;
  }
}), __metadata("design:type", Object)], Treemap_PaTreemapChart.prototype, "data", void 0);

Treemap_PaTreemapChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Treemap_PaTreemapChart);
/* harmony default export */ var Treemap = (Treemap_PaTreemapChart);
// CONCATENATED MODULE: ./src/charts/treemap/index.ts

var treemap_Plugin = {
  install: function install(Vue) {
    Vue.component(Treemap.name, Treemap);
  }
};
/* harmony default export */ var treemap = (treemap_Plugin);

// CONCATENATED MODULE: ./src/charts/radar/Radar.ts








var Radar_PaRadarChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaRadarChart, _PaChart);

  function PaRadarChart() {
    var _this;

    classCallCheck_default()(this, PaRadarChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaRadarChart).call(this));
    _this.type = 'radar';
    return _this;
  }

  return PaRadarChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({
  default: function _default() {
    return null;
  }
}), __metadata("design:type", Object)], Radar_PaRadarChart.prototype, "data", void 0);

Radar_PaRadarChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Radar_PaRadarChart);
/* harmony default export */ var Radar = (Radar_PaRadarChart);
// CONCATENATED MODULE: ./src/charts/radar/index.ts

var radar_Plugin = {
  install: function install(Vue) {
    Vue.component(Radar.name, Radar);
  }
};
/* harmony default export */ var radar = (radar_Plugin);

// CONCATENATED MODULE: ./src/charts/rose/Rose.ts








var Rose_PaRoseChart =
/*#__PURE__*/
function (_PaPieChart) {
  inherits_default()(PaRoseChart, _PaPieChart);

  function PaRoseChart() {
    var _this;

    classCallCheck_default()(this, PaRoseChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaRoseChart).call(this));
    _this.type = 'pie';
    return _this;
  }

  return PaRoseChart;
}(Pie);

__decorate([vue_property_decorator_Prop({
  default: false
}), __metadata("design:type", Object)], Rose_PaRoseChart.prototype, "half", void 0);

Rose_PaRoseChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Rose_PaRoseChart);
/* harmony default export */ var Rose = (Rose_PaRoseChart);
// CONCATENATED MODULE: ./src/charts/rose/index.ts

var rose_Plugin = {
  install: function install(Vue) {
    Vue.component(Rose.name, Rose);
  }
};
/* harmony default export */ var rose = (rose_Plugin);

// EXTERNAL MODULE: external "echarts-gl"
var external_echarts_gl_ = __webpack_require__("4521");

// CONCATENATED MODULE: ./src/charts/3d/ThreedBar.ts





 // import Prop from '../../core/decorators/Prop'




var ThreedBar_Pa3dBarChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(Pa3dBarChart, _PaChart);

  function Pa3dBarChart() {
    var _this;

    classCallCheck_default()(this, Pa3dBarChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Pa3dBarChart).call(this));
    _this.type = 'bar3D';
    _this.subType = '3d-bar';
    return _this;
  }

  return Pa3dBarChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({
  type: [String, Array]
}), __metadata("design:type", Object)], ThreedBar_Pa3dBarChart.prototype, "data", void 0);

ThreedBar_Pa3dBarChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], ThreedBar_Pa3dBarChart);
/* harmony default export */ var ThreedBar = (ThreedBar_Pa3dBarChart);
// CONCATENATED MODULE: ./src/charts/3d/index.ts

var _3d_Plugin = {
  install: function install(Vue) {
    Vue.component(ThreedBar.name, ThreedBar);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var _3d = (_3d_Plugin);

// EXTERNAL MODULE: external "echarts-liquidfill"
var external_echarts_liquidfill_ = __webpack_require__("8505");

// CONCATENATED MODULE: ./src/charts/liquid/Liquid.ts






 // import Prop from '../../core/decorators/Prop'



var Liquid_PaLiquidChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaLiquidChart, _PaChart);

  function PaLiquidChart() {
    var _this;

    classCallCheck_default()(this, PaLiquidChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaLiquidChart).call(this));
    _this.type = 'liquidFill';
    _this.subType = 'liquid';
    return _this;
  }

  return PaLiquidChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Liquid_PaLiquidChart.prototype, "distribute", void 0);

Liquid_PaLiquidChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Liquid_PaLiquidChart);
/* harmony default export */ var Liquid = (Liquid_PaLiquidChart);
// CONCATENATED MODULE: ./src/charts/liquid/index.ts

var liquid_Plugin = {
  install: function install(Vue) {
    Vue.component(Liquid.name, Liquid);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var liquid = (liquid_Plugin);

// CONCATENATED MODULE: ./src/charts/gauge/Gauge.ts





 // import Prop from '../../core/decorators/Prop'



var Gauge_PaGaugeChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaGaugeChart, _PaChart);

  function PaGaugeChart() {
    var _this;

    classCallCheck_default()(this, PaGaugeChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaGaugeChart).call(this));
    _this.type = 'gauge';
    return _this;
  }

  return PaGaugeChart;
}(core_chart);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "center", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "radius", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "titleName", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "gaugeGradientColor", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "startEndAngle", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Gauge_PaGaugeChart.prototype, "titleColor", void 0);

Gauge_PaGaugeChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Gauge_PaGaugeChart);
/* harmony default export */ var Gauge = (Gauge_PaGaugeChart);
// CONCATENATED MODULE: ./src/charts/gauge/index.ts

var gauge_Plugin = {
  install: function install(Vue) {
    Vue.component(Gauge.name, Gauge);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var gauge = (gauge_Plugin);

// CONCATENATED MODULE: ./src/charts/pictorialBar/PictorialBar.ts





 // import Prop from '../../core/decorators/Prop'

 // import { ChartDataTypes } from '../../core/data'

var PictorialBar_PaPictorialBarChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaPictorialBarChart, _PaChart);

  function PaPictorialBarChart() {
    var _this;

    classCallCheck_default()(this, PaPictorialBarChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaPictorialBarChart).call(this));
    _this.type = 'pictorialBar';
    return _this;
  }

  return PaPictorialBarChart;
}(core_chart);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "center", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "radius", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "titleName", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "gaugeGradientColor", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "startEndAngle", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "titleColor", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "area", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], PictorialBar_PaPictorialBarChart.prototype, "symbol", void 0);

PictorialBar_PaPictorialBarChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], PictorialBar_PaPictorialBarChart);
/* harmony default export */ var PictorialBar = (PictorialBar_PaPictorialBarChart);
// CONCATENATED MODULE: ./src/charts/pictorialBar/index.ts

var pictorialBar_Plugin = {
  install: function install(Vue) {
    Vue.component(PictorialBar.name, PictorialBar);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var pictorialBar = (pictorialBar_Plugin);

// CONCATENATED MODULE: ./src/charts/funnel/Funnel.ts





 // import Prop from '../../core/decorators/Prop'

 // import { ChartDataTypes } from '../../core/data'

var Funnel_PaFunnelChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaFunnelChart, _PaChart);

  // @Prop()
  // titleName: string | undefined
  // @Prop()
  // gaugeGradientColor: string[] | undefined
  // @Prop()
  // startEndAngle: number[] | undefined
  // @Prop()
  // titleColor: string|undefined
  function PaFunnelChart() {
    var _this;

    classCallCheck_default()(this, PaFunnelChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaFunnelChart).call(this));
    _this.type = 'funnel';
    return _this;
  }

  return PaFunnelChart;
}(core_chart);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Funnel_PaFunnelChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Funnel_PaFunnelChart.prototype, "sort", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Funnel_PaFunnelChart.prototype, "canPosition", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Funnel_PaFunnelChart.prototype, "nameOrValue", void 0);

Funnel_PaFunnelChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Funnel_PaFunnelChart);
/* harmony default export */ var Funnel = (Funnel_PaFunnelChart);
// CONCATENATED MODULE: ./src/charts/funnel/index.ts

var funnel_Plugin = {
  install: function install(Vue) {
    Vue.component(Funnel.name, Funnel);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var funnel = (funnel_Plugin);

// CONCATENATED MODULE: ./src/charts/network/Network.ts








var Network_PaNetworkChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaNetworkChart, _PaChart);

  function PaNetworkChart() {
    var _this;

    classCallCheck_default()(this, PaNetworkChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaNetworkChart).call(this));
    _this.type = 'graph';
    _this.subType = 'network';
    return _this;
  }

  return PaNetworkChart;
}(core_chart);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Network_PaNetworkChart.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Network_PaNetworkChart.prototype, "symbol", void 0);

Network_PaNetworkChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Network_PaNetworkChart);
/* harmony default export */ var Network = (Network_PaNetworkChart);
// CONCATENATED MODULE: ./src/charts/network/index.ts

var network_plugin = {
  install: function install(Vue) {
    Vue.component(Network.name, Network);
  }
}; // Vue.use(plugin)

/* harmony default export */ var network = (network_plugin);

// CONCATENATED MODULE: ./src/charts/lines/Lines.ts





var Lines_a;





var Lines_PaLinesChart =
/*#__PURE__*/
function (_PaChart) {
  inherits_default()(PaLinesChart, _PaChart);

  function PaLinesChart() {
    var _this;

    classCallCheck_default()(this, PaLinesChart);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaLinesChart).call(this));
    _this.type = 'lines';
    return _this;
  }

  return PaLinesChart;
}(core_chart);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Lines_PaLinesChart.prototype, "data", void 0);

Lines_PaLinesChart = __decorate([vue_class_component_esm({}), __metadata("design:paramtypes", [])], Lines_PaLinesChart);
/* harmony default export */ var Lines = (Lines_PaLinesChart);
// CONCATENATED MODULE: ./src/charts/lines/index.ts

var lines_Plugin = {
  install: function install(Vue) {
    Vue.component(Lines.name, Lines);
  }
}; // Vue.use(Plugin)

/* harmony default export */ var lines = (lines_Plugin);

// CONCATENATED MODULE: ./src/charts/index.ts
















var plugins = {
  PaBarChartPlugin: bar,
  PaPieChartPlugin: pie,
  PaLineChartPlugin: line,
  PaScatterChartPlugin: scatter,
  PaTreeChartPlugin: tree,
  PaTreemapChartPlugin: treemap,
  PaRadarChartPlugin: radar,
  PaRoseChartPlugin: rose,
  PaMapPlugin: map,
  Pa3dBarChartPlugin: _3d,
  PaLiquidChartPlugin: liquid,
  PaGaugeChartPlugin: gauge,
  PaPictorialBarPlugin: pictorialBar,
  paFunnelChartPlugin: funnel,
  PaNetworkChartPlugin: network,
  PaLinesChartPlugin: lines
};
var charts = {
  PaBarChart: Bar,
  PaPolarChart: Polar,
  PaPieChart: Pie,
  PaRingChart: Ring,
  PaLineChart: Line,
  PaScatterChart: Scatter,
  PaMap: Map,
  PaTreeChart: Tree,
  PaTreemapChart: Treemap,
  PaRadarChart: Radar,
  PaRoseChart: Rose,
  PaBaiduMap: BaiduMap,
  Pa3dBarChart: ThreedBar,
  PaLiquidChart: Liquid,
  PaGaugeChart: Gauge,
  PaPictorialBarChart: PictorialBar,
  PaFunnelChart: Funnel,
  PaNetworkChart: Network,
  PaLinesChart: Lines
};

// CONCATENATED MODULE: ./src/core/accessories/Accessory.ts






var Accessory_a;




/**
 * Base class for chart accessories
 */

var Accessory_PaAccessory =
/*#__PURE__*/
function (_Vue) {
  inherits_default()(PaAccessory, _Vue);

  /**
   * Base class for chart accessories
   */
  function PaAccessory() {
    var _this;

    classCallCheck_default()(this, PaAccessory);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaAccessory).apply(this, arguments));
    _this.__parent = null;
    return _this;
  }

  createClass_default()(PaAccessory, [{
    key: "apply",
    value: function apply() {
      return null;
    }
  }, {
    key: "props",
    get: function get() {
      return this.$props;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.__parent;
    },
    set: function set(parent) {
      this.__parent = parent;
    }
  }]);

  return PaAccessory;
}(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a);

__decorate([vue_property_decorator_Prop({
  default: 'dark'
}), __metadata("design:type", Object)], Accessory_PaAccessory.prototype, "theme", void 0);

__decorate([vue_property_decorator_Prop(Object), __metadata("design:type", Object)], Accessory_PaAccessory.prototype, "styles", void 0);

Accessory_PaAccessory = __decorate([vue_class_component_esm({
  template: '<div></div>'
})], Accessory_PaAccessory);
/* harmony default export */ var Accessory = (Accessory_PaAccessory);
// CONCATENATED MODULE: ./src/core/accessories/axises/Axis.ts







/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */

var Axis_PaAxis =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaAxis, _PaAccessory);

  function PaAxis() {
    classCallCheck_default()(this, PaAxis);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaAxis).apply(this, arguments));
  }

  return PaAxis;
}(Accessory);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: 'right'
}), __metadata("design:type", Object)], Axis_PaAxis.prototype, "position", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Axis_PaAxis.prototype, "label", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Axis_PaAxis.prototype, "unit", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Axis_PaAxis.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Axis_PaAxis.prototype, "yName", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Axis_PaAxis.prototype, "xName", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Axis_PaAxis.prototype, "xSplitLine", void 0);

Axis_PaAxis = __decorate([vue_class_component_esm({})], Axis_PaAxis);
/* harmony default export */ var Axis = (Axis_PaAxis);
// CONCATENATED MODULE: ./src/core/accessories/axises/index.ts


// CONCATENATED MODULE: ./src/core/accessories/tooltips/Tooltip.ts







/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */

var Tooltip_PaTooltip =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaTooltip, _PaAccessory);

  function PaTooltip() {
    classCallCheck_default()(this, PaTooltip);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaTooltip).apply(this, arguments));
  }

  return PaTooltip;
}(Accessory);

__decorate([vue_property_decorator_Prop({
  default: function _default() {
    return [10, 10];
  }
}), __metadata("design:type", Object)], Tooltip_PaTooltip.prototype, "position", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Tooltip_PaTooltip.prototype, "formatter", void 0);

__decorate([vue_property_decorator_Prop(), __metadata("design:type", Object)], Tooltip_PaTooltip.prototype, "axisPointer", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Tooltip_PaTooltip.prototype, "data", void 0);

Tooltip_PaTooltip = __decorate([vue_class_component_esm({})], Tooltip_PaTooltip);
/* harmony default export */ var Tooltip = (Tooltip_PaTooltip);
// CONCATENATED MODULE: ./src/core/accessories/tooltips/index.ts


// CONCATENATED MODULE: ./src/core/accessories/layers/Layer.ts







/**
 * 图表里的图层
 * 相当于 echarts 配置项里的 serie
 */

var Layer_PaLayer =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaLayer, _PaAccessory);

  function PaLayer() {
    classCallCheck_default()(this, PaLayer);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaLayer).apply(this, arguments));
  }

  return PaLayer;
}(Accessory);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Layer_PaLayer.prototype, "type", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Layer_PaLayer.prototype, "label", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Layer_PaLayer.prototype, "data", void 0);

Layer_PaLayer = __decorate([vue_class_component_esm({
  template: ''
})], Layer_PaLayer);
/* harmony default export */ var Layer = (Layer_PaLayer);
// CONCATENATED MODULE: ./src/core/accessories/layers/index.ts


// CONCATENATED MODULE: ./src/core/accessories/marks/Marks.ts







/**
 * Mark points of charts
 */

var Marks_PaMarks =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaMarks, _PaAccessory);

  function PaMarks() {
    classCallCheck_default()(this, PaMarks);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaMarks).apply(this, arguments));
  }

  return PaMarks;
}(Accessory);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Marks_PaMarks.prototype, "type", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Marks_PaMarks.prototype, "label", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Marks_PaMarks.prototype, "data", void 0);

Marks_PaMarks = __decorate([vue_class_component_esm({})], Marks_PaMarks);
/* harmony default export */ var Marks = (Marks_PaMarks);
// CONCATENATED MODULE: ./src/core/accessories/marks/index.ts


// CONCATENATED MODULE: ./src/core/accessories/legend/Legend.ts







/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */

var Legend_PaLegend =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaLegend, _PaAccessory);

  function PaLegend() {
    classCallCheck_default()(this, PaLegend);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaLegend).apply(this, arguments));
  }

  return PaLegend;
}(Accessory);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: 'right'
}), __metadata("design:type", Object)], Legend_PaLegend.prototype, "align", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Legend_PaLegend.prototype, "label", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], Legend_PaLegend.prototype, "data", void 0);

Legend_PaLegend = __decorate([vue_class_component_esm({})], Legend_PaLegend);
/* harmony default export */ var Legend = (Legend_PaLegend);
// CONCATENATED MODULE: ./src/core/accessories/legend/index.ts


// CONCATENATED MODULE: ./src/core/accessories/markareas/Markareas.ts







/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */

var Markareas_PaMarkareas =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaMarkareas, _PaAccessory);

  function PaMarkareas() {
    classCallCheck_default()(this, PaMarkareas);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaMarkareas).apply(this, arguments));
  }

  return PaMarkareas;
}(Accessory);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: function _default() {
    return 'max-min';
  }
}), __metadata("design:type", Object)], Markareas_PaMarkareas.prototype, "mode", void 0);

__decorate([vue_property_decorator_Prop({}), __metadata("design:type", Object)], Markareas_PaMarkareas.prototype, "data", void 0);

__decorate([vue_property_decorator_Prop(String), __metadata("design:type", Object)], Markareas_PaMarkareas.prototype, "label", void 0);

Markareas_PaMarkareas = __decorate([vue_class_component_esm({})], Markareas_PaMarkareas);
/* harmony default export */ var Markareas = (Markareas_PaMarkareas);
// CONCATENATED MODULE: ./src/core/accessories/markareas/index.ts


// CONCATENATED MODULE: ./src/core/accessories/visualMap/VisualMap.ts







/**
 * VisualMap
 * 覆盖默认配置
 */

var VisualMap_PaVisualMap =
/*#__PURE__*/
function (_PaAccessory) {
  inherits_default()(PaVisualMap, _PaAccessory);

  function PaVisualMap() {
    classCallCheck_default()(this, PaVisualMap);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PaVisualMap).apply(this, arguments));
  }

  return PaVisualMap;
}(Accessory);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Object)], VisualMap_PaVisualMap.prototype, "show", void 0);

__decorate([vue_property_decorator_Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Object)], VisualMap_PaVisualMap.prototype, "min", void 0);

__decorate([vue_property_decorator_Prop(Number), __metadata("design:type", Object)], VisualMap_PaVisualMap.prototype, "max", void 0);

__decorate([vue_property_decorator_Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Object)], VisualMap_PaVisualMap.prototype, "dimension", void 0);

__decorate([vue_property_decorator_Prop(Array), __metadata("design:type", Object)], VisualMap_PaVisualMap.prototype, "color", void 0);

VisualMap_PaVisualMap = __decorate([vue_class_component_esm({})], VisualMap_PaVisualMap);
/* harmony default export */ var VisualMap = (VisualMap_PaVisualMap);
// CONCATENATED MODULE: ./src/core/accessories/visualMap/index.ts


// CONCATENATED MODULE: ./src/core/accessories/index.ts






 // import { PaMarkline } from './markline'

var accessories_accessories = {
  PaAxis: Axis,
  PaTooltip: Tooltip,
  PaLayer: Layer,
  PaMarks: Marks,
  PaLegend: Legend,
  PaMarkareas: Markareas,
  PaVisualMap: VisualMap
};
/* harmony default export */ var core_accessories = (accessories_accessories);
// CONCATENATED MODULE: ./src/providers/echarts/themes/dark.ts
var lineColor = '#447';
var labelColor = '#99d';
var textColor = '#cce';

var axisCommon = function axisCommon() {
  return {
    axisLine: {
      lineStyle: {
        color: lineColor
      }
    },
    axisTick: {
      lineStyle: {
        color: lineColor
      }
    },
    axisLabel: {
      textStyle: {
        color: labelColor
      }
    },
    splitLine: {
      lineStyle: {
        type: 'solid',
        color: '#447'
      }
    },
    splitArea: {
      areaStyle: {
        color: lineColor
      }
    }
  };
};

var colorPalette = ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85'];
var dark_theme = {
  color: colorPalette,
  backgroundColor: 'rgba(0,0,0,.2)',
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: lineColor
      },
      crossStyle: {
        color: lineColor
      }
    }
  },
  legend: {
    textStyle: {
      color: textColor
    }
  },
  textStyle: {
    color: textColor
  },
  title: {
    textStyle: {
      color: textColor
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: lineColor
      }
    }
  },
  dataZoom: {
    textStyle: {
      color: lineColor
    }
  },
  timeline: {
    lineStyle: {
      color: lineColor
    },
    itemStyle: {
      normal: {
        color: colorPalette[1]
      }
    },
    label: {
      normal: {
        textStyle: {
          color: lineColor
        }
      }
    },
    controlStyle: {
      normal: {
        color: lineColor,
        borderColor: lineColor
      }
    }
  },
  timeAxis: axisCommon(),
  logAxis: axisCommon(),
  valueAxis: axisCommon(),
  categoryAxis: axisCommon(),
  line: {
    symbol: 'circle'
  },
  graph: {
    color: colorPalette
  },
  gauge: {
    title: {
      textStyle: {
        color: lineColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  }
};
/* harmony default export */ var themes_dark = (dark_theme);
// CONCATENATED MODULE: ./src/providers/echarts/themes/warm.ts
var contrastColor = '#eee';

var warm_axisCommon = function axisCommon() {
  return {
    axisLine: {
      lineStyle: {
        color: contrastColor
      }
    },
    axisTick: {
      lineStyle: {
        color: contrastColor
      }
    },
    axisLabel: {
      textStyle: {
        color: contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#aaa'
      }
    },
    splitArea: {
      areaStyle: {
        color: contrastColor
      }
    }
  };
};

var warm_colorPalette = ['#9b8bba', '#e098c7', '#8fd3e8', '#71669e', '#cc70af', '#7cb4cc'];
var warm_theme = {
  color: warm_colorPalette,
  backgroundColor: 'rgba(0,0,0,.2)',
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: contrastColor
      },
      crossStyle: {
        color: contrastColor
      }
    }
  },
  legend: {
    textStyle: {
      color: contrastColor
    }
  },
  textStyle: {
    color: contrastColor
  },
  title: {
    textStyle: {
      color: contrastColor
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: contrastColor
      }
    }
  },
  dataZoom: {
    textStyle: {
      color: contrastColor
    }
  },
  timeline: {
    lineStyle: {
      color: contrastColor
    },
    itemStyle: {
      normal: {
        color: warm_colorPalette[1]
      }
    },
    label: {
      normal: {
        textStyle: {
          color: contrastColor
        }
      }
    },
    controlStyle: {
      normal: {
        color: contrastColor,
        borderColor: contrastColor
      }
    }
  },
  timeAxis: warm_axisCommon(),
  logAxis: warm_axisCommon(),
  valueAxis: warm_axisCommon(),
  categoryAxis: warm_axisCommon(),
  line: {
    symbol: 'circle'
  },
  graph: {
    color: warm_colorPalette
  },
  gauge: {
    title: {
      textStyle: {
        color: contrastColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  }
};
/* harmony default export */ var themes_warm = (warm_theme);
// CONCATENATED MODULE: ./src/providers/echarts/themes/cold.ts
var cold_contrastColor = '#000';

var cold_axisCommon = function axisCommon() {
  return {
    axisLine: {
      lineStyle: {
        color: cold_contrastColor
      }
    },
    axisTick: {
      lineStyle: {
        color: cold_contrastColor
      }
    },
    axisLabel: {
      textStyle: {
        color: cold_contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#aaa'
      }
    },
    splitArea: {
      areaStyle: {
        color: cold_contrastColor
      }
    }
  };
};

var cold_colorPalette = [];
var cold_theme = {
  color: cold_colorPalette,
  backgroundColor: 'rgba(0,0,0,.2)',
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: cold_contrastColor
      },
      crossStyle: {
        color: cold_contrastColor
      }
    }
  },
  legend: {
    textStyle: {
      color: cold_contrastColor
    }
  },
  textStyle: {
    color: cold_contrastColor
  },
  title: {
    textStyle: {
      color: cold_contrastColor
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: cold_contrastColor
      }
    }
  },
  dataZoom: {
    textStyle: {
      color: cold_contrastColor
    }
  },
  timeline: {
    lineStyle: {
      color: cold_contrastColor
    },
    itemStyle: {
      normal: {}
    },
    label: {
      normal: {
        textStyle: {
          color: cold_contrastColor
        }
      }
    },
    controlStyle: {
      normal: {
        color: cold_contrastColor,
        borderColor: cold_contrastColor
      }
    }
  },
  timeAxis: cold_axisCommon(),
  logAxis: cold_axisCommon(),
  valueAxis: cold_axisCommon(),
  categoryAxis: cold_axisCommon(),
  line: {
    symbol: 'circle'
  },
  graph: {
    color: cold_colorPalette
  },
  gauge: {
    title: {
      textStyle: {
        color: cold_contrastColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  }
};
/* harmony default export */ var themes_cold = (cold_theme);
// CONCATENATED MODULE: ./src/providers/echarts/themes/index.ts






var themes_themes = [{
  name: 'dark',
  theme: themes_dark
}, {
  name: 'warm',
  theme: themes_warm
}, {
  name: 'cold',
  theme: themes_cold
}];

var themes_ThemeManager =
/*#__PURE__*/
function () {
  function ThemeManager() {
    classCallCheck_default()(this, ThemeManager);
  }

  createClass_default()(ThemeManager, null, [{
    key: "init",
    value: function init() {
      themes_themes.forEach(function (t) {
        external_echarts_default.a.registerTheme(t['name'], t['theme']);
      });
    }
  }, {
    key: "register",
    value: function register(name, theme) {
      external_echarts_default.a.registerTheme(name, theme);
    }
  }]);

  return ThemeManager;
}();

/* harmony default export */ var echarts_themes = (themes_ThemeManager);
// CONCATENATED MODULE: ./src/core/chart/Factory.ts





var chartBook = {
  line: charts.PaLineChart,
  bar: charts.PaBarChart
};
var accessoryBook = {
  axis: Axis
};

function createChart(chartClass, input) {
  var chart = new chartClass();
  chart.uuid = input.uuid;

  if (input.layers) {
    if (input.props.layers) {
      var _input$props$layers;

      input.props.layers = (_input$props$layers = input.props.layers).concat.apply(_input$props$layers, toConsumableArray_default()(input.layers));
    } else {
      input.props.layers = input.layers;
    }
  }

  Object.assign(chart, input.props);
  chart.afterCreate();
  return chart;
}

function createAccessory(type, props) {
  var result = new type();
  Object.assign(result, props);
  return result;
}
/**
 * Factory to make Chart from name
 */


var Factory_ChartFactory =
/*#__PURE__*/
function () {
  function ChartFactory() {
    classCallCheck_default()(this, ChartFactory);
  }

  createClass_default()(ChartFactory, null, [{
    key: "make",
    value: function make(input) {
      var chart = null;

      for (var k in charts) {
        if (k === input.name) {
          (function () {
            var layers = [];

            if (input.props.layers) {
              input.props.layers.forEach(function (props) {
                var type = chartBook[props.type];

                if (type) {
                  var _chart = createChart(type, {
                    props: props
                  });

                  layers.push(_chart);
                }
              });
              Reflect.deleteProperty(input, 'layers');
            }

            var accessories = {};

            if (input.props.accessories) {
              var attrs = input.props.accessories;
              Object.keys(attrs).forEach(function (a) {
                var type = accessoryBook[a];

                if (type) {
                  var accessory = createAccessory(type, attrs[a]);
                  accessories[a] = accessory;
                }
              });
              Reflect.deleteProperty(input, 'accessories');
            }

            var chartClass = Reflect.get(charts, k);
            chart = createChart(chartClass, input);
            chart.layers = layers;
            chart.accessories = accessories;
          })();
        }
      }

      return chart;
    }
  }]);

  return ChartFactory;
}();

/* harmony default export */ var Factory = (Factory_ChartFactory);
// CONCATENATED MODULE: ./src/index.ts






var src_install = function install(Vue, options) {
  setGlobalConfigs(options);
  echarts_themes.init();

  for (var k in plugins) {
    Vue.use(plugins[k]);
  }

  for (var t in core_accessories) {
    var a = core_accessories[t];
    Vue.component(a.name, a);
  }

  Vue.prototype['$chartlib'] = Service_Service.instance;
};

var Chartlib = {
  install: src_install
};
/* harmony default export */ var src = (Chartlib);




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Chartlib */__webpack_require__.d(__webpack_exports__, "Chartlib", function() { return Chartlib; });
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return src_install; });
/* concated harmony reexport PaChart */__webpack_require__.d(__webpack_exports__, "PaChart", function() { return core_chart; });
/* concated harmony reexport ChartFactory */__webpack_require__.d(__webpack_exports__, "ChartFactory", function() { return Factory; });
/* concated harmony reexport mocks */__webpack_require__.d(__webpack_exports__, "mocks", function() { return src_mocks; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "fd38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([['GDP', '福田区', '罗湖区', '盐田区', '南山区', '宝安区', '龙华区', '光明新区', '龙岗区', '坪山区', '大鹏新区'], ['2016', 3574.5612, 1976.2459, 540.2693, 3978.4758, 3071.2452, 1884.5820, 742.0341, 3470.4725, 530.7729, 311.0454], ['2017', 3820.5692, 2161.6969, 585.9975, 4617.7993, 3453.1796, 2139.4243, 852.2589, 3871.1358, 607.9395, 331.2546]]);

/***/ }),

/***/ "fe0c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props, options) {
  var input = props.accessories.visualMap;
  var addOPtions = {
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function animationDelay(idx) {
      return idx * 20;
    },
    animationDelayUpdate: function animationDelayUpdate(idx) {
      return idx * 20;
    }
  };
  var setYAxis = {
    axisLabel: {// textStyle: {
      //   color: '#4a657a'
      // }  
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  };
  Object.assign(options.xAxis[0], {
    axisTick: {
      show: false
    }
  });
  Object.assign(options.yAxis[0], setYAxis);
  Object.assign(options, addOPtions);
  var inRangeColor = input.color;
  input.inRange = inRangeColor && inRangeColor.length > 0 ? {
    color: inRangeColor
  } : {
    color: props.colors
  };
  input.max = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.data[0])) / 2;
  return {
    visualMap: input
  };
});

/***/ })

/******/ });
//# sourceMappingURL=chartlib.common.js.map