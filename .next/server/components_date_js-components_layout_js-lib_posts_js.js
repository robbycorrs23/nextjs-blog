exports.id = "components_date_js-components_layout_js-lib_posts_js";
exports.ids = ["components_date_js-components_layout_js-lib_posts_js"];
exports.modules = {

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Date; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\iCloudDrive\\Documents\\Code\\nextjs-blog\\components\\date.js";

function Date({
  dateString
}) {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
    dateTime: dateString,
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL d, yyyy')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siteTitle": function() { return /* binding */ siteTitle; },
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\User\\iCloudDrive\\Documents\\Code\\nextjs-blog\\components\\layout.js";





const name = 'Robert Corrado';
const siteTitle = 'Next.js Sample Website';
function Layout({
  children,
  home
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Learn how to build a personal website using Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "og:title",
        content: siteTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: home ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          priority: true,
          src: "/images/profile.jpg",
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),
          height: 144,
          width: 144,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading2Xl),
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              priority: true,
              src: "/images/profile.jpg",
              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),
              height: 108,
              width: 108,
              alt: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().colorInherit),
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), !home && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().backToHome),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\u2190 Back to home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSortedPostsData": function() { return /* binding */ getSortedPostsData; },
/* harmony export */   "getAllPostIds": function() { return /* binding */ getAllPostIds; },
/* harmony export */   "getPostData": function() { return /* binding */ getPostData; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ "remark");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ "remark-html");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'posts');
function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Combine the data with the id

    return _objectSpread({
      id
    }, matterResult.data);
  }); // Sort posts by date

  return allPostsData.sort(({
    date: a
  }, {
    date: b
  }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
function getAllPostIds() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory); // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}
async function getPostData(id) {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml

  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "layout_container__2t4v2",
	"header": "layout_header__2rhWq",
	"backToHome": "layout_backToHome__1vZsp"
};


/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl__1I65m",
	"headingXl": "utils_headingXl__1XecN",
	"headingLg": "utils_headingLg__de7p0",
	"headingMd": "utils_headingMd__3de6G",
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm"
};


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL3Bvc3RzLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2lnbm9yZWR8QzpcXFVzZXJzXFxVc2VyXFxpQ2xvdWREcml2ZVxcRG9jdW1lbnRzXFxDb2RlXFxuZXh0anMtYmxvZ1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkRhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0IiwibmFtZSIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsInN0eWxlcyIsImVuY29kZVVSSSIsInV0aWxTdHlsZXMiLCJwb3N0c0RpcmVjdG9yeSIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0U29ydGVkUG9zdHNEYXRhIiwiZmlsZU5hbWVzIiwiZnMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJmaWxlTmFtZSIsImlkIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwibWF0dGVyUmVzdWx0IiwibWF0dGVyIiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsImdldEFsbFBvc3RJZHMiLCJwYXJhbXMiLCJnZXRQb3N0RGF0YSIsInByb2Nlc3NlZENvbnRlbnQiLCJyZW1hcmsiLCJ1c2UiLCJodG1sIiwiY29udGVudCIsImNvbnRlbnRIdG1sIiwidG9TdHJpbmciXSwibWFwcGluZ3Mi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RSxJQUhwQjtBQUtILEM7Ozs7Ozs7Ozs7QUNwRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBLGUiLCJmaWxlIjoiY29tcG9uZW50c19kYXRlX2pzLWNvbXBvbmVudHNfbGF5b3V0X2pzLWxpYl9wb3N0c19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoeyBkYXRlU3RyaW5nIH0pIHtcclxuICAgIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxyXG4gICAgcmV0dXJuIDx0aW1lIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT57Zm9ybWF0KGRhdGUsICdMTExMIGQsIHl5eXknKX08L3RpbWU+XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBuYW1lID0gJ1JvYmVydCBDb3JyYWRvJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLnZlcmNlbC5hcHAvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgKX0ucG5nP3RoZW1lPWxpZ2h0Jm1kPTAmZm9udFNpemU9NzVweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMudmVyY2VsLmNvbSUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmdgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAge2hvbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNDR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE0NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTA4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICAgIHshaG9tZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCByZW1hcmsgZnJvbSAncmVtYXJrJ1xuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnXG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRQb3N0c0RhdGEoKSB7XG4gICAgLy8gR2V0IGZpbGUgbmFtZXMgdW5kZXIgL3Bvc3RzXG4gICAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpXG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxuICAgICAgICBjb25zdCBpZCA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxuXG4gICAgICAgIC8vIFJlYWQgbWFya2Rvd24gZmlsZSBhcyBzdHJpbmdcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKVxuICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4JylcblxuICAgICAgICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxuICAgICAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKVxuXG4gICAgICAgIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGFcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gU29ydCBwb3N0cyBieSBkYXRlXG4gICAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KCh7IGRhdGU6IGEgfSwgeyBkYXRlOiBiIH0pID0+IHtcbiAgICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcblxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG4gICAgLy8gW1xuICAgIC8vICAge1xuICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAvLyAgICAgICBpZDogJ3NzZy1zc3InXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHBhcmFtczoge1xuICAgIC8vICAgICAgIGlkOiAncHJlLXJlbmRlcmluZydcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgICByZXR1cm4gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7aWR9Lm1kYClcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4JylcblxuICAgIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXG4gICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cylcblxuICAgIC8vIFVzZSByZW1hcmsgdG8gY29udmVydCBtYXJrZG93biBpbnRvIEhUTUwgc3RyaW5nXG4gICAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgICAgIC51c2UoaHRtbClcbiAgICAgICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpXG4gICAgY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKClcblxuICAgIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWQgYW5kIGNvbnRlbnRIdG1sXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRlbnRIdG1sLFxuICAgICAgICAuLi5tYXR0ZXJSZXN1bHQuZGF0YVxuICAgIH1cbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18ydDR2MlwiLFxuXHRcImhlYWRlclwiOiBcImxheW91dF9oZWFkZXJfXzJyaFdxXCIsXG5cdFwiYmFja1RvSG9tZVwiOiBcImxheW91dF9iYWNrVG9Ib21lX18xdlpzcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZzJYbFwiOiBcInV0aWxzX2hlYWRpbmcyWGxfXzFJNjVtXCIsXG5cdFwiaGVhZGluZ1hsXCI6IFwidXRpbHNfaGVhZGluZ1hsX18xWGVjTlwiLFxuXHRcImhlYWRpbmdMZ1wiOiBcInV0aWxzX2hlYWRpbmdMZ19fZGU3cDBcIixcblx0XCJoZWFkaW5nTWRcIjogXCJ1dGlsc19oZWFkaW5nTWRfXzNkZTZHXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9ySW5oZXJpdFwiOiBcInV0aWxzX2NvbG9ySW5oZXJpdF9fM0d1ZGZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwidXRpbHNfcGFkZGluZzFweF9fb0NueThcIixcblx0XCJsaXN0XCI6IFwidXRpbHNfbGlzdF9fUzdfcGVcIixcblx0XCJsaXN0SXRlbVwiOiBcInV0aWxzX2xpc3RJdGVtX18yZUpwSlwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcInV0aWxzX2xpZ2h0VGV4dF9fMTJDa21cIlxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=