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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      setUser = _useChat.setUser,\n      setAvatar = _useChat.setAvatar,\n      tempAvatar = _useChat.tempAvatar,\n      setTempAvatar = _useChat.setTempAvatar,\n      fullData = _useChat.fullData,\n      tempDeletedGroup = _useChat.tempDeletedGroup,\n      setTempDeletedGroup = _useChat.setTempDeletedGroup;\n\n  function handleChangeOption(data) {\n    setTempDeletedGroup(data);\n  }\n\n  function handleDeleteChats() {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteForm),\n      onSubmit: function onSubmit() {\n        return handleDeleteChats();\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"deletechats\",\n        name: \"deletechats\",\n        onChange: function onChange(data) {\n          return handleChangeOption(data.target.value);\n        },\n        children: fullData.filter(function (channels) {\n          return channels.members.includes(user);\n        }).map(function (channel, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: channel.title,\n            children: channel.title\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"VnEbyR3ndVerOaKrA3CjbK37lUw=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwic2V0QXZhdGFyIiwidGVtcEF2YXRhciIsInNldFRlbXBBdmF0YXIiLCJmdWxsRGF0YSIsInRlbXBEZWxldGVkR3JvdXAiLCJzZXRUZW1wRGVsZXRlZEdyb3VwIiwiaGFuZGxlQ2hhbmdlT3B0aW9uIiwiZGF0YSIsImhhbmRsZURlbGV0ZUNoYXRzIiwic3R5bGVzIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJjaGFubmVscyIsIm1lbWJlcnMiLCJpbmNsdWRlcyIsIm1hcCIsImNoYW5uZWwiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFVekJDLCtEQUFPLEVBVmtCO0FBQUEsTUFFM0JDLElBRjJCLFlBRTNCQSxJQUYyQjtBQUFBLE1BRzNCQyxPQUgyQixZQUczQkEsT0FIMkI7QUFBQSxNQUkzQkMsU0FKMkIsWUFJM0JBLFNBSjJCO0FBQUEsTUFLM0JDLFVBTDJCLFlBSzNCQSxVQUwyQjtBQUFBLE1BTTNCQyxhQU4yQixZQU0zQkEsYUFOMkI7QUFBQSxNQU8zQkMsUUFQMkIsWUFPM0JBLFFBUDJCO0FBQUEsTUFRM0JDLGdCQVIyQixZQVEzQkEsZ0JBUjJCO0FBQUEsTUFTM0JDLG1CQVQyQixZQVMzQkEsbUJBVDJCOztBQVk3QixXQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDaENGLHVCQUFtQixDQUFDRSxJQUFELENBQW5CO0FBQ0Q7O0FBRUQsV0FBU0MsaUJBQVQsR0FBNkIsQ0FBRTs7QUFFL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLCtGQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxzRkFBaEI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxpQkFBWjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsaUJBQVo7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRTtBQUFNLGVBQVMsRUFBRUEsb0ZBQWpCO0FBQW9DLGNBQVEsRUFBRTtBQUFBLGVBQU1ELGlCQUFpQixFQUF2QjtBQUFBLE9BQTlDO0FBQUEsOEJBQ0U7QUFDRSxVQUFFLEVBQUMsYUFETDtBQUVFLFlBQUksRUFBQyxhQUZQO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0QsSUFBRDtBQUFBLGlCQUFVRCxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEtBQWIsQ0FBNUI7QUFBQSxTQUhaO0FBQUEsa0JBS0dSLFFBQVEsQ0FDTlMsTUFERixDQUNTLFVBQUNDLFFBQUQ7QUFBQSxpQkFBY0EsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxRQUFqQixDQUEwQmpCLElBQTFCLENBQWQ7QUFBQSxTQURULEVBRUVrQixHQUZGLENBRU0sVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ3ZCLDhCQUNFO0FBQW9CLGlCQUFLLEVBQUVELE9BQU8sQ0FBQ0UsS0FBbkM7QUFBQSxzQkFDR0YsT0FBTyxDQUFDRTtBQURYLGFBQWFELEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUtELFNBUkY7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7R0FsRHVCdEIsSTtVQVVsQkMsMkQ7OztLQVZrQkQsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9lZGl0Y2hhbm5lbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2hhdCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGF0c0NvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9lZGl0Y2hhbm5lbHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgc2V0VXNlcixcbiAgICBzZXRBdmF0YXIsXG4gICAgdGVtcEF2YXRhcixcbiAgICBzZXRUZW1wQXZhdGFyLFxuICAgIGZ1bGxEYXRhLFxuICAgIHRlbXBEZWxldGVkR3JvdXAsXG4gICAgc2V0VGVtcERlbGV0ZWRHcm91cCxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VPcHRpb24oZGF0YSkge1xuICAgIHNldFRlbXBEZWxldGVkR3JvdXAoZGF0YSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVDaGF0cygpIHt9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRDaGFubmVsc0NvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VzQnV0dG9uc30+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2NvbmZpZ3VyYXRpb25zXCJ9PlxuICAgICAgICAgIDxoND4mIzYwOyBUZWxhIGluaWNpYWw8L2g0PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2NvbmZpZ3VyYXRpb25zXCJ9PlxuICAgICAgICAgIDxoND5FZGl0YXIgYXZhdGFyICYjNjI7PC9oND5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDQ+RWRpdGUgc2V1cyBjYW5haXM8L2g0PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlRm9ybX0gb25TdWJtaXQ9eygpID0+IGhhbmRsZURlbGV0ZUNoYXRzKCl9PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgaWQ9XCJkZWxldGVjaGF0c1wiXG4gICAgICAgICAgbmFtZT1cImRlbGV0ZWNoYXRzXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZUNoYW5nZU9wdGlvbihkYXRhLnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZnVsbERhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKGNoYW5uZWxzKSA9PiBjaGFubmVscy5tZW1iZXJzLmluY2x1ZGVzKHVzZXIpKVxuICAgICAgICAgICAgLm1hcCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjaGFubmVsLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIHtjaGFubmVsLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRlbGV0YXIgY2hhdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});