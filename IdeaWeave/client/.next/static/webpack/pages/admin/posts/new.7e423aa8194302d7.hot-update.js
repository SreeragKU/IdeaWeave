"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/posts/new",{

/***/ "./pages/admin/posts/new.js":
/*!**********************************!*\
  !*** ./pages/admin/posts/new.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-file-resizer */ \"./node_modules/react-image-file-resizer/build/index.js\");\n/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst QuillNoSSRWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"admin\\\\posts\\\\new.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 11,\n            columnNumber: 18\n        }, undefined)\n});\n_c = QuillNoSSRWrapper;\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst quillModules = {\n    toolbar: [\n        [\n            {\n                font: []\n            }\n        ],\n        [\n            {\n                size: [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            {\n                color: []\n            },\n            {\n                background: []\n            }\n        ],\n        [\n            {\n                list: \"ordered\"\n            },\n            {\n                list: \"bullet\"\n            }\n        ],\n        [\n            {\n                script: \"sub\"\n            },\n            {\n                script: \"super\"\n            }\n        ],\n        [\n            {\n                indent: \"-1\"\n            },\n            {\n                indent: \"+1\"\n            }\n        ],\n        [\n            {\n                direction: \"rtl\"\n            }\n        ],\n        [\n            {\n                align: []\n            }\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\"\n        ],\n        [\n            {\n                header: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            \"clean\"\n        ]\n    ],\n    clipboard: {\n        matchVisual: false\n    }\n};\nconst quillFormats = [\n    \"font\",\n    \"size\",\n    \"bold\",\n    \"italic\",\n    \"underline\",\n    \"strike\",\n    \"blockquote\",\n    \"list\",\n    \"bullet\",\n    \"indent\",\n    \"link\",\n    \"image\",\n    \"video\",\n    \"script\",\n    \"align\",\n    \"color\",\n    \"background\"\n];\nfunction NewPost() {\n    _s();\n    const savedTitle =  true ? JSON.parse(localStorage.getItem(\"post-title\")) || \"\" : 0;\n    const savedContent =  true ? JSON.parse(localStorage.getItem(\"post-content\")) || \"\" : 0;\n    const [quillContent, setQuillContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedContent);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedTitle);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"post-title\", JSON.stringify(title));\n        }\n    }, [\n        title\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"post-content\", JSON.stringify(quillContent));\n        }\n    }, [\n        quillContent\n    ]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loadedCategories, setLoadedCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadCategories();\n    }, []);\n    const loadCategories = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/category\");\n            setLoadedCategories(data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleQuillChange = async (content, delta, source, editor)=>{\n        const insertedImages = delta.ops.filter((op)=>op.insert && op.insert.image);\n        for (const op of insertedImages){\n            if (op.insert.image.startsWith(\"data:image/\")) {\n                continue; // Skip base64 images\n            } else {\n                // The image is not in base64 format, proceed with regular upload\n                const resizedImage = await resizeImage(op.insert.image);\n                const base64Image = await imageToBase64(resizedImage);\n                if (base64Image) {\n                    op.insert.image = base64Image;\n                    console.log(\"Image (Base64):\", base64Image);\n                }\n            }\n        }\n        setQuillContent(content);\n    };\n    const uploadImage = async (base64Image)=>{\n        try {\n            // Prepare the data to send to the server\n            const formData = new FormData();\n            formData.append(\"image\", base64Image);\n            // Send the processed image data to the server using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/upload-image\", formData);\n            // Handle the server's response here if needed\n            console.log(\"Server response:\", response.data);\n            return response.data.url; // Return the image URL from the server\n        } catch (error) {\n            console.error(\"Image upload error:\", error);\n            return null;\n        }\n        ;\n    };\n    const resizeImage = (file)=>new Promise((resolve)=>{\n            react_image_file_resizer__WEBPACK_IMPORTED_MODULE_5___default().imageFileResizer(file, 720, 400, \"JPEG\", 100, 0, (uri)=>{\n                resolve(uri);\n            }, \"base64\");\n        });\n    const imageToBase64 = (image)=>new Promise((resolve)=>{\n            const reader = new FileReader();\n            reader.onload = ()=>{\n                resolve(reader.result);\n            };\n            reader.readAsDataURL(image);\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    span: 14,\n                    offset: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Create a new post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 169,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            value: title,\n                            size: \"large\",\n                            placeholder: \"Give your post a title\",\n                            onChange: (e)=>{\n                                setTitle(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 170,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 178,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillNoSSRWrapper, {\n                            modules: quillModules,\n                            formats: quillFormats,\n                            placeholder: \"Compose here...\",\n                            value: quillContent,\n                            onChange: handleQuillChange,\n                            theme: \"snow\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 188,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 189,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    span: 6,\n                    offset: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Categories\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 193,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            mode: \"multiple\",\n                            allowClear: true,\n                            placeholder: \"Select categories\",\n                            style: {\n                                width: \"100%\"\n                            },\n                            onChange: (v)=>setCategories(v),\n                            children: loadedCategories.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                    children: item.name\n                                }, item.name, false, {\n                                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                                    lineNumber: 202,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                            lineNumber: 194,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n                    lineNumber: 192,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n            lineNumber: 167,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.js\",\n        lineNumber: 166,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPost, \"sBWfjrMP+yX9Lm8qCo4WwHVEwx8=\");\n_c1 = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"QuillNoSSRWrapper\");\n$RefreshReg$(_c1, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxDQUFDQyxxQkFDckIsOERBQUMzRjs4Q0FBd0IyRixLQUFLQyxJQUFJO21DQUFyQkQsS0FBS0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBdkpTNUU7TUFBQUE7QUF5SlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcG9zdHMvbmV3LmpzPzViNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwicmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IExheW91dCwgU2VsZWN0LCBSb3csIENvbCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluTGF5b3V0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5cclxuY29uc3QgUXVpbGxOb1NTUldyYXBwZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXF1aWxsXCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIC4uLjwvcD4sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBxdWlsbE1vZHVsZXMgPSB7XHJcbiAgdG9vbGJhcjogW1xyXG4gICAgW3sgZm9udDogW10gfV0sXHJcbiAgICBbeyBzaXplOiBbXCJzbWFsbFwiLCBmYWxzZSwgXCJsYXJnZVwiLCBcImh1Z2VcIl0gfV0sXHJcbiAgICBbXCJib2xkXCIsIFwiaXRhbGljXCIsIFwidW5kZXJsaW5lXCIsIFwic3RyaWtlXCJdLFxyXG4gICAgW1wiYmxvY2txdW90ZVwiLCBcImNvZGUtYmxvY2tcIl0sXHJcbiAgICBbeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9XSxcclxuICAgIFt7IGxpc3Q6IFwib3JkZXJlZFwiIH0sIHsgbGlzdDogXCJidWxsZXRcIiB9XSxcclxuICAgIFt7IHNjcmlwdDogXCJzdWJcIiB9LCB7IHNjcmlwdDogXCJzdXBlclwiIH1dLFxyXG4gICAgW3sgaW5kZW50OiBcIi0xXCIgfSwgeyBpbmRlbnQ6IFwiKzFcIiB9XSxcclxuICAgIFt7IGRpcmVjdGlvbjogXCJydGxcIiB9XSxcclxuICAgIFt7IGFsaWduOiBbXSB9XSxcclxuICAgIFtcImxpbmtcIiwgXCJpbWFnZVwiLCBcInZpZGVvXCJdLFxyXG4gICAgW3sgaGVhZGVyOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgW1wiY2xlYW5cIl0sXHJcbiAgXSxcclxuICBjbGlwYm9hcmQ6IHtcclxuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgcXVpbGxGb3JtYXRzID0gW1xyXG4gIFwiZm9udFwiLFxyXG4gIFwic2l6ZVwiLFxyXG4gIFwiYm9sZFwiLFxyXG4gIFwiaXRhbGljXCIsXHJcbiAgXCJ1bmRlcmxpbmVcIixcclxuICBcInN0cmlrZVwiLFxyXG4gIFwiYmxvY2txdW90ZVwiLFxyXG4gIFwibGlzdFwiLFxyXG4gIFwiYnVsbGV0XCIsXHJcbiAgXCJpbmRlbnRcIixcclxuICBcImxpbmtcIixcclxuICBcImltYWdlXCIsXHJcbiAgXCJ2aWRlb1wiLFxyXG4gIFwic2NyaXB0XCIsXHJcbiAgXCJhbGlnblwiLFxyXG4gIFwiY29sb3JcIixcclxuICBcImJhY2tncm91bmRcIixcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE5ld1Bvc3QoKSB7XHJcbiAgY29uc3Qgc2F2ZWRUaXRsZSA9XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3QtdGl0bGVcIikpIHx8IFwiXCJcclxuICAgICAgOiBcIlwiO1xyXG4gIGNvbnN0IHNhdmVkQ29udGVudCA9XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3QtY29udGVudFwiKSkgfHwgXCJcIlxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gIGNvbnN0IFtxdWlsbENvbnRlbnQsIHNldFF1aWxsQ29udGVudF0gPSB1c2VTdGF0ZShzYXZlZENvbnRlbnQpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoc2F2ZWRUaXRsZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvc3QtdGl0bGVcIiwgSlNPTi5zdHJpbmdpZnkodGl0bGUpKTtcclxuICAgIH1cclxuICB9LCBbdGl0bGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicG9zdC1jb250ZW50XCIsIEpTT04uc3RyaW5naWZ5KHF1aWxsQ29udGVudCkpO1xyXG4gICAgfVxyXG4gIH0sIFtxdWlsbENvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZWRDYXRlZ29yaWVzLCBzZXRMb2FkZWRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDYXRlZ29yaWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2NhdGVnb3J5XCIpO1xyXG4gICAgICBzZXRMb2FkZWRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVF1aWxsQ2hhbmdlID0gYXN5bmMgKGNvbnRlbnQsIGRlbHRhLCBzb3VyY2UsIGVkaXRvcikgPT4ge1xyXG4gICAgY29uc3QgaW5zZXJ0ZWRJbWFnZXMgPSBkZWx0YS5vcHMuZmlsdGVyKChvcCkgPT4gb3AuaW5zZXJ0ICYmIG9wLmluc2VydC5pbWFnZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBvcCBvZiBpbnNlcnRlZEltYWdlcykge1xyXG4gICAgICBpZiAob3AuaW5zZXJ0LmltYWdlLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL1wiKSkge1xyXG4gICAgICAgIC8vIFRoZSBpbWFnZSBpcyBpbiBiYXNlNjQgZm9ybWF0LCBkaXJlY3RseSB1cGxvYWQgaXRcclxuICAgICAgICBjb250aW51ZTsgLy8gU2tpcCBiYXNlNjQgaW1hZ2VzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVGhlIGltYWdlIGlzIG5vdCBpbiBiYXNlNjQgZm9ybWF0LCBwcm9jZWVkIHdpdGggcmVndWxhciB1cGxvYWRcclxuICAgICAgICBjb25zdCByZXNpemVkSW1hZ2UgPSBhd2FpdCByZXNpemVJbWFnZShvcC5pbnNlcnQuaW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gYXdhaXQgaW1hZ2VUb0Jhc2U2NChyZXNpemVkSW1hZ2UpO1xyXG4gICAgICAgIGlmIChiYXNlNjRJbWFnZSkge1xyXG4gICAgICAgICAgb3AuaW5zZXJ0LmltYWdlID0gYmFzZTY0SW1hZ2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkltYWdlIChCYXNlNjQpOlwiLCBiYXNlNjRJbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UXVpbGxDb250ZW50KGNvbnRlbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKGJhc2U2NEltYWdlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQcmVwYXJlIHRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZlclxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBiYXNlNjRJbWFnZSk7XHJcbiAgXHJcbiAgICAgIC8vIFNlbmQgdGhlIHByb2Nlc3NlZCBpbWFnZSBkYXRhIHRvIHRoZSBzZXJ2ZXIgdXNpbmcgQXhpb3NcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3VwbG9hZC1pbWFnZVwiLCBmb3JtRGF0YSk7XHJcbiAgXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgc2VydmVyJ3MgcmVzcG9uc2UgaGVyZSBpZiBuZWVkZWRcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVzcG9uc2U6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS51cmw7IC8vIFJldHVybiB0aGUgaW1hZ2UgVVJMIGZyb20gdGhlIHNlcnZlclxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkltYWdlIHVwbG9hZCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuXHJcbiAgY29uc3QgcmVzaXplSW1hZ2UgPSAoZmlsZSkgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihcclxuICAgICAgICBmaWxlLFxyXG4gICAgICAgIDcyMCxcclxuICAgICAgICA0MDAsXHJcbiAgICAgICAgXCJKUEVHXCIsXHJcbiAgICAgICAgMTAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgKHVyaSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh1cmkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiYXNlNjRcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlVG9CYXNlNjQgPSAoaW1hZ2UpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTR9IG9mZnNldD17MX0+XHJcbiAgICAgICAgICA8aDE+Q3JlYXRlIGEgbmV3IHBvc3Q8L2gxPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIHlvdXIgcG9zdCBhIHRpdGxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8UXVpbGxOb1NTUldyYXBwZXJcclxuICAgICAgICAgICAgbW9kdWxlcz17cXVpbGxNb2R1bGVzfVxyXG4gICAgICAgICAgICBmb3JtYXRzPXtxdWlsbEZvcm1hdHN9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tcG9zZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e3F1aWxsQ29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1aWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aGVtZT1cInNub3dcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7LyogWW91ciBvdGhlciBjb250ZW50ICovfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0gb2Zmc2V0PXsxfT5cclxuICAgICAgICAgIDxoND5DYXRlZ29yaWVzPC9oND5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgYWxsb3dDbGVhcj17dHJ1ZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldENhdGVnb3JpZXModil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkZWRDYXRlZ29yaWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtLm5hbWV9PntpdGVtLm5hbWV9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTGF5b3V0IiwiU2VsZWN0IiwiUm93IiwiQ29sIiwiSW5wdXQiLCJBZG1pbkxheW91dCIsImR5bmFtaWMiLCJSZXNpemVyIiwiUXVpbGxOb1NTUldyYXBwZXIiLCJzc3IiLCJsb2FkaW5nIiwicCIsIkNvbnRlbnQiLCJPcHRpb24iLCJxdWlsbE1vZHVsZXMiLCJ0b29sYmFyIiwiZm9udCIsInNpemUiLCJjb2xvciIsImJhY2tncm91bmQiLCJsaXN0Iiwic2NyaXB0IiwiaW5kZW50IiwiZGlyZWN0aW9uIiwiYWxpZ24iLCJoZWFkZXIiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsInF1aWxsRm9ybWF0cyIsIk5ld1Bvc3QiLCJzYXZlZFRpdGxlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkQ29udGVudCIsInF1aWxsQ29udGVudCIsInNldFF1aWxsQ29udGVudCIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsb2FkZWRDYXRlZ29yaWVzIiwic2V0TG9hZGVkQ2F0ZWdvcmllcyIsImxvYWRDYXRlZ29yaWVzIiwiZGF0YSIsImdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVF1aWxsQ2hhbmdlIiwiY29udGVudCIsImRlbHRhIiwic291cmNlIiwiZWRpdG9yIiwiaW5zZXJ0ZWRJbWFnZXMiLCJvcHMiLCJmaWx0ZXIiLCJvcCIsImluc2VydCIsImltYWdlIiwic3RhcnRzV2l0aCIsInJlc2l6ZWRJbWFnZSIsInJlc2l6ZUltYWdlIiwiYmFzZTY0SW1hZ2UiLCJpbWFnZVRvQmFzZTY0IiwidXBsb2FkSW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwidXJsIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1hZ2VGaWxlUmVzaXplciIsInVyaSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic3BhbiIsIm9mZnNldCIsImgxIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwibW9kdWxlcyIsImZvcm1hdHMiLCJ0aGVtZSIsImg0IiwibW9kZSIsImFsbG93Q2xlYXIiLCJzdHlsZSIsIndpZHRoIiwidiIsIm1hcCIsIml0ZW0iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.js\n"));

/***/ })

});