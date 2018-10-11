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

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_COlOR_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_COlOR_YELLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_COlOR_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_COlOR_AFTER_RE; });


var CHANGE_COlOR_BLUE = 'CHANGE_COlOR_BLUE';
var CHANGE_COlOR_YELLOW = 'CHANGE_COlOR_YELLOW';
var CHANGE_COlOR_GREY = 'CHANGE_COlOR_GREY';
var CHANGE_COlOR_AFTER_RE = 'CHANGE_COlOR_AFTER_RE';

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(14);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/footer.js



/* harmony default export */ var footer = (function (_ref) {
  var blue = _ref.blue,
      yellow = _ref.yellow,
      grey = _ref.grey;
  return external_react_default.a.createElement("div", {
    className: "text-center footer"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", {
    onClick: blue
  }, external_react_default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: '#34e89e'
    }
  })), external_react_default.a.createElement("li", {
    onClick: yellow
  }, external_react_default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: 'yellow'
    }
  })), external_react_default.a.createElement("li", {
    onClick: grey
  }, external_react_default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      color: '#F8F8F8'
    }
  }))), external_react_default.a.createElement("h4", null, "faikarghass \xA9 2018"));
});
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(5);

// EXTERNAL MODULE: ./sass/main.scss
var main = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Navigation.js



// import Link from '../lib/Link';



var Navigation_header2 = function header2(props) {
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
  }, external_react_default.a.createElement(external_react_scroll_["Link"], {
    activeClass: "active",
    to: "header",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link navigation__list-home text-pop-up-bottom",
    style: {
      color: props.navColor
    }
  }, external_react_default.a.createElement("span", null, "home")))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(external_react_scroll_["Link"], {
    activeClass: "active",
    to: "about",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, external_react_default.a.createElement("span", null, "about", external_react_default.a.createElement("br", null), "me")))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(external_react_scroll_["Link"], {
    activeClass: "active",
    to: "projects",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, external_react_default.a.createElement("span", null, "projects")))), external_react_default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, external_react_default.a.createElement(external_react_scroll_["Link"], {
    activeClass: "active",
    to: "contact",
    smooth: true,
    duration: 500,
    hashSpy: true,
    spy: true
  }, external_react_default.a.createElement("a", {
    className: "nav-link",
    style: {
      color: props.navColor
    }
  }, external_react_default.a.createElement("span", null, "contact")))))));
};

/* harmony default export */ var Navigation = (Navigation_header2);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(1);

// EXTERNAL MODULE: ./redux/actionType.js
var actionType = __webpack_require__(2);

// CONCATENATED MODULE: ./redux/action.js



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
var action_changeColorBlue = function changeColorBlue() {
  localStorage.setItem('token', color.blue);
  localStorage.setItem('token2', color.fontAblue);
  localStorage.setItem('token3', color.bodylight);
  return {
    type: actionType["b" /* CHANGE_COlOR_BLUE */],
    blue: color.blue,
    fontAblue: color.fontAblue,
    bodyColor: color.bodylight
  };
};
var action_changeColorYellow = function changeColorYellow() {
  localStorage.setItem('token', color.yellow);
  localStorage.setItem('token2', color.fontAyellow);
  localStorage.setItem('token3', color.bodydark);
  return {
    type: actionType["d" /* CHANGE_COlOR_YELLOW */],
    yellow: color.yellow,
    fontAyellow: color.fontAyellow
  };
};
var action_changeColorGrey = function changeColorGrey() {
  localStorage.setItem('token', color.grey);
  localStorage.setItem('token2', color.fontAgrey);
  localStorage.setItem('token3', color.bodydark);
  return {
    type: actionType["c" /* CHANGE_COlOR_GREY */],
    grey: color.grey,
    fontAgrey: color.fontAgrey
  };
};
var action_changeColorAfterRes = function changeColorAfterRes() {
  return {
    type: actionType["a" /* CHANGE_COlOR_AFTER_RE */],
    thiscolor: localStorage.getItem('token'),
    thisAcolor: localStorage.getItem('token2'),
    bodyColor: localStorage.getItem('token3', color.bodylight)
  };
};
var autoChangeColor = function autoChangeColor() {
  return function (dispatch) {
    var token = localStorage.getItem('token');
    if (token) dispatch(action_changeColorAfterRes());
  };
};
// CONCATENATED MODULE: ./redux/actionIndex.js



