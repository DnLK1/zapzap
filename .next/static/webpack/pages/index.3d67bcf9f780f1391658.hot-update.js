/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ChatsContext */ \"./src/contexts/ChatsContext.tsx\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kaneks/\\xC1rea de Trabalho/zapzap/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useChat = (0,_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat)(),\n      user = _useChat.user,\n      setUser = _useChat.setUser;\n\n  function handleSetUsername(event) {\n    event.preventDefault();\n    setUser(event.target.addUsername.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().firstInstructions),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: function onSubmit(data) {\n        return handleSetUsername(data);\n      },\n      className: user === \"\" ? \"\" : (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().displayNone),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"addUsername\",\n        placeholder: \"Escolha um nome de Usu\\xE1rio\",\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Entrar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: user === \"\" ? (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().displayNone) : \"\",\n      children: [\"Oie!\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), \"Crie ou selecione uma nova sala para come\\xE7ar :)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"B96E95g5glB/q0yRBdY+8edpOh4=\", false, function () {\n  return [_contexts_ChatsContext__WEBPACK_IMPORTED_MODULE_1__.useChat];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDaGF0IiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVTZXRVc2VybmFtZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhZGRVc2VybmFtZSIsInZhbHVlIiwic3R5bGVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxpQkFDSEMsK0RBQU8sRUFESjtBQUFBLE1BQ3JCQyxJQURxQixZQUNyQkEsSUFEcUI7QUFBQSxNQUNmQyxPQURlLFlBQ2ZBLE9BRGU7O0FBRzdCLFdBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FILFdBQU8sQ0FBQ0UsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFdBQWIsQ0FBeUJDLEtBQTFCLENBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsbUZBQWhCO0FBQUEsNEJBQ0U7QUFDRSxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSxlQUFVUCxpQkFBaUIsQ0FBQ08sSUFBRCxDQUEzQjtBQUFBLE9BRFo7QUFFRSxlQUFTLEVBQUVULElBQUksS0FBSyxFQUFULEdBQWMsRUFBZCxHQUFtQlEsNkVBRmhDO0FBQUEsOEJBSUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUUsRUFBQyxhQUZMO0FBR0UsbUJBQVcsRUFBQywrQkFIZDtBQUlFLGdCQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBVUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFBSSxlQUFTLEVBQUVSLElBQUksS0FBSyxFQUFULEdBQWNRLDZFQUFkLEdBQW1DLEVBQWxEO0FBQUEsc0NBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTdCdUJWLEk7VUFDSUMsMkQ7OztLQURKRCxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNoYXQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhdHNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZUNoYXQoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZXRVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VXNlcihldmVudC50YXJnZXQuYWRkVXNlcm5hbWUudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0SW5zdHJ1Y3Rpb25zfT5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlU2V0VXNlcm5hbWUoZGF0YSl9XG4gICAgICAgIGNsYXNzTmFtZT17dXNlciA9PT0gXCJcIiA/IFwiXCIgOiBzdHlsZXMuZGlzcGxheU5vbmV9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cImFkZFVzZXJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVzY29saGEgdW0gbm9tZSBkZSBVc3XDoXJpb1wiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDQgY2xhc3NOYW1lPXt1c2VyID09PSBcIlwiID8gc3R5bGVzLmRpc3BsYXlOb25lIDogXCJcIn0+XG4gICAgICAgIE9pZSFcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIENyaWUgb3Ugc2VsZWNpb25lIHVtYSBub3ZhIHNhbGEgcGFyYSBjb21lw6dhciA6KVxuICAgICAgPC9oND5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});