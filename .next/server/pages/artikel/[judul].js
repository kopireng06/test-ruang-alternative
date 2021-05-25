(function() {
var exports = {};
exports.id = "pages/artikel/[judul]";
exports.ids = ["pages/artikel/[judul]"];
exports.modules = {

/***/ "./pages/artikel/[judul].js":
/*!**********************************!*\
  !*** ./pages/artikel/[judul].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\ruang-alternative\\pages\\artikel\\[judul].js";






const GridArticle = () => {
  const {
    0: dataArticle,
    1: setDataArticle
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    "list_judul": [{
      "id": 1,
      "judul": "Bahaya! Gaslighting Menghilangkan Rasa Percaya Dirimu"
    }, {
      "id": 2,
      "judul": "Pakar Hukum UNAIR Ungkap Tiga Kejahatan Internasional yang Dilakukan Israel"
    }, {
      "id": 3,
      "judul": "Sering Diabaikan, Rumah Potong Hewan Lahan Bisnis yang sangat Menjanjikan"
    }, {
      "id": 4,
      "judul": "Dr. Lina Hastuti: Pernyataan Bahwa Israel itu Di Atas Hukum Tidak Terlalu Salah"
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16",
    children: (() => dataArticle.list_judul.map((data, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.CardArticle, {
      judul: data.judul,
      id: data.id
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 59
    }, undefined)))()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

const Artikel = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    judul
  } = router.query;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 flex justify-center mx-auto mt-36 flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-3xl flex-1 font-semibold",
        children: judul
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-1 mt-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-blue-400 text-sm",
          children: "Tips dan Trik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-300 text-sm ml-10",
          children: "12 September 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-8/12 h-96 mx-auto relative mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
        src: "/merdeka.jpg",
        layout: "fill",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "font-bold w-10/12 lg:w-8/12 text-2xl mx-auto",
      children: "Related"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Artikel);

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_tailwindcss_tailwind_css-node_modules_next_image_js-node_modules_next_link_js","pages_index_js"], function() { return __webpack_exec__("./pages/artikel/[judul].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWFuZy1hbHRlcm5hdGl2ZS8uL3BhZ2VzL2FydGlrZWwvW2p1ZHVsXS5qcyIsIndlYnBhY2s6Ly9ydWFuZy1hbHRlcm5hdGl2ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3J1YW5nLWFsdGVybmF0aXZlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3J1YW5nLWFsdGVybmF0aXZlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3J1YW5nLWFsdGVybmF0aXZlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcnVhbmctYWx0ZXJuYXRpdmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3J1YW5nLWFsdGVybmF0aXZlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9ydWFuZy1hbHRlcm5hdGl2ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcnVhbmctYWx0ZXJuYXRpdmUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3J1YW5nLWFsdGVybmF0aXZlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiR3JpZEFydGljbGUiLCJkYXRhQXJ0aWNsZSIsInNldERhdGFBcnRpY2xlIiwidXNlU3RhdGUiLCJsaXN0X2p1ZHVsIiwibWFwIiwiZGF0YSIsImkiLCJqdWR1bCIsImlkIiwiQXJ0aWtlbCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5Il0sIm1h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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0NKLGVBOENJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNKO0FBQUEsa0JBREo7QUFrREgsQ0FyREQ7O0FBdURBLCtEQUFlRSxPQUFmLEU7Ozs7Ozs7Ozs7O0FDakZBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2FydGlrZWwvW2p1ZHVsXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHtOYXZiYXIsRm9vdGVyLENhcmRBcnRpY2xlfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgR3JpZEFydGljbGUgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBbZGF0YUFydGljbGUsc2V0RGF0YUFydGljbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibGlzdF9qdWR1bFwiOltcclxuICAgICAgICAgICAge1wiaWRcIjoxLFwianVkdWxcIjpcIkJhaGF5YSEgR2FzbGlnaHRpbmcgTWVuZ2hpbGFuZ2thbiBSYXNhIFBlcmNheWEgRGlyaW11XCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjIsXCJqdWR1bFwiOlwiUGFrYXIgSHVrdW0gVU5BSVIgVW5na2FwIFRpZ2EgS2VqYWhhdGFuIEludGVybmFzaW9uYWwgeWFuZyBEaWxha3VrYW4gSXNyYWVsXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJqdWR1bFwiOlwiU2VyaW5nIERpYWJhaWthbiwgUnVtYWggUG90b25nIEhld2FuIExhaGFuIEJpc25pcyB5YW5nIHNhbmdhdCBNZW5qYW5qaWthblwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwianVkdWxcIjpcIkRyLiBMaW5hIEhhc3R1dGk6IFBlcm55YXRhYW4gQmFod2EgSXNyYWVsIGl0dSBEaSBBdGFzIEh1a3VtIFRpZGFrIFRlcmxhbHUgU2FsYWhcIn1cclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNCBtdC0xNlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKCk9PmRhdGFBcnRpY2xlLmxpc3RfanVkdWwubWFwKChkYXRhLGkpPT48Q2FyZEFydGljbGUga2V5PXtpfSBqdWR1bD17ZGF0YS5qdWR1bH0gaWQ9e2RhdGEuaWR9Lz4pKSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQXJ0aWtlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBqdWR1bCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTYvMTIgZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG10LTM2IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZsZXgtMSBmb250LXNlbWlib2xkXCI+e2p1ZHVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXNtXCI+VGlwcyBkYW4gVHJpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LXNtIG1sLTEwXCI+MTIgU2VwdGVtYmVyIDIwMjE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBoLTk2IG14LWF1dG8gcmVsYXRpdmUgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVyZGVrYS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy02LzEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHctMTAvMTIgbGc6dy04LzEyIHRleHQtMnhsIG14LWF1dG9cIj5SZWxhdGVkPC9kaXY+XHJcbiAgICAgICAgICAgIDxHcmlkQXJ0aWNsZS8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFydGlrZWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=