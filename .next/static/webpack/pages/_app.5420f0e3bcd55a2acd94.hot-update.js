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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Menu/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat)(),\n      avatar = _useChat.avatar,\n      user = _useChat.user,\n      fullData = _useChat.fullData,\n      setFullData = _useChat.setFullData,\n      setChannelsMessageHistory = _useChat.setChannelsMessageHistory,\n      setMembersList = _useChat.setMembersList,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      currentChatIndex = _useChat.currentChatIndex,\n      setCurrentChatIndex = _useChat.setCurrentChatIndex,\n      tempGroup = _useChat.tempGroup,\n      setTempGroup = _useChat.setTempGroup,\n      setEnableFields = _useChat.setEnableFields;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _yield$api$get, data;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get = _context.sent;\n            data = _yield$api$get.data;\n            setFullData(data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    /*#__PURE__*/\n    (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var _yield$api$get2, data, newMessages, newMessagesArray, newMembers, newMembersArray;\n\n      return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n            case 2:\n              _yield$api$get2 = _context2.sent;\n              data = _yield$api$get2.data;\n              newMessages = data.map(function (channel) {\n                return channel.messages;\n              });\n              newMessagesArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMessages);\n              newMembers = data.map(function (channel) {\n                return channel.members;\n              });\n              newMembersArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMembers);\n              setChannelsMessageHistory(newMessagesArray);\n              setMembersList(newMembersArray);\n              setFullData(data);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n  }, [shouldUpdate]);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            setTimeout(function () {\n              return setShouldUpdate(shouldUpdate + 1);\n            }, 5000);\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  })), [shouldUpdate]);\n\n  function handleSelectChat(key) {\n    setCurrentChatIndex(key);\n    setEnableFields(false);\n  }\n\n  function handleNewChatSubmit(event) {\n    event.preventDefault();\n    var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n    var newChatTitle = event.target.addChatButton.value;\n    var newChat = {\n      id: randomID,\n      title: newChatTitle,\n      members: [{\n        user: user,\n        avatar: avatar\n      }],\n      messages: []\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"channels\", newChat);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempGroup(\"\");\n  }\n\n  function handleConfigClick() {\n    setCurrentChatIndex(-1);\n  }\n\n  function handleGroupFieldChange(data) {\n    setTempGroup(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: user === \"\" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().displayNone) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarImage),\n        src: avatar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileDescription),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: user\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n          href: \"/configurations\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCog,\n            onClick: function onClick() {\n              return handleConfigClick();\n            },\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cogIcon)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRooms),\n      children: fullData.filter(function (channels) {\n        return channels.members.map(function (members) {\n          return members.user;\n        }).includes(user);\n      }).map(function (channel, index) {\n        var chatSlug = channel.title.replace(\" \", \"-\").toLowerCase();\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: currentChatIndex !== index ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoom) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoomActive),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faComments,\n            color: currentChatIndex !== index ? \"\" : \"#298bf3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/chat/\".concat(chatSlug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              onClick: function onClick() {\n                return handleSelectChat(index);\n              },\n              children: channel.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 17\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleNewChatSubmit(data);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addChatButton\",\n        placeholder: \"Novo grupo\",\n        value: tempGroup,\n        onChange: function onChange(data) {\n          return handleGroupFieldChange(data.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faPlus,\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addIcon),\n          color: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"a1JDbtcFfUw86PgmoQ7Ixk14gkk=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJNZW51IiwidXNlQ2hhdCIsImF2YXRhciIsInVzZXIiLCJmdWxsRGF0YSIsInNldEZ1bGxEYXRhIiwic2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSIsInNldE1lbWJlcnNMaXN0Iiwic2hvdWxkVXBkYXRlIiwic2V0U2hvdWxkVXBkYXRlIiwiY3VycmVudENoYXRJbmRleCIsInNldEN1cnJlbnRDaGF0SW5kZXgiLCJ0ZW1wR3JvdXAiLCJzZXRUZW1wR3JvdXAiLCJzZXRFbmFibGVGaWVsZHMiLCJ1c2VFZmZlY3QiLCJhcGkiLCJkYXRhIiwibmV3TWVzc2FnZXMiLCJtYXAiLCJjaGFubmVsIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlc0FycmF5IiwibmV3TWVtYmVycyIsIm1lbWJlcnMiLCJuZXdNZW1iZXJzQXJyYXkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VsZWN0Q2hhdCIsImtleSIsImhhbmRsZU5ld0NoYXRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmFuZG9tSUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJuZXdDaGF0VGl0bGUiLCJ0YXJnZXQiLCJhZGRDaGF0QnV0dG9uIiwidmFsdWUiLCJuZXdDaGF0IiwiaWQiLCJ0aXRsZSIsImhhbmRsZUNvbmZpZ0NsaWNrIiwiaGFuZGxlR3JvdXBGaWVsZENoYW5nZSIsInN0eWxlcyIsImZhQ29nIiwiY29nSWNvbiIsImZpbHRlciIsImNoYW5uZWxzIiwiaW5jbHVkZXMiLCJpbmRleCIsImNoYXRTbHVnIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZmFDb21tZW50cyIsImZhUGx1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFlakJDLCtEQUFPLEVBZlU7QUFBQSxNQUVuQkMsTUFGbUIsWUFFbkJBLE1BRm1CO0FBQUEsTUFHbkJDLElBSG1CLFlBR25CQSxJQUhtQjtBQUFBLE1BSW5CQyxRQUptQixZQUluQkEsUUFKbUI7QUFBQSxNQUtuQkMsV0FMbUIsWUFLbkJBLFdBTG1CO0FBQUEsTUFNbkJDLHlCQU5tQixZQU1uQkEseUJBTm1CO0FBQUEsTUFPbkJDLGNBUG1CLFlBT25CQSxjQVBtQjtBQUFBLE1BUW5CQyxZQVJtQixZQVFuQkEsWUFSbUI7QUFBQSxNQVNuQkMsZUFUbUIsWUFTbkJBLGVBVG1CO0FBQUEsTUFVbkJDLGdCQVZtQixZQVVuQkEsZ0JBVm1CO0FBQUEsTUFXbkJDLG1CQVhtQixZQVduQkEsbUJBWG1CO0FBQUEsTUFZbkJDLFNBWm1CLFlBWW5CQSxTQVptQjtBQUFBLE1BYW5CQyxZQWJtQixZQWFuQkEsWUFibUI7QUFBQSxNQWNuQkMsZUFkbUIsWUFjbkJBLGVBZG1COztBQWlCckJDLGtEQUFTLHlSQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlQyxrREFBQSxDQUFRLFVBQVIsQ0FEZjs7QUFBQTtBQUFBO0FBQ0FDLGdCQURBLGtCQUNBQSxJQURBO0FBR1JaLHVCQUFXLENBQUNZLElBQUQsQ0FBWDs7QUFIUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSU4sRUFKTSxDQUFUO0FBTUFGLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3lCQyxrREFBQSxDQUFRLFVBQVIsQ0FEekI7O0FBQUE7QUFBQTtBQUNVQyxrQkFEVixtQkFDVUEsSUFEVjtBQUdRQyx5QkFIUixHQUdzQkQsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsT0FBRDtBQUFBLHVCQUFhQSxPQUFPLENBQUNDLFFBQXJCO0FBQUEsZUFBVCxDQUh0QjtBQUlRQyw4QkFKUix5SUFJK0JKLFdBSi9CO0FBTVFLLHdCQU5SLEdBTXFCTixJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxPQUFEO0FBQUEsdUJBQWFBLE9BQU8sQ0FBQ0ksT0FBckI7QUFBQSxlQUFULENBTnJCO0FBT1FDLDZCQVBSLHlJQU84QkYsVUFQOUI7QUFTRWpCLHVDQUF5QixDQUFDZ0IsZ0JBQUQsQ0FBekI7QUFDQWYsNEJBQWMsQ0FBQ2tCLGVBQUQsQ0FBZDtBQUNBcEIseUJBQVcsQ0FBQ1ksSUFBRCxDQUFYOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUQsR0FkUSxFQWNOLENBQUNULFlBQUQsQ0FkTSxDQUFUO0FBZ0JBTyxrREFBUyx5UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JXLHNCQUFVLENBQUM7QUFBQSxxQkFBTWpCLGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQXJCO0FBQUEsYUFBRCxFQUEwQyxJQUExQyxDQUFWOztBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFFTixDQUFDQSxZQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTbUIsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQStCO0FBQzdCakIsdUJBQW1CLENBQUNpQixHQUFELENBQW5CO0FBQ0FkLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0Q7O0FBRUQsV0FBU2UsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDQSxTQUFLLENBQUNDLGNBQU47QUFFQSxRQUFNQyxRQUFRLEdBQ1pDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQyxFQUF3QyxFQUF4QyxJQUNBSCxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0MsRUFBeEMsQ0FGRjtBQUlBLFFBQU1DLFlBQVksR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWFDLGFBQWIsQ0FBMkJDLEtBQWhEO0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFFBQUUsRUFBRVYsUUFEVTtBQUVkVyxXQUFLLEVBQUVOLFlBRk87QUFHZGIsYUFBTyxFQUFFLENBQUM7QUFBRXJCLFlBQUksRUFBRUEsSUFBUjtBQUFjRCxjQUFNLEVBQUVBO0FBQXRCLE9BQUQsQ0FISztBQUlkbUIsY0FBUSxFQUFFO0FBSkksS0FBaEI7QUFPQUwsdURBQUEsQ0FBUyxVQUFULEVBQXFCeUIsT0FBckI7QUFFQWhDLG1CQUFlLENBQUNELFlBQVksR0FBRyxDQUFoQixDQUFmO0FBQ0FLLGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBUytCLGlCQUFULEdBQTZCO0FBQzNCakMsdUJBQW1CLENBQUMsQ0FBQyxDQUFGLENBQW5CO0FBQ0Q7O0FBRUQsV0FBU2tDLHNCQUFULENBQWdDNUIsSUFBaEMsRUFBc0M7QUFDcENKLGdCQUFZLENBQUNJLElBQUQsQ0FBWjtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFZCxJQUFJLEtBQUssRUFBVCxHQUFjMkMsd0VBQWQsR0FBbUNBLDBFQUFuRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSw2RUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHdFQUFoQjtBQUFvQyxXQUFHLEVBQUU1QztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUU0QywrRUFBaEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLM0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUUsaUJBQVo7QUFBQSxpQ0FDRSw4REFBQywyRUFBRDtBQUNFLGdCQUFJLEVBQUU0QyxxRUFEUjtBQUVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUgsaUJBQWlCLEVBQXZCO0FBQUEsYUFGWDtBQUdFLHFCQUFTLEVBQUVFLG9FQUFjRTtBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWVFO0FBQUssZUFBUyxFQUFFRixzRUFBaEI7QUFBQSxnQkFDRzFDLFFBQVEsQ0FDTjZDLE1BREYsQ0FDUyxVQUFDQyxRQUFEO0FBQUEsZUFDTkEsUUFBUSxDQUFDMUIsT0FBVCxDQUFpQkwsR0FBakIsQ0FBcUIsVUFBQ0ssT0FBRDtBQUFBLGlCQUFhQSxPQUFPLENBQUNyQixJQUFyQjtBQUFBLFNBQXJCLEVBQWdEZ0QsUUFBaEQsQ0FBeURoRCxJQUF6RCxDQURNO0FBQUEsT0FEVCxFQUlFZ0IsR0FKRixDQUlNLFVBQUNDLE9BQUQsRUFBVWdDLEtBQVYsRUFBb0I7QUFDdkIsWUFBTUMsUUFBUSxHQUFHakMsT0FBTyxDQUFDdUIsS0FBUixDQUFjVyxPQUFkLENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDQyxXQUFoQyxFQUFqQjtBQUVBLDRCQUNFO0FBRUUsbUJBQVMsRUFDUDdDLGdCQUFnQixLQUFLMEMsS0FBckIsR0FDSU4scUVBREosR0FFSUEsMkVBTFI7QUFBQSxrQ0FRRSw4REFBQywyRUFBRDtBQUNFLGdCQUFJLEVBQUVVLDRFQURSO0FBRUUsaUJBQUssRUFBRTlDLGdCQUFnQixLQUFLMEMsS0FBckIsR0FBNkIsRUFBN0IsR0FBa0M7QUFGM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVlFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksa0JBQVdDLFFBQVgsQ0FBVjtBQUFBLG1DQUNFO0FBQUkscUJBQU8sRUFBRTtBQUFBLHVCQUFNMUIsZ0JBQWdCLENBQUN5QixLQUFELENBQXRCO0FBQUEsZUFBYjtBQUFBLHdCQUNHaEMsT0FBTyxDQUFDdUI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBLFdBQ09TLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQW9CRCxPQTNCRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQTZDRTtBQUFNLGNBQVEsRUFBRSxrQkFBQ25DLElBQUQ7QUFBQSxlQUFVWSxtQkFBbUIsQ0FBQ1osSUFBRCxDQUE3QjtBQUFBLE9BQWhCO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUUsRUFBQyxlQUZMO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsYUFBSyxFQUFFTCxTQUpUO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0ssSUFBRDtBQUFBLGlCQUFVNEIsc0JBQXNCLENBQUM1QixJQUFJLENBQUNxQixNQUFMLENBQVlFLEtBQWIsQ0FBaEM7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQSwrQkFDRSw4REFBQywyRUFBRDtBQUNFLGNBQUksRUFBRWlCLHNFQURSO0FBRUUsbUJBQVMsRUFBRVgsb0VBRmI7QUFHRSxlQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0E3SWU5QyxJO1VBZVZDLDJEOzs7S0FmVUQsSSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ29tbWVudHMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhUGx1cywgZmFDb2cgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VDaGF0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NoYXRzQ29udGV4dFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgQXN5bmMgPSB7XG4gIGFzeW5jOiAoc3ViU3RyaW5nOiB2b2lkKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IHtcbiAgICBhdmF0YXIsXG4gICAgdXNlcixcbiAgICBmdWxsRGF0YSxcbiAgICBzZXRGdWxsRGF0YSxcbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5LFxuICAgIHNldE1lbWJlcnNMaXN0LFxuICAgIHNob3VsZFVwZGF0ZSxcbiAgICBzZXRTaG91bGRVcGRhdGUsXG4gICAgY3VycmVudENoYXRJbmRleCxcbiAgICBzZXRDdXJyZW50Q2hhdEluZGV4LFxuICAgIHRlbXBHcm91cCxcbiAgICBzZXRUZW1wR3JvdXAsXG4gICAgc2V0RW5hYmxlRmllbGRzLFxuICB9ID0gdXNlQ2hhdCgpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICBzZXRGdWxsRGF0YShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gZGF0YS5tYXAoKGNoYW5uZWwpID0+IGNoYW5uZWwubWVzc2FnZXMpO1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXNBcnJheSA9IFsuLi5uZXdNZXNzYWdlc107XG5cbiAgICAgIGNvbnN0IG5ld01lbWJlcnMgPSBkYXRhLm1hcCgoY2hhbm5lbCkgPT4gY2hhbm5lbC5tZW1iZXJzKTtcbiAgICAgIGNvbnN0IG5ld01lbWJlcnNBcnJheSA9IFsuLi5uZXdNZW1iZXJzXTtcblxuICAgICAgc2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeShuZXdNZXNzYWdlc0FycmF5KTtcbiAgICAgIHNldE1lbWJlcnNMaXN0KG5ld01lbWJlcnNBcnJheSk7XG4gICAgICBzZXRGdWxsRGF0YShkYXRhKTtcbiAgICB9O1xuICB9LCBbc2hvdWxkVXBkYXRlXSk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3VsZFVwZGF0ZShzaG91bGRVcGRhdGUgKyAxKSwgNTAwMCk7XG4gIH0sIFtzaG91bGRVcGRhdGVdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RDaGF0KGtleSkge1xuICAgIHNldEN1cnJlbnRDaGF0SW5kZXgoa2V5KTtcbiAgICBzZXRFbmFibGVGaWVsZHMoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3Q2hhdFN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByYW5kb21JRCA9XG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICtcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG5cbiAgICBjb25zdCBuZXdDaGF0VGl0bGUgPSBldmVudC50YXJnZXQuYWRkQ2hhdEJ1dHRvbi52YWx1ZTtcbiAgICBjb25zdCBuZXdDaGF0ID0ge1xuICAgICAgaWQ6IHJhbmRvbUlELFxuICAgICAgdGl0bGU6IG5ld0NoYXRUaXRsZSxcbiAgICAgIG1lbWJlcnM6IFt7IHVzZXI6IHVzZXIsIGF2YXRhcjogYXZhdGFyIH1dLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG5cbiAgICBhcGkucG9zdChcImNoYW5uZWxzXCIsIG5ld0NoYXQpO1xuXG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICAgIHNldFRlbXBHcm91cChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbmZpZ0NsaWNrKCkge1xuICAgIHNldEN1cnJlbnRDaGF0SW5kZXgoLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlR3JvdXBGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgc2V0VGVtcEdyb3VwKGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17dXNlciA9PT0gXCJcIiA/IHN0eWxlcy5kaXNwbGF5Tm9uZSA6IHN0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFySW1hZ2V9IHNyYz17YXZhdGFyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVEZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGgyPnt1c2VyfTwvaDI+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvY29uZmlndXJhdGlvbnNcIn0+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhQ29nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb25maWdDbGljaygpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2dJY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFJvb21zfT5cbiAgICAgICAge2Z1bGxEYXRhXG4gICAgICAgICAgLmZpbHRlcigoY2hhbm5lbHMpID0+XG4gICAgICAgICAgICBjaGFubmVscy5tZW1iZXJzLm1hcCgobWVtYmVycykgPT4gbWVtYmVycy51c2VyKS5pbmNsdWRlcyh1c2VyKVxuICAgICAgICAgIClcbiAgICAgICAgICAubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhdFNsdWcgPSBjaGFubmVsLnRpdGxlLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgY3VycmVudENoYXRJbmRleCAhPT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hhdFJvb21cbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuY2hhdFJvb21BY3RpdmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUNvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgY29sb3I9e2N1cnJlbnRDaGF0SW5kZXggIT09IGluZGV4ID8gXCJcIiA6IFwiIzI5OGJmM1wifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGF0LyR7Y2hhdFNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0Q2hhdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hhbm5lbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlTmV3Q2hhdFN1Ym1pdChkYXRhKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImFkZENoYXRCdXR0b25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm92byBncnVwb1wiXG4gICAgICAgICAgdmFsdWU9e3RlbXBHcm91cH1cbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVBsdXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRJY29ufVxuICAgICAgICAgICAgY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

});