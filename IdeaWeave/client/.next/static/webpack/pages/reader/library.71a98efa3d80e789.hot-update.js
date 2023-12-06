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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ \"./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var _components_layout_ReaderLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ReaderLayout */ \"./components/layout/ReaderLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LibraryPage = ()=>{\n    _s();\n    const [library, setLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchLibrary = async ()=>{\n            try {\n                const userId = \"user-id\";\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/library/\".concat(userId));\n                setLibrary(response.data.library);\n                setLoading(false);\n            } catch (error) {\n                console.error(error);\n                setLoading(false);\n            }\n        };\n        fetchLibrary();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_ReaderLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"User's Library\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    grid: {\n                        gutter: 16,\n                        column: 3\n                    },\n                    dataSource: library,\n                    renderItem: (book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                title: book.title,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: book.content\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\reader\\\\library.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LibraryPage, \"RTFdtC/eBSangplHB+evWYjXs2o=\");\n_c = LibraryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LibraryPage);\nvar _c;\n$RefreshReg$(_c, \"LibraryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWFkZXIvbGlicmFyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUNRO0FBQUE7QUFDOEI7QUFFaEUsTUFBTU8sY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGVBQWU7WUFDbkIsSUFBSTtnQkFDRixNQUFNQyxTQUFTO2dCQUNmLE1BQU1DLFdBQVcsTUFBTVgsaURBQVMsQ0FBQyxZQUFtQixPQUFQVTtnQkFDN0NKLFdBQVdLLFNBQVNFLElBQUksQ0FBQ1IsT0FBTztnQkFDaENHLFdBQVc7WUFDYixFQUFFLE9BQU9NLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7Z0JBQ2ROLFdBQVc7WUFDYjtRQUNGO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNOLHVFQUFZQTtrQkFDWCw0RUFBQ2E7OzhCQUNDLDhEQUFDQzs4QkFBRzs7Ozs7O2dCQUNIVix3QkFDQyw4REFBQ1c7OEJBQUU7Ozs7OzhDQUVILDhEQUFDaEIscURBQUlBO29CQUNIaUIsTUFBTTt3QkFBRUMsUUFBUTt3QkFBSUMsUUFBUTtvQkFBRTtvQkFDOUJDLFlBQVlqQjtvQkFDWmtCLFlBQVksQ0FBQ0MscUJBQ1gsOERBQUN0QiwwREFBUztzQ0FDUiw0RUFBQ0QscURBQUlBO2dDQUFDeUIsT0FBT0YsS0FBS0UsS0FBSzswQ0FDckIsNEVBQUNSOzhDQUFHTSxLQUFLRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsQztHQTFDTXZCO0tBQUFBO0FBNENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlYWRlci9saWJyYXJ5LmpzP2FhYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWRlckxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvUmVhZGVyTGF5b3V0XCI7XHJcblxyXG5jb25zdCBMaWJyYXJ5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbGlicmFyeSwgc2V0TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaExpYnJhcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gXCJ1c2VyLWlkXCI7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9saWJyYXJ5LyR7dXNlcklkfWApO1xyXG4gICAgICAgIHNldExpYnJhcnkocmVzcG9uc2UuZGF0YS5saWJyYXJ5KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaExpYnJhcnkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhZGVyTGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5Vc2VyJ3MgTGlicmFyeTwvaDE+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBncmlkPXt7IGd1dHRlcjogMTYsIGNvbHVtbjogMyB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtsaWJyYXJ5fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoYm9vaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17Ym9vay50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntib29rLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhZGVyTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNhcmQiLCJMaXN0IiwiUmVhZGVyTGF5b3V0IiwiTGlicmFyeVBhZ2UiLCJsaWJyYXJ5Iiwic2V0TGlicmFyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hMaWJyYXJ5IiwidXNlcklkIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaDEiLCJwIiwiZ3JpZCIsImd1dHRlciIsImNvbHVtbiIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiYm9vayIsIkl0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reader/library.js\n"));

/***/ })

});