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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst QuillNoSSRWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"admin\\\\posts\\\\new.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 9,\n            columnNumber: 18\n        }, undefined)\n});\n_c = QuillNoSSRWrapper;\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst modules = {\n    toolbar: [\n        [\n            {\n                \"header\": 1\n            },\n            {\n                \"header\": 2\n            }\n        ],\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\"\n        ],\n        [\n            \"clean\"\n        ]\n    ],\n    clipboard: {\n        matchVisual: false\n    }\n};\nconst formats = [\n    \"header\",\n    \"font\",\n    \"size\",\n    \"bold\",\n    \"italic\",\n    \"underline\",\n    \"strike\",\n    \"blockquote\",\n    \"list\",\n    \"bullet\",\n    \"indent\",\n    \"link\",\n    \"image\",\n    \"video\",\n    \"script\",\n    \"align\",\n    \"color\",\n    \"background\"\n];\nfunction NewPost() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillNoSSRWrapper, {\n                    modules: modules,\n                    placeholder: \"Compose here\",\n                    value: value,\n                    onChange: setValue,\n                    formats: formats,\n                    theme: \"snow\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c1 = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"QuillNoSSRWrapper\");\n$RefreshReg$(_c1, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFBQTtBQUMyQjtBQUM5QjtBQUNLO0FBQ0M7QUFFekMsTUFBTU0sb0JBQW9CSCxtREFBT0EsQ0FBQyxJQUFNLHNNQUFPOzs7Ozs7SUFDN0NJLEtBQUs7SUFDTEMsU0FBUyxrQkFBTSw4REFBQ0M7c0JBQUU7Ozs7Ozs7S0FGZEg7QUFLTixNQUFNLEVBQUVJLE9BQU8sRUFBRSxHQUFHVix1REFBTUE7QUFDMUIsTUFBTSxFQUFFVyxNQUFNLEVBQUUsR0FBR1YsdURBQU1BO0FBRXpCLE1BQU1XLFVBQVU7SUFDZEMsU0FBUztRQUNQO1lBQUM7Z0JBQUUsVUFBVTtZQUFFO1lBQUc7Z0JBQUUsVUFBVTtZQUFFO1NBQUU7UUFDbEM7WUFBQztZQUFRO1lBQVU7WUFBYTtTQUFTO1FBQ3pDO1lBQUM7WUFBYztTQUFhO1FBQzVCO1lBQUM7Z0JBQUUsUUFBUTtZQUFVO1lBQUc7Z0JBQUUsUUFBUTtZQUFTO1NBQUU7UUFDN0M7WUFBQztnQkFBRSxVQUFVO1lBQU07WUFBRztnQkFBRSxVQUFVO1lBQVE7U0FBRTtRQUM1QztZQUFDO2dCQUFFLFVBQVU7WUFBSztZQUFHO2dCQUFFLFVBQVU7WUFBSztTQUFFO1FBQ3hDO1lBQUM7Z0JBQUUsYUFBYTtZQUFNO1NBQUU7UUFDeEI7WUFBQztnQkFBRSxRQUFRO29CQUFDO29CQUFTO29CQUFPO29CQUFTO2lCQUFPO1lBQUM7U0FBRTtRQUMvQztZQUFDO2dCQUFFLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUc7b0JBQUc7b0JBQUc7b0JBQUc7b0JBQUc7aUJBQU07WUFBQztTQUFFO1FBQ3pDO1lBQUM7Z0JBQUUsU0FBUyxFQUFFO1lBQUM7WUFBRztnQkFBRSxjQUFjLEVBQUU7WUFBQztTQUFFO1FBQ3ZDO1lBQUM7Z0JBQUUsUUFBUSxFQUFFO1lBQUM7U0FBRTtRQUNoQjtZQUFDO2dCQUFFLFNBQVMsRUFBRTtZQUFDO1NBQUU7UUFDakI7WUFBQztZQUFRO1lBQVM7U0FBUTtRQUMxQjtZQUFDO1NBQVE7S0FDVjtJQUNEQyxXQUFXO1FBQ1RDLGFBQWE7SUFDZjtBQUNGO0FBRUEsTUFBTUMsVUFBVTtJQUNkO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDSCxzRUFBV0E7a0JBQ1YsNEVBQUNrQjtzQkFDQyw0RUFBQ0M7MEJBQ0MsNEVBQUNmO29CQUNDTSxTQUFTQTtvQkFDVFUsYUFBWTtvQkFDWkosT0FBT0E7b0JBQ1BLLFVBQVVKO29CQUNWSCxTQUFTQTtvQkFDVFEsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBbkJTUDtNQUFBQTtBQXFCVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcuanM/NWI0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQsIFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5MYXlvdXRcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBRdWlsbE5vU1NSV3JhcHBlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIC4uLjwvcD4sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBtb2R1bGVzID0ge1xyXG4gIHRvb2xiYXI6IFtcclxuICAgIFt7ICdoZWFkZXInOiAxIH0sIHsgJ2hlYWRlcic6IDIgfV0sXHJcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSxcclxuICAgIFsnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXHJcbiAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJyB9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICBbeyAnc2NyaXB0JzogJ3N1YicgfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSxcclxuICAgIFt7ICdpbmRlbnQnOiAnLTEnIH0sIHsgJ2luZGVudCc6ICcrMScgfV0sXHJcbiAgICBbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sXHJcbiAgICBbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSxcclxuICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgW3sgJ2ZvbnQnOiBbXSB9XSxcclxuICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXHJcbiAgICBbJ2NsZWFuJ10sXHJcbiAgXSxcclxuICBjbGlwYm9hcmQ6IHtcclxuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0cyA9IFtcclxuICAnaGVhZGVyJyxcclxuICAnZm9udCcsXHJcbiAgJ3NpemUnLFxyXG4gICdib2xkJyxcclxuICAnaXRhbGljJyxcclxuICAndW5kZXJsaW5lJyxcclxuICAnc3RyaWtlJyxcclxuICAnYmxvY2txdW90ZScsXHJcbiAgJ2xpc3QnLFxyXG4gICdidWxsZXQnLFxyXG4gICdpbmRlbnQnLFxyXG4gICdsaW5rJyxcclxuICAnaW1hZ2UnLFxyXG4gICd2aWRlbycsXHJcbiAgJ3NjcmlwdCcsXHJcbiAgJ2FsaWduJyxcclxuICAnY29sb3InLFxyXG4gICdiYWNrZ3JvdW5kJyxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE5ld1Bvc3QoKSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxRdWlsbE5vU1NSV3JhcHBlclxyXG4gICAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29tcG9zZSBoZXJlJ1xyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cclxuICAgICAgICAgICAgdGhlbWU9XCJzbm93XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PiAgXHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTZWxlY3QiLCJBZG1pbkxheW91dCIsImR5bmFtaWMiLCJSZWFjdCIsInVzZVN0YXRlIiwiUXVpbGxOb1NTUldyYXBwZXIiLCJzc3IiLCJsb2FkaW5nIiwicCIsIkNvbnRlbnQiLCJPcHRpb24iLCJtb2R1bGVzIiwidG9vbGJhciIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIk5ld1Bvc3QiLCJ2YWx1ZSIsInNldFZhbHVlIiwiUm93IiwiQ29sIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.js\n"));

/***/ })

});