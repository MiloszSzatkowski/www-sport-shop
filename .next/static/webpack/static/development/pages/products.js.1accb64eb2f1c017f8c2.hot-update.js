webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/normalize.css */ "./static/normalize.css");
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Vars */ "./components/Vars.js");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);










__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();

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
    console.log(filter_accum); // filter_accum = encodeURI(filter_accum.toLowerCase().trim());
    // Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&filters=' + filter_accum);
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
  return Object.values(fields).map(function (item) {
    return "<label class=\"".concat(parent_type, "\"><input type=\"").concat(type_, "\" name=\"").concat(parent_type, "\" ").concat(url_params != null && url_params.includes(item) ? 'checked' : '', "/>\t<span>").concat(item, "</span></label>");
  }).toString().replace(/,/g, '');
}

function fetch_products() {
  var url_params = new URL(window.location.href).searchParams.get("filters");
  axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_components_Vars__WEBPACK_IMPORTED_MODULE_4__["default"] + '/wp-json/global-custom-types/v1/settings').then(function (response) {
    document.getElementById('fetch_types').innerHTML = gen_HTML_for_filter_input(response.data.types.choices, url_params, 'radio', 'types');
    document.getElementById('fetch_genders').innerHTML = gen_HTML_for_filter_input(response.data.genders.choices, url_params, 'checkbox', 'genders');
    document.getElementById('fetch_ages').innerHTML = gen_HTML_for_filter_input(response.data.ages.choices, url_params, 'checkbox', 'ages');
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

/***/ })

})
//# sourceMappingURL=products.js.1accb64eb2f1c017f8c2.hot-update.js.map