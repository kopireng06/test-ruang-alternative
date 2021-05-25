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
/* harmony import */ var D_ruang_alternative_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\ruang-alternative\\pages\\artikel\\[judul].js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






var GridArticle = function GridArticle() {
  _s();

  var _useState = useState({
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
      _useState2 = (0,D_ruang_alternative_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      dataArticle = _useState2[0],
      setDataArticle = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16",
    children: function () {
      return dataArticle.list_judul.map(function (data, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.CardArticle, {
          judul: data.judul,
          id: data.id
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 59
        }, _this);
      });
    }()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(GridArticle, "raFcxOuXvfBNEOZeWhn7Nb8gAug=");

_c = GridArticle;

var Artikel = function Artikel() {
  _s2();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var judul = router.query.judul;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 flex justify-center mx-auto mt-36 flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-3xl flex-1 font-semibold",
        children: judul
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-1 mt-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-blue-400 text-sm",
          children: "Tips dan Trik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-300 text-sm ml-10",
          children: "12 September 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-8/12 h-96 mx-auto relative mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
        src: "/merdeka.jpg",
        layout: "fill",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 lg:w-6/12 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-5 text-sm",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. Numquam placeat molestias aperiam unde incidunt."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s2(Artikel, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC9banVkdWxdLmpzIl0sIm5hbWVzIjpbIkdyaWRBcnRpY2xlIiwidXNlU3RhdGUiLCJkYXRhQXJ0aWNsZSIsInNldERhdGFBcnRpY2xlIiwibGlzdF9qdWR1bCIsIm1hcCIsImRhdGEiLCJpIiwianVkdWwiLCJpZCIsIkFydGlrZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUFBOztBQUFBLGtCQUVnQkMsUUFBUSxDQUFDO0FBQzFDLGtCQUFhLENBQ1Q7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBRFMsRUFFVDtBQUFDLFlBQUssQ0FBTjtBQUFRLGVBQVE7QUFBaEIsS0FGUyxFQUdUO0FBQUMsWUFBSyxDQUFOO0FBQVEsZUFBUTtBQUFoQixLQUhTLEVBSVQ7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBSlM7QUFENkIsR0FBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFZEMsV0FGYztBQUFBLE1BRUZDLGNBRkU7O0FBV3JCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUEsY0FFUztBQUFBLGFBQUlELFdBQVcsQ0FBQ0UsVUFBWixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOO0FBQUEsNEJBQVUsOERBQUMsK0NBQUQ7QUFBcUIsZUFBSyxFQUFFRCxJQUFJLENBQUNFLEtBQWpDO0FBQXdDLFlBQUUsRUFBRUYsSUFBSSxDQUFDRztBQUFqRCxXQUFrQkYsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVjtBQUFBLE9BQTNCLENBQUo7QUFBQSxLQUFEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FsQkQ7O0dBQU1QLFc7O0tBQUFBLFc7O0FBb0JOLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURrQixNQUVWSixLQUZVLEdBRUFHLE1BQU0sQ0FBQ0UsS0FGUCxDQUVWTCxLQUZVO0FBR2xCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsOERBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxrQkFBZ0RBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVNJO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUMsY0FBWDtBQUEwQixjQUFNLEVBQUMsTUFBakM7QUFBd0MsaUJBQVMsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBWUk7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQVdJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEosZUFnQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkosZUFxQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosZUEwQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkosZUE0Q0ksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNKLGVBNkNJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Q0o7QUFBQSxrQkFESjtBQWlESCxDQXBERDs7SUFBTUUsTztVQUNhRSxrRDs7O01BRGJGLE87QUFzRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWtlbC9banVkdWxdLmVhNmRkOWRmOGUxZjE4YzI5ZDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCB7TmF2YmFyLEZvb3RlcixDYXJkQXJ0aWNsZX0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgR3JpZEFydGljbGUgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBbZGF0YUFydGljbGUsc2V0RGF0YUFydGljbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibGlzdF9qdWR1bFwiOltcclxuICAgICAgICAgICAge1wiaWRcIjoxLFwianVkdWxcIjpcIkJhaGF5YSEgR2FzbGlnaHRpbmcgTWVuZ2hpbGFuZ2thbiBSYXNhIFBlcmNheWEgRGlyaW11XCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjIsXCJqdWR1bFwiOlwiUGFrYXIgSHVrdW0gVU5BSVIgVW5na2FwIFRpZ2EgS2VqYWhhdGFuIEludGVybmFzaW9uYWwgeWFuZyBEaWxha3VrYW4gSXNyYWVsXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJqdWR1bFwiOlwiU2VyaW5nIERpYWJhaWthbiwgUnVtYWggUG90b25nIEhld2FuIExhaGFuIEJpc25pcyB5YW5nIHNhbmdhdCBNZW5qYW5qaWthblwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwianVkdWxcIjpcIkRyLiBMaW5hIEhhc3R1dGk6IFBlcm55YXRhYW4gQmFod2EgSXNyYWVsIGl0dSBEaSBBdGFzIEh1a3VtIFRpZGFrIFRlcmxhbHUgU2FsYWhcIn1cclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNCBtdC0xNlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKCk9PmRhdGFBcnRpY2xlLmxpc3RfanVkdWwubWFwKChkYXRhLGkpPT48Q2FyZEFydGljbGUga2V5PXtpfSBqdWR1bD17ZGF0YS5qdWR1bH0gaWQ9e2RhdGEuaWR9Lz4pKSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQXJ0aWtlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBqdWR1bCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTYvMTIgZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG10LTM2IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZsZXgtMSBmb250LXNlbWlib2xkXCI+e2p1ZHVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXNtXCI+VGlwcyBkYW4gVHJpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LXNtIG1sLTEwXCI+MTIgU2VwdGVtYmVyIDIwMjE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBoLTk2IG14LWF1dG8gcmVsYXRpdmUgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVyZGVrYS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy02LzEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxHcmlkQXJ0aWNsZS8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFydGlrZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==