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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/FullWidthImage */ \"./components/pages/FullWidthImage.js\");\n/* harmony import */ var _components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts/RenderProgress */ \"./components/posts/RenderProgress.js\");\n/* harmony import */ var _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useNumbers */ \"./hooks/useNumbers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    const { numbers } = (0,_hooks_useNumbers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Modern Content Management System - CMS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Read latest books on web development\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                auth: auth.user\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            number: numbers.posts,\n                            name: \"Books\",\n                            link: \"/admin/posts\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            number: numbers.comments,\n                            name: \"Comments\",\n                            link: \"/admin/comments\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            number: numbers.categories,\n                            name: \"Categories\",\n                            link: \"/admin/categories\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            number: numbers.users,\n                            name: \"Users\",\n                            link: \"/admin/users\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"DxbA0KcJ99Ff/+OYzojCtNBFqy4=\", false, function() {\n    return [\n        _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDVztBQUNkO0FBQUE7QUFDSDtBQUNtQztBQUVBO0FBQ25CO0FBRTdDLFNBQVNROztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVixpREFBVUEsQ0FBQ0Msc0RBQVdBO0lBQzlDLE1BQU0sRUFBRVUsT0FBTyxFQUFFLEdBQUdKLDZEQUFVQTtJQUU5QixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNRO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNWLHdFQUFjQTtnQkFBQ0ksTUFBTUEsS0FBS08sSUFBSTs7Ozs7OzBCQUUvQiw4REFBQ2Qsb0RBQUdBOztrQ0FFRiw4REFBQ0Msb0RBQUdBO3dCQUNGYyxNQUFNO3dCQUNOQyxPQUFPOzRCQUFFQyxXQUFXOzRCQUFJQyxXQUFXOzRCQUFVQyxVQUFVO3dCQUFHO2tDQUUxRCw0RUFBQ2Ysd0VBQWNBOzRCQUNiZ0IsUUFBUVgsUUFBUVksS0FBSzs0QkFDckJULE1BQUs7NEJBQ0xVLE1BQUs7Ozs7Ozs7Ozs7O2tDQUlULDhEQUFDckIsb0RBQUdBO3dCQUNGYyxNQUFNO3dCQUNOQyxPQUFPOzRCQUFFQyxXQUFXOzRCQUFJQyxXQUFXOzRCQUFVQyxVQUFVO3dCQUFHO2tDQUUxRCw0RUFBQ2Ysd0VBQWNBOzRCQUNiZ0IsUUFBUVgsUUFBUWMsUUFBUTs0QkFDeEJYLE1BQUs7NEJBQ0xVLE1BQUs7Ozs7Ozs7Ozs7O2tDQUlULDhEQUFDckIsb0RBQUdBO3dCQUNGYyxNQUFNO3dCQUNOQyxPQUFPOzRCQUFFQyxXQUFXOzRCQUFJQyxXQUFXOzRCQUFVQyxVQUFVO3dCQUFHO2tDQUUxRCw0RUFBQ2Ysd0VBQWNBOzRCQUNiZ0IsUUFBUVgsUUFBUWUsVUFBVTs0QkFDMUJaLE1BQUs7NEJBQ0xVLE1BQUs7Ozs7Ozs7Ozs7O2tDQUlULDhEQUFDckIsb0RBQUdBO3dCQUNGYyxNQUFNO3dCQUNOQyxPQUFPOzRCQUFFQyxXQUFXOzRCQUFJQyxXQUFXOzRCQUFVQyxVQUFVO3dCQUFHO2tDQUUxRCw0RUFBQ2Ysd0VBQWNBOzRCQUNiZ0IsUUFBUVgsUUFBUWdCLEtBQUs7NEJBQ3JCYixNQUFLOzRCQUNMVSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBaEVTaEI7O1FBRWFELHlEQUFVQTs7O0tBRnZCQztBQWtFVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRnVsbFdpZHRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXMvRnVsbFdpZHRoSW1hZ2VcIjtcclxuXHJcbmltcG9ydCBSZW5kZXJQcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy9SZW5kZXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgdXNlTnVtYmVycyBmcm9tIFwiLi4vaG9va3MvdXNlTnVtYmVyc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG51bWJlcnMgfSA9IHVzZU51bWJlcnMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Nb2Rlcm4gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSAtIENNUzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiUmVhZCBsYXRlc3QgYm9va3Mgb24gd2ViIGRldmVsb3BtZW50XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8RnVsbFdpZHRoSW1hZ2UgYXV0aD17YXV0aC51c2VyfSAvPlxyXG5cclxuICAgICAgPFJvdz5cclxuICAgICAgICB7LyogcG9zdHMgKi99XHJcbiAgICAgICAgPENvbFxyXG4gICAgICAgICAgc3Bhbj17Nn1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDIwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlbmRlclByb2dyZXNzXHJcbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVycy5wb3N0c31cclxuICAgICAgICAgICAgbmFtZT1cIkJvb2tzXCJcclxuICAgICAgICAgICAgbGluaz1cIi9hZG1pbi9wb3N0c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIHsvKiBjb21tZW50cyAqL31cclxuICAgICAgICA8Q29sXHJcbiAgICAgICAgICBzcGFuPXs2fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmVuZGVyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICBuYW1lPVwiQ29tbWVudHNcIlxyXG4gICAgICAgICAgICBsaW5rPVwiL2FkbWluL2NvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgey8qIGNhdGdvcmllcyAqL31cclxuICAgICAgICA8Q29sXHJcbiAgICAgICAgICBzcGFuPXs2fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmVuZGVyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJzLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgIG5hbWU9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgbGluaz1cIi9hZG1pbi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgey8qIHVzZXJzICovfVxyXG4gICAgICAgIDxDb2xcclxuICAgICAgICAgIHNwYW49ezZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDUwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSZW5kZXJQcm9ncmVzc1xyXG4gICAgICAgICAgICBudW1iZXI9e251bWJlcnMudXNlcnN9XHJcbiAgICAgICAgICAgIG5hbWU9XCJVc2Vyc1wiXHJcbiAgICAgICAgICAgIGxpbms9XCIvYWRtaW4vdXNlcnNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiUm93IiwiQ29sIiwiSGVhZCIsIkZ1bGxXaWR0aEltYWdlIiwiUmVuZGVyUHJvZ3Jlc3MiLCJ1c2VOdW1iZXJzIiwiSG9tZSIsImF1dGgiLCJzZXRBdXRoIiwibnVtYmVycyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidXNlciIsInNwYW4iLCJzdHlsZSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibnVtYmVyIiwicG9zdHMiLCJsaW5rIiwiY29tbWVudHMiLCJjYXRlZ29yaWVzIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});