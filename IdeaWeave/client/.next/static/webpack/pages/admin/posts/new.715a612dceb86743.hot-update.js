"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/posts/new",{

/***/ "./pages/admin/posts/new.js":
/*!**********************************!*\
  !*** ./pages/admin/posts/new.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst QuillNoSSRWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"admin\\\\posts\\\\new.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 9,\n            columnNumber: 18\n        }, undefined)\n});\n_c = QuillNoSSRWrapper;\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst modules = {\n    toolbar: [\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\"\n        ],\n        [\n            \"clean\"\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ]\n    ],\n    clipboard: {\n        matchVisual: false\n    }\n};\nconst formats = [\n    \"font\",\n    \"size\",\n    \"bold\",\n    \"italic\",\n    \"underline\",\n    \"strike\",\n    \"blockquote\",\n    \"list\",\n    \"bullet\",\n    \"indent\",\n    \"link\",\n    \"image\",\n    \"video\",\n    \"script\",\n    \"align\",\n    \"color\",\n    \"background\"\n];\nfunction NewPost() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 16,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Create new post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillNoSSRWrapper, {\n                            modules: modules,\n                            placeholder: \"Compose here\",\n                            value: value,\n                            onChange: setValue,\n                            formats: formats,\n                            theme: \"snow\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 8,\n                    children: \"Side Bar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c1 = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"QuillNoSSRWrapper\");\n$RefreshReg$(_c1, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUNpQjtBQUM5QjtBQUNLO0FBQ0M7QUFFekMsTUFBTVEsb0JBQW9CSCxtREFBT0EsQ0FBQyxJQUFNLHNNQUFPOzs7Ozs7SUFDN0NJLEtBQUs7SUFDTEMsU0FBUyxrQkFBTSw4REFBQ0M7c0JBQUU7Ozs7Ozs7S0FGZEg7QUFLTixNQUFNLEVBQUVJLE9BQU8sRUFBRSxHQUFHWix1REFBTUE7QUFDMUIsTUFBTSxFQUFFYSxNQUFNLEVBQUUsR0FBR1osdURBQU1BO0FBRXpCLE1BQU1hLFVBQVU7SUFDZEMsU0FBUztRQUNQO1lBQUM7WUFBUTtZQUFVO1lBQWE7U0FBUztRQUN6QztZQUFDO1lBQWM7U0FBYTtRQUM1QjtZQUFDO2dCQUFFLFNBQVMsRUFBRTtZQUFDO1lBQUc7Z0JBQUUsY0FBYyxFQUFFO1lBQUM7U0FBRTtRQUN2QztZQUFDO2dCQUFFLFFBQVE7WUFBVTtZQUFHO2dCQUFFLFFBQVE7WUFBUztTQUFFO1FBQzdDO1lBQUM7Z0JBQUUsVUFBVTtZQUFNO1lBQUc7Z0JBQUUsVUFBVTtZQUFRO1NBQUU7UUFDNUM7WUFBQztnQkFBRSxVQUFVO1lBQUs7WUFBRztnQkFBRSxVQUFVO1lBQUs7U0FBRTtRQUN4QztZQUFDO2dCQUFFLGFBQWE7WUFBTTtTQUFFO1FBQ3hCO1lBQUM7Z0JBQUUsUUFBUSxFQUFFO1lBQUM7U0FBRTtRQUNoQjtZQUFDO2dCQUFFLFNBQVMsRUFBRTtZQUFDO1NBQUU7UUFDakI7WUFBQztZQUFRO1lBQVM7U0FBUTtRQUMxQjtZQUFDO1NBQVE7UUFDVDtZQUFDO2dCQUFFLFFBQVE7b0JBQUM7b0JBQVM7b0JBQU87b0JBQVM7aUJBQU87WUFBQztTQUFFO1FBQy9DO1lBQUM7Z0JBQUUsVUFBVTtvQkFBQztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztpQkFBTTtZQUFDO1NBQUU7S0FDMUM7SUFDREMsV0FBVztRQUNUQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLE1BQU1DLFVBQVU7SUFDZDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFFbkMscUJBQ0UsOERBQUNILHNFQUFXQTtrQkFDViw0RUFBQ0Ysb0RBQUdBOzs4QkFDRiw4REFBQ0Msb0RBQUdBO29CQUFDbUIsTUFBTTs7c0NBQ1gsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0YsOERBQUNmOzRCQUNDTSxTQUFTQTs0QkFDVFUsYUFBWTs0QkFDWkosT0FBT0E7NEJBQ1BLLFVBQVVKOzRCQUNWSCxTQUFTQTs0QkFDVFEsT0FBTTs7Ozs7Ozs7Ozs7OzhCQUdWLDhEQUFDdkIsb0RBQUdBO29CQUFDbUIsTUFBTTs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7R0FyQlNIO01BQUFBO0FBdUJULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3Bvc3RzL25ldy5qcz81YjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCwgU2VsZWN0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5MYXlvdXRcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBRdWlsbE5vU1NSV3JhcHBlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIC4uLjwvcD4sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBtb2R1bGVzID0ge1xyXG4gIHRvb2xiYXI6IFtcclxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLFxyXG4gICAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcclxuICAgIFt7ICdjb2xvcic6IFtdIH0sIHsgJ2JhY2tncm91bmQnOiBbXSB9XSxcclxuICAgIFt7ICdsaXN0JzogJ29yZGVyZWQnIH0sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcclxuICAgIFt7ICdzY3JpcHQnOiAnc3ViJyB9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLFxyXG4gICAgW3sgJ2luZGVudCc6ICctMScgfSwgeyAnaW5kZW50JzogJysxJyB9XSxcclxuICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSxcclxuICAgIFt7ICdmb250JzogW10gfV0sXHJcbiAgICBbeyAnYWxpZ24nOiBbXSB9XSxcclxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG4gICAgWydjbGVhbiddLFxyXG4gICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sXHJcbiAgICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcclxuICBdLFxyXG4gIGNsaXBib2FyZDoge1xyXG4gICAgbWF0Y2hWaXN1YWw6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRzID0gW1xyXG4gICdmb250JyxcclxuICAnc2l6ZScsXHJcbiAgJ2JvbGQnLFxyXG4gICdpdGFsaWMnLFxyXG4gICd1bmRlcmxpbmUnLFxyXG4gICdzdHJpa2UnLFxyXG4gICdibG9ja3F1b3RlJyxcclxuICAnbGlzdCcsXHJcbiAgJ2J1bGxldCcsXHJcbiAgJ2luZGVudCcsXHJcbiAgJ2xpbmsnLFxyXG4gICdpbWFnZScsXHJcbiAgJ3ZpZGVvJyxcclxuICAnc2NyaXB0JyxcclxuICAnYWxpZ24nLFxyXG4gICdjb2xvcicsXHJcbiAgJ2JhY2tncm91bmQnLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTmV3UG9zdCgpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNwYW49ezE2fT5cclxuICAgICAgICA8aDE+Q3JlYXRlIG5ldyBwb3N0PC9oMT5cclxuICAgICAgICAgIDxRdWlsbE5vU1NSV3JhcHBlclxyXG4gICAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29tcG9zZSBoZXJlJ1xyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cclxuICAgICAgICAgICAgdGhlbWU9XCJzbm93XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXs4fT5TaWRlIEJhcjwvQ29sPlxyXG4gICAgICA8L1Jvdz4gIFxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2VsZWN0IiwiUm93IiwiQ29sIiwiQWRtaW5MYXlvdXQiLCJkeW5hbWljIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlF1aWxsTm9TU1JXcmFwcGVyIiwic3NyIiwibG9hZGluZyIsInAiLCJDb250ZW50IiwiT3B0aW9uIiwibW9kdWxlcyIsInRvb2xiYXIiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsImZvcm1hdHMiLCJOZXdQb3N0IiwidmFsdWUiLCJzZXRWYWx1ZSIsInNwYW4iLCJoMSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.js\n"));

/***/ })

});