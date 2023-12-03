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

/***/ "./components/pages/FullWidthImage.js":
/*!********************************************!*\
  !*** ./components/pages/FullWidthImage.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SendOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SendOutlined.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FullWidthImage = (param)=>{\n    let { auth, title, subtitle, fullWidthImage = \"/images/image3.jpg\" } = param;\n    _s();\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const textStrokeColor = theme === \"light\" ? \"#ffffff\" : \"#000\";\n    const getRedirectLink = ()=>{\n        if ((auth === null || auth === void 0 ? void 0 : auth.role) === \"Admin\") {\n            return \"/admin\";\n        } else if ((auth === null || auth === void 0 ? void 0 : auth.role) === \"Author\") {\n            return \"/author\";\n        } else if ((auth === null || auth === void 0 ? void 0 : auth.role) === \"Reader\") {\n            return \"/reader\";\n        } else {\n            return \"/signin\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&family=Poppins:wght@100;300;400;800&display=swap\"\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    width: \"100%\",\n                    height: \"500px\",\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fullWidthImagePath,\n                        alt: \"CMS\",\n                        style: {\n                            width: \"100%\",\n                            height: \"100%\",\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"absolute\",\n                            top: \"50%\",\n                            left: \"50%\",\n                            transform: \"translate(-50%, -50%)\",\n                            textAlign: \"center\",\n                            fontSize: \"85px\",\n                            textShadow: \"2px 2px 4px #000000\",\n                            padding: \"50px\",\n                            borderRadius: \"500px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    WebkitTextStroke: \"3px \".concat(textStrokeColor),\n                                    textStroke: \"3px \".concat(textStrokeColor),\n                                    fontFamily: \"'Just Me Again Down Here', sans-serif\",\n                                    margin: 0\n                                },\n                                children: \"IdeaWeave\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    WebkitTextStroke: \"0.5px \".concat(textStrokeColor),\n                                    textStroke: \"0.5px \".concat(textStrokeColor),\n                                    fontSize: \"25px\",\n                                    marginTop: \"-60px\"\n                                },\n                                children: \"Content Management System\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: getRedirectLink(),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    type: \"primary\",\n                                    size: \"large\",\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, void 0, void 0),\n                                    children: \"Explore\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\pages\\\\FullWidthImage.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(FullWidthImage, \"B5W6FGuldjLKnqYlb61fpP4x/Vo=\");\n_c = FullWidthImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullWidthImage);\nvar _c;\n$RefreshReg$(_c, \"FullWidthImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL0Z1bGxXaWR0aEltYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNtQjtBQUNwQjtBQUNNO0FBQ2dCO0FBRW5ELE1BQU1LLGlCQUFpQjtRQUFDLEVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGlCQUFpQixvQkFBb0IsRUFBQzs7SUFDcEYsTUFBTSxDQUFDQyxNQUFNLEdBQUdQLGlEQUFVQSxDQUFDQyx3REFBWUE7SUFFdkMsTUFBTU8sa0JBQWtCRCxVQUFVLFVBQVUsWUFBWTtJQUV4RCxNQUFNRSxrQkFBa0I7UUFDdEIsSUFBSU4sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNTyxJQUFJLE1BQUssU0FBUztZQUMxQixPQUFPO1FBQ1QsT0FBTyxJQUFJUCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1PLElBQUksTUFBSyxVQUFVO1lBQ2xDLE9BQU87UUFDVCxPQUFPLElBQUlQLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTU8sSUFBSSxNQUFLLFVBQVU7WUFDbEMsT0FBTztRQUNULE9BQU07WUFDSixPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLEtBQUk7Z0JBQ0pDLE1BQUs7Ozs7OzswQkFHUCw4REFBQ0M7Z0JBQ0NDLE9BQU87b0JBQ0xDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFVBQVU7Z0JBQ1o7O2tDQUVBLDhEQUFDQzt3QkFDQ0MsS0FBS0M7d0JBQ0xDLEtBQUk7d0JBQ0pSLE9BQU87NEJBQ0xFLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JNLFdBQVc7d0JBQ2I7Ozs7OztrQ0FHRiw4REFBQ1Y7d0JBQ0NDLE9BQU87NEJBQ0xDLFVBQVU7NEJBQ1ZTLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLFdBQVc7NEJBQ1hDLFdBQVc7NEJBQ1hDLFVBQVU7NEJBQ1ZDLFlBQVk7NEJBQ1pDLFNBQVM7NEJBQ1RDLGNBQWM7d0JBQ2hCOzswQ0FFQSw4REFBQ0M7Z0NBQ0NsQixPQUFPO29DQUNMbUIsa0JBQWtCLE9BQXVCLE9BQWhCMUI7b0NBQ3pCMkIsWUFBWSxPQUF1QixPQUFoQjNCO29DQUNuQjRCLFlBQVk7b0NBQ1pDLFFBQVE7Z0NBQ1Y7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ0M7Z0NBQ0N2QixPQUFPO29DQUNMbUIsa0JBQWtCLFNBQXlCLE9BQWhCMUI7b0NBQzNCMkIsWUFBWSxTQUF5QixPQUFoQjNCO29DQUNyQnFCLFVBQVU7b0NBQ1ZVLFdBQVc7Z0NBQ2I7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ3hDLGtEQUFJQTtnQ0FBQ2MsTUFBTUo7MENBQ1YsNEVBQUNaLHVEQUFNQTtvQ0FBQzJDLE1BQUs7b0NBQVVDLE1BQUs7b0NBQVFDLG9CQUFNLDhEQUFDNUMsZ0ZBQVlBOzhDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhFO0dBcEZNSTtLQUFBQTtBQXNGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2VzL0Z1bGxXaWR0aEltYWdlLmpzPzdmNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgU2VuZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC90aGVtZVwiO1xyXG5cclxuY29uc3QgRnVsbFdpZHRoSW1hZ2UgPSAoe2F1dGgsIHRpdGxlLCBzdWJ0aXRsZSwgZnVsbFdpZHRoSW1hZ2UgPSBcIi9pbWFnZXMvaW1hZ2UzLmpwZ1wifSkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHRleHRTdHJva2VDb2xvciA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBcIiNmZmZmZmZcIiA6IFwiIzAwMFwiO1xyXG5cclxuICBjb25zdCBnZXRSZWRpcmVjdExpbmsgPSAoKSA9PiB7XHJcbiAgICBpZiAoYXV0aD8ucm9sZSA9PT0gXCJBZG1pblwiKSB7XHJcbiAgICAgIHJldHVybiBcIi9hZG1pblwiO1xyXG4gICAgfSBlbHNlIGlmIChhdXRoPy5yb2xlID09PSBcIkF1dGhvclwiKSB7XHJcbiAgICAgIHJldHVybiBcIi9hdXRob3JcIjtcclxuICAgIH0gZWxzZSBpZiAoYXV0aD8ucm9sZSA9PT0gXCJSZWFkZXJcIikge1xyXG4gICAgICByZXR1cm4gXCIvcmVhZGVyXCI7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIi9zaWduaW5cIjsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SnVzdCtNZStBZ2FpbitEb3duK0hlcmUmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MzAwOzQwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZnVsbFdpZHRoSW1hZ2VQYXRofVxyXG4gICAgICAgICAgYWx0PVwiQ01TXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjg1cHhcIixcclxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCIycHggMnB4IDRweCAjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgV2Via2l0VGV4dFN0cm9rZTogYDNweCAke3RleHRTdHJva2VDb2xvcn1gLFxyXG4gICAgICAgICAgICAgIHRleHRTdHJva2U6IGAzcHggJHt0ZXh0U3Ryb2tlQ29sb3J9YCxcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIidKdXN0IE1lIEFnYWluIERvd24gSGVyZScsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIElkZWFXZWF2ZVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgV2Via2l0VGV4dFN0cm9rZTogYDAuNXB4ICR7dGV4dFN0cm9rZUNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgdGV4dFN0cm9rZTogYDAuNXB4ICR7dGV4dFN0cm9rZUNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCItNjBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb250ZW50IE1hbmFnZW1lbnQgU3lzdGVtXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtnZXRSZWRpcmVjdExpbmsoKX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiBpY29uPXs8U2VuZE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICBFeHBsb3JlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdWxsV2lkdGhJbWFnZTtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlNlbmRPdXRsaW5lZCIsIkxpbmsiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiRnVsbFdpZHRoSW1hZ2UiLCJhdXRoIiwidGl0bGUiLCJzdWJ0aXRsZSIsImZ1bGxXaWR0aEltYWdlIiwidGhlbWUiLCJ0ZXh0U3Ryb2tlQ29sb3IiLCJnZXRSZWRpcmVjdExpbmsiLCJyb2xlIiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImltZyIsInNyYyIsImZ1bGxXaWR0aEltYWdlUGF0aCIsImFsdCIsIm9iamVjdEZpdCIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInRleHRTaGFkb3ciLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaDEiLCJXZWJraXRUZXh0U3Ryb2tlIiwidGV4dFN0cm9rZSIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJwIiwibWFyZ2luVG9wIiwidHlwZSIsInNpemUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pages/FullWidthImage.js\n"));

/***/ })

});