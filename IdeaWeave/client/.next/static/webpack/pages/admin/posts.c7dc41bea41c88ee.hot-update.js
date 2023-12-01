"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/posts",{

/***/ "./pages/admin/posts/index.js":
/*!************************************!*\
  !*** ./pages/admin/posts/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/grid */ \"./node_modules/antd/lib/grid/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography */ \"./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/spin */ \"./node_modules/antd/lib/spin/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PlusOutlined */ \"./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/post */ \"./context/post.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_posts_PostsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/posts/PostsList */ \"./components/posts/PostsList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { useBreakpoint } = antd_lib_grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst { Title, Text } = antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\nfunction Posts() {\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_post__WEBPACK_IMPORTED_MODULE_2__.PostContext);\n    const { posts } = post;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const screens = useBreakpoint();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    const fetchPosts = async ()=>{\n        try {\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"/posts-for-admin\");\n            setPost((prev)=>({\n                    ...prev,\n                    posts: data\n                }));\n        } catch (err) {\n            console.log(err);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleEdit = async (post)=>{\n        return router.push(\"/admin/posts/\".concat(post.slug));\n    };\n    const handleDelete = async (post)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"][\"delete\"](\"/post/\".concat(post._id));\n            if (data.ok) {\n                setPost((prev)=>({\n                        ...prev,\n                        posts: prev.posts.filter((p)=>p._id !== post._id)\n                    }));\n            }\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            gutter: [\n                16,\n                16\n            ],\n            style: {\n                marginTop: 60,\n                marginLeft: 90\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    span: 24,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            type: \"primary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/admin/posts/new\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" Add New\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            style: {\n                                marginTop: 15\n                            },\n                            level: 3,\n                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 24\n                            }, this) : \"\".concat(posts === null || posts === void 0 ? void 0 : posts.length, \" Posts\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_PostsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    posts: posts,\n                    handleDelete: handleDelete,\n                    handleEdit: handleEdit\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"7uUstOZ08EbzMl4Fg0eqV17MeKs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        useBreakpoint\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Y7QUFDdkI7QUFDMEI7QUFDWjtBQUN5QjtBQUNwQztBQUMrQjtBQUU1RCxNQUFNLEVBQUVnQixhQUFhLEVBQUUsR0FBR1YscURBQUlBO0FBQzlCLE1BQU0sRUFBRVcsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR1gsMkRBQVVBO0FBRWxDLFNBQVNZOztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHcEIsaURBQVVBLENBQUNVLHNEQUFXQTtJQUM5QyxNQUFNLEVBQUVXLEtBQUssRUFBRSxHQUFHRjtJQUNsQixNQUFNRyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTVksVUFBVVI7SUFDaEIsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUV2Q0YsZ0RBQVNBLENBQUM7UUFDUjJCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsYUFBYTtRQUNqQixJQUFJO1lBQ0ZELFdBQVc7WUFDWCxNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHLE1BQU1sQixpREFBUyxDQUFDO1lBQ2pDVyxRQUFRLENBQUNTLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRVIsT0FBT007Z0JBQUs7UUFDNUMsRUFBRSxPQUFPRyxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZCxTQUFVO1lBQ1JMLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTVEsYUFBYSxPQUFPZDtRQUN4QixPQUFPRyxPQUFPWSxJQUFJLENBQUMsZ0JBQTBCLE9BQVZmLEtBQUtnQixJQUFJO0lBQzlDO0lBRUEsTUFBTUMsZUFBZSxPQUFPakI7UUFDMUIsSUFBSTtZQUNGLE1BQU0sRUFBRVEsSUFBSSxFQUFFLEdBQUcsTUFBTWxCLHVEQUFZLENBQUMsU0FBa0IsT0FBVFUsS0FBS21CLEdBQUc7WUFDckQsSUFBSVgsS0FBS1ksRUFBRSxFQUFFO2dCQUNYbkIsUUFBUSxDQUFDUyxPQUFVO3dCQUNqQixHQUFHQSxJQUFJO3dCQUNQUixPQUFPUSxLQUFLUixLQUFLLENBQUNtQixNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUgsR0FBRyxLQUFLbkIsS0FBS21CLEdBQUc7b0JBQ3BEO1lBQ0Y7UUFDRixFQUFFLE9BQU9SLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2xCLHNFQUFXQTtrQkFDViw0RUFBQ1YscURBQUdBO1lBQUN3QyxRQUFRO2dCQUFDO2dCQUFJO2FBQUc7WUFBRUMsT0FBTztnQkFBRUMsV0FBVztnQkFBSUMsWUFBWTtZQUFHOzs4QkFDNUQsOERBQUMxQyxxREFBR0E7b0JBQUMyQyxNQUFNOztzQ0FDVCw4REFBQzFDLHdEQUFNQTs0QkFBQzJDLE1BQUs7c0NBQ1gsNEVBQUNsQyxrREFBSUE7Z0NBQUNtQyxNQUFLOztrREFDVCw4REFBQ3hDLGlGQUFZQTs7Ozs7b0NBQUc7Ozs7Ozs7Ozs7OztzQ0FHcEIsOERBQUNROzRCQUFNMkIsT0FBTztnQ0FBRUMsV0FBVzs0QkFBRzs0QkFBR0ssT0FBTztzQ0FDckN6Qix3QkFBVSw4REFBQ2pCLHNEQUFJQTs7Ozt1Q0FBTSxHQUFpQixPQUFkYyxrQkFBQUEsNEJBQUFBLE1BQU82QixNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs4QkFHM0MsOERBQUNwQyxtRUFBU0E7b0JBQUNPLE9BQU9BO29CQUFPZSxjQUFjQTtvQkFBY0gsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpFO0dBMURTZjs7UUFHUVAsa0RBQVNBO1FBQ1JJOzs7S0FKVEc7QUE0RFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcG9zdHMvaW5kZXguanM/ZDc0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIEdyaWQsIFR5cG9ncmFwaHksIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQb3N0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L3Bvc3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUG9zdHNMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Bvc3RzL1Bvc3RzTGlzdFwiO1xyXG5cclxuY29uc3QgeyB1c2VCcmVha3BvaW50IH0gPSBHcmlkO1xyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuZnVuY3Rpb24gUG9zdHMoKSB7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlQ29udGV4dChQb3N0Q29udGV4dCk7XHJcbiAgY29uc3QgeyBwb3N0cyB9ID0gcG9zdDtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzY3JlZW5zID0gdXNlQnJlYWtwb2ludCgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3Bvc3RzLWZvci1hZG1pblwiKTtcclxuICAgICAgc2V0UG9zdCgocHJldikgPT4gKHsgLi4ucHJldiwgcG9zdHM6IGRhdGEgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKHBvc3QpID0+IHtcclxuICAgIHJldHVybiByb3V0ZXIucHVzaChgL2FkbWluL3Bvc3RzLyR7cG9zdC5zbHVnfWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChwb3N0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtwb3N0Ll9pZH1gKTtcclxuICAgICAgaWYgKGRhdGEub2spIHtcclxuICAgICAgICBzZXRQb3N0KChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgIHBvc3RzOiBwcmV2LnBvc3RzLmZpbHRlcigocCkgPT4gcC5faWQgIT09IHBvc3QuX2lkKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gc3R5bGU9e3sgbWFyZ2luVG9wOiA2MCwgbWFyZ2luTGVmdDogOTAgfX0+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcG9zdHMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBBZGQgTmV3XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPFRpdGxlIHN0eWxlPXt7IG1hcmdpblRvcDogMTUgfX0gbGV2ZWw9ezN9PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IDxTcGluIC8+IDogYCR7cG9zdHM/Lmxlbmd0aH0gUG9zdHNgfVxyXG4gICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8UG9zdHNMaXN0IHBvc3RzPXtwb3N0c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IGhhbmRsZUVkaXQ9e2hhbmRsZUVkaXR9IC8+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiU3BpbiIsIlBsdXNPdXRsaW5lZCIsImF4aW9zIiwiUG9zdENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJBZG1pbkxheW91dCIsIkxpbmsiLCJQb3N0c0xpc3QiLCJ1c2VCcmVha3BvaW50IiwiVGl0bGUiLCJUZXh0IiwiUG9zdHMiLCJwb3N0Iiwic2V0UG9zdCIsInBvc3RzIiwicm91dGVyIiwic2NyZWVucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQb3N0cyIsImRhdGEiLCJnZXQiLCJwcmV2IiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJwdXNoIiwic2x1ZyIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsIl9pZCIsIm9rIiwiZmlsdGVyIiwicCIsImd1dHRlciIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInNwYW4iLCJ0eXBlIiwiaHJlZiIsImxldmVsIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/posts/index.js\n"));

/***/ })

});