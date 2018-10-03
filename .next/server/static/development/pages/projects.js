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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _header2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header2 */ "./components/header2.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Faikar | ", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-XXXXXX');"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden;\"></iframe>"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header2__WEBPACK_IMPORTED_MODULE_2__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Link */ "./lib/Link.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__);

// import Link from 'next/link'



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "about ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " me"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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




var header2 = function header2() {
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
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "about ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " me"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item navigation__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeClassName: "active",
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, "contact"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header2);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__);




var works = function works() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'Works'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "coming-soon vibrate-1"
  }, "under development!!")));
};

/* harmony default export */ __webpack_exports__["default"] = (works);

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/projects.js */"./pages/projects.js");


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

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map