// CONCATENATED MODULE: ./components/HeaderLayout.js




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



var HeaderLayout_Layout =
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
      return external_react_default.a.createElement("div", {
        className: "box-header",
        style: {
          background: this.props.color
        }
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Faikar | ", this.props.title)), external_react_default.a.createElement(Navigation, {
        navColor: this.props.navColor
      }), external_react_default.a.createElement("div", {
        className: "childern"
      }, this.props.children), external_react_default.a.createElement(footer, {
        blue: this.props.changeColorBlue,
        grey: this.props.changeColorGrey,
        yellow: this.props.changeColorYellow
      }));
    }
  }]);

  return Layout;
}(external_react_["Component"]);

var mapPropsToState = function mapPropsToState(state) {
  return {
    color: state.color,
    colorC: state.colorC,
    navColor: state.navColor
  };
};

var HeaderLayout_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeColorBlue: function changeColorBlue() {
      return dispatch(action_changeColorBlue());
    },
    changeColorYellow: function changeColorYellow() {
      return dispatch(action_changeColorYellow());
    },
    changeColorGrey: function changeColorGrey() {
      return dispatch(action_changeColorGrey());
    },
    onTryAutoChange: function onTryAutoChange() {
      return dispatch(autoChangeColor());
    }
  };
};

/* harmony default export */ var HeaderLayout = (Object(external_react_redux_["connect"])(mapPropsToState, HeaderLayout_mapDispatchToProps)(HeaderLayout_Layout));
// CONCATENATED MODULE: ./components/comingSoon.js



/* harmony default export */ var comingSoon = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "project"
  }, external_react_default.a.createElement("h1", {
    className: "coming-soon vibrate-1",
    style: {
      color: props.color
    }
  }, "under development!!"));
});
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(10);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./lib/GAWarp.js


function GAWarp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GAWarp_typeof = function _typeof(obj) { return typeof obj; }; } else { GAWarp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GAWarp_typeof(obj); }

function GAWarp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GAWarp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GAWarp_createClass(Constructor, protoProps, staticProps) { if (protoProps) GAWarp_defineProperties(Constructor.prototype, protoProps); if (staticProps) GAWarp_defineProperties(Constructor, staticProps); return Constructor; }

function GAWarp_possibleConstructorReturn(self, call) { if (call && (GAWarp_typeof(call) === "object" || typeof call === "function")) { return call; } return GAWarp_assertThisInitialized(self); }

function GAWarp_getPrototypeOf(o) { GAWarp_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GAWarp_getPrototypeOf(o); }

function GAWarp_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GAWarp_setPrototypeOf(subClass, superClass); }

function GAWarp_setPrototypeOf(o, p) { GAWarp_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GAWarp_setPrototypeOf(o, p); }

