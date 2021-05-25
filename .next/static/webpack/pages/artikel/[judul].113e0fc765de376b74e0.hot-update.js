self["webpackHotUpdate_N_E"]("pages/artikel/[judul]",{

/***/ "./pages/artikel/[judul].js":
/*!**********************************!*\
  !*** ./pages/artikel/[judul].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\ruang-alternative\\pages\\artikel\\[judul].js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var GridArticle = function GridArticle() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
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
  }),
      dataArticle = _useState[0],
      setDataArticle = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16",
    children: function () {
      return dataArticle.list_judul.map(function (data, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.CardArticle, {
          judul: data.judul,
          id: data.id
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 59
        }, _this);
      });
    }()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_s(GridArticle, "raFcxOuXvfBNEOZeWhn7Nb8gAug=");

_c = GridArticle;

var Artikel = function Artikel() {
  _s2();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var judul = router.query.judul;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 flex justify-center mx-auto mt-36 flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-3xl flex-1 font-semibold",
        children: judul
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-1 mt-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-blue-400 text-sm",
          children: "Tips dan Trik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-300 text-sm ml-10",
          children: "12 September 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-8/12 h-96 mx-auto relative mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
        src: "/merdeka.jpg",
        layout: "fill",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "font-bold",
      children: "Artikel Terkait"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s2(Artikel, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c2 = Artikel;
/* harmony default export */ __webpack_exports__["default"] = (Artikel);

var _c, _c2;

$RefreshReg$(_c, "GridArticle");
$RefreshReg$(_c2, "Artikel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC9banVkdWxdLmpzIl0sIm5hbWVzIjpbIkdyaWRBcnRpY2xlIiwidXNlU3RhdGUiLCJkYXRhQXJ0aWNsZSIsInNldERhdGFBcnRpY2xlIiwibGlzdF9qdWR1bCIsIm1hcCIsImRhdGEiLCJpIiwianVkdWwiLCJpZCIsIkFydGlrZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQUE7O0FBQUEsa0JBRWdCQywrQ0FBUSxDQUFDO0FBQzFDLGtCQUFhLENBQ1Q7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBRFMsRUFFVDtBQUFDLFlBQUssQ0FBTjtBQUFRLGVBQVE7QUFBaEIsS0FGUyxFQUdUO0FBQUMsWUFBSyxDQUFOO0FBQVEsZUFBUTtBQUFoQixLQUhTLEVBSVQ7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBSlM7QUFENkIsR0FBRCxDQUZ4QjtBQUFBLE1BRWRDLFdBRmM7QUFBQSxNQUVGQyxjQUZFOztBQVdyQixzQkFDSTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBLGNBRVM7QUFBQSxhQUFJRCxXQUFXLENBQUNFLFVBQVosQ0FBdUJDLEdBQXZCLENBQTJCLFVBQUNDLElBQUQsRUFBTUMsQ0FBTjtBQUFBLDRCQUFVLDhEQUFDLCtDQUFEO0FBQXFCLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUFqQztBQUF3QyxZQUFFLEVBQUVGLElBQUksQ0FBQ0c7QUFBakQsV0FBa0JGLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVY7QUFBQSxPQUEzQixDQUFKO0FBQUEsS0FBRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBbEJEOztHQUFNUCxXOztLQUFBQSxXOztBQW9CTixJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEa0IsTUFFVkosS0FGVSxHQUVBRyxNQUFNLENBQUNFLEtBRlAsQ0FFVkwsS0FGVTtBQUdsQixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDhEQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0JBQWdEQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFTSTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDZCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLGNBQVg7QUFBMEIsY0FBTSxFQUFDLE1BQWpDO0FBQXdDLGlCQUFTLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQVlJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU1JO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFXSTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZ0JJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKLGVBcUJJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKLGVBMEJJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKLGVBNENJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0osZUE2Q0ksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0NKLGVBOENJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0o7QUFBQSxrQkFESjtBQWtESCxDQXJERDs7SUFBTUUsTztVQUNhRSxrRDs7O01BRGJGLE87QUF1RE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWtlbC9banVkdWxdLjExM2UwZmM3NjVkZTM3NmI3NGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCB7TmF2YmFyLEZvb3RlcixDYXJkQXJ0aWNsZX0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEdyaWRBcnRpY2xlID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW2RhdGFBcnRpY2xlLHNldERhdGFBcnRpY2xlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcImxpc3RfanVkdWxcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6MSxcImp1ZHVsXCI6XCJCYWhheWEhIEdhc2xpZ2h0aW5nIE1lbmdoaWxhbmdrYW4gUmFzYSBQZXJjYXlhIERpcmltdVwifSxcclxuICAgICAgICAgICAge1wiaWRcIjoyLFwianVkdWxcIjpcIlBha2FyIEh1a3VtIFVOQUlSIFVuZ2thcCBUaWdhIEtlamFoYXRhbiBJbnRlcm5hc2lvbmFsIHlhbmcgRGlsYWt1a2FuIElzcmFlbFwifSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwianVkdWxcIjpcIlNlcmluZyBEaWFiYWlrYW4sIFJ1bWFoIFBvdG9uZyBIZXdhbiBMYWhhbiBCaXNuaXMgeWFuZyBzYW5nYXQgTWVuamFuamlrYW5cIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcImp1ZHVsXCI6XCJEci4gTGluYSBIYXN0dXRpOiBQZXJueWF0YWFuIEJhaHdhIElzcmFlbCBpdHUgRGkgQXRhcyBIdWt1bSBUaWRhayBUZXJsYWx1IFNhbGFoXCJ9XHJcbiAgICAgICAgXVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQgbXQtMTZcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKCgpPT5kYXRhQXJ0aWNsZS5saXN0X2p1ZHVsLm1hcCgoZGF0YSxpKT0+PENhcmRBcnRpY2xlIGtleT17aX0ganVkdWw9e2RhdGEuanVkdWx9IGlkPXtkYXRhLmlkfS8+KSkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFydGlrZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsganVkdWwgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy02LzEyIGZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtdC0zNiBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmbGV4LTEgZm9udC1zZW1pYm9sZFwiPntqdWR1bH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgdGV4dC1zbVwiPlRpcHMgZGFuIFRyaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC1zbSBtbC0xMFwiPjEyIFNlcHRlbWJlciAyMDIxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgaC05NiBteC1hdXRvIHJlbGF0aXZlIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL21lcmRla2EuanBnXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctNi8xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFydGlrZWwgVGVya2FpdDwvZGl2PlxyXG4gICAgICAgICAgICA8R3JpZEFydGljbGUvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsOyJdLCJzb3VyY2VSb290IjoiIn0=