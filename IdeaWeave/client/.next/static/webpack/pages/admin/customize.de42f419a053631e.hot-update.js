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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/image */ \"./node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ \"./components/Media/index.js\");\n/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media */ \"./context/media.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Customize = ()=>{\n    var _media_selected;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_3__.MediaContext);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subtitle, setSubtitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullWidthImage, setFullWidthImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadHomepage();\n    }, []);\n    const loadHomepage = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/page/home\");\n            setTitle(data.title);\n            setSubtitle(data.subtitle);\n            setFullWidthImage(data.fullWidthImage);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleSave = async ()=>{\n        try {\n            var _media_selected;\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/page\", {\n                page: \"home\",\n                title,\n                subtitle,\n                fullWidthImage: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected._id\n            });\n            setLoading(false);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].succes;\n        } catch (err) {\n            console.log(err);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                marginTop: 50,\n                marginLeft: 110,\n                marginRight: 50\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Customize home page\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Set full width image title and subtitle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 18,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Media__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            style: {\n                                margin: \"20px 0px 20px 0px\"\n                            },\n                            size: \"large\",\n                            placeholder: \"Give it a title\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            size: \"large\",\n                            placeholder: \"Give it a subtitle\",\n                            value: subtitle,\n                            onChange: (e)=>setSubtitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            onClick: handleSave,\n                            type: \"default\",\n                            style: {\n                                margin: \"10px 0px 10px 0px\"\n                            },\n                            loading: loading,\n                            block: true,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            margin: \"40px 0px 0px 20px\"\n                        },\n                        children: (media === null || media === void 0 ? void 0 : media.selected) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: media === null || media === void 0 ? void 0 : (_media_selected = media.selected) === null || _media_selected === void 0 ? void 0 : _media_selected.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, undefined) : fullWidthImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            width: \"100%\",\n                            src: fullWidthImage.url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, undefined) : \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\customize.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Customize, \"mgJD/mQIzJQSxZLCMoYo8F8ylNQ=\");\n_c = Customize;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customize);\nvar _c;\n$RefreshReg$(_c, \"Customize\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0MsR0FBRyxFQUFFekMsa0JBQUFBLDZCQUFBQSxrQkFBQUEsTUFBT21CLFFBQVEsY0FBZm5CLHNDQUFBQSxnQkFBaUIwQyxHQUFHOzs7Ozt3Q0FDM0NsQywrQkFDRiw4REFBQ2hCLHVEQUFLQTs0QkFBQ2dELE9BQU07NEJBQU9DLEtBQUtqQyxlQUFla0MsR0FBRzs7Ozs7d0NBRTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Q7R0E1Rk0zQztLQUFBQTtBQThGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9jdXN0b21pemUuanM/Y2QwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0ICB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW5wdXQsIEJ1dHRvbiwgSW1hZ2UsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcclxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbWVkaWFcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCBDdXN0b21pemUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VidGl0bGUsIHNldFN1YnRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsV2lkdGhJbWFnZSwgc2V0RnVsbFdpZHRoSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkSG9tZXBhZ2UoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRIb21lcGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3BhZ2UvaG9tZVwiKTtcclxuICAgICAgc2V0VGl0bGUoZGF0YS50aXRsZSk7XHJcbiAgICAgIHNldFN1YnRpdGxlKGRhdGEuc3VidGl0bGUpO1xyXG4gICAgICBzZXRGdWxsV2lkdGhJbWFnZShkYXRhLmZ1bGxXaWR0aEltYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcGFnZVwiLCB7XHJcbiAgICAgICAgcGFnZTogXCJob21lXCIsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgc3VidGl0bGUsXHJcbiAgICAgICAgZnVsbFdpZHRoSW1hZ2U6IG1lZGlhPy5zZWxlY3RlZD8uX2lkLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW5Ub3A6IDUwLCBtYXJnaW5MZWZ0OiAxMTAsIG1hcmdpblJpZ2h0OiA1MH19PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICAgIDxoMT5DdXN0b21pemUgaG9tZSBwYWdlPC9oMT5cclxuICAgICAgICAgICAgPHA+U2V0IGZ1bGwgd2lkdGggaW1hZ2UgdGl0bGUgYW5kIHN1YnRpdGxlPC9wPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxNZWRpYSAvPlxyXG5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMjBweCAwcHggMjBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpdmUgaXQgYSB0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpdmUgaXQgYSBzdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJ0aXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwcHggMTBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjQwcHggMHB4IDBweCAyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHttZWRpYT8uc2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMTAwJVwiIHNyYz17bWVkaWE/LnNlbGVjdGVkPy51cmx9IC8+XHJcbiAgICAgICAgICAgICkgOiBmdWxsV2lkdGhJbWFnZSA/IChcclxuICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxMDAlXCIgc3JjPXtmdWxsV2lkdGhJbWFnZS51cmx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJSb3ciLCJDb2wiLCJJbnB1dCIsIkJ1dHRvbiIsIkltYWdlIiwiRGl2aWRlciIsIk1lZGlhIiwiTWVkaWFDb250ZXh0IiwiYXhpb3MiLCJ0b2FzdCIsIkFkbWluTGF5b3V0IiwiQ3VzdG9taXplIiwibWVkaWEiLCJzZXRNZWRpYSIsInRpdGxlIiwic2V0VGl0bGUiLCJzdWJ0aXRsZSIsInNldFN1YnRpdGxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmdWxsV2lkdGhJbWFnZSIsInNldEZ1bGxXaWR0aEltYWdlIiwibG9hZEhvbWVwYWdlIiwiZGF0YSIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTYXZlIiwicG9zdCIsInBhZ2UiLCJzZWxlY3RlZCIsIl9pZCIsInN1Y2NlcyIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3BhbiIsImgxIiwicCIsIm1hcmdpbiIsInNpemUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsInR5cGUiLCJibG9jayIsImRpdiIsIndpZHRoIiwic3JjIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/customize.js\n"));

/***/ })

});