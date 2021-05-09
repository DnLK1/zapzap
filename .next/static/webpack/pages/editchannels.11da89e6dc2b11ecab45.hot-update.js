/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/editchannels",{

/***/ "./src/pages/editchannels.tsx":
/*!************************************!*\
  !*** ./src/pages/editchannels.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      fullData = _useChat.fullData,\n      tempDeletedGroup = _useChat.tempDeletedGroup,\n      setTempDeletedGroup = _useChat.setTempDeletedGroup,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate;\n\n  function handleChangeOption(data) {\n    setTempDeletedGroup(data);\n  }\n\n  function handleDeleteChats(event) {\n    event.preventDefault();\n    var deleteObject = fullData.filter(function (channels) {\n      return channels.title === tempDeletedGroup;\n    }).map(function (channel) {\n      return channel.id;\n    });\n    var deleteID = deleteObject[0];\n    _services_api__WEBPACK_IMPORTED_MODULE_3__.api.delete(\"channels/\".concat(deleteID));\n    setShouldUpdate(setShouldUpdate + 1);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteForm),\n      onSubmit: function onSubmit(event) {\n        return handleDeleteChats(event);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"deletechats\",\n        name: \"deletechats\",\n        onChange: function onChange(data) {\n          return handleChangeOption(data.target.value);\n        },\n        children: fullData.filter(function (channels) {\n          return channels.members.includes(user);\n        }).map(function (channel, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: channel.title,\n            children: channel.title\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"P+jvZkEKXKoOoaZRzweoppAfRkU=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJmdWxsRGF0YSIsInRlbXBEZWxldGVkR3JvdXAiLCJzZXRUZW1wRGVsZXRlZEdyb3VwIiwic2hvdWxkVXBkYXRlIiwic2V0U2hvdWxkVXBkYXRlIiwiaGFuZGxlQ2hhbmdlT3B0aW9uIiwiZGF0YSIsImhhbmRsZURlbGV0ZUNoYXRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbGV0ZU9iamVjdCIsImZpbHRlciIsImNoYW5uZWxzIiwidGl0bGUiLCJtYXAiLCJjaGFubmVsIiwiaWQiLCJkZWxldGVJRCIsImFwaSIsInN0eWxlcyIsInRhcmdldCIsInZhbHVlIiwibWVtYmVycyIsImluY2x1ZGVzIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGlCQVF6QkMsK0RBQU8sRUFSa0I7QUFBQSxNQUUzQkMsSUFGMkIsWUFFM0JBLElBRjJCO0FBQUEsTUFHM0JDLFFBSDJCLFlBRzNCQSxRQUgyQjtBQUFBLE1BSTNCQyxnQkFKMkIsWUFJM0JBLGdCQUoyQjtBQUFBLE1BSzNCQyxtQkFMMkIsWUFLM0JBLG1CQUwyQjtBQUFBLE1BTTNCQyxZQU4yQixZQU0zQkEsWUFOMkI7QUFBQSxNQU8zQkMsZUFQMkIsWUFPM0JBLGVBUDJCOztBQVU3QixXQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDaENKLHVCQUFtQixDQUFDSSxJQUFELENBQW5CO0FBQ0Q7O0FBRUQsV0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2hDQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxZQUFZLEdBQUdWLFFBQVEsQ0FDMUJXLE1BRGtCLENBQ1gsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsS0FBVCxLQUFtQlosZ0JBQWpDO0FBQUEsS0FEVyxFQUVsQmEsR0FGa0IsQ0FFZCxVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLEtBRmMsQ0FBckI7QUFHQSxRQUFNQyxRQUFRLEdBQUdQLFlBQVksQ0FBQyxDQUFELENBQTdCO0FBQ0FRLHlEQUFBLG9CQUF1QkQsUUFBdkI7QUFFQWIsbUJBQWUsQ0FBQ0EsZUFBZSxHQUFHLENBQW5CLENBQWY7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRWUsK0ZBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHNGQUFoQjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFLGlCQUFaO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxpQkFBWjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQ0UsZUFBUyxFQUFFQSxvRkFEYjtBQUVFLGNBQVEsRUFBRSxrQkFBQ1gsS0FBRDtBQUFBLGVBQVdELGlCQUFpQixDQUFDQyxLQUFELENBQTVCO0FBQUEsT0FGWjtBQUFBLDhCQUlFO0FBQ0UsVUFBRSxFQUFDLGFBREw7QUFFRSxZQUFJLEVBQUMsYUFGUDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNGLElBQUQ7QUFBQSxpQkFBVUQsa0JBQWtCLENBQUNDLElBQUksQ0FBQ2MsTUFBTCxDQUFZQyxLQUFiLENBQTVCO0FBQUEsU0FIWjtBQUFBLGtCQUtHckIsUUFBUSxDQUNOVyxNQURGLENBQ1MsVUFBQ0MsUUFBRDtBQUFBLGlCQUFjQSxRQUFRLENBQUNVLE9BQVQsQ0FBaUJDLFFBQWpCLENBQTBCeEIsSUFBMUIsQ0FBZDtBQUFBLFNBRFQsRUFFRWUsR0FGRixDQUVNLFVBQUNDLE9BQUQsRUFBVVMsS0FBVixFQUFvQjtBQUN2Qiw4QkFDRTtBQUFvQixpQkFBSyxFQUFFVCxPQUFPLENBQUNGLEtBQW5DO0FBQUEsc0JBQ0dFLE9BQU8sQ0FBQ0Y7QUFEWCxhQUFhVyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFLRCxTQVJGO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBb0JFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBNUR1QjNCLEk7VUFRbEJDLDJEOzs7S0FSa0JELEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdGNoYW5uZWxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZWRpdGNoYW5uZWxzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGZ1bGxEYXRhLFxuICAgIHRlbXBEZWxldGVkR3JvdXAsXG4gICAgc2V0VGVtcERlbGV0ZWRHcm91cCxcbiAgICBzaG91bGRVcGRhdGUsXG4gICAgc2V0U2hvdWxkVXBkYXRlLFxuICB9ID0gdXNlQ2hhdCgpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU9wdGlvbihkYXRhKSB7XG4gICAgc2V0VGVtcERlbGV0ZWRHcm91cChkYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNoYXRzKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkZWxldGVPYmplY3QgPSBmdWxsRGF0YVxuICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+IGNoYW5uZWxzLnRpdGxlID09PSB0ZW1wRGVsZXRlZEdyb3VwKVxuICAgICAgLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC5pZCk7XG4gICAgY29uc3QgZGVsZXRlSUQgPSBkZWxldGVPYmplY3RbMF07XG4gICAgYXBpLmRlbGV0ZShgY2hhbm5lbHMvJHtkZWxldGVJRH1gKTtcblxuICAgIHNldFNob3VsZFVwZGF0ZShzZXRTaG91bGRVcGRhdGUgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0Q2hhbm5lbHNDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlc0J1dHRvbnN9PlxuICAgICAgICA8TGluayBocmVmPXtcIi9jb25maWd1cmF0aW9uc1wifT5cbiAgICAgICAgICA8aDQ+JiM2MDsgVGVsYSBpbmljaWFsPC9oND5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtcIi9jb25maWd1cmF0aW9uc1wifT5cbiAgICAgICAgICA8aDQ+RWRpdGFyIGF2YXRhciAmIzYyOzwvaDQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGg0PkVkaXRlIHNldXMgY2FuYWlzPC9oND5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUZvcm19XG4gICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IGhhbmRsZURlbGV0ZUNoYXRzKGV2ZW50KX1cbiAgICAgID5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGlkPVwiZGVsZXRlY2hhdHNcIlxuICAgICAgICAgIG5hbWU9XCJkZWxldGVjaGF0c1wiXG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhKSA9PiBoYW5kbGVDaGFuZ2VPcHRpb24oZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAge2Z1bGxEYXRhXG4gICAgICAgICAgICAuZmlsdGVyKChjaGFubmVscykgPT4gY2hhbm5lbHMubWVtYmVycy5pbmNsdWRlcyh1c2VyKSlcbiAgICAgICAgICAgIC5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17Y2hhbm5lbC50aXRsZX0+XG4gICAgICAgICAgICAgICAgICB7Y2hhbm5lbC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5EZWxldGFyIGNoYXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});