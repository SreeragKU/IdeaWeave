"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reader",{

/***/ "./components/layout/ReaderLayout.js":
/*!*******************************************!*\
  !*** ./components/layout/ReaderLayout.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReaderLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var _nav_ReaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/ReaderNav */ \"./components/nav/ReaderNav.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _LoadingToRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingToRedirect */ \"./components/LoadingToRedirect.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nfunction ReaderLayout(param) {\n    let { children } = param;\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (auth === null || auth === void 0 ? void 0 : auth.token) getCurrentReader();\n    }, [\n        auth === null || auth === void 0 ? void 0 : auth.token\n    ]);\n    const toggleNav = ()=>{\n        setIsNavOpen(!isNavOpen);\n    };\n    const getCurrentReader = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/current-reader\");\n            setLoading(false);\n        } catch (error) {\n            console.log(error);\n            router.push(\"/\");\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingToRedirect__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\ReaderLayout.js\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_ReaderNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isNavOpen,\n                toggleNav: toggleNav\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\ReaderLayout.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    marginLeft: isNavOpen ? 90 : 80,\n                    transition: \"margin 0.5s\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                    style: {\n                        padding: \"10px\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\ReaderLayout.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\ReaderLayout.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\ReaderLayout.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(ReaderLayout, \"A602wdMZSAPC6cXbCx2Gs3bLJc8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ReaderLayout;\nvar _c;\n$RefreshReg$(_c, \"ReaderLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9SZWFkZXJMYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDMUI7QUFDVztBQUNRO0FBQ1Q7QUFDZDtBQUMwQjtBQUVwRCxNQUFNLEVBQUVTLE9BQU8sRUFBRSxHQUFHTix1REFBTUE7QUFFWCxTQUFTTyxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDbkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLGlEQUFVQSxDQUFDSyxzREFBV0E7SUFDOUMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNZ0IsU0FBU1osc0RBQVNBO0lBRXhCTCxnREFBU0EsQ0FBQztRQUNSLElBQUdXLGlCQUFBQSwyQkFBQUEsS0FBTU8sS0FBSyxFQUFFQztJQUNsQixHQUFHO1FBQUNSLGlCQUFBQSwyQkFBQUEsS0FBTU8sS0FBSztLQUFDO0lBRWhCLE1BQU1FLFlBQVk7UUFDaEJKLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkIsSUFBSTtZQUNGLE1BQU0sRUFBQ0UsSUFBSSxFQUFDLEdBQUcsTUFBTWYsaURBQVMsQ0FBQztZQUMvQlEsV0FBVztRQUNiLEVBQUUsT0FBT1MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pOLE9BQU9TLElBQUksQ0FBQztRQUNkO0lBQ0Y7SUFFQSxJQUFJYixTQUFTO1FBQ1gscUJBQU8sOERBQUNOLDBEQUFpQkE7Ozs7O0lBQzNCO0lBRUEscUJBQ0UsOERBQUNMLHVEQUFNQTs7MEJBQ0wsOERBQUNDLHNEQUFTQTtnQkFBQ3dCLFFBQVFaO2dCQUFXSyxXQUFXQTs7Ozs7OzBCQUN6Qyw4REFBQ2xCLHVEQUFNQTtnQkFBQzBCLE9BQU87b0JBQUVDLFlBQVlkLFlBQVksS0FBSztvQkFBSWUsWUFBWTtnQkFBYzswQkFDMUUsNEVBQUN0QjtvQkFBUW9CLE9BQU87d0JBQUVHLFNBQVM7b0JBQU87OEJBQUlyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FwQ3dCRDs7UUFJUEosa0RBQVNBOzs7S0FKRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmVhZGVyTGF5b3V0LmpzPzE0NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhZGVyTmF2IGZyb20gXCIuLi9uYXYvUmVhZGVyTmF2XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTG9hZGluZ3RvUmVkaXJlY3QgZnJvbSBcIi4uL0xvYWRpbmdUb1JlZGlyZWN0XCJcclxuXHJcbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhZGVyTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTsgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihhdXRoPy50b2tlbikgZ2V0Q3VycmVudFJlYWRlcigpO1xyXG4gIH0sIFthdXRoPy50b2tlbl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRJc05hdk9wZW4oIWlzTmF2T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudFJlYWRlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChcIi9jdXJyZW50LXJlYWRlclwiKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmd0b1JlZGlyZWN0IC8+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPFJlYWRlck5hdiBpc09wZW49e2lzTmF2T3Blbn0gdG9nZ2xlTmF2PXt0b2dnbGVOYXZ9Lz5cclxuICAgICAgPExheW91dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBpc05hdk9wZW4gPyA5MCA6IDgwLCB0cmFuc2l0aW9uOiBcIm1hcmdpbiAwLjVzXCIgfX0+XHJcbiAgICAgICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+e2NoaWxkcmVufTwvQ29udGVudD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJSZWFkZXJOYXYiLCJBdXRoQ29udGV4dCIsInVzZVJvdXRlciIsImF4aW9zIiwiTG9hZGluZ3RvUmVkaXJlY3QiLCJDb250ZW50IiwiUmVhZGVyTGF5b3V0IiwiY2hpbGRyZW4iLCJhdXRoIiwic2V0QXV0aCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwicm91dGVyIiwidG9rZW4iLCJnZXRDdXJyZW50UmVhZGVyIiwidG9nZ2xlTmF2IiwiZGF0YSIsImdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJpc09wZW4iLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/ReaderLayout.js\n"));

/***/ })

});