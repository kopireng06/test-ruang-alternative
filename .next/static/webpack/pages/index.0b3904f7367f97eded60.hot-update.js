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
    className: "w-full bg-white shadow md:px-0 px-3 fixed top-0 z-10",
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
    className: "w-10/12 lg:w-8/12 mx-auto flex md:flex-row flex-col mt-36",
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

var Footer = function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full bg-yellow-500 mt-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "lg:container p-5 mx-auto bg-yellow-500 flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-2xl font-bold",
          children: "Designate."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm w-60 mt-5",
          children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi inventore culpa quidem harum sed blanditiis nam quas maxime, magnam perferendis?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-60 flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-xl font-bold mb-5",
          children: "Feature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Programming"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Collaborate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-60 flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-xl font-bold mb-5",
          children: "Know Us More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Testimonial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "FAQ"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Terms & Condition"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-60 flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-xl font-bold mb-5",
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Stories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Community"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-sm my-2",
          children: "Careers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 10
  }, _this);
};

_c5 = Footer;

var RootPage = function RootPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchArtikel, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridArticle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c6 = RootPage;
/* harmony default export */ __webpack_exports__["default"] = (RootPage);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "SearchArtikel");
$RefreshReg$(_c3, "GridArticle");
$RefreshReg$(_c4, "CardArticle");
$RefreshReg$(_c5, "Footer");
$RefreshReg$(_c6, "RootPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTmF2YmFyIiwiYWxlcnQiLCJTZWFyY2hBcnRpa2VsIiwidXNlU3RhdGUiLCJkYXRhU2VhcmNoIiwic2V0RGF0YVNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2VTZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIkdyaWRBcnRpY2xlIiwiZGF0YUFydGljbGUiLCJzZXREYXRhQXJ0aWNsZSIsImxpc3RfanVkdWwiLCJtYXAiLCJkYXRhIiwiaSIsImp1ZHVsIiwiaWQiLCJDYXJkQXJ0aWNsZSIsInBhdGhuYW1lIiwiRm9vdGVyIiwiUm9vdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQywwREFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxrRUFBZjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxtQkFBZDtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLGVBQVg7QUFBMkIsZUFBRyxFQUFDLHVCQUEvQjtBQUF1RCxpQkFBSyxFQUFFLEVBQTlEO0FBQWtFLGtCQUFNLEVBQUU7QUFBMUU7QUFB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QUEsa0JBREo7QUFRSCxDQVREOztNQUFNQSxRO0FBY0osK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGIzOTA0ZjczNjdmOTdlZGVkNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50J1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHNoYWRvdyBtZDpweC0wIHB4LTMgZml4ZWQgdG9wLTAgei0xMFwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImgtMjAgY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4IGhpZGRlbiBmbGV4LWNvbCBtZDpqdXN0aWZ5LWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBmb250LWJvbGQgdGV4dC0zeGwgbXItMTBcIj5EZXNpZ25hdGUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTQgZm9udC1zZW1pYm9sZFwiPkV2ZW50PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC00IGZvbnQtc2VtaWJvbGRcIj5CbG9nPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZmxhZy00MDAucG5nXCIgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgd2lkdGg9ezE1fSBoZWlnaHQ9ezEwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImxhbmd1YWdlXCIgaWQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiIHZhbHVlPVwiaW5kb25lc2lhXCI+SUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleCBoaWRkZW4ganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTQgZm9udC1zZW1pYm9sZFwiPk1hc3VrPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTQgZm9udC1zZW1pYm9sZFwiPkRhZnRhcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC00IGZvbnQtc2VtaWJvbGQgdGV4dC15ZWxsb3ctNTAwIGJvcmRlci0yIGJvcmRlci15ZWxsb3ctNTAwIHB5LTEgcHgtMyBib3JkZXItci0yXCI+UGVydXNhaGFhbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgbWQ6aGlkZGVuIGZvbnQtYm9sZCB0ZXh0LTN4bCBtci0xMFwiPkRlc2lnbmF0ZS48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmFsZXJ0KCdhc3UnKX0gY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHJlbGF0aXZlIHRvcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9tZW51LnBuZ1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgU2VhcmNoQXJ0aWtlbCA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgW2RhdGFTZWFyY2gsc2V0RGF0YVNlYXJjaF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCk9PntcclxuICAgICAgICBhbGVydChkYXRhU2VhcmNoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNlYXJjaCA9IChldmVudCk9PntcclxuICAgICAgICBzZXREYXRhU2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBtdC0zNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBoLTEyIGZsZXggbWQ6bXgtMCBteC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1hc3Vra2FuIEp1ZHVsIEFydGlrZWxcIiBjbGFzc05hbWU9XCJmbGV4LTEgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHAtMyBzaGFkb3dcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB3LTM2IHRleHQtd2hpdGVcIj5DQVJJPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJLYXRlZ29yaVwiIGlkPVwiXCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgaC0xMiBtZDp3LTM2IHB4LTMgbXgtNCBtZDpteS0wIG15LTMgYm9yZGVyLWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS2F0ZWdvcmlcIj5LYXRlZ29yaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiVXJ1dGthblwiIGlkPVwiXCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgaC0xMiBtZDp3LTM2IHB4LTMgbXgtNCBtZDpteS0wIG15LTEgYm9yZGVyLWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXJ1dGthblwiPlVydXRrYW48L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBHcmlkQXJ0aWNsZSA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IFtkYXRhQXJ0aWNsZSxzZXREYXRhQXJ0aWNsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJsaXN0X2p1ZHVsXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjEsXCJqdWR1bFwiOlwiQmFoYXlhISBHYXNsaWdodGluZyBNZW5naGlsYW5na2FuIFJhc2EgUGVyY2F5YSBEaXJpbXVcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MixcImp1ZHVsXCI6XCJQYWthciBIdWt1bSBVTkFJUiBVbmdrYXAgVGlnYSBLZWphaGF0YW4gSW50ZXJuYXNpb25hbCB5YW5nIERpbGFrdWthbiBJc3JhZWxcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImp1ZHVsXCI6XCJTZXJpbmcgRGlhYmFpa2FuLCBSdW1haCBQb3RvbmcgSGV3YW4gTGFoYW4gQmlzbmlzIHlhbmcgc2FuZ2F0IE1lbmphbmppa2FuXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJqdWR1bFwiOlwiRHIuIExpbmEgSGFzdHV0aTogUGVybnlhdGFhbiBCYWh3YSBJc3JhZWwgaXR1IERpIEF0YXMgSHVrdW0gVGlkYWsgVGVybGFsdSBTYWxhaFwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwianVkdWxcIjpcIldlYmluYXIgRFBLS0EgVU5BSVIgQmFoYXMgVGlwcyBMb2xvcyBQcm9zZXMgUmVrcnV0bWVuIEJlcnNhbWEgSFJHQSBNYW5hamVyIFBULiBLb3NtZVwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwianVkdWxcIjpcIkFVQk1PIFVOQUlSIEJhbnl1d2FuZ2kgS2VuYWxrYW4gRHVuaWEgV2lyYXVzYWhhIExld2F0IFdlYmluYXIgZGFuIFRhbGtzaG93IEtld2lyYXVzYWhhYW5cIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcImp1ZHVsXCI6XCJQcm9kaSBLZWRva3RlcmFuIEhld2FuIFVOQUlSIEJhbnl1d2FuZ2kgQWRha2FuIEhhbGFsIEJpaGFsYWwgVmlydHVhbFwifSxcclxuICAgICAgICAgICAge1wiaWRcIjo4LFwianVkdWxcIjpcIkJlYXNpc3dhIEFEUyBVcGF5YSBVTkFJUiBNZW5nZW50YXNrYW4gS2VtaXNraW5hbiBHbG9iYWxcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6OSxcImp1ZHVsXCI6XCJNZXNraSBUZXJiYXRhcyBFa29ub21pLCBNYWhhc2lzd2EgQmlkaWttaXNpIFVOQUlSIE1hbXB1IFJhaWggU2VndWRhbmcgUHJlc3Rhc2lcIn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MTAsXCJqdWR1bFwiOlwiUzEgS2Vkb2t0ZXJhbiBVTkFJUiBUZXJhcGthbiBLdWxpYWggSHlicmlkIGRhbiBCbGVuZGVkXCJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjExLFwianVkdWxcIjpcIkRlcGFydGVtZW4gVGVrbmlrIEZha3VsdGFzIFZva2FzaSBGb2t1cyBIYXNpbGthbiBQYXRlbiBkYW4gSEFLSVwifSxcclxuICAgICAgICAgICAge1wiaWRcIjoxMixcImp1ZHVsXCI6XCJGS0cgVU5BSVIgS2VtYmFsaSBNZW5nYW1iaWwgU3VtcGFoIDUxIERva3RlciBHaWdpIERhbiA3IERva3RlciBHaWdpIFNwZXNpYWxpcyBWaWEgRGFyaW5nXCJ9XHJcbiAgICAgICAgXVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBjYWxsQXBpLnRoZW4oKHJlcyk9PntcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgICAgICAgc2V0RGF0YUFydGljbGUocmVzKTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBjb25zdCBjYWxsQXBpID0gYXN5bmMgKCk9PntcclxuICAgIC8vICAgICB2YXIgZGF0YTtcclxuICAgIC8vICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9saXN0LWp1ZHVsJylcclxuICAgIC8vICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgLy8gICAgICAgICBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00IG10LTE2XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoKT0+ZGF0YUFydGljbGUubGlzdF9qdWR1bC5tYXAoKGRhdGEsaSk9PjxDYXJkQXJ0aWNsZSBrZXk9e2l9IGp1ZHVsPXtkYXRhLmp1ZHVsfSBpZD17ZGF0YS5pZH0vPikpKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDYXJkQXJ0aWNsZSA9ICh7anVkdWwsaWR9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9hcnRpa2VsLycraWR9fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaC00OCBmbGV4IGJnLXdoaXRlIHNoYWRvdyByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbWVyZGVrYS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2p1ZHVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXhzXCI+VGlwcyBkYW4gVHJpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC14cyBtdC0zXCI+MTIgU2VwdGVtYmVyIDIwMjE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKT0+e1xyXG4gICAgIHJldHVybihcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmcteWVsbG93LTUwMCBtdC0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbnRhaW5lciBwLTUgbXgtYXV0byBiZy15ZWxsb3ctNTAwIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFwiPkRlc2lnbmF0ZS48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSB3LTYwIG10LTVcIj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgXHJcbiAgICAgICAgICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaSBpbnZlbnRvcmUgY3VscGEgcXVpZGVtIGhhcnVtIHNlZCBibGFuZGl0aWlzIG5hbSBxdWFzIG1heGltZSwgbWFnbmFtIHBlcmZlcmVuZGlzPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgbWItNVwiPkZlYXR1cmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBteS0yXCI+T3ZlcnZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBteS0yXCI+RGVzaWduPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPlByb2dyYW1taW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPkNvbGxhYm9yYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02MCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBtYi01XCI+S25vdyBVcyBNb3JlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPlRlc3RpbW9uaWFsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPkZBUTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG15LTJcIj5UZXJtcyAmIENvbmRpdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgbWItNVwiPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPlN0b3JpZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBteS0yXCI+Q29tbXVuaXR5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbXktMlwiPkNhcmVlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgKVxyXG59XHJcblxyXG5jb25zdCBSb290UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hBcnRpa2VsLz5cclxuICAgICAgICAgICAgPEdyaWRBcnRpY2xlLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSb290UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=