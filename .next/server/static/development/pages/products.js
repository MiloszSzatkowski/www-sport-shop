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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function HandleEvent(event) {
  if (event.keyCode == '13') {
    //enter pressed
    redirect();
  }
} // use in case of problem with hiding keyboard on mobile
// if (window.innerWidth <= 1000) {
// 	hideKeyboard(document.getElementById('search'));
// }
//
// function hideKeyboard(element) {
//     element.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
//     element.removeAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
//     setTimeout(function() {
//         element.blur();  //actually close the keyboard
//         // Remove readonly attribute after keyboard is hidden.
//         element.removeAttribute('readonly');
//         element.removeAttribute('disabled');
//     }, 100);
// }


function redirect(event) {
  if (window.location.href.indexOf('products') === -1 || window.location.href.indexOf('details') !== -1) {
    var search_query = encodeURI(document.getElementById('search').value.toLowerCase().trim());
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query);
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

function eval_radio_button() {
  return ' var that=this; var pr = this.parentElement.querySelectorAll(`input`); \
	for (var i = 0; i < pr.length; i++) { \
		if (pr[i] !== that.children[0]) { \
			 pr[i].checked = false;  \
		} \
	} \
';
}

function gen_HTML_for_filter_input(fields, url_params, type_, parent_type) {
  // console.log( `Params: ${url_params} , Items: ${Object.values(fields).toString()}`  );
  return Object.values(fields).map(function (item) {
    return "<label class=\"".concat(parent_type, "\" onclick=\"").concat(type_ == 'radio' ? eval_radio_button() : console.log(), "\" ><input type=\"checkbox\" name=\"").concat(parent_type, "\" ").concat(url_params != null && url_params.match(new RegExp("(^".concat(item.toLowerCase(), "*|[\\s])"), "g")) ? 'checked' : '', "/>\t\t\t<span>").concat(item, "</span></label>");
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

function colorNavigation() {
  var wlh = window.location.href;
  var nav_arr = {
    our_products: document.getElementById('our-products'),
    male: document.getElementById('male'),
    male_adult: document.getElementById('male-adult'),
    male_children: document.getElementById('male-children'),
    female: document.getElementById('female'),
    female_adult: document.getElementById('female-adult'),
    female_children: document.getElementById('female-children'),
    contact: document.getElementById('contact'),
    about: document.getElementById('about')
  };

  function removeEveryOther() {
    for (var i = 0; i < Object.values(nav_arr).length; i++) {
      Object.values(nav_arr)[i].classList.remove('red');
    }
  }

  if (wlh.includes('contact')) {
    removeEveryOther();
    nav_arr.contact.classList.add('red');
  } else if (wlh.includes('about')) {
    removeEveryOther();
    nav_arr.about.classList.add('red');
  } else if (wlh.includes('=male') && wlh.includes('=female') && wlh.includes('=children') && wlh.includes('=adult')) {
    removeEveryOther();
    nav_arr.our_products.classList.add('red');
  } else if (wlh.includes('=female') && !wlh.includes('=male') && wlh.includes('=children') && wlh.includes('=adult')) {
    removeEveryOther();
    nav_arr.female.classList.add('red');
  } else if (wlh.includes('=male') && !wlh.includes('=female') && wlh.includes('=children') && wlh.includes('=adult')) {
    removeEveryOther();
    nav_arr.male.classList.add('red');
  } else if (wlh.includes('=male') && !wlh.includes('=female') && wlh.includes('=children') && !wlh.includes('=adult')) {
    removeEveryOther();
    nav_arr.male.classList.add('red');
    nav_arr.male_children.classList.add('red');
  } else if (wlh.includes('=male') && !wlh.includes('=female') && wlh.includes('=adult') && !wlh.includes('=children')) {
    removeEveryOther();
    nav_arr.male.classList.add('red');
    nav_arr.male_adult.classList.add('red');
  } else if (wlh.includes('=female') && !wlh.includes('=male') && wlh.includes('=children') && !wlh.includes('=adult')) {
    removeEveryOther();
    nav_arr.female.classList.add('red');
    nav_arr.female_children.classList.add('red');
  } else if (wlh.includes('=female') && !wlh.includes('=male') && wlh.includes('=adult') && !wlh.includes('=children')) {
    removeEveryOther();
    nav_arr.female.classList.add('red');
    nav_arr.female_adult.classList.add('red');
  }
}

function showMobileMenu() {
  var menu = document.getElementById('main_navigation');
  menu.style.display = 'block';
  menu.classList.remove('slideUp');
  menu.classList.add('slideDown');
  var ham = document.getElementById('hamburger');
  ham.style.display = "none";
}

function closeMobileMenu() {
  var menu = document.getElementById('main_navigation');
  menu.classList.remove('slideDown');
  menu.classList.add('slideUp');
  setTimeout(function () {
    menu.style.display = 'none';
  }, 700);
  var ham = document.getElementById('hamburger');
  ham.style.display = "flex";
}

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
      // console.log('mount');
      var that = _assertThisInitialized(_assertThisInitialized(_this));

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_4__["default"] + '/wp-json/global-api/v1/settings').then(function (response) {
        that.setState({
          logo_src: response.data.logo_src
        });
      }).then({//
      });
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_4__["default"] + '/wp-json/wp/v2/posts').then(function (response) {
        that.setState({
          nr_ch_f: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'female' && i.acf.age == 'children';
          })).length,
          nr_ch_m: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'male' && i.acf.age == 'children';
          })).length,
          nr_ad_f: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'female' && i.acf.age == 'adult';
          })).length,
          nr_ad_m: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'male' && i.acf.age == 'adult';
          })).length,
          nr_men: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'male';
          })).length,
          nr_wom: Object.keys(response.data.filter(function (i) {
            return i.acf.gender == 'female';
          })).length
        });
      }).then({//
      });
    });

    _this.state = {
      loading: '',
      logo_src: '/static/loading_white.png',
      nr_ch_f: '0',
      nr_ch_m: '0',
      nr_ad_f: '0',
      nr_ad_m: '0',
      nr_men: '0',
      nr_wom: '0'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      colorNavigation();

      if (window.innerWidth <= 1000) {
        _toConsumableArray(document.getElementsByClassName('hide_menu')).forEach(function (item) {
          item.addEventListener('click', closeMobileMenu);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      colorNavigation();
    }
  }, {
    key: "render",
    value: function render() {
      var global = {
        state: this.state
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "hamburger",
        className: "hamburger"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: this.props.onClick,
        href: "/",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        id: "logo",
        src: this.props.img_logo,
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "input"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.props.value,
        onChange: this.props.onChange,
        onKeyDown: this.props.HandleEvent,
        id: "search",
        placeholder: "search..."
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "zoom",
        onClick: redirect
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ham",
        onClick: showMobileMenu
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "/static/hamburger.png",
        alt: "menu"
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
        id: "main_navigation",
        className: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "closer",
        className: "closer",
        onClick: closeMobileMenu
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "\u2716")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: this.props.onClick,
        href: "/",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        id: "logo",
        src: this.props.img_logo,
        alt: "logo"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
        id: "our-products",
        className: "hide_menu",
        onClick: this.props.onClick,
        href: "/"
      }, "Our products"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "input large_screen"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.props.value,
        onChange: this.props.onChange,
        onKeyDown: this.props.HandleEvent,
        id: "search",
        placeholder: "search..."
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        onClick: redirect
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "put-xxx"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        id: "filter-btn-menu",
        className: "filter-btn",
        onClick: Filter_popup_navigation_button
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "filter-btn-a"
      }, "FILTER"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
        id: "male",
        className: "nav-category-header hide_menu",
        onClick: this.props.onClick,
        href: ""
      }, "Male (", global.state.nr_men, ")"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
        id: "male-adult",
        className: "hide_menu",
        onClick: this.props.onClick,
        href: "/"
      }, "Adult   (", global.state.nr_ad_m, ")"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/products',
          query: {
            gender: ['', 'male'],
            age: ['', 'children']
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        id: "male-children",
        className: "hide_menu",
        onClick: this.props.onClick,
        href: "/"
      }, "Children  (", global.state.nr_ch_m, ")")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
        id: "female",
        className: "nav-category-header hide_menu",
        onClick: this.props.onClick,
        href: ""
      }, "Female (", global.state.nr_wom, ")"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
        id: "female-adult",
        className: "hide_menu",
        onClick: this.props.onClick,
        href: ""
      }, "Adult (", global.state.nr_ad_f, ")"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/products',
          query: {
            gender: ['', 'female'],
            age: ['', 'children']
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        id: "female-children",
        className: "hide_menu",
        onClick: this.props.onClick,
        href: "/"
      }, "Children (", global.state.nr_ch_f, ")")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "nav-contact-about-subpages-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "nav-contact-about-subpages"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        id: "contact",
        className: "hide_menu",
        href: "/contact",
        prefetch: true
      }, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "nav-contact-about-subpages"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        id: "about",
        className: "hide_menu",
        href: "/about",
        prefetch: true
      }, "About")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
        className: "social-icons"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./components/Vars.js":
