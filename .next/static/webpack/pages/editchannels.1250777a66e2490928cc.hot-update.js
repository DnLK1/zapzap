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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      setUser = _useChat.setUser,\n      setAvatar = _useChat.setAvatar,\n      tempAvatar = _useChat.tempAvatar,\n      setTempAvatar = _useChat.setTempAvatar,\n      fullData = _useChat.fullData,\n      tempDeletedGroup = _useChat.tempDeletedGroup,\n      setTempDeletedGroup = _useChat.setTempDeletedGroup;\n\n  function handleDeleteChats(event) {\n    event.preventDefault();\n    console.log(event);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteForm),\n      onSubmit: function onSubmit(event) {\n        return handleDeleteChats(event);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"deletechats\",\n        name: \"deletechats\",\n        children: fullData.filter(function (channels) {\n          return channels.members.includes(user);\n        }).map(function (channel, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: index,\n            children: channel.title\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"VnEbyR3ndVerOaKrA3CjbK37lUw=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwic2V0QXZhdGFyIiwidGVtcEF2YXRhciIsInNldFRlbXBBdmF0YXIiLCJmdWxsRGF0YSIsInRlbXBEZWxldGVkR3JvdXAiLCJzZXRUZW1wRGVsZXRlZEdyb3VwIiwiaGFuZGxlRGVsZXRlQ2hhdHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZpbHRlciIsImNoYW5uZWxzIiwibWVtYmVycyIsImluY2x1ZGVzIiwibWFwIiwiY2hhbm5lbCIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGlCQVV6QkMsK0RBQU8sRUFWa0I7QUFBQSxNQUUzQkMsSUFGMkIsWUFFM0JBLElBRjJCO0FBQUEsTUFHM0JDLE9BSDJCLFlBRzNCQSxPQUgyQjtBQUFBLE1BSTNCQyxTQUoyQixZQUkzQkEsU0FKMkI7QUFBQSxNQUszQkMsVUFMMkIsWUFLM0JBLFVBTDJCO0FBQUEsTUFNM0JDLGFBTjJCLFlBTTNCQSxhQU4yQjtBQUFBLE1BTzNCQyxRQVAyQixZQU8zQkEsUUFQMkI7QUFBQSxNQVEzQkMsZ0JBUjJCLFlBUTNCQSxnQkFSMkI7QUFBQSxNQVMzQkMsbUJBVDJCLFlBUzNCQSxtQkFUMkI7O0FBWTdCLFdBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVJLCtGQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxzRkFBaEI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxpQkFBWjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsaUJBQVo7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRTtBQUNFLGVBQVMsRUFBRUEsb0ZBRGI7QUFFRSxjQUFRLEVBQUUsa0JBQUNKLEtBQUQ7QUFBQSxlQUFXRCxpQkFBaUIsQ0FBQ0MsS0FBRCxDQUE1QjtBQUFBLE9BRlo7QUFBQSw4QkFJRTtBQUFRLFVBQUUsRUFBQyxhQUFYO0FBQXlCLFlBQUksRUFBQyxhQUE5QjtBQUFBLGtCQUNHSixRQUFRLENBQ05TLE1BREYsQ0FDUyxVQUFDQyxRQUFEO0FBQUEsaUJBQWNBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsUUFBakIsQ0FBMEJqQixJQUExQixDQUFkO0FBQUEsU0FEVCxFQUVFa0IsR0FGRixDQUVNLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN2Qiw4QkFDRTtBQUFvQixpQkFBSyxFQUFFQSxLQUEzQjtBQUFBLHNCQUNHRCxPQUFPLENBQUNFO0FBRFgsYUFBYUQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0QsU0FSRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQWdCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JEOztHQWhEdUJ0QixJO1VBVWxCQywyRDs7O0tBVmtCRCxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDaGF0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYXRzQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2VkaXRjaGFubmVscy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBzZXRVc2VyLFxuICAgIHNldEF2YXRhcixcbiAgICB0ZW1wQXZhdGFyLFxuICAgIHNldFRlbXBBdmF0YXIsXG4gICAgZnVsbERhdGEsXG4gICAgdGVtcERlbGV0ZWRHcm91cCxcbiAgICBzZXRUZW1wRGVsZXRlZEdyb3VwLFxuICB9ID0gdXNlQ2hhdCgpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNoYXRzKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdENoYW5uZWxzQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZXNCdXR0b25zfT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PiYjNjA7IFRlbGEgaW5pY2lhbDwvaDQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PkVkaXRhciBhdmF0YXIgJiM2Mjs8L2g0PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5FZGl0ZSBzZXVzIGNhbmFpczwvaDQ+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVGb3JtfVxuICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiBoYW5kbGVEZWxldGVDaGF0cyhldmVudCl9XG4gICAgICA+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJkZWxldGVjaGF0c1wiIG5hbWU9XCJkZWxldGVjaGF0c1wiPlxuICAgICAgICAgIHtmdWxsRGF0YVxuICAgICAgICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+IGNoYW5uZWxzLm1lbWJlcnMuaW5jbHVkZXModXNlcikpXG4gICAgICAgICAgICAubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtjaGFubmVsLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRlbGV0YXIgY2hhdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});