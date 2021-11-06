"use strict";
(() => {
var exports = {};
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const ApiMicroService = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: process.env.URL_API,
    responseType: 'json'
});
ApiMicroService.defaults.headers.post['Content-Type'] = 'application/json';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiMicroService);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8564));
module.exports = __webpack_exports__;

})();