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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header2 */ "./components/header2.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _lib_GAWarp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/GAWarp */ "./lib/GAWarp.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actionIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actionIndex */ "./redux/actionIndex.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // redux


 // css



var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onTryAutoChange();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "box-header",
        style: {
          background: this.props.color
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Faikar | ", this.props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header2__WEBPACK_IMPORTED_MODULE_2__["default"], {
        navColor: this.props.navColor
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        blue: this.props.changeColorBlue,
        grey: this.props.changeColorGrey,
        yellow: this.props.changeColorYellow
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapPropsToState = function mapPropsToState(state) {
  return {
    color: state.color,
    colorC: state.colorC,
    navColor: state.navColor
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeColorBlue: function changeColorBlue() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_6__["changeColorBlue"]());
    },
    changeColorYellow: function changeColorYellow() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_6__["changeColorYellow"]());
    },
    changeColorGrey: function changeColorGrey() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_6__["changeColorGrey"]());
    },
    onTryAutoChange: function onTryAutoChange() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_6__["autoChangeColor"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_GAWarp__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapPropsToState, mapDispatchToProps)(Layout)));

/***/ }),

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    class: "card-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    class: "card-subtitle mb-2 text-muted"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "card-text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    class: "card-link"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    class: "card-link"
  })));
});

/***/ }),

/***/ "./components/comingSoon.js":
/*!**********************************!*\
  !*** ./components/comingSoon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "coming-soon vibrate-1",
    style: {
      color: props.color
    }
  }, "under development!!"));
});

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var blue = _ref.blue,
      yellow = _ref.yellow,
      grey = _ref.grey;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: blue
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: '#34e89e'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: yellow
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: 'yellow'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: grey
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: '#F8F8F8'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "faikarghass \xA9 2018"));
});

/***/ }),

/***/ "./components/header2.js":
/*!*******************************!*\
  !*** ./components/header2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Link */ "./lib/Link.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__);




var header2 = function header2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo03",
    "aria-controls": "navbarTogglerDemo03",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse navigation",
    id: "navbarTogglerDemo03"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link navigation__list-home text-pop-up-bottom",
    style: {
      color: props.navColor
    }
  }, "home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/about",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, "about ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " me"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/projects",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/contact",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, "contact"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header2);

/***/ }),

/***/ "./lib/GAWarp.js":
/*!***********************!*\
  !*** ./lib/GAWarp.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var debug = "development" !== 'production';
/* harmony default export */ __webpack_exports__["default"] = (function (WrappedComponent) {
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
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.router.events.on('routeChangeComplete', this.trackPageview);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.router.events.off('routeChangeComplete', this.trackPageview);
        }
      }, {
        key: "trackPageview",
        value: function trackPageview() {
          var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.location.pathname;

          if (path !== this.lastTrackedPath) {
            react_ga__WEBPACK_IMPORTED_MODULE_1___default.a.pageview(path);
            this.lastTrackedPath = path;
          }
        }
      }, {
        key: "initGa",
        value: function initGa() {
          if (!window.GA_INITIALIZED) {
            react_ga__WEBPACK_IMPORTED_MODULE_1___default.a.initialize('UA-126880286-1', {
              debug: debug
            });
            window.GA_INITIALIZED = true;
          }
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return GaWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
});

/***/ }),

/***/ "./lib/Link.js":
/*!*********************!*\
  !*** ./lib/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className
  }));
}; // const ActiveLink = withRouter(({ router, children, ...props }) => (
//     <Link {...props}>
//       {React.cloneElement(Children.only(children), {
//         className: router.pathname === props.href ? `active` : null
//       })}
//     </Link>
// ));


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_comingSoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/comingSoon */ "./components/comingSoon.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_7__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // iso fetch

 // redux

 // css



var works = function works(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'Works'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container project-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row justify-content-center"
  }, props.shows.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.Title
    });
  }))));
};

works.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://fgapi.now.sh/api/projects');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapPropsToState)(works));