/*!****************************!*\
  !*** ./components/Vars.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var the_SITE_url = 'http://davidstobart.local';
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


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

function redirect_to_main() {
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var that = this;
      var existing_xs = document.getElementsByClassName('x_butt_filter');
      console.log(existing_xs);
      var x_exists = existing_xs.length > 0;

      if (x_exists) {
        for (var i = 0; i < existing_xs.length; i++) {
          existing_xs[i].parentNode.removeChild(existing_xs[i]);
        }
      }

      var el_ = document.createElement('p');
      el_.innerHTML = '&#10006;';
      el_.className = 'x_butt_filter';
      el_.addEventListener('click', function () {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
      });
      var popup_check = document.getElementById('put-xxx');
      popup_check.appendChild(el_);

      if (that.props.query.filters != undefined) {
        el_.style.display = 'flex';
      } else {
        el_.style.display = 'none';
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
        var response, response_2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_6__["default"] + '/wp-json/wp/v2/posts');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_6__["default"] + '/wp-json/global-api/v1/settings');

              case 5:
                response_2 = _context.sent;
                return _context.abrupt("return", {
                  posts: response.data,
                  query: context.query,
                  global_: response_2.data
                });

              case 7:
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
      var _this2 = this;

      if (this.props.query == null || this.props.query == undefined) {
        console.log(this.props.query);
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
      }

      var filteredPosts = (this.props.query != null && this.state.search == '' ? this.props.posts.filter(initial_search, this.props.query) : this.props.posts.filter(search, this.state.search)).filter(search, this.props.query.filters ? this.props.query.filters : '');
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, this.props.global_.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "{this.props.global_.description}"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Meta_inf__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img_logo: this.props.global_.logo_src,
        onClick: this.cleanSearch.bind(this),
        value: this.state.search,
        onChange: this.updateSearch.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "products-top-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: '/products',
          query: {
            gender: ['female', 'male'],
            age: ['children', 'adult']
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: ""
      }, "Our products")), this.props.query.gender ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "\u203A") : '', this.props.query.gender && this.props.query.gender.filter(function (i) {
        return i != '';
      }).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: item.toString(),
          href: {
            pathname: '/products',
            query: {
              gender: ['', "".concat(item)],
              age: ['children', 'adult']
            }
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          key: item.toString(),
          href: ""
        }, item.toString(), Object.keys(_this2.props.query.gender.filter(function (i) {
          return i != '';
        })).length > 1 && index == 0 ? "   &" : ''));
      }), this.props.query.gender ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "\u203A") : '', this.props.query.age && this.props.query.age.filter(function (i) {
        return i != '';
      }).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: item.toString(),
          href: {
            pathname: '/products',
            query: {
              gender: ['female', 'male'],
              age: ['', "".concat(item)]
            }
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          key: item.toString(),
          href: ""
        }, item.toString(), Object.keys(_this2.props.query.age.filter(function (i) {
          return i != '';
        })).length > 1 && index == 0 ? "   &" : ''));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "filters-headline",
        onClick: redirect_to_main
      }, this.props.query.filters != undefined ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "filters-headline-before"
      }) : '', this.props.query.filters != undefined ? this.props.query.filters : ''))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
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