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

/***/ "./components/Meta_inf.js":
/*!********************************!*\
  !*** ./components/Meta_inf.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("html", {
        lang: "en"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

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
/* harmony import */ var _components_Vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Vars */ "./components/Vars.js");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);










function HandleEvent(event) {
  if (event.keyCode == '13') {
    //enter pressed
    redirect();
  }
}

function redirect(event) {
  if (window.location.href.indexOf('products') === -1 || window.location.href.indexOf('details') !== -1) {
    var search_query = encodeURI(document.getElementById('search').value.toLowerCase().trim());

    if (search_query != '') {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query);
    }
  }
}

function filter_for_url(obj, par_lab) {
  return obj.some(function (item) {
    return item.parent_label == par_lab;
  }) ? obj.filter(function (item) {
    return item.parent_label == par_lab;
  }) : false;
}

function assemble_url_fun(item) {
  if (item && item.parent_label == 'genders') {
    return item ? "gender=".concat(item.map(function (post) {
      return '&gender=' + post.node_label;
    }).join('')) : 'gender=&gender=female&gender=male';
  } else if (item && item.parent_label == 'ages') {
    return item ? "&age=".concat(item.map(function (post) {
      return '&age=' + post.node_label;
    }).join('')) : '&age=&age=children&age=adult';
  } else if (item && item.parent_label == 'types') {
    return item ? "filters=".concat(item.map(function (post) {
      return '&filters=' + post.node_label;
    }).join('')) : '';
  }
}

function Filter_popup_more() {
  var flex_bool = document.getElementById('filter-popup').style;
  flex_bool.display = flex_bool.display == 'flex' ? 'none' : 'flex';
  var fetch_el = document.getElementById('filter-popup');
  var filter_var = fetch_el.querySelectorAll('input');
  var filter_accum = [];

  for (var i = 0; i < filter_var.length; i++) {
    if (filter_var[i].checked) {
      filter_accum.push({
        "parent_label": filter_var[i].parentElement.className,
        "node_label": filter_var[i].parentElement.querySelector('span').innerHTML.trim()
      });
    }
  }

  if (filter_accum !== '') {
    var url_arr = [filter_for_url(filter_accum, 'genders'), filter_for_url(filter_accum, 'ages'), filter_for_url(filter_accum, 'types')];
    var assemble_url_genders = url_arr[0] ? "gender=".concat(url_arr[0].map(function (post) {
      return '&gender=' + post.node_label.toLowerCase();
    }).join('')) : 'gender=&gender=female&gender=male';
    var assemble_url_ages = url_arr[1] ? "&age=".concat(url_arr[1].map(function (post) {
      return '&age=' + post.node_label.toLowerCase();
    }).join('')) : '&age=&age=children&age=adult';
    var assemble_url_filters = url_arr[2] ? "&filters=".concat(url_arr[2][0].node_label.toLowerCase()) : '';
    var assemble_url_var = assemble_url_genders.concat(assemble_url_ages, assemble_url_filters); // console.log(assemble_url_var);

    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/products?' + assemble_url_var);
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
  }
}

function Filter_popup() {
  var flex_bool = document.getElementById('filter-popup').style;
  flex_bool.display = flex_bool.display == 'flex' ? 'none' : 'flex';
}

function Filter_popup_wrapper(event) {
  if (event.target.className == 'filter-popup-wrapper') {
    Filter_popup('wrapper');
  }
}

function Filter_popup_navigation_button() {
  fetch_products();
}

function gen_HTML_for_filter_input(fields, url_params, type_, parent_type) {
  // console.log( `Params: ${url_params} , Items: ${Object.values(fields).toString()}`  );
  return Object.values(fields).map(function (item) {
    return "<label class=\"".concat(parent_type, "\"><input type=\"").concat(type_, "\" name=\"").concat(parent_type, "\" ").concat(url_params != null && url_params.match(new RegExp("(^".concat(item.toLowerCase(), "*|[\\s])"), "g")) ? 'checked' : '', "/>\t\t\t<span>").concat(item, "</span></label>");
  }).toString().replace(/,/g, '');
}

function fetch_products() {
  var tr = window.location.href.split('&');
  var url_params_filters = tr.filter(function (item) {
    return item.match(/^filters*/);
  }).map(function (item) {
    return item.replace("filters=", '');
  }).filter(function (item) {
    return item != null;
  }).join(' ').trim();
  var url_params_genders = tr.filter(function (item) {
    return item.match(/^gender*/);
  }).map(function (item) {
    return item.replace("gender=", '');
  }).filter(function (item) {
    return item != null;
  }).join(' ').trim();
  var url_params_ages = tr.filter(function (item) {
    return item.match(/^age*/);
  }).map(function (item) {
    return item.replace("age=", '');
  }).filter(function (item) {
    return item != null;
  }).join(' ').trim(); // console.table('\n\n');

  console.log(url_params_genders);
  axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_4__["default"] + '/wp-json/global-custom-types/v1/settings').then(function (response) {
    document.getElementById('fetch_types').innerHTML = gen_HTML_for_filter_input(response.data.types.choices, url_params_filters, 'radio', 'types');
    document.getElementById('fetch_genders').innerHTML = gen_HTML_for_filter_input(response.data.genders.choices, url_params_genders, 'checkbox', 'genders');
    document.getElementById('fetch_ages').innerHTML = gen_HTML_for_filter_input(response.data.ages.choices, url_params_ages, 'checkbox', 'ages');
  }).catch(function (error) {
    console.log(error);
  }).then(function () {
    Filter_popup();
  });
}

