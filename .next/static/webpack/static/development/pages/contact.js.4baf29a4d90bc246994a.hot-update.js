webpackHotUpdate("static\\development\\pages\\contact.js",{

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

/***/ })

})
//# sourceMappingURL=contact.js.4baf29a4d90bc246994a.hot-update.js.map