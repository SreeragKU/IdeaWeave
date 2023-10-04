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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/list */ \"./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/EditOutlined */ \"./node_modules/@ant-design/icons/lib/icons/EditOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst { Content, Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nfunction Categories(param) {\n    let { children } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].useForm();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCategories();\n    }, []);\n    const getCategories = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/category\");\n            setCategories(data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const onFinish = async (values)=>{\n        //console.log(\"values =>\", values);\n        try {\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/category\", values);\n            console.log(data);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Category created successfully\");\n            setLoading(false);\n            form.resetFields([\n                \"name\"\n            ]);\n        } catch (error) {\n            console.log(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Category create failed\");\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    span: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Add new category\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onFinish: onFinish,\n                                form: form,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                                        name: \"name\",\n                                        style: {\n                                            marginBottom: \"16px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                className: \"site-form-item-icon\"\n                                            }, void 0, false, void 0, void 0),\n                                            placeholder: \"Provide a Category Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                        loading: loading,\n                                        type: \"primary\",\n                                        htmlType: \"submit\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        dataSource: categories,\n                        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.name\n                            }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\categories\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Categories, \"0DNGkxnnj5qBkGS9JGr1Zg+mK68=\", false, function() {\n    return [\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].useForm\n    ];\n});\n_c = Categories;\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9jYXRlZ29yaWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWjtBQUNtQztBQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWO0FBQ3ZCO0FBQ1c7QUFFckMsTUFBTSxFQUFFYSxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHWix1REFBTUE7QUFFbEIsU0FBU2EsV0FBVyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsS0FBSyxHQUFHZiw2REFBWTtJQUMzQixNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUd0QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNOc0I7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQSxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUcsTUFBTWIsaURBQVMsQ0FBQztZQUMvQlcsY0FBY0U7UUFDaEIsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLE1BQU1FLFdBQVcsT0FBT0M7UUFDcEIsbUNBQW1DO1FBQ25DLElBQUc7WUFDRFgsV0FBVztZQUNYLE1BQU0sRUFBQ00sSUFBSSxFQUFDLEdBQUcsTUFBTWIsa0RBQVUsQ0FBQyxhQUFha0I7WUFDN0NGLFFBQVFJLEdBQUcsQ0FBQ1A7WUFDWlosa0RBQUtBLENBQUNvQixPQUFPLENBQUM7WUFDZGQsV0FBVztZQUNYQyxLQUFLYyxXQUFXLENBQUM7Z0JBQUM7YUFBTztRQUMzQixFQUFFLE9BQU1QLE9BQU07WUFDWkMsUUFBUUksR0FBRyxDQUFDTDtZQUNaZCxrREFBS0EsQ0FBQ2MsS0FBSyxDQUFDO1lBQ1pSLFdBQVc7UUFDYjtJQUNKO0lBQ0YscUJBQ0UsOERBQUNmLHNFQUFXQTtrQkFDViw0RUFBQ0csb0RBQUdBOzs4QkFFRiw4REFBQ0Msb0RBQUdBO29CQUFDMkIsTUFBTTs4QkFDVCw0RUFBQ3JCOzswQ0FDQyw4REFBQ3NCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNoQyxxREFBSUE7Z0NBQUN3QixVQUFVQTtnQ0FBVVQsTUFBUUE7O2tEQUNoQyw4REFBQ2YsMERBQVM7d0NBQUNrQyxNQUFLO3dDQUFPQyxPQUFPOzRDQUFFQyxjQUFjO3dDQUFPO2tEQUNuRCw0RUFBQ25DLHNEQUFLQTs0Q0FDSm9DLHNCQUFRLDhEQUFDL0IsaUZBQVlBO2dEQUFDZ0MsV0FBVTs7NENBQ2hDQyxhQUFZOzs7Ozs7Ozs7OztrREFHaEIsOERBQUNuQyx5REFBTUE7d0NBQUNTLFNBQVNBO3dDQUFTMkIsTUFBSzt3Q0FBVUMsVUFBUztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWpFLDhEQUFDdEMsb0RBQUdBOzhCQUNKLDRFQUFDRSxzREFBSUE7d0JBQ0hxQyxZQUFZekI7d0JBQ1owQixZQUFZLENBQUNDLHFCQUFTLDhEQUFDWjswQ0FBR1ksS0FBS1YsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0M7R0FqRXdCdkI7O1FBRUxYLDZEQUFZZ0I7OztLQUZQTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9jYXRlZ29yaWVzL2luZGV4LmpzPzE1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5MYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBFZGl0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXRlZ29yaWVzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJy9jYXRlZ29yeScpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkZpbmlzaCA9IGFzeW5jICh2YWx1ZXMpID0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ2YWx1ZXMgPT5cIiwgdmFsdWVzKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2NhdGVnb3J5JywgdmFsdWVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcygnQ2F0ZWdvcnkgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZm9ybS5yZXNldEZpZWxkcyhbJ25hbWUnXSk7XHJcbiAgICAgICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIkNhdGVnb3J5IGNyZWF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICB7LyogRmlyc3QgY29sdW1uICovfVxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5DYXRlZ29yaWVzPC9oMT5cclxuICAgICAgICAgICAgPHA+QWRkIG5ldyBjYXRlZ29yeTwvcD5cclxuICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofSBmb3JtID0ge2Zvcm19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5hbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17PEVkaXRPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvdmlkZSBhIENhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIHsvKiBTZWNvbmQgY29sdW1uICovfVxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGRhdGFTb3VyY2U9e2NhdGVnb3JpZXN9IC8vIE5vdGUgdGhlIGNvcnJlY3RlZCBwcm9wIG5hbWU6IGRhdGFTb3VyY2VcclxuICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiA8cD57aXRlbS5uYW1lfTwvcD59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGF5b3V0IiwiQWRtaW5MYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJMaXN0IiwiRWRpdE91dGxpbmVkIiwiYXhpb3MiLCJ0b2FzdCIsIkNvbnRlbnQiLCJTaWRlciIsIkNhdGVnb3JpZXMiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZm9ybSIsInVzZUZvcm0iLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJkYXRhIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJwb3N0IiwibG9nIiwic3VjY2VzcyIsInJlc2V0RmllbGRzIiwic3BhbiIsImgxIiwicCIsIkl0ZW0iLCJuYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJwcmVmaXgiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJodG1sVHlwZSIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/categories/index.js\n"));

/***/ })

});