/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/ChatsContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/ChatsContext.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatContext\": function() { return /* binding */ ChatContext; },\n/* harmony export */   \"ChatContextProvider\": function() { return /* binding */ ChatContextProvider; },\n/* harmony export */   \"useChat\": function() { return /* binding */ useChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/contexts/ChatsContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar ChatContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChatContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      fullData = _useState[0],\n      setFullData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      avatar = _useState3[0],\n      setAvatar = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempAvatar = _useState4[0],\n      setTempAvatar = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"nenhum\"),\n      tempDeletedGroup = _useState5[0],\n      setTempDeletedGroup = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempMessage = _useState6[0],\n      setTempMessage = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempGroup = _useState7[0],\n      setTempGroup = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempMember = _useState8[0],\n      setTempMember = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      membersList = _useState9[0],\n      setMembersList = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1),\n      currentChatIndex = _useState10[0],\n      setCurrentChatIndex = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      channelsMessageHistory = _useState11[0],\n      setChannelsMessageHistory = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      shouldUpdate = _useState12[0],\n      setShouldUpdate = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      enableFields = _useState13[0],\n      setEnableFields = _useState13[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var randomAvatarSelection = [\"/avatars/guy-1.png\", \"/avatars/guy-2.png\", \"/avatars/guy-3.png\", \"/avatars/guy-4.png\", \"/avatars/girl-1.png\", \"/avatars/girl-2.png\", \"/avatars/girl-3.png\", \"/avatars/girl-4.png\"];\n    var pickRandomAvatar = randomAvatarSelection[Math.floor(Math.random() * randomAvatarSelection.length)];\n    setAvatar(pickRandomAvatar);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatContext.Provider, {\n    value: {\n      fullData: fullData,\n      setFullData: setFullData,\n      user: user,\n      setUser: setUser,\n      avatar: avatar,\n      setAvatar: setAvatar,\n      tempDeletedGroup: tempDeletedGroup,\n      setTempDeletedGroup: setTempDeletedGroup,\n      tempAvatar: tempAvatar,\n      setTempAvatar: setTempAvatar,\n      tempMessage: tempMessage,\n      setTempMessage: setTempMessage,\n      channelsMessageHistory: channelsMessageHistory,\n      setChannelsMessageHistory: setChannelsMessageHistory,\n      membersList: membersList,\n      setMembersList: setMembersList,\n      shouldUpdate: shouldUpdate,\n      setShouldUpdate: setShouldUpdate,\n      currentChatIndex: currentChatIndex,\n      setCurrentChatIndex: setCurrentChatIndex,\n      tempGroup: tempGroup,\n      setTempGroup: setTempGroup,\n      tempMember: tempMember,\n      setTempMember: setTempMember,\n      enableFields: enableFields,\n      setEnableFields: setEnableFields\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChatContextProvider, \"hebrGx5FgjfNYS9J9Zf18PlSgBk=\");\n\n_c = ChatContextProvider;\nvar useChat = function useChat() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChatContext);\n};\n\n_s2(useChat, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYXRzQ29udGV4dC50c3g/MzY2MCJdLCJuYW1lcyI6WyJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGF0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImZ1bGxEYXRhIiwic2V0RnVsbERhdGEiLCJ1c2VyIiwic2V0VXNlciIsImF2YXRhciIsInNldEF2YXRhciIsInRlbXBBdmF0YXIiLCJzZXRUZW1wQXZhdGFyIiwidGVtcERlbGV0ZWRHcm91cCIsInNldFRlbXBEZWxldGVkR3JvdXAiLCJ0ZW1wTWVzc2FnZSIsInNldFRlbXBNZXNzYWdlIiwidGVtcEdyb3VwIiwic2V0VGVtcEdyb3VwIiwidGVtcE1lbWJlciIsInNldFRlbXBNZW1iZXIiLCJtZW1iZXJzTGlzdCIsInNldE1lbWJlcnNMaXN0IiwiY3VycmVudENoYXRJbmRleCIsInNldEN1cnJlbnRDaGF0SW5kZXgiLCJjaGFubmVsc01lc3NhZ2VIaXN0b3J5Iiwic2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSIsInNob3VsZFVwZGF0ZSIsInNldFNob3VsZFVwZGF0ZSIsImVuYWJsZUZpZWxkcyIsInNldEVuYWJsZUZpZWxkcyIsInVzZUVmZmVjdCIsInJhbmRvbUF2YXRhclNlbGVjdGlvbiIsInBpY2tSYW5kb21BdmF0YXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ1c2VDaGF0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9FTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFQSxTQUFTQyxtQkFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsa0JBQzFDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEa0M7QUFBQSxNQUNuRUMsUUFEbUU7QUFBQSxNQUN6REMsV0FEeUQ7O0FB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QUFVLEVBQVZBLFVBdkJLO0FBd0JMQyxtQkFBYSxFQUFiQSxhQXhCSztBQXlCTFMsa0JBQVksRUFBWkEsWUF6Qks7QUEwQkxDLHFCQUFlLEVBQWZBO0FBMUJLLEtBRFQ7QUFBQSxjQThCRzNCO0FBOUJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0FyRWVELG1COztLQUFBQSxtQjtBQXVFVCxJQUFNb0MsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUMzQixTQUFPQyxpREFBVSxDQUFDdkMsV0FBRCxDQUFqQjtBQUNELENBRk07O0lBQU1zQyxPIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NoYXRzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBSZWFjdE5vZGUsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG59IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE1lbWJlciA9IHtcbiAgdXNlcjogc3RyaW5nO1xuICBhdmF0YXI6IHN0cmluZztcbn07XG5cbnR5cGUgTWVzc2FnZSA9IHtcbiAgc2VuZGVyOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgcHVibGlzaGVkX2F0OiBzdHJpbmc7XG4gIGNoYW5uZWxfaWQ6IHN0cmluZztcbn07XG5cbnR5cGUgQ2hhbm5lbHNMaXN0ID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBNZW1iZXJbXTtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbn07XG5cbnR5cGUgTWVzc2FnZUhpc3RvcnkgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG59O1xuXG50eXBlIE1lbWJlcnMgPSB7XG4gIG1lbWJlcnM6IE1lbWJlcltdO1xufTtcblxudHlwZSBDaGF0Q29udGV4dERhdGEgPSB7XG4gIGZ1bGxEYXRhOiBDaGFubmVsc0xpc3RbXTtcbiAgc2V0RnVsbERhdGE6IChzdGF0ZTogQ2hhbm5lbHNMaXN0W10pID0+IHZvaWQ7XG4gIHVzZXI6IHN0cmluZztcbiAgc2V0VXNlcjogKHN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGF2YXRhcjogc3RyaW5nO1xuICBzZXRBdmF0YXI6IChzdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuICB0ZW1wRGVsZXRlZEdyb3VwOiBzdHJpbmc7XG4gIHNldFRlbXBEZWxldGVkR3JvdXA6IChzdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuICB0ZW1wQXZhdGFyOiBzdHJpbmc7XG4gIHNldFRlbXBBdmF0YXI6IChzdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuICB0ZW1wTWVzc2FnZTogc3RyaW5nO1xuICBzZXRUZW1wTWVzc2FnZTogKHN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNoYW5uZWxzTWVzc2FnZUhpc3Rvcnk6IE1lc3NhZ2VIaXN0b3J5W107XG4gIHNldENoYW5uZWxzTWVzc2FnZUhpc3Rvcnk6IChzdGF0ZTogTWVzc2FnZUhpc3RvcnlbXSkgPT4gdm9pZDtcbiAgbWVtYmVyc0xpc3Q6IE1lbWJlcnNbXTtcbiAgc2V0TWVtYmVyc0xpc3Q6IChzdGF0ZTogTWVtYmVyc1tdKSA9PiB2b2lkO1xuICBzaG91bGRVcGRhdGU6IG51bWJlcjtcbiAgc2V0U2hvdWxkVXBkYXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudENoYXRJbmRleDogbnVtYmVyO1xuICBzZXRDdXJyZW50Q2hhdEluZGV4OiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZDtcbiAgdGVtcEdyb3VwOiBzdHJpbmc7XG4gIHNldFRlbXBHcm91cDogKHN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHRlbXBNZW1iZXI6IHN0cmluZztcbiAgc2V0VGVtcE1lbWJlcjogKHN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGVuYWJsZUZpZWxkczogYm9vbGVhbjtcbiAgc2V0RW5hYmxlRmllbGRzOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG50eXBlIENoYXRDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBDaGF0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhdENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGF0Q29udGV4dFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2Z1bGxEYXRhLCBzZXRGdWxsRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0ZW1wQXZhdGFyLCBzZXRUZW1wQXZhdGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGVtcERlbGV0ZWRHcm91cCwgc2V0VGVtcERlbGV0ZWRHcm91cF0gPSB1c2VTdGF0ZShcIm5lbmh1bVwiKTtcbiAgY29uc3QgW3RlbXBNZXNzYWdlLCBzZXRUZW1wTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RlbXBHcm91cCwgc2V0VGVtcEdyb3VwXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGVtcE1lbWJlciwgc2V0VGVtcE1lbWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lbWJlcnNMaXN0LCBzZXRNZW1iZXJzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50Q2hhdEluZGV4LCBzZXRDdXJyZW50Q2hhdEluZGV4XSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2NoYW5uZWxzTWVzc2FnZUhpc3RvcnksIHNldENoYW5uZWxzTWVzc2FnZUhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvdWxkVXBkYXRlLCBzZXRTaG91bGRVcGRhdGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtlbmFibGVGaWVsZHMsIHNldEVuYWJsZUZpZWxkc10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbUF2YXRhclNlbGVjdGlvbiA9IFtcbiAgICAgIFwiL2F2YXRhcnMvZ3V5LTEucG5nXCIsXG4gICAgICBcIi9hdmF0YXJzL2d1eS0yLnBuZ1wiLFxuICAgICAgXCIvYXZhdGFycy9ndXktMy5wbmdcIixcbiAgICAgIFwiL2F2YXRhcnMvZ3V5LTQucG5nXCIsXG4gICAgICBcIi9hdmF0YXJzL2dpcmwtMS5wbmdcIixcbiAgICAgIFwiL2F2YXRhcnMvZ2lybC0yLnBuZ1wiLFxuICAgICAgXCIvYXZhdGFycy9naXJsLTMucG5nXCIsXG4gICAgICBcIi9hdmF0YXJzL2dpcmwtNC5wbmdcIixcbiAgICBdO1xuXG4gICAgY29uc3QgcGlja1JhbmRvbUF2YXRhciA9XG4gICAgICByYW5kb21BdmF0YXJTZWxlY3Rpb25bXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbUF2YXRhclNlbGVjdGlvbi5sZW5ndGgpXG4gICAgICBdO1xuXG4gICAgc2V0QXZhdGFyKHBpY2tSYW5kb21BdmF0YXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGZ1bGxEYXRhLFxuICAgICAgICBzZXRGdWxsRGF0YSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgYXZhdGFyLFxuICAgICAgICBzZXRBdmF0YXIsXG4gICAgICAgIHRlbXBEZWxldGVkR3JvdXAsXG4gICAgICAgIHNldFRlbXBEZWxldGVkR3JvdXAsXG4gICAgICAgIHRlbXBBdmF0YXIsXG4gICAgICAgIHNldFRlbXBBdmF0YXIsXG4gICAgICAgIHRlbXBNZXNzYWdlLFxuICAgICAgICBzZXRUZW1wTWVzc2FnZSxcbiAgICAgICAgY2hhbm5lbHNNZXNzYWdlSGlzdG9yeSxcbiAgICAgICAgc2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSxcbiAgICAgICAgbWVtYmVyc0xpc3QsXG4gICAgICAgIHNldE1lbWJlcnNMaXN0LFxuICAgICAgICBzaG91bGRVcGRhdGUsXG4gICAgICAgIHNldFNob3VsZFVwZGF0ZSxcbiAgICAgICAgY3VycmVudENoYXRJbmRleCxcbiAgICAgICAgc2V0Q3VycmVudENoYXRJbmRleCxcbiAgICAgICAgdGVtcEdyb3VwLFxuICAgICAgICBzZXRUZW1wR3JvdXAsXG4gICAgICAgIHRlbXBNZW1iZXIsXG4gICAgICAgIHNldFRlbXBNZW1iZXIsXG4gICAgICAgIGVuYWJsZUZpZWxkcyxcbiAgICAgICAgc2V0RW5hYmxlRmllbGRzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGF0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNoYXQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChatsContext.tsx\n");

/***/ })

});