"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/author/media/library",{

/***/ "./components/media/MediaLibrary.js":
/*!******************************************!*\
  !*** ./components/media/MediaLibrary.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/upload */ \"./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/image */ \"./node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/badge */ \"./node_modules/antd/lib/badge/index.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CloseCircleOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CloseCircleOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_InboxOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/InboxOutlined */ \"./node_modules/@ant-design/icons/lib/icons/InboxOutlined.js\");\n/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media */ \"./context/media.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst { Dragger } = antd_lib_upload__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst MediaLibrary = ()=>{\n    var _media_images;\n    _s();\n    // context\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_3__.MediaContext);\n    const [showPreview, setShowMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMedia = async ()=>{\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/media\");\n                setMedia((prev)=>({\n                        ...prev,\n                        images: data\n                    }));\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchMedia();\n    }, []);\n    const props = {\n        name: \"file\",\n        multiple: true,\n        action: \"\".concat(\"http://localhost:8000/api\", \"/upload-image-file\"),\n        headers: {\n            Authorization: \"Bearer \".concat(auth.token)\n        },\n        onChange (info) {\n            if (info.file.status !== \"uploading\") {\n                console.log(info.file, info.fileList);\n            }\n            if (info.file.status === \"done\") {\n                antd_lib_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success(\"\".concat(info.file.name, \" file uploaded successfully\"));\n                setMedia({\n                    images: [\n                        ...media.images,\n                        info.file.response\n                    ],\n                    selected: info.file.response,\n                    showMediaModal: false\n                });\n            } else if (info.file.status === \"error\") {\n                antd_lib_message__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(\"\".concat(info.file.name, \" file upload failed.\"));\n            }\n        },\n        onDrop (e) {\n            console.log(\"Dropped files\", e.dataTransfer.files);\n        }\n    };\n    const handleImageDelete = async (imageId)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"/media/\".concat(imageId));\n            if (data.ok) {\n                setMedia({\n                    ...media,\n                    images: media.images.filter((image)=>image._id !== imageId),\n                    selected: null\n                });\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Image deleted successfully\");\n            }\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"75%\",\n                    margin: \"0 auto\",\n                    marginTop: 80\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dragger, {\n                    ...props,\n                    accept: \"image/*\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"ant-upload-drag-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_InboxOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"ant-upload-text\",\n                            children: \"Click or drag file to this area to upload\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: 20\n                },\n                children: media === null || media === void 0 ? void 0 : (_media_images = media.images) === null || _media_images === void 0 ? void 0 : _media_images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_badge__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                onClick: ()=>setMedia({\n                                        ...media,\n                                        selected: image\n                                    }),\n                                preview: showPreview,\n                                src: image.url,\n                                style: {\n                                    paddingTop: 5,\n                                    paddingRight: 10,\n                                    height: \"100px\",\n                                    width: \"100px\",\n                                    objectFit: \"cover\",\n                                    cursor: \"pointer\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            image === null || image === void 0 ? void 0 : image.posted,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CloseCircleOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                onClick: ()=>handleImageDelete(image._id),\n                                style: {\n                                    marginTop: \"7px\",\n                                    color: \"#f5222d\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, image._id, true, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\media\\\\MediaLibrary.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MediaLibrary, \"a9B57ljeeIgq9vaQhS8KcYWIaqU=\");\n_c = MediaLibrary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaLibrary);\nvar _c;\n$RefreshReg$(_c, \"MediaLibrary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFELGlGQUFhQTs7Ozs7Ozs7OztzQ0FFaEIsOERBQUN5RDs0QkFBRUMsV0FBVTtzQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uQyw4REFBQ1A7Z0JBQUlDLE9BQU87b0JBQUVPLFdBQVc7b0JBQVVKLFdBQVc7Z0JBQUc7MEJBQzlDakQsa0JBQUFBLDZCQUFBQSxnQkFBQUEsTUFBT1UsTUFBTSxjQUFiVixvQ0FBQUEsY0FBZXNELEdBQUcsQ0FBQyxDQUFDWCxzQkFDbkIsOERBQUNwRCxzREFBS0E7OzBDQUNKLDhEQUFDRCx1REFBS0E7Z0NBQ0ppRSxTQUFTLElBQU1wRCxTQUFTO3dDQUFFLEdBQUdILEtBQUs7d0NBQUUrQixVQUFVWTtvQ0FBTTtnQ0FDcERhLFNBQVNwRDtnQ0FDVHFELEtBQUtkLE1BQU1lLEdBQUc7Z0NBQ2RaLE9BQU87b0NBQ0xhLFlBQVk7b0NBQ1pDLGNBQWM7b0NBQ2RDLFFBQVE7b0NBQ1JkLE9BQU87b0NBQ1BlLFdBQVc7b0NBQ1hDLFFBQVE7Z0NBQ1Y7Ozs7OzswQ0FFRiw4REFBQ0M7Ozs7OzRCQUNBckIsa0JBQUFBLDRCQUFBQSxNQUFPc0IsTUFBTTswQ0FDZCw4REFBQ3hFLHdGQUFtQkE7Z0NBQ2xCOEQsU0FBUyxJQUFNakIsa0JBQWtCSyxNQUFNQyxHQUFHO2dDQUMxQ0UsT0FBTztvQ0FBRUcsV0FBVztvQ0FBT2lCLE9BQU87Z0NBQVU7Ozs7Ozs7dUJBbEJwQ3ZCLE1BQU1DLEdBQUc7Ozs7Ozs7Ozs7OztBQXlCL0I7R0FyR003QztLQUFBQTtBQXVHTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lZGlhL01lZGlhTGlicmFyeS5qcz83NzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVwbG9hZCwgbWVzc2FnZSwgSW1hZ2UsIEJhZGdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hdXRoXCI7XHJcbmltcG9ydCB7IENsb3NlQ2lyY2xlT3V0bGluZWQsIEluYm94T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbWVkaWFcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuY29uc3QgTWVkaWFMaWJyYXJ5ID0gKCkgPT4ge1xyXG4gIC8vIGNvbnRleHRcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd1ByZXZpZXcsIHNldFNob3dNZWRpYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE1lZGlhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL21lZGlhXCIpO1xyXG4gICAgICAgIHNldE1lZGlhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBpbWFnZXM6IGRhdGEgfSkpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hNZWRpYSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICBuYW1lOiBcImZpbGVcIixcclxuICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgYWN0aW9uOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L3VwbG9hZC1pbWFnZS1maWxlYCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGgudG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7XHJcbiAgICAgICAgc2V0TWVkaWEoe1xyXG4gICAgICAgICAgaW1hZ2VzOiBbLi4ubWVkaWEuaW1hZ2VzLCBpbmZvLmZpbGUucmVzcG9uc2VdLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGluZm8uZmlsZS5yZXNwb25zZSxcclxuICAgICAgICAgIHNob3dNZWRpYU1vZGFsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRyb3AoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRyb3BwZWQgZmlsZXNcIiwgZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZURlbGV0ZSA9IGFzeW5jIChpbWFnZUlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL21lZGlhLyR7aW1hZ2VJZH1gKTtcclxuICAgICAgaWYgKGRhdGEub2spIHtcclxuICAgICAgICBzZXRNZWRpYSh7XHJcbiAgICAgICAgICAuLi5tZWRpYSxcclxuICAgICAgICAgIGltYWdlczogbWVkaWEuaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IGltYWdlLl9pZCAhPT0gaW1hZ2VJZCksXHJcbiAgICAgICAgICBzZWxlY3RlZDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiSW1hZ2UgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIG1hcmdpblRvcDogODAgfX0+XHJcbiAgICAgICAgPERyYWdnZXIgey4uLnByb3BzfSBhY2NlcHQ9XCJpbWFnZS8qXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgIENsaWNrIG9yIGRyYWcgZmlsZSB0byB0aGlzIGFyZWEgdG8gdXBsb2FkXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgIHttZWRpYT8uaW1hZ2VzPy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICA8QmFkZ2Uga2V5PXtpbWFnZS5faWR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZWRpYSh7IC4uLm1lZGlhLCBzZWxlY3RlZDogaW1hZ2UgfSl9XHJcbiAgICAgICAgICAgICAgcHJldmlldz17c2hvd1ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDUsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7aW1hZ2U/LnBvc3RlZH1cclxuICAgICAgICAgICAgPENsb3NlQ2lyY2xlT3V0bGluZWRcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbWFnZURlbGV0ZShpbWFnZS5faWQpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3cHhcIiwgY29sb3I6IFwiI2Y1MjIyZFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYUxpYnJhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVwbG9hZCIsIm1lc3NhZ2UiLCJJbWFnZSIsIkJhZGdlIiwiQXV0aENvbnRleHQiLCJDbG9zZUNpcmNsZU91dGxpbmVkIiwiSW5ib3hPdXRsaW5lZCIsIk1lZGlhQ29udGV4dCIsImF4aW9zIiwidG9hc3QiLCJEcmFnZ2VyIiwiTWVkaWFMaWJyYXJ5IiwibWVkaWEiLCJhdXRoIiwic2V0QXV0aCIsInNldE1lZGlhIiwic2hvd1ByZXZpZXciLCJzZXRTaG93TWVkaWEiLCJmZXRjaE1lZGlhIiwiZGF0YSIsImdldCIsInByZXYiLCJpbWFnZXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJuYW1lIiwibXVsdGlwbGUiLCJhY3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsIm9uQ2hhbmdlIiwiaW5mbyIsImZpbGUiLCJzdGF0dXMiLCJmaWxlTGlzdCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInNlbGVjdGVkIiwic2hvd01lZGlhTW9kYWwiLCJlcnJvciIsIm9uRHJvcCIsImUiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImhhbmRsZUltYWdlRGVsZXRlIiwiaW1hZ2VJZCIsImRlbGV0ZSIsIm9rIiwiZmlsdGVyIiwiaW1hZ2UiLCJfaWQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiYWNjZXB0IiwicCIsImNsYXNzTmFtZSIsInRleHRBbGlnbiIsIm1hcCIsIm9uQ2xpY2siLCJwcmV2aWV3Iiwic3JjIiwidXJsIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsImhlaWdodCIsIm9iamVjdEZpdCIsImN1cnNvciIsImJyIiwicG9zdGVkIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/media/MediaLibrary.js\n"));

/***/ })

});