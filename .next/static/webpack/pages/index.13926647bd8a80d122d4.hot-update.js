self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
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

var GridArticle = function GridArticle() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
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
    }, {
      "id": 5,
      "judul": "Webinar DPKKA UNAIR Bahas Tips Lolos Proses Rekrutmen Bersama HRGA Manajer PT. Kosme"
    }, {
      "id": 6,
      "judul": "AUBMO UNAIR Banyuwangi Kenalkan Dunia Wirausaha Lewat Webinar dan Talkshow Kewirausahaan"
    }, {
      "id": 7,
      "judul": "Prodi Kedokteran Hewan UNAIR Banyuwangi Adakan Halal Bihalal Virtual"
    }, {
      "id": 8,
      "judul": "Beasiswa ADS Upaya UNAIR Mengentaskan Kemiskinan Global"
    }, {
      "id": 9,
      "judul": "Meski Terbatas Ekonomi, Mahasiswa Bidikmisi UNAIR Mampu Raih Segudang Prestasi"
    }, {
      "id": 10,
      "judul": "S1 Kedokteran UNAIR Terapkan Kuliah Hybrid dan Blended"
    }, {
      "id": 11,
      "judul": "Departemen Teknik Fakultas Vokasi Fokus Hasilkan Paten dan HAKI"
    }, {
      "id": 12,
      "judul": "FKG UNAIR Kembali Mengambil Sumpah 51 Dokter Gigi Dan 7 Dokter Gigi Spesialis Via Daring"
    }]
  }),
      dataArticle = _useState2[0],
      setDataArticle = _useState2[1]; // useEffect(()=>{
  //     callApi.then((res)=>{
  //         console.log(res);
  //         setDataArticle(res);
  //     })
  // })
  // const callApi = async ()=>{
  //     var data;
  //     await axios.get('http://localhost:3001/list-judul')
  //     .then((res)=>{
  //         data = res.data;
  //         console.log('data');
  //     });
  //     return data;
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16",
    children: function () {
      return dataArticle.list_judul.map(function (data, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardArticle, {
          judul: data.judul,
          id: data.id
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 59
        }, _this);
      });
    }()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, _this);
};

_s2(GridArticle, "tTPClexAMLaJcfOKbkWHKPUFOvQ=");

_c3 = GridArticle;

