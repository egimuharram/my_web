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

/***/ "./components/HeaderLayout.js":
/*!************************************!*\
  !*** ./components/HeaderLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actionIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actionIndex */ "./redux/actionIndex.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_6__);




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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Faikar | ", this.props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        navColor: this.props.navColor
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "childern"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_5__["changeColorBlue"]());
    },
    changeColorYellow: function changeColorYellow() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_5__["changeColorYellow"]());
    },
    changeColorGrey: function changeColorGrey() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_5__["changeColorGrey"]());
    },
    onTryAutoChange: function onTryAutoChange() {
      return dispatch(_redux_actionIndex__WEBPACK_IMPORTED_MODULE_5__["autoChangeColor"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapPropsToState, mapDispatchToProps)(Layout));

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__);



// import Link from '../lib/Link';



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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "header",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link navigation__list-home text-pop-up-bottom",
    style: {
      color: props.navColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "home")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "about",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "about", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "me")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "projects",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "projects")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "contact",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "contact")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header2);

/***/ }),

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comingSoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comingSoon */ "./components/comingSoon.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_3__);


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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project-section",
        name: "about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center",
        style: {
          height: '40rem',
          paddingTop: '2rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "about", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "me")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapPropsToState)(About));

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
    className: "card "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle mb-2 text-muted"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "card-link"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "card-link"
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

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_3__);


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






var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      email: '',
      phonenumber: '',
      message: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      var state = _this.state;
      state[e.target.name] = e.target.value;

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          phonenumber = _this$state.phonenumber,
          message = _this$state.message;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://fgapi.now.sh/api/form', {
        name: name,
        email: email,
        phonenumber: phonenumber,
        message: message
      }).then(function (result) {
        console.log(result);

        _this.setState({
          info: 'berhasil terkirim',
          name: '',
          email: '',
          phonenumber: ''
        });

        setTimeout(function () {
          _this.setState({
            info: null
          });
        }, 3000);
      });
    });

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          phonenumber = _this$state2.phonenumber,
          message = _this$state2.message,
          info = _this$state2.info;
      return (// <Layout title={'Contact'}>
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container contact-section",
          name: "contact"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "contact-section__form col-sm-6"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "contact-section__form-top m-t-10",
          style: {
            color: 'black'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-phone"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            color: 'black'
          },
          target: "_blank",
          href: "https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar"
        }, "\xA0 + 62 812 8783 1421 (Lets Talk)"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-envelope"
        }), "\xA0 ghassanfaikar@yahoo.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-building"
        }), "\xA0 Owl and Foxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-map-marker-alt"
        }), " \xA0 South Tangerang, Indonesia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "contact-section__form-bottom m-t-50"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "test"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.instagram.com/faiikarr",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-instagram"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.linkedin.com",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-linkedin-in"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://github.com/faikarghas",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-github"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.facebook.com/fekkar",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-facebook"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://twitter.com/faikarrr",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-twitter"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "contact-section__form col-sm-6 "
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.onSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "exampleInputUsername",
          style: {
            color: 'black'
          }
        }, "your name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "",
          name: "name",
          value: name,
          onChange: this.onChange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "exampleInputEmail",
          style: {
            color: 'black'
          }
        }, "email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "email",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "exampleInputEmail",
          name: "email",
          value: email,
          onChange: this.onChange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "telephone",
          style: {
            color: 'black'
          }
        }, "mobile No."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "tel",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "telephone",
          name: "phonenumber",
          value: phonenumber,
          onChange: this.onChange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "description",
          style: {
            color: 'black'
          }
        }, "message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          className: "form-control2 contact-section__form-textarea input-tr-bb",
          id: "description",
          name: "message",
          value: message,
          onChange: this.onChange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          className: "btn  btn--green submit"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "btn-custom"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-paper-plane",
          "aria-hidden": "true"
        }), " Send "))), info !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-light text-center",
          role: "alert"
        }, info))))) // </Layout>

      );
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapPropsToState)(Contact));

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

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comingSoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comingSoon */ "./components/comingSoon.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/Spinner/Spinner */ "./lib/Spinner/Spinner.js");




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

 // component


 // axios

 // redux

 // css




var works =
/*#__PURE__*/
function (_Component) {
  _inherits(works, _Component);

  function works() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, works);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(works)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: []
    });

    return _this;
  }

  _createClass(works, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://fgapi.now.sh/api/projects').then(function (res) {
        _this2.setState({
          data: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container project-section",
        id: "projects",
        name: "projects"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center project-section__card"
      }, data.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null) : data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: item.idprojects,
          title: item.Title
        });
      })));
    }
  }]);

  return works;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapPropsToState)(works));

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

/***/ "./lib/Spinner/Spinner.css":
/*!*********************************!*\
  !*** ./lib/Spinner/Spinner.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/Spinner/Spinner.js":
/*!********************************!*\
  !*** ./lib/Spinner/Spinner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.css */ "./lib/Spinner/Spinner.css");
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_css__WEBPACK_IMPORTED_MODULE_1__);





var spinner = function spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "lds-dual-ring"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderLayout.js */ "./components/HeaderLayout.js");
/* harmony import */ var _components_comingSoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/comingSoon */ "./components/comingSoon.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_GAWarp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/GAWarp */ "./lib/GAWarp.js");
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about.js */ "./components/about.js");
/* harmony import */ var _components_contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact.js */ "./components/contact.js");
/* harmony import */ var _components_projects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projects.js */ "./components/projects.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_9__);













var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'Home'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container project-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comingSoon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: props.bodyColor
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_js__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact_js__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_GAWarp__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapPropsToState)(Index)));

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
  fontAgrey: '#444',
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
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map