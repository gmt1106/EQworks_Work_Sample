"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../rbd/pnpm-volume/cc0af4ba-619f-4743-a30e-609295f9cc61/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Index = function() {\n    var data;\n    var options = {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    // use fetch API to trigger a GET request\n    fetch(\"/\", options).then(function(response) {\n        if (response.ok) {\n            data = r;\n            console.log(\"New item is added\");\n            return;\n        }\n        throw new Error(\"Request failed.\");\n    }).catch(function(error) {\n        console.log(error);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/app/pages/index.jsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this) : data.posts.map(function(post) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.title\n            }, post.id, false, {\n                fileName: \"/app/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 34\n            }, _this);\n        })\n    }, void 0, false);\n};\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLFdBQU07SUFFbEIsSUFBSUMsSUFBSTtJQUVSLElBQU1DLE9BQU8sR0FBRztRQUNkQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxPQUFPLEVBQUU7WUFBRSxjQUFjLEVBQUUsa0JBQWtCO1NBQUU7S0FDaEQ7SUFFRCx5Q0FBeUM7SUFDekNDLEtBQUssQ0FBQyxHQUFHLEVBQUVILE9BQU8sQ0FBQyxDQUNoQkksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtRQUN4QixJQUFJQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtZQUNmUCxJQUFJLEdBQUdRLENBQUM7WUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtRQUN0QkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDO0tBQ3BCLENBQUMsQ0FBQztJQUNMLHFCQUNFO2tCQUNHLENBQUNiLElBQUksaUJBQ0osOERBQUNjLEtBQUc7c0JBQUMsWUFBVTs7Ozs7aUJBQU0sR0FFckJkLElBQUksQ0FBQ2UsS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FBSyw4REFBQ0gsS0FBRzswQkFBZ0JHLElBQUksQ0FBQ0MsS0FBSztlQUFwQkQsSUFBSSxDQUFDRSxFQUFFOzs7O3FCQUFvQjtTQUFBLENBQUM7cUJBRWhFLENBQ0g7Q0FDSDtBQS9CS3BCLEtBQUFBLEtBQUs7QUFpQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbmRleCA9ICgpID0+IHtcbiAgXG4gIGxldCBkYXRhO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgfTtcblxuICAvLyB1c2UgZmV0Y2ggQVBJIHRvIHRyaWdnZXIgYSBHRVQgcmVxdWVzdFxuICBmZXRjaChcIi9cIiwgb3B0aW9ucylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBkYXRhID0gclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBpdGVtIGlzIGFkZGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IGZhaWxlZC5cIik7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshZGF0YSA/IChcbiAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBkYXRhLnBvc3RzLm1hcCgocG9zdCkgPT4gPGRpdiBrZXk9e3Bvc3QuaWR9Pntwb3N0LnRpdGxlfTwvZGl2PilcbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsInBvc3RzIiwibWFwIiwicG9zdCIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});