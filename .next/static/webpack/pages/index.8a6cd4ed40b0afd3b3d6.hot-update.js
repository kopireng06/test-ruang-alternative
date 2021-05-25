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
      "judul": "Bahaya! Gaslighting Menghilangkan Rasa Percaya Dirimu"
    }, {
      "judul": "Pakar Hukum UNAIR Ungkap Tiga Kejahatan Internasional yang Dilakukan Israel"
    }, {
      "judul": "Sering Diabaikan, Rumah Potong Hewan Lahan Bisnis yang sangat Menjanjikan"
    }, {
      "judul": "Dr. Lina Hastuti: Pernyataan Bahwa Israel itu Di Atas Hukum Tidak Terlalu Salah"
    }, {
      "judul": "Webinar DPKKA UNAIR Bahas Tips Lolos Proses Rekrutmen Bersama HRGA Manajer PT. Kosme"
    }, {
      "judul": "AUBMO UNAIR Banyuwangi Kenalkan Dunia Wirausaha Lewat Webinar dan Talkshow Kewirausahaan"
    }, {
      "judul": "Prodi Kedokteran Hewan UNAIR Banyuwangi Adakan Halal Bihalal Virtual"
    }, {
      "judul": "Beasiswa ADS Upaya UNAIR Mengentaskan Kemiskinan Global"
    }, {
      "judul": "Meski Terbatas Ekonomi, Mahasiswa Bidikmisi UNAIR Mampu Raih Segudang Prestasi"
    }, {
      "judul": "S1 Kedokteran UNAIR Terapkan Kuliah Hybrid dan Blended"
    }, {
      "judul": "Departemen Teknik Fakultas Vokasi Fokus Hasilkan Paten dan HAKI"
    }, {
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
          judul: data.judul
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

_s2(GridArticle, "ywkqrwDfoz2vFhCJj1+leWRqOv8=");

_c3 = GridArticle;

var CardArticle = function CardArticle(_ref) {
  var judul = _ref.judul;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: {
      pathname: '/artikel/1'
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
        className: "flex-1 flex flex-col justify-between p-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-semibold text-md mt-2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTmF2YmFyIiwiYWxlcnQiLCJTZWFyY2hBcnRpa2VsIiwidXNlU3RhdGUiLCJkYXRhU2VhcmNoIiwic2V0RGF0YVNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2VTZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIkdyaWRBcnRpY2xlIiwiZGF0YUFydGljbGUiLCJzZXREYXRhQXJ0aWNsZSIsImxpc3RfanVkdWwiLCJtYXAiLCJkYXRhIiwiaSIsImp1ZHVsIiwiQ2FyZEFydGljbGUiLCJwYXRobmFtZSIsIlJvb3RQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsMERBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsa0VBQWY7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUMsbUJBQWQ7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFJLHFCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLHFCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxlQUFYO0FBQTJCLGVBQUcsRUFBQyx1QkFBL0I7QUFBdUQsaUJBQUssRUFBRSxFQUE5RDtBQUFrRSxrQkFBTSxFQUFFO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FB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QUdJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUEsa0JBREo7QUFPSCxDQVJEOztNQUFNQSxRO0FBYUosK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE2Y2Q0ZWQ0MGIwYWZkM2IzZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50J1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHNoYWRvdyBtZDpweC0wIHB4LTNcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoLTIwIGNvbnRhaW5lciBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleCBoaWRkZW4gZmxleC1jb2wgbWQ6anVzdGlmeS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgZm9udC1ib2xkIHRleHQtM3hsIG1yLTEwXCI+RGVzaWduYXRlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5FdmVudDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXgtNCBmb250LXNlbWlib2xkXCI+QmxvZzwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ZsYWctNDAwLnBuZ1wiIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIHdpZHRoPXsxNX0gaGVpZ2h0PXsxMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsYW5ndWFnZVwiIGlkPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIiB2YWx1ZT1cImluZG9uZXNpYVwiPklEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXggaGlkZGVuIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5NYXN1azwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5EYWZ0YXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWwtNCBmb250LXNlbWlib2xkIHRleHQteWVsbG93LTUwMCBib3JkZXItMiBib3JkZXIteWVsbG93LTUwMCBweS0xIHB4LTMgYm9yZGVyLXItMlwiPlBlcnVzYWhhYW48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIG1kOmhpZGRlbiBmb250LWJvbGQgdGV4dC0zeGwgbXItMTBcIj5EZXNpZ25hdGUuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5hbGVydCgnYXN1Jyl9IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSB0b3AtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVudS5wbmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaEFydGlrZWwgPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IFtkYXRhU2VhcmNoLHNldERhdGFTZWFyY2hdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpPT57XHJcbiAgICAgICAgYWxlcnQoZGF0YVNlYXJjaCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTZWFyY2ggPSAoZXZlbnQpPT57XHJcbiAgICAgICAgc2V0RGF0YVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgaC0xMiBmbGV4IG1kOm14LTAgbXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXN1a2thbiBKdWR1bCBBcnRpa2VsXCIgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBwLTMgc2hhZG93XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdy0zNiB0ZXh0LXdoaXRlXCI+Q0FSSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiS2F0ZWdvcmlcIiBpZD1cIlwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGgtMTIgbWQ6dy0zNiBweC0zIG14LTQgbWQ6bXktMCBteS0zIGJvcmRlci1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkthdGVnb3JpXCI+S2F0ZWdvcmk8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlVydXRrYW5cIiBpZD1cIlwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGgtMTIgbWQ6dy0zNiBweC0zIG14LTQgbWQ6bXktMCBteS0xIGJvcmRlci1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVydXRrYW5cIj5VcnV0a2FuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgR3JpZEFydGljbGUgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBbZGF0YUFydGljbGUsc2V0RGF0YUFydGljbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibGlzdF9qdWR1bFwiOltcclxuICAgICAgICAgICAge1wianVkdWxcIjpcIkJhaGF5YSEgR2FzbGlnaHRpbmcgTWVuZ2hpbGFuZ2thbiBSYXNhIFBlcmNheWEgRGlyaW11XCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiUGFrYXIgSHVrdW0gVU5BSVIgVW5na2FwIFRpZ2EgS2VqYWhhdGFuIEludGVybmFzaW9uYWwgeWFuZyBEaWxha3VrYW4gSXNyYWVsXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiU2VyaW5nIERpYWJhaWthbiwgUnVtYWggUG90b25nIEhld2FuIExhaGFuIEJpc25pcyB5YW5nIHNhbmdhdCBNZW5qYW5qaWthblwifSxcclxuICAgICAgICAgICAge1wianVkdWxcIjpcIkRyLiBMaW5hIEhhc3R1dGk6IFBlcm55YXRhYW4gQmFod2EgSXNyYWVsIGl0dSBEaSBBdGFzIEh1a3VtIFRpZGFrIFRlcmxhbHUgU2FsYWhcIn0sXHJcbiAgICAgICAgICAgIHtcImp1ZHVsXCI6XCJXZWJpbmFyIERQS0tBIFVOQUlSIEJhaGFzIFRpcHMgTG9sb3MgUHJvc2VzIFJla3J1dG1lbiBCZXJzYW1hIEhSR0EgTWFuYWplciBQVC4gS29zbWVcIn0sXHJcbiAgICAgICAgICAgIHtcImp1ZHVsXCI6XCJBVUJNTyBVTkFJUiBCYW55dXdhbmdpIEtlbmFsa2FuIER1bmlhIFdpcmF1c2FoYSBMZXdhdCBXZWJpbmFyIGRhbiBUYWxrc2hvdyBLZXdpcmF1c2FoYWFuXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiUHJvZGkgS2Vkb2t0ZXJhbiBIZXdhbiBVTkFJUiBCYW55dXdhbmdpIEFkYWthbiBIYWxhbCBCaWhhbGFsIFZpcnR1YWxcIn0sXHJcbiAgICAgICAgICAgIHtcImp1ZHVsXCI6XCJCZWFzaXN3YSBBRFMgVXBheWEgVU5BSVIgTWVuZ2VudGFza2FuIEtlbWlza2luYW4gR2xvYmFsXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiTWVza2kgVGVyYmF0YXMgRWtvbm9taSwgTWFoYXNpc3dhIEJpZGlrbWlzaSBVTkFJUiBNYW1wdSBSYWloIFNlZ3VkYW5nIFByZXN0YXNpXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiUzEgS2Vkb2t0ZXJhbiBVTkFJUiBUZXJhcGthbiBLdWxpYWggSHlicmlkIGRhbiBCbGVuZGVkXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiRGVwYXJ0ZW1lbiBUZWtuaWsgRmFrdWx0YXMgVm9rYXNpIEZva3VzIEhhc2lsa2FuIFBhdGVuIGRhbiBIQUtJXCJ9LFxyXG4gICAgICAgICAgICB7XCJqdWR1bFwiOlwiRktHIFVOQUlSIEtlbWJhbGkgTWVuZ2FtYmlsIFN1bXBhaCA1MSBEb2t0ZXIgR2lnaSBEYW4gNyBEb2t0ZXIgR2lnaSBTcGVzaWFsaXMgVmlhIERhcmluZ1wifVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgY2FsbEFwaS50aGVuKChyZXMpPT57XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAvLyAgICAgICAgIHNldERhdGFBcnRpY2xlKHJlcyk7XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gY29uc3QgY2FsbEFwaSA9IGFzeW5jICgpPT57XHJcbiAgICAvLyAgICAgdmFyIGRhdGE7XHJcbiAgICAvLyAgICAgYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGlzdC1qdWR1bCcpXHJcbiAgICAvLyAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgIC8vICAgICAgICAgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNCBtdC0xNlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKCk9PmRhdGFBcnRpY2xlLmxpc3RfanVkdWwubWFwKChkYXRhLGkpPT48Q2FyZEFydGljbGUga2V5PXtpfSBqdWR1bD17ZGF0YS5qdWR1bH0vPikpKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDYXJkQXJ0aWNsZSA9ICh7anVkdWx9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9hcnRpa2VsLzEnfX0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImgtNDggZmxleCBiZy13aGl0ZSBzaGFkb3cgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL21lcmRla2EuanBnXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1tZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtqdWR1bH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgdGV4dC14c1wiPlRpcHMgZGFuIFRyaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQteHMgbXQtM1wiPjEyIFNlcHRlbWJlciAyMDIxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUm9vdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICA8U2VhcmNoQXJ0aWtlbC8+XHJcbiAgICAgICAgICAgIDxHcmlkQXJ0aWNsZS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSb290UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=