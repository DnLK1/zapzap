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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Menu/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat)(),\n      avatar = _useChat.avatar,\n      user = _useChat.user,\n      fullData = _useChat.fullData,\n      setFullData = _useChat.setFullData,\n      setChannelsMessageHistory = _useChat.setChannelsMessageHistory,\n      setMembersList = _useChat.setMembersList,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      currentChatIndex = _useChat.currentChatIndex,\n      setCurrentChatIndex = _useChat.setCurrentChatIndex,\n      tempGroup = _useChat.tempGroup,\n      setTempGroup = _useChat.setTempGroup,\n      setEnableFields = _useChat.setEnableFields;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _yield$api$get, data;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get = _context.sent;\n            data = _yield$api$get.data;\n            setFullData(data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var _yield$api$get2, data, newMessages, newMessagesArray, newMembers, newMembersArray;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get2 = _context2.sent;\n            data = _yield$api$get2.data;\n            newMessages = data.map(function (channel) {\n              return channel.messages;\n            });\n            newMessagesArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMessages);\n            newMembers = data.map(function (channel) {\n              return channel.members;\n            });\n            newMembersArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMembers);\n            setChannelsMessageHistory(newMessagesArray);\n            setMembersList(newMembersArray);\n            setFullData(data);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [shouldUpdate]);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            setTimeout(5000);\n            setShouldUpdate(shouldUpdate + 1);\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  })), [shouldUpdate]);\n\n  function handleSelectChat(key) {\n    setCurrentChatIndex(key);\n    setEnableFields(false);\n  }\n\n  function handleNewChatSubmit(event) {\n    event.preventDefault();\n    var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n    var newChatTitle = event.target.addChatButton.value;\n    var newChat = {\n      id: randomID,\n      title: newChatTitle,\n      members: [user],\n      messages: []\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"channels\", newChat);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempGroup(\"\");\n  }\n\n  function handleConfigClick() {\n    setCurrentChatIndex(\"\");\n  }\n\n  function handleGroupFieldChange(data) {\n    setTempGroup(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: user === \"\" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().displayNone) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarImage),\n        src: avatar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileDescription),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: user\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n          href: \"/configurations\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCog,\n            onClick: function onClick() {\n              return handleConfigClick();\n            },\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cogIcon)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRooms),\n      children: fullData.filter(function (channels) {\n        return channels.members.includes(user);\n      }).map(function (channel, index) {\n        var chatSlug = channel.title.replace(\" \", \"-\").toLowerCase();\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: currentChatIndex !== index ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoom) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoomActive),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faComments,\n            color: currentChatIndex !== index ? \"\" : \"#298bf3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/chat/\".concat(chatSlug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              onClick: function onClick() {\n                return handleSelectChat(index);\n              },\n              children: channel.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 17\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleNewChatSubmit(data);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addChatButton\",\n        placeholder: \"Novo grupo\",\n        value: tempGroup,\n        onChange: function onChange(data) {\n          return handleGroupFieldChange(data.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faPlus,\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addIcon),\n          color: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"a1JDbtcFfUw86PgmoQ7Ixk14gkk=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJNZW51IiwidXNlQ2hhdCIsImF2YXRhciIsInVzZXIiLCJmdWxsRGF0YSIsInNldEZ1bGxEYXRhIiwic2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSIsInNldE1lbWJlcnNMaXN0Iiwic2hvdWxkVXBkYXRlIiwic2V0U2hvdWxkVXBkYXRlIiwiY3VycmVudENoYXRJbmRleCIsInNldEN1cnJlbnRDaGF0SW5kZXgiLCJ0ZW1wR3JvdXAiLCJzZXRUZW1wR3JvdXAiLCJzZXRFbmFibGVGaWVsZHMiLCJ1c2VFZmZlY3QiLCJhcGkiLCJkYXRhIiwibmV3TWVzc2FnZXMiLCJtYXAiLCJjaGFubmVsIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlc0FycmF5IiwibmV3TWVtYmVycyIsIm1lbWJlcnMiLCJuZXdNZW1iZXJzQXJyYXkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VsZWN0Q2hhdCIsImtleSIsImhhbmRsZU5ld0NoYXRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmFuZG9tSUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJuZXdDaGF0VGl0bGUiLCJ0YXJnZXQiLCJhZGRDaGF0QnV0dG9uIiwidmFsdWUiLCJuZXdDaGF0IiwiaWQiLCJ0aXRsZSIsImhhbmRsZUNvbmZpZ0NsaWNrIiwiaGFuZGxlR3JvdXBGaWVsZENoYW5nZSIsInN0eWxlcyIsImZhQ29nIiwiY29nSWNvbiIsImZpbHRlciIsImNoYW5uZWxzIiwiaW5jbHVkZXMiLCJpbmRleCIsImNoYXRTbHVnIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZmFDb21tZW50cyIsImZhUGx1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNB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QUFDLFlBSGQ7QUFJRSxhQUFLLEVBQUVMLFNBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDSyxJQUFEO0FBQUEsaUJBQVU0QixzQkFBc0IsQ0FBQzVCLElBQUksQ0FBQ3FCLE1BQUwsQ0FBWUUsS0FBYixDQUFoQztBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBLCtCQUNFLDhEQUFDLDJFQUFEO0FBQ0UsY0FBSSxFQUFFaUIsc0VBRFI7QUFFRSxtQkFBUyxFQUFFWCxvRUFGYjtBQUdFLGVBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEREOztHQTFJZTlDLEk7VUFlVkMsMkQ7OztLQWZVRCxJIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDb21tZW50cyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFQbHVzLCBmYUNvZyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IHtcbiAgICBhdmF0YXIsXG4gICAgdXNlcixcbiAgICBmdWxsRGF0YSxcbiAgICBzZXRGdWxsRGF0YSxcbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5LFxuICAgIHNldE1lbWJlcnNMaXN0LFxuICAgIHNob3VsZFVwZGF0ZSxcbiAgICBzZXRTaG91bGRVcGRhdGUsXG4gICAgY3VycmVudENoYXRJbmRleCxcbiAgICBzZXRDdXJyZW50Q2hhdEluZGV4LFxuICAgIHRlbXBHcm91cCxcbiAgICBzZXRUZW1wR3JvdXAsXG4gICAgc2V0RW5hYmxlRmllbGRzLFxuICB9ID0gdXNlQ2hhdCgpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICBzZXRGdWxsRGF0YShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGRhdGEubWFwKChjaGFubmVsKSA9PiBjaGFubmVsLm1lc3NhZ2VzKTtcbiAgICBjb25zdCBuZXdNZXNzYWdlc0FycmF5ID0gWy4uLm5ld01lc3NhZ2VzXTtcblxuICAgIGNvbnN0IG5ld01lbWJlcnMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC5tZW1iZXJzKTtcbiAgICBjb25zdCBuZXdNZW1iZXJzQXJyYXkgPSBbLi4ubmV3TWVtYmVyc107XG5cbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5KG5ld01lc3NhZ2VzQXJyYXkpO1xuICAgIHNldE1lbWJlcnNMaXN0KG5ld01lbWJlcnNBcnJheSk7XG4gICAgc2V0RnVsbERhdGEoZGF0YSk7XG4gIH0sIFtzaG91bGRVcGRhdGVdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoNTAwMCk7XG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICB9LCBbc2hvdWxkVXBkYXRlXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0Q2hhdChrZXkpIHtcbiAgICBzZXRDdXJyZW50Q2hhdEluZGV4KGtleSk7XG4gICAgc2V0RW5hYmxlRmllbGRzKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld0NoYXRTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmFuZG9tSUQgPVxuICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xuXG4gICAgY29uc3QgbmV3Q2hhdFRpdGxlID0gZXZlbnQudGFyZ2V0LmFkZENoYXRCdXR0b24udmFsdWU7XG4gICAgY29uc3QgbmV3Q2hhdCA9IHtcbiAgICAgIGlkOiByYW5kb21JRCxcbiAgICAgIHRpdGxlOiBuZXdDaGF0VGl0bGUsXG4gICAgICBtZW1iZXJzOiBbdXNlcl0sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfTtcblxuICAgIGFwaS5wb3N0KFwiY2hhbm5lbHNcIiwgbmV3Q2hhdCk7XG5cbiAgICBzZXRTaG91bGRVcGRhdGUoc2hvdWxkVXBkYXRlICsgMSk7XG4gICAgc2V0VGVtcEdyb3VwKFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29uZmlnQ2xpY2soKSB7XG4gICAgc2V0Q3VycmVudENoYXRJbmRleChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgIHNldFRlbXBHcm91cChkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3VzZXIgPT09IFwiXCIgPyBzdHlsZXMuZGlzcGxheU5vbmUgOiBzdHlsZXMubWVudUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhckltYWdlfSBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlRGVzY3JpcHRpb259PlxuICAgICAgICAgIDxoMj57dXNlcn08L2gyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2NvbmZpZ3VyYXRpb25zXCJ9PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYUNvZ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29uZmlnQ2xpY2soKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29nSWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRSb29tc30+XG4gICAgICAgIHtmdWxsRGF0YVxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5uZWxzKSA9PiBjaGFubmVscy5tZW1iZXJzLmluY2x1ZGVzKHVzZXIpKVxuICAgICAgICAgIC5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGF0U2x1ZyA9IGNoYW5uZWwudGl0bGUucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q2hhdEluZGV4ICE9PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5jaGF0Um9vbVxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5jaGF0Um9vbUFjdGl2ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhQ29tbWVudHN9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y3VycmVudENoYXRJbmRleCAhPT0gaW5kZXggPyBcIlwiIDogXCIjMjk4YmYzXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYXQvJHtjaGF0U2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RDaGF0KGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGFubmVsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVOZXdDaGF0U3VibWl0KGRhdGEpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiYWRkQ2hhdEJ1dHRvblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3ZvIGdydXBvXCJcbiAgICAgICAgICB2YWx1ZT17dGVtcEdyb3VwfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0YSkgPT4gaGFuZGxlR3JvdXBGaWVsZENoYW5nZShkYXRhLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhUGx1c31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEljb259XG4gICAgICAgICAgICBjb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

});