webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Fonts.js":
/*!*****************************!*\
  !*** ./components/Fonts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var roboto = new FontFaceObserver('Roboto');
  roboto.load().then(function () {
    document.documentElement.classList.add('roboto');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ })

})
//# sourceMappingURL=index.js.9d6d895b890332f4c542.hot-update.js.map