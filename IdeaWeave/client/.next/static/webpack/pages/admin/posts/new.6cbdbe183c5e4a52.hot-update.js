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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst QuillNoSSRWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"admin\\\\posts\\\\new.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 9,\n            columnNumber: 18\n        }, undefined)\n});\n_c = QuillNoSSRWrapper;\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst modules = {\n    toolbar: [\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\"\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            \"clean\"\n        ]\n    ],\n    clipboard: {\n        matchVisual: false\n    }\n};\nconst formats = [\n    \"font\",\n    \"size\",\n    \"bold\",\n    \"italic\",\n    \"underline\",\n    \"strike\",\n    \"blockquote\",\n    \"list\",\n    \"bullet\",\n    \"indent\",\n    \"link\",\n    \"image\",\n    \"video\",\n    \"script\",\n    \"align\",\n    \"color\",\n    \"background\"\n];\nfunction NewPost() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 14,\n                    offset: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Create new post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillNoSSRWrapper, {\n                            modules: modules,\n                            placeholder: \"Compose here\",\n                            value: value,\n                            onChange: setValue,\n                            formats: formats,\n                            theme: \"snow\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 6,\n                    offset: 1,\n                    children: \"Side Bar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c1 = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"QuillNoSSRWrapper\");\n$RefreshReg$(_c1, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUNpQjtBQUM5QjtBQUNLO0FBQ0M7QUFFekMsTUFBTVEsb0JBQW9CSCxtREFBT0EsQ0FBQyxJQUFNLHNNQUFPOzs7Ozs7SUFDN0NJLEtBQUs7SUFDTEMsU0FBUyxrQkFBTSw4REFBQ0M7c0JBQUU7Ozs7Ozs7S0FGZEg7QUFLTixNQUFNLEVBQUVJLE9BQU8sRUFBRSxHQUFHWix1REFBTUE7QUFDMUIsTUFBTSxFQUFFYSxNQUFNLEVBQUUsR0FBR1osdURBQU1BO0FBRXpCLE1BQU1hLFVBQVU7SUFDZEMsU0FBUztRQUNQO1lBQUM7Z0JBQUUsUUFBUSxFQUFFO1lBQUM7U0FBRTtRQUNoQjtZQUFDO2dCQUFFLFFBQVE7b0JBQUM7b0JBQVM7b0JBQU87b0JBQVM7aUJBQU87WUFBQztTQUFFO1FBQy9DO1lBQUM7WUFBUTtZQUFVO1lBQWE7U0FBUztRQUN6QztZQUFDO1lBQWM7U0FBYTtRQUM1QjtZQUFDO2dCQUFFLFNBQVMsRUFBRTtZQUFDO1lBQUc7Z0JBQUUsY0FBYyxFQUFFO1lBQUM7U0FBRTtRQUN2QztZQUFDO2dCQUFFLFFBQVE7WUFBVTtZQUFHO2dCQUFFLFFBQVE7WUFBUztTQUFFO1FBQzdDO1lBQUM7Z0JBQUUsVUFBVTtZQUFNO1lBQUc7Z0JBQUUsVUFBVTtZQUFRO1NBQUU7UUFDNUM7WUFBQztnQkFBRSxVQUFVO1lBQUs7WUFBRztnQkFBRSxVQUFVO1lBQUs7U0FBRTtRQUN4QztZQUFDO2dCQUFFLGFBQWE7WUFBTTtTQUFFO1FBQ3hCO1lBQUM7Z0JBQUUsU0FBUyxFQUFFO1lBQUM7U0FBRTtRQUNqQjtZQUFDO1lBQVE7WUFBUztTQUFRO1FBQzFCO1lBQUM7Z0JBQUUsVUFBVTtvQkFBQztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztpQkFBTTtZQUFDO1NBQUU7UUFDekM7WUFBQztTQUFRO0tBQ1Y7SUFDREMsV0FBVztRQUNUQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLE1BQU1DLFVBQVU7SUFDZDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFFbkMscUJBQ0UsOERBQUNILHNFQUFXQTtrQkFDViw0RUFBQ0Ysb0RBQUdBOzs4QkFDRiw4REFBQ0Msb0RBQUdBO29CQUFDbUIsTUFBTTtvQkFBSUMsUUFBUTs7c0NBQ3ZCLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNGLDhEQUFDaEI7NEJBQ0NNLFNBQVNBOzRCQUNUVyxhQUFZOzRCQUNaTCxPQUFPQTs0QkFDUE0sVUFBVUw7NEJBQ1ZILFNBQVNBOzRCQUNUUyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUN4QixvREFBR0E7b0JBQUNtQixNQUFNO29CQUFHQyxRQUFROzhCQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztHQXJCU0o7TUFBQUE7QUF1QlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcG9zdHMvbmV3LmpzPzViNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0LCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuXHJcbmNvbnN0IFF1aWxsTm9TU1JXcmFwcGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHtcclxuICBzc3I6IGZhbHNlLFxyXG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgLi4uPC9wPixcclxufSk7XHJcblxyXG5jb25zdCB7IENvbnRlbnQgfSA9IExheW91dDtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSB7XHJcbiAgdG9vbGJhcjogW1xyXG4gICAgW3sgJ2ZvbnQnOiBbXSB9XSxcclxuICAgIFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLFxyXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG4gICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCcgfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxyXG4gICAgW3sgJ3NjcmlwdCc6ICdzdWInIH0sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sXHJcbiAgICBbeyAnaW5kZW50JzogJy0xJyB9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLFxyXG4gICAgW3sgJ2RpcmVjdGlvbic6ICdydGwnIH1dLFxyXG4gICAgW3sgJ2FsaWduJzogW10gfV0sXHJcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgWydjbGVhbiddLFxyXG4gIF0sXHJcbiAgY2xpcGJvYXJkOiB7XHJcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdHMgPSBbXHJcbiAgJ2ZvbnQnLFxyXG4gICdzaXplJyxcclxuICAnYm9sZCcsXHJcbiAgJ2l0YWxpYycsXHJcbiAgJ3VuZGVybGluZScsXHJcbiAgJ3N0cmlrZScsXHJcbiAgJ2Jsb2NrcXVvdGUnLFxyXG4gICdsaXN0JyxcclxuICAnYnVsbGV0JyxcclxuICAnaW5kZW50JyxcclxuICAnbGluaycsXHJcbiAgJ2ltYWdlJyxcclxuICAndmlkZW8nLFxyXG4gICdzY3JpcHQnLFxyXG4gICdhbGlnbicsXHJcbiAgJ2NvbG9yJyxcclxuICAnYmFja2dyb3VuZCcsXHJcbl07XHJcblxyXG5mdW5jdGlvbiBOZXdQb3N0KCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTR9IG9mZnNldD17MX0+XHJcbiAgICAgICAgPGgxPkNyZWF0ZSBuZXcgcG9zdDwvaDE+XHJcbiAgICAgICAgICA8UXVpbGxOb1NTUldyYXBwZXJcclxuICAgICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbXBvc2UgaGVyZSdcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0VmFsdWV9XHJcbiAgICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XHJcbiAgICAgICAgICAgIHRoZW1lPVwic25vd1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0gb2Zmc2V0PXsxfT5TaWRlIEJhcjwvQ29sPlxyXG4gICAgICA8L1Jvdz4gIFxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0OyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTZWxlY3QiLCJSb3ciLCJDb2wiLCJBZG1pbkxheW91dCIsImR5bmFtaWMiLCJSZWFjdCIsInVzZVN0YXRlIiwiUXVpbGxOb1NTUldyYXBwZXIiLCJzc3IiLCJsb2FkaW5nIiwicCIsIkNvbnRlbnQiLCJPcHRpb24iLCJtb2R1bGVzIiwidG9vbGJhciIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIk5ld1Bvc3QiLCJ2YWx1ZSIsInNldFZhbHVlIiwic3BhbiIsIm9mZnNldCIsImgxIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.js\n"));

/***/ })

});