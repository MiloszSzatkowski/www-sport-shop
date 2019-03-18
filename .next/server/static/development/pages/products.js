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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "react-app-polyfill/ie11");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/normalize.css */ "./static/normalize.css");
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







__webpack_require__(/*! es6-promise */ "es6-promise").polyfill();

function HandleEvent(event) {
  if (event.keyCode == '13') {
    //enter pressed
    redirect();
  }
}

function redirect() {
  if (window.location.href.indexOf('products') === -1 || window.location.href.indexOf('details') !== -1) {
    var search_query = encodeURI(document.getElementById('search').value.toLowerCase().trim());
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query);
  }
}

var Btn = function Btn(_ref) {
  var onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      value = _ref.value,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Logo"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'female', 'male'],
        age: ['', 'children', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Our products"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    onClick: redirect
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: value,
    onFocus: onFocus,
    onChange: onChange,
    onKeyDown: HandleEvent,
    id: "search",
    placeholder: "search..."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/"
  }, "FILTER"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'male'],
        age: ['', 'children', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: ""
  }, "Male")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'male'],
        age: ['', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Adult"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'male'],
        age: ['', 'children']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Children")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'female'],
        age: ['', 'children', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: ""
  }, "Female")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'female'],
        age: ['', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: ""
  }, "Adult"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'female'],
        age: ['', 'children']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Children")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/"
  }, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "social icons"));
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ }),

/***/ "./components/Vars.js":
/*!****************************!*\
  !*** ./components/Vars.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var the_SITE_url;
/* harmony default export */ __webpack_exports__["default"] = (the_SITE_url = 'http://cae24c6b.ngrok.io/');

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "react-app-polyfill/ie11");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Vars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Vars */ "./components/Vars.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








__webpack_require__(/*! es6-promise */ "es6-promise").polyfill();



function initial_search(post) {
  for (var i = 0; i < this.gender.length; i++) {
    if (post.acf.gender == this.gender[i]) {
      for (var j = 0; j < this.age.length; j++) {
        if (post.acf.age == this.age[j]) {
          return true;
          break;
        }
      }
    }
  }

  return false;
}

function search(post) {
  var that = this.toLowerCase().replace(/\.|,/g, '').trim();
  var contains_space = that.trim().indexOf(' ') !== -1;
  var contains_male = that.split(' ').some(function (item) {
    return item == 'male';
  });
  var post_concat = post.title.rendered.concat(' ', post.acf.gender, ' ', post.acf.age).toLowerCase();
  var post_concat_no_gender = post.title.rendered.concat(' ', ' ', post.acf.age).toLowerCase();
  var current_post_is_male = post.acf.gender == 'male';

  if (contains_space) {
    var array_of_keywords = that.split(' ');

    if (contains_male) {
      var array_of_keywords_without_male = remove_from_arr(array_of_keywords, 'male');
      var cond = contains_every_of(array_of_keywords_without_male, post_concat_no_gender);
      return cond && current_post_is_male;
    } else {
      var cond = contains_every_of(array_of_keywords, post_concat);
      return cond;
    }
  } else {
    if (contains_male) {
      return current_post_is_male;
    } else {
      var cond = post_concat.indexOf(that) !== -1;
      return cond;
    }
  }
}

function contains_every_of(array, string) {
  var bool_accum = 0;

  for (var i = 0; i < array.length; i++) {
    if (string.indexOf(array[i]) !== -1) {
      bool_accum++;
    }
  }

  if (bool_accum === array.length) {
    return true;
  } else {
    return false;
  }
}

function remove_from_arr(array, string) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == string) {
      array.splice(i, 1);
    }
  }

  return array;
}

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var that = this;
      var initial_s = this.props.query.search ? this.props.query.search : '';

      if (initial_s != '') {
        document.getElementById('search').value = initial_s;
        this.setState({
          search: initial_s
        });
        that.forceUpdate();
      }
    }
  }, {
    key: "updateSearch",
    value: function updateSearch(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "First_type",
    value: function First_type(event) {}
  }, {
    key: "cleanSearch",
    value: function cleanSearch() {
      this.setState({
        search: ''
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_7__["default"] + '/wp-json/wp/v2/posts');

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  posts: response.data,
                  query: context.query
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));
    _this.state = {
      search: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var filteredPosts = this.props.query != null && this.state.search == '' ? this.props.posts.filter(initial_search, this.props.query) : this.props.posts.filter(search, this.state.search);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: "This is an example of a meta description. This will show up in search results."
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: this.cleanSearch.bind(this),
        onFocus: this.First_type.bind(this),
        value: this.state.search,
        onChange: this.updateSearch.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: "wrapper-products"
      }, filteredPosts && filteredPosts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: post.acf.icon.sizes.medium
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, " 99\xA3 "))));
      })));
    } // END OF RENDER

  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./static/normalize.css":
/*!******************************!*\
  !*** ./static/normalize.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/products.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/products.js */"./pages/products.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

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

/***/ "react-app-polyfill/ie11":
/*!******************************************!*\
  !*** external "react-app-polyfill/ie11" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-app-polyfill/ie11");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map