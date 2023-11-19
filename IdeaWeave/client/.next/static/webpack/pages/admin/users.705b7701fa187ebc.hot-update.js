"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/users",{

/***/ "./pages/admin/users/index.js":
/*!************************************!*\
  !*** ./pages/admin/users/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllUsers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/list */ \"./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/avatar */ \"./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/spin */ \"./node_modules/antd/lib/spin/index.js\");\n/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/pagination */ \"./node_modules/antd/lib/pagination/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/theme */ \"./context/theme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AllUsers() {\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [theme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_6__.ThemeContext);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const pageSize = 5; // Adjust the number of users per page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (auth === null || auth === void 0 ? void 0 : auth.token) {\n            loadUsers();\n        }\n    }, [\n        auth === null || auth === void 0 ? void 0 : auth.token\n    ]);\n    const loadUsers = async ()=>{\n        try {\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/users\");\n            const filteredUsers = data.filter((user)=>user._id !== auth.user._id);\n            setUsers(filteredUsers);\n        } catch (err) {\n            console.error(err);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleToggleUserStatus = async (user)=>{\n        if (user.isUpdating) {\n            return;\n        }\n        try {\n            if (user._id === auth.user._id) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"You cannot toggle your own status\");\n                return;\n            }\n            setUsers((prev)=>prev.map((u)=>u._id === user._id ? {\n                        ...u,\n                        isUpdating: true\n                    } : u));\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"/users/\".concat(user._id, \"/toggle\"));\n                setUsers((prev)=>prev.map((u)=>u._id === user._id ? {\n                            ...u,\n                            isActive: data.isActive,\n                            isUpdating: false\n                        } : u));\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"User \".concat(data.isActive ? \"enabled\" : \"disabled\", \" successfully\"));\n            } catch (error) {\n                console.error(error);\n                setUsers((prev)=>prev.map((u)=>u._id === user._id ? {\n                            ...u,\n                            isUpdating: false\n                        } : u));\n            }\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    const handleEditUser = (userId)=>{\n        router.push(\"/users/edit/\".concat(userId));\n    };\n    const renderUserCard = (role, usersInRole)=>{\n        const startIndex = (currentPage - 1) * pageSize;\n        const endIndex = startIndex + pageSize;\n        const usersToDisplay = usersInRole.slice(startIndex, endIndex);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: role,\n            style: {\n                marginBottom: 20,\n                borderRadius: 10,\n                backgroundColor: theme === \"dark\" ? \"#333\" : \"#f0f2f5\",\n                color: theme === \"dark\" ? \"white\" : \"black\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    itemLayout: \"horizontal\",\n                    dataSource: usersToDisplay,\n                    renderItem: (user)=>{\n                        var _user_image;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Item, {\n                            className: user.isActive ? \"active-user\" : \"disabled-user\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Item.Meta, {\n                                    avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        src: user === null || user === void 0 ? void 0 : (_user_image = user.image) === null || _user_image === void 0 ? void 0 : _user_image.url,\n                                        style: {\n                                            backgroundColor: \"#87d068\"\n                                        },\n                                        children: user === null || user === void 0 ? void 0 : user.name[0]\n                                    }, void 0, false, void 0, void 0),\n                                    title: user.name,\n                                    description: user.email\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Role: \",\n                                                user.role\n                                            ]\n                                        }, void 0, true, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                marginTop: 8\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    type: user.isActive ? \"danger\" : \"success\",\n                                                    onClick: ()=>handleToggleUserStatus(user),\n                                                    loading: user.isUpdating,\n                                                    disabled: user.isUpdating,\n                                                    style: {\n                                                        marginBottom: 15\n                                                    },\n                                                    children: user.isUpdating ? \"Updating...\" : user.isActive ? \"Disable\" : \"Enable\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    onClick: ()=>handleEditUser(user._id),\n                                                    style: {\n                                                        marginTop: 25\n                                                    },\n                                                    children: \"Edit\"\n                                                }, \"editUser\", false, void 0, void 0)\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    ]\n                                }, void 0, true, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                usersInRole.length > pageSize && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    current: currentPage,\n                    pageSize: pageSize,\n                    total: usersInRole.length,\n                    onChange: (page)=>setCurrentPage(page),\n                    style: {\n                        marginTop: 16,\n                        textAlign: \"center\"\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                    lineNumber: 148,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            style: {\n                padding: 20,\n                marginLeft: 100,\n                marginRight: 20,\n                marginTop: 60,\n                backgroundColor: theme === \"dark\" ? \"#222\" : \"transparent\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                span: 24,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            marginBottom: 20,\n                            fontSize: 24,\n                            color: theme === \"dark\" ? \"white\" : \"black\"\n                        },\n                        children: [\n                            \"All Users (\",\n                            users === null || users === void 0 ? void 0 : users.length,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                        lineNumber: 172,\n                        columnNumber: 11\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                        tip: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                        lineNumber: 183,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\"\n                        },\n                        children: [\n                            renderUserCard(\"Author\", users.filter((user)=>user.role === \"Author\")),\n                            renderUserCard(\"Subscriber\", users.filter((user)=>user.role === \"Subscriber\")),\n                            renderUserCard(\"Reviewer\", users.filter((user)=>user.role === \"Reviewer\")),\n                            renderUserCard(\"Reader\", users.filter((user)=>user.role === \"Reader\"))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                        lineNumber: 185,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n                lineNumber: 171,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n            lineNumber: 162,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\users\\\\index.js\",\n        lineNumber: 161,\n        columnNumber: 5\n    }, this);\n}\n_s(AllUsers, \"1kLdUIch23cQl3cNiC9Cyc89nMo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AllUsers;\nvar _c;\n$RefreshReg$(_c, \"AllUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsZUFDQyxVQUNBOUIsTUFBTWEsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtpQixJQUFJLEtBQUs7NEJBRXRDRCxlQUNDLGNBQ0E5QixNQUFNYSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2lCLElBQUksS0FBSzs0QkFFdENELGVBQ0MsWUFDQTlCLE1BQU1hLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLaUIsSUFBSSxLQUFLOzRCQUV0Q0QsZUFDQyxVQUNBOUIsTUFBTWEsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtpQixJQUFJLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJEO0dBdE13Qm5DOztRQUVQTCxrREFBU0E7OztLQUZGSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi91c2Vycy9pbmRleC5qcz9kNGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIExpc3QsIEF2YXRhciwgQnV0dG9uLCBTcGluLCBQYWdpbmF0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2F1dGhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L3RoZW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxVc2VycygpIHtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHBhZ2VTaXplID0gNTsgLy8gQWRqdXN0IHRoZSBudW1iZXIgb2YgdXNlcnMgcGVyIHBhZ2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoPy50b2tlbikge1xyXG4gICAgICBsb2FkVXNlcnMoKTtcclxuICAgIH1cclxuICB9LCBbYXV0aD8udG9rZW5dKTtcclxuXHJcbiAgY29uc3QgbG9hZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvdXNlcnNcIik7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBkYXRhLmZpbHRlcigodXNlcikgPT4gdXNlci5faWQgIT09IGF1dGgudXNlci5faWQpO1xyXG4gICAgICBzZXRVc2VycyhmaWx0ZXJlZFVzZXJzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGVVc2VyU3RhdHVzID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGlmICh1c2VyLmlzVXBkYXRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh1c2VyLl9pZCA9PT0gYXV0aC51c2VyLl9pZCkge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiWW91IGNhbm5vdCB0b2dnbGUgeW91ciBvd24gc3RhdHVzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VXNlcnMoKHByZXYpID0+XHJcbiAgICAgICAgcHJldi5tYXAoKHUpID0+XHJcbiAgICAgICAgICB1Ll9pZCA9PT0gdXNlci5faWQgPyB7IC4uLnUsIGlzVXBkYXRpbmc6IHRydWUgfSA6IHVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KGAvdXNlcnMvJHt1c2VyLl9pZH0vdG9nZ2xlYCk7XHJcbiAgICAgICAgc2V0VXNlcnMoKHByZXYpID0+XHJcbiAgICAgICAgICBwcmV2Lm1hcCgodSkgPT5cclxuICAgICAgICAgICAgdS5faWQgPT09IHVzZXIuX2lkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnUsIGlzQWN0aXZlOiBkYXRhLmlzQWN0aXZlLCBpc1VwZGF0aW5nOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgOiB1XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgIGBVc2VyICR7ZGF0YS5pc0FjdGl2ZSA/IFwiZW5hYmxlZFwiIDogXCJkaXNhYmxlZFwifSBzdWNjZXNzZnVsbHlgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBzZXRVc2VycygocHJldikgPT5cclxuICAgICAgICAgIHByZXYubWFwKCh1KSA9PlxyXG4gICAgICAgICAgICB1Ll9pZCA9PT0gdXNlci5faWQgPyB7IC4uLnUsIGlzVXBkYXRpbmc6IGZhbHNlIH0gOiB1XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0VXNlciA9ICh1c2VySWQpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvdXNlcnMvZWRpdC8ke3VzZXJJZH1gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJVc2VyQ2FyZCA9IChyb2xlLCB1c2Vyc0luUm9sZSkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XHJcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcclxuICAgIGNvbnN0IHVzZXJzVG9EaXNwbGF5ID0gdXNlcnNJblJvbGUuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgdGl0bGU9e3JvbGV9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMzMzNcIiA6IFwiI2YwZjJmNVwiLFxyXG4gICAgICAgICAgY29sb3I6IHRoZW1lID09PSBcImRhcmtcIiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgIGRhdGFTb3VyY2U9e3VzZXJzVG9EaXNwbGF5fVxyXG4gICAgICAgICAgcmVuZGVySXRlbT17KHVzZXIpID0+IChcclxuICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dXNlci5pc0FjdGl2ZSA/IFwiYWN0aXZlLXVzZXJcIiA6IFwiZGlzYWJsZWQtdXNlclwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy5pbWFnZT8udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjODdkMDY4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyPy5uYW1lWzBdfVxyXG4gICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlJvbGU6IHt1c2VyLnJvbGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3VzZXIuaXNBY3RpdmUgPyBcImRhbmdlclwiIDogXCJzdWNjZXNzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlVXNlclN0YXR1cyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt1c2VyLmlzVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuaXNVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5pc1VwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiVXBkYXRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB1c2VyLmlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiRGlzYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiRW5hYmxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiZWRpdFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRVc2VyKHVzZXIuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDI1IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHt1c2Vyc0luUm9sZS5sZW5ndGggPiBwYWdlU2l6ZSAmJiAoXHJcbiAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICB0b3RhbD17dXNlcnNJblJvbGUubGVuZ3RofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2UpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2LCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8Um93XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiA2MCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUgPT09IFwiZGFya1wiID8gXCIjMjIyXCIgOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRoZW1lID09PSBcImRhcmtcIiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWxsIFVzZXJzICh7dXNlcnM/Lmxlbmd0aH0pXHJcbiAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8U3BpbiB0aXA9XCJMb2FkaW5nLi4uXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJDYXJkKFxyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JcIixcclxuICAgICAgICAgICAgICAgIHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5yb2xlID09PSBcIkF1dGhvclwiKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJDYXJkKFxyXG4gICAgICAgICAgICAgICAgXCJTdWJzY3JpYmVyXCIsXHJcbiAgICAgICAgICAgICAgICB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIucm9sZSA9PT0gXCJTdWJzY3JpYmVyXCIpXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckNhcmQoXHJcbiAgICAgICAgICAgICAgICBcIlJldmlld2VyXCIsXHJcbiAgICAgICAgICAgICAgICB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIucm9sZSA9PT0gXCJSZXZpZXdlclwiKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJDYXJkKFxyXG4gICAgICAgICAgICAgICAgXCJSZWFkZXJcIixcclxuICAgICAgICAgICAgICAgIHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5yb2xlID09PSBcIlJlYWRlclwiKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiUm93IiwiQ29sIiwiQ2FyZCIsIkxpc3QiLCJBdmF0YXIiLCJCdXR0b24iLCJTcGluIiwiUGFnaW5hdGlvbiIsInRvYXN0IiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJheGlvcyIsIkFkbWluTGF5b3V0IiwiVGhlbWVDb250ZXh0IiwiQWxsVXNlcnMiLCJhdXRoIiwic2V0QXV0aCIsInJvdXRlciIsInVzZXJzIiwic2V0VXNlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRoZW1lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VTaXplIiwidG9rZW4iLCJsb2FkVXNlcnMiLCJkYXRhIiwiZ2V0IiwiZmlsdGVyZWRVc2VycyIsImZpbHRlciIsInVzZXIiLCJfaWQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVUb2dnbGVVc2VyU3RhdHVzIiwiaXNVcGRhdGluZyIsInByZXYiLCJtYXAiLCJ1IiwicHV0IiwiaXNBY3RpdmUiLCJzdWNjZXNzIiwiaGFuZGxlRWRpdFVzZXIiLCJ1c2VySWQiLCJwdXNoIiwicmVuZGVyVXNlckNhcmQiLCJyb2xlIiwidXNlcnNJblJvbGUiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1c2Vyc1RvRGlzcGxheSIsInNsaWNlIiwidGl0bGUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiSXRlbSIsImNsYXNzTmFtZSIsIk1ldGEiLCJhdmF0YXIiLCJzcmMiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImVtYWlsIiwiZGl2IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwibGVuZ3RoIiwiY3VycmVudCIsInRvdGFsIiwib25DaGFuZ2UiLCJwYWdlIiwidGV4dEFsaWduIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJoMiIsImZvbnRTaXplIiwidGlwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/users/index.js\n"));

/***/ })

});