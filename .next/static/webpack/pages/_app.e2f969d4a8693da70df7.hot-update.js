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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Menu/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat)(),\n      user = _useChat.user,\n      setFullData = _useChat.setFullData,\n      chatList = _useChat.chatList,\n      setChatList = _useChat.setChatList,\n      setChannelsMessageHistory = _useChat.setChannelsMessageHistory,\n      membersList = _useChat.membersList,\n      setMembersList = _useChat.setMembersList,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      currentChatIndex = _useChat.currentChatIndex,\n      setCurrentChatIndex = _useChat.setCurrentChatIndex,\n      tempGroup = _useChat.tempGroup,\n      setTempGroup = _useChat.setTempGroup,\n      setEnableFields = _useChat.setEnableFields;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _yield$api$get, data;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get = _context.sent;\n            data = _yield$api$get.data;\n            setFullData(data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var _yield$api$get2, data, newChannels, newChannelsArray, newMessages, newMessagesArray, newMembers, newMembersArray;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get2 = _context2.sent;\n            data = _yield$api$get2.data;\n            newChannels = data.map(function (channel) {\n              return channel.title;\n            });\n            newChannelsArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newChannels);\n            newMessages = data.map(function (channel) {\n              return channel.messages;\n            });\n            newMessagesArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMessages);\n            newMembers = data.map(function (channel) {\n              return channel.members;\n            });\n            newMembersArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMembers);\n            setChannelsMessageHistory(newMessagesArray);\n            setMembersList(newMembersArray);\n            setChatList(newChannelsArray);\n            setFullData(data);\n\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [shouldUpdate]);\n\n  function handleSelectChat(key) {\n    setCurrentChatIndex(key);\n    setEnableFields(false);\n  }\n\n  function handleNewChatSubmit(event) {\n    event.preventDefault();\n    var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n    var newChatTitle = event.target.addChatButton.value;\n    var newChat = {\n      id: randomID,\n      title: newChatTitle,\n      members: [user],\n      messages: []\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"channels\", newChat);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempGroup(\"\");\n  }\n\n  function handleGroupFieldChange(data) {\n    setTempGroup(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: user === \"\" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().displayNone) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarImage),\n        src: \"/avatars/girl-4.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: user\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRooms),\n      children: chatList.filter(function (channels) {\n        return channels.members.include(user);\n      }).map(function (channel, index) {\n        var chatSlug = channel.replace(\" \", \"-\").toLowerCase();\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: currentChatIndex == index ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoomActive) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoom),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faComments,\n            color: currentChatIndex == index ? \"#298bf3\" : \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/chat/\".concat(chatSlug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              onClick: function onClick() {\n                return handleSelectChat(index);\n              },\n              children: channel\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 17\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleNewChatSubmit(data);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addChatButton\",\n        placeholder: \"Novo grupo\",\n        value: tempGroup,\n        onChange: function onChange(data) {\n          return handleGroupFieldChange(data.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPlus,\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addIcon),\n          color: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"I0h0saGOLs0GG/NHNAYyvR5d8lo=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJNZW51IiwidXNlQ2hhdCIsInVzZXIiLCJzZXRGdWxsRGF0YSIsImNoYXRMaXN0Iiwic2V0Q2hhdExpc3QiLCJzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5IiwibWVtYmVyc0xpc3QiLCJzZXRNZW1iZXJzTGlzdCIsInNob3VsZFVwZGF0ZSIsInNldFNob3VsZFVwZGF0ZSIsImN1cnJlbnRDaGF0SW5kZXgiLCJzZXRDdXJyZW50Q2hhdEluZGV4IiwidGVtcEdyb3VwIiwic2V0VGVtcEdyb3VwIiwic2V0RW5hYmxlRmllbGRzIiwidXNlRWZmZWN0IiwiYXBpIiwiZGF0YSIsIm5ld0NoYW5uZWxzIiwibWFwIiwiY2hhbm5lbCIsInRpdGxlIiwibmV3Q2hhbm5lbHNBcnJheSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlc0FycmF5IiwibmV3TWVtYmVycyIsIm1lbWJlcnMiLCJuZXdNZW1iZXJzQXJyYXkiLCJoYW5kbGVTZWxlY3RDaGF0Iiwia2V5IiwiaGFuZGxlTmV3Q2hhdFN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyYW5kb21JRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm5ld0NoYXRUaXRsZSIsInRhcmdldCIsImFkZENoYXRCdXR0b24iLCJ2YWx1ZSIsIm5ld0NoYXQiLCJpZCIsImhhbmRsZUdyb3VwRmllbGRDaGFuZ2UiLCJzdHlsZXMiLCJmaWx0ZXIiLCJjaGFubmVscyIsImluY2x1ZGUiLCJpbmRleCIsImNoYXRTbHVnIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZmFDb21tZW50cyIsImZhUGx1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNB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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1ERDs7R0EzSGUvQyxJO1VBZ0JWQywyRDs7O0tBaEJVRCxJIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDb21tZW50cyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ2hhdCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DaGF0c0NvbnRleHRcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgc2V0RnVsbERhdGEsXG4gICAgY2hhdExpc3QsXG4gICAgc2V0Q2hhdExpc3QsXG4gICAgc2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSxcbiAgICBtZW1iZXJzTGlzdCxcbiAgICBzZXRNZW1iZXJzTGlzdCxcbiAgICBzaG91bGRVcGRhdGUsXG4gICAgc2V0U2hvdWxkVXBkYXRlLFxuICAgIGN1cnJlbnRDaGF0SW5kZXgsXG4gICAgc2V0Q3VycmVudENoYXRJbmRleCxcbiAgICB0ZW1wR3JvdXAsXG4gICAgc2V0VGVtcEdyb3VwLFxuICAgIHNldEVuYWJsZUZpZWxkcyxcbiAgfSA9IHVzZUNoYXQoKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcImNoYW5uZWxzXCIpO1xuXG4gICAgc2V0RnVsbERhdGEoZGF0YSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcImNoYW5uZWxzXCIpO1xuXG4gICAgY29uc3QgbmV3Q2hhbm5lbHMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC50aXRsZSk7XG4gICAgY29uc3QgbmV3Q2hhbm5lbHNBcnJheSA9IFsuLi5uZXdDaGFubmVsc107XG5cbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGRhdGEubWFwKChjaGFubmVsKSA9PiBjaGFubmVsLm1lc3NhZ2VzKTtcbiAgICBjb25zdCBuZXdNZXNzYWdlc0FycmF5ID0gWy4uLm5ld01lc3NhZ2VzXTtcblxuICAgIGNvbnN0IG5ld01lbWJlcnMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC5tZW1iZXJzKTtcbiAgICBjb25zdCBuZXdNZW1iZXJzQXJyYXkgPSBbLi4ubmV3TWVtYmVyc107XG5cbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5KG5ld01lc3NhZ2VzQXJyYXkpO1xuICAgIHNldE1lbWJlcnNMaXN0KG5ld01lbWJlcnNBcnJheSk7XG4gICAgc2V0Q2hhdExpc3QobmV3Q2hhbm5lbHNBcnJheSk7XG4gICAgc2V0RnVsbERhdGEoZGF0YSk7XG4gIH0sIFtzaG91bGRVcGRhdGVdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RDaGF0KGtleSkge1xuICAgIHNldEN1cnJlbnRDaGF0SW5kZXgoa2V5KTtcbiAgICBzZXRFbmFibGVGaWVsZHMoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3Q2hhdFN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByYW5kb21JRCA9XG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICtcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG5cbiAgICBjb25zdCBuZXdDaGF0VGl0bGUgPSBldmVudC50YXJnZXQuYWRkQ2hhdEJ1dHRvbi52YWx1ZTtcbiAgICBjb25zdCBuZXdDaGF0ID0ge1xuICAgICAgaWQ6IHJhbmRvbUlELFxuICAgICAgdGl0bGU6IG5ld0NoYXRUaXRsZSxcbiAgICAgIG1lbWJlcnM6IFt1c2VyXSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuXG4gICAgYXBpLnBvc3QoXCJjaGFubmVsc1wiLCBuZXdDaGF0KTtcblxuICAgIHNldFNob3VsZFVwZGF0ZShzaG91bGRVcGRhdGUgKyAxKTtcbiAgICBzZXRUZW1wR3JvdXAoXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVHcm91cEZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICBzZXRUZW1wR3JvdXAoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyID09PSBcIlwiID8gc3R5bGVzLmRpc3BsYXlOb25lIDogc3R5bGVzLm1lbnVDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJJbWFnZX0gc3JjPVwiL2F2YXRhcnMvZ2lybC00LnBuZ1wiIC8+XG4gICAgICAgIDxoMj57dXNlcn08L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFJvb21zfT5cbiAgICAgICAge2NoYXRMaXN0XG4gICAgICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+IGNoYW5uZWxzLm1lbWJlcnMuaW5jbHVkZSh1c2VyKSlcbiAgICAgICAgICAubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhdFNsdWcgPSBjaGFubmVsLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgY3VycmVudENoYXRJbmRleCA9PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5jaGF0Um9vbUFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5jaGF0Um9vbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhQ29tbWVudHN9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y3VycmVudENoYXRJbmRleCA9PSBpbmRleCA/IFwiIzI5OGJmM1wiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhdC8ke2NoYXRTbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdENoYXQoaW5kZXgpfT57Y2hhbm5lbH08L2g0PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU5ld0NoYXRTdWJtaXQoZGF0YSl9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJhZGRDaGF0QnV0dG9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdm8gZ3J1cG9cIlxuICAgICAgICAgIHZhbHVlPXt0ZW1wR3JvdXB9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhKSA9PiBoYW5kbGVHcm91cEZpZWxkQ2hhbmdlKGRhdGEudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17ZmFQbHVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSWNvbn1cbiAgICAgICAgICAgIGNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

});