function GAWarp_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var debug = "production" !== 'production';
/* harmony default export */ var GAWarp = (function (WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      GAWarp_inherits(GaWrapper, _Component);

      function GaWrapper(props) {
        var _this;

        GAWarp_classCallCheck(this, GaWrapper);

        _this = GAWarp_possibleConstructorReturn(this, GAWarp_getPrototypeOf(GaWrapper).call(this, props));
        _this.trackPageview = _this.trackPageview.bind(GAWarp_assertThisInitialized(GAWarp_assertThisInitialized(_this)));
        return _this;
      }

      GAWarp_createClass(GaWrapper, [{
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
// CONCATENATED MODULE: ./components/about.js


function about_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { about_typeof = function _typeof(obj) { return typeof obj; }; } else { about_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return about_typeof(obj); }

function about_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function about_createClass(Constructor, protoProps, staticProps) { if (protoProps) about_defineProperties(Constructor.prototype, protoProps); if (staticProps) about_defineProperties(Constructor, staticProps); return Constructor; }

function about_possibleConstructorReturn(self, call) { if (call && (about_typeof(call) === "object" || typeof call === "function")) { return call; } return about_assertThisInitialized(self); }

function about_getPrototypeOf(o) { about_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return about_getPrototypeOf(o); }

function about_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) about_setPrototypeOf(subClass, superClass); }

function about_setPrototypeOf(o, p) { about_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return about_setPrototypeOf(o, p); }

function about_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var about_About =
/*#__PURE__*/
function (_Component) {
  about_inherits(About, _Component);

  function About() {
    var _getPrototypeOf2;

    var _this;

    about_classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = about_possibleConstructorReturn(this, (_getPrototypeOf2 = about_getPrototypeOf(About)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(about_assertThisInitialized(about_assertThisInitialized(_this)), "state", {
      data: []
    });

    return _this;
  }

  about_createClass(About, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "project-section",
        name: "about"
      }, external_react_default.a.createElement("div", {
        className: "text-center",
        style: {
          height: '40rem',
          paddingTop: '2rem'
        }
      }, external_react_default.a.createElement("h1", null, "about", external_react_default.a.createElement("br", null), "me")));
    }
  }]);

  return About;
}(external_react_["Component"]);

var about_mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ var about = (Object(external_react_redux_["connect"])(about_mapPropsToState)(about_About));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/contact.js


function contact_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contact_typeof = function _typeof(obj) { return typeof obj; }; } else { contact_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contact_typeof(obj); }

function contact_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contact_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contact_createClass(Constructor, protoProps, staticProps) { if (protoProps) contact_defineProperties(Constructor.prototype, protoProps); if (staticProps) contact_defineProperties(Constructor, staticProps); return Constructor; }

function contact_possibleConstructorReturn(self, call) { if (call && (contact_typeof(call) === "object" || typeof call === "function")) { return call; } return contact_assertThisInitialized(self); }

function contact_getPrototypeOf(o) { contact_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return contact_getPrototypeOf(o); }

function contact_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) contact_setPrototypeOf(subClass, superClass); }

function contact_setPrototypeOf(o, p) { contact_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return contact_setPrototypeOf(o, p); }

