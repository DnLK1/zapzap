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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      setUser = _useChat.setUser,\n      setAvatar = _useChat.setAvatar,\n      tempAvatar = _useChat.tempAvatar,\n      setTempAvatar = _useChat.setTempAvatar,\n      fullData = _useChat.fullData;\n\n  function handleSelectAvatar(event) {\n    event.preventDefault();\n    setAvatar(tempAvatar);\n  }\n\n  function handleLogoff() {\n    setUser(\"\");\n  }\n\n  function handleDeleteChats(event) {\n    event.preventDefault();\n    console.log(event);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteForm),\n      onSubmit: function onSubmit(event) {\n        return handleDeleteChats(event);\n      },\n      children: [fullData.filter(function (channels) {\n        return channels.members.includes(user);\n      }).map(function (channel, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteChannelsForm),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            type: \"checkbox\",\n            id: index,\n            name: \"deletechats\",\n            value: index,\n            children: channel.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            \"for\": \"deletechats\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"grgHfciBJ8ggdXuoBNcwqeagR+E=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwic2V0QXZhdGFyIiwidGVtcEF2YXRhciIsInNldFRlbXBBdmF0YXIiLCJmdWxsRGF0YSIsImhhbmRsZVNlbGVjdEF2YXRhciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVMb2dvZmYiLCJoYW5kbGVEZWxldGVDaGF0cyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmaWx0ZXIiLCJjaGFubmVscyIsIm1lbWJlcnMiLCJpbmNsdWRlcyIsIm1hcCIsImNoYW5uZWwiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFRekJDLCtEQUFPLEVBUmtCO0FBQUEsTUFFM0JDLElBRjJCLFlBRTNCQSxJQUYyQjtBQUFBLE1BRzNCQyxPQUgyQixZQUczQkEsT0FIMkI7QUFBQSxNQUkzQkMsU0FKMkIsWUFJM0JBLFNBSjJCO0FBQUEsTUFLM0JDLFVBTDJCLFlBSzNCQSxVQUwyQjtBQUFBLE1BTTNCQyxhQU4yQixZQU0zQkEsYUFOMkI7QUFBQSxNQU8zQkMsUUFQMkIsWUFPM0JBLFFBUDJCOztBQVU3QixXQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBTixhQUFTLENBQUNDLFVBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNNLFlBQVQsR0FBd0I7QUFDdEJSLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRDs7QUFFRCxXQUFTUyxpQkFBVCxDQUEyQkgsS0FBM0IsRUFBa0M7QUFDaENBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFTSwrRkFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsc0ZBQWhCO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsaUJBQVo7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFLGlCQUFaO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFDRSxlQUFTLEVBQUVBLG9GQURiO0FBRUUsY0FBUSxFQUFFLGtCQUFDTixLQUFEO0FBQUEsZUFBV0csaUJBQWlCLENBQUNILEtBQUQsQ0FBNUI7QUFBQSxPQUZaO0FBQUEsaUJBSUdGLFFBQVEsQ0FDTlMsTUFERixDQUNTLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLFFBQWpCLENBQTBCakIsSUFBMUIsQ0FBZDtBQUFBLE9BRFQsRUFFRWtCLEdBRkYsQ0FFTSxVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDdkIsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFUCw0RkFBaEI7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUUsRUFBRU8sS0FGTjtBQUdFLGdCQUFJLEVBQUMsYUFIUDtBQUlFLGlCQUFLLEVBQUVBLEtBSlQ7QUFBQSxzQkFNR0QsT0FBTyxDQUFDRTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFTRTtBQUFPLG1CQUFJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFhRCxPQWhCRixDQUpILGVBc0JFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBN0R1QnZCLEk7VUFRbEJDLDJEOzs7S0FSa0JELEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdGNoYW5uZWxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZWRpdGNoYW5uZWxzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIHNldFVzZXIsXG4gICAgc2V0QXZhdGFyLFxuICAgIHRlbXBBdmF0YXIsXG4gICAgc2V0VGVtcEF2YXRhcixcbiAgICBmdWxsRGF0YSxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RBdmF0YXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEF2YXRhcih0ZW1wQXZhdGFyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ29mZigpIHtcbiAgICBzZXRVc2VyKFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ2hhdHMoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0Q2hhbm5lbHNDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlc0J1dHRvbnN9PlxuICAgICAgICA8TGluayBocmVmPXtcIi9jb25maWd1cmF0aW9uc1wifT5cbiAgICAgICAgICA8aDQ+JiM2MDsgVGVsYSBpbmljaWFsPC9oND5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtcIi9jb25maWd1cmF0aW9uc1wifT5cbiAgICAgICAgICA8aDQ+RWRpdGFyIGF2YXRhciAmIzYyOzwvaDQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGg0PkVkaXRlIHNldXMgY2FuYWlzPC9oND5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUZvcm19XG4gICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IGhhbmRsZURlbGV0ZUNoYXRzKGV2ZW50KX1cbiAgICAgID5cbiAgICAgICAge2Z1bGxEYXRhXG4gICAgICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+IGNoYW5uZWxzLm1lbWJlcnMuaW5jbHVkZXModXNlcikpXG4gICAgICAgICAgLm1hcCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQ2hhbm5lbHNGb3JtfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlbGV0ZWNoYXRzXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hhbm5lbC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVsZXRlY2hhdHNcIj48L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RGVsZXRhciBjaGF0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});