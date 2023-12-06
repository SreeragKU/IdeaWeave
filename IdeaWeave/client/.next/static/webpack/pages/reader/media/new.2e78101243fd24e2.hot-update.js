"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reader/media/new",{

/***/ "./components/nav/ReaderNav.js":
/*!*************************************!*\
  !*** ./components/nav/ReaderNav.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CameraOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CameraOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_ContainerFilled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ContainerFilled */ \"./node_modules/@ant-design/icons/lib/icons/ContainerFilled.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_RetweetOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/RetweetOutlined */ \"./node_modules/@ant-design/icons/lib/icons/RetweetOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CommentOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CommentOutlined.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { SubMenu } = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst { Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst ReaderNav = ()=>{\n    var _auth_user, _auth_user1, _auth_user2, _auth_user3;\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeSubMenu, setActiveSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleResize = ()=>{\n        setCollapsed(window.innerWidth < 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrent(window.location.pathname);\n        const currentPathSegments = window.location.pathname.split(\"/\");\n        if (currentPathSegments.length >= 3) {\n            setActiveSubMenu(\"/\".concat(currentPathSegments[1]));\n        } else {\n            setActiveSubMenu(\"\");\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResize();\n    }, []);\n    const customStyles = {\n        sider: {\n            width: collapsed ? 50 : 100,\n            height: \"100vh\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)\",\n            overflow: \"hidden\",\n            paddingTop: \"64px\"\n        },\n        fixedSider: {\n            position: \"fixed\",\n            top: 0,\n            left: 0,\n            height: \"100vh\",\n            zIndex: 1000,\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            boxShadow: \"0 2px 8px rgba(0, 0, 0, 0.1)\"\n        },\n        menu: {\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            height: \"calc(100% - 64px)\",\n            overflowY: \"auto\",\n            overflowX: \"hidden\",\n            scrollbarWidth: \"thin\",\n            WebkitOverflowScrolling: \"touch\"\n        },\n        item: {\n            background: \"transparent\",\n            transition: \"background 0.3s\"\n        },\n        itemHover: {\n            background: theme === \"dark\" ? \"#004080\" : \"#4da1ff\"\n        },\n        text: {\n            color: theme === \"dark\" ? \"#fff\" : \"#000\"\n        },\n        activeItem: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\"\n        },\n        activeSubMenu: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s\"\n        },\n        subMenu: {\n            width: collapsed ? \"auto\" : \"100%\"\n        },\n        subMenuItem: {\n            width: \"100%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        collapsed: collapsed,\n        onCollapse: ()=>setCollapsed(!collapsed),\n        style: {\n            ...customStyles.sider,\n            ...customStyles.fixedSider\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            defaultOpenKeys: [\n                \"2\",\n                \"6\",\n                \"10\"\n            ],\n            mode: \"inline\",\n            inlineCollapsed: collapsed,\n            selectedKeys: [\n                current\n            ],\n            style: customStyles.menu,\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader\" ? \"active\" : \"\",\n                    style: current === \"/reader\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_ContainerFilled__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/library\" ? \"active\" : \"\",\n                    style: current === \"/reader/library\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/library\",\n                        children: \"Library\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/library\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_RetweetOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/bookshistory\" ? \"active\" : \"\",\n                    style: current === \"/reader/history\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/history\",\n                        children: \"History\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/books/history\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/comments\" ? \"active\" : \"\",\n                    style: current === \"/reader/comments\" ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/comments\",\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/comments\", false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, void 0, void 0),\n                    title: \"Media\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                            className: current === \"/reader/media/library\" ? \"active\" : \"\",\n                            style: current === \"/reader/media/library\" ? customStyles.activeItem : customStyles.item,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/reader/media/library\",\n                                children: \"Media Library\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                                lineNumber: 172,\n                                columnNumber: 13\n                            }, undefined)\n                        }, \"/reader/media/library\", false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                            lineNumber: 163,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                            className: current === \"/reader/media/new\" ? \"active\" : \"\",\n                            style: current === \"/reader/media/new\" ? customStyles.activeItem : customStyles.item,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/reader/media/new\",\n                                children: \"Add New Media\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                                lineNumber: 183,\n                                columnNumber: 13\n                            }, undefined)\n                        }, \"/reader/media/new\", false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                            lineNumber: 174,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, \"6\", true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 162,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: current === \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user = auth.user) === null || _auth_user === void 0 ? void 0 : _auth_user._id) ? \"active\" : \"\",\n                    style: current === \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user1 = auth.user) === null || _auth_user1 === void 0 ? void 0 : _auth_user1._id) ? customStyles.activeItem : customStyles.item,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user2 = auth.user) === null || _auth_user2 === void 0 ? void 0 : _auth_user2._id),\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, undefined)\n                }, \"/reader/\".concat(auth === null || auth === void 0 ? void 0 : (_auth_user3 = auth.user) === null || _auth_user3 === void 0 ? void 0 : _auth_user3._id), false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n                    lineNumber: 187,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\ReaderNav.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReaderNav, \"4OAn6fNAKaBCBgoJYitrhJ6K6yo=\");\n_c = ReaderNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReaderNav);\nvar _c;\n$RefreshReg$(_c, \"ReaderNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQXdMTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9SZWFkZXJOYXYuanM/YWU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgUHVzaHBpbk91dGxpbmVkLFxyXG4gIENhbWVyYU91dGxpbmVkLFxyXG4gIENvbnRhaW5lckZpbGxlZCxcclxuICBTZXR0aW5nT3V0bGluZWQsXHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBDb21tZW50T3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2F1dGhcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvdGhlbWVcIjtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgUmVhZGVyTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3RpdmVTdWJNZW51LCBzZXRBY3RpdmVTdWJNZW51XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0Q29sbGFwc2VkKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoU2VnbWVudHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgaWYgKGN1cnJlbnRQYXRoU2VnbWVudHMubGVuZ3RoID49IDMpIHtcclxuICAgICAgc2V0QWN0aXZlU3ViTWVudShgLyR7Y3VycmVudFBhdGhTZWdtZW50c1sxXX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFjdGl2ZVN1Yk1lbnUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIHNpZGVyOiB7XHJcbiAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyA1MCA6IDEwMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSlcIixcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiNjRweFwiLFxyXG4gICAgfSxcclxuICAgIGZpeGVkU2lkZXI6IHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgekluZGV4OiAxMDAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDE1MjlcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMDAxNTI5XCIgOiBcIiNmZmZcIixcclxuICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDY0cHgpXCIsXHJcbiAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIiwgXHJcbiAgICAgIHNjcm9sbGJhcldpZHRoOiBcInRoaW5cIixcclxuICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIiwgXHJcbiAgICB9LFxyXG4gICAgaXRlbToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZCAwLjNzXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbUhvdmVyOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwNDA4MFwiIDogXCIjNGRhMWZmXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBjb2xvcjogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjZmZmXCIgOiBcIiMwMDBcIixcclxuICAgIH0sXHJcbiAgICBhY3RpdmVJdGVtOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwN0Y3RlwiIDogXCIjMDBCRkZGXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZlU3ViTWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDdGN0ZcIiA6IFwiIzAwQkZGRlwiLFxyXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMC4xc1wiLFxyXG4gICAgfSxcclxuICAgIHN1Yk1lbnU6IHtcclxuICAgICAgd2lkdGg6IGNvbGxhcHNlZCA/IFwiYXV0b1wiIDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgc3ViTWVudUl0ZW06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVyXHJcbiAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICBvbkNvbGxhcHNlPXsoKSA9PiBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCl9XHJcbiAgICAgIHN0eWxlPXt7IC4uLmN1c3RvbVN0eWxlcy5zaWRlciwgLi4uY3VzdG9tU3R5bGVzLmZpeGVkU2lkZXIgfX1cclxuICAgID5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tcIjJcIiwgXCI2XCIsIFwiMTBcIl19XHJcbiAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XHJcbiAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlcy5tZW51fVxyXG4gICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIGtleT1cIi9yZWFkZXJcIlxyXG4gICAgICAgICAgaWNvbj17PFNldHRpbmdPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gXCIvcmVhZGVyXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvcmVhZGVyXCIgPyBjdXN0b21TdHlsZXMuYWN0aXZlSXRlbSA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWFkZXJcIj5EYXNoYm9hcmQ8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAga2V5PVwiL3JlYWRlci9saWJyYXJ5XCJcclxuICAgICAgICAgIGljb249ezxDb250YWluZXJGaWxsZWQgLz59XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnQgPT09IFwiL3JlYWRlci9saWJyYXJ5XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvcmVhZGVyL2xpYnJhcnlcIiA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlYWRlci9saWJyYXJ5XCI+TGlicmFyeTwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBrZXk9XCIvcmVhZGVyL2Jvb2tzL2hpc3RvcnlcIlxyXG4gICAgICAgICAgaWNvbj17PFJldHdlZXRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gXCIvcmVhZGVyL2Jvb2tzaGlzdG9yeVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3JlYWRlci9oaXN0b3J5XCIgPyBjdXN0b21TdHlsZXMuYWN0aXZlSXRlbSA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWFkZXIvaGlzdG9yeVwiPkhpc3Rvcnk8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAga2V5PVwiL3JlYWRlci9jb21tZW50c1wiXHJcbiAgICAgICAgICBpY29uPXs8Q29tbWVudE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBcIi9yZWFkZXIvY29tbWVudHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBjdXJyZW50ID09PSBcIi9yZWFkZXIvY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW1cclxuICAgICAgICAgICAgICA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWFkZXIvY29tbWVudHNcIj5Db21tZW50czwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPFN1Yk1lbnUga2V5PVwiNlwiIGljb249ezxDYW1lcmFPdXRsaW5lZCAvPn0gdGl0bGU9XCJNZWRpYVwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBrZXk9XCIvcmVhZGVyL21lZGlhL2xpYnJhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnQgPT09IFwiL3JlYWRlci9tZWRpYS9saWJyYXJ5XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3JlYWRlci9tZWRpYS9saWJyYXJ5XCJcclxuICAgICAgICAgICAgICAgID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW1cclxuICAgICAgICAgICAgICAgIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlYWRlci9tZWRpYS9saWJyYXJ5XCI+TWVkaWEgTGlicmFyeTwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBrZXk9XCIvcmVhZGVyL21lZGlhL25ld1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gXCIvcmVhZGVyL21lZGlhL25ld1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICBjdXJyZW50ID09PSBcIi9yZWFkZXIvbWVkaWEvbmV3XCJcclxuICAgICAgICAgICAgICAgID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW1cclxuICAgICAgICAgICAgICAgIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlYWRlci9tZWRpYS9uZXdcIj5BZGQgTmV3IE1lZGlhPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBrZXk9e2AvcmVhZGVyLyR7YXV0aD8udXNlcj8uX2lkfWB9XHJcbiAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBgL3JlYWRlci8ke2F1dGg/LnVzZXI/Ll9pZH1gID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPT09IGAvcmVhZGVyLyR7YXV0aD8udXNlcj8uX2lkfWBcclxuICAgICAgICAgICAgICA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtXHJcbiAgICAgICAgICAgICAgOiBjdXN0b21TdHlsZXMuaXRlbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVhZGVyLyR7YXV0aD8udXNlcj8uX2lkfWB9PlByb2ZpbGU8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWRlck5hdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTWVudSIsIkxheW91dCIsIkxpbmsiLCJQdXNocGluT3V0bGluZWQiLCJDYW1lcmFPdXRsaW5lZCIsIkNvbnRhaW5lckZpbGxlZCIsIlNldHRpbmdPdXRsaW5lZCIsIlJldHdlZXRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkNvbW1lbnRPdXRsaW5lZCIsIkF1dGhDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiU3ViTWVudSIsIlNpZGVyIiwiUmVhZGVyTmF2IiwiYXV0aCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiYWN0aXZlU3ViTWVudSIsInNldEFjdGl2ZVN1Yk1lbnUiLCJzZXRBdXRoIiwidGhlbWUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnRQYXRoU2VnbWVudHMiLCJzcGxpdCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VzdG9tU3R5bGVzIiwic2lkZXIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zaXRpb24iLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJmaXhlZFNpZGVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1lbnUiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJzY3JvbGxiYXJXaWR0aCIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwiaXRlbSIsIml0ZW1Ib3ZlciIsInRleHQiLCJjb2xvciIsImFjdGl2ZUl0ZW0iLCJzdWJNZW51Iiwic3ViTWVudUl0ZW0iLCJjb2xsYXBzaWJsZSIsIm9uQ29sbGFwc2UiLCJzdHlsZSIsImRlZmF1bHRPcGVuS2V5cyIsIm1vZGUiLCJpbmxpbmVDb2xsYXBzZWQiLCJzZWxlY3RlZEtleXMiLCJJdGVtIiwiaWNvbiIsImNsYXNzTmFtZSIsImhyZWYiLCJ0aXRsZSIsInVzZXIiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/ReaderNav.js\n"));

/***/ })

});