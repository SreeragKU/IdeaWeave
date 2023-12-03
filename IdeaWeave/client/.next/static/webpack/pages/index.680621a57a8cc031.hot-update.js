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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/FullWidthImage */ \"./components/pages/FullWidthImage.js\");\n/* harmony import */ var _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useNumbers */ \"./hooks/useNumbers.js\");\n/* harmony import */ var _components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts/RenderProgress */ \"./components/posts/RenderProgress.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useLatestPosts */ \"./hooks/useLatestPosts.js\");\n/* harmony import */ var _hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useCategory */ \"./hooks/useCategory.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_pages_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pages/ParallaxImage */ \"./components/pages/ParallaxImage.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    const { numbers } = (0,_hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { latestPosts } = (0,_hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { categories } = (0,_hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_11__.ThemeContext);\n    const textStrokeColor = theme === \"light\" ? \"#ffffff\" : \"#000\";\n    const textStrokeColors = theme === \"light\" ? \"#000\" : \"#ffffff\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Modern Content Management System - CMS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Read latest books on web development\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                auth: auth.user\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.posts,\n                            name: \"Books\",\n                            link: \"/admin/posts\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.comments,\n                            name: \"Comments\",\n                            link: \"/admin/comments\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.categories,\n                            name: \"Categories\",\n                            link: \"/admin/categories\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        span: 6,\n                        style: {\n                            marginTop: 50,\n                            textAlign: \"center\",\n                            fontSize: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            number: numbers.users,\n                            name: \"Users\",\n                            link: \"/admin/users\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_ParallaxImage__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"74px\",\n                                    textShadow: \"2px 2px 4px #000000\",\n                                    color: \"#fff\",\n                                    WebkitTextStroke: \"0.5px \".concat(textStrokeColor),\n                                    textStroke: \"0.5px \".concat(textStrokeColor)\n                                },\n                                children: \"RECENT BOOKS\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"20px\",\n                                    WebkitTextStroke: \"0.5px \".concat(textStrokeColors),\n                                    textStroke: \"0.5px \".concat(textStrokeColors)\n                                },\n                                children: latestPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        href: \"/post/\".concat(post.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"b7R1gsi/L0xUgEPXOXhWB2mmCQc=\", false, function() {\n    return [\n        _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useCategory__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakM7R0F0R1NUOztRQUVhVCx5REFBVUE7UUFDTkksNkRBQWNBO1FBQ2ZDLDBEQUFXQTs7O0tBSjNCSTtBQXdHVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZ1bGxXaWR0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL0Z1bGxXaWR0aEltYWdlXCI7XHJcbmltcG9ydCB1c2VOdW1iZXJzIGZyb20gXCIuLi9ob29rcy91c2VOdW1iZXJzXCI7XHJcbmltcG9ydCBSZW5kZXJQcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy9SZW5kZXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB1c2VMYXRlc3RQb3N0cyBmcm9tIFwiLi4vaG9va3MvdXNlTGF0ZXN0UG9zdHNcIjtcclxuaW1wb3J0IHVzZUNhdGVnb3J5IGZyb20gXCIuLi9ob29rcy91c2VDYXRlZ29yeVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQYXJhbGxheEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL1BhcmFsbGF4SW1hZ2VcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvdGhlbWVcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBudW1iZXJzIH0gPSB1c2VOdW1iZXJzKCk7XHJcbiAgY29uc3QgeyBsYXRlc3RQb3N0cyB9ID0gdXNlTGF0ZXN0UG9zdHMoKTtcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IHVzZUNhdGVnb3J5KCk7XHJcbiAgY29uc3QgW3RoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgdGV4dFN0cm9rZUNvbG9yID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiI2ZmZmZmZlwiIDogXCIjMDAwXCI7XHJcbiAgY29uc3QgdGV4dFN0cm9rZUNvbG9ycyA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBcIiMwMDBcIiA6IFwiI2ZmZmZmZlwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1vZGVybiBDb250ZW50IE1hbmFnZW1lbnQgU3lzdGVtIC0gQ01TPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJSZWFkIGxhdGVzdCBib29rcyBvbiB3ZWIgZGV2ZWxvcG1lbnRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxGdWxsV2lkdGhJbWFnZSBhdXRoPXthdXRoLnVzZXJ9IC8+XHJcblxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIHsvKiBwb3N0cyAqL31cclxuICAgICAgICA8Q29sXHJcbiAgICAgICAgICBzcGFuPXs2fVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmVuZGVyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJzLnBvc3RzfVxyXG4gICAgICAgICAgICBuYW1lPVwiQm9va3NcIlxyXG4gICAgICAgICAgICBsaW5rPVwiL2FkbWluL3Bvc3RzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgey8qIGNvbW1lbnRzICovfVxyXG4gICAgICAgIDxDb2xcclxuICAgICAgICAgIHNwYW49ezZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDUwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSZW5kZXJQcm9ncmVzc1xyXG4gICAgICAgICAgICBudW1iZXI9e251bWJlcnMuY29tbWVudHN9XHJcbiAgICAgICAgICAgIG5hbWU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgICAgIGxpbms9XCIvYWRtaW4vY29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7LyogY2F0Z29yaWVzICovfVxyXG4gICAgICAgIDxDb2xcclxuICAgICAgICAgIHNwYW49ezZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDUwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSZW5kZXJQcm9ncmVzc1xyXG4gICAgICAgICAgICBudW1iZXI9e251bWJlcnMuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgbmFtZT1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICBsaW5rPVwiL2FkbWluL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7LyogdXNlcnMgKi99XHJcbiAgICAgICAgPENvbFxyXG4gICAgICAgICAgc3Bhbj17Nn1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDIwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlbmRlclByb2dyZXNzXHJcbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVycy51c2Vyc31cclxuICAgICAgICAgICAgbmFtZT1cIlVzZXJzXCJcclxuICAgICAgICAgICAgbGluaz1cIi9hZG1pbi91c2Vyc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgIDxQYXJhbGxheEltYWdlPlxyXG4gICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNzRweFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogXCIycHggMnB4IDRweCAjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBXZWJraXRUZXh0U3Ryb2tlOiBgMC41cHggJHt0ZXh0U3Ryb2tlQ29sb3J9YCxcclxuICAgICAgICAgICAgICAgIHRleHRTdHJva2U6IGAwLjVweCAke3RleHRTdHJva2VDb2xvcn1gLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSRUNFTlQgQk9PS1NcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBXZWJraXRUZXh0U3Ryb2tlOiBgMC41cHggJHt0ZXh0U3Ryb2tlQ29sb3JzfWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Ryb2tlOiBgMC41cHggJHt0ZXh0U3Ryb2tlQ29sb3JzfWAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYXRlc3RQb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXJhbGxheEltYWdlPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJIZWFkIiwiRnVsbFdpZHRoSW1hZ2UiLCJ1c2VOdW1iZXJzIiwiUmVuZGVyUHJvZ3Jlc3MiLCJSb3ciLCJDb2wiLCJ1c2VMYXRlc3RQb3N0cyIsInVzZUNhdGVnb3J5IiwiTGluayIsIlBhcmFsbGF4SW1hZ2UiLCJUaGVtZUNvbnRleHQiLCJIb21lIiwiYXV0aCIsInNldEF1dGgiLCJudW1iZXJzIiwibGF0ZXN0UG9zdHMiLCJjYXRlZ29yaWVzIiwidGhlbWUiLCJ0ZXh0U3Ryb2tlQ29sb3IiLCJ0ZXh0U3Ryb2tlQ29sb3JzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ1c2VyIiwic3BhbiIsInN0eWxlIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJudW1iZXIiLCJwb3N0cyIsImxpbmsiLCJjb21tZW50cyIsInVzZXJzIiwiaDIiLCJ0ZXh0U2hhZG93IiwiY29sb3IiLCJXZWJraXRUZXh0U3Ryb2tlIiwidGV4dFN0cm9rZSIsImRpdiIsIm1hcCIsInBvc3QiLCJocmVmIiwic2x1ZyIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});