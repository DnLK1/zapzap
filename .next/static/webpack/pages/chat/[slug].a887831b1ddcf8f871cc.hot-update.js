/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[slug]",{

/***/ "./src/contexts/ChatsContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/ChatsContext.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatContext\": function() { return /* binding */ ChatContext; },\n/* harmony export */   \"ChatContextProvider\": function() { return /* binding */ ChatContextProvider; },\n/* harmony export */   \"useChat\": function() { return /* binding */ useChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/contexts/ChatsContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar ChatContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChatContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      fullData = _useState[0],\n      setFullData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempMessage = _useState3[0],\n      setTempMessage = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempGroup = _useState4[0],\n      setTempGroup = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      tempMember = _useState5[0],\n      setTempMember = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      membersList = _useState6[0],\n      setMembersList = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      currentChatIndex = _useState7[0],\n      setCurrentChatIndex = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      channelsMessageHistory = _useState8[0],\n      setChannelsMessageHistory = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      shouldUpdate = _useState9[0],\n      setShouldUpdate = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      enableFields = _useState10[0],\n      setEnableFields = _useState10[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatContext.Provider, {\n    value: {\n      fullData: fullData,\n      setFullData: setFullData,\n      user: user,\n      setUser: setUser,\n      tempMessage: tempMessage,\n      setTempMessage: setTempMessage,\n      channelsMessageHistory: channelsMessageHistory,\n      setChannelsMessageHistory: setChannelsMessageHistory,\n      membersList: membersList,\n      setMembersList: setMembersList,\n      shouldUpdate: shouldUpdate,\n      setShouldUpdate: setShouldUpdate,\n      currentChatIndex: currentChatIndex,\n      setCurrentChatIndex: setCurrentChatIndex,\n      tempGroup: tempGroup,\n      setTempGroup: setTempGroup,\n      tempMember: tempMember,\n      setTempMember: setTempMember,\n      enableFields: enableFields,\n      setEnableFields: setEnableFields\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChatContextProvider, \"h1WMYhkJRaoH5gv7GXJVVqDLLjo=\");\n\n_c = ChatContextProvider;\nvar useChat = function useChat() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChatContext);\n};\n\n_s2(useChat, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYXRzQ29udGV4dC50c3g/MzY2MCJdLCJuYW1lcyI6WyJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGF0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImZ1bGxEYXRhIiwic2V0RnVsbERhdGEiLCJ1c2VyIiwic2V0VXNlciIsInRlbXBNZXNzYWdlIiwic2V0VGVtcE1lc3NhZ2UiLCJ0ZW1wR3JvdXAiLCJzZXRUZW1wR3JvdXAiLCJ0ZW1wTWVtYmVyIiwic2V0VGVtcE1lbWJlciIsIm1lbWJlcnNMaXN0Iiwic2V0TWVtYmVyc0xpc3QiLCJjdXJyZW50Q2hhdEluZGV4Iiwic2V0Q3VycmVudENoYXRJbmRleCIsImNoYW5uZWxzTWVzc2FnZUhpc3RvcnkiLCJzZXRDaGFubmVsc01lc3NhZ2VIaXN0b3J5Iiwic2hvdWxkVXBkYXRlIiwic2V0U2hvdWxkVXBkYXRlIiwiZW5hYmxlRmllbGRzIiwic2V0RW5hYmxlRmllbGRzIiwidXNlQ2hhdCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFQSxTQUFTQyxtQkFBVCxPQUEyQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDaEJDLCtDQUFRLENBQUMsRUFBRCxDQURRO0FBQUEsTUFDekNDLFFBRHlDO0FBQUEsTUFDL0JDLFdBRCtCOztBQUFBLG1CQUV4QkYsK0NBQVEsQ0FBQyxFQUFELENBRmdCO0FBQUEsTUFFekNHLElBRnlDO0FBQUEsTUFFbkNDLE9BRm1DOztBQUFBLG1CQUdWSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIRTtBQUFBLE1BR3pDSyxXQUh5QztBQUFBLE1BRzVCQyxjQUg0Qjs7QUFBQSxtQkFJZE4sK0NBQVEsQ0FBQyxFQUFELENBSk07QUFBQSxNQUl6Q08sU0FKeUM7QUFBQSxNQUk5QkMsWUFKOEI7O0FBQUEsbUJBS1pSLCtDQUFRLENBQUMsRUFBRCxDQUxJO0FBQUEsTUFLekNTLFVBTHlDO0FBQUEsTUFLN0JDLGFBTDZCOztBQUFBLG1CQU1WViwrQ0FBUSxDQUFDLEVBQUQsQ0FORTtBQUFBLE1BTXpDVyxXQU55QztBQUFBLE1BTTVCQyxjQU40Qjs7QUFBQSxtQkFPQVosK0NBQVEsRUFQUjtBQUFBLE1BT3pDYSxnQkFQeUM7QUFBQSxNQU92QkMsbUJBUHVCOztBQUFBLG1CQVFZZCwrQ0FBUSxDQUFDLEVBQUQsQ0FScEI7QUFBQSxNQVF6Q2Usc0JBUnlDO0FBQUEsTUFRakJDLHlCQVJpQjs7QUFBQSxtQkFTUmhCLCtDQUFRLENBQUMsQ0FBRCxDQVRBO0FBQUEsTUFTekNpQixZQVR5QztBQUFBLE1BUzNCQyxlQVQyQjs7QUFBQSxvQkFVUmxCLCtDQUFRLENBQUMsSUFBRCxDQVZBO0FBQUEsTUFVekNtQixZQVZ5QztBQUFBLE1BVTNCQyxlQVYyQjs7QUFZaEQsc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTG5CLGNBQVEsRUFBUkEsUUFESztBQUVMQyxpQkFBVyxFQUFYQSxXQUZLO0FBR0xDLFVBQUksRUFBSkEsSUFISztBQUlMQyxhQUFPLEVBQVBBLE9BSks7QUFLTEMsaUJBQVcsRUFBWEEsV0FMSztBQU1MQyxvQkFBYyxFQUFkQSxjQU5LO0FBT0xTLDRCQUFzQixFQUF0QkEsc0JBUEs7QUFRTEMsK0JBQXlCLEVBQXpCQSx5QkFSSztBQVNMTCxpQkFBVyxFQUFYQSxXQVRLO0FBVUxDLG9CQUFjLEVBQWRBLGNBVks7QUFXTEssa0JBQVksRUFBWkEsWUFYSztBQVlMQyxxQkFBZSxFQUFmQSxlQVpLO0FBYUxMLHNCQUFnQixFQUFoQkEsZ0JBYks7QUFjTEMseUJBQW1CLEVBQW5CQSxtQkFkSztBQWVMUCxlQUFTLEVBQVRBLFNBZks7QUFnQkxDLGtCQUFZLEVBQVpBLFlBaEJLO0FBaUJMQyxnQkFBVSxFQUFWQSxVQWpCSztBQWtCTEMsbUJBQWEsRUFBYkEsYUFsQks7QUFtQkxTLGtCQUFZLEVBQVpBLFlBbkJLO0FBb0JMQyxxQkFBZSxFQUFmQTtBQXBCSyxLQURUO0FBQUEsY0F3QkdyQjtBQXhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBeENlRCxtQjs7S0FBQUEsbUI7QUEwQ1QsSUFBTXVCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDM0IsU0FBT0MsaURBQVUsQ0FBQzFCLFdBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNeUIsTyIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9DaGF0c0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENoYXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbZnVsbERhdGEsIHNldEZ1bGxEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0ZW1wTWVzc2FnZSwgc2V0VGVtcE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0ZW1wR3JvdXAsIHNldFRlbXBHcm91cF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RlbXBNZW1iZXIsIHNldFRlbXBNZW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZW1iZXJzTGlzdCwgc2V0TWVtYmVyc0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudENoYXRJbmRleCwgc2V0Q3VycmVudENoYXRJbmRleF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2hhbm5lbHNNZXNzYWdlSGlzdG9yeSwgc2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG91bGRVcGRhdGUsIHNldFNob3VsZFVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2VuYWJsZUZpZWxkcywgc2V0RW5hYmxlRmllbGRzXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgc2V0RnVsbERhdGEsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHRlbXBNZXNzYWdlLFxuICAgICAgICBzZXRUZW1wTWVzc2FnZSxcbiAgICAgICAgY2hhbm5lbHNNZXNzYWdlSGlzdG9yeSxcbiAgICAgICAgc2V0Q2hhbm5lbHNNZXNzYWdlSGlzdG9yeSxcbiAgICAgICAgbWVtYmVyc0xpc3QsXG4gICAgICAgIHNldE1lbWJlcnNMaXN0LFxuICAgICAgICBzaG91bGRVcGRhdGUsXG4gICAgICAgIHNldFNob3VsZFVwZGF0ZSxcbiAgICAgICAgY3VycmVudENoYXRJbmRleCxcbiAgICAgICAgc2V0Q3VycmVudENoYXRJbmRleCxcbiAgICAgICAgdGVtcEdyb3VwLFxuICAgICAgICBzZXRUZW1wR3JvdXAsXG4gICAgICAgIHRlbXBNZW1iZXIsXG4gICAgICAgIHNldFRlbXBNZW1iZXIsXG4gICAgICAgIGVuYWJsZUZpZWxkcyxcbiAgICAgICAgc2V0RW5hYmxlRmllbGRzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGF0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNoYXQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChatsContext.tsx\n");

/***/ })

});