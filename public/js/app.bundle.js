/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Typer = __webpack_require__(1);

	var typer = new Typer();
	var content = [{
	    text: 'Software',
	    selector: '.profile__tag--type',
	    time: 50
	}, {
	    text: ' ',
	    selector: '.profile__tag--spacing',
	    time: 0
	}, {
	    text: 'Developer',
	    selector: '.profile__tag--branch',
	    time: 80
	}];
	typer.type(content);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typed = function () {
	    function Typed() {
	        _classCallCheck(this, Typed);
	    }

	    _createClass(Typed, [{
	        key: "sleep",
	        value: function sleep(time) {
	            return new Promise(function (resolve) {
	                return setTimeout(resolve, time);
	            });
	        }
	    }, {
	        key: "type",
	        value: function type(elements) {
	            var _this = this;

	            var index = 0;

	            var nextItem = function nextItem(index) {
	                var _elements$index = elements[index],
	                    selector = _elements$index.selector,
	                    text = _elements$index.text,
	                    time = _elements$index.time;

	                var letters = text.split("");

	                var element = document.querySelector(selector);

	                _this.loopThroughLetters(element, letters, time).then(function () {
	                    index++;

	                    if (index < elements.length) {
	                        nextItem(index);
	                    }
	                });
	            };

	            nextItem(index);
	        }
	    }, {
	        key: "loopThroughLetters",
	        value: function loopThroughLetters(element, letters, time) {
	            var _this2 = this;

	            return new Promise(function (res) {
	                var index = 0;

	                var nextItem = function nextItem(index) {
	                    _this2.sleep(time).then(function () {
	                        element.innerHTML += letters[index];

	                        index++;

	                        if (index < letters.length) {
	                            nextItem(index);
	                        } else {
	                            res();
	                        }
	                    });
	                };

	                nextItem(index);
	            });
	        }
	    }]);

	    return Typed;
	}();

	module.exports = Typed;

/***/ }
/******/ ]);