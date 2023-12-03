"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/FullWidthImage */ \"./components/pages/FullWidthImage.js\");\n/* harmony import */ var _public_images_Background_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/Background.png */ \"./public/images/Background.png\");\n/* harmony import */ var _public_images_Central_Tree_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/images/Central_Tree.png */ \"./public/images/Central_Tree.png\");\n/* harmony import */ var _public_images_Flower_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/Flower_1.png */ \"./public/images/Flower_1.png\");\n/* harmony import */ var _public_images_Flower_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/Flower_2.png */ \"./public/images/Flower_2.png\");\n/* harmony import */ var _public_images_Globe_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/Globe_.png */ \"./public/images/Globe_.png\");\n/* harmony import */ var _public_images_Flying_books_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/images/Flying_books.png */ \"./public/images/Flying_books.png\");\n/* harmony import */ var _public_images_Logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/images/Logo.png */ \"./public/images/Logo.png\");\n/* harmony import */ var _public_images_Title_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/images/Title.png */ \"./public/images/Title.png\");\n/* harmony import */ var _public_images_Sun_Rays_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/images/Sun_Rays.png */ \"./public/images/Sun_Rays.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [xValue, setXValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [yValue, setYValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function update(cursorPosition) {\n            const parallaxElements = document.querySelectorAll(\".parallax\");\n            parallaxElements.forEach((el)=>{\n                const speedx = el.dataset.speedx;\n                const speedy = el.dataset.speedy;\n                const speedz = el.dataset.speedz;\n                const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;\n                const zValue = (cursorPosition - window.innerWidth / 2) * isInLeft * 0.1;\n                el.style.transform = \"translateX(calc(-50% + \".concat(xValue * speedx, \"px)) \\n          translateY(calc(-50% + \").concat(yValue * speedy, \"px)) \\n          perspective(900px) \\n          translateZ(\").concat(zValue * speedz, \"px)\");\n            });\n        }\n        update(0);\n        function handleMouseMove(e) {\n            setXValue((prevXValue)=>e.clientX - window.innerWidth / 2);\n            setYValue((prevYValue)=>e.clientY - window.innerHeight / 2);\n            update(e.clientX);\n        }\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        xValue,\n        yValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Modern Content Management System - CMS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Read exciting new books\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.HomePage,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: styles.vignette\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Background_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"Background Image\",\n                            \"data-speedx\": \"0.006\",\n                            \"data-speedy\": \"0.008\",\n                            \"data-speedz\": \"0\",\n                            style: Object.assign({}, styles.parallax, styles.bgImg)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Central_Tree_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"Central Tree\",\n                            \"data-speedx\": \"0.037\",\n                            \"data-speedy\": \"0.07\",\n                            \"data-speedz\": \"0\",\n                            style: Object.assign({}, styles.parallax, styles.tree)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Flower_1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"Flower 1\",\n                            \"data-speedx\": \"0.0195\",\n                            \"data-speedy\": \"0.0305\",\n                            \"data-speedz\": \"0\",\n                            style: Object.assign({}, styles.parallax, styles.flower1)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Flower_2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                            alt: \"Flower 2\",\n                            \"data-speedx\": \"0.025\",\n                            \"data-speedy\": \"0.028\",\n                            \"data-speedz\": \"0\",\n                            style: Object.assign({}, styles.parallax, styles.flower2)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Globe_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                            alt: \"Globe\",\n                            \"data-speedx\": \"0.16\",\n                            \"data-speedy\": \"0.105\",\n                            \"data-speedz\": \"0.3\",\n                            style: Object.assign({}, styles.parallax, styles.globe)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Title_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n                            alt: \"Title\",\n                            \"data-speedx\": \"0.125\",\n                            \"data-speedy\": \"0.115\",\n                            \"data-speedz\": \"0.2\",\n                            style: Object.assign({}, styles.parallax, styles.title)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Flying_books_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                            alt: \"Flying Books\",\n                            \"data-speedx\": \"0.1\",\n                            \"data-speedy\": \"0.11\",\n                            \"data-speedz\": \"0.16\",\n                            style: Object.assign({}, styles.parallax, styles.fbooks)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_images_Sun_Rays_png__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n                            alt: \"Sun Rays\",\n                            style: styles.sunRays\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"OycM19Udqq9aw2XqC3+7FNLNfZg=\");\n_c = Home;\nconst styles = {\n    HomePage: {\n        fontFamily: \"Poppins, sans-serif\",\n        backgroundColor: \"#333\"\n    },\n    vignette: {\n        position: \"absolute\",\n        zIndex: 100,\n        width: \"100%\",\n        height: \"100%\",\n        top: 0,\n        left: 0,\n        backgroundColor: \"radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.7))\",\n        pointerEvents: \"none\"\n    },\n    parallax: {\n        pointerEvents: \"none\",\n        transition: \"0.55s cubic-bezier(0.2, 0.49, 0.32, 0.99)\"\n    },\n    bgImg: {\n        position: \"absolute\",\n        width: \"100%\",\n        top: \"calc(50% - 0px)\",\n        left: \"calc(50% - 0px)\"\n    },\n    tree: {\n        position: \"absolute\",\n        zIndex: 3,\n        width: \"100%\",\n        top: \"calc(50% - 10px)\",\n        left: \"calc(50% + 20px)\"\n    },\n    flower1: {\n        position: \"absolute\",\n        zIndex: 4,\n        width: \"100%\",\n        top: \"calc(50% + 220px)\",\n        left: \"calc(50% - 720px)\"\n    },\n    flower2: {\n        position: \"absolute\",\n        zIndex: 2,\n        width: \"100%\",\n        top: \"calc(50% + 150px)\",\n        left: \"calc(50% + 750px)\"\n    },\n    globe: {\n        position: \"absolute\",\n        zIndex: 5,\n        width: \"100%\",\n        top: \"calc(50% - 80px)\",\n        left: \"calc(50% - 300px)\"\n    },\n    title: {\n        position: \"absolute\",\n        zIndex: 6,\n        width: \"100%\",\n        top: \"calc(50% - 80px)\",\n        left: \"calc(50% - 280px)\"\n    },\n    fbooks: {\n        position: \"absolute\",\n        zIndex: 7,\n        width: \"\",\n        top: \"calc(50% - 135px)\",\n        left: \"calc(50% - 240px)\"\n    },\n    sunRays: {\n        position: \"absolute\",\n        zIndex: 8,\n        top: 0,\n        right: 0,\n        width: \"595px\",\n        pointerEvents: \"none\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ2pCO0lBQ0FYLFVBQVU7UUFDUlcsZUFBZTtRQUNmQyxZQUFZO0lBQ2Q7SUFDQVgsT0FBTztRQUNMSyxVQUFVO1FBQ1ZFLE9BQU87UUFDUEUsS0FBSztRQUNMeEMsTUFBTTtJQUNSO0lBQ0EzQixNQUFNO1FBQ0orRCxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsT0FBTztRQUNQRSxLQUFLO1FBQ0x4QyxNQUFNO0lBQ1I7SUFDQTFCLFNBQVM7UUFDUDhELFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BFLEtBQUs7UUFDTHhDLE1BQU07SUFDUjtJQUNBekIsU0FBUztRQUNQNkQsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEUsS0FBSztRQUNMeEMsTUFBTTtJQUNSO0lBQ0F4QixPQUFPO1FBQ0w0RCxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsT0FBTztRQUNQRSxLQUFLO1FBQ0x4QyxNQUFNO0lBQ1I7SUFDQXJCLE9BQU87UUFDTHlELFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BFLEtBQUs7UUFDTHhDLE1BQU07SUFDUjtJQUNBZ0MsUUFBUTtRQUNOSSxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsT0FBTztRQUNQRSxLQUFLO1FBQ0x4QyxNQUFNO0lBQ1I7SUFDQWlDLFNBQVM7UUFDUEcsVUFBVTtRQUNWQyxRQUFRO1FBQ1JHLEtBQUs7UUFDTEcsT0FBTztRQUNQTCxPQUFPO1FBQ1BHLGVBQWU7SUFDakI7QUFDRjtBQUVBLCtEQUFlNUQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgRnVsbFdpZHRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXMvRnVsbFdpZHRoSW1hZ2VcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9CYWNrZ3JvdW5kLnBuZyc7XHJcbmltcG9ydCB0cmVlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvQ2VudHJhbF9UcmVlLnBuZyc7XHJcbmltcG9ydCBmbG93ZXIxIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvRmxvd2VyXzEucG5nJztcclxuaW1wb3J0IGZsb3dlcjIgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9GbG93ZXJfMi5wbmcnO1xyXG5pbXBvcnQgZ2xvYmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9HbG9iZV8ucG5nJztcclxuaW1wb3J0IGZseSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL0ZseWluZ19ib29rcy5wbmcnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL0xvZ28ucG5nJztcclxuaW1wb3J0IHRpdGxlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvVGl0bGUucG5nJztcclxuaW1wb3J0IHN1biBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL1N1bl9SYXlzLnBuZyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt4VmFsdWUsIHNldFhWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbeVZhbHVlLCBzZXRZVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoY3Vyc29yUG9zaXRpb24pIHtcclxuICAgICAgY29uc3QgcGFyYWxsYXhFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIik7XHJcbiAgICAgIHBhcmFsbGF4RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBzcGVlZHggPSBlbC5kYXRhc2V0LnNwZWVkeDtcclxuICAgICAgICBjb25zdCBzcGVlZHkgPSBlbC5kYXRhc2V0LnNwZWVkeTtcclxuICAgICAgICBjb25zdCBzcGVlZHogPSBlbC5kYXRhc2V0LnNwZWVkejtcclxuICAgICAgICBjb25zdCBpc0luTGVmdCA9XHJcbiAgICAgICAgICBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZWwpLmxlZnQpIDwgd2luZG93LmlubmVyV2lkdGggLyAyXHJcbiAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICA6IC0xO1xyXG4gICAgICAgIGNvbnN0IHpWYWx1ZSA9XHJcbiAgICAgICAgICAoY3Vyc29yUG9zaXRpb24gLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogaXNJbkxlZnQgKiAwLjE7XHJcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoY2FsYygtNTAlICsgJHt4VmFsdWUgKiBzcGVlZHh9cHgpKSBcclxuICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgJHt5VmFsdWUgKiBzcGVlZHl9cHgpKSBcclxuICAgICAgICAgIHBlcnNwZWN0aXZlKDkwMHB4KSBcclxuICAgICAgICAgIHRyYW5zbGF0ZVooJHt6VmFsdWUgKiBzcGVlZHp9cHgpYDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XHJcbiAgICAgIHNldFhWYWx1ZSgocHJldlhWYWx1ZSkgPT4gZS5jbGllbnRYIC0gd2luZG93LmlubmVyV2lkdGggLyAyKTtcclxuICAgICAgc2V0WVZhbHVlKChwcmV2WVZhbHVlKSA9PiBlLmNsaWVudFkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuICAgICAgdXBkYXRlKGUuY2xpZW50WCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgfTtcclxuICB9LCBbeFZhbHVlLCB5VmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Nb2Rlcm4gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSAtIENNUzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJlYWQgZXhjaXRpbmcgbmV3IGJvb2tzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuSG9tZVBhZ2V9PlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnZpZ25ldHRlfT48L2Rpdj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2JhY2tncm91bmR9XHJcbiAgICAgICAgICAgIGFsdD1cIkJhY2tncm91bmQgSW1hZ2VcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeD1cIjAuMDA2XCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHk9XCIwLjAwOFwiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR6PVwiMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMucGFyYWxsYXgsIHN0eWxlcy5iZ0ltZyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17dHJlZX1cclxuICAgICAgICAgICAgYWx0PVwiQ2VudHJhbCBUcmVlXCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHg9XCIwLjAzN1wiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR5PVwiMC4wN1wiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR6PVwiMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMucGFyYWxsYXgsIHN0eWxlcy50cmVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtmbG93ZXIxfVxyXG4gICAgICAgICAgICBhbHQ9XCJGbG93ZXIgMVwiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR4PVwiMC4wMTk1XCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHk9XCIwLjAzMDVcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkej1cIjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLnBhcmFsbGF4LCBzdHlsZXMuZmxvd2VyMSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17Zmxvd2VyMn1cclxuICAgICAgICAgICAgYWx0PVwiRmxvd2VyIDJcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeD1cIjAuMDI1XCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHk9XCIwLjAyOFwiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR6PVwiMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMucGFyYWxsYXgsIHN0eWxlcy5mbG93ZXIyKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtnbG9iZX1cclxuICAgICAgICAgICAgYWx0PVwiR2xvYmVcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeD1cIjAuMTZcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeT1cIjAuMTA1XCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHo9XCIwLjNcIlxyXG4gICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLnBhcmFsbGF4LCBzdHlsZXMuZ2xvYmUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3RpdGxlfVxyXG4gICAgICAgICAgICBhbHQ9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgIGRhdGEtc3BlZWR4PVwiMC4xMjVcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeT1cIjAuMTE1XCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHo9XCIwLjJcIlxyXG4gICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLnBhcmFsbGF4LCBzdHlsZXMudGl0bGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ZseX1cclxuICAgICAgICAgICAgYWx0PVwiRmx5aW5nIEJvb2tzXCJcclxuICAgICAgICAgICAgZGF0YS1zcGVlZHg9XCIwLjFcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkeT1cIjAuMTFcIlxyXG4gICAgICAgICAgICBkYXRhLXNwZWVkej1cIjAuMTZcIlxyXG4gICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLnBhcmFsbGF4LCBzdHlsZXMuZmJvb2tzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdW59IGFsdD1cIlN1biBSYXlzXCIgc3R5bGU9e3N0eWxlcy5zdW5SYXlzfSAvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPEZ1bGxXaWR0aEltYWdlIC8+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBIb21lUGFnZToge1xyXG4gICAgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxyXG4gIH0sXHJcbiAgdmlnbmV0dGU6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB6SW5kZXg6IDEwMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwKSA2NSUsIHJnYmEoMCwgMCwgMCwgMC43KSlcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgcGFyYWxsYXg6IHtcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCIwLjU1cyBjdWJpYy1iZXppZXIoMC4yLCAwLjQ5LCAwLjMyLCAwLjk5KVwiLFxyXG4gIH0sXHJcbiAgYmdJbWc6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB0b3A6IFwiY2FsYyg1MCUgLSAwcHgpXCIsXHJcbiAgICBsZWZ0OiBcImNhbGMoNTAlIC0gMHB4KVwiLFxyXG4gIH0sXHJcbiAgdHJlZToge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHpJbmRleDogMyxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHRvcDogXCJjYWxjKDUwJSAtIDEwcHgpXCIsXHJcbiAgICBsZWZ0OiBcImNhbGMoNTAlICsgMjBweClcIixcclxuICB9LFxyXG4gIGZsb3dlcjE6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB6SW5kZXg6IDQsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB0b3A6IFwiY2FsYyg1MCUgKyAyMjBweClcIixcclxuICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSA3MjBweClcIixcclxuICB9LFxyXG4gIGZsb3dlcjI6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB0b3A6IFwiY2FsYyg1MCUgKyAxNTBweClcIixcclxuICAgIGxlZnQ6IFwiY2FsYyg1MCUgKyA3NTBweClcIixcclxuICB9LFxyXG4gIGdsb2JlOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgekluZGV4OiA1LFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgdG9wOiBcImNhbGMoNTAlIC0gODBweClcIixcclxuICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSAzMDBweClcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgekluZGV4OiA2LFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgdG9wOiBcImNhbGMoNTAlIC0gODBweClcIixcclxuICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSAyODBweClcIixcclxuICB9LFxyXG4gIGZib29rczoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHpJbmRleDogNyxcclxuICAgIHdpZHRoOiBcIlwiLFxyXG4gICAgdG9wOiBcImNhbGMoNTAlIC0gMTM1cHgpXCIsXHJcbiAgICBsZWZ0OiBcImNhbGMoNTAlIC0gMjQwcHgpXCIsXHJcbiAgfSxcclxuICBzdW5SYXlzOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgekluZGV4OiA4LFxyXG4gICAgdG9wOiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB3aWR0aDogXCI1OTVweFwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkltYWdlIiwiRnVsbFdpZHRoSW1hZ2UiLCJiYWNrZ3JvdW5kIiwidHJlZSIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZ2xvYmUiLCJmbHkiLCJsb2dvIiwidGl0bGUiLCJzdW4iLCJIb21lIiwieFZhbHVlIiwic2V0WFZhbHVlIiwieVZhbHVlIiwic2V0WVZhbHVlIiwidXBkYXRlIiwiY3Vyc29yUG9zaXRpb24iLCJwYXJhbGxheEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwic3BlZWR4IiwiZGF0YXNldCIsInNwZWVkeSIsInNwZWVkeiIsImlzSW5MZWZ0IiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInpWYWx1ZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsInByZXZYVmFsdWUiLCJjbGllbnRYIiwicHJldllWYWx1ZSIsImNsaWVudFkiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2Iiwic3R5bGVzIiwiSG9tZVBhZ2UiLCJtYWluIiwidmlnbmV0dGUiLCJzcmMiLCJhbHQiLCJkYXRhLXNwZWVkeCIsImRhdGEtc3BlZWR5IiwiZGF0YS1zcGVlZHoiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJhbGxheCIsImJnSW1nIiwiZmJvb2tzIiwic3VuUmF5cyIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicG9pbnRlckV2ZW50cyIsInRyYW5zaXRpb24iLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});