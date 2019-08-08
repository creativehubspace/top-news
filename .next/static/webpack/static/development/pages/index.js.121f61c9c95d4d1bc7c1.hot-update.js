webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/API */ "./utils/API.js");
/* harmony import */ var _components_MainNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainNews */ "./components/MainNews.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BusinessNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BusinessNews */ "./components/BusinessNews.js");
/* harmony import */ var _components_EntertainmentNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EntertainmentNews */ "./components/EntertainmentNews.js");
/* harmony import */ var _components_HealthNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthNews */ "./components/HealthNews.js");
/* harmony import */ var _components_ScienceNews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ScienceNews */ "./components/ScienceNews.js");
/* harmony import */ var _components_SportsNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SportsNews */ "./components/SportsNews.js");
/* harmony import */ var _components_TechNews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TechNews */ "./components/TechNews.js");
var _jsxFileName = "/home/trolldev/custom-projects/top-news/pages/index.js";
// main page section
// sidebar section











const options = {
  headers: {
    'X-Api-Key': '2c4df344fd1143ac9d8809c21619b9c5'
  }
};

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps() {
    console.log(_utils_API__WEBPACK_IMPORTED_MODULE_2__["default"]);

    try {
      const [main, biz, entern, general, health, science, sports, tech] = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([_utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=business&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=entertainment&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=general&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=health&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=science&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=sports&pageSize=100'), _utils_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('/top-headlines?country=us&category=technology&pageSize=100')]);
      const mainNews = main.data.articles;
      const bizNews = biz.data.articles;
      const entertainmentNews = entern.data.articles;
      const generalNews = general.data.articles;
      const healthNews = health.data.articles;
      const scienceNews = science.data.articles;
      const sportsNews = sports.data.articles;
      const techNews = tech.data.articles;
      console.log(bizNews);
      return {
        mainNews,
        bizNews,
        entertainmentNews,
        generalNews,
        healthNews,
        scienceNews,
        sportsNews,
        techNews
      };
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Main page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainNews__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mainNews: this.props.mainNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BusinessNews__WEBPACK_IMPORTED_MODULE_5__["default"], {
      bizNews: this.props.bizNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EntertainmentNews__WEBPACK_IMPORTED_MODULE_6__["default"], {
      entertainmentNews: this.props.entertainmentNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HealthNews__WEBPACK_IMPORTED_MODULE_7__["default"], {
      healthNews: this.props.healthNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ScienceNews__WEBPACK_IMPORTED_MODULE_8__["default"], {
      scienceNews: this.props.scienceNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SportsNews__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sportsNews: this.props.sportsNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TechNews__WEBPACK_IMPORTED_MODULE_10__["default"], {
      techNews: this.props.techNews,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.121f61c9c95d4d1bc7c1.hot-update.js.map