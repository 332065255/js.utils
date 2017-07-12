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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 只触发一次
 */
module.exports.once = function (fun) {
    return function () {
        var ret;
        if (fun != null) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            ret = fun.apply(this, args);
            fun = null;
        } else {
            console.log('jest once');
        }
        return ret;
    };
};

/**
 * 触发1次后冻结,wait秒后解冻
 */
module.exports.throttle = function (fn, wait) {
    var timer;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                return timer = null;
            }, wait);

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return fn.apply(this, args);
        }
    };
};

/**
 * 多次操作只有delay秒后才会触发
 */
module.exports.debounce = function (fn, delay) {
    var timer = null;
    return function () {
        var _this = this;

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        clearTimeout(timer);
        timer = setTimeout(function () {
            return fn.apply(_this, args);
        }, delay);
    };
};

module.exports.EventDispatcher = function () {
    function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);

        this.dic = {};
    }

    _createClass(EventDispatcher, [{
        key: 'on',
        value: function on(type, fun) {
            if (!this.dic.hasOwnProperty(type)) {
                this.dic[type] = [];
            }
            this.dic[type].push(fun);
        }
    }, {
        key: 'remove',
        value: function remove(type, fun) {
            if (!this.dic.hasOwnProperty(type)) {
                return;
            }
            if (fun == undefined || fun == null) {
                this.dic[type] = [];
            } else {
                for (var i = 0; i < this.dic[type].length; i++) {
                    if (this.dic[type][i] == fun) {
                        this.dic[type] = this.dic[type].splice(i, 1);
                    }
                }
            }
        }
    }, {
        key: 'emit',
        value: function emit(type) {
            if (!this.dic.hasOwnProperty(type)) {
                return;
            } else {
                for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                    args[_key4 - 1] = arguments[_key4];
                }

                for (var i = 0; i < this.dic[type].length; i++) {
                    this.dic[type][i].apply(args);
                }
            }
        }
    }]);

    return EventDispatcher;
}();

/***/ })
/******/ ]);