var CardArticle = function CardArticle(_ref) {
  var judul = _ref.judul,
      id = _ref.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: {
      pathname: '/artikel/' + id
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "h-48 flex bg-white shadow rounded",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 relative",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: "/merdeka.jpg",
          layout: "fill",
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 flex flex-col justify-between p-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-semibold text-sm mt-2",
          children: judul
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-blue-400 text-xs",
            children: "Tips dan Trik"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-gray-300 text-xs mt-3",
            children: "12 September 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, _this);
};

_c4 = CardArticle;

var RootPage = function RootPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchArtikel, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c5 = RootPage;
/* harmony default export */ __webpack_exports__["default"] = (RootPage);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "SearchArtikel");
$RefreshReg$(_c3, "GridArticle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTmF2YmFyIiwiYWxlcnQiLCJTZWFyY2hBcnRpa2VsIiwidXNlU3RhdGUiLCJkYXRhU2VhcmNoIiwic2V0RGF0YVNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2VTZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIkdyaWRBcnRpY2xlIiwiZGF0YUFydGljbGUiLCJzZXREYXRhQXJ0aWNsZSIsImxpc3RfanVkdWwiLCJtYXAiLCJkYXRhIiwiaSIsImp1ZHVsIiwiaWQiLCJDYXJkQXJ0aWNsZSIsInBhdGhuYW1lIiwiUm9vdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQywwREFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxrRUFBZjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxtQkFBZDtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLGVBQVg7QUFBMkIsZUFBRyxFQUFDLHVCQUEvQjtBQUF1RCxpQkFBSyxFQUFFLEVBQTlEO0FBQWtFLGtCQUFNLEVBQUU7QUFBMUU7QUFBQTtBQUFBO0FB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QUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQXBCRDs7TUFBTUUsVzs7QUFzQk4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUksOERBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBLGtCQURKO0FBT0gsQ0FSRDs7TUFBTUEsUTtBQWFKLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzOTI2NjQ3YmQ4YTgwZDEyMmQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCdcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBzaGFkb3cgbWQ6cHgtMCBweC0zXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaC0yMCBjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXggaGlkZGVuIGZsZXgtY29sIG1kOmp1c3RpZnktY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIGZvbnQtYm9sZCB0ZXh0LTN4bCBtci0xMFwiPkRlc2lnbmF0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXgtNCBmb250LXNlbWlib2xkXCI+RXZlbnQ8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTQgZm9udC1zZW1pYm9sZFwiPkJsb2c8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9mbGFnLTQwMC5wbmdcIiBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiB3aWR0aD17MTV9IGhlaWdodD17MTB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGFuZ3VhZ2VcIiBpZD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgdmFsdWU9XCJpbmRvbmVzaWFcIj5JRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4IGhpZGRlbiBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXgtNCBmb250LXNlbWlib2xkXCI+TWFzdWs8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXgtNCBmb250LXNlbWlib2xkXCI+RGFmdGFyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTQgZm9udC1zZW1pYm9sZCB0ZXh0LXllbGxvdy01MDAgYm9yZGVyLTIgYm9yZGVyLXllbGxvdy01MDAgcHktMSBweC0zIGJvcmRlci1yLTJcIj5QZXJ1c2FoYWFuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBtZDpoaWRkZW4gZm9udC1ib2xkIHRleHQtM3hsIG1yLTEwXCI+RGVzaWduYXRlLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWxlcnQoJ2FzdScpfSBjbGFzc05hbWU9XCJtZDpoaWRkZW4gcmVsYXRpdmUgdG9wLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL21lbnUucG5nXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBTZWFyY2hBcnRpa2VsID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBbZGF0YVNlYXJjaCxzZXREYXRhU2VhcmNoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KT0+e1xyXG4gICAgICAgIGFsZXJ0KGRhdGFTZWFyY2gpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2VhcmNoID0gKGV2ZW50KT0+e1xyXG4gICAgICAgIHNldERhdGFTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byBmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIG10LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtMTIgZmxleCBtZDpteC0wIG14LTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWFzdWtrYW4gSnVkdWwgQXJ0aWtlbFwiIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcC0zIHNoYWRvd1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHctMzYgdGV4dC13aGl0ZVwiPkNBUkk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkthdGVnb3JpXCIgaWQ9XCJcIiBjbGFzc05hbWU9XCJib3JkZXItMiBoLTEyIG1kOnctMzYgcHgtMyBteC00IG1kOm15LTAgbXktMyBib3JkZXItZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLYXRlZ29yaVwiPkthdGVnb3JpPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJVcnV0a2FuXCIgaWQ9XCJcIiBjbGFzc05hbWU9XCJib3JkZXItMiBoLTEyIG1kOnctMzYgcHgtMyBteC00IG1kOm15LTAgbXktMSBib3JkZXItZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcnV0a2FuXCI+VXJ1dGthbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEdyaWRBcnRpY2xlID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW2RhdGFBcnRpY2xlLHNldERhdGFBcnRpY2xlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcImxpc3RfanVkdWxcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6MSxcImp1ZHVsXCI6XCJCYWhheWEhIEdhc2xpZ2h0aW5nIE1lbmdoaWxhbmdrYW4gUmFzYSBQZXJjYXlhIERpcmltdVwifSxcclxuICAgICAgICAgICAge1wiaWRcIjoyLFwianVkdWxcIjpcIlBha2FyIEh1a3VtIFVOQUlSIFVuZ2thcCBUaWdhIEtlamFoYXRhbiBJbnRlcm5hc2lvbmFsIHlhbmcgRGlsYWt1a2FuIElzcmFlbFwifSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwianVkdWxcIjpcIlNlcmluZyBEaWFiYWlrYW4sIFJ1bWFoIFBvdG9uZyBIZXdhbiBMYWhhbiBCaXNuaXMgeWFuZyBzYW5nYXQgTWVuamFuamlrYW5cIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcImp1ZHVsXCI6XCJEci4gTGluYSBIYXN0dXRpOiBQZXJueWF0YWFuIEJhaHdhIElzcmFlbCBpdHUgRGkgQXRhcyBIdWt1bSBUaWRhayBUZXJsYWx1IFNhbGFoXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJqdWR1bFwiOlwiV2ViaW5hciBEUEtLQSBVTkFJUiBCYWhhcyBUaXBzIExvbG9zIFByb3NlcyBSZWtydXRtZW4gQmVyc2FtYSBIUkdBIE1hbmFqZXIgUFQuIEtvc21lXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJqdWR1bFwiOlwiQVVCTU8gVU5BSVIgQmFueXV3YW5naSBLZW5hbGthbiBEdW5pYSBXaXJhdXNhaGEgTGV3YXQgV2ViaW5hciBkYW4gVGFsa3Nob3cgS2V3aXJhdXNhaGFhblwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwianVkdWxcIjpcIlByb2RpIEtlZG9rdGVyYW4gSGV3YW4gVU5BSVIgQmFueXV3YW5naSBBZGFrYW4gSGFsYWwgQmloYWxhbCBWaXJ0dWFsXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjgsXCJqdWR1bFwiOlwiQmVhc2lzd2EgQURTIFVwYXlhIFVOQUlSIE1lbmdlbnRhc2thbiBLZW1pc2tpbmFuIEdsb2JhbFwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo5LFwianVkdWxcIjpcIk1lc2tpIFRlcmJhdGFzIEVrb25vbWksIE1haGFzaXN3YSBCaWRpa21pc2kgVU5BSVIgTWFtcHUgUmFpaCBTZWd1ZGFuZyBQcmVzdGFzaVwifSxcclxuICAgICAgICAgICAge1wiaWRcIjoxMCxcImp1ZHVsXCI6XCJTMSBLZWRva3RlcmFuIFVOQUlSIFRlcmFwa2FuIEt1bGlhaCBIeWJyaWQgZGFuIEJsZW5kZWRcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MTEsXCJqdWR1bFwiOlwiRGVwYXJ0ZW1lbiBUZWtuaWsgRmFrdWx0YXMgVm9rYXNpIEZva3VzIEhhc2lsa2FuIFBhdGVuIGRhbiBIQUtJXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjEyLFwianVkdWxcIjpcIkZLRyBVTkFJUiBLZW1iYWxpIE1lbmdhbWJpbCBTdW1wYWggNTEgRG9rdGVyIEdpZ2kgRGFuIDcgRG9rdGVyIEdpZ2kgU3Blc2lhbGlzIFZpYSBEYXJpbmdcIn1cclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIGNhbGxBcGkudGhlbigocmVzKT0+e1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICAgICAgICBzZXREYXRhQXJ0aWNsZShyZXMpO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGNvbnN0IGNhbGxBcGkgPSBhc3luYyAoKT0+e1xyXG4gICAgLy8gICAgIHZhciBkYXRhO1xyXG4gICAgLy8gICAgIGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xpc3QtanVkdWwnKVxyXG4gICAgLy8gICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAvLyAgICAgICAgIGRhdGEgPSByZXMuZGF0YTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByZXR1cm4gZGF0YTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQgbXQtMTZcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKCgpPT5kYXRhQXJ0aWNsZS5saXN0X2p1ZHVsLm1hcCgoZGF0YSxpKT0+PENhcmRBcnRpY2xlIGtleT17aX0ganVkdWw9e2RhdGEuanVkdWx9IGlkPXtkYXRhLmlkfS8+KSkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IENhcmRBcnRpY2xlID0gKHtqdWR1bCxpZH0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FydGlrZWwvJytpZH19PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoLTQ4IGZsZXggYmctd2hpdGUgc2hhZG93IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9tZXJkZWthLmpwZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc20gbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7anVkdWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIHRleHQteHNcIj5UaXBzIGRhbiBUcmlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LXhzIG10LTNcIj4xMiBTZXB0ZW1iZXIgMjAyMTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJvb3RQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgPFNlYXJjaEFydGlrZWwvPlxyXG4gICAgICAgICAgICA8R3JpZEFydGljbGUvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUm9vdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9