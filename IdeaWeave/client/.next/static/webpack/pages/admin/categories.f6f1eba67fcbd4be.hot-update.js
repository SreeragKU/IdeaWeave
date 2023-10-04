"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/categories",{

/***/ "./pages/admin/categories/index.js":
/*!*****************************************!*\
  !*** ./pages/admin/categories/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/EditOutlined */ \"./node_modules/@ant-design/icons/lib/icons/EditOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst { Content, Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nfunction Categories(param) {\n    let { children } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].useForm();\n    const onFinish = async (values)=>{\n        //console.log(\"values =>\", values);\n        try {\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/category\", values);\n            console.log(data);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Category created successfully\");\n            setLoading(false);\n            form.resetFields(\"name\");\n        } catch (error) {\n            console.log(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Category create failed\");\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Add new category\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onFinish: onFinish,\n                                form: form,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                                        name: \"name\",\n                                        style: {\n                                            marginBottom: \"16px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                className: \"site-form-item-icon\"\n                                            }, void 0, false, void 0, void 0),\n                                            placeholder: \"Provide a Category Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                        loading: loading,\n                                        type: \"primary\",\n                                        htmlType: \"submit\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Show category list\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Categories, \"FCxCdtaVHl9b+6PEJSxL3SOPlbc=\", false, function() {\n    return [\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].useForm\n    ];\n});\n_c = Categories;\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9jYXRlZ29yaWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNEO0FBQ21DO0FBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKO0FBQ3ZCO0FBQ1c7QUFFckMsTUFBTSxFQUFFVyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHWCx1REFBTUE7QUFFbEIsU0FBU1ksV0FBVyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDaUIsS0FBSyxHQUFHZCw2REFBWTtJQUMzQixNQUFNZ0IsV0FBVyxPQUFPQztRQUNwQixtQ0FBbUM7UUFDbkMsSUFBRztZQUNESixXQUFXO1lBQ1gsTUFBTSxFQUFDSyxJQUFJLEVBQUMsR0FBRyxNQUFNWixrREFBVSxDQUFDLGFBQWFXO1lBQzdDRyxRQUFRQyxHQUFHLENBQUNIO1lBQ1pYLGtEQUFLQSxDQUFDZSxPQUFPLENBQUM7WUFDZFQsV0FBVztZQUNYQyxLQUFLUyxXQUFXLENBQUM7UUFDbkIsRUFBRSxPQUFNQyxPQUFNO1lBQ1pKLFFBQVFDLEdBQUcsQ0FBQ0c7WUFDWmpCLGtEQUFLQSxDQUFDaUIsS0FBSyxDQUFDO1lBQ1pYLFdBQVc7UUFDYjtJQUNKO0lBQ0YscUJBQ0UsOERBQUNkLHNFQUFXQTtrQkFDViw0RUFBQ0csb0RBQUdBOzs4QkFFRiw4REFBQ0Msb0RBQUdBO29CQUFDc0IsTUFBTTs4QkFDVCw0RUFBQ2pCOzswQ0FDQyw4REFBQ2tCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUMzQixxREFBSUE7Z0NBQUNnQixVQUFVQTtnQ0FBVUYsTUFBUUE7O2tEQUNoQyw4REFBQ2QsMERBQVM7d0NBQUM2QixNQUFLO3dDQUFPQyxPQUFPOzRDQUFFQyxjQUFjO3dDQUFPO2tEQUNuRCw0RUFBQzlCLHNEQUFLQTs0Q0FDSitCLHNCQUFRLDhEQUFDM0IsaUZBQVlBO2dEQUFDNEIsV0FBVTs7NENBQ2hDQyxhQUFZOzs7Ozs7Ozs7OztrREFHaEIsOERBQUM5Qix5REFBTUE7d0NBQUNRLFNBQVNBO3dDQUFTdUIsTUFBSzt3Q0FBVUMsVUFBUztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWpFLDhEQUFDakMsb0RBQUdBOzhCQUNGLDRFQUFDd0I7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQS9Dd0JqQjs7UUFFTFYsNkRBQVllOzs7S0FGUEwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2F0ZWdvcmllcy9pbmRleC5qcz8xNTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEVkaXRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcclxuXHJcbmNvbnN0IHsgQ29udGVudCwgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXMoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICAgIGNvbnN0IG9uRmluaXNoID0gYXN5bmMgKHZhbHVlcykgPT57XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHVlcyA9PlwiLCB2YWx1ZXMpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KCcvY2F0ZWdvcnknLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdDYXRlZ29yeSBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCduYW1lJyk7XHJcbiAgICAgICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIkNhdGVnb3J5IGNyZWF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICB7LyogRmlyc3QgY29sdW1uICovfVxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5DYXRlZ29yaWVzPC9oMT5cclxuICAgICAgICAgICAgPHA+QWRkIG5ldyBjYXRlZ29yeTwvcD5cclxuICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofSBmb3JtID0ge2Zvcm19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5hbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17PEVkaXRPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvdmlkZSBhIENhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIHsvKiBTZWNvbmQgY29sdW1uICovfVxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8cD4gU2hvdyBjYXRlZ29yeSBsaXN0PC9wPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQWRtaW5MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJBZG1pbkxheW91dCIsIkZvcm0iLCJJbnB1dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIkVkaXRPdXRsaW5lZCIsImF4aW9zIiwidG9hc3QiLCJDb250ZW50IiwiU2lkZXIiLCJDYXRlZ29yaWVzIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZvcm0iLCJ1c2VGb3JtIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJkYXRhIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwicmVzZXRGaWVsZHMiLCJlcnJvciIsInNwYW4iLCJoMSIsInAiLCJJdGVtIiwibmFtZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicHJlZml4IiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiaHRtbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/categories/index.js\n"));

/***/ })

});