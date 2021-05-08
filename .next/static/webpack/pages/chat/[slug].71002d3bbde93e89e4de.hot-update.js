/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[slug]",{

/***/ "./src/pages/chat/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/chat/[slug].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chat_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.module.scss */ \"./src/pages/chat/chat.module.scss\");\n/* harmony import */ var _chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chat_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/chat/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Chat() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__.useChat)(),\n      fullData = _useChat.fullData,\n      tempMessage = _useChat.tempMessage,\n      setTempMessage = _useChat.setTempMessage,\n      channelsMessageHistory = _useChat.channelsMessageHistory,\n      currentChatIndex = _useChat.currentChatIndex,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      shouldUpdate = _useChat.shouldUpdate;\n\n  function handleNewMessageSubmit(event) {\n    event.preventDefault();\n    var oldMessages = fullData[currentChatIndex].messages;\n    var newMessage = event.target.sendMessage.value;\n    var channelID = fullData[currentChatIndex].id;\n    var attChannel = {\n      id: channelID,\n      title: fullData[currentChatIndex].title,\n      members: fullData[currentChatIndex].members,\n      messages: [{\n        sender: \"Daniel Kaneko\",\n        content: newMessage,\n        published_at: \"2021-01-22 16:35:40\",\n        channel_id: channelID\n      }].concat((0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(oldMessages))\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_4__.api.put(\"channels/\".concat(channelID), attChannel);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempMessage(\"\");\n  }\n\n  function handleMessageChange(data) {\n    setTempMessage(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageHistory),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: function onSubmit(data) {\n          return handleNewMessageSubmit(data);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          id: \"sendMessage\",\n          placeholder: \"Mensagem...\",\n          value: tempMessage,\n          onChange: function onChange(data) {\n            return handleMessageChange(data.target.value);\n          },\n          disabled: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          disabled: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPaperPlane,\n            className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addIcon),\n            color: \"#ffffff\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageOverflow),\n        children: channelsMessageHistory.filter(function (history, index) {\n          return index === currentChatIndex;\n        }).map(function (message) {\n          return message.map(function (content, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageContainer),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().message),\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                  children: content.content\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: content.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 21\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 19\n            }, _this);\n          });\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Chat, \"T/F/vByJUQtCkW/c0+tDv4T/+PA=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__.useChat];\n});\n\n_c = Chat;\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW3NsdWddLnRzeD9kNDg0Il0sIm5hbWVzIjpbIkNoYXQiLCJ1c2VDaGF0IiwiZnVsbERhdGEiLCJ0ZW1wTWVzc2FnZSIsInNldFRlbXBNZXNzYWdlIiwiY2hhbm5lbHNNZXNzYWdlSGlzdG9yeSIsImN1cnJlbnRDaGF0SW5kZXgiLCJzZXRTaG91bGRVcGRhdGUiLCJzaG91bGRVcGRhdGUiLCJoYW5kbGVOZXdNZXNzYWdlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9sZE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwidGFyZ2V0Iiwic2VuZE1lc3NhZ2UiLCJ2YWx1ZSIsImNoYW5uZWxJRCIsImlkIiwiYXR0Q2hhbm5lbCIsInRpdGxlIiwibWVtYmVycyIsInNlbmRlciIsImNvbnRlbnQiLCJwdWJsaXNoZWRfYXQiLCJjaGFubmVsX2lkIiwiYXBpIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImRhdGEiLCJzdHlsZXMiLCJmYVBhcGVyUGxhbmUiLCJmaWx0ZXIiLCJoaXN0b3J5IiwiaW5kZXgiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsaUJBU3pCQywrREFBTyxFQVRrQjtBQUFBLE1BRTNCQyxRQUYyQixZQUUzQkEsUUFGMkI7QUFBQSxNQUczQkMsV0FIMkIsWUFHM0JBLFdBSDJCO0FBQUEsTUFJM0JDLGNBSjJCLFlBSTNCQSxjQUoyQjtBQUFBLE1BSzNCQyxzQkFMMkIsWUFLM0JBLHNCQUwyQjtBQUFBLE1BTTNCQyxnQkFOMkIsWUFNM0JBLGdCQU4yQjtBQUFBLE1BTzNCQyxlQVAyQixZQU8zQkEsZUFQMkI7QUFBQSxNQVEzQkMsWUFSMkIsWUFRM0JBLFlBUjJCOztBQVc3QixXQUFTQyxzQkFBVCxDQUFnQ0Ms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SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDs7R0FqRnVCbEMsSTtVQVNsQkMsMkQ7OztLQVRrQkQsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jaGF0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NoYXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGFwZXJQbGFuZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IHtcbiAgICBmdWxsRGF0YSxcbiAgICB0ZW1wTWVzc2FnZSxcbiAgICBzZXRUZW1wTWVzc2FnZSxcbiAgICBjaGFubmVsc01lc3NhZ2VIaXN0b3J5LFxuICAgIGN1cnJlbnRDaGF0SW5kZXgsXG4gICAgc2V0U2hvdWxkVXBkYXRlLFxuICAgIHNob3VsZFVwZGF0ZSxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXdNZXNzYWdlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG9sZE1lc3NhZ2VzID0gZnVsbERhdGFbY3VycmVudENoYXRJbmRleF0ubWVzc2FnZXM7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IGV2ZW50LnRhcmdldC5zZW5kTWVzc2FnZS52YWx1ZTtcbiAgICBjb25zdCBjaGFubmVsSUQgPSBmdWxsRGF0YVtjdXJyZW50Q2hhdEluZGV4XS5pZDtcbiAgICBjb25zdCBhdHRDaGFubmVsID0ge1xuICAgICAgaWQ6IGNoYW5uZWxJRCxcbiAgICAgIHRpdGxlOiBmdWxsRGF0YVtjdXJyZW50Q2hhdEluZGV4XS50aXRsZSxcbiAgICAgIG1lbWJlcnM6IGZ1bGxEYXRhW2N1cnJlbnRDaGF0SW5kZXhdLm1lbWJlcnMsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VuZGVyOiBcIkRhbmllbCBLYW5la29cIixcbiAgICAgICAgICBjb250ZW50OiBuZXdNZXNzYWdlLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdDogXCIyMDIxLTAxLTIyIDE2OjM1OjQwXCIsXG4gICAgICAgICAgY2hhbm5lbF9pZDogY2hhbm5lbElELFxuICAgICAgICB9LFxuICAgICAgICAuLi5vbGRNZXNzYWdlcyxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGFwaS5wdXQoYGNoYW5uZWxzLyR7Y2hhbm5lbElEfWAsIGF0dENoYW5uZWwpO1xuXG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICAgIHNldFRlbXBNZXNzYWdlKFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZUNoYW5nZShkYXRhKSB7XG4gICAgc2V0VGVtcE1lc3NhZ2UoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VIaXN0b3J5fT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVOZXdNZXNzYWdlU3VibWl0KGRhdGEpfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwic2VuZE1lc3NhZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZW5zYWdlbS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17dGVtcE1lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZU1lc3NhZ2VDaGFuZ2UoZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYVBhcGVyUGxhbmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEljb259XG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZU92ZXJmbG93fT5cbiAgICAgICAgICB7Y2hhbm5lbHNNZXNzYWdlSGlzdG9yeVxuICAgICAgICAgICAgLmZpbHRlcigoaGlzdG9yeSwgaW5kZXgpID0+IGluZGV4ID09PSBjdXJyZW50Q2hhdEluZGV4KVxuICAgICAgICAgICAgLm1hcCgobWVzc2FnZSkgPT5cbiAgICAgICAgICAgICAgbWVzc2FnZS5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1Pntjb250ZW50LmNvbnRlbnR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y29udGVudC5wdWJsaXNoZWRfYXR9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[slug].tsx\n");

/***/ })

});