function contact_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var contact_Contact =
/*#__PURE__*/
function (_Component) {
  contact_inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    contact_classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = contact_possibleConstructorReturn(this, (_getPrototypeOf2 = contact_getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    contact_defineProperty(contact_assertThisInitialized(contact_assertThisInitialized(_this)), "state", {
      name: '',
      email: '',
      phonenumber: '',
      message: ''
    });

    contact_defineProperty(contact_assertThisInitialized(contact_assertThisInitialized(_this)), "onChange", function (e) {
      var state = _this.state;
      state[e.target.name] = e.target.value;

      _this.setState(state);
    });

    contact_defineProperty(contact_assertThisInitialized(contact_assertThisInitialized(_this)), "onSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          phonenumber = _this$state.phonenumber,
          message = _this$state.message;
      external_axios_default.a.post('https://fgapi.now.sh/api/form', {
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

  contact_createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          phonenumber = _this$state2.phonenumber,
          message = _this$state2.message,
          info = _this$state2.info;
      return (// <Layout title={'Contact'}>
        external_react_default.a.createElement("div", {
          className: "container contact-section",
          name: "contact"
        }, external_react_default.a.createElement("div", {
          className: "row"
        }, external_react_default.a.createElement("div", {
          className: "contact-section__form col-sm-6"
        }, external_react_default.a.createElement("div", {
          className: "contact-section__form-top m-t-10",
          style: {
            color: 'black'
          }
        }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("i", {
          className: "fas fa-phone"
        }), external_react_default.a.createElement("a", {
          style: {
            color: 'black'
          },
          target: "_blank",
          href: "https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar"
        }, "\xA0 + 62 812 8783 1421 (Lets Talk)"), " "), external_react_default.a.createElement("br", null), external_react_default.a.createElement("h3", null, external_react_default.a.createElement("i", {
          className: "far fa-envelope"
        }), "\xA0 ghassanfaikar@yahoo.com"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("h3", null, external_react_default.a.createElement("i", {
          className: "far fa-building"
        }), "\xA0 Owl and Foxes"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("h3", null, external_react_default.a.createElement("i", {
          className: "fas fa-map-marker-alt"
        }), " \xA0 South Tangerang, Indonesia"), external_react_default.a.createElement("br", null)), external_react_default.a.createElement("div", {
          className: "contact-section__form-bottom m-t-50"
        }, external_react_default.a.createElement("ul", {
          className: "test"
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://www.instagram.com/faiikarr",
          target: "_blank"
        }, external_react_default.a.createElement("i", {
          className: "fab fa-instagram"
        }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://www.linkedin.com",
          target: "_blank"
        }, external_react_default.a.createElement("i", {
          className: "fab fa-linkedin-in"
        }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://github.com/faikarghas",
          target: "_blank"
        }, external_react_default.a.createElement("i", {
          className: "fab fa-github"
        }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://www.facebook.com/fekkar",
          target: "_blank"
        }, external_react_default.a.createElement("i", {
          className: "fab fa-facebook"
        }))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://twitter.com/faikarrr",
          target: "_blank"
        }, external_react_default.a.createElement("i", {
          className: "fab fa-twitter"
        })))))), external_react_default.a.createElement("div", {
          className: "contact-section__form col-sm-6 "
        }, external_react_default.a.createElement("form", {
          onSubmit: this.onSubmit
        }, external_react_default.a.createElement("div", {
          className: "form-group"
        }, external_react_default.a.createElement("label", {
          htmlFor: "exampleInputUsername",
          style: {
            color: 'black'
          }
        }, "your name"), external_react_default.a.createElement("input", {
          type: "text",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "",
          name: "name",
          value: name,
          onChange: this.onChange,
          required: true
        })), external_react_default.a.createElement("div", {
          className: "form-group"
        }, external_react_default.a.createElement("label", {
          htmlFor: "exampleInputEmail",
          style: {
            color: 'black'
          }
        }, "email Address"), external_react_default.a.createElement("input", {
          type: "email",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "exampleInputEmail",
          name: "email",
          value: email,
          onChange: this.onChange,
          required: true
        })), external_react_default.a.createElement("div", {
          className: "form-group"
        }, external_react_default.a.createElement("label", {
          htmlFor: "telephone",
          style: {
            color: 'black'
          }
        }, "mobile No."), external_react_default.a.createElement("input", {
          type: "tel",
          className: "form-control2 contact-section__form-input input-tr-bb",
          id: "telephone",
          name: "phonenumber",
          value: phonenumber,
          onChange: this.onChange,
          required: true
        })), external_react_default.a.createElement("div", {
          className: "form-group"
        }, external_react_default.a.createElement("label", {
          htmlFor: "description",
          style: {
            color: 'black'
          }
        }, "message"), external_react_default.a.createElement("textarea", {
          className: "form-control2 contact-section__form-textarea input-tr-bb",
          id: "description",
          name: "message",
          value: message,
          onChange: this.onChange,
          required: true
        })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
          type: "submit",
          className: "btn  btn--green submit"
        }, external_react_default.a.createElement("span", {
          className: "btn-custom"
        }, external_react_default.a.createElement("i", {
          className: "fa fa-paper-plane",
          "aria-hidden": "true"
        }), " Send "))), info !== '' && external_react_default.a.createElement("div", {
          className: "alert alert-light text-center",
          role: "alert"
        }, info))))) // </Layout>

      );
    }
  }]);

  return Contact;
}(external_react_["Component"]);

