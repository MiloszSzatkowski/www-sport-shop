webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Meta_inf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta_inf */ "./components/Meta_inf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Vars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Vars */ "./components/Vars.js");


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









__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();



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
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_8__["default"] + '/wp-json/wp/v2/posts');

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "Sport"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "description",
        content: "This is an example of a meta description. This will show up in search results."
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Meta_inf__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "page-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: this.cleanSearch.bind(this),
        value: this.state.search,
        onChange: this.updateSearch.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("article", {
        className: "wrapper-products",
        id: "wrapper-inner-products"
      }, filteredPosts && filteredPosts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "wrapper-inner-products"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "hover-helper"
        }, "Click to see details...")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "/products/details/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post.acf.icon.sizes.medium,
          className: "post-thumb-image"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, " 99\xA3 "))));
      })))));
    } // END OF RENDER

  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=products.js.ab0006425c9c8d753cb5.hot-update.js.map