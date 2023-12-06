"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reader/library",{

/***/ "./pages/reader/library.js":
/*!*********************************!*\
  !*** ./pages/reader/library.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list */ \"./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var _components_layout_ReaderLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ReaderLayout */ \"./components/layout/ReaderLayout.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LibraryPage = ()=>{\n    _s();\n    const [library, setLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchLibrary = async ()=>{\n            try {\n                const userId = auth.user._id;\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/get-library/\".concat(userId));\n                setLibrary(response.data.library);\n                setLoading(false);\n            } catch (error) {\n                console.error(error);\n                setLoading(false);\n            }\n        };\n        fetchLibrary();\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_ReaderLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"User's Library\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    grid: {\n                        gutter: 16,\n                        column: 3\n                    },\n                    dataSource: library,\n                    renderItem: (book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/post/\".concat(book.slug),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    title: book.title,\n                                    cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        alt: book.title,\n                                        src: book.coverImage\n                                    }, void 0, false, void 0, void 0),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Posted By: \",\n                                                book.postedBy\n                                            ]\n                                        }, void 0, true, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Created At: \",\n                                                book.createdAt\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    ]\n                                }, void 0, true, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LibraryPage, \"0a7w0+vTlGUVceMpBWkkMyMv4dc=\");\n_c = LibraryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LibraryPage);\nvar _c;\n$RefreshReg$(_c, \"LibraryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWFkZXIvbGlicmFyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNyQztBQUNRO0FBQUE7QUFDOEI7QUFDZjtBQUNwQjtBQUU3QixNQUFNVSxjQUFjOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdiLGlEQUFVQSxDQUFDSyxzREFBV0E7SUFFOUNOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFNBQVNILEtBQUtJLElBQUksQ0FBQ0MsR0FBRztnQkFFNUIsTUFBTUMsV0FBVyxNQUFNakIsaURBQVMsQ0FBQyxnQkFBdUIsT0FBUGM7Z0JBQ2pETixXQUFXUyxTQUFTRSxJQUFJLENBQUNaLE9BQU87Z0JBQ2hDRyxXQUFXO1lBQ2IsRUFBRSxPQUFPVSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO2dCQUNkVixXQUFXO1lBQ2I7UUFDRjtRQUVBRztJQUNGLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNFLDhEQUFDUix1RUFBWUE7a0JBQ1gsNEVBQUNtQjs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7Z0JBQ0hkLHdCQUNDLDhEQUFDZTs4QkFBRTs7Ozs7OENBRUgsOERBQUN0QixxREFBSUE7b0JBQ0h1QixNQUFNO3dCQUFFQyxRQUFRO3dCQUFJQyxRQUFRO29CQUFFO29CQUM5QkMsWUFBWXJCO29CQUNac0IsWUFBWSxDQUFDQyxxQkFDWCw4REFBQzVCLDBEQUFTO3NDQUNSLDRFQUFDRyxrREFBSUE7Z0NBQUMyQixNQUFNLFNBQW1CLE9BQVZGLEtBQUtHLElBQUk7MENBQzFCLDRFQUFDaEMscURBQUlBO29DQUNIaUMsT0FBT0osS0FBS0ksS0FBSztvQ0FDakJDLHFCQUFPLDhEQUFDQzt3Q0FBSUMsS0FBS1AsS0FBS0ksS0FBSzt3Q0FBRUksS0FBS1IsS0FBS1MsVUFBVTs7O3NEQUVqRCw4REFBQ2Y7O2dEQUFFO2dEQUFZTSxLQUFLVSxRQUFROzs7c0RBQzVCLDhEQUFDaEI7O2dEQUFFO2dEQUFhTSxLQUFLVyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdwRDtHQW5ETW5DO0tBQUFBO0FBcUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlYWRlci9saWJyYXJ5LmpzP2FhYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWRlckxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvUmVhZGVyTGF5b3V0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBMaWJyYXJ5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbGlicmFyeSwgc2V0TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaExpYnJhcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXV0aC51c2VyLl9pZDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9nZXQtbGlicmFyeS8ke3VzZXJJZH1gKTtcclxuICAgICAgICBzZXRMaWJyYXJ5KHJlc3BvbnNlLmRhdGEubGlicmFyeSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hMaWJyYXJ5KCk7XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFkZXJMYXlvdXQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlVzZXIncyBMaWJyYXJ5PC9oMT5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiAxNiwgY29sdW1uOiAzIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpYnJhcnl9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhib29rKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke2Jvb2suc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jvb2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBhbHQ9e2Jvb2sudGl0bGV9IHNyYz17Ym9vay5jb3ZlckltYWdlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3N0ZWQgQnk6IHtib29rLnBvc3RlZEJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPkNyZWF0ZWQgQXQ6IHtib29rLmNyZWF0ZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWRlckxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImF4aW9zIiwiQ2FyZCIsIkxpc3QiLCJSZWFkZXJMYXlvdXQiLCJBdXRoQ29udGV4dCIsIkxpbmsiLCJMaWJyYXJ5UGFnZSIsImxpYnJhcnkiLCJzZXRMaWJyYXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJhdXRoIiwic2V0QXV0aCIsImZldGNoTGlicmFyeSIsInVzZXJJZCIsInVzZXIiLCJfaWQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJoMSIsInAiLCJncmlkIiwiZ3V0dGVyIiwiY29sdW1uIiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJib29rIiwiSXRlbSIsImhyZWYiLCJzbHVnIiwidGl0bGUiLCJjb3ZlciIsImltZyIsImFsdCIsInNyYyIsImNvdmVySW1hZ2UiLCJwb3N0ZWRCeSIsImNyZWF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reader/library.js\n"));

/***/ })

});