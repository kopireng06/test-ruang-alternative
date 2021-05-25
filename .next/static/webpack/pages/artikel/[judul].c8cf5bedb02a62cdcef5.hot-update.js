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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-10/12 mx-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC9banVkdWxdLmpzIl0sIm5hbWVzIjpbIkdyaWRBcnRpY2xlIiwidXNlU3RhdGUiLCJkYXRhQXJ0aWNsZSIsInNldERhdGFBcnRpY2xlIiwibGlzdF9qdWR1bCIsIm1hcCIsImRhdGEiLCJpIiwianVkdWwiLCJpZCIsIkFydGlrZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUFBOztBQUFBLGtCQUVnQkMsUUFBUSxDQUFDO0FBQzFDLGtCQUFhLENBQ1Q7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBRFMsRUFFVDtBQUFDLFlBQUssQ0FBTjtBQUFRLGVBQVE7QUFBaEIsS0FGUyxFQUdUO0FBQUMsWUFBSyxDQUFOO0FBQVEsZUFBUTtBQUFoQixLQUhTLEVBSVQ7QUFBQyxZQUFLLENBQU47QUFBUSxlQUFRO0FBQWhCLEtBSlM7QUFENkIsR0FBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFZEMsV0FGYztBQUFBLE1BRUZDLGNBRkU7O0FBV3JCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUEsY0FFUztBQUFBLGFBQUlELFdBQVcsQ0FBQ0UsVUFBWixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOO0FBQUEsNEJBQVUsOERBQUMsK0NBQUQ7QUFBcUIsZUFBSyxFQUFFRCxJQUFJLENBQUNFLEtBQWpDO0FBQXdDLFlBQUUsRUFBRUYsSUFBSSxDQUFDRztBQUFqRCxXQUFrQkYsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVjtBQUFBLE9BQTNCLENBQUo7QUFBQSxLQUFEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FsQkQ7O0dBQU1QLFc7O0tBQUFBLFc7O0FBb0JOLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURrQixNQUVWSixLQUZVLEdBRUFHLE1BQU0sQ0FBQ0UsS0FGUCxDQUVWTCxLQUZVO0FBR2xCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsOERBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxrQkFBZ0RBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVNJO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUMsY0FBWDtBQUEwQixjQUFNLEVBQUMsTUFBakM7QUFBd0MsaUJBQVMsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBWUk7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQVdJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEosZUFnQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkosZUFxQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosZUEwQkk7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkosZUE0Q0k7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNKLGVBK0NJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DSjtBQUFBLGtCQURKO0FBbURILENBdEREOztJQUFNRSxPO1VBQ2FFLGtEOzs7TUFEYkYsTztBQXdETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpa2VsL1tqdWR1bF0uYzhjZjViZWRiMDJhNjJjZGNlZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHtOYXZiYXIsRm9vdGVyLENhcmRBcnRpY2xlfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBHcmlkQXJ0aWNsZSA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IFtkYXRhQXJ0aWNsZSxzZXREYXRhQXJ0aWNsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJsaXN0X2p1ZHVsXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjEsXCJqdWR1bFwiOlwiQmFoYXlhISBHYXNsaWdodGluZyBNZW5naGlsYW5na2FuIFJhc2EgUGVyY2F5YSBEaXJpbXVcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MixcImp1ZHVsXCI6XCJQYWthciBIdWt1bSBVTkFJUiBVbmdrYXAgVGlnYSBLZWphaGF0YW4gSW50ZXJuYXNpb25hbCB5YW5nIERpbGFrdWthbiBJc3JhZWxcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImp1ZHVsXCI6XCJTZXJpbmcgRGlhYmFpa2FuLCBSdW1haCBQb3RvbmcgSGV3YW4gTGFoYW4gQmlzbmlzIHlhbmcgc2FuZ2F0IE1lbmphbmppa2FuXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJqdWR1bFwiOlwiRHIuIExpbmEgSGFzdHV0aTogUGVybnlhdGFhbiBCYWh3YSBJc3JhZWwgaXR1IERpIEF0YXMgSHVrdW0gVGlkYWsgVGVybGFsdSBTYWxhaFwifVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00IG10LTE2XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoKT0+ZGF0YUFydGljbGUubGlzdF9qdWR1bC5tYXAoKGRhdGEsaSk9PjxDYXJkQXJ0aWNsZSBrZXk9e2l9IGp1ZHVsPXtkYXRhLmp1ZHVsfSBpZD17ZGF0YS5pZH0vPikpKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBBcnRpa2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGp1ZHVsIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctNi8xMiBmbGV4IGp1c3RpZnktY2VudGVyIG14LWF1dG8gbXQtMzYgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZmxleC0xIGZvbnQtc2VtaWJvbGRcIj57anVkdWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIHRleHQtc21cIj5UaXBzIGRhbiBUcmlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtc20gbWwtMTBcIj4xMiBTZXB0ZW1iZXIgMjAyMTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIGgtOTYgbXgtYXV0byByZWxhdGl2ZSBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9tZXJkZWthLmpwZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTYvMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIHJhdGlvbmUsIHNpbWlsaXF1ZSBvZGl0LCBcclxuICAgICAgICAgICAgICAgICAgICBtYWduYW0gc2FlcGUgcmVwcmVoZW5kZXJpdCBoYXJ1bSwgYWNjdXNhbXVzIHByb3ZpZGVudCBhdXQgbW9kaSBpcHN1bSBkaWduaXNzaW1vcyBhbGlxdWlkIG5lc2NpdW50LiBcclxuICAgICAgICAgICAgICAgICAgICBOdW1xdWFtIHBsYWNlYXQgbW9sZXN0aWFzIGFwZXJpYW0gdW5kZSBpbmNpZHVudC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyByYXRpb25lLCBzaW1pbGlxdWUgb2RpdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnbmFtIHNhZXBlIHJlcHJlaGVuZGVyaXQgaGFydW0sIGFjY3VzYW11cyBwcm92aWRlbnQgYXV0IG1vZGkgaXBzdW0gZGlnbmlzc2ltb3MgYWxpcXVpZCBuZXNjaXVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtcXVhbSBwbGFjZWF0IG1vbGVzdGlhcyBhcGVyaWFtIHVuZGUgaW5jaWR1bnQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgcmF0aW9uZSwgc2ltaWxpcXVlIG9kaXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hZ25hbSBzYWVwZSByZXByZWhlbmRlcml0IGhhcnVtLCBhY2N1c2FtdXMgcHJvdmlkZW50IGF1dCBtb2RpIGlwc3VtIGRpZ25pc3NpbW9zIGFsaXF1aWQgbmVzY2l1bnQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bXF1YW0gcGxhY2VhdCBtb2xlc3RpYXMgYXBlcmlhbSB1bmRlIGluY2lkdW50LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIG14LWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R3JpZEFydGljbGUvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFydGlrZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==