var contact_mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ var contact = (Object(external_react_redux_["connect"])(contact_mapPropsToState)(contact_Contact));
// CONCATENATED MODULE: ./components/card.js



/* harmony default export */ var card = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "card "
  }, external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("h5", {
    className: "card-title"
  }, props.title), external_react_default.a.createElement("h6", {
    className: "card-subtitle mb-2 text-muted"
  }), external_react_default.a.createElement("p", {
    className: "card-text"
  }), external_react_default.a.createElement("a", {
    href: "#",
    className: "card-link"
  }), external_react_default.a.createElement("a", {
    href: "#",
    className: "card-link"
  })));
});
// EXTERNAL MODULE: ./lib/Spinner/Spinner.css
var Spinner = __webpack_require__(19);

// CONCATENATED MODULE: ./lib/Spinner/Spinner.js





var Spinner_spinner = function spinner() {
  return external_react_default.a.createElement("tr", {
    className: "lds-dual-ring"
  });
};

/* harmony default export */ var Spinner_Spinner = (Spinner_spinner);
// CONCATENATED MODULE: ./components/projects.js




function projects_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { projects_typeof = function _typeof(obj) { return typeof obj; }; } else { projects_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return projects_typeof(obj); }

function projects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function projects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function projects_createClass(Constructor, protoProps, staticProps) { if (protoProps) projects_defineProperties(Constructor.prototype, protoProps); if (staticProps) projects_defineProperties(Constructor, staticProps); return Constructor; }

function projects_possibleConstructorReturn(self, call) { if (call && (projects_typeof(call) === "object" || typeof call === "function")) { return call; } return projects_assertThisInitialized(self); }

function projects_getPrototypeOf(o) { projects_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return projects_getPrototypeOf(o); }

function projects_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) projects_setPrototypeOf(subClass, superClass); }

function projects_setPrototypeOf(o, p) { projects_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return projects_setPrototypeOf(o, p); }

function projects_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function projects_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // component


 // axios

 // redux

 // css




var projects_works =
/*#__PURE__*/
function (_Component) {
  projects_inherits(works, _Component);

  function works() {
    var _getPrototypeOf2;

    var _this;

    projects_classCallCheck(this, works);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = projects_possibleConstructorReturn(this, (_getPrototypeOf2 = projects_getPrototypeOf(works)).call.apply(_getPrototypeOf2, [this].concat(args)));

    projects_defineProperty(projects_assertThisInitialized(projects_assertThisInitialized(_this)), "state", {
      data: []
    });

    return _this;
  }

  projects_createClass(works, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      external_axios_default.a.get('https://fgapi.now.sh/api/projects').then(function (res) {
        _this2.setState({
          data: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return external_react_default.a.createElement("div", {
        className: "container project-section",
        id: "projects",
        name: "projects"
      }, external_react_default.a.createElement("div", {
        className: "row justify-content-center project-section__card"
      }, data.length === 0 ? external_react_default.a.createElement(Spinner_Spinner, null) : data.map(function (item) {
        return external_react_default.a.createElement(card, {
          key: item.idprojects,
          title: item.Title
        });
      })));
    }
  }]);

  return works;
}(external_react_["Component"]);

var projects_mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ var projects = (Object(external_react_redux_["connect"])(projects_mapPropsToState)(projects_works));
// CONCATENATED MODULE: ./pages/index.js













var pages_Index = function Index(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(HeaderLayout, {
    title: 'Home'
  }, external_react_default.a.createElement("div", {
    className: "container project-section"
  }, external_react_default.a.createElement(comingSoon, {
    color: props.bodyColor
  }))), external_react_default.a.createElement(about, null), external_react_default.a.createElement(projects, null), external_react_default.a.createElement(contact, null));
};

var pages_mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (GAWarp(Object(external_react_redux_["connect"])(pages_mapPropsToState)(pages_Index)));

/***/ })
/******/ ]);