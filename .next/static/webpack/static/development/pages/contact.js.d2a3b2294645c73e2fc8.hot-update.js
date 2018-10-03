webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
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
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('https://fgapi.now.sh/form', {
        name: name,
        email: email,
        phonenumber: phonenumber,
        message: message
      }).then(function (result) {
        console.log(result);
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
          message = _this$state2.message;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: 'Contact'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container contact-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact-section__form col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "exampleInputUsername"
      }, "Your name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control2 contact-section__form-input input-tr-bb",
        id: "",
        name: "name",
        value: name,
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "exampleInputEmail"
      }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control2 contact-section__form-input input-tr-bb",
        id: "exampleInputEmail",
        name: "email",
        value: email,
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "telephone"
      }, "Mobile No."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "tel",
        className: "form-control2 contact-section__form-input input-tr-bb",
        id: "telephone",
        name: "phonenumber",
        value: phonenumber,
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "description"
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control2 contact-section__form-textarea input-tr-bb",
        id: "description",
        name: "message",
        value: message,
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-default submit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "btn-custom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paper-plane",
        "aria-hidden": "true"
      }), " Send Message"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact-section__form col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact-section__form-bottom m-t-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "follow me on social networks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.instagram.com/faiikarr",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-instagram"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/faikar-ghassan-57632ab4/",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-linkedin-in"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/faikarghas",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "fab fa-github"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact-section__form-top m-t-50"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-phone"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar, I need a website."
      }, "\xA0 + 62 812 8783 1421 (Click to chat)"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-envelope"
      }), "\xA0 ghassanfaikar@yahoo.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-map-marker-alt"
      }), " \xA0 South Tangerang, Indonesia"))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.d2a3b2294645c73e2fc8.hot-update.js.map