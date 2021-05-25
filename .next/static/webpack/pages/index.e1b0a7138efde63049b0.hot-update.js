self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_ruang_alternative_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_ruang_alternative_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_ruang_alternative_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_ruang_alternative_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\ruang-alternative\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();








var Navbar = function Navbar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full bg-white shadow md:px-0 px-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "h-20 container mx-auto flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 md:flex hidden flex-col md:justify-center justify-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "text-yellow-500 font-bold text-3xl mr-10",
            children: "Designate."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mx-4 font-semibold",
            children: "Event"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mx-4 font-semibold",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
            src: "/flag-400.png",
            alt: "Picture of the author",
            width: 15,
            height: 10
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            name: "language",
            id: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              className: "font-semibold",
              value: "indonesia",
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 md:flex hidden justify-end",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mx-4 font-semibold",
            children: "Masuk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mx-4 font-semibold",
            children: "Daftar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "ml-4 font-semibold text-yellow-500 border-2 border-yellow-500 py-1 px-3 border-r-2",
            children: "Perusahaan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-yellow-500 md:hidden font-bold text-3xl mr-10",
        children: "Designate."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return alert('asu');
        },
        className: "md:hidden relative top-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: "/menu.png",
          width: 30,
          height: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = Navbar;

var SearchArtikel = function SearchArtikel() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      dataSearch = _useState[0],
      setDataSearch = _useState[1];

  var handleSubmit = function handleSubmit(event) {
    alert(dataSearch);
    event.preventDefault();
  };

  var handleChangeSearch = function handleChangeSearch(event) {
    setDataSearch(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    className: "w-10/12 lg:w-8/12 mx-auto flex md:flex-row flex-col mt-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex-1 h-12 flex md:mx-0 mx-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Masukkan Judul Artikel",
        className: "flex-1 border-2 border-gray-400 p-3 shadow",
        onChange: handleChangeSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSubmit,
        className: "bg-yellow-500 w-36 text-white",
        children: "CARI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "Kategori",
      id: "",
      className: "border-2 h-12 md:w-36 px-3 mx-4 md:my-0 my-3 border-gray-400",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: "Kategori",
        children: "Kategori"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "Urutkan",
      id: "",
      className: "border-2 h-12 md:w-36 px-3 mx-4 md:my-0 my-1 border-gray-400",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: "Urutkan",
        children: "Urutkan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s(SearchArtikel, "9U5E0Wxgf5bm8J0RyUlSWC4p19E=");

_c2 = SearchArtikel;

var InfiniteArticle = function InfiniteArticle() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(Array.from({
    length: 0
  })),
      dataArticle = _useState2[0],
      setDataArticle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      hasMoreItems = _useState3[0],
      setHasMoreItems = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(6),
      limit = _useState4[0],
      setLimit = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      offset = _useState5[0],
      setOffset = _useState5[1];

  var getDataArticle = /*#__PURE__*/function () {
    var _ref = (0,D_ruang_alternative_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_ruang_alternative_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var data;
      return D_ruang_alternative_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get('localhost:3000').then(function (res) {
                data = res.data;
                console.log('data');
              });

            case 2:
              return _context.abrupt("return", data);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDataArticle() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7__.default, {
    dataLength: dataArticle.length,
    next: getDataArticle,
    hasMore: hasMoreItems,
    loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "wait"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }, _this),
    className: "w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16",
    children: dataArticle.map(function (data, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardArticle, {
        judul: data.judul
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, _this);
};

_s2(InfiniteArticle, "T9maz/Bh37Lh4VJBsvrKq2soJaU=");

_c3 = InfiniteArticle;

var CardArticle = function CardArticle() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: {
      pathname: '/artikel/1'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "h-48 flex bg-white shadow rounded",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 relative",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: "/merdeka.jpg",
          layout: "fill",
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 flex flex-col justify-between p-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-semibold text-md mt-2",
          children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, asperiores."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-blue-400 text-xs",
            children: "Tips dan Trik"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-gray-300 text-xs mt-3",
            children: "12 September 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, _this);
};

_c4 = CardArticle;

var RootPage = function RootPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchArtikel, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfiniteArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c5 = RootPage;
/* harmony default export */ __webpack_exports__["default"] = (RootPage);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "SearchArtikel");
$RefreshReg$(_c3, "InfiniteArticle");
$RefreshReg$(_c4, "CardArticle");
$RefreshReg$(_c5, "RootPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsImFsZXJ0IiwiU2VhcmNoQXJ0aWtlbCIsInVzZVN0YXRlIiwiZGF0YVNlYXJjaCIsInNldERhdGFTZWFyY2giLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJJbmZpbml0ZUFydGljbGUiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJkYXRhQXJ0aWNsZSIsInNldERhdGFBcnRpY2xlIiwiaGFzTW9yZUl0ZW1zIiwic2V0SGFzTW9yZUl0ZW1zIiwibGltaXQiLCJzZXRMaW1pdCIsIm9mZnNldCIsInNldE9mZnNldCIsImdldERhdGFBcnRpY2xlIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpIiwianVkdWwiLCJDYXJkQXJ0aWNsZSIsInBhdGhuYW1lIiwiUm9vdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFB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QUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLGNBQVg7QUFBMEIsZ0JBQU0sRUFBQyxNQUFqQztBQUF3QyxtQkFBUyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsMENBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUJILENBckJEOztNQUFNRCxXOztBQXVCTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJLDhEQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUEsa0JBREo7QUFPSCxDQVJEOztNQUFNQSxRO0FBYUosK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTFiMGE3MTM4ZWZkZTYzMDQ5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50J1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHNoYWRvdyBtZDpweC0wIHB4LTNcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoLTIwIGNvbnRhaW5lciBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleCBoaWRkZW4gZmxleC1jb2wgbWQ6anVzdGlmeS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgZm9udC1ib2xkIHRleHQtM3hsIG1yLTEwXCI+RGVzaWduYXRlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5FdmVudDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXgtNCBmb250LXNlbWlib2xkXCI+QmxvZzwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ZsYWctNDAwLnBuZ1wiIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIHdpZHRoPXsxNX0gaGVpZ2h0PXsxMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsYW5ndWFnZVwiIGlkPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIiB2YWx1ZT1cImluZG9uZXNpYVwiPklEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXggaGlkZGVuIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5NYXN1azwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5EYWZ0YXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWwtNCBmb250LXNlbWlib2xkIHRleHQteWVsbG93LTUwMCBib3JkZXItMiBib3JkZXIteWVsbG93LTUwMCBweS0xIHB4LTMgYm9yZGVyLXItMlwiPlBlcnVzYWhhYW48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIG1kOmhpZGRlbiBmb250LWJvbGQgdGV4dC0zeGwgbXItMTBcIj5EZXNpZ25hdGUuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5hbGVydCgnYXN1Jyl9IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSB0b3AtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVudS5wbmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaEFydGlrZWwgPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IFtkYXRhU2VhcmNoLHNldERhdGFTZWFyY2hdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpPT57XHJcbiAgICAgICAgYWxlcnQoZGF0YVNlYXJjaCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTZWFyY2ggPSAoZXZlbnQpPT57XHJcbiAgICAgICAgc2V0RGF0YVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgaC0xMiBmbGV4IG1kOm14LTAgbXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXN1a2thbiBKdWR1bCBBcnRpa2VsXCIgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBwLTMgc2hhZG93XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdy0zNiB0ZXh0LXdoaXRlXCI+Q0FSSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiS2F0ZWdvcmlcIiBpZD1cIlwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGgtMTIgbWQ6dy0zNiBweC0zIG14LTQgbWQ6bXktMCBteS0zIGJvcmRlci1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkthdGVnb3JpXCI+S2F0ZWdvcmk8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlVydXRrYW5cIiBpZD1cIlwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGgtMTIgbWQ6dy0zNiBweC0zIG14LTQgbWQ6bXktMCBteS0xIGJvcmRlci1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVydXRrYW5cIj5VcnV0a2FuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgSW5maW5pdGVBcnRpY2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGFBcnRpY2xlLHNldERhdGFBcnRpY2xlXSA9IHVzZVN0YXRlKEFycmF5LmZyb20oe2xlbmd0aDowfSkpO1xyXG4gICAgY29uc3QgW2hhc01vcmVJdGVtcywgc2V0SGFzTW9yZUl0ZW1zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2xpbWl0LHNldExpbWl0XSA9IHVzZVN0YXRlKDYpO1xyXG4gICAgY29uc3QgW29mZnNldCxzZXRPZmZzZXRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YUFydGljbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGRhdGE7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCdsb2NhbGhvc3Q6MzAwMCcpXHJcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgICAgZGF0YUxlbmd0aD17ZGF0YUFydGljbGUubGVuZ3RofVxyXG4gICAgICAgICAgICBuZXh0PXtnZXREYXRhQXJ0aWNsZX1cclxuICAgICAgICAgICAgaGFzTW9yZT17aGFzTW9yZUl0ZW1zfVxyXG4gICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgPGRpdj53YWl0PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcInctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNCBtdC0xNlwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGFBcnRpY2xlLm1hcCgoZGF0YSAsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFydGljbGUga2V5PXtpfSBqdWR1bD17ZGF0YS5qdWR1bH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IENhcmRBcnRpY2xlID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FydGlrZWwvMSd9fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaC00OCBmbGV4IGJnLXdoaXRlIHNoYWRvdyByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVyZGVrYS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW1kIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5lc2NpdW50LCBhc3BlcmlvcmVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXhzXCI+VGlwcyBkYW4gVHJpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC14cyBtdC0zXCI+MTIgU2VwdGVtYmVyIDIwMjE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBSb290UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hBcnRpa2VsLz5cclxuICAgICAgICAgICAgPEluZmluaXRlQXJ0aWNsZS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSb290UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=