var Btn = function Btn(_ref) {
  var onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      value = _ref.value,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: "navigation"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onClick,
    href: "/"
  }, "Logo"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-our-products"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    onChange: onChange,
    onKeyDown: HandleEvent,
    id: "search",
    placeholder: "search..."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "filter-btn",
    onClick: Filter_popup_navigation_button
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "filter-btn-a"
  }, "FILTER")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-category-header-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'male'],
        age: ['', 'children', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "nav-category-header",
    onClick: onClick,
    href: ""
  }, "Male"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-tabbed-subcategories"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Children")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-category-header-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/products',
      query: {
        gender: ['', 'female'],
        age: ['', 'children', 'adult']
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "nav-category-header",
    onClick: onClick,
    href: ""
  }, "Female"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-tabbed-subcategories"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Children")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-contact-about-subpages-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-contact-about-subpages"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/"
  }, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "nav-contact-about-subpages"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/"
  }, "About")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
    className: "social-icons"
  }, "social icons")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "filter-popup",
    className: "filter-popup-wrapper",
    onClick: Filter_popup_wrapper
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "filter-popup"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "divide-row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Gender"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "fetch_genders"
  }, "loading..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Products"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "fetch_types"
  }, "loading..."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Age"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "fetch_ages"
  }, "loading..."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "filter",
    className: "filter-btn",
    onClick: Filter_popup_more
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "filter-btn-a"
  }, "FILTER"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ }),

/***/ "./components/Vars.js":
/*!****************************!*\
  !*** ./components/Vars.js ***!
  \****************************/
/*! exports provided: global_settings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global_settings", function() { return global_settings; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var globalData;
var the_SITE_url = 'http://davidstobart.local';
axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(the_SITE_url + '/wp-json/global-api/v1/settings').then(function (response) {
  global_settings = response; // console.log(response.data);
}).catch(function (error) {// console.log(error);
}).then(function () {// always executed
});
var global_settings;
/* harmony default export */ __webpack_exports__["default"] = (the_SITE_url);

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
/* harmony import */ var _components_Meta_inf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta_inf */ "./components/Meta_inf.js");
/* harmony import */ var _components_Vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Vars */ "./components/Vars.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


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









var filterIsOn = false;

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

function mass_replace(array_of_strings_to_replace, str, replace_with) {
  var str = str;

  for (var i = 0; i < array_of_strings_to_replace.length; i++) {
    try {
      str.replace(array_of_strings_to_replace[i], replace_with);
    } catch (e) {}
  }

  return str;
}

function search(post) {
  var that = this.toLowerCase().replace(/\.|,/g, '').trim();
  var contains_space = that.trim().indexOf(' ') !== -1;
  var contains_male = that.split(' ').some(function (item) {
    return item == 'male';
  });
  var post_concat = post.title.rendered.concat(' ', post.acf.gender, ' ', post.acf.age, ' ', post.acf.type).toLowerCase(); // console.log(post_concat);

  var post_concat_no_gender = post.title.rendered.concat(' ', ' ', post.acf.age).toLowerCase();
  var current_post_is_male = post.acf.gender == 'male'; // var products_types_arr = mass_replace(['female', 'male', 'children', 'adult'], that, '').trim();

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

function contains_any_of(array, string) {
  for (var i = 0; i < array.length; i++) {
    if (string.indexOf(array[i]) !== -1) {
      return true;
    }
  }

  return false;
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
    key: "cleanSearch",
    value: function cleanSearch() {
      this.setState({
        search: '',
        filters: ''
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
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_6__["default"] + '/wp-json/wp/v2/posts');

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
      var filteredPosts = (this.props.query != null && this.state.search == '' ? this.props.posts.filter(initial_search, this.props.query) : this.props.posts.filter(search, this.state.search)).filter(search, this.props.query.filters ? this.props.query.filters : '');
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Sport"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "This is an example of a meta description. This will show up in search results."
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Meta_inf__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: this.cleanSearch.bind(this),
        value: this.state.search,
        onChange: this.updateSearch.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "products-top-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: '/products',
          query: {
            gender: ['female', 'male'],
            age: ['children', 'adult']
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: ""
      }, "Our products")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "hr-products-divider"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        className: "wrapper-products",
        id: "wrapper-inner-products"
      }, filteredPosts && filteredPosts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: post.id,
          className: "wrapper-inner-products"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "hover-helper"
        }, "Click to see details...")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: post.acf.icon.sizes.medium ? post.acf.icon.sizes.medium : '/static/loading.png',
          alt: "alt text",
          className: "post-thumb-image"
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, " ", post.acf.price, " \xA3 "))));
      })))));
    } // END OF RENDER

  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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