/***/ }),

/***/ "./redux/action.js":
/*!*************************!*\
  !*** ./redux/action.js ***!
  \*************************/
/*! exports provided: changeColorBlue, changeColorYellow, changeColorGrey, changeColorAfterRes, autoChangeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorBlue", function() { return changeColorBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorYellow", function() { return changeColorYellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorGrey", function() { return changeColorGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorAfterRes", function() { return changeColorAfterRes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoChangeColor", function() { return autoChangeColor; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./redux/actionType.js");

var color = {
  blue: 'linear-gradient(to bottom, #34e89e, #164659)',
  yellow: 'linear-gradient(#FFC400,#FFCE1F,#FFDA54)',
  grey: '#F8F8F8',
  fontAyellow: 'white',
  fontAblue: 'white',
  fontAgrey: 'black',
  bodylight: 'white',
  bodydark: 'black'
};
var changeColorBlue = function changeColorBlue() {
  localStorage.setItem('token', color.blue);
  localStorage.setItem('token2', color.fontAblue);
  localStorage.setItem('token3', color.bodylight);
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["CHANGE_COlOR_BLUE"],
    blue: color.blue,
    fontAblue: color.fontAblue,
    bodyColor: color.bodylight
  };
};
var changeColorYellow = function changeColorYellow() {
  localStorage.setItem('token', color.yellow);
  localStorage.setItem('token2', color.fontAyellow);
  localStorage.setItem('token3', color.bodydark);
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["CHANGE_COlOR_YELLOW"],
    yellow: color.yellow,
    fontAyellow: color.fontAyellow
  };
};
var changeColorGrey = function changeColorGrey() {
  localStorage.setItem('token', color.grey);
  localStorage.setItem('token2', color.fontAgrey);
  localStorage.setItem('token3', color.bodydark);
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["CHANGE_COlOR_GREY"],
    grey: color.grey,
    fontAgrey: color.fontAgrey
  };
};
var changeColorAfterRes = function changeColorAfterRes() {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["CHANGE_COlOR_AFTER_RE"],
    thiscolor: localStorage.getItem('token'),
    thisAcolor: localStorage.getItem('token2'),
    bodyColor: localStorage.getItem('token3', color.bodylight)
  };
};
var autoChangeColor = function autoChangeColor() {
  return function (dispatch) {
    var token = localStorage.getItem('token');
    if (token) dispatch(changeColorAfterRes());
  };
};

/***/ }),

/***/ "./redux/actionIndex.js":
/*!******************************!*\
  !*** ./redux/actionIndex.js ***!
  \******************************/
/*! exports provided: changeColorBlue, changeColorYellow, changeColorGrey, autoChangeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./redux/action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeColorBlue", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["changeColorBlue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeColorYellow", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["changeColorYellow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeColorGrey", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["changeColorGrey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoChangeColor", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["autoChangeColor"]; });



/***/ }),

/***/ "./redux/actionType.js":
/*!*****************************!*\
  !*** ./redux/actionType.js ***!
  \*****************************/
/*! exports provided: CHANGE_COlOR_BLUE, CHANGE_COlOR_YELLOW, CHANGE_COlOR_GREY, CHANGE_COlOR_AFTER_RE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_COlOR_BLUE", function() { return CHANGE_COlOR_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_COlOR_YELLOW", function() { return CHANGE_COlOR_YELLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_COlOR_GREY", function() { return CHANGE_COlOR_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_COlOR_AFTER_RE", function() { return CHANGE_COlOR_AFTER_RE; });
var CHANGE_COlOR_BLUE = 'CHANGE_COlOR_BLUE';
var CHANGE_COlOR_YELLOW = 'CHANGE_COlOR_YELLOW';
var CHANGE_COlOR_GREY = 'CHANGE_COlOR_GREY';
var CHANGE_COlOR_AFTER_RE = 'CHANGE_COlOR_AFTER_RE';

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/projects.js */"./pages/projects.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map