"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ()=>{\n    let data;\n    const options = {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    // use fetch API to trigger a GET request\n    fetch(\"/events/hourly\", options).then(function(response) {\n        if (response.ok) {\n            data = response.json();\n            console.log(\"New item is added\");\n            return;\n        }\n        throw new Error(\"Request failed.\");\n    }).catch(function(error) {\n        console.log(error);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/app/pages/index.jsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, undefined) : data.posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.title\n            }, post.id, false, {\n                fileName: \"/app/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 34\n            }, undefined))\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsSUFBTTtJQUVsQixJQUFJQyxJQUFJO0lBRVIsTUFBTUMsT0FBTyxHQUFHO1FBQ2RDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtZQUFFLGNBQWMsRUFBRSxrQkFBa0I7U0FBRTtLQUNoRDtJQUVELHlDQUF5QztJQUN6Q0MsS0FBSyxDQUFDLGdCQUFnQixFQUFFSCxPQUFPLENBQUMsQ0FDN0JJLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7UUFDeEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7WUFDZlAsSUFBSSxHQUFHTSxRQUFRLENBQUNFLElBQUksRUFBRSxDQUFDO1lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDUjtRQUNELE1BQU0sSUFBSUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7S0FDcEIsQ0FBQyxDQUFDO0lBQ0wscUJBQ0U7a0JBQ0csQ0FBQ2IsSUFBSSxpQkFDSiw4REFBQ2MsS0FBRztzQkFBQyxZQUFVOzs7OztxQkFBTSxHQUVyQmQsSUFBSSxDQUFDZSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUFLLDhEQUFDSCxLQUFHOzBCQUFnQkcsSUFBSSxDQUFDQyxLQUFLO2VBQXBCRCxJQUFJLENBQUNFLEVBQUU7Ozs7eUJBQW9CLENBQUM7cUJBRWhFLENBQ0g7Q0FDSDtBQUVELGlFQUFlcEIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3MtcHJvZHVjdC1ub2RlanMvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbmRleCA9ICgpID0+IHtcbiAgXG4gIGxldCBkYXRhO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgfTtcblxuICAvLyB1c2UgZmV0Y2ggQVBJIHRvIHRyaWdnZXIgYSBHRVQgcmVxdWVzdFxuICBmZXRjaChcIi9ldmVudHMvaG91cmx5XCIsIG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgaXRlbSBpcyBhZGRlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdCBmYWlsZWQuXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWRhdGEgPyAoXG4gICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgZGF0YS5wb3N0cy5tYXAoKHBvc3QpID0+IDxkaXYga2V5PXtwb3N0LmlkfT57cG9zdC50aXRsZX08L2Rpdj4pXG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();