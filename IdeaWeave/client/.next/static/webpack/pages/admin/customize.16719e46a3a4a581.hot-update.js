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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/image */ \"./node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ \"./components/Media/index.js\");\n/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media */ \"./context/media.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Customize = ()=>{\n    var _media_selected;\n    _s();\n    // context\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_3__.MediaContext);\n    // state\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subtitle, setSubtitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullWidthImage, setFullWidthImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSave = async ()=>{\n        try {\n            var _media_selected;\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/homepage\", {\n                title,\n                subtitle,\n                fullWidthImage: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected._id\n            });\n            setLoading(false);\n        } catch (err) {\n            console.log(err);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                marginTop: 50,\n                ma\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Customize home page\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Set full width image title and subtitle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 18,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Media__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            style: {\n                                margin: \"20px 0px 20px 0px\"\n                            },\n                            size: \"large\",\n                            placeholder: \"Give it a title\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            size: \"large\",\n                            placeholder: \"Give it a subtitle\",\n                            value: subtitle,\n                            onChange: (e)=>setSubtitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            onClick: handleSave,\n                            type: \"default\",\n                            style: {\n                                margin: \"10px 0px 10px 0px\"\n                            },\n                            loading: loading,\n                            block: true,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            margin: \"40px 0px 0px 20px\"\n                        },\n                        children: (media === null || media === void 0 ? void 0 : media.selected) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, undefined) : fullWidthImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: fullWidthImage.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, undefined) : \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Customize, \"XhRGnBoGnIIoCNi0biVqqBNnWPU=\");\n_c = Customize;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customize);\nvar _c;\n$RefreshReg$(_c, \"Customize\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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emUuanM/Y2QwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW5wdXQsIEJ1dHRvbiwgSW1hZ2UsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcclxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbWVkaWFcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCBDdXN0b21pemUgPSAoKSA9PiB7XHJcbiAgLy8gY29udGV4dFxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VidGl0bGUsIHNldFN1YnRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsV2lkdGhJbWFnZSwgc2V0RnVsbFdpZHRoSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvaG9tZXBhZ2VcIiwge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHN1YnRpdGxlLFxyXG4gICAgICAgIGZ1bGxXaWR0aEltYWdlOiBtZWRpYT8uc2VsZWN0ZWQ/Ll9pZCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW5Ub3A6IDUwLCBtYX19PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICAgIDxoMT5DdXN0b21pemUgaG9tZSBwYWdlPC9oMT5cclxuICAgICAgICAgICAgPHA+U2V0IGZ1bGwgd2lkdGggaW1hZ2UgdGl0bGUgYW5kIHN1YnRpdGxlPC9wPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxNZWRpYSAvPlxyXG5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMjBweCAwcHggMjBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpdmUgaXQgYSB0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpdmUgaXQgYSBzdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJ0aXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwcHggMTBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjQwcHggMHB4IDBweCAyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHttZWRpYT8uc2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMTAwJVwiIHNyYz17bWVkaWE/LnNlbGVjdGVkPy51cmx9IC8+XHJcbiAgICAgICAgICAgICkgOiBmdWxsV2lkdGhJbWFnZSA/IChcclxuICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxMDAlXCIgc3JjPXtmdWxsV2lkdGhJbWFnZS51cmx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJSb3ciLCJDb2wiLCJJbnB1dCIsIkJ1dHRvbiIsIkltYWdlIiwiRGl2aWRlciIsIk1lZGlhIiwiTWVkaWFDb250ZXh0IiwiYXhpb3MiLCJ0b2FzdCIsIkFkbWluTGF5b3V0IiwiQ3VzdG9taXplIiwibWVkaWEiLCJzZXRNZWRpYSIsInRpdGxlIiwic2V0VGl0bGUiLCJzdWJ0aXRsZSIsInNldFN1YnRpdGxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmdWxsV2lkdGhJbWFnZSIsInNldEZ1bGxXaWR0aEltYWdlIiwiaGFuZGxlU2F2ZSIsImRhdGEiLCJwb3N0Iiwic2VsZWN0ZWQiLCJfaWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJtYSIsInNwYW4iLCJoMSIsInAiLCJtYXJnaW4iLCJzaXplIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJ0eXBlIiwiYmxvY2siLCJkaXYiLCJ3aWR0aCIsInNyYyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/customize.js\n"));

/***/ })

});