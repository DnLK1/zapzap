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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editchannels.module.scss */ \"./src/styles/editchannels.module.scss\");\n/* harmony import */ var _styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/editchannels.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      fullData = _useChat.fullData,\n      tempDeletedGroup = _useChat.tempDeletedGroup,\n      setTempDeletedGroup = _useChat.setTempDeletedGroup;\n\n  function handleChangeOption(data) {\n    setTempDeletedGroup(data);\n  }\n\n  function handleDeleteChats() {\n    var deleteObject = fullData.filter(function (channels) {\n      return channels.title === tempDeletedGroup;\n    });\n    var deleteID = deleteObject.title;\n    console.log(deleteObject, deleteID);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editChannelsContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pagesButtons),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"< Tela inicial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/configurations\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Editar avatar >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: \"Edite seus canais\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_editchannels_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteForm),\n      onSubmit: function onSubmit() {\n        return handleDeleteChats();\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"deletechats\",\n        name: \"deletechats\",\n        onChange: function onChange(data) {\n          return handleChangeOption(data.target.value);\n        },\n        children: fullData.filter(function (channels) {\n          return channels.members.includes(user);\n        }).map(function (channel, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: channel.title,\n            children: channel.title\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Deletar chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"zkJneKh+zXoK7ZkCFw+ALiTdfcQ=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3g/Njc0OSJdLCJuYW1lcyI6WyJIb21lIiwidXNlQ2hhdCIsInVzZXIiLCJmdWxsRGF0YSIsInRlbXBEZWxldGVkR3JvdXAiLCJzZXRUZW1wRGVsZXRlZEdyb3VwIiwiaGFuZGxlQ2hhbmdlT3B0aW9uIiwiZGF0YSIsImhhbmRsZURlbGV0ZUNoYXRzIiwiZGVsZXRlT2JqZWN0IiwiZmlsdGVyIiwiY2hhbm5lbHMiLCJ0aXRsZSIsImRlbGV0ZUlEIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInRhcmdldCIsInZhbHVlIiwibWVtYmVycyIsImluY2x1ZGVzIiwibWFwIiwiY2hhbm5lbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFDcUNDLCtEQUFPLEVBRDVDO0FBQUEsTUFDckJDLElBRHFCLFlBQ3JCQSxJQURxQjtBQUFBLE1BQ2ZDLFFBRGUsWUFDZkEsUUFEZTtBQUFBLE1BQ0xDLGdCQURLLFlBQ0xBLGdCQURLO0FBQUEsTUFDYUMsbUJBRGIsWUFDYUEsbUJBRGI7O0FBRzdCLFdBQVNDLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQztBQUNoQ0YsdUJBQW1CLENBQUNFLElBQUQsQ0FBbkI7QUFDRDs7QUFFRCxXQUFTQyxpQkFBVCxHQUE2QjtBQUMzQixRQUFNQyxZQUFZLEdBQUdOLFFBQVEsQ0FBQ08sTUFBVCxDQUNuQixVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxLQUFULEtBQW1CUixnQkFBakM7QUFBQSxLQURtQixDQUFyQjtBQUdBLFFBQU1TLFFBQVEsR0FBR0osWUFBWSxDQUFDRyxLQUE5QjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sWUFBWixFQUEwQkksUUFBMUI7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsK0ZBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHNGQUFoQjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFLGlCQUFaO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxpQkFBWjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQU0sZUFBUyxFQUFFQSxvRkFBakI7QUFBb0MsY0FBUSxFQUFFO0FBQUEsZUFBTVIsaUJBQWlCLEVBQXZCO0FBQUEsT0FBOUM7QUFBQSw4QkFDRTtBQUNFLFVBQUUsRUFBQyxhQURMO0FBRUUsWUFBSSxFQUFDLGFBRlA7QUFHRSxnQkFBUSxFQUFFLGtCQUFDRCxJQUFEO0FBQUEsaUJBQVVELGtCQUFrQixDQUFDQyxJQUFJLENBQUNVLE1BQUwsQ0FBWUMsS0FBYixDQUE1QjtBQUFBLFNBSFo7QUFBQSxrQkFLR2YsUUFBUSxDQUNOTyxNQURGLENBQ1MsVUFBQ0MsUUFBRDtBQUFBLGlCQUFjQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUJDLFFBQWpCLENBQTBCbEIsSUFBMUIsQ0FBZDtBQUFBLFNBRFQsRUFFRW1CLEdBRkYsQ0FFTSxVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDdkIsOEJBQ0U7QUFBb0IsaUJBQUssRUFBRUQsT0FBTyxDQUFDVixLQUFuQztBQUFBLHNCQUNHVSxPQUFPLENBQUNWO0FBRFgsYUFBYVcsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0QsU0FSRjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQS9DdUJ2QixJO1VBQzRDQywyRDs7O0tBRDVDRCxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2VkaXRjaGFubmVscy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDaGF0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYXRzQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2VkaXRjaGFubmVscy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXIsIGZ1bGxEYXRhLCB0ZW1wRGVsZXRlZEdyb3VwLCBzZXRUZW1wRGVsZXRlZEdyb3VwIH0gPSB1c2VDaGF0KCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlT3B0aW9uKGRhdGEpIHtcbiAgICBzZXRUZW1wRGVsZXRlZEdyb3VwKGRhdGEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ2hhdHMoKSB7XG4gICAgY29uc3QgZGVsZXRlT2JqZWN0ID0gZnVsbERhdGEuZmlsdGVyKFxuICAgICAgKGNoYW5uZWxzKSA9PiBjaGFubmVscy50aXRsZSA9PT0gdGVtcERlbGV0ZWRHcm91cFxuICAgICk7XG4gICAgY29uc3QgZGVsZXRlSUQgPSBkZWxldGVPYmplY3QudGl0bGU7XG4gICAgY29uc29sZS5sb2coZGVsZXRlT2JqZWN0LCBkZWxldGVJRCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdENoYW5uZWxzQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZXNCdXR0b25zfT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PiYjNjA7IFRlbGEgaW5pY2lhbDwvaDQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgPGg0PkVkaXRhciBhdmF0YXIgJiM2Mjs8L2g0PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5FZGl0ZSBzZXVzIGNhbmFpczwvaDQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVGb3JtfSBvblN1Ym1pdD17KCkgPT4gaGFuZGxlRGVsZXRlQ2hhdHMoKX0+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBpZD1cImRlbGV0ZWNoYXRzXCJcbiAgICAgICAgICBuYW1lPVwiZGVsZXRlY2hhdHNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0YSkgPT4gaGFuZGxlQ2hhbmdlT3B0aW9uKGRhdGEudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtmdWxsRGF0YVxuICAgICAgICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+IGNoYW5uZWxzLm1lbWJlcnMuaW5jbHVkZXModXNlcikpXG4gICAgICAgICAgICAubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2NoYW5uZWwudGl0bGV9PlxuICAgICAgICAgICAgICAgICAge2NoYW5uZWwudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RGVsZXRhciBjaGF0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/editchannels.tsx\n");

/***/ })

});