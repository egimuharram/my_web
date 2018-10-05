module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./lib/Link.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Link_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = external_react_["Children"].only(children);
  var className = child.props.className || '';
  console.log(className);

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return external_react_default.a.createElement(link_default.a, props, external_react_default.a.cloneElement(child, {
    className: className
  }));
}; // const ActiveLink = withRouter(({ router, children, ...props }) => (
//     <Link {...props}>
//       {React.cloneElement(Children.only(children), {
//         className: router.pathname === props.href ? `active` : null
//       })}
//     </Link>
// ));


/* harmony default export */ var Link = (Object(router_["withRouter"])(Link_ActiveLink));
// EXTERNAL MODULE: ./sass/main.scss
var main = __webpack_require__(2);

// CONCATENATED MODULE: ./components/header.js

// import Link from 'next/link'



var header_Header = function Header() {
  return external_react_default.a.createElement("div", {
    className: "collapse navbar-collapse navigation"
  }, external_react_default.a.createElement("ul", {
    className: "nav justify-content-center"
  }, external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "nav-link navigation__list-home"
  }, "home"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/about"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "about ", external_react_default.a.createElement("br", null), " me"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/projects"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "projects"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/contact"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "contact")))));
};

/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/header2.js




var header2_header2 = function header2() {
  return external_react_default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light "
  }, external_react_default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo03",
    "aria-controls": "navbarTogglerDemo03",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, external_react_default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), external_react_default.a.createElement("div", {
    className: "collapse navbar-collapse navigation",
    id: "navbarTogglerDemo03"
  }, external_react_default.a.createElement("ul", {
    className: "navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center"
  }, external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/",
    prefetch: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link navigation__list-home text-pop-up-bottom"
  }, "home"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/about",
    prefetch: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "about ", external_react_default.a.createElement("br", null), " me"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/projects",
    prefetch: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "projects"))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(Link, {
    activeClassName: "active",
    href: "/contact",
    prefetch: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "contact"))))));
};

/* harmony default export */ var components_header2 = (header2_header2);
// CONCATENATED MODULE: ./components/footer.js

/* harmony default export */ var footer = (function () {
  return external_react_default.a.createElement("div", {
    className: "text-center footer"
  }, external_react_default.a.createElement("h4", null, "faikarghass \xA9 2018"));
});
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: ./lib/GAWarp.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var debug = "production" !== 'production';
var G_TAG_ID = 'UA-126880286-1';
/* harmony default export */ var GAWarp = (function (WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(GaWrapper, _Component);

      function GaWrapper(props) {
        var _this;

        _classCallCheck(this, GaWrapper);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(GaWrapper).call(this, props));
        _this.trackPageview = _this.trackPageview.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        return _this;
      }

      _createClass(GaWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.initGa();
          this.trackPageview();
          router_default.a.router.events.on('routeChangeComplete', this.trackPageview);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          router_default.a.router.events.off('routeChangeComplete', this.trackPageview);
        }
      }, {
        key: "trackPageview",
        value: function trackPageview() {
          var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.location.pathname;

          if (path !== this.lastTrackedPath) {
            external_react_ga_default.a.pageview(path);
            this.lastTrackedPath = path;
          }
        }
      }, {
        key: "initGa",
        value: function initGa() {
          if (!window.GA_INITIALIZED) {
            external_react_ga_default.a.initialize('UA-126880286-1', {
              debug: debug
            });
            window.GA_INITIALIZED = true;
          }
        }
      }, {
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return GaWrapper;
    }(external_react_["Component"])
  );
});
// CONCATENATED MODULE: ./components/MyLayout.js








var MyLayout_Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return external_react_default.a.createElement("div", {
    className: "box-header"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Faikar | ", title)), external_react_default.a.createElement(components_header2, null), children, external_react_default.a.createElement(footer, null));
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (GAWarp(MyLayout_Layout));

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(About)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: []
    });

    return _this;
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      // console.log(this.state.data)
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        title: 'About'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "coming-soon vibrate-1"
      }, "under development!!")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })
/******/ ]);