"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/[id]",{

/***/ "./components/layout/AdminLayout.js":
/*!******************************************!*\
  !*** ./components/layout/AdminLayout.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var _nav_AdminNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/AdminNav */ \"./components/nav/AdminNav.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LoadingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nfunction AdminLayout(param) {\n    let { children } = param;\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Add state for navigation\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (auth === null || auth === void 0 ? void 0 : auth.token) getCurrentAdmin();\n    }, [\n        auth === null || auth === void 0 ? void 0 : auth.token\n    ]);\n    const getCurrentAdmin = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/current-admin\");\n            setLoading(false);\n        } catch (error) {\n            console.log(error);\n            router.push(\"/\");\n        }\n    };\n    // Toggle navigation state\n    const toggleNav = ()=>{\n        setIsNavOpen(!isNavOpen);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                height: \"100vh\",\n                fontSize: \"50px\",\n                color: \"red\"\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\AdminLayout.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_AdminNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isNavOpen,\n                toggleNav: toggleNav\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\AdminLayout.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: {\n                    marginLeft: isNavOpen ? 150 : 80,\n                    transition: \"margin 0.5s\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                    style: {\n                        padding: \"10px\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\AdminLayout.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\AdminLayout.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\IdeaWeave\\\\IdeaWeave\\\\client\\\\components\\\\layout\\\\AdminLayout.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(AdminLayout, \"A602wdMZSAPC6cXbCx2Gs3bLJc8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AdminLayout;\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUMxQjtBQUNTO0FBQ1U7QUFDVDtBQUNZO0FBQzFCO0FBRTFCLE1BQU0sRUFBRVMsT0FBTyxFQUFFLEdBQUdOLHVEQUFNQTtBQUVYLFNBQVNPLFlBQVksS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNsQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsaURBQVVBLENBQUNLLHNEQUFXQTtJQUM5QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDLE9BQU8sMkJBQTJCO0lBQzdFLE1BQU1nQixTQUFTWixzREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsaUJBQUFBLDJCQUFBQSxLQUFNTyxLQUFLLEVBQUVDO0lBQ25CLEdBQUc7UUFBQ1IsaUJBQUFBLDJCQUFBQSxLQUFNTyxLQUFLO0tBQUM7SUFFaEIsTUFBTUMsa0JBQWtCO1FBQ3RCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1iLGlEQUFTLENBQUM7WUFDakNPLFdBQVc7UUFDYixFQUFFLE9BQU9RLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaTCxPQUFPUSxJQUFJLENBQUM7UUFDZDtJQUNGO0lBRUEsMEJBQTBCO0lBQzFCLE1BQU1DLFlBQVk7UUFDaEJWLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFHQSxJQUFJRixTQUFTO1FBQ1gscUJBQ0UsOERBQUNQLG1GQUFlQTtZQUNkcUIsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsZ0JBQWdCO2dCQUNoQkMsWUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsT0FBTztZQUNUOzs7Ozs7SUFHTjtJQUVBLHFCQUNFLDhEQUFDL0IsdURBQU1BOzswQkFDTCw4REFBQ0MscURBQVFBO2dCQUFDK0IsUUFBUW5CO2dCQUFXVyxXQUFXQTs7Ozs7OzBCQUN4Qyw4REFBQ3hCLHVEQUFNQTtnQkFBQ3lCLE9BQU87b0JBQUVRLFlBQVlwQixZQUFZLE1BQU07b0JBQUlxQixZQUFZO2dCQUFjOzBCQUMzRSw0RUFBQzVCO29CQUFRbUIsT0FBTzt3QkFBRVUsU0FBUztvQkFBTzs4QkFBSTNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QztHQWpEd0JEOztRQUlQSixrREFBU0E7OztLQUpGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkxheW91dC5qcz9mZWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFkbWluTmF2IGZyb20gXCIuLi9uYXYvQWRtaW5OYXZcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbkxheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIEFkZCBzdGF0ZSBmb3IgbmF2aWdhdGlvblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGg/LnRva2VuKSBnZXRDdXJyZW50QWRtaW4oKTtcclxuICB9LCBbYXV0aD8udG9rZW5dKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudEFkbWluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvY3VycmVudC1hZG1pblwiKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBUb2dnbGUgbmF2aWdhdGlvbiBzdGF0ZVxyXG4gIGNvbnN0IHRvZ2dsZU5hdiA9ICgpID0+IHtcclxuICAgIHNldElzTmF2T3BlbighaXNOYXZPcGVuKTtcclxuICB9O1xyXG5cclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMb2FkaW5nT3V0bGluZWRcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxBZG1pbk5hdiBpc09wZW49e2lzTmF2T3Blbn0gdG9nZ2xlTmF2PXt0b2dnbGVOYXZ9IC8+XHJcbiAgICAgIDxMYXlvdXQgc3R5bGU9e3sgbWFyZ2luTGVmdDogaXNOYXZPcGVuID8gMTUwIDogODAsIHRyYW5zaXRpb246IFwibWFyZ2luIDAuNXNcIiB9fT5cclxuICAgICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT57Y2hpbGRyZW59PC9Db250ZW50PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQWRtaW5OYXYiLCJBdXRoQ29udGV4dCIsInVzZVJvdXRlciIsIkxvYWRpbmdPdXRsaW5lZCIsImF4aW9zIiwiQ29udGVudCIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJhdXRoIiwic2V0QXV0aCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwicm91dGVyIiwidG9rZW4iLCJnZXRDdXJyZW50QWRtaW4iLCJkYXRhIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInRvZ2dsZU5hdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJpc09wZW4iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/AdminLayout.js\n"));

/***/ })

});