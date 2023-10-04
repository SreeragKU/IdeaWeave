"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserAddOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserAddOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserAddOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LogoutOutlined */ \"./node_modules/@ant-design/icons/lib/icons/LogoutOutlined.js\");\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst { SubMenu } = antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst TopNav = ()=>{\n    var _auth_user;\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\");\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleClick = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const signOut = ()=>{\n        //remove from local storage\n        localStorage.removeItem(\"auth\");\n        //remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        //redirect\n        router.push(\"/signin\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        onClick: handleClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"IdeaWeave\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, \"ideaweave\", false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            (auth === null || auth === void 0 ? void 0 : auth.user) === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserAddOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, undefined)\n                    }, \"signup\", false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signin\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined)\n                    }, \"signin\", false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true),\n            (auth === null || auth === void 0 ? void 0 : auth.user) !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                        title: (auth === null || auth === void 0 ? void 0 : (_auth_user = auth.user) === null || _auth_user === void 0 ? void 0 : _auth_user.name) || \"Dashbo\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].ItemGroup, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"gray\"\n                                },\n                                children: \"Management\"\n                            }, void 0, false, void 0, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/admin\",\n                                    children: \"Admin\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, \"setting:1\", false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, \"SubMenu\", false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                        onClick: ()=>signOut(),\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    }, \"signout\", false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined)\n            }, \"toggleTheme\", false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopNav, \"OEDDFzC8drAttd+T/UngpOFYbK8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2pCO0FBT0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNhO0FBQ1g7QUFDaUI7QUFDTjtBQUV4QyxNQUFNLEVBQUVZLE9BQU8sRUFBRSxHQUFHVixxREFBSUE7QUFFeEIsTUFBTVcsU0FBUztRQThDRUM7O0lBN0NmLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxNQUFNRyxRQUFRLEdBQUdoQixpREFBVUEsQ0FBQ1Msc0RBQVdBO0lBQzlDLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUV4QixNQUFNUSxjQUFjLENBQUNDO1FBQ25CQyxRQUFRQyxHQUFHLENBQUMsVUFBVUY7UUFDdEJKLFdBQVdJLEVBQUVHLEdBQUc7SUFDbEI7SUFFQSxNQUFNQyxVQUFVO1FBQ2QsMkJBQTJCO1FBQzNCQyxhQUFhQyxVQUFVLENBQUM7UUFDeEIscUJBQXFCO1FBQ3JCVCxRQUFRO1lBQ05VLE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0EsVUFBVTtRQUNWVixPQUFPVyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDM0IscURBQUlBO1FBQ0g0QixTQUFTWDtRQUNUWSxjQUFjO1lBQUNoQjtTQUFRO1FBQ3ZCaUIsTUFBSztRQUNMQyxPQUFNOzswQkFFTiw4REFBQy9CLDBEQUFTO2dCQUFpQmlDLG9CQUFNLDhEQUFDaEMsZ0ZBQVlBOzBCQUM1Qyw0RUFBQ00sa0RBQUlBO29CQUFDMkIsTUFBSzs4QkFBSTs7Ozs7O2VBREY7Ozs7O1lBR2R0QixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1hLElBQUksTUFBSyxzQkFDVjs7a0NBQ0UsOERBQUN6QiwwREFBUzt3QkFBQ21DLE9BQU87NEJBQUNDLFlBQVk7d0JBQU07d0JBQWdCSCxvQkFBTSw4REFBQzlCLG1GQUFlQTtrQ0FDekUsNEVBQUNJLGtEQUFJQTs0QkFBQzJCLE1BQUs7c0NBQVU7Ozs7Ozt1QkFEcUI7Ozs7O2tDQUc1Qyw4REFBQ2xDLDBEQUFTO3dCQUFjaUMsb0JBQU0sOERBQUM3QixnRkFBWUE7a0NBQ3pDLDRFQUFDRyxrREFBSUE7NEJBQUMyQixNQUFLO3NDQUFVOzs7Ozs7dUJBRFI7Ozs7Ozs7WUFLdEJ0QixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1hLElBQUksTUFBSyxzQkFBUzs7a0NBQ3ZCLDhEQUFDZjt3QkFFQ3VCLG9CQUFNLDhEQUFDL0Isb0ZBQWVBO3dCQUN0Qm1DLE9BQU96QixDQUFBQSxpQkFBQUEsNEJBQUFBLGFBQUFBLEtBQU1hLElBQUksY0FBVmIsaUNBQUFBLFdBQVkwQixJQUFJLEtBQUk7d0JBQzNCSCxPQUFPOzRCQUFFQyxZQUFZO3dCQUFPO2tDQUU1Qiw0RUFBQ3BDLCtEQUFjOzRCQUNicUMscUJBQU8sOERBQUNHO2dDQUFLTCxPQUFPO29DQUFFTSxPQUFPO2dDQUFPOzBDQUFHOztzQ0FFdkMsNEVBQUN6QywwREFBUzswQ0FDUiw0RUFBQ08sa0RBQUlBO29DQUFDMkIsTUFBSzs4Q0FBUzs7Ozs7OytCQURQOzs7Ozs7Ozs7O3VCQVJiOzs7OztrQ0FhTiw4REFBQ2xDLDBEQUFTO3dCQUNSNEIsU0FBUyxJQUFNTjt3QkFFZlcsb0JBQU0sOERBQUM1QixtRkFBY0E7a0NBRXJCLDRFQUFDcUM7c0NBQUU7Ozs7Ozt1QkFIQzs7Ozs7OzswQkFNUiw4REFBQzFDLDBEQUFTOzBCQUNSLDRFQUFDTSxvREFBV0E7Ozs7O2VBREM7Ozs7Ozs7Ozs7O0FBS3JCO0dBdEVNSzs7UUFHV0Ysa0RBQVNBOzs7S0FIcEJFO0FBd0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTWFpbE91dGxpbmVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxuICBVc2VyQWRkT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIExvZ291dE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgVG9nZ2xlVGhlbWUgZnJvbSBcIi4vVG9nZ2xlVGhlbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICAvL3JlbW92ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIC8vcmVtb3ZlIGZyb20gY29udGV4dFxyXG4gICAgc2V0QXV0aCh7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICAvL3JlZGlyZWN0XHJcbiAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cclxuICAgICAgbW9kZT1cImhvcml6b250YWxcIlxyXG4gICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cImlkZWF3ZWF2ZVwiIGljb249ezxNYWlsT3V0bGluZWQgLz59PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SWRlYVdlYXZlPC9MaW5rPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAge2F1dGg/LnVzZXIgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcImF1dG9cIn19IGtleT1cInNpZ251cFwiIGljb249ezxVc2VyQWRkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWduIFVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2lnbmluXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAge2F1dGg/LnVzZXIgIT09IG51bGwgJiYgKDw+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT1cIlN1Yk1lbnVcIlxyXG4gICAgICAgICAgaWNvbj17PFNldHRpbmdPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIHRpdGxlPXthdXRoPy51c2VyPy5uYW1lIHx8IFwiRGFzaGJvXCJ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cFxyXG4gICAgICAgICAgICB0aXRsZT17PHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiIH19Pk1hbmFnZW1lbnQ8L3NwYW4+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNldHRpbmc6MVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5BZG1pbjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgICBrZXk9XCJzaWdub3V0XCJcclxuICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YT5TaWduIE91dDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC8+KX1cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ0b2dnbGVUaGVtZVwiPlxyXG4gICAgICAgIDxUb2dnbGVUaGVtZSAvPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTWVudSIsIk1haWxPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkxvZ291dE91dGxpbmVkIiwiVG9nZ2xlVGhlbWUiLCJMaW5rIiwiQXV0aENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJTdWJNZW51IiwiVG9wTmF2IiwiYXV0aCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0QXV0aCIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJzaWduT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJ0b2tlbiIsInB1c2giLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsInRoZW1lIiwiSXRlbSIsImljb24iLCJocmVmIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwidGl0bGUiLCJuYW1lIiwiSXRlbUdyb3VwIiwic3BhbiIsImNvbG9yIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});