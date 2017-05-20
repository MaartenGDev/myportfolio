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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Highlight = function () {
    function Highlight() {
        _classCallCheck(this, Highlight);
    }

    _createClass(Highlight, [{
        key: "init",
        value: function init(selector, actions) {
            var _this = this;

            var elements = document.querySelectorAll(selector);

            elements.forEach(function (element) {
                element.addEventListener("mouseenter", function () {
                    return _this.handleHover(element, actions);
                });
                element.addEventListener("mouseleave", function () {
                    return _this.handleHover(element, actions);
                });
            });
        }
    }, {
        key: "handleHover",
        value: function handleHover(element, actions) {
            actions.forEach(function (action) {
                var elements = element.querySelectorAll(action.selector);

                elements.forEach(function (target) {
                    action.classes.forEach(function (modifier) {
                        var selector = action.selector.substr(1);
                        var className = selector + modifier;

                        target.classList.toggle(className);
                    });
                });
            });
        }
    }]);

    return Highlight;
}();

module.exports = Highlight;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var projects = [{
    image: 'assets/images/prod/project__joblist.png',
    title: 'JobList',
    tags: ['PHP', 'Material Design', 'Laravel', 'Landing Page'],
    url: 'https://github.com/MaartenGDev/JobList'
}, {
    image: 'assets/images/prod/project__tripsearch.png',
    title: 'TripSearch',
    tags: ['ElasticSearch', 'GuzzleHttp', 'Composer', 'PHP'],
    url: 'https://github.com/MaartenGDev/TripSearch'
}, {
    image: 'assets/images/prod/project__cars.png',
    title: 'Cars',
    tags: ['PHP', 'Symfony', 'Material Design', 'UX'],
    url: '#projects'
}, {
    image: 'assets/images/prod/project__cachedrivers.png',
    title: 'CacheDrivers',
    tags: ['PHPUnit', 'Travis CI', 'Package', 'Code Coverage'],
    url: 'https://github.com/MaartenGDev/CacheDrivers'
}, {
    image: 'assets/images/prod/project__planner.png',
    title: 'Planner',
    tags: ['ReactJS', 'SPA', 'Laravel', 'REST API'],
    url: 'https://github.com/MaartenGDev/planner'
}, {
    image: 'assets/images/prod/project__devblog.png',
    title: 'devBlog',
    tags: ['Laravel', 'Blog', 'CRUD'],
    url: 'https://github.com/MaartenGDev/devBlog'
}];

var accountLinks = [{
    url: 'https://github.com/maartenGDev',
    cssClass: 'social-icon--github',
    icon: 'fa-github',
    newTab: true
}, {
    url: 'https://www.linkedin.com/in/maarten-grootoonk-098556131',
    cssClass: 'social-icon--linkedin social-icon--left',
    icon: 'fa-linkedin',
    newTab: true
}, {
    url: 'http://stackoverflow.com/users/6310593/maartendev',
    cssClass: 'social-icon--stackoverflow social-icon--right',
    icon: 'fa-stack-overflow',
    newTab: true
}, {
    url: 'mailto:hello@maartendev.me',
    cssClass: 'social-icon--mail',
    icon: 'fa-envelope',
    newTab: false
}];

var projectTemplate = function projectTemplate(project) {
    return '\n            <section class="project">\n                <img class="project__image project__image--preview" src="' + project.image + '">\n                <section class="project__overlay project__overlay--smooth">\n                    <h3 class="project__title">' + project.title + '</h3>\n                    <section class="project__chip-list">\n                        ' + project.tags.map(function (x) {
        return '<section class="chip project__chip project__chip--hidden">' + x + '</section>';
    }).join('') + '\n                    </section>\n                </section>\n                <section class="project__view project__view--hidden">\n                    <a target="_blank" href="' + project.title + '" class="project__link">Bekijk op GitHub</a>\n                </section>\n            </section>\n';
};

var socialIconTemplate = function socialIconTemplate(account) {
    return '\n                <a href="' + account.url + '" class="social-icon" ' + (account.newTab && 'target="_blank"') + '>\n                    <i class="' + account.cssClass + ' fa ' + account.icon + '"></i>\n                </a>\n';
};

var loadProjects = function loadProjects() {
    var projectsSelector = document.querySelector('.l-projects');

    projectsSelector.innerHTML = projects.map(function (project) {
        return projectTemplate(project);
    }).join('');
};

var loadSocialIcons = function loadSocialIcons() {
    var socialIconsSelector = document.querySelector('.profile__links');

    socialIconsSelector.innerHTML = accountLinks.map(function (account) {
        return socialIconTemplate(account);
    }).join('');
};
exports.default = {
    load: function load() {
        loadProjects();
        loadSocialIcons();
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
    function Tabs() {
        _classCallCheck(this, Tabs);
    }

    _createClass(Tabs, [{
        key: 'init',
        value: function init(selector) {
            var _this = this;

            var elements = document.querySelectorAll(selector);

            elements.forEach(function (element) {
                element.addEventListener("click", function () {
                    return _this.handleClick(elements, element);
                });
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(elements, current) {
            var className = 'tabs__nav--active';

            elements.forEach(function (element) {
                return element.classList.remove(className);
            });

            var tabId = current.getAttribute('data-target-tab');

            var tabItems = document.querySelectorAll('.tabs__item');
            var tabItem = document.querySelector('.tabs__item--' + tabId);

            tabItems.forEach(function (tabItem) {
                return tabItem.classList.add('tabs__item--hidden');
            });

            tabItem.classList.remove('tabs__item--hidden');

            current.classList.add(className);
        }
    }]);

    return Tabs;
}();

module.exports = Tabs;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

            return new Promise(function (resolve) {
                var index = 0;

                var nextItem = function nextItem(index) {
                    _this2.sleep(time).then(function (_) {
                        element.innerHTML += letters[index];

                        index++;

                        if (index < letters.length) {
                            nextItem(index);
                        } else {
                            resolve();
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typer = __webpack_require__(3);

var _typer2 = _interopRequireDefault(_typer);

var _highlight = __webpack_require__(0);

var _highlight2 = _interopRequireDefault(_highlight);

var _tabs = __webpack_require__(2);

var _tabs2 = _interopRequireDefault(_tabs);

var _staticDataLoader = __webpack_require__(1);

var _staticDataLoader2 = _interopRequireDefault(_staticDataLoader);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typer = new _typer2.default();
var highlight = new _highlight2.default();
var tabs = new _tabs2.default();

_staticDataLoader2.default.load();

var content = [{ text: 'EXAMPLE USER', selector: '.profile__title', time: 70 }];

typer.type(content);

highlight.init('.project', [{ selector: '.project__image', classes: ['--zoomed', '--preview'] }, { selector: '.project__overlay', classes: ['--smooth', '--dark'] }, { selector: '.project__chip', classes: ['--hidden', '--zoomed'] }, { selector: '.project__view', classes: ['--hidden'] }]);

tabs.init('.tabs__nav');

/***/ })
/******/ ]);