"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/author/posts",{

/***/ "./components/nav/AuthorNav.js":
/*!*************************************!*\
  !*** ./components/nav/AuthorNav.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons_lib_icons_PushpinOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PushpinOutlined */ \"./node_modules/@ant-design/icons/lib/icons/PushpinOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CameraOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CameraOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CommentOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CommentOutlined.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst { SubMenu } = antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst { Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst AuthorNav = ()=>{\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeSubMenu, setActiveSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleResize = ()=>{\n        setCollapsed(window.innerWidth < 100000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrent(window.location.pathname);\n        const currentPathSegments = window.location.pathname.split(\"/\");\n        if (currentPathSegments.length >= 3) {\n            setActiveSubMenu(\"/\".concat(currentPathSegments[1]));\n        } else {\n            setActiveSubMenu(\"\");\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResize();\n    }, []);\n    const menuConfig = [\n        {\n            key: \"/author\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            text: \"Dashboard\",\n            children: []\n        },\n        {\n            key: \"2\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_PushpinOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            text: \"Posts\",\n            children: [\n                {\n                    key: \"/author/posts\",\n                    text: \"All Books\"\n                },\n                {\n                    key: \"/author/posts/new\",\n                    text: \"Write New Book\"\n                }\n            ]\n        },\n        {\n            key: \"6\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            text: \"Media\",\n            children: [\n                {\n                    key: \"/author/media/library\",\n                    text: \"Media Library\"\n                },\n                {\n                    key: \"/author/media/new\",\n                    text: \"Add New Media\"\n                }\n            ]\n        },\n        {\n            key: \"/author/comments\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            text: \"Comments\",\n            children: []\n        },\n        {\n            key: \"/author/userid\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            text: \"Profile\",\n            children: []\n        }\n    ];\n    const customStyles = {\n        sider: {\n            width: collapsed ? 50 : 100,\n            height: \"100vh\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)\",\n            overflow: \"hidden\",\n            paddingTop: \"64px\",\n            position: \"fixed\",\n            left: 0,\n            top: 0,\n            zIndex: 1000\n        },\n        fixedSider: {\n            position: \"fixed\",\n            top: 0,\n            left: 0,\n            height: \"100vh\",\n            zIndex: 1000,\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            boxShadow: \"0 2px 8px rgba(0, 0, 0, 0.1)\"\n        },\n        menu: {\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\"\n        },\n        item: {\n            background: \"transparent\",\n            transition: \"background 0.3s\"\n        },\n        itemHover: {\n            background: theme === \"dark\" ? \"#004080\" : \"#4da1ff\"\n        },\n        text: {\n            color: theme === \"dark\" ? \"#fff\" : \"#000\"\n        },\n        activeItem: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\"\n        },\n        activeSubMenu: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s\"\n        },\n        subMenu: {\n            width: collapsed ? \"auto\" : \"100%\"\n        },\n        subMenuItem: {\n            width: \"100%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        collapsed: collapsed,\n        onCollapse: ()=>setCollapsed(!collapsed),\n        style: {\n            ...customStyles.sider,\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            defaultOpenKeys: [\n                \"2\",\n                \"6\",\n                \"10\"\n            ],\n            mode: \"inline\",\n            inlineCollapsed: collapsed,\n            selectedKeys: [\n                current\n            ],\n            style: customStyles.menu,\n            theme: theme,\n            children: menuConfig.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: item.children.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: item.icon,\n                        title: item.text,\n                        className: activeSubMenu === item.key ? \"active\" : \"\",\n                        style: activeSubMenu === item.key ? customStyles.activeSubMenu : {},\n                        children: item.children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                className: current === child.key ? \"active\" : \"\",\n                                style: current === child.key ? customStyles.activeItem : customStyles.item,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: child.key,\n                                    children: child.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                                    lineNumber: 173,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, child.key, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                                lineNumber: 164,\n                                columnNumber: 19\n                            }, undefined))\n                    }, item.key, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                        lineNumber: 156,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                        icon: item.icon,\n                        className: current === item.key ? \"active\" : \"\",\n                        style: current === item.key ? customStyles.activeItem : customStyles.item,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: item.key,\n                            children: item.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                            lineNumber: 186,\n                            columnNumber: 17\n                        }, undefined)\n                    }, item.key, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                        lineNumber: 178,\n                        columnNumber: 15\n                    }, undefined)\n                }, item.key, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n            lineNumber: 145,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthorNav, \"FxyDYgk9Z3JEdRy2HW2USv7GQzs=\");\n_c = AuthorNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorNav);\nvar _c;\n$RefreshReg$(_c, \"AuthorNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO2dDQUM5QzJCLE9BQ0U3QyxZQUFZc0QsTUFBTXBDLEdBQUcsR0FDakJJLGFBQWFrQixVQUFVLEdBQ3ZCbEIsYUFBYWUsSUFBSTswQ0FHdkIsNEVBQUMvQyxrREFBSUE7b0NBQUNrRSxNQUFNRixNQUFNcEMsR0FBRzs4Q0FBR29DLE1BQU1sQyxJQUFJOzs7Ozs7K0JBUjdCa0MsTUFBTXBDLEdBQUc7Ozs7O3VCQVJibUIsS0FBS25CLEdBQUc7Ozs7a0RBcUJmLDhEQUFDOUIsMERBQVM7d0JBRVIrQixNQUFNa0IsS0FBS2xCLElBQUk7d0JBQ2ZrQyxXQUFXckQsWUFBWXFDLEtBQUtuQixHQUFHLEdBQUcsV0FBVzt3QkFDN0MyQixPQUNFN0MsWUFBWXFDLEtBQUtuQixHQUFHLEdBQUdJLGFBQWFrQixVQUFVLEdBQUdsQixhQUFhZSxJQUFJO2tDQUdwRSw0RUFBQy9DLGtEQUFJQTs0QkFBQ2tFLE1BQU1uQixLQUFLbkIsR0FBRztzQ0FBR21CLEtBQUtqQixJQUFJOzs7Ozs7dUJBUDNCaUIsS0FBS25CLEdBQUc7Ozs7O21CQXpCRW1CLEtBQUtuQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUF3Q3ZDO0dBakxNbkI7S0FBQUE7QUFtTE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvQXV0aG9yTmF2LmpzP2U3MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSwgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIFB1c2hwaW5PdXRsaW5lZCxcclxuICBDYW1lcmFPdXRsaW5lZCxcclxuICBTZXR0aW5nT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIENvbW1lbnRPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3RoZW1lXCI7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEF1dGhvck5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aXZlU3ViTWVudSwgc2V0QWN0aXZlU3ViTWVudV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGhlbWVdID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldENvbGxhcHNlZCh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoU2VnbWVudHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgaWYgKGN1cnJlbnRQYXRoU2VnbWVudHMubGVuZ3RoID49IDMpIHtcclxuICAgICAgc2V0QWN0aXZlU3ViTWVudShgLyR7Y3VycmVudFBhdGhTZWdtZW50c1sxXX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFjdGl2ZVN1Yk1lbnUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1lbnVDb25maWcgPSBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIvYXV0aG9yXCIsXHJcbiAgICAgIGljb246IDxTZXR0aW5nT3V0bGluZWQgLz4sXHJcbiAgICAgIHRleHQ6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIyXCIsXHJcbiAgICAgIGljb246IDxQdXNocGluT3V0bGluZWQgLz4sXHJcbiAgICAgIHRleHQ6IFwiUG9zdHNcIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IGtleTogXCIvYXV0aG9yL3Bvc3RzXCIsIHRleHQ6IFwiQWxsIEJvb2tzXCIgfSxcclxuICAgICAgICB7IGtleTogXCIvYXV0aG9yL3Bvc3RzL25ld1wiLCB0ZXh0OiBcIldyaXRlIE5ldyBCb29rXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCI2XCIsXHJcbiAgICAgIGljb246IDxDYW1lcmFPdXRsaW5lZCAvPixcclxuICAgICAgdGV4dDogXCJNZWRpYVwiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsga2V5OiBcIi9hdXRob3IvbWVkaWEvbGlicmFyeVwiLCB0ZXh0OiBcIk1lZGlhIExpYnJhcnlcIiB9LFxyXG4gICAgICAgIHsga2V5OiBcIi9hdXRob3IvbWVkaWEvbmV3XCIsIHRleHQ6IFwiQWRkIE5ldyBNZWRpYVwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiL2F1dGhvci9jb21tZW50c1wiLFxyXG4gICAgICBpY29uOiA8Q29tbWVudE91dGxpbmVkIC8+LFxyXG4gICAgICB0ZXh0OiBcIkNvbW1lbnRzXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIvYXV0aG9yL3VzZXJpZFwiLFxyXG4gICAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgICB0ZXh0OiBcIlByb2ZpbGVcIixcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICBzaWRlcjoge1xyXG4gICAgICB3aWR0aDogY29sbGFwc2VkID8gNTAgOiAxMDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjY0cHhcIixcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIiwgIFxyXG4gICAgICBsZWZ0OiAwLCAgICAgICAgICAgIFxyXG4gICAgICB0b3A6IDAsICAgICAgICAgICAgIFxyXG4gICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICB9LFxyXG4gICAgZml4ZWRTaWRlcjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwMTUyOVwiIDogXCIjZmZmXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICB9LFxyXG4gICAgbWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDE1MjlcIiA6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGl0ZW06IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMC4zc1wiLFxyXG4gICAgfSxcclxuICAgIGl0ZW1Ib3Zlcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDQwODBcIiA6IFwiIzRkYTFmZlwiLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgY29sb3I6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiI2ZmZlwiIDogXCIjMDAwXCIsXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlSXRlbToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMwMDdGN0ZcIiA6IFwiIzAwQkZGRlwiLFxyXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhY3RpdmVTdWJNZW51OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwN0Y3RlwiIDogXCIjMDBCRkZGXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwLjFzXCIsXHJcbiAgICB9LFxyXG4gICAgc3ViTWVudToge1xyXG4gICAgICB3aWR0aDogY29sbGFwc2VkID8gXCJhdXRvXCIgOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICBzdWJNZW51SXRlbToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlclxyXG4gICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgb25Db2xsYXBzZT17KCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpfVxyXG4gICAgICBzdHlsZT17eyAuLi5jdXN0b21TdHlsZXMuc2lkZXIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19XHJcbiAgICA+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbXCIyXCIsIFwiNlwiLCBcIjEwXCJdfVxyXG4gICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgIGlubGluZUNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxyXG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXMubWVudX1cclxuICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVudUNvbmZpZy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0ua2V5fT5cclxuICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVN1Yk1lbnUgPT09IGl0ZW0ua2V5ID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YWN0aXZlU3ViTWVudSA9PT0gaXRlbS5rZXkgPyBjdXN0b21TdHlsZXMuYWN0aXZlU3ViTWVudSA6IHt9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGQua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudCA9PT0gY2hpbGQua2V5ID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PT0gY2hpbGQua2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXN0b21TdHlsZXMuaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NoaWxkLmtleX0+e2NoaWxkLnRleHR9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBpdGVtLmtleSA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50ID09PSBpdGVtLmtleSA/IGN1c3RvbVN0eWxlcy5hY3RpdmVJdGVtIDogY3VzdG9tU3R5bGVzLml0ZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmtleX0+e2l0ZW0udGV4dH08L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L1NpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRob3JOYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIk1lbnUiLCJMYXlvdXQiLCJMaW5rIiwiUHVzaHBpbk91dGxpbmVkIiwiQ2FtZXJhT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJDb21tZW50T3V0bGluZWQiLCJUaGVtZUNvbnRleHQiLCJTdWJNZW51IiwiU2lkZXIiLCJBdXRob3JOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImFjdGl2ZVN1Yk1lbnUiLCJzZXRBY3RpdmVTdWJNZW51IiwidGhlbWUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnRQYXRoU2VnbWVudHMiLCJzcGxpdCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWVudUNvbmZpZyIsImtleSIsImljb24iLCJ0ZXh0IiwiY2hpbGRyZW4iLCJjdXN0b21TdHlsZXMiLCJzaWRlciIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsImZpeGVkU2lkZXIiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwibWVudSIsIml0ZW0iLCJpdGVtSG92ZXIiLCJjb2xvciIsImFjdGl2ZUl0ZW0iLCJzdWJNZW51Iiwic3ViTWVudUl0ZW0iLCJjb2xsYXBzaWJsZSIsIm9uQ29sbGFwc2UiLCJzdHlsZSIsImRlZmF1bHRPcGVuS2V5cyIsIm1vZGUiLCJpbmxpbmVDb2xsYXBzZWQiLCJzZWxlY3RlZEtleXMiLCJtYXAiLCJGcmFnbWVudCIsInRpdGxlIiwiY2xhc3NOYW1lIiwiY2hpbGQiLCJJdGVtIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/AuthorNav.js\n"));

/***/ })

});