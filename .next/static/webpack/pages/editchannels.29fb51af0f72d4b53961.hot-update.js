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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      setUser = _useChat.setUser,\n      setAvatar = _useChat.setAvatar,\n      tempAvatar = _useChat.tempAvatar,\n      setTempAvatar = _useChat.setTempAvatar,\n      fullData = _useChat.fullData,\n      tempDeletedGroup = _useChat.tempDeletedGroup,\n      setTempDeletedGroup = _useChat.setTempDeletedGroup;\n\n  function handleChangeOption(data) {\n    console.log(data); //setTempDeletedGroup(data)\n  }\n\n  function handleDeleteChats(event) {\n    event.preventDefault();\n    console.log(event);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteForm),\n      onSubmit: function onSubmit(event) {\n        return handleDeleteChats(event);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"deletechats\",\n        name: \"deletechats\",\n        onChange: function onChange(data) {\n          return handleChangeOption(data);\n        },\n        children: fullData.filter(function (channels) {\n          return channels.members.includes(user);\n        }).map(function (channel, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: index,\n            children: channel.title\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"VnEbyR3ndVerOaKrA3CjbK37lUw=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwic2V0QXZhdGFyIiwidGVtcEF2YXRhciIsInNldFRlbXBBdmF0YXIiLCJmdWxsRGF0YSIsInRlbXBEZWxldGVkR3JvdXAiLCJzZXRUZW1wRGVsZXRlZEdyb3VwIiwiaGFuZGxlQ2hhbmdlT3B0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGVDaGF0cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJmaWx0ZXIiLCJjaGFubmVscyIsIm1lbWJlcnMiLCJpbmNsdWRlcyIsIm1hcCIsImNoYW5uZWwiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFVekJDLCtEQUFPLEVBVmtCO0FBQUEsTUFFM0JDLElBRjJCLFlBRTNCQSxJQUYyQjtBQUFBLE1BRzNCQyxPQUgyQixZQUczQkEsT0FIMkI7QUFBQSxNQUkzQkMsU0FKMkIsWUFJM0JBLFNBSjJCO0FBQUEsTUFLM0JDLFVBTDJCLFlBSzNCQSxVQUwyQjtBQUFBLE1BTTNCQyxhQU4yQixZQU0zQkEsYUFOMkI7QUFBQSxNQU8zQkMsUUFQMkIsWUFPM0JBLFFBUDJCO0FBQUEsTUFRM0JDLGdCQVIyQixZQVEzQkEsZ0JBUjJCO0FBQUEsTUFTM0JDLG1CQVQyQixZQVMzQkEsbUJBVDJCOztBQVk3QixXQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBRGdDLENBRWhDO0FBQ0Q7O0FBRUQsV0FBU0csaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2hDQSxTQUFLLENBQUNDLGNBQU47QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsK0ZBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHNGQUFoQjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFLGlCQUFaO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxpQkFBWjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQ0UsZUFBUyxFQUFFQSxvRkFEYjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGVBQVdELGlCQUFpQixDQUFDQyxLQUFELENBQTVCO0FBQUEsT0FGWjtBQUFBLDhCQUlFO0FBQ0UsVUFBRSxFQUFDLGFBREw7QUFFRSxZQUFJLEVBQUMsYUFGUDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNKLElBQUQ7QUFBQSxpQkFBVUQsa0JBQWtCLENBQUNDLElBQUQsQ0FBNUI7QUFBQSxTQUhaO0FBQUEsa0JBS0dKLFFBQVEsQ0FDTlcsTUFERixDQUNTLFVBQUNDLFFBQUQ7QUFBQSxpQkFBY0EsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxRQUFqQixDQUEwQm5CLElBQTFCLENBQWQ7QUFBQSxTQURULEVBRUVvQixHQUZGLENBRU0sVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ3ZCLDhCQUNFO0FBQW9CLGlCQUFLLEVBQUVBLEtBQTNCO0FBQUEsc0JBQ0dELE9BQU8sQ0FBQ0U7QUFEWCxhQUFhRCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFLRCxTQVJGO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBb0JFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBekR1QnhCLEk7VUFVbEJDLDJEOzs7S0FWa0JELEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdGNoYW5uZWxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZWRpdGNoYW5uZWxzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIHNldFVzZXIsXG4gICAgc2V0QXZhdGFyLFxuICAgIHRlbXBBdmF0YXIsXG4gICAgc2V0VGVtcEF2YXRhcixcbiAgICBmdWxsRGF0YSxcbiAgICB0ZW1wRGVsZXRlZEdyb3VwLFxuICAgIHNldFRlbXBEZWxldGVkR3JvdXAsXG4gIH0gPSB1c2VDaGF0KCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlT3B0aW9uKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvL3NldFRlbXBEZWxldGVkR3JvdXAoZGF0YSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNoYXRzKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdENoYW5uZWxzQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZXNCdXR0b25zfT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PiYjNjA7IFRlbGEgaW5pY2lhbDwvaDQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PkVkaXRhciBhdmF0YXIgJiM2Mjs8L2g0PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5FZGl0ZSBzZXVzIGNhbmFpczwvaDQ+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVGb3JtfVxuICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiBoYW5kbGVEZWxldGVDaGF0cyhldmVudCl9XG4gICAgICA+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBpZD1cImRlbGV0ZWNoYXRzXCJcbiAgICAgICAgICBuYW1lPVwiZGVsZXRlY2hhdHNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0YSkgPT4gaGFuZGxlQ2hhbmdlT3B0aW9uKGRhdGEpfVxuICAgICAgICA+XG4gICAgICAgICAge2Z1bGxEYXRhXG4gICAgICAgICAgICAuZmlsdGVyKChjaGFubmVscykgPT4gY2hhbm5lbHMubWVtYmVycy5pbmNsdWRlcyh1c2VyKSlcbiAgICAgICAgICAgIC5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge2NoYW5uZWwudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RGVsZXRhciBjaGF0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});