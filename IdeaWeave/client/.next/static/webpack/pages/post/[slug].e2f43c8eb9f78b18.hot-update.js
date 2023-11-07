"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SinglePost: function() { return /* binding */ SinglePost; },\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/typography */ \"./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BookFront__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookFront */ \"./pages/post/BookFront.js\");\n/* harmony import */ var _components_nav_BookNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/nav/BookNav */ \"./components/nav/BookNav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst { Title } = antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst { Meta } = antd_lib_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"post\\\\[slug].js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\nconst themes = {\n    Default: {\n        fontSize: 1.2,\n        lineHeight: 1.6,\n        backgroundColor: \"#F0F2F5\",\n        color: \"black\"\n    },\n    Fire: {\n        fontSize: 1.3,\n        lineHeight: 1.7,\n        backgroundColor: \"#FF6B6B\",\n        color: \"black\"\n    },\n    Ocean: {\n        fontSize: 1.3,\n        lineHeight: 1.7,\n        backgroundColor: \"#36A2A6\",\n        color: \"white\"\n    },\n    Forest: {\n        fontSize: 1.3,\n        lineHeight: 1.7,\n        backgroundColor: \"#4CAF50\",\n        color: \"white\"\n    },\n    Sunset: {\n        fontSize: 1.3,\n        lineHeight: 1.7,\n        backgroundColor: \"#FFAC5D\",\n        color: \"black\"\n    },\n    Midnight: {\n        fontSize: 1.2,\n        lineHeight: 1.6,\n        backgroundColor: \"#20232A\",\n        color: \"white\"\n    }\n};\nconst ReadOnlyQuill = (param)=>{\n    let { content, theme, zoomLevel } = param;\n    const quillStyle = {\n        height: \"auto\",\n        fontSize: \"\".concat(themes[theme].fontSize * zoomLevel, \"rem\"),\n        lineHeight: \"\".concat(themes[theme].lineHeight * zoomLevel),\n        backgroundColor: themes[theme].backgroundColor,\n        color: themes[theme].color\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n            value: content,\n            readOnly: true,\n            theme: \"bubble\",\n            modules: {\n                toolbar: false\n            },\n            style: quillStyle\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ReadOnlyQuill;\nvar __N_SSP = true;\nconst SinglePost = (param)=>{\n    let { post } = param;\n    _s();\n    const [zoomLevel, setZoomLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedTheme, setSelectedTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Default\");\n    const quillRef = useRef(null);\n    const handleZoomIn = ()=>{\n        if (zoomLevel < 2) {\n            setZoomLevel(zoomLevel + 0.1);\n        }\n    };\n    const handleZoomOut = ()=>{\n        if (zoomLevel > 0.5) {\n            setZoomLevel(zoomLevel - 0.1);\n        }\n    };\n    const handleThemeChange = (theme)=>{\n        setSelectedTheme(theme);\n    };\n    const handleTextToSpeech = ()=>{\n        speakText(post.content);\n    };\n    const speakText = (text)=>{\n        if (\"speechSynthesis\" in window) {\n            const synthesis = window.speechSynthesis;\n            const utterance = new SpeechSynthesisUtterance(text);\n            synthesis.speak(utterance);\n        } else {\n            alert(\"Text-to-Speech is not supported in your browser.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_BookNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onZoomIn: handleZoomIn,\n                onZoomOut: handleZoomOut,\n                onThemeChange: handleThemeChange,\n                onTextToSpeech: handleTextToSpeech,\n                postContent: postContent\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookFront__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                post: post\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: post.content.substring(0, 160)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                justify: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    xs: 24,\n                    xl: 16,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReadOnlyQuill, {\n                            content: post.content,\n                            theme: selectedTheme,\n                            zoomLevel: zoomLevel,\n                            ref: quillRef\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"NBNmg9WvqALw9IUMcNNtHy4JPNk=\");\n_c2 = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"ReadOnlyQuill\");\n$RefreshReg$(_c2, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1BOzs7Ozs7MEJBQ2pCLDhEQUFDaEMsa0RBQUlBOztrQ0FDSCw4REFBQ3dEO2tDQUFPeEIsS0FBS3dCLEtBQUs7Ozs7OztrQ0FDbEIsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjdEMsU0FBU1ksS0FBS1osT0FBTyxDQUFDdUMsU0FBUyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7OzswQkFFOUQsOERBQUNoRSxvREFBR0E7Z0JBQUNpRSxTQUFROzBCQUNYLDRFQUFDaEUsb0RBQUdBO29CQUFDaUUsSUFBSTtvQkFBSUMsSUFBSTs4QkFDZiw0RUFBQ2pFLHFEQUFJQTtrQ0FDSCw0RUFBQ3NCOzRCQUNDQyxTQUFTWSxLQUFLWixPQUFPOzRCQUNyQkMsT0FBT2E7NEJBQ1BaLFdBQVdBOzRCQUNYeUMsS0FBSzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQixFQUFFO0dBL0RXTDtNQUFBQTtBQTBFYiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBCb29rRnJvbnQgZnJvbSBcIi4vQm9va0Zyb250XCI7XHJcbmltcG9ydCBCdWJibGVOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2L0Jvb2tOYXZcIjtcclxuXHJcbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXF1aWxsXCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB0aGVtZXMgPSB7XHJcbiAgRGVmYXVsdDoge1xyXG4gICAgZm9udFNpemU6IDEuMixcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBGMkY1XCIsXHJcbiAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gIH0sXHJcbiAgRmlyZToge1xyXG4gICAgZm9udFNpemU6IDEuMyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY2QjZCXCIsXHJcbiAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gIH0sXHJcbiAgT2NlYW46IHtcclxuICAgIGZvbnRTaXplOiAxLjMsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM2QTJBNlwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9LFxyXG4gIEZvcmVzdDoge1xyXG4gICAgZm9udFNpemU6IDEuMyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNENBRjUwXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbiAgU3Vuc2V0OiB7XHJcbiAgICBmb250U2l6ZTogMS4zLFxyXG4gICAgbGluZUhlaWdodDogMS43LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkFDNURcIixcclxuICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgfSxcclxuICBNaWRuaWdodDoge1xyXG4gICAgZm9udFNpemU6IDEuMixcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjAyMzJBXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBSZWFkT25seVF1aWxsID0gKHsgY29udGVudCwgdGhlbWUsIHpvb21MZXZlbCB9KSA9PiB7XHJcbiAgY29uc3QgcXVpbGxTdHlsZSA9IHtcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBmb250U2l6ZTogYCR7dGhlbWVzW3RoZW1lXS5mb250U2l6ZSAqIHpvb21MZXZlbH1yZW1gLFxyXG4gICAgbGluZUhlaWdodDogYCR7dGhlbWVzW3RoZW1lXS5saW5lSGVpZ2h0ICogem9vbUxldmVsfWAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lc1t0aGVtZV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgY29sb3I6IHRoZW1lc1t0aGVtZV0uY29sb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgdGhlbWU9XCJidWJibGVcIlxyXG4gICAgICAgIG1vZHVsZXM9e3sgdG9vbGJhcjogZmFsc2UgfX1cclxuICAgICAgICBzdHlsZT17cXVpbGxTdHlsZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IFt6b29tTGV2ZWwsIHNldFpvb21MZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUaGVtZSwgc2V0U2VsZWN0ZWRUaGVtZV0gPSB1c2VTdGF0ZShcIkRlZmF1bHRcIik7XHJcbiAgY29uc3QgcXVpbGxSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVpvb21JbiA9ICgpID0+IHtcclxuICAgIGlmICh6b29tTGV2ZWwgPCAyKSB7XHJcbiAgICAgIHNldFpvb21MZXZlbCh6b29tTGV2ZWwgKyAwLjEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoem9vbUxldmVsID4gMC41KSB7XHJcbiAgICAgIHNldFpvb21MZXZlbCh6b29tTGV2ZWwgLSAwLjEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRoZW1lQ2hhbmdlID0gKHRoZW1lKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRoZW1lKHRoZW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXh0VG9TcGVlY2ggPSAoKSA9PiB7XHJcbiAgICBzcGVha1RleHQocG9zdC5jb250ZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzcGVha1RleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgaWYgKFwic3BlZWNoU3ludGhlc2lzXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGNvbnN0IHN5bnRoZXNpcyA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXM7XHJcbiAgICAgIGNvbnN0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGV4dCk7XHJcbiAgICAgIHN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJUZXh0LXRvLVNwZWVjaCBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgYnJvd3Nlci5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdWJibGVOYXZcclxuICAgICAgICBvblpvb21Jbj17aGFuZGxlWm9vbUlufVxyXG4gICAgICAgIG9uWm9vbU91dD17aGFuZGxlWm9vbU91dH1cclxuICAgICAgICBvblRoZW1lQ2hhbmdlPXtoYW5kbGVUaGVtZUNoYW5nZX1cclxuICAgICAgICBvblRleHRUb1NwZWVjaD17aGFuZGxlVGV4dFRvU3BlZWNofVxyXG4gICAgICAgIHBvc3RDb250ZW50PXtwb3N0Q29udGVudH1cclxuICAgICAgLz5cclxuICAgICAgPEJvb2tGcm9udCBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDE2MCl9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IHhsPXsxNn0+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPFJlYWRPbmx5UXVpbGxcclxuICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgdGhlbWU9e3NlbGVjdGVkVGhlbWV9XHJcbiAgICAgICAgICAgICAgem9vbUxldmVsPXt6b29tTGV2ZWx9XHJcbiAgICAgICAgICAgICAgcmVmPXtxdWlsbFJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9wb3N0LyR7cGFyYW1zLnNsdWd9YCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUm93IiwiQ29sIiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJIZWFkIiwiZHluYW1pYyIsIkJvb2tGcm9udCIsIkJ1YmJsZU5hdiIsIlRpdGxlIiwiTWV0YSIsIlJlYWN0UXVpbGwiLCJzc3IiLCJ0aGVtZXMiLCJEZWZhdWx0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJGaXJlIiwiT2NlYW4iLCJGb3Jlc3QiLCJTdW5zZXQiLCJNaWRuaWdodCIsIlJlYWRPbmx5UXVpbGwiLCJjb250ZW50IiwidGhlbWUiLCJ6b29tTGV2ZWwiLCJxdWlsbFN0eWxlIiwiaGVpZ2h0IiwiZGl2IiwidmFsdWUiLCJyZWFkT25seSIsIm1vZHVsZXMiLCJ0b29sYmFyIiwic3R5bGUiLCJTaW5nbGVQb3N0IiwicG9zdCIsInNldFpvb21MZXZlbCIsInNlbGVjdGVkVGhlbWUiLCJzZXRTZWxlY3RlZFRoZW1lIiwicXVpbGxSZWYiLCJ1c2VSZWYiLCJoYW5kbGVab29tSW4iLCJoYW5kbGVab29tT3V0IiwiaGFuZGxlVGhlbWVDaGFuZ2UiLCJoYW5kbGVUZXh0VG9TcGVlY2giLCJzcGVha1RleHQiLCJ0ZXh0Iiwid2luZG93Iiwic3ludGhlc2lzIiwic3BlZWNoU3ludGhlc2lzIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwic3BlYWsiLCJhbGVydCIsIm9uWm9vbUluIiwib25ab29tT3V0Iiwib25UaGVtZUNoYW5nZSIsIm9uVGV4dFRvU3BlZWNoIiwicG9zdENvbnRlbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwic3Vic3RyaW5nIiwianVzdGlmeSIsInhzIiwieGwiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});