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

/***/ "./components/posts/RenderProgress.js":
/*!********************************************!*\
  !*** ./components/posts/RenderProgress.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/progress */ \"./node_modules/antd/lib/progress/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n\n\n\n\nconst RenderProgress = (param)=>/*#__PURE__*/ {\n    let { number, name, link = \"#\" } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: link,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"circle\",\n                strokeColor: {\n                    \"0%\": \"#666\",\n                    \"50%\": \"#fff\",\n                    \"100%\": \"#111\"\n                },\n                percent: 100,\n                format: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        end: number,\n                        duration: 2,\n                        separator: \",\",\n                        decimals: 2,\n                        decimal: \".\"\n                    }, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\posts\\\\RenderProgress.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginTop: 18,\n                    color: \"#666\"\n                },\n                children: name.toUpperCase()\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\posts\\\\RenderProgress.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\posts\\\\RenderProgress.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n};\n_c = RenderProgress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderProgress);\nvar _c;\n$RefreshReg$(_c, \"RenderProgress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL1JlbmRlclByb2dyZXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0g7QUFDTztBQUVwQyxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxHQUFHLEVBQUU7V0FDbEQsOERBQUNMLGtEQUFJQTtRQUFDTSxNQUFNRDs7MEJBQ1YsOERBQUNOLHlEQUFRQTtnQkFDUFEsTUFBSztnQkFDTEMsYUFBYTtvQkFDWCxNQUFNO29CQUNOLE9BQU87b0JBQ1AsUUFBUTtnQkFDVjtnQkFDQUMsU0FBUztnQkFDVEMsUUFBUSxrQkFDTiw4REFBQ1QscURBQU9BO3dCQUNOVSxLQUFLUjt3QkFDTFMsVUFBVTt3QkFDVkMsV0FBVTt3QkFDVkMsVUFBVTt3QkFDVkMsU0FBUTs7Ozs7OzswQkFJZCw4REFBQ0M7Z0JBQUVDLE9BQU87b0JBQUVDLFdBQVc7b0JBQUlDLE9BQU87Z0JBQU87MEJBQUlmLEtBQUtnQixXQUFXOzs7Ozs7Ozs7Ozs7QUFDekQ7S0FyQkZsQjtBQXdCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzL1JlbmRlclByb2dyZXNzLmpzP2Y4OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5cclxuY29uc3QgUmVuZGVyUHJvZ3Jlc3MgPSAoeyBudW1iZXIsIG5hbWUsIGxpbmsgPSBcIiNcIiB9KSA9PiAoXHJcbiAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICA8UHJvZ3Jlc3NcclxuICAgICAgdHlwZT1cImNpcmNsZVwiXHJcbiAgICAgIHN0cm9rZUNvbG9yPXt7XHJcbiAgICAgICAgXCIwJVwiOiBcIiM2NjZcIixcclxuICAgICAgICBcIjUwJVwiOiBcIiNmZmZcIixcclxuICAgICAgICBcIjEwMCVcIjogXCIjMTExXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIHBlcmNlbnQ9ezEwMH1cclxuICAgICAgZm9ybWF0PXsoKSA9PiAoXHJcbiAgICAgICAgPENvdW50VXBcclxuICAgICAgICAgIGVuZD17bnVtYmVyfVxyXG4gICAgICAgICAgZHVyYXRpb249ezJ9XHJcbiAgICAgICAgICBzZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICAgIGRlY2ltYWxzPXsyfVxyXG4gICAgICAgICAgZGVjaW1hbD1cIi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxOCwgY29sb3I6IFwiIzY2NlwiIH19PntuYW1lLnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gIDwvTGluaz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlclByb2dyZXNzO1xyXG4iXSwibmFtZXMiOlsiUHJvZ3Jlc3MiLCJMaW5rIiwiQ291bnRVcCIsIlJlbmRlclByb2dyZXNzIiwibnVtYmVyIiwibmFtZSIsImxpbmsiLCJocmVmIiwidHlwZSIsInN0cm9rZUNvbG9yIiwicGVyY2VudCIsImZvcm1hdCIsImVuZCIsImR1cmF0aW9uIiwic2VwYXJhdG9yIiwiZGVjaW1hbHMiLCJkZWNpbWFsIiwicCIsInN0eWxlIiwibWFyZ2luVG9wIiwiY29sb3IiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/RenderProgress.js\n"));

/***/ })

});