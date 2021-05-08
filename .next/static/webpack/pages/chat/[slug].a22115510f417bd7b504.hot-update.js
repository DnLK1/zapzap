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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chat_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.module.scss */ \"./src/pages/chat/chat.module.scss\");\n/* harmony import */ var _chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chat_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/chat/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Chat() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__.useChat)(),\n      user = _useChat.user,\n      fullData = _useChat.fullData,\n      tempMessage = _useChat.tempMessage,\n      setTempMessage = _useChat.setTempMessage,\n      channelsMessageHistory = _useChat.channelsMessageHistory,\n      currentChatIndex = _useChat.currentChatIndex,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      shouldUpdate = _useChat.shouldUpdate,\n      enableFields = _useChat.enableFields;\n\n  function handleNewMessageSubmit(event) {\n    event.preventDefault();\n    var oldMessages = fullData[currentChatIndex].messages;\n    var newMessage = event.target.sendMessage.value;\n    var channelID = fullData[currentChatIndex].id;\n    var attChannel = {\n      id: channelID,\n      title: fullData[currentChatIndex].title,\n      members: fullData[currentChatIndex].members,\n      messages: [{\n        sender: \"Daniel Kaneko\",\n        content: newMessage,\n        published_at: \"2021-01-22 16:35:40\",\n        channel_id: channelID\n      }].concat((0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(oldMessages))\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_4__.api.put(\"channels/\".concat(channelID), attChannel);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempMessage(\"\");\n  }\n\n  function handleMessageChange(data) {\n    setTempMessage(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: enableFields ? (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().displayNone) : (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageHistory),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: enableFields ? (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().displayNone) : \"\",\n        onSubmit: function onSubmit(data) {\n          return handleNewMessageSubmit(data);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          id: \"sendMessage\",\n          placeholder: \"Mensagem...\",\n          value: tempMessage,\n          onChange: function onChange(data) {\n            return handleMessageChange(data.target.value);\n          },\n          disabled: enableFields\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          disabled: enableFields,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPaperPlane,\n            className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addIcon),\n            color: \"#ffffff\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageOverflow),\n        children: channelsMessageHistory.filter(function (history, index) {\n          return index === currentChatIndex;\n        }).map(function (message) {\n          return message.map(function (content, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messageContainer),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_chat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().message),\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                  children: content.content\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: content.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 21\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 19\n            }, _this);\n          });\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Chat, \"v6Vet4R54pYm/h/to589g7aZlKQ=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_3__.useChat];\n});\n\n_c = Chat;\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW3NsdWddLnRzeD9kNDg0Il0sIm5hbWVzIjpbIkNoYXQiLCJ1c2VDaGF0IiwidXNlciIsImZ1bGxEYXRhIiwidGVtcE1lc3NhZ2UiLCJzZXRUZW1wTWVzc2FnZSIsImNoYW5uZWxzTWVzc2FnZUhpc3RvcnkiLCJjdXJyZW50Q2hhdEluZGV4Iiwic2V0U2hvdWxkVXBkYXRlIiwic2hvdWxkVXBkYXRlIiwiZW5hYmxlRmllbGRzIiwiaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbGRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInRhcmdldCIsInNlbmRNZXNzYWdlIiwidmFsdWUiLCJjaGFubmVsSUQiLCJpZCIsImF0dENoYW5uZWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJzZW5kZXIiLCJjb250ZW50IiwicHVibGlzaGVkX2F0IiwiY2hhbm5lbF9pZCIsImFwaSIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJkYXRhIiwic3R5bGVzIiwiZmFQYXBlclBsYW5lIiwiZmlsdGVyIiwiaGlzdG9yeSIsImluZGV4IiwibWFwIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGlCQVd6QkMsK0RBQU8sRUFYa0I7QUFBQSxNQUUzQkMsSUFGMkIsWUFFM0JBLElBRjJCO0FBQUEsTUFHM0JDLFFBSDJCLFlBRzNCQSxRQUgyQjtBQUFBLE1BSTNCQyxXQUoyQixZQUkzQkEsV0FKMkI7QUFBQSxNQUszQkMsY0FMMkIsWUFLM0JBLGNBTDJCO0FBQUEsTUFNM0JDLHNCQU4yQixZQU0zQkEsc0JBTjJCO0FBQUEsTUFPM0JDLGdCQVAyQixZQU8zQkEsZ0JBUDJCO0FBQUEsTUFRM0JDLGVBUjJCLFlBUTNCQSxlQVIyQjtBQUFB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFBLDBCQUFLQSxPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBLGVBQVVTLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVFELFdBVEQsQ0FERztBQUFBLFNBRk47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRDRDs7R0F4RnVCcEMsSTtVQVdsQkMsMkQ7OztLQVhrQkQsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jaGF0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NoYXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGFwZXJQbGFuZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGZ1bGxEYXRhLFxuICAgIHRlbXBNZXNzYWdlLFxuICAgIHNldFRlbXBNZXNzYWdlLFxuICAgIGNoYW5uZWxzTWVzc2FnZUhpc3RvcnksXG4gICAgY3VycmVudENoYXRJbmRleCxcbiAgICBzZXRTaG91bGRVcGRhdGUsXG4gICAgc2hvdWxkVXBkYXRlLFxuICAgIGVuYWJsZUZpZWxkcyxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXdNZXNzYWdlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG9sZE1lc3NhZ2VzID0gZnVsbERhdGFbY3VycmVudENoYXRJbmRleF0ubWVzc2FnZXM7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IGV2ZW50LnRhcmdldC5zZW5kTWVzc2FnZS52YWx1ZTtcbiAgICBjb25zdCBjaGFubmVsSUQgPSBmdWxsRGF0YVtjdXJyZW50Q2hhdEluZGV4XS5pZDtcbiAgICBjb25zdCBhdHRDaGFubmVsID0ge1xuICAgICAgaWQ6IGNoYW5uZWxJRCxcbiAgICAgIHRpdGxlOiBmdWxsRGF0YVtjdXJyZW50Q2hhdEluZGV4XS50aXRsZSxcbiAgICAgIG1lbWJlcnM6IGZ1bGxEYXRhW2N1cnJlbnRDaGF0SW5kZXhdLm1lbWJlcnMsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VuZGVyOiBcIkRhbmllbCBLYW5la29cIixcbiAgICAgICAgICBjb250ZW50OiBuZXdNZXNzYWdlLFxuICAgICAgICAgIHB1Ymxpc2hlZF9hdDogXCIyMDIxLTAxLTIyIDE2OjM1OjQwXCIsXG4gICAgICAgICAgY2hhbm5lbF9pZDogY2hhbm5lbElELFxuICAgICAgICB9LFxuICAgICAgICAuLi5vbGRNZXNzYWdlcyxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGFwaS5wdXQoYGNoYW5uZWxzLyR7Y2hhbm5lbElEfWAsIGF0dENoYW5uZWwpO1xuXG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICAgIHNldFRlbXBNZXNzYWdlKFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZUNoYW5nZShkYXRhKSB7XG4gICAgc2V0VGVtcE1lc3NhZ2UoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17ZW5hYmxlRmllbGRzID8gc3R5bGVzLmRpc3BsYXlOb25lIDogc3R5bGVzLm1lc3NhZ2VIaXN0b3J5fVxuICAgICAgPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT17ZW5hYmxlRmllbGRzID8gc3R5bGVzLmRpc3BsYXlOb25lIDogXCJcIn1cbiAgICAgICAgICBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU5ld01lc3NhZ2VTdWJtaXQoZGF0YSl9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwic2VuZE1lc3NhZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZW5zYWdlbS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17dGVtcE1lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZU1lc3NhZ2VDaGFuZ2UoZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2VuYWJsZUZpZWxkc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtlbmFibGVGaWVsZHN9PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYVBhcGVyUGxhbmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEljb259XG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZU92ZXJmbG93fT5cbiAgICAgICAgICB7Y2hhbm5lbHNNZXNzYWdlSGlzdG9yeVxuICAgICAgICAgICAgLmZpbHRlcigoaGlzdG9yeSwgaW5kZXgpID0+IGluZGV4ID09PSBjdXJyZW50Q2hhdEluZGV4KVxuICAgICAgICAgICAgLm1hcCgobWVzc2FnZSkgPT5cbiAgICAgICAgICAgICAgbWVzc2FnZS5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1Pntjb250ZW50LmNvbnRlbnR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y29udGVudC5wdWJsaXNoZWRfYXR9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[slug].tsx\n");

/***/ })

});