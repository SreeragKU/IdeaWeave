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

/***/ "./pages/admin/posts/new.tsx":
/*!***********************************!*\
  !*** ./pages/admin/posts/new.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate */ \"./node_modules/slate/dist/index.es.js\");\n/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ \"./node_modules/slate-react/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst initialValue = [\n    {\n        type: \"paragraph\",\n        children: [\n            {\n                text: \"A line of text in a paragraph\"\n            }\n        ]\n    }\n];\nconst { Content, Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst NewPost = ()=>{\n    _s();\n    const [editor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,slate_react__WEBPACK_IMPORTED_MODULE_4__.withReact)((0,slate__WEBPACK_IMPORTED_MODULE_5__.createEditor)()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Create new post\"\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\pages\\\\admin\\\\posts\\\\new.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewPost, \"ELHpWD34sPvNnk3wzaTWYHVtjjU=\");\n_c = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\nvar _c;\n$RefreshReg$(_c, \"NewPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDbUI7QUFHbEQ7QUFHTTtBQWFyQixNQUFNSyxlQUFlO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsVUFBVTtZQUFDO2dCQUFDQyxNQUFNO1lBQStCO1NBQUU7SUFDckQ7Q0FDRDtBQUVELE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR1YsdURBQU1BO0FBQ2pDLE1BQU1XLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPLEdBQUdYLCtDQUFRQSxDQUFDLElBQU1HLHNEQUFTQSxDQUFDRCxtREFBWUE7SUFDdEQscUJBQ0UsOERBQUNELHNFQUFXQTtrQkFDViw0RUFBQ1c7c0JBQUc7Ozs7Ozs7Ozs7O0FBR1Y7R0FQTUY7S0FBQUE7QUFTTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9wb3N0cy9uZXcudHN4P2M5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dFwiO1xyXG5pbXBvcnR7XHJcbiAgY3JlYXRlRWRpdG9yLCBCYXNlRWRpdG9yLCBEZXNjZW5kYW50LCBFZGl0b3IsIEVsZW1lbnQsIFRyYW5zZm9ybXNcclxufSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7XHJcbiAgU2xhdGUsIEVkaXRhYmxlLCB3aXRoUmVhY3QsIFJlYWN0RWRpdG9yXHJcbn0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5cclxudHlwZSBDdXN0b21FbGVtZW50ID0geyB0eXBlOiAnY29kZScgfCAncGFyYWdyYXBoJywgY2hpbGRyZW46IEN1c3RvbVRleHRbXX1cclxudHlwZSBDdXN0b21UZXh0ID0geyB0ZXh0OiBzdHJpbmcgfVxyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ3NsYXRlJyB7XHJcbiAgaW50ZXJmYWNlIEN1c3RvbVR5cGVzIHtcclxuICAgIEVkaXRvcjogQmFzZUVkaXRvciAmIFJlYWN0RWRpdG9yLFxyXG4gICAgRWxlbWVudDogQ3VzdG9tRWxlbWVudCxcclxuICAgIFRleHQ6IEN1c3RvbVRleHQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsVmFsdWUgPSBbXHJcbiAge1xyXG4gICAgdHlwZTogJ3BhcmFncmFwaCcsXHJcbiAgICBjaGlsZHJlbjogW3t0ZXh0OiAnQSBsaW5lIG9mIHRleHQgaW4gYSBwYXJhZ3JhcGgnfV0sXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCBOZXdQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlU3RhdGUoKCkgPT4gd2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSlcclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8aDE+Q3JlYXRlIG5ldyBwb3N0PC9oMT5cclxuICAgIDwvQWRtaW5MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UG9zdDsiXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJBZG1pbkxheW91dCIsImNyZWF0ZUVkaXRvciIsIndpdGhSZWFjdCIsImluaXRpYWxWYWx1ZSIsInR5cGUiLCJjaGlsZHJlbiIsInRleHQiLCJDb250ZW50IiwiU2lkZXIiLCJOZXdQb3N0IiwiZWRpdG9yIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/posts/new.tsx\n"));

/***/ })

});