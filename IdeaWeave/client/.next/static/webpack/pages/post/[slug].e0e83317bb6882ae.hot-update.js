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

/***/ "./hooks/useLatestPosts.js":
/*!*********************************!*\
  !*** ./hooks/useLatestPosts.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _s = $RefreshSig$();\n\n\nconst useLatestPosts = ()=>{\n    _s();\n    // State to hold the latest posts\n    const [latestPosts, setLatestPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Function to fetch the latest posts\n        const fetchLatestPosts = async ()=>{\n            try {\n                // Make a GET request to the server endpoint that returns the latest posts\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/posts/latest\");\n                setLatestPosts(response.data);\n            } catch (error) {\n                console.error(\"Error fetching latest posts:\", error);\n            }\n        };\n        fetchLatestPosts();\n    }, []);\n    return {\n        latestPosts\n    };\n};\n_s(useLatestPosts, \"YbEvHbjmeNlT5R7Tn0Ud68ZS+9g=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLatestPosts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMYXRlc3RQb3N0cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNsQjtBQUUxQixNQUFNRyxpQkFBaUI7O0lBQ3JCLGlDQUFpQztJQUNqQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVqREMsZ0RBQVNBLENBQUM7UUFDUixxQ0FBcUM7UUFDckMsTUFBTUssbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsMEVBQTBFO2dCQUMxRSxNQUFNQyxXQUFXLE1BQU1MLGlEQUFTLENBQUM7Z0JBRWpDRyxlQUFlRSxTQUFTRSxJQUFJO1lBQzlCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDaEQ7UUFDRjtRQUVBSjtJQUNGLEdBQUcsRUFBRTtJQUNMLE9BQU87UUFDTEY7SUFDRjtBQUNGO0dBdEJNRDtBQXdCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VMYXRlc3RQb3N0cy5qcz9lYmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXNlTGF0ZXN0UG9zdHMgPSAoKSA9PiB7XHJcbiAgLy8gU3RhdGUgdG8gaG9sZCB0aGUgbGF0ZXN0IHBvc3RzXHJcbiAgY29uc3QgW2xhdGVzdFBvc3RzLCBzZXRMYXRlc3RQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGdW5jdGlvbiB0byBmZXRjaCB0aGUgbGF0ZXN0IHBvc3RzXHJcbiAgICBjb25zdCBmZXRjaExhdGVzdFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIE1ha2UgYSBHRVQgcmVxdWVzdCB0byB0aGUgc2VydmVyIGVuZHBvaW50IHRoYXQgcmV0dXJucyB0aGUgbGF0ZXN0IHBvc3RzXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Bvc3RzL2xhdGVzdFwiKTtcclxuXHJcbiAgICAgICAgc2V0TGF0ZXN0UG9zdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxhdGVzdCBwb3N0czpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoTGF0ZXN0UG9zdHMoKTtcclxuICB9LCBbXSk7IFxyXG4gIHJldHVybiB7XHJcbiAgICBsYXRlc3RQb3N0cyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTGF0ZXN0UG9zdHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlTGF0ZXN0UG9zdHMiLCJsYXRlc3RQb3N0cyIsInNldExhdGVzdFBvc3RzIiwiZmV0Y2hMYXRlc3RQb3N0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useLatestPosts.js\n"));

/***/ })

});