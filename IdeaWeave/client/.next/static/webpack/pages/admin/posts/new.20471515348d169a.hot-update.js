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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill */ \"./node_modules/quill/dist/quill.js\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var to_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! to-markdown */ \"./node_modules/to-markdown/index.js\");\n/* harmony import */ var to_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(to_markdown__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Import the required Quill module\n\n\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n// Quill modules and formats\nconst modules = {\n    toolbar: [\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\"\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            \"clean\"\n        ]\n    ],\n    clipboard: {\n        matchVisual: false\n    }\n};\nconst formats = [\n    \"font\",\n    \"size\",\n    \"bold\",\n    \"italic\",\n    \"underline\",\n    \"strike\",\n    \"blockquote\",\n    \"list\",\n    \"bullet\",\n    \"indent\",\n    \"link\",\n    \"image\",\n    \"video\",\n    \"script\",\n    \"align\",\n    \"color\",\n    \"background\"\n];\nfunction NewPost() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (typeof document !== \"undefined\") {\n            // Import Quill dynamically only on the client side\n            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ \"./node_modules/quill/dist/quill.js\", 23)).then((Quill)=>{\n                // Quill initialization and further code\n                const quill = new Quill(\"#editor-container\", {\n                });\n                // Handle initial content conversion to Markdown\n                const initialContent = quill.container.firstChild.innerHTML;\n                const initialMarkdown = convertToMarkdown(initialContent);\n                document.querySelector(\"#markdown\").textContent = initialMarkdown;\n                // Handle text changes in Quill\n                quill.on(\"text-change\", function(delta, source) {\n                    const currentContent = quill.container.firstChild.innerHTML;\n                    const markdown = convertToMarkdown(currentContent);\n                    document.querySelector(\"#markdown\").textContent = markdown;\n                });\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    span: 14,\n                    offset: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Create new post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"editor-container\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            id: \"markdown\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    span: 6,\n                    offset: 1,\n                    children: \"Side Bar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"aFIykL0K1j3we4veeaDstLdSuC8=\");\n_c = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c;\n$RefreshReg$(_c, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEI7S0FBQUE7QUF3Q1QsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcG9zdHMvbmV3LmpzPzViNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0LCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5cclxuLy8gSW1wb3J0IHRoZSByZXF1aXJlZCBRdWlsbCBtb2R1bGVcclxuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsJztcclxuaW1wb3J0IHRvTWFya2Rvd24gZnJvbSAndG8tbWFya2Rvd24nO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG4vLyBRdWlsbCBtb2R1bGVzIGFuZCBmb3JtYXRzXHJcbmNvbnN0IG1vZHVsZXMgPSB7XHJcbiAgdG9vbGJhcjogW1xyXG4gICAgW3sgJ2ZvbnQnOiBbXSB9XSxcclxuICAgIFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLFxyXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG4gICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCcgfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxyXG4gICAgW3sgJ3NjcmlwdCc6ICdzdWInIH0sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sXHJcbiAgICBbeyAnaW5kZW50JzogJy0xJyB9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLFxyXG4gICAgW3sgJ2RpcmVjdGlvbic6ICdydGwnIH1dLFxyXG4gICAgW3sgJ2FsaWduJzogW10gfV0sXHJcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgWydjbGVhbiddLFxyXG4gIF0sXHJcbiAgY2xpcGJvYXJkOiB7XHJcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdHMgPSBbXHJcbiAgJ2ZvbnQnLFxyXG4gICdzaXplJyxcclxuICAnYm9sZCcsXHJcbiAgJ2l0YWxpYycsXHJcbiAgJ3VuZGVybGluZScsXHJcbiAgJ3N0cmlrZScsXHJcbiAgJ2Jsb2NrcXVvdGUnLFxyXG4gICdsaXN0JyxcclxuICAnYnVsbGV0JyxcclxuICAnaW5kZW50JyxcclxuICAnbGluaycsXHJcbiAgJ2ltYWdlJyxcclxuICAndmlkZW8nLFxyXG4gICdzY3JpcHQnLFxyXG4gICdhbGlnbicsXHJcbiAgJ2NvbG9yJyxcclxuICAnYmFja2dyb3VuZCcsXHJcbl07XHJcblxyXG5mdW5jdGlvbiBOZXdQb3N0KCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gSW1wb3J0IFF1aWxsIGR5bmFtaWNhbGx5IG9ubHkgb24gdGhlIGNsaWVudCBzaWRlXHJcbiAgICAgIGltcG9ydCgncXVpbGwnKS50aGVuKChRdWlsbCkgPT4ge1xyXG4gICAgICAgIC8vIFF1aWxsIGluaXRpYWxpemF0aW9uIGFuZCBmdXJ0aGVyIGNvZGVcclxuICAgICAgICBjb25zdCBxdWlsbCA9IG5ldyBRdWlsbChcIiNlZGl0b3ItY29udGFpbmVyXCIsIHtcclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgaW5pdGlhbCBjb250ZW50IGNvbnZlcnNpb24gdG8gTWFya2Rvd25cclxuICAgICAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IHF1aWxsLmNvbnRhaW5lci5maXJzdENoaWxkLmlubmVySFRNTDtcclxuICAgICAgICBjb25zdCBpbml0aWFsTWFya2Rvd24gPSBjb252ZXJ0VG9NYXJrZG93bihpbml0aWFsQ29udGVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZG93blwiKS50ZXh0Q29udGVudCA9IGluaXRpYWxNYXJrZG93bjtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIHRleHQgY2hhbmdlcyBpbiBRdWlsbFxyXG4gICAgICAgIHF1aWxsLm9uKFwidGV4dC1jaGFuZ2VcIiwgZnVuY3Rpb24gKGRlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gcXVpbGwuY29udGFpbmVyLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgY29uc3QgbWFya2Rvd24gPSBjb252ZXJ0VG9NYXJrZG93bihjdXJyZW50Q29udGVudCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtkb3duXCIpLnRleHRDb250ZW50ID0gbWFya2Rvd247XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNwYW49ezE0fSBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgPGgxPkNyZWF0ZSBuZXcgcG9zdDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9yLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgPHByZSBpZD1cIm1hcmtkb3duXCI+PC9wcmU+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXs2fSBvZmZzZXQ9ezF9PlNpZGUgQmFyPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTZWxlY3QiLCJSb3ciLCJDb2wiLCJBZG1pbkxheW91dCIsImR5bmFtaWMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUXVpbGwiLCJ0b01hcmtkb3duIiwiQ29udGVudCIsIk9wdGlvbiIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiTmV3UG9zdCIsInZhbHVlIiwic2V0VmFsdWUiLCJkb2N1bWVudCIsInRoZW4iLCJxdWlsbCIsImluaXRpYWxDb250ZW50IiwiY29udGFpbmVyIiwiZmlyc3RDaGlsZCIsImlubmVySFRNTCIsImluaXRpYWxNYXJrZG93biIsImNvbnZlcnRUb01hcmtkb3duIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwib24iLCJkZWx0YSIsInNvdXJjZSIsImN1cnJlbnRDb250ZW50IiwibWFya2Rvd24iLCJzcGFuIiwib2Zmc2V0IiwiaDEiLCJkaXYiLCJpZCIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.js\n"));

/***/ })

});