/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Menu/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat)(),\n      fullData = _useChat.fullData,\n      setFullData = _useChat.setFullData,\n      chatList = _useChat.chatList,\n      setChatList = _useChat.setChatList,\n      setChannelsMessageHistory = _useChat.setChannelsMessageHistory,\n      setMembersList = _useChat.setMembersList,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      currentChatIndex = _useChat.currentChatIndex,\n      setCurrentChatIndex = _useChat.setCurrentChatIndex,\n      tempGroup = _useChat.tempGroup,\n      setTempGroup = _useChat.setTempGroup;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _yield$api$get, data;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get = _context.sent;\n            data = _yield$api$get.data;\n            setFullData(data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var _yield$api$get2, data, newChannels, newChannelsArray, newMessages, newMessagesArray, newMembers, newMembersArray;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get2 = _context2.sent;\n            data = _yield$api$get2.data;\n            newChannels = data.map(function (channel) {\n              return channel.title;\n            });\n            newChannelsArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newChannels);\n            newMessages = data.map(function (channel) {\n              return channel.messages;\n            });\n            newMessagesArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMessages);\n            newMembers = data.map(function (channel) {\n              return channel.members;\n            });\n            newMembersArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMembers);\n            setChannelsMessageHistory(newMessagesArray);\n            setMembersList(newMembersArray);\n            setChatList(newChannelsArray);\n            setFullData(data);\n\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [shouldUpdate]);\n\n  function handleSelectChat(key) {\n    setCurrentChatIndex(key);\n  }\n\n  function handleNewChatSubmit(event) {\n    event.preventDefault();\n    var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n    var newChatTitle = event.target.addChatButton.value;\n    var newChat = {\n      id: randomID,\n      title: newChatTitle,\n      members: [\"Daniel Kaneko\"],\n      messages: []\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"channels\", newChat);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempGroup(\"\");\n  }\n\n  function handleGroupFieldChange(data) {\n    setTempGroup(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarImage),\n        src: \"/avatars/girl-4.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Daniel Kaneko\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRooms),\n      children: chatList.map(function (channel, index) {\n        var chatSlug = channel.replace(\" \", \"-\").toLowerCase();\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: currentChatIndex == index ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoomActive) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoom),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faComments,\n            color: currentChatIndex == index ? \"#298bf3\" : \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/chat/\".concat(chatSlug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              onClick: function onClick() {\n                return handleSelectChat(index);\n              },\n              children: channel\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleNewChatSubmit(data);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addChatButton\",\n        placeholder: \"Novo grupo\",\n        value: tempGroup,\n        onChange: function onChange(data) {\n          return handleGroupFieldChange(data.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPlus,\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addIcon),\n          color: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"KowN+14wehMT4LiN5wc0KoEAuC8=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJNZW51IiwidXNlQ2hhdCIsImZ1bGxEYXRhIiwic2V0RnVsbERhdGEiLCJjaGF0TGlzdCIsInNldENoYXRMaXN0Iiwic2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSIsInNldE1lbWJlcnNMaXN0Iiwic2hvdWxkVXBkYXRlIiwic2V0U2hvdWxkVXBkYXRlIiwiY3VycmVudENoYXRJbmRleCIsInNldEN1cnJlbnRDaGF0SW5kZXgiLCJ0ZW1wR3JvdXAiLCJzZXRUZW1wR3JvdXAiLCJ1c2VFZmZlY3QiLCJhcGkiLCJkYXRhIiwibmV3Q2hhbm5lbHMiLCJtYXAiLCJjaGFubmVsIiwidGl0bGUiLCJuZXdDaGFubmVsc0FycmF5IiwibmV3TWVzc2FnZXMiLCJtZXNzYWdlcyIsIm5ld01lc3NhZ2VzQXJyYXkiLCJuZXdNZW1iZXJzIiwibWVtYmVycyIsIm5ld01lbWJlcnNBcnJheSIsImhhbmRsZVNlbGVjdENoYXQiLCJrZXkiLCJoYW5kbGVOZXdDaGF0U3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJhbmRvbUlEIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwibmV3Q2hhdFRpdGxlIiwidGFyZ2V0IiwiYWRkQ2hhdEJ1dHRvbiIsInZhbHVlIiwibmV3Q2hhdCIsImlkIiwiaGFuZGxlR3JvdXBGaWVsZENoYW5nZSIsInN0eWxlcyIsImluZGV4IiwiY2hhdFNsdWciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJmYUNvbW1lbnRzIiwiZmFQbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGlCQWNqQkMsK0RBQU8sRUFkVTtBQUFBLE1B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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUEsV0FDTzJCLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWtCRCxPQXJCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQThCRTtBQUFNLGNBQVEsRUFBRSxrQkFBQzlCLElBQUQ7QUFBQSxlQUFVYyxtQkFBbUIsQ0FBQ2QsSUFBRCxDQUE3QjtBQUFBLE9BQWhCO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUUsRUFBQyxlQUZMO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsYUFBSyxFQUFFSixTQUpUO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0ksSUFBRDtBQUFBLGlCQUFVNEIsc0JBQXNCLENBQUM1QixJQUFJLENBQUN1QixNQUFMLENBQVlFLEtBQWIsQ0FBaEM7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQSwrQkFDRSw4REFBQywyRUFBRDtBQUNFLGNBQUksRUFBRVUsc0VBRFI7QUFFRSxtQkFBUyxFQUFFTixvRUFGYjtBQUdFLGVBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztHQXRIZTdDLEk7VUFjVkMsMkQ7OztLQWRVRCxJIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDb21tZW50cyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ2hhdCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DaGF0c0NvbnRleHRcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3Qge1xuICAgIGZ1bGxEYXRhLFxuICAgIHNldEZ1bGxEYXRhLFxuICAgIGNoYXRMaXN0LFxuICAgIHNldENoYXRMaXN0LFxuICAgIHNldENoYW5uZWxzTWVzc2FnZUhpc3RvcnksXG4gICAgc2V0TWVtYmVyc0xpc3QsXG4gICAgc2hvdWxkVXBkYXRlLFxuICAgIHNldFNob3VsZFVwZGF0ZSxcbiAgICBjdXJyZW50Q2hhdEluZGV4LFxuICAgIHNldEN1cnJlbnRDaGF0SW5kZXgsXG4gICAgdGVtcEdyb3VwLFxuICAgIHNldFRlbXBHcm91cCxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcImNoYW5uZWxzXCIpO1xuXG4gICAgc2V0RnVsbERhdGEoZGF0YSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcImNoYW5uZWxzXCIpO1xuXG4gICAgY29uc3QgbmV3Q2hhbm5lbHMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC50aXRsZSk7XG4gICAgY29uc3QgbmV3Q2hhbm5lbHNBcnJheSA9IFsuLi5uZXdDaGFubmVsc107XG5cbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGRhdGEubWFwKChjaGFubmVsKSA9PiBjaGFubmVsLm1lc3NhZ2VzKTtcbiAgICBjb25zdCBuZXdNZXNzYWdlc0FycmF5ID0gWy4uLm5ld01lc3NhZ2VzXTtcblxuICAgIGNvbnN0IG5ld01lbWJlcnMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC5tZW1iZXJzKTtcbiAgICBjb25zdCBuZXdNZW1iZXJzQXJyYXkgPSBbLi4ubmV3TWVtYmVyc107XG5cbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5KG5ld01lc3NhZ2VzQXJyYXkpO1xuICAgIHNldE1lbWJlcnNMaXN0KG5ld01lbWJlcnNBcnJheSk7XG4gICAgc2V0Q2hhdExpc3QobmV3Q2hhbm5lbHNBcnJheSk7XG4gICAgc2V0RnVsbERhdGEoZGF0YSk7XG4gIH0sIFtzaG91bGRVcGRhdGVdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RDaGF0KGtleSkge1xuICAgIHNldEN1cnJlbnRDaGF0SW5kZXgoa2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld0NoYXRTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmFuZG9tSUQgPVxuICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xuXG4gICAgY29uc3QgbmV3Q2hhdFRpdGxlID0gZXZlbnQudGFyZ2V0LmFkZENoYXRCdXR0b24udmFsdWU7XG4gICAgY29uc3QgbmV3Q2hhdCA9IHtcbiAgICAgIGlkOiByYW5kb21JRCxcbiAgICAgIHRpdGxlOiBuZXdDaGF0VGl0bGUsXG4gICAgICBtZW1iZXJzOiBbXCJEYW5pZWwgS2FuZWtvXCJdLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG5cbiAgICBhcGkucG9zdChcImNoYW5uZWxzXCIsIG5ld0NoYXQpO1xuXG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICAgIHNldFRlbXBHcm91cChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgIHNldFRlbXBHcm91cChkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFySW1hZ2V9IHNyYz1cIi9hdmF0YXJzL2dpcmwtNC5wbmdcIiAvPlxuICAgICAgICA8aDI+RGFuaWVsIEthbmVrbzwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Um9vbXN9PlxuICAgICAgICB7Y2hhdExpc3QubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYXRTbHVnID0gY2hhbm5lbC5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgY3VycmVudENoYXRJbmRleCA9PSBpbmRleFxuICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hhdFJvb21BY3RpdmVcbiAgICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoYXRSb29tXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhQ29tbWVudHN9XG4gICAgICAgICAgICAgICAgY29sb3I9e2N1cnJlbnRDaGF0SW5kZXggPT0gaW5kZXggPyBcIiMyOThiZjNcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhdC8ke2NoYXRTbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RDaGF0KGluZGV4KX0+e2NoYW5uZWx9PC9oND5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlTmV3Q2hhdFN1Ym1pdChkYXRhKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImFkZENoYXRCdXR0b25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm92byBncnVwb1wiXG4gICAgICAgICAgdmFsdWU9e3RlbXBHcm91cH1cbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVBsdXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRJY29ufVxuICAgICAgICAgICAgY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

});