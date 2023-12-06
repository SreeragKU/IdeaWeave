"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reader",{

/***/ "./components/nav/ReaderNav.js":
/*!*************************************!*\
  !*** ./components/nav/ReaderNav.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CameraOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CameraOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_ContainerFilled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ContainerFilled */ \"./node_modules/@ant-design/icons/lib/icons/ContainerFilled.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CommentOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CommentOutlined.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { SubMenu } = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst { Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst ReaderNav = ()=>{\n    var _auth_user, _auth_user1, _auth_user2, _auth_user3;\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeSubMenu, setActiveSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleResize = ()=>{\n        setCollapsed(window.innerWidth < 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrent(window.location.pathname);\n        const currentPathSegments = window.location.pathname.split(\"/\");\n        if (currentPathSegments.length >= 3) {\n            setActiveSubMenu(\"/\".concat(currentPathSegments[1]));\n        } else {\n            setActiveSubMenu(\"\");\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResize();\n    }, []);\n    const customStyles = {\n        sider: {\n            width: collapsed ? 50 : 100,\n            height: \"100vh\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)\",\n            overflow: \"hidden\",\n            paddingTop: \"64px\"\n        },\n        fixedSider: {\n            position: \"fixed\",\n            top: 0,\n            left: 0,\n            height: \"100vh\",\n            zIndex: 1000,\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            boxShadow: \"0 2px 8px rgba(0, 0, 0, 0.1)\"\n        },\n        menu: {\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            height: \"calc(100% - 64px)\",\n            overflowY: \"auto\",\n            overflowX: \"hidden\",\n            scrollbarWidth: \"thin\",\n            WebkitOverflowScrolling: \"touch\"\n        },\n        item: {\n            background: \"transparent\",\n            transition: \"background 0.3s\"\n        },\n        itemHover: {\n            background: theme === \"dark\" ? \"#004080\" : \"#4da1ff\"\n        },\n        text: {\n            color: theme === \"dark\" ? \"#fff\" : \"#000\"\n        },\n        activeItem: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\"\n        },\n        activeSubMenu: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s\"\n        },\n        subMenu: {\n            width: collapsed ? \"auto\" : \"100%\"\n        },\n        subMenuItem: {\n            width: \"100%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        collapsed: collapsed,\n        onCollapse: ()=>setCollapsed(!collapsed),\n        style: {\n            ...customStyles.sider,\n            ...customStyles.fixedSider\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            defaultOpenKeys: [\n                \"2\",\n                \"6\",\n                \"10\"\n            ],\n            mode: \"inline\",\n            inlineCollapsed: collapsed,\n            selectedKeys: [\n                current\n            ],\n            style: customStyles.menu,\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader\" ? \"active\" : \"\",\n                    style: current === \"/reader\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_ContainerFilled__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/library\" ? \"active\" : \"\",\n                    style: current === \"/reader/library\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/library\",\n                        children: \"Library\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/library\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/comments\" ? \"active\" : \"\",\n                    style: current === \"/reader/comments\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/comments\",\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/comments\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                    title: \"Media\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                            className: current === \"/reader/media/library\" ? \"active\" : \"\",\n                            style: current === \"/reader/media/library\" ? customStyles.activeItem : customStyles.item,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/reader/media/library\",\n                                children: \"Media Library\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                                lineNumber: 162,\n                                columnNumber: 13\n                            }, undefined)\n                        }, \"/reader/media/library\", false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                            className: current === \"/reader/media/new\" ? \"active\" : \"\",\n                            style: current === \"/reader/media/new\" ? customStyles.activeItem : customStyles.item,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/reader/media/new\",\n                                children: \"Add New Media\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                                lineNumber: 173,\n                                columnNumber: 13\n                            }, undefined)\n                        }, \"/reader/media/new\", false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                            lineNumber: 164,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, \"6\", true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user = auth.user) === null || _auth_user === void 0 ? void 0 : _auth_user._id) ? \"active\" : \"\",\n                    style: current === \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user1 = auth.user) === null || _auth_user1 === void 0 ? void 0 : _auth_user1._id) ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user2 = auth.user) === null || _auth_user2 === void 0 ? void 0 : _auth_user2._id),\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 187,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user3 = auth.user) === null || _auth_user3 === void 0 ? void 0 : _auth_user3._id), false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReaderNav, \"4OAn6fNAKaBCBgoJYitrhJ6K6yo=\");\n_c = ReaderNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReaderNav);\nvar _c;\n$RefreshReg$(_c, \"ReaderNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0NBVU4sOERBQUN0RSwwREFBUzs0QkFFUnFFLFdBQVdyRCxZQUFZLHNCQUFzQixXQUFXOzRCQUN4RDhDLE9BQ0U5QyxZQUFZLHNCQUNSa0IsYUFBYXVCLFVBQVUsR0FDdkJ2QixhQUFhbUIsSUFBSTtzQ0FHdkIsNEVBQUNuRCxrREFBSUE7Z0NBQUNvRSxNQUFLOzBDQUFvQjs7Ozs7OzJCQVIzQjs7Ozs7O21CQWJLOzs7Ozs4QkF5QmIsOERBQUN0RSwwREFBUztvQkFFUm9FLG9CQUFNLDhEQUFDNUQsaUZBQVlBO29CQUNuQjZELFdBQVdyRCxZQUFZLFdBQTJCLE9BQWhCRCxpQkFBQUEsNEJBQUFBLGFBQUFBLEtBQU15RCxJQUFJLGNBQVZ6RCxpQ0FBQUEsV0FBWTBELEdBQUcsSUFBSyxXQUFXO29CQUNqRVgsT0FDRTlDLFlBQVksV0FBMkIsT0FBaEJELGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTXlELElBQUksY0FBVnpELGtDQUFBQSxZQUFZMEQsR0FBRyxJQUNsQ3ZDLGFBQWF1QixVQUFVLEdBQ3ZCdkIsYUFBYW1CLElBQUk7OEJBR3ZCLDRFQUFDbkQsa0RBQUlBO3dCQUFDb0UsTUFBTSxXQUEyQixPQUFoQnZELGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTXlELElBQUksY0FBVnpELGtDQUFBQSxZQUFZMEQsR0FBRztrQ0FBSTs7Ozs7O21CQVRyQyxXQUEyQixPQUFoQjFELGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTXlELElBQUksY0FBVnpELGtDQUFBQSxZQUFZMEQsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQWN6QztHQTVLTTNEO0tBQUFBO0FBOEtOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L1JlYWRlck5hdi5qcz9hZTliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUsIExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBQdXNocGluT3V0bGluZWQsXHJcbiAgQ2FtZXJhT3V0bGluZWQsXHJcbiAgQ29udGFpbmVyRmlsbGVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIENvbW1lbnRPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC90aGVtZVwiO1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCB7IFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBSZWFkZXJOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjdGl2ZVN1Yk1lbnUsIHNldEFjdGl2ZVN1Yk1lbnVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgW3RoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRDb2xsYXBzZWQod2luZG93LmlubmVyV2lkdGggPCAxMDAwKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgY29uc3QgY3VycmVudFBhdGhTZWdtZW50cyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBpZiAoY3VycmVudFBhdGhTZWdtZW50cy5sZW5ndGggPj0gMykge1xyXG4gICAgICBzZXRBY3RpdmVTdWJNZW51KGAvJHtjdXJyZW50UGF0aFNlZ21lbnRzWzFdfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWN0aXZlU3ViTWVudShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgc2lkZXI6IHtcclxuICAgICAgd2lkdGg6IGNvbGxhcHNlZCA/IDUwIDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKVwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgcGFkZGluZ1RvcDogXCI2NHB4XCIsXHJcbiAgICB9LFxyXG4gICAgZml4ZWRTaWRlcjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwMTUyOVwiIDogXCIjZmZmXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICB9LFxyXG4gICAgbWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDE1MjlcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNjRweClcIixcclxuICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcclxuICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLCBcclxuICAgICAgc2Nyb2xsYmFyV2lkdGg6IFwidGhpblwiLFxyXG4gICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLCBcclxuICAgIH0sXHJcbiAgICBpdGVtOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kIDAuM3NcIixcclxuICAgIH0sXHJcbiAgICBpdGVtSG92ZXI6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMDA0MDgwXCIgOiBcIiM0ZGExZmZcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiNmZmZcIiA6IFwiIzAwMFwiLFxyXG4gICAgfSxcclxuICAgIGFjdGl2ZUl0ZW06IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMDA3RjdGXCIgOiBcIiMwMEJGRkZcIixcclxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBhY3RpdmVTdWJNZW51OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwN0Y3RlwiIDogXCIjMDBCRkZGXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwLjFzXCIsXHJcbiAgICB9LFxyXG4gICAgc3ViTWVudToge1xyXG4gICAgICB3aWR0aDogY29sbGFwc2VkID8gXCJhdXRvXCIgOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICBzdWJNZW51SXRlbToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZXJcclxuICAgICAgY29sbGFwc2libGVcclxuICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgIG9uQ29sbGFwc2U9eygpID0+IHNldENvbGxhcHNlZCghY29sbGFwc2VkKX1cclxuICAgICAgc3R5bGU9e3sgLi4uY3VzdG9tU3R5bGVzLnNpZGVyLCAuLi5jdXN0b21TdHlsZXMuZml4ZWRTaWRlciB9fVxyXG4gICAgPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W1wiMlwiLCBcIjZcIiwgXCIxMFwiXX1cclxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICBpbmxpbmVDb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cclxuICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzLm1lbnV9XHJcbiAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAga2V5PVwiL3JlYWRlclwiXHJcbiAgICAgICAgICBpY29uPXs8U2V0dGluZ091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBcIi9yZWFkZXJcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBjdXJyZW50ID09PSBcIi9yZWFkZXJcIiA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlYWRlclwiPkRhc2hib2FyZDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBrZXk9XCIvcmVhZGVyL2xpYnJhcnlcIlxyXG4gICAgICAgICAgaWNvbj17PENvbnRhaW5lckZpbGxlZCAvPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gXCIvcmVhZGVyL2xpYnJhcnlcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBjdXJyZW50ID09PSBcIi9yZWFkZXIvbGlicmFyeVwiID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW0gOiBjdXN0b21TdHlsZXMuaXRlbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVhZGVyL2xpYnJhcnlcIj5MaWJyYXJ5PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIGtleT1cIi9yZWFkZXIvY29tbWVudHNcIlxyXG4gICAgICAgICAgaWNvbj17PENvbW1lbnRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gXCIvcmVhZGVyL2NvbW1lbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvcmVhZGVyL2NvbW1lbnRzXCJcclxuICAgICAgICAgICAgICA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtXHJcbiAgICAgICAgICAgICAgOiBjdXN0b21TdHlsZXMuaXRlbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVhZGVyL2NvbW1lbnRzXCI+Q29tbWVudHM8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IGtleT1cIjZcIiBpY29uPXs8Q2FtZXJhT3V0bGluZWQgLz59IHRpdGxlPVwiTWVkaWFcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAga2V5PVwiL3JlYWRlci9tZWRpYS9saWJyYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBcIi9yZWFkZXIvbWVkaWEvbGlicmFyeVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICBjdXJyZW50ID09PSBcIi9yZWFkZXIvbWVkaWEvbGlicmFyeVwiXHJcbiAgICAgICAgICAgICAgICA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtXHJcbiAgICAgICAgICAgICAgICA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWFkZXIvbWVkaWEvbGlicmFyeVwiPk1lZGlhIExpYnJhcnk8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAga2V5PVwiL3JlYWRlci9tZWRpYS9uZXdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnQgPT09IFwiL3JlYWRlci9tZWRpYS9uZXdcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvcmVhZGVyL21lZGlhL25ld1wiXHJcbiAgICAgICAgICAgICAgICA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtXHJcbiAgICAgICAgICAgICAgICA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWFkZXIvbWVkaWEvbmV3XCI+QWRkIE5ldyBNZWRpYTwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAga2V5PXtgL3JlYWRlci8ke2F1dGg/LnVzZXI/Ll9pZH1gfVxyXG4gICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gYC9yZWFkZXIvJHthdXRoPy51c2VyPy5faWR9YCA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBjdXJyZW50ID09PSBgL3JlYWRlci8ke2F1dGg/LnVzZXI/Ll9pZH1gXHJcbiAgICAgICAgICAgICAgPyBjdXN0b21TdHlsZXMuYWN0aXZlSXRlbVxyXG4gICAgICAgICAgICAgIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3JlYWRlci8ke2F1dGg/LnVzZXI/Ll9pZH1gfT5Qcm9maWxlPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L1NpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFkZXJOYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIk1lbnUiLCJMYXlvdXQiLCJMaW5rIiwiUHVzaHBpbk91dGxpbmVkIiwiQ2FtZXJhT3V0bGluZWQiLCJDb250YWluZXJGaWxsZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJSZXR3ZWV0T3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJDb21tZW50T3V0bGluZWQiLCJBdXRoQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIlN1Yk1lbnUiLCJTaWRlciIsIlJlYWRlck5hdiIsImF1dGgiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImFjdGl2ZVN1Yk1lbnUiLCJzZXRBY3RpdmVTdWJNZW51Iiwic2V0QXV0aCIsInRoZW1lIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjdXJyZW50UGF0aFNlZ21lbnRzIiwic3BsaXQiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1c3RvbVN0eWxlcyIsInNpZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwiZml4ZWRTaWRlciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInpJbmRleCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJtZW51Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwic2Nyb2xsYmFyV2lkdGgiLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsIml0ZW0iLCJpdGVtSG92ZXIiLCJ0ZXh0IiwiY29sb3IiLCJhY3RpdmVJdGVtIiwic3ViTWVudSIsInN1Yk1lbnVJdGVtIiwiY29sbGFwc2libGUiLCJvbkNvbGxhcHNlIiwic3R5bGUiLCJkZWZhdWx0T3BlbktleXMiLCJtb2RlIiwiaW5saW5lQ29sbGFwc2VkIiwic2VsZWN0ZWRLZXlzIiwiSXRlbSIsImljb24iLCJjbGFzc05hbWUiLCJocmVmIiwidGl0bGUiLCJ1c2VyIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/ReaderNav.js\n"));

/***/ })

});