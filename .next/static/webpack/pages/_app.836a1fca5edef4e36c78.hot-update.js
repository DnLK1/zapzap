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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Menu/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var _this = this;\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat)(),\n      user = _useChat.user,\n      setFullData = _useChat.setFullData,\n      chatList = _useChat.chatList,\n      setChatList = _useChat.setChatList,\n      setChannelsMessageHistory = _useChat.setChannelsMessageHistory,\n      membersList = _useChat.membersList,\n      setMembersList = _useChat.setMembersList,\n      shouldUpdate = _useChat.shouldUpdate,\n      setShouldUpdate = _useChat.setShouldUpdate,\n      currentChatIndex = _useChat.currentChatIndex,\n      setCurrentChatIndex = _useChat.setCurrentChatIndex,\n      tempGroup = _useChat.tempGroup,\n      setTempGroup = _useChat.setTempGroup,\n      setEnableFields = _useChat.setEnableFields;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var _yield$api$get, data;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get = _context.sent;\n            data = _yield$api$get.data;\n            setFullData(data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var _yield$api$get2, data, newChannels, newChannelsArray, newMessages, newMessagesArray, newMembers, newMembersArray;\n\n    return _home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _services_api__WEBPACK_IMPORTED_MODULE_7__.api.get(\"channels\");\n\n          case 2:\n            _yield$api$get2 = _context2.sent;\n            data = _yield$api$get2.data;\n            newChannels = data.map(function (channel) {\n              return channel.title;\n            });\n            newChannelsArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newChannels);\n            newMessages = data.map(function (channel) {\n              return channel.messages;\n            });\n            newMessagesArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMessages);\n            newMembers = data.map(function (channel) {\n              return channel.members;\n            });\n            newMembersArray = (0,_home_kaneks_rea_de_Trabalho_zapzap_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMembers);\n            setChannelsMessageHistory(newMessagesArray);\n            setMembersList(newMembersArray);\n            setChatList(newChannelsArray);\n            setFullData(data);\n\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [shouldUpdate]);\n\n  function handleSelectChat(key) {\n    setCurrentChatIndex(key);\n    setEnableFields(false);\n  }\n\n  function handleNewChatSubmit(event) {\n    event.preventDefault();\n    var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n    var newChatTitle = event.target.addChatButton.value;\n    var newChat = {\n      id: randomID,\n      title: newChatTitle,\n      members: [user],\n      messages: []\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"channels\", newChat);\n    setShouldUpdate(shouldUpdate + 1);\n    setTempGroup(\"\");\n  }\n\n  function handleGroupFieldChange(data) {\n    setTempGroup(data);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: user === \"\" ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().displayNone) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarImage),\n        src: \"/avatars/girl-4.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: user\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRooms),\n      children: chatList.map(function (channel, index) {\n        var chatSlug = channel.replace(\" \", \"-\").toLowerCase();\n        var participatingChannels = membersList[index];\n        console.log(participatingChannels);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: currentChatIndex == index ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoomActive) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatRoom),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faComments,\n            color: currentChatIndex == index ? \"#298bf3\" : \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/chat/\".concat(chatSlug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              onClick: function onClick() {\n                return handleSelectChat(index);\n              },\n              children: channel\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleNewChatSubmit(data);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addChatButton\",\n        placeholder: \"Novo grupo\",\n        value: tempGroup,\n        onChange: function onChange(data) {\n          return handleGroupFieldChange(data.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPlus,\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addIcon),\n          color: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"I0h0saGOLs0GG/NHNAYyvR5d8lo=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_6__.useChat];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJNZW51IiwidXNlQ2hhdCIsInVzZXIiLCJzZXRGdWxsRGF0YSIsImNoYXRMaXN0Iiwic2V0Q2hhdExpc3QiLCJzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5IiwibWVtYmVyc0xpc3QiLCJzZXRNZW1iZXJzTGlzdCIsInNob3VsZFVwZGF0ZSIsInNldFNob3VsZFVwZGF0ZSIsImN1cnJlbnRDaGF0SW5kZXgiLCJzZXRDdXJyZW50Q2hhdEluZGV4IiwidGVtcEdyb3VwIiwic2V0VGVtcEdyb3VwIiwic2V0RW5hYmxlRmllbGRzIiwidXNlRWZmZWN0IiwiYXBpIiwiZGF0YSIsIm5ld0NoYW5uZWxzIiwibWFwIiwiY2hhbm5lbCIsInRpdGxlIiwibmV3Q2hhbm5lbHNBcnJheSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlc0FycmF5IiwibmV3TWVtYmVycyIsIm1lbWJlcnMiLCJuZXdNZW1iZXJzQXJyYXkiLCJoYW5kbGVTZWxlY3RDaGF0Iiwia2V5IiwiaGFuZGxlTmV3Q2hhdFN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyYW5kb21JRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm5ld0NoYXRUaXRsZSIsInRhcmdldCIsImFkZENoYXRCdXR0b24iLCJ2YWx1ZSIsIm5ld0NoYXQiLCJpZCIsImhhbmRsZUdyb3VwRmllbGRDaGFuZ2UiLCJzdHlsZXMiLCJpbmRleCIsImNoYXRTbHVnIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicGFydGljaXBhdGluZ0NoYW5uZWxzIiwiY29uc29sZSIsImxvZyIsImZhQ29tbWVudHMiLCJmYVBsdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUREOztHQTNIZS9DLEk7VUFnQlZDLDJEOzs7S0FoQlVELEkiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNvbW1lbnRzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VDaGF0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NoYXRzQ29udGV4dFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51KCkge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBzZXRGdWxsRGF0YSxcbiAgICBjaGF0TGlzdCxcbiAgICBzZXRDaGF0TGlzdCxcbiAgICBzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5LFxuICAgIG1lbWJlcnNMaXN0LFxuICAgIHNldE1lbWJlcnNMaXN0LFxuICAgIHNob3VsZFVwZGF0ZSxcbiAgICBzZXRTaG91bGRVcGRhdGUsXG4gICAgY3VycmVudENoYXRJbmRleCxcbiAgICBzZXRDdXJyZW50Q2hhdEluZGV4LFxuICAgIHRlbXBHcm91cCxcbiAgICBzZXRUZW1wR3JvdXAsXG4gICAgc2V0RW5hYmxlRmllbGRzLFxuICB9ID0gdXNlQ2hhdCgpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICBzZXRGdWxsRGF0YShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwiY2hhbm5lbHNcIik7XG5cbiAgICBjb25zdCBuZXdDaGFubmVscyA9IGRhdGEubWFwKChjaGFubmVsKSA9PiBjaGFubmVsLnRpdGxlKTtcbiAgICBjb25zdCBuZXdDaGFubmVsc0FycmF5ID0gWy4uLm5ld0NoYW5uZWxzXTtcblxuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gZGF0YS5tYXAoKGNoYW5uZWwpID0+IGNoYW5uZWwubWVzc2FnZXMpO1xuICAgIGNvbnN0IG5ld01lc3NhZ2VzQXJyYXkgPSBbLi4ubmV3TWVzc2FnZXNdO1xuXG4gICAgY29uc3QgbmV3TWVtYmVycyA9IGRhdGEubWFwKChjaGFubmVsKSA9PiBjaGFubmVsLm1lbWJlcnMpO1xuICAgIGNvbnN0IG5ld01lbWJlcnNBcnJheSA9IFsuLi5uZXdNZW1iZXJzXTtcblxuICAgIHNldENoYW5uZWxzTWVzc2FnZUhpc3RvcnkobmV3TWVzc2FnZXNBcnJheSk7XG4gICAgc2V0TWVtYmVyc0xpc3QobmV3TWVtYmVyc0FycmF5KTtcbiAgICBzZXRDaGF0TGlzdChuZXdDaGFubmVsc0FycmF5KTtcbiAgICBzZXRGdWxsRGF0YShkYXRhKTtcbiAgfSwgW3Nob3VsZFVwZGF0ZV0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdENoYXQoa2V5KSB7XG4gICAgc2V0Q3VycmVudENoYXRJbmRleChrZXkpO1xuICAgIHNldEVuYWJsZUZpZWxkcyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdDaGF0U3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJhbmRvbUlEID1cbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgK1xuICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcblxuICAgIGNvbnN0IG5ld0NoYXRUaXRsZSA9IGV2ZW50LnRhcmdldC5hZGRDaGF0QnV0dG9uLnZhbHVlO1xuICAgIGNvbnN0IG5ld0NoYXQgPSB7XG4gICAgICBpZDogcmFuZG9tSUQsXG4gICAgICB0aXRsZTogbmV3Q2hhdFRpdGxlLFxuICAgICAgbWVtYmVyczogW3VzZXJdLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG5cbiAgICBhcGkucG9zdChcImNoYW5uZWxzXCIsIG5ld0NoYXQpO1xuXG4gICAgc2V0U2hvdWxkVXBkYXRlKHNob3VsZFVwZGF0ZSArIDEpO1xuICAgIHNldFRlbXBHcm91cChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgIHNldFRlbXBHcm91cChkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3VzZXIgPT09IFwiXCIgPyBzdHlsZXMuZGlzcGxheU5vbmUgOiBzdHlsZXMubWVudUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhckltYWdlfSBzcmM9XCIvYXZhdGFycy9naXJsLTQucG5nXCIgLz5cbiAgICAgICAgPGgyPnt1c2VyfTwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Um9vbXN9PlxuICAgICAgICB7Y2hhdExpc3QubWFwKChjaGFubmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYXRTbHVnID0gY2hhbm5lbC5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBjb25zdCBwYXJ0aWNpcGF0aW5nQ2hhbm5lbHMgPSBtZW1iZXJzTGlzdFtpbmRleF07XG4gICAgICAgICAgY29uc29sZS5sb2cocGFydGljaXBhdGluZ0NoYW5uZWxzKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgY3VycmVudENoYXRJbmRleCA9PSBpbmRleFxuICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hhdFJvb21BY3RpdmVcbiAgICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoYXRSb29tXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhQ29tbWVudHN9XG4gICAgICAgICAgICAgICAgY29sb3I9e2N1cnJlbnRDaGF0SW5kZXggPT0gaW5kZXggPyBcIiMyOThiZjNcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhdC8ke2NoYXRTbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RDaGF0KGluZGV4KX0+e2NoYW5uZWx9PC9oND5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlTmV3Q2hhdFN1Ym1pdChkYXRhKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImFkZENoYXRCdXR0b25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm92byBncnVwb1wiXG4gICAgICAgICAgdmFsdWU9e3RlbXBHcm91cH1cbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZUdyb3VwRmllbGRDaGFuZ2UoZGF0YS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYVBsdXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRJY29ufVxuICAgICAgICAgICAgY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

});