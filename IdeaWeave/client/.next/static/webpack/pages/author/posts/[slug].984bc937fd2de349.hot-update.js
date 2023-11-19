"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/author/posts/[slug]",{

/***/ "./components/nav/AuthorNav.js":
/*!*************************************!*\
  !*** ./components/nav/AuthorNav.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons_lib_icons_PushpinOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PushpinOutlined */ \"./node_modules/@ant-design/icons/lib/icons/PushpinOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CameraOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CameraOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CommentOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CommentOutlined.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst { SubMenu } = antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst { Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst AuthorNav = ()=>{\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeSubMenu, setActiveSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleResize = ()=>{\n        setCollapsed(window.innerWidth < 100000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrent(window.location.pathname);\n        const currentPathSegments = window.location.pathname.split(\"/\");\n        if (currentPathSegments.length >= 3) {\n            setActiveSubMenu(\"/\".concat(currentPathSegments[1]));\n        } else {\n            setActiveSubMenu(\"\");\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResize();\n    }, []);\n    const menuConfig = [\n        {\n            key: \"/author\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            text: \"Dashboard\",\n            children: []\n        },\n        {\n            key: \"2\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_PushpinOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            text: \"Posts\",\n            children: [\n                {\n                    key: \"/author/posts\",\n                    text: \"All Books\"\n                },\n                {\n                    key: \"/author/posts/new\",\n                    text: \"Write New Book\"\n                }\n            ]\n        },\n        {\n            key: \"6\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CameraOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            text: \"Media\",\n            children: [\n                {\n                    key: \"/author/media/library\",\n                    text: \"Library\"\n                },\n                {\n                    key: \"/author/media/new\",\n                    text: \"Add New Media\"\n                }\n            ]\n        },\n        {\n            key: \"/author/comments\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            text: \"Comments\",\n            children: []\n        },\n        {\n            key: \"/author/userid\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            text: \"Profile\",\n            children: []\n        }\n    ];\n    const customStyles = {\n        sider: {\n            width: collapsed ? 50 : 100,\n            height: \"100vh\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)\",\n            overflow: \"hidden\",\n            paddingTop: \"64px\",\n            position: \"fixed\",\n            left: 0,\n            top: 0,\n            zIndex: 1000\n        },\n        fixedSider: {\n            position: \"fixed\",\n            top: 0,\n            left: 0,\n            height: \"100vh\",\n            zIndex: 1000,\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\",\n            boxShadow: \"0 2px 8px rgba(0, 0, 0, 0.1)\"\n        },\n        menu: {\n            background: theme === \"dark\" ? \"#001529\" : \"#fff\"\n        },\n        item: {\n            background: \"transparent\",\n            transition: \"background 0.3s\"\n        },\n        itemHover: {\n            background: theme === \"dark\" ? \"#004080\" : \"#4da1ff\"\n        },\n        text: {\n            color: theme === \"dark\" ? \"#fff\" : \"#000\"\n        },\n        activeItem: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\"\n        },\n        activeSubMenu: {\n            background: theme === \"dark\" ? \"#007F7F\" : \"#00BFFF\",\n            color: \"#fff\",\n            transition: \"width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s\"\n        },\n        subMenu: {\n            width: collapsed ? \"auto\" : \"100%\"\n        },\n        subMenuItem: {\n            width: \"100%\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        collapsed: collapsed,\n        onCollapse: ()=>setCollapsed(!collapsed),\n        style: {\n            ...customStyles.sider,\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            defaultOpenKeys: [\n                \"2\",\n                \"6\",\n                \"10\"\n            ],\n            mode: \"inline\",\n            inlineCollapsed: collapsed,\n            selectedKeys: [\n                current\n            ],\n            style: customStyles.menu,\n            theme: theme,\n            children: menuConfig.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: item.children.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: item.icon,\n                        title: item.text,\n                        className: activeSubMenu === item.key ? \"active\" : \"\",\n                        style: activeSubMenu === item.key ? customStyles.activeSubMenu : {},\n                        children: item.children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                className: current === child.key ? \"active\" : \"\",\n                                style: current === child.key ? customStyles.activeItem : customStyles.item,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: child.key,\n                                    children: child.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                                    lineNumber: 173,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, child.key, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                                lineNumber: 164,\n                                columnNumber: 19\n                            }, undefined))\n                    }, item.key, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                        lineNumber: 156,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                        icon: item.icon,\n                        className: current === item.key ? \"active\" : \"\",\n                        style: current === item.key ? customStyles.activeItem : customStyles.item,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: item.key,\n                            children: item.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                            lineNumber: 186,\n                            columnNumber: 17\n                        }, undefined)\n                    }, item.key, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                        lineNumber: 178,\n                        columnNumber: 15\n                    }, undefined)\n                }, item.key, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n            lineNumber: 145,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\nav\\\\AuthorNav.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthorNav, \"FxyDYgk9Z3JEdRy2HW2USv7GQzs=\");\n_c = AuthorNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorNav);\nvar _c;\n$RefreshReg$(_c, \"AuthorNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7Z0NBQzlDMkIsT0FDRTdDLFlBQVlzRCxNQUFNcEMsR0FBRyxHQUNqQkksYUFBYWtCLFVBQVUsR0FDdkJsQixhQUFhZSxJQUFJOzBDQUd2Qiw0RUFBQy9DLGtEQUFJQTtvQ0FBQ2tFLE1BQU1GLE1BQU1wQyxHQUFHOzhDQUFHb0MsTUFBTWxDLElBQUk7Ozs7OzsrQkFSN0JrQyxNQUFNcEMsR0FBRzs7Ozs7dUJBUmJtQixLQUFLbkIsR0FBRzs7OztrREFxQmYsOERBQUM5QiwwREFBUzt3QkFFUitCLE1BQU1rQixLQUFLbEIsSUFBSTt3QkFDZmtDLFdBQVdyRCxZQUFZcUMsS0FBS25CLEdBQUcsR0FBRyxXQUFXO3dCQUM3QzJCLE9BQ0U3QyxZQUFZcUMsS0FBS25CLEdBQUcsR0FBR0ksYUFBYWtCLFVBQVUsR0FBR2xCLGFBQWFlLElBQUk7a0NBR3BFLDRFQUFDL0Msa0RBQUlBOzRCQUFDa0UsTUFBTW5CLEtBQUtuQixHQUFHO3NDQUFHbUIsS0FBS2pCLElBQUk7Ozs7Ozt1QkFQM0JpQixLQUFLbkIsR0FBRzs7Ozs7bUJBekJFbUIsS0FBS25CLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQXdDdkM7R0FqTE1uQjtLQUFBQTtBQW1MTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9BdXRob3JOYXYuanM/ZTczMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgUHVzaHBpbk91dGxpbmVkLFxyXG4gIENhbWVyYU91dGxpbmVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgQ29tbWVudE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvdGhlbWVcIjtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgQXV0aG9yTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3RpdmVTdWJNZW51LCBzZXRBY3RpdmVTdWJNZW51XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0Q29sbGFwc2VkKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMDAwKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgY29uc3QgY3VycmVudFBhdGhTZWdtZW50cyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBpZiAoY3VycmVudFBhdGhTZWdtZW50cy5sZW5ndGggPj0gMykge1xyXG4gICAgICBzZXRBY3RpdmVTdWJNZW51KGAvJHtjdXJyZW50UGF0aFNlZ21lbnRzWzFdfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWN0aXZlU3ViTWVudShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbWVudUNvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcIi9hdXRob3JcIixcclxuICAgICAgaWNvbjogPFNldHRpbmdPdXRsaW5lZCAvPixcclxuICAgICAgdGV4dDogXCJEYXNoYm9hcmRcIixcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIjJcIixcclxuICAgICAgaWNvbjogPFB1c2hwaW5PdXRsaW5lZCAvPixcclxuICAgICAgdGV4dDogXCJQb3N0c1wiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsga2V5OiBcIi9hdXRob3IvcG9zdHNcIiwgdGV4dDogXCJBbGwgQm9va3NcIiB9LFxyXG4gICAgICAgIHsga2V5OiBcIi9hdXRob3IvcG9zdHMvbmV3XCIsIHRleHQ6IFwiV3JpdGUgTmV3IEJvb2tcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIjZcIixcclxuICAgICAgaWNvbjogPENhbWVyYU91dGxpbmVkIC8+LFxyXG4gICAgICB0ZXh0OiBcIk1lZGlhXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyBrZXk6IFwiL2F1dGhvci9tZWRpYS9saWJyYXJ5XCIsIHRleHQ6IFwiTGlicmFyeVwiIH0sXHJcbiAgICAgICAgeyBrZXk6IFwiL2F1dGhvci9tZWRpYS9uZXdcIiwgdGV4dDogXCJBZGQgTmV3IE1lZGlhXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCIvYXV0aG9yL2NvbW1lbnRzXCIsXHJcbiAgICAgIGljb246IDxDb21tZW50T3V0bGluZWQgLz4sXHJcbiAgICAgIHRleHQ6IFwiQ29tbWVudHNcIixcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIi9hdXRob3IvdXNlcmlkXCIsXHJcbiAgICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICAgIHRleHQ6IFwiUHJvZmlsZVwiLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIHNpZGVyOiB7XHJcbiAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyA1MCA6IDEwMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSlcIixcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiNjRweFwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLCAgXHJcbiAgICAgIGxlZnQ6IDAsICAgICAgICAgICAgXHJcbiAgICAgIHRvcDogMCwgICAgICAgICAgICAgXHJcbiAgICAgIHpJbmRleDogMTAwMCxcclxuICAgIH0sXHJcbiAgICBmaXhlZFNpZGVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIHpJbmRleDogMTAwMCxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMDAxNTI5XCIgOiBcIiNmZmZcIixcclxuICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwMTUyOVwiIDogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZCAwLjNzXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbUhvdmVyOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwNDA4MFwiIDogXCIjNGRhMWZmXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBjb2xvcjogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjZmZmXCIgOiBcIiMwMDBcIixcclxuICAgIH0sXHJcbiAgICBhY3RpdmVJdGVtOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lID09PSBcImRhcmtcIiA/IFwiIzAwN0Y3RlwiIDogXCIjMDBCRkZGXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFjdGl2ZVN1Yk1lbnU6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMDA3RjdGXCIgOiBcIiMwMEJGRkZcIixcclxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDAuMXNcIixcclxuICAgIH0sXHJcbiAgICBzdWJNZW51OiB7XHJcbiAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyBcImF1dG9cIiA6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIHN1Yk1lbnVJdGVtOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVyXHJcbiAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICBvbkNvbGxhcHNlPXsoKSA9PiBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCl9XHJcbiAgICAgIHN0eWxlPXt7IC4uLmN1c3RvbVN0eWxlcy5zaWRlciwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cclxuICAgID5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tcIjJcIiwgXCI2XCIsIFwiMTBcIl19XHJcbiAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XHJcbiAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlcy5tZW51fVxyXG4gICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZW51Q29uZmlnLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlU3ViTWVudSA9PT0gaXRlbS5rZXkgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXthY3RpdmVTdWJNZW51ID09PSBpdGVtLmtleSA/IGN1c3RvbVN0eWxlcy5hY3RpdmVTdWJNZW51IDoge319XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBjaGlsZC5rZXkgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID09PSBjaGlsZC5rZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXN0b21TdHlsZXMuYWN0aXZlSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGN1c3RvbVN0eWxlcy5pdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y2hpbGQua2V5fT57Y2hpbGQudGV4dH08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnQgPT09IGl0ZW0ua2V5ID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPT09IGl0ZW0ua2V5ID8gY3VzdG9tU3R5bGVzLmFjdGl2ZUl0ZW0gOiBjdXN0b21TdHlsZXMuaXRlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ua2V5fT57aXRlbS50ZXh0fTwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvck5hdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTWVudSIsIkxheW91dCIsIkxpbmsiLCJQdXNocGluT3V0bGluZWQiLCJDYW1lcmFPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkNvbW1lbnRPdXRsaW5lZCIsIlRoZW1lQ29udGV4dCIsIlN1Yk1lbnUiLCJTaWRlciIsIkF1dGhvck5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiYWN0aXZlU3ViTWVudSIsInNldEFjdGl2ZVN1Yk1lbnUiLCJ0aGVtZSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY3VycmVudFBhdGhTZWdtZW50cyIsInNwbGl0IiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZW51Q29uZmlnIiwia2V5IiwiaWNvbiIsInRleHQiLCJjaGlsZHJlbiIsImN1c3RvbVN0eWxlcyIsInNpZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiekluZGV4IiwiZml4ZWRTaWRlciIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJtZW51IiwiaXRlbSIsIml0ZW1Ib3ZlciIsImNvbG9yIiwiYWN0aXZlSXRlbSIsInN1Yk1lbnUiLCJzdWJNZW51SXRlbSIsImNvbGxhcHNpYmxlIiwib25Db2xsYXBzZSIsInN0eWxlIiwiZGVmYXVsdE9wZW5LZXlzIiwibW9kZSIsImlubGluZUNvbGxhcHNlZCIsInNlbGVjdGVkS2V5cyIsIm1hcCIsIkZyYWdtZW50IiwidGl0bGUiLCJjbGFzc05hbWUiLCJjaGlsZCIsIkl0ZW0iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/AuthorNav.js\n"));

/***/ })

});