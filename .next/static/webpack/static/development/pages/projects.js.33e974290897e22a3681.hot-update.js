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
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/index.js");
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_paginating__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var fruits = [['apple', 'orange'], ['banana', 'avocado'], ['coconut', 'blueberry'], ['payaya', 'peach'], ['pear', 'plum']];
var limit = 2;
var pageCount = 3;
var total = fruits.length * limit;

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
      currentPage: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageChange", function (page) {
      _this.setState({
        currentPage: page
      });
    });

    return _this;
  }

  _createClass(works, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentPage = this.state.currentPage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Works'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, fruits[currentPage - 1].map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: item
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paginating__WEBPACK_IMPORTED_MODULE_5___default.a, {
        total: total,
        limit: limit,
        pageCount: pageCount,
        currentPage: currentPage
      }, function (_ref) {
        var pages = _ref.pages,
            currentPage = _ref.currentPage,
            hasNextPage = _ref.hasNextPage,
            hasPreviousPage = _ref.hasPreviousPage,
            previousPage = _ref.previousPage,
            nextPage = _ref.nextPage,
            totalPages = _ref.totalPages,
            getPageItemProps = _ref.getPageItemProps;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", getPageItemProps({
          pageValue: 1,
          onPageChange: _this2.handlePageChange
        }), "first"), hasPreviousPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", getPageItemProps({
          pageValue: previousPage,
          onPageChange: _this2.handlePageChange
        }), '<'), pages.map(function (page) {
          var activePage = null;

          if (currentPage === page) {
            activePage = {
              backgroundColor: '#fdce09'
            };
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
            key: page,
            style: activePage
          }, getPageItemProps({
            pageValue: page,
            onPageChange: _this2.handlePageChange
          })), page);
        }), hasNextPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", getPageItemProps({
          pageValue: nextPage,
          onPageChange: _this2.handlePageChange
        }), '>'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", getPageItemProps({
          pageValue: totalPages,
          onPageChange: _this2.handlePageChange
        }), "last"));
      }));
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
//# sourceMappingURL=projects.js.33e974290897e22a3681.hot-update.js.map