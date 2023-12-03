"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/customize",{

/***/ "./pages/admin/customize.js":
/*!**********************************!*\
  !*** ./pages/admin/customize.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/image */ \"./node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ \"./components/Media/index.js\");\n/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media */ \"./context/media.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Customize = ()=>{\n    var _media_selected;\n    _s();\n    // context\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_3__.MediaContext);\n    // state\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subtitle, setSubtitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullWidthImage, setFullWidthImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSave = async ()=>{\n        try {\n            var _media_selected;\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/homepage\", {\n                page: \"homepage\",\n                title,\n                subtitle,\n                fullWidthImage: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected._id\n            });\n            setLoading(false);\n        } catch (err) {\n            console.log(err);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                marginTop: 50,\n                marginLeft: 110,\n                marginRight: 50\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Customize home page\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Set full width image title and subtitle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 18,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Media__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            style: {\n                                margin: \"20px 0px 20px 0px\"\n                            },\n                            size: \"large\",\n                            placeholder: \"Give it a title\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            size: \"large\",\n                            placeholder: \"Give it a subtitle\",\n                            value: subtitle,\n                            onChange: (e)=>setSubtitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            onClick: handleSave,\n                            type: \"default\",\n                            style: {\n                                margin: \"10px 0px 10px 0px\"\n                            },\n                            loading: loading,\n                            block: true,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            margin: \"40px 0px 0px 20px\"\n                        },\n                        children: (media === null || media === void 0 ? void 0 : media.selected) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, undefined) : fullWidthImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: fullWidthImage.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, undefined) : \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Customize, \"XhRGnBoGnIIoCNi0biVqqBNnWPU=\");\n_c = Customize;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customize);\nvar _c;\n$RefreshReg$(_c, \"Customize\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9wYWdlcy9hZG1pbi9jdXN0b21pemUuanM/Y2QwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW5wdXQsIEJ1dHRvbiwgSW1hZ2UsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcclxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbWVkaWFcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCBDdXN0b21pemUgPSAoKSA9PiB7XHJcbiAgLy8gY29udGV4dFxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VidGl0bGUsIHNldFN1YnRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsV2lkdGhJbWFnZSwgc2V0RnVsbFdpZHRoSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvaG9tZXBhZ2VcIiwge1xyXG4gICAgICAgIHBhZ2U6IFwiaG9tZXBhZ2VcIixcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBzdWJ0aXRsZSxcclxuICAgICAgICBmdWxsV2lkdGhJbWFnZTogbWVkaWE/LnNlbGVjdGVkPy5faWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOiA1MCwgbWFyZ2luTGVmdDogMTEwLCBtYXJnaW5SaWdodDogNTB9fT5cclxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgICA8aDE+Q3VzdG9taXplIGhvbWUgcGFnZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPlNldCBmdWxsIHdpZHRoIGltYWdlIHRpdGxlIGFuZCBzdWJ0aXRsZTwvcD5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8TWVkaWEgLz5cclxuXHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHggMHB4IDIwcHggMHB4XCIgfX1cclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIGl0IGEgdGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIGl0IGEgc3VidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VidGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMHB4IDEwcHggMHB4XCIgfX1cclxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI0MHB4IDBweCAwcHggMjBweFwiIH19PlxyXG4gICAgICAgICAgICB7bWVkaWE/LnNlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEwMCVcIiBzcmM9e21lZGlhPy5zZWxlY3RlZD8udXJsfSAvPlxyXG4gICAgICAgICAgICApIDogZnVsbFdpZHRoSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMTAwJVwiIHNyYz17ZnVsbFdpZHRoSW1hZ2UudXJsfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQWRtaW5MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiUm93IiwiQ29sIiwiSW5wdXQiLCJCdXR0b24iLCJJbWFnZSIsIkRpdmlkZXIiLCJNZWRpYSIsIk1lZGlhQ29udGV4dCIsImF4aW9zIiwidG9hc3QiLCJBZG1pbkxheW91dCIsIkN1c3RvbWl6ZSIsIm1lZGlhIiwic2V0TWVkaWEiLCJ0aXRsZSIsInNldFRpdGxlIiwic3VidGl0bGUiLCJzZXRTdWJ0aXRsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZnVsbFdpZHRoSW1hZ2UiLCJzZXRGdWxsV2lkdGhJbWFnZSIsImhhbmRsZVNhdmUiLCJkYXRhIiwicG9zdCIsInBhZ2UiLCJzZWxlY3RlZCIsIl9pZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJoMSIsInAiLCJtYXJnaW4iLCJzaXplIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJ0eXBlIiwiYmxvY2siLCJkaXYiLCJ3aWR0aCIsInNyYyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/customize.js\n"));

/***/ })

});