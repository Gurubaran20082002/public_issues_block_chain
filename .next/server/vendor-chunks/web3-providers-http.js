"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/web3-providers-http";
exports.ids = ["vendor-chunks/web3-providers-http"];
exports.modules = {

/***/ "(ssr)/./node_modules/web3-providers-http/lib/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/web3-providers-http/lib/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpProvider: () => (/* binding */ HttpProvider),\n/* harmony export */   \"default\": () => (/* binding */ HttpProvider)\n/* harmony export */ });\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ \"(ssr)/./node_modules/cross-fetch/dist/node-ponyfill.js\");\n/* harmony import */ var web3_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-types */ \"(ssr)/./node_modules/web3-types/lib/esm/index.js\");\n/* harmony import */ var web3_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3-errors */ \"(ssr)/./node_modules/web3-errors/lib/esm/index.js\");\n/*\nThis file is part of web3.js.\n\nweb3.js is free software: you can redistribute it and/or modify\nit under the terms of the GNU Lesser General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nweb3.js is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Lesser General Public License for more details.\n\nYou should have received a copy of the GNU Lesser General Public License\nalong with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass HttpProvider extends web3_types__WEBPACK_IMPORTED_MODULE_1__.Web3BaseProvider {\n    constructor(clientUrl, httpProviderOptions) {\n        super();\n        if (!HttpProvider.validateClientUrl(clientUrl))\n            throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.InvalidClientError(clientUrl);\n        this.clientUrl = clientUrl;\n        this.httpProviderOptions = httpProviderOptions;\n    }\n    static validateClientUrl(clientUrl) {\n        return typeof clientUrl === 'string' ? /^http(s)?:\\/\\//i.test(clientUrl) : false;\n    }\n    /* eslint-disable class-methods-use-this */\n    getStatus() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    supportsSubscriptions() {\n        return false;\n    }\n    request(payload, requestOptions) {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            const providerOptionsCombined = Object.assign(Object.assign({}, (_a = this.httpProviderOptions) === null || _a === void 0 ? void 0 : _a.providerOptions), requestOptions);\n            const response = yield cross_fetch__WEBPACK_IMPORTED_MODULE_0__(this.clientUrl, Object.assign(Object.assign({}, providerOptionsCombined), { method: 'POST', headers: Object.assign(Object.assign({}, providerOptionsCombined.headers), { 'Content-Type': 'application/json' }), body: JSON.stringify(payload) }));\n            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument\n            if (!response.ok)\n                throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.ResponseError(yield response.json());\n            return (yield response.json());\n        });\n    }\n    /* eslint-disable class-methods-use-this */\n    on() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    removeListener() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    once() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    removeAllListeners() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    connect() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    disconnect() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    reset() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n    /* eslint-disable class-methods-use-this */\n    reconnect() {\n        throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.MethodNotImplementedError();\n    }\n}\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2ViMy1wcm92aWRlcnMtaHR0cC9saWIvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNnQztBQUNlO0FBQzRDO0FBQzVFLDJCQUEyQix3REFBZ0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFLG1DQUFtQyx3Q0FBSywrQ0FBK0MsOEJBQThCLHVEQUF1RCxzQ0FBc0Msb0NBQW9DLGtDQUFrQztBQUN4UjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFhO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUF5QjtBQUMzQztBQUNBO0FBQ3dCO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGxhaW50Ly4vbm9kZV9tb2R1bGVzL3dlYjMtcHJvdmlkZXJzLWh0dHAvbGliL2VzbS9pbmRleC5qcz84NjY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG53ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbml0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxudGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbihhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbndlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbmJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG5NRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG5HTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG5hbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0IHsgV2ViM0Jhc2VQcm92aWRlciwgfSBmcm9tICd3ZWIzLXR5cGVzJztcbmltcG9ydCB7IEludmFsaWRDbGllbnRFcnJvciwgTWV0aG9kTm90SW1wbGVtZW50ZWRFcnJvciwgUmVzcG9uc2VFcnJvciB9IGZyb20gJ3dlYjMtZXJyb3JzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBQcm92aWRlciBleHRlbmRzIFdlYjNCYXNlUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudFVybCwgaHR0cFByb3ZpZGVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoIUh0dHBQcm92aWRlci52YWxpZGF0ZUNsaWVudFVybChjbGllbnRVcmwpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRDbGllbnRFcnJvcihjbGllbnRVcmwpO1xuICAgICAgICB0aGlzLmNsaWVudFVybCA9IGNsaWVudFVybDtcbiAgICAgICAgdGhpcy5odHRwUHJvdmlkZXJPcHRpb25zID0gaHR0cFByb3ZpZGVyT3B0aW9ucztcbiAgICB9XG4gICAgc3RhdGljIHZhbGlkYXRlQ2xpZW50VXJsKGNsaWVudFVybCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNsaWVudFVybCA9PT0gJ3N0cmluZycgPyAvXmh0dHAocyk/OlxcL1xcLy9pLnRlc3QoY2xpZW50VXJsKSA6IGZhbHNlO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4gICAgZ2V0U3RhdHVzKCkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0aG9kTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4gICAgc3VwcG9ydHNTdWJzY3JpcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJlcXVlc3QocGF5bG9hZCwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXJPcHRpb25zQ29tYmluZWQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChfYSA9IHRoaXMuaHR0cFByb3ZpZGVyT3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3ZpZGVyT3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godGhpcy5jbGllbnRVcmwsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvdmlkZXJPcHRpb25zQ29tYmluZWQpLCB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3ZpZGVyT3B0aW9uc0NvbWJpbmVkLmhlYWRlcnMpLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIH0pKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXNwb25zZUVycm9yKHlpZWxkIHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICAgICAgICByZXR1cm4gKHlpZWxkIHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4gICAgb24oKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRob2ROb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGhvZE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuICAgIG9uY2UoKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRob2ROb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRob2ROb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0aG9kTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGhvZE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0aG9kTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0aG9kTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH1cbn1cbmV4cG9ydCB7IEh0dHBQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/web3-providers-http/lib/esm/index.js\n");

/***/ })

};
;