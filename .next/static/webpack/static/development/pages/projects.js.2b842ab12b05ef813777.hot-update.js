webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_comingSoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/comingSoon */ "./components/comingSoon.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__);



 // redux

 // css



var works = function works(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'Works'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-conten-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};

var mapPropsToState = function mapPropsToState(state) {
  return {
    bodyColor: state.bodyColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapPropsToState)(works));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=projects.js.2b842ab12b05ef813777.hot-update.js.map