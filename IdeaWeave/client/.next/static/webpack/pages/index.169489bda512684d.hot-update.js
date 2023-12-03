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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/FullWidthImage */ \"./components/pages/FullWidthImage.js\");\n/* harmony import */ var _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useNumbers */ \"./hooks/useNumbers.js\");\n/* harmony import */ var _components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts/RenderProgress */ \"./components/posts/RenderProgress.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useLatestPosts */ \"./hooks/useLatestPosts.js\");\n/* harmony import */ var _hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useCategory */ \"./hooks/useCategory.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_pages_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pages/ParallaxImage */ \"./components/pages/ParallaxImage.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    const { numbers } = (0,_hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { latestPosts } = (0,_hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { categories } = (0,_hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_11__.ThemeContext);\n    const textStrokeColor = theme === \"light\" ? \"#ffffff\" : \"#000\";\n    const textStrokeColors = theme === \"light\" ? \"#ffffff\" : \"#000\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Modern Content Management System - CMS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Read latest books on web development\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                auth: auth.user\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.posts,\n                            name: \"Books\",\n                            link: \"/admin/posts\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.comments,\n                            name: \"Comments\",\n                            link: \"/admin/comments\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.categories,\n                            name: \"Categories\",\n                            link: \"/admin/categories\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.users,\n                            name: \"Users\",\n                            link: \"/admin/users\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"74px\",\n                                    textShadow: \"2px 2px 4px #000000\",\n                                    color: \"#fff\",\n                                    WebkitTextStroke: \"0.5px \".concat(textStrokeColor),\n                                    textStroke: \"0.5px \".concat(textStrokeColor)\n                                },\n                                children: \"RECENT BOOKS\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"15px\",\n                                    WebkitTextStroke: \"1px #ffffff\",\n                                    textStroke: \"1px #ffffff\"\n                                },\n                                children: latestPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        href: \"/post/\".concat(post.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"b7R1gsi/L0xUgEPXOXhWB2mmCQc=\", false, function() {\n    return [\n        _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFYVQseURBQVVBO1FBQ05JLDZEQUFjQTtRQUNmQywwREFBV0E7OztLQUozQkk7QUF5R1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGdWxsV2lkdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlcy9GdWxsV2lkdGhJbWFnZVwiO1xyXG5pbXBvcnQgdXNlTnVtYmVycyBmcm9tIFwiLi4vaG9va3MvdXNlTnVtYmVyc1wiO1xyXG5pbXBvcnQgUmVuZGVyUHJvZ3Jlc3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMvUmVuZGVyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgdXNlTGF0ZXN0UG9zdHMgZnJvbSBcIi4uL2hvb2tzL3VzZUxhdGVzdFBvc3RzXCI7XHJcbmltcG9ydCB1c2VDYXRlZ29yeSBmcm9tIFwiLi4vaG9va3MvdXNlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGFyYWxsYXhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlcy9QYXJhbGxheEltYWdlXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHsgbnVtYmVycyB9ID0gdXNlTnVtYmVycygpO1xyXG4gIGNvbnN0IHsgbGF0ZXN0UG9zdHMgfSA9IHVzZUxhdGVzdFBvc3RzKCk7XHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VDYXRlZ29yeSgpO1xyXG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHRleHRTdHJva2VDb2xvciA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBcIiNmZmZmZmZcIiA6IFwiIzAwMFwiO1xyXG4gIGNvbnN0IHRleHRTdHJva2VDb2xvcnMgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCIjZmZmZmZmXCIgOiBcIiMwMDBcIjtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TW9kZXJuIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0gLSBDTVM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIlJlYWQgbGF0ZXN0IGJvb2tzIG9uIHdlYiBkZXZlbG9wbWVudFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEZ1bGxXaWR0aEltYWdlIGF1dGg9e2F1dGgudXNlcn0gLz5cclxuXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgey8qIHBvc3RzICovfVxyXG4gICAgICAgIDxDb2xcclxuICAgICAgICAgIHNwYW49ezZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDUwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSZW5kZXJQcm9ncmVzc1xyXG4gICAgICAgICAgICBudW1iZXI9e251bWJlcnMucG9zdHN9XHJcbiAgICAgICAgICAgIG5hbWU9XCJCb29rc1wiXHJcbiAgICAgICAgICAgIGxpbms9XCIvYWRtaW4vcG9zdHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7LyogY29tbWVudHMgKi99XHJcbiAgICAgICAgPENvbFxyXG4gICAgICAgICAgc3Bhbj17Nn1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDIwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlbmRlclByb2dyZXNzXHJcbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVycy5jb21tZW50c31cclxuICAgICAgICAgICAgbmFtZT1cIkNvbW1lbnRzXCJcclxuICAgICAgICAgICAgbGluaz1cIi9hZG1pbi9jb21tZW50c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIHsvKiBjYXRnb3JpZXMgKi99XHJcbiAgICAgICAgPENvbFxyXG4gICAgICAgICAgc3Bhbj17Nn1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDIwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlbmRlclByb2dyZXNzXHJcbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVycy5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICBuYW1lPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgIGxpbms9XCIvYWRtaW4vY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIHsvKiB1c2VycyAqL31cclxuICAgICAgICA8Q29sXHJcbiAgICAgICAgICBzcGFuPXs2fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmVuZGVyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJzLnVzZXJzfVxyXG4gICAgICAgICAgICBuYW1lPVwiVXNlcnNcIlxyXG4gICAgICAgICAgICBsaW5rPVwiL2FkbWluL3VzZXJzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgPFBhcmFsbGF4SW1hZ2U+XHJcbiAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI3NHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OiBcIjJweCAycHggNHB4ICMwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIFdlYmtpdFRleHRTdHJva2U6IGAwLjVweCAke3RleHRTdHJva2VDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgdGV4dFN0cm9rZTogYDAuNXB4ICR7dGV4dFN0cm9rZUNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJFQ0VOVCBCT09LU1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIFdlYmtpdFRleHRTdHJva2U6ICcxcHggI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Ryb2tlOiAnMXB4ICNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGF0ZXN0UG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUGFyYWxsYXhJbWFnZT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiSGVhZCIsIkZ1bGxXaWR0aEltYWdlIiwidXNlTnVtYmVycyIsIlJlbmRlclByb2dyZXNzIiwiUm93IiwiQ29sIiwidXNlTGF0ZXN0UG9zdHMiLCJ1c2VDYXRlZ29yeSIsIkxpbmsiLCJQYXJhbGxheEltYWdlIiwiVGhlbWVDb250ZXh0IiwiSG9tZSIsImF1dGgiLCJzZXRBdXRoIiwibnVtYmVycyIsImxhdGVzdFBvc3RzIiwiY2F0ZWdvcmllcyIsInRoZW1lIiwidGV4dFN0cm9rZUNvbG9yIiwidGV4dFN0cm9rZUNvbG9ycyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidXNlciIsInNwYW4iLCJzdHlsZSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibnVtYmVyIiwicG9zdHMiLCJsaW5rIiwiY29tbWVudHMiLCJ1c2VycyIsImgyIiwidGV4dFNoYWRvdyIsImNvbG9yIiwiV2Via2l0VGV4dFN0cm9rZSIsInRleHRTdHJva2UiLCJkaXYiLCJtYXAiLCJwb3N0IiwiaHJlZiIsInNsdWciLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});