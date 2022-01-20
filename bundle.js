/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/footer.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/footer.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  height: 5vh;\n  flex: 0 1 5vh;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  font-size: small;\n  padding-right: 15px;\n  background-color: rgb(0, 20, 80);\n  color: #ffff;\n  -webkit-box-shadow: 0px -3px 3px 0px #000000;\n  box-shadow: 0px -3px 3px 0px #000000;\n}\n", "",{"version":3,"sources":["webpack://./src/footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;EACZ,4CAA4C;EAC5C,oCAAoC;AACtC","sourcesContent":["footer {\n  height: 5vh;\n  flex: 0 1 5vh;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  font-size: small;\n  padding-right: 15px;\n  background-color: rgb(0, 20, 80);\n  color: #ffff;\n  -webkit-box-shadow: 0px -3px 3px 0px #000000;\n  box-shadow: 0px -3px 3px 0px #000000;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/form.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/form.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-container,\n.update-container {\n  display: none;\n}\n\n.form {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 300px;\n  height: 420px;\n  transform: translate(-50%, -50%);\n  background-color: rgb(245, 245, 245);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000,\n    5px 5px 5px 5px rgba(0, 0, 0, 0);\n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n}\n\n.form label,\n.form input,\n.form textarea,\n.form select {\n  font-family: inherit;\n  margin: 0 15px;\n}\n\n.form textarea {\n  resize: none;\n}\n\n.form div:first-child {\n  height: 40px;\n  background-color: #001450;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  border-radius: 5px 5px 0 0;\n  -webkit-box-shadow: 0px 3px 3px 0px #000000;\n  box-shadow: 0px 3px 3px 0px #000000;\n  margin-bottom: 10px;\n}\n\n.form input[type=\"text\"],\n.form input[type=\"date\"],\n.form select {\n  height: 30px;\n}\n\n.form button {\n  width: 100%;\n  height: 40px;\n  background-color: rgb(0, 20, 80);\n  color: white;\n  border-radius: 0 0 5px 5px;\n  -webkit-box-shadow: 0px -3px 3px 0px #000000;\n  box-shadow: 0px -3px 3px 0px #000000;\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/form.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B;oCACkC;EAClC,wEAAwE;AAC1E;;AAEA;;;;EAIE,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,2CAA2C;EAC3C,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,YAAY;EACZ,0BAA0B;EAC1B,4CAA4C;EAC5C,oCAAoC;EACpC,gBAAgB;AAClB","sourcesContent":[".form-container,\n.update-container {\n  display: none;\n}\n\n.form {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 300px;\n  height: 420px;\n  transform: translate(-50%, -50%);\n  background-color: rgb(245, 245, 245);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000,\n    5px 5px 5px 5px rgba(0, 0, 0, 0);\n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n}\n\n.form label,\n.form input,\n.form textarea,\n.form select {\n  font-family: inherit;\n  margin: 0 15px;\n}\n\n.form textarea {\n  resize: none;\n}\n\n.form div:first-child {\n  height: 40px;\n  background-color: #001450;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  border-radius: 5px 5px 0 0;\n  -webkit-box-shadow: 0px 3px 3px 0px #000000;\n  box-shadow: 0px 3px 3px 0px #000000;\n  margin-bottom: 10px;\n}\n\n.form input[type=\"text\"],\n.form input[type=\"date\"],\n.form select {\n  height: 30px;\n}\n\n.form button {\n  width: 100%;\n  height: 40px;\n  background-color: rgb(0, 20, 80);\n  color: white;\n  border-radius: 0 0 5px 5px;\n  -webkit-box-shadow: 0px -3px 3px 0px #000000;\n  box-shadow: 0px -3px 3px 0px #000000;\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navbar.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  background-color: #001450;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 40px;\n  flex: 0 1 5vh;\n  height: 5vh;\n  -webkit-box-shadow: 0px 3px 3px 0px #000000;\n  box-shadow: 0px 3px 3px 0px #000000;\n}\n\nnav div {\n  display: inherit;\n  gap: 15px;\n  align-items: center;\n}\n\nnav div div {\n  cursor: pointer;\n  display: inherit;\n  justify-content: center;\n}\n\nnav .search {\n  height: 24px;\n  outline: none;\n\n  border: 1px solid #f5f5f5;\n  font-size: 13px;\n  color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/navbar.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,WAAW;EACX,2CAA2C;EAC3C,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,yBAAyB;EACzB,eAAe;EACf,WAAW;AACb","sourcesContent":["nav {\n  background-color: #001450;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 40px;\n  flex: 0 1 5vh;\n  height: 5vh;\n  -webkit-box-shadow: 0px 3px 3px 0px #000000;\n  box-shadow: 0px 3px 3px 0px #000000;\n}\n\nnav div {\n  display: inherit;\n  gap: 15px;\n  align-items: center;\n}\n\nnav div div {\n  cursor: pointer;\n  display: inherit;\n  justify-content: center;\n}\n\nnav .search {\n  height: 24px;\n  outline: none;\n\n  border: 1px solid #f5f5f5;\n  font-size: 13px;\n  color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/side-menu.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/side-menu.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  position: relative;\n  z-index: -3;\n  display: flex;\n  min-height: 90vh;\n}\n\n.side-menu {\n  display: none;\n  background-color: #fafafa;\n  min-width: 300px;\n  flex: 0 1 300px;\n  z-index: 1;\n  -webkit-box-shadow: 1px 0px 5px -1px #000000;\n  box-shadow: 1px 0px 5px -1px #000000;\n}\n\n.side-menu div:first-child {\n  margin-top: 20px;\n}\n\n.side-menu div,\n.side-menu section {\n  color: rgb(30, 30, 30);\n  padding: 8px 10px;\n  padding-right: 0;\n  margin-left: 10px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n\n.lists {\n  display: none;\n  border-radius: 8px 0 0 8px;\n  -webkit-box-shadow: 0px 1px 2px 1px #222222;\n  box-shadow: 0px 1px 2px 1px #222222;\n  background: #c8c8c8;\n  background: -moz-linear-gradient(left, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n  background: -webkit-linear-gradient(\n    left,\n    #c8c8c8 0%,\n    #c8c8c8 92%,\n    000000 100%\n  );\n  background: linear-gradient(to right, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n}\n\n.side-menu div:hover,\n.side-menu div:focus,\n#current-page {\n  outline: none;\n  border-radius: 8px 0 0 8px;\n  -webkit-box-shadow: 0px 1px 2px 1px #222222;\n  box-shadow: 0px 1px 2px 1px #222222;\n  background: #c8c8c8;\n  background: -moz-linear-gradient(left, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n  background: -webkit-linear-gradient(\n    left,\n    #c8c8c8 0%,\n    #c8c8c8 92%,\n    000000 100%\n  );\n  background: linear-gradient(to right, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n}\n\n.side-menu section:last-child {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.side-menu input {\n  width: 100%;\n  border: 1px solid black;\n  height: 22px;\n}\n\n.side-menu button {\n  width: 120px;\n  height: 40px;\n  background-color: rgb(0, 20, 80);\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/side-menu.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,UAAU;EACV,4CAA4C;EAC5C,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,2CAA2C;EAC3C,mCAAmC;EACnC,mBAAmB;EACnB,6EAA6E;EAC7E;;;;;GAKC;EACD,4EAA4E;AAC9E;;AAEA;;;EAGE,aAAa;EACb,0BAA0B;EAC1B,2CAA2C;EAC3C,mCAAmC;EACnC,mBAAmB;EACnB,6EAA6E;EAC7E;;;;;GAKC;EACD,4EAA4E;AAC9E;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gCAAgC;EAChC,YAAY;AACd","sourcesContent":[".container {\n  position: relative;\n  z-index: -3;\n  display: flex;\n  min-height: 90vh;\n}\n\n.side-menu {\n  display: none;\n  background-color: #fafafa;\n  min-width: 300px;\n  flex: 0 1 300px;\n  z-index: 1;\n  -webkit-box-shadow: 1px 0px 5px -1px #000000;\n  box-shadow: 1px 0px 5px -1px #000000;\n}\n\n.side-menu div:first-child {\n  margin-top: 20px;\n}\n\n.side-menu div,\n.side-menu section {\n  color: rgb(30, 30, 30);\n  padding: 8px 10px;\n  padding-right: 0;\n  margin-left: 10px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n\n.lists {\n  display: none;\n  border-radius: 8px 0 0 8px;\n  -webkit-box-shadow: 0px 1px 2px 1px #222222;\n  box-shadow: 0px 1px 2px 1px #222222;\n  background: #c8c8c8;\n  background: -moz-linear-gradient(left, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n  background: -webkit-linear-gradient(\n    left,\n    #c8c8c8 0%,\n    #c8c8c8 92%,\n    000000 100%\n  );\n  background: linear-gradient(to right, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n}\n\n.side-menu div:hover,\n.side-menu div:focus,\n#current-page {\n  outline: none;\n  border-radius: 8px 0 0 8px;\n  -webkit-box-shadow: 0px 1px 2px 1px #222222;\n  box-shadow: 0px 1px 2px 1px #222222;\n  background: #c8c8c8;\n  background: -moz-linear-gradient(left, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n  background: -webkit-linear-gradient(\n    left,\n    #c8c8c8 0%,\n    #c8c8c8 92%,\n    000000 100%\n  );\n  background: linear-gradient(to right, #c8c8c8 0%, #c8c8c8 95%, #000000 100%);\n}\n\n.side-menu section:last-child {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.side-menu input {\n  width: 100%;\n  border: 1px solid black;\n  height: 22px;\n}\n\n.side-menu button {\n  width: 120px;\n  height: 40px;\n  background-color: rgb(0, 20, 80);\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n}\n\nbody {\n  margin: 0 auto;\n  position: relative;\n  z-index: -3;\n}\n\nmain {\n  position: relative;\n  flex: 1 1 auto;\n  background-color: white;\n  z-index: -3;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\ninput,\ntextarea,\nselect {\n  border: none;\n  outline: none;\n  margin: none;\n}\n\nmain > .content {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px;\n  justify-content: center;\n}\n\n.title {\n  margin: 10px 20px;\n  font-size: 1.8em;\n}\n\n.hideBtn {\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.task:hover > td > .hideBtn,\n.hideBtn:hover {\n  visibility: visible;\n}\n\n.completeTask {\n  text-decoration: line-through;\n}\n\n.shield {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(200, 200, 200);\n  opacity: 0.2;\n  z-index: -1;\n  display: none;\n}\n\n.toggle {\n  display: block !important;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB;sDACoD;EACpD,2BAA2B,EAAE,eAAe;EAC5C,yBAAyB,EAAE,WAAW;EACtC,wBAAwB,EAAE,mBAAmB;EAC7C,sBAAsB,EAAE,4BAA4B;EACpD,qBAAqB,EAAE,2BAA2B;EAClD,iBAAiB,EAAE,iFAAiF;AACtG;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;;;EAGE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["html {\n  box-sizing: border-box;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n}\n\nbody {\n  margin: 0 auto;\n  position: relative;\n  z-index: -3;\n}\n\nmain {\n  position: relative;\n  flex: 1 1 auto;\n  background-color: white;\n  z-index: -3;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\ninput,\ntextarea,\nselect {\n  border: none;\n  outline: none;\n  margin: none;\n}\n\nmain > .content {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px;\n  justify-content: center;\n}\n\n.title {\n  margin: 10px 20px;\n  font-size: 1.8em;\n}\n\n.hideBtn {\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.task:hover > td > .hideBtn,\n.hideBtn:hover {\n  visibility: visible;\n}\n\n.completeTask {\n  text-decoration: line-through;\n}\n\n.shield {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(200, 200, 200);\n  opacity: 0.2;\n  z-index: -1;\n  display: none;\n}\n\n.toggle {\n  display: block !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo {\n  width: 100%;\n  height: fit-content;\n  background-color: antiquewhite;\n  border-radius: 10px;\n  margin: 10px 10px;\n  padding: 10px 15px;\n  color: rgb(100, 100, 100);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: space-between;\n  -webkit-box-shadow: 0px 5px 7px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n  box-shadow: 0px 5px 7px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n}\n\n.todo > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo checkbox {\n  margin-left: 10px;\n}\n\n.todo a {\n  cursor: pointer;\n  padding: 6px;\n  margin: 5px 5px;\n}\n\n.todo a:last-child {\n  color: rgb(223, 0, 0);\n}\n\n.todo a:hover {\n  background-color: gold;\n  border-radius: 50%;\n}\n\n.todo .note {\n  border: 1px solid black;\n  padding: 10px 15px;\n  margin: 10px 10px 10px 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.todo .note div:first-child {\n  padding-bottom: 5px;\n  border-bottom: 1px solid black;\n}\n.todo .note div:last-child {\n  margin-left: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,8BAA8B;EAC9B,8EAA8E;EAC9E,sEAAsE;AACxE;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;AACnB","sourcesContent":[".todo {\n  width: 100%;\n  height: fit-content;\n  background-color: antiquewhite;\n  border-radius: 10px;\n  margin: 10px 10px;\n  padding: 10px 15px;\n  color: rgb(100, 100, 100);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: space-between;\n  -webkit-box-shadow: 0px 5px 7px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n  box-shadow: 0px 5px 7px -7px #000000, 5px 5px 5px 5px rgba(0, 0, 0, 0);\n}\n\n.todo > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo checkbox {\n  margin-left: 10px;\n}\n\n.todo a {\n  cursor: pointer;\n  padding: 6px;\n  margin: 5px 5px;\n}\n\n.todo a:last-child {\n  color: rgb(223, 0, 0);\n}\n\n.todo a:hover {\n  background-color: gold;\n  border-radius: 50%;\n}\n\n.todo .note {\n  border: 1px solid black;\n  padding: 10px 15px;\n  margin: 10px 10px 10px 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.todo .note div:first-child {\n  padding-bottom: 5px;\n  border-bottom: 1px solid black;\n}\n.todo .note div:last-child {\n  margin-left: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/footer.css":
/*!************************!*\
  !*** ./src/footer.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/form.css":
/*!**********************!*\
  !*** ./src/form.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/navbar.css":
/*!************************!*\
  !*** ./src/navbar.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/side-menu.css":
/*!***************************!*\
  !*** ./src/side-menu.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_side_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./side-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/side-menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_side_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_side_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_side_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_side_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo.css":
/*!**********************!*\
  !*** ./src/todo.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dom = (() => {
  const formBtn = document.querySelector(".toggle-form");
  const formContainer = document.querySelector(".form-container");
  const updateContainer = document.querySelector(".update-container");
  const sideMenuBtn = document.querySelector("#menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const shield = document.querySelector(".shield");
  const listsBtn = document.querySelector(".lists-btn");
  const lists = document.querySelector(".lists");
  const menus = document.querySelectorAll(".side-menu div");
  const title = document.querySelector(".title");
  const createListBtn = document.querySelector(".create-list");
  const listName = document.querySelector("#list-name");
  const content = document.querySelector(".content");
  const listSelect = document.querySelector("#list");
  const listNSelect = document.querySelector("#listN");
  const options = document.querySelectorAll("#list > option");
  const form = document.querySelector("#form");
  const update = document.querySelector("#update");
  const todayBtn = document.querySelector("#today");
  const homeBtn = document.querySelector("#home");

  const toggle = (ele) => {
    ele.classList.toggle("toggle");
  };

  const clickShield = () => {
    formContainer.classList.remove("toggle");
    updateContainer.classList.remove("toggle");
    shield.classList.remove("toggle");
    sideMenu.classList.remove("toggle");
  };

  const addStyle = (node, nodeList) => {
    for (let node of nodeList) {
      node.removeAttribute("id", "current-page");
    }
    node.setAttribute("id", "current-page");
  };

  return {
    formBtn,
    formContainer,
    updateContainer,
    sideMenuBtn,
    sideMenu,
    shield,
    listsBtn,
    lists,
    menus,
    title,
    createListBtn,
    listName,
    content,
    listSelect,
    listNSelect,
    form,
    options,
    update,
    todayBtn,
    homeBtn,
    toggle,
    clickShield,
    addStyle,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





const event = (() => {
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].formBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].formContainer);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].shield.classList.add("toggle");
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].sideMenuBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].sideMenu);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].shield.classList.add("toggle");
  });
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].shield.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_0__["default"].clickShield);
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listsBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists);
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].menus.forEach((n) => {
    if (n.id !== "today") {
      n.addEventListener("click", (e) => {
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].addStyle(n, _dom__WEBPACK_IMPORTED_MODULE_0__["default"].menus);
        if (n.textContent !== "Lists") {
          _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${n.textContent}`;
          _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(n.textContent);
        }
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].options.forEach((option) => {
          if (option.textContent === n.textContent) {
            console.log(option);
            option.setAttribute("selected", true);
          }
        });
      });
    }
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].createListBtn.addEventListener("click", () => {
    _lists__WEBPACK_IMPORTED_MODULE_2__["default"].createList(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].listName.value);
    _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderLists();
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists.classList.add("toggle");
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listName.value = "";
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {};
    for (let ele of form) {
      formData[ele.name] = ele.value;
    }
    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(
      formData.name,
      formData.note,
      formData.due,
      formData.priority,
      formData.list
    );
    form.reset();
    console.log(todo.list);
    _lists__WEBPACK_IMPORTED_MODULE_2__["default"].addToList(todo, todo.list);
    _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(todo.list);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].formContainer);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].shield.classList.remove("toggle");
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${todo.list}`;
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {};
    for (let ele of update) {
      formData[ele.name] = ele.value;
    }
    // console.log(formData);
    // Lists.getList(formData.list);
    // console.log(Lists.getList(formData.list));
    // console.log(dom.update.dataset["list"]);
    // console.log(dom.update.dataset["id"]);
    const list = _lists__WEBPACK_IMPORTED_MODULE_2__["default"].getList(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.list);
    // console.log(list);
    const todo = list.find((todo) => {
      return todo.id === parseInt(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.id);
    });
    todo.editTodo(
      formData.name,
      formData.note,
      formData.due,
      formData.priority,
      formData.list
    );
    // console.log(todo);
    if (_dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.list !== formData.list) {
      console.log(list);
      _lists__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTodo(todo.id, _dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.list);
      _lists__WEBPACK_IMPORTED_MODULE_2__["default"].addToList(todo, todo.list);
    }

    _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent(todo.list);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${todo.list}`;
    // console.log(list);

    update.reset();
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].updateContainer);
  });

  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].todayBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].addStyle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].todayBtn, _dom__WEBPACK_IMPORTED_MODULE_0__["default"].menus);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${_dom__WEBPACK_IMPORTED_MODULE_0__["default"].todayBtn.textContent}`;
    _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent("Today");
  });
  _dom__WEBPACK_IMPORTED_MODULE_0__["default"].homeBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].addStyle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].todayBtn, _dom__WEBPACK_IMPORTED_MODULE_0__["default"].menus);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${_dom__WEBPACK_IMPORTED_MODULE_0__["default"].todayBtn.textContent}`;
    _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderContent("Today");
  });
})();


/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const Lists = (() => {
  const lists = Object.create(null);

  const createList = (name) => {
    lists[name] = [];
    return lists;
  };

  const addToList = (todo, list) => {
    lists.Inbox.push(todo);
    if (list !== "Inbox") lists[list].push(todo);
  };

  const deleteTodo = (id, list) => {
    lists.Inbox = lists.Inbox.filter((todo) => todo.id !== id);
    lists[list] = lists[list].filter((todo) => todo.id !== id);
  };

  const filterByToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    lists.Today = lists.Inbox.filter((todo) => {
      return todo.due === today;
    });
  };

  const getLists = () => lists;

  const getList = (name) => lists[name];

  return {
    createList,
    addToList,
    deleteTodo,
    filterByToday,
    getLists,
    getList,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lists);

// let AllList = {
//   inbox: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
//   work: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
//   personal: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
// };

Lists.createList("Inbox");
Lists.createList("Work");
Lists.createList("Personal");
Lists.createList("Today");

// let todo1 = createTodo("say prayer", "a lot", "2022-01-24", 3, "work");
// let todo2 = createTodo("say prayer2", "a lot", "2022-01-24", 3, "work");
// Lists.addToList(todo1, todo1.list);
// Lists.addToList(todo2, todo2.list);

// Lists.addToList(
//   { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   "inbox"
// );

// Lists.addToList(
//   { name: "hello laundry", note: "all clothings", due: "2022-01-22" },
//   "work"
// );

// console.log(Lists.getLists());
// for (let list in Lists.getLists()) {
//   console.log(list);
// }

// console.log(Lists.getList("inbox"));
// console.log(Lists.getList("work"));

// console.log(Lists.getList("work")[0].editTodo("note", "every night"));
// console.log(Lists.getList("work")[0]);


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists */ "./src/lists.js");



const render = (() => {
  const renderLists = () => {
    while (_dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists.firstChild) {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists.removeChild(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists.firstChild);
    }
    while (_dom__WEBPACK_IMPORTED_MODULE_0__["default"].listSelect.firstChild) {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listSelect.removeChild(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].listSelect.firstChild);
    }
    while (_dom__WEBPACK_IMPORTED_MODULE_0__["default"].listNSelect.firstChild) {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listNSelect.removeChild(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].listNSelect.firstChild);
    }
    for (let list in _lists__WEBPACK_IMPORTED_MODULE_1__["default"].getLists()) {
      if (list !== "Inbox" && list !== "Today") {
        const div = document.createElement("div");
        div.setAttribute("role", "button");
        div.setAttribute("tabindex", "0");
        div.addEventListener("click", (e) => {
          _dom__WEBPACK_IMPORTED_MODULE_0__["default"].title.textContent = `${list}`;
          renderContent(list);
        });
        div.textContent = `${list}`;
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].lists.appendChild(div);
      }
      if (list !== "Today") {
        const option = document.createElement("option");
        option.value = `${list}`;
        console.log(option.value);
        option.textContent = `${list}`;
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listSelect.appendChild(option.cloneNode(true));
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].listNSelect.appendChild(option.cloneNode(true));
      }
    }
  };
  const renderContent = (list) => {
    while (_dom__WEBPACK_IMPORTED_MODULE_0__["default"].content.firstChild) {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].content.removeChild(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].content.firstChild);
    }
    for (let todo of _lists__WEBPACK_IMPORTED_MODULE_1__["default"].getList(list)) {
      const div = document.createElement("div");
      div.classList.add("todo");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div3");
      div2.appendChild(div3);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "todo");
      checkbox.addEventListener("click", () => {
        todo.completed = !todo.completed;
        if (todo.completed) {
          name.style.setProperty("text-decoration", "line-through");
        } else {
          name.style.removeProperty("text-decoration", "line-through");
        }
      });
      const name = document.createElement("label");
      name.textContent = `${todo.name}`;
      if (todo.completed) {
        checkbox.setAttribute("checked", true);
        name.style.setProperty("text-decoration", "line-through");
      }
      div3.appendChild(checkbox);
      div3.appendChild(name);
      const priorityDiv = document.createElement("span");
      const starColors = [, "grey", "orange", "green", "red"];
      priorityDiv.style.setProperty("color", starColors[todo.priority]);
      priorityDiv.style.setProperty("margin-right", "20px");
      let stars = "";
      for (let i = 1; i <= todo.priority; i++) {
        let star = '<i class="fas fa-star fa-sm"></i>';
        stars = stars + star;
      }
      priorityDiv.innerHTML = stars;

      const div4 = document.createElement("div");
      div4.appendChild(priorityDiv);

      const edit = document.createElement("a");
      edit.textContent = "Edit";
      edit.innerHTML = '<i class="fas fa-edit"></i>';
      edit.addEventListener("click", (e) => {
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(_dom__WEBPACK_IMPORTED_MODULE_0__["default"].updateContainer);
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].shield.classList.add("toggle");
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.id = todo.id;
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.dataset.list = `${todo.list}`;
        for (let ele of _dom__WEBPACK_IMPORTED_MODULE_0__["default"].update.childNodes) {
          if (ele.id === "nameN") {
            ele.value = todo.name;
          } else if (ele.id === "noteN") {
            ele.value = todo.note;
          } else if (ele.id === "dueN") {
            ele.value = todo.due;
          } else if (ele.id === "priorityN") {
            ele.childNodes.forEach((option) => {
              if (option.value === todo.priority) {
                option.setAttribute("selected", true);
              }
            });
          } else if (ele.id === "listN") {
            ele.childNodes.forEach((option) => {
              if (option.value === todo.list) {
                option.setAttribute("selected", true);
              }
            });
          }
        }
      });
      const del = document.createElement("a");
      del.innerHTML = '<i class="fas fa-trash-alt"></i>';
      del.addEventListener("click", () => {
        console.log(todo.id);
        _lists__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(todo.id, todo.list);
        renderContent(todo.list);
      });
      div4.appendChild(edit);
      div4.appendChild(del);
      div2.appendChild(div4);
      div.appendChild(div2);
      if (todo.note) {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        const noteTitle = document.createElement("div");
        noteTitle.textContent = "Note:";
        noteDiv.appendChild(noteTitle);
        const noteDetail = document.createElement("div");
        noteDetail.textContent = `${todo.note}`;
        noteDiv.appendChild(noteDetail);
        div.appendChild(noteDiv);
      }
      const div5 = document.createElement("div");
      div.appendChild(div5);
      const div6 = document.createElement("div");
      const calender = document.createElement("a");
      calender.innerHTML = '<i class="fas fa-calendar-day"></i>';
      div6.appendChild(calender);
      const due = document.createElement("span");
      due.textContent = `${todo.due}`;
      div6.appendChild(due);
      div5.appendChild(div6);
      const div7 = document.createElement("div");

      const listIcon = document.createElement("a");
      listIcon.innerHTML = '<i class="fas fa-clipboard-list"></i>';
      div7.appendChild(listIcon);
      const list = document.createElement("span");
      list.textContent = `${todo.list}`;
      div7.appendChild(list);
      div5.appendChild(div7);
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].content.appendChild(div);
    }
  };
  return {
    renderLists,
    renderContent,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (name, note, due, priority, list) => {
  let id = Math.floor(Math.random() * 1000);
  let completed = false;
  function editTodo(name, note, due, priority, list) {
    this.name = name;
    this.note = note;
    this.due = due;
    this.priority = priority;
    this.list = list;
  }
  return {
    name,
    note,
    due,
    priority,
    list,
    id,
    completed,
    editTodo,
  };
};

const createTodo = (name, note, due, priority, list) => {
  const todo = Todo(name, note, due, priority, list);
  return todo;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists.js */ "./src/lists.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.css */ "./src/navbar.css");
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _side_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-menu.css */ "./src/side-menu.css");
/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.css */ "./src/todo.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer.css */ "./src/footer.css");











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUMzQjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNKO0FBQ0k7O0FBRVY7QUFDQztBQUNGO0FBQ0s7QUFDTDtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXZiYXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlLW1lbnUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5jc3M/ODFkNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS5jc3M/YzJmNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2YmFyLmNzcz85MjMzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlLW1lbnUuY3NzPzNmNGIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmNzcz8zZjgzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvb3RlciB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGZsZXg6IDAgMSA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAsIDgwKTtcXG4gIGNvbG9yOiAjZmZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC0zcHggM3B4IDBweCAjMDAwMDAwO1xcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggM3B4IDBweCAjMDAwMDAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgZmxleDogMCAxIDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMCwgODApO1xcbiAgY29sb3I6ICNmZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTNweCAzcHggMHB4ICMwMDAwMDA7XFxuICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggMHB4ICMwMDAwMDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWNvbnRhaW5lcixcXG4udXBkYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMCxcXG4gICAgNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMCwgNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5mb3JtIGxhYmVsLFxcbi5mb3JtIGlucHV0LFxcbi5mb3JtIHRleHRhcmVhLFxcbi5mb3JtIHNlbGVjdCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICMwMDAwMDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzAwMDAwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuLmZvcm0gc2VsZWN0IHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIwLCA4MCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC0zcHggM3B4IDBweCAjMDAwMDAwO1xcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggM3B4IDBweCAjMDAwMDAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QjtvQ0FDa0M7RUFDbEMsd0VBQXdFO0FBQzFFOztBQUVBOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNENBQTRDO0VBQzVDLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm0tY29udGFpbmVyLFxcbi51cGRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLFxcbiAgICA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmZvcm0gbGFiZWwsXFxuLmZvcm0gaW5wdXQsXFxuLmZvcm0gdGV4dGFyZWEsXFxuLmZvcm0gc2VsZWN0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE0NTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzAwMDAwMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjMDAwMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4uZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAsIDgwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTNweCAzcHggMHB4ICMwMDAwMDA7XFxuICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggMHB4ICMwMDAwMDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJuYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQ1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA0MHB4O1xcbiAgZmxleDogMCAxIDV2aDtcXG4gIGhlaWdodDogNXZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggIzAwMDAwMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjMDAwMDAwO1xcbn1cXG5cXG5uYXYgZGl2IHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICBnYXA6IDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgZGl2IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm5hdiAuc2VhcmNoIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9uYXZiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDQwcHg7XFxuICBmbGV4OiAwIDEgNXZoO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjMDAwMDAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4ICMwMDAwMDA7XFxufVxcblxcbm5hdiBkaXYge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiBkaXYgZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubmF2IC5zZWFyY2gge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGZsZXg6IDAgMSAzMDBweDtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAwcHggNXB4IC0xcHggIzAwMDAwMDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggNXB4IC0xcHggIzAwMDAwMDtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXYsXFxuLnNpZGUtbWVudSBzZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCAjMjIyMjIyO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICMyMjIyMjI7XFxuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M4YzhjOCAwJSwgI2M4YzhjOCA5NSUsICMwMDAwMDAgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgbGVmdCxcXG4gICAgI2M4YzhjOCAwJSxcXG4gICAgI2M4YzhjOCA5MiUsXFxuICAgIDAwMDAwMCAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzhjOGM4IDAlLCAjYzhjOGM4IDk1JSwgIzAwMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXY6aG92ZXIsXFxuLnNpZGUtbWVudSBkaXY6Zm9jdXMsXFxuI2N1cnJlbnQtcGFnZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCAjMjIyMjIyO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICMyMjIyMjI7XFxuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M4YzhjOCAwJSwgI2M4YzhjOCA5NSUsICMwMDAwMDAgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgbGVmdCxcXG4gICAgI2M4YzhjOCAwJSxcXG4gICAgI2M4YzhjOCA5MiUsXFxuICAgIDAwMDAwMCAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzhjOGM4IDAlLCAjYzhjOGM4IDk1JSwgIzAwMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNpZGUtbWVudSBzZWN0aW9uOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi5zaWRlLW1lbnUgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMCwgODApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2lkZS1tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RTs7Ozs7R0FLQztFQUNELDRFQUE0RTtBQUM5RTs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiw2RUFBNkU7RUFDN0U7Ozs7O0dBS0M7RUFDRCw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGZsZXg6IDAgMSAzMDBweDtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAwcHggNXB4IC0xcHggIzAwMDAwMDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggNXB4IC0xcHggIzAwMDAwMDtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXYsXFxuLnNpZGUtbWVudSBzZWN0aW9uIHtcXG4gIGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCAjMjIyMjIyO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICMyMjIyMjI7XFxuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M4YzhjOCAwJSwgI2M4YzhjOCA5NSUsICMwMDAwMDAgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgbGVmdCxcXG4gICAgI2M4YzhjOCAwJSxcXG4gICAgI2M4YzhjOCA5MiUsXFxuICAgIDAwMDAwMCAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzhjOGM4IDAlLCAjYzhjOGM4IDk1JSwgIzAwMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNpZGUtbWVudSBkaXY6aG92ZXIsXFxuLnNpZGUtbWVudSBkaXY6Zm9jdXMsXFxuI2N1cnJlbnQtcGFnZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCAjMjIyMjIyO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICMyMjIyMjI7XFxuICBiYWNrZ3JvdW5kOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M4YzhjOCAwJSwgI2M4YzhjOCA5NSUsICMwMDAwMDAgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgbGVmdCxcXG4gICAgI2M4YzhjOCAwJSxcXG4gICAgI2M4YzhjOCA5MiUsXFxuICAgIDAwMDAwMCAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzhjOGM4IDAlLCAjYzhjOGM4IDk1JSwgIzAwMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNpZGUtbWVudSBzZWN0aW9uOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi5zaWRlLW1lbnUgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMCwgODApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMztcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogLTM7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbjogbm9uZTtcXG59XFxuXFxubWFpbiA+IC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uaGlkZUJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50YXNrOmhvdmVyID4gdGQgPiAuaGlkZUJ0bixcXG4uaGlkZUJ0bjpob3ZlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY29tcGxldGVUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uc2hpZWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwKTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCO3NEQUNvRDtFQUNwRCwyQkFBMkIsRUFBRSxlQUFlO0VBQzVDLHlCQUF5QixFQUFFLFdBQVc7RUFDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0VBQzdDLHNCQUFzQixFQUFFLDRCQUE0QjtFQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7RUFDbEQsaUJBQWlCLEVBQUUsaUZBQWlGO0FBQ3RHOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC0zO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAtMztcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luOiBub25lO1xcbn1cXG5cXG5tYWluID4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5oaWRlQnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2s6aG92ZXIgPiB0ZCA+IC5oaWRlQnRuLFxcbi5oaWRlQnRuOmhvdmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jb21wbGV0ZVRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5zaGllbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDApO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgei1pbmRleDogLTE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggN3B4IC03cHggIzAwMDAwMCwgNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIGNoZWNrYm94IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udG9kbyBhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogNXB4IDVweDtcXG59XFxuXFxuLnRvZG8gYTpsYXN0LWNoaWxkIHtcXG4gIGNvbG9yOiByZ2IoMjIzLCAwLCAwKTtcXG59XFxuXFxuLnRvZG8gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udG9kbyAubm90ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50b2RvIC5ub3RlIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4udG9kbyAubm90ZSBkaXY6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDhCQUE4QjtFQUM5Qiw4RUFBOEU7RUFDOUUsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9kbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggN3B4IC03cHggIzAwMDAwMCwgNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDdweCAtN3B4ICMwMDAwMDAsIDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4udG9kbyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyBjaGVja2JveCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZG8gYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW46IDVweCA1cHg7XFxufVxcblxcbi50b2RvIGE6bGFzdC1jaGlsZCB7XFxuICBjb2xvcjogcmdiKDIyMywgMCwgMCk7XFxufVxcblxcbi50b2RvIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRvZG8gLm5vdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG4udG9kbyAubm90ZSBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnRvZG8gLm5vdGUgZGl2Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlLW1lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlLW1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkb20gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtZm9ybVwiKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG4gIGNvbnN0IHVwZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgc2lkZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtaWNvblwiKTtcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbWVudVwiKTtcbiAgY29uc3Qgc2hpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGllbGRcIik7XG4gIGNvbnN0IGxpc3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cy1idG5cIik7XG4gIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0c1wiKTtcbiAgY29uc3QgbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGUtbWVudSBkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWxpc3RcIik7XG4gIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LW5hbWVcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG4gIGNvbnN0IGxpc3ROU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0TlwiKTtcbiAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbGlzdCA+IG9wdGlvblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcbiAgY29uc3QgdXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGRhdGVcIik7XG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcblxuICBjb25zdCB0b2dnbGUgPSAoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIik7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tTaGllbGQgPSAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlXCIpO1xuICAgIHVwZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlXCIpO1xuICAgIHNoaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlXCIpO1xuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVcIik7XG4gIH07XG5cbiAgY29uc3QgYWRkU3R5bGUgPSAobm9kZSwgbm9kZUxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVMaXN0KSB7XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC1wYWdlXCIpO1xuICAgIH1cbiAgICBub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC1wYWdlXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUJ0bixcbiAgICBmb3JtQ29udGFpbmVyLFxuICAgIHVwZGF0ZUNvbnRhaW5lcixcbiAgICBzaWRlTWVudUJ0bixcbiAgICBzaWRlTWVudSxcbiAgICBzaGllbGQsXG4gICAgbGlzdHNCdG4sXG4gICAgbGlzdHMsXG4gICAgbWVudXMsXG4gICAgdGl0bGUsXG4gICAgY3JlYXRlTGlzdEJ0bixcbiAgICBsaXN0TmFtZSxcbiAgICBjb250ZW50LFxuICAgIGxpc3RTZWxlY3QsXG4gICAgbGlzdE5TZWxlY3QsXG4gICAgZm9ybSxcbiAgICBvcHRpb25zLFxuICAgIHVwZGF0ZSxcbiAgICB0b2RheUJ0bixcbiAgICBob21lQnRuLFxuICAgIHRvZ2dsZSxcbiAgICBjbGlja1NoaWVsZCxcbiAgICBhZGRTdHlsZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGV2ZW50ID0gKCgpID0+IHtcbiAgZG9tLmZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb20udG9nZ2xlKGRvbS5mb3JtQ29udGFpbmVyKTtcbiAgICBkb20uc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVcIik7XG4gIH0pO1xuXG4gIGRvbS5zaWRlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvbS50b2dnbGUoZG9tLnNpZGVNZW51KTtcbiAgICBkb20uc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVcIik7XG4gIH0pO1xuICBkb20uc2hpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uY2xpY2tTaGllbGQpO1xuICBkb20ubGlzdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb20udG9nZ2xlKGRvbS5saXN0cyk7XG4gIH0pO1xuXG4gIGRvbS5tZW51cy5mb3JFYWNoKChuKSA9PiB7XG4gICAgaWYgKG4uaWQgIT09IFwidG9kYXlcIikge1xuICAgICAgbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZG9tLmFkZFN0eWxlKG4sIGRvbS5tZW51cyk7XG4gICAgICAgIGlmIChuLnRleHRDb250ZW50ICE9PSBcIkxpc3RzXCIpIHtcbiAgICAgICAgICBkb20udGl0bGUudGV4dENvbnRlbnQgPSBgJHtuLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgcmVuZGVyLnJlbmRlckNvbnRlbnQobi50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCA9PT0gbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBkb20uY3JlYXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIExpc3RzLmNyZWF0ZUxpc3QoZG9tLmxpc3ROYW1lLnZhbHVlKTtcbiAgICByZW5kZXIucmVuZGVyTGlzdHMoKTtcbiAgICBkb20ubGlzdHMuY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiKTtcbiAgICBkb20ubGlzdE5hbWUudmFsdWUgPSBcIlwiO1xuICB9KTtcblxuICBkb20uZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG4gICAgZm9yIChsZXQgZWxlIG9mIGZvcm0pIHtcbiAgICAgIGZvcm1EYXRhW2VsZS5uYW1lXSA9IGVsZS52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oXG4gICAgICBmb3JtRGF0YS5uYW1lLFxuICAgICAgZm9ybURhdGEubm90ZSxcbiAgICAgIGZvcm1EYXRhLmR1ZSxcbiAgICAgIGZvcm1EYXRhLnByaW9yaXR5LFxuICAgICAgZm9ybURhdGEubGlzdFxuICAgICk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8ubGlzdCk7XG4gICAgTGlzdHMuYWRkVG9MaXN0KHRvZG8sIHRvZG8ubGlzdCk7XG4gICAgcmVuZGVyLnJlbmRlckNvbnRlbnQodG9kby5saXN0KTtcbiAgICBkb20udG9nZ2xlKGRvbS5mb3JtQ29udGFpbmVyKTtcbiAgICBkb20uc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVcIik7XG4gICAgZG9tLnRpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby5saXN0fWA7XG4gIH0pO1xuXG4gIGRvbS51cGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICAgIGZvciAobGV0IGVsZSBvZiB1cGRhdGUpIHtcbiAgICAgIGZvcm1EYXRhW2VsZS5uYW1lXSA9IGVsZS52YWx1ZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgIC8vIExpc3RzLmdldExpc3QoZm9ybURhdGEubGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coTGlzdHMuZ2V0TGlzdChmb3JtRGF0YS5saXN0KSk7XG4gICAgLy8gY29uc29sZS5sb2coZG9tLnVwZGF0ZS5kYXRhc2V0W1wibGlzdFwiXSk7XG4gICAgLy8gY29uc29sZS5sb2coZG9tLnVwZGF0ZS5kYXRhc2V0W1wiaWRcIl0pO1xuICAgIGNvbnN0IGxpc3QgPSBMaXN0cy5nZXRMaXN0KGRvbS51cGRhdGUuZGF0YXNldFtcImxpc3RcIl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIGNvbnN0IHRvZG8gPSBsaXN0LmZpbmQoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB0b2RvLmlkID09PSBwYXJzZUludChkb20udXBkYXRlLmRhdGFzZXRbXCJpZFwiXSk7XG4gICAgfSk7XG4gICAgdG9kby5lZGl0VG9kbyhcbiAgICAgIGZvcm1EYXRhLm5hbWUsXG4gICAgICBmb3JtRGF0YS5ub3RlLFxuICAgICAgZm9ybURhdGEuZHVlLFxuICAgICAgZm9ybURhdGEucHJpb3JpdHksXG4gICAgICBmb3JtRGF0YS5saXN0XG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICBpZiAoZG9tLnVwZGF0ZS5kYXRhc2V0W1wibGlzdFwiXSAhPT0gZm9ybURhdGEubGlzdCkge1xuICAgICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgICBMaXN0cy5kZWxldGVUb2RvKHRvZG8uaWQsIGRvbS51cGRhdGUuZGF0YXNldFtcImxpc3RcIl0pO1xuICAgICAgTGlzdHMuYWRkVG9MaXN0KHRvZG8sIHRvZG8ubGlzdCk7XG4gICAgfVxuXG4gICAgcmVuZGVyLnJlbmRlckNvbnRlbnQodG9kby5saXN0KTtcbiAgICBkb20udGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLmxpc3R9YDtcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0KTtcblxuICAgIHVwZGF0ZS5yZXNldCgpO1xuICAgIGRvbS50b2dnbGUoZG9tLnVwZGF0ZUNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGRvbS50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvbS5hZGRTdHlsZShkb20udG9kYXlCdG4sIGRvbS5tZW51cyk7XG4gICAgZG9tLnRpdGxlLnRleHRDb250ZW50ID0gYCR7ZG9tLnRvZGF5QnRuLnRleHRDb250ZW50fWA7XG4gICAgcmVuZGVyLnJlbmRlckNvbnRlbnQoXCJUb2RheVwiKTtcbiAgfSk7XG4gIGRvbS5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9tLmFkZFN0eWxlKGRvbS50b2RheUJ0biwgZG9tLm1lbnVzKTtcbiAgICBkb20udGl0bGUudGV4dENvbnRlbnQgPSBgJHtkb20udG9kYXlCdG4udGV4dENvbnRlbnR9YDtcbiAgICByZW5kZXIucmVuZGVyQ29udGVudChcIlRvZGF5XCIpO1xuICB9KTtcbn0pKCk7XG4iLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IExpc3RzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGxpc3RzW25hbWVdID0gW107XG4gICAgcmV0dXJuIGxpc3RzO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvTGlzdCA9ICh0b2RvLCBsaXN0KSA9PiB7XG4gICAgbGlzdHMuSW5ib3gucHVzaCh0b2RvKTtcbiAgICBpZiAobGlzdCAhPT0gXCJJbmJveFwiKSBsaXN0c1tsaXN0XS5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQsIGxpc3QpID0+IHtcbiAgICBsaXN0cy5JbmJveCA9IGxpc3RzLkluYm94LmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpO1xuICAgIGxpc3RzW2xpc3RdID0gbGlzdHNbbGlzdF0uZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlUb2RheSA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHRvZGF5ID0geXl5eSArIFwiLVwiICsgbW0gKyBcIi1cIiArIGRkO1xuICAgIGxpc3RzLlRvZGF5ID0gbGlzdHMuSW5ib3guZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gdG9kby5kdWUgPT09IHRvZGF5O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldExpc3RzID0gKCkgPT4gbGlzdHM7XG5cbiAgY29uc3QgZ2V0TGlzdCA9IChuYW1lKSA9PiBsaXN0c1tuYW1lXTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUxpc3QsXG4gICAgYWRkVG9MaXN0LFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgZmlsdGVyQnlUb2RheSxcbiAgICBnZXRMaXN0cyxcbiAgICBnZXRMaXN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdHM7XG5cbi8vIGxldCBBbGxMaXN0ID0ge1xuLy8gICBpbmJveDogW1xuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgICB7IG5hbWU6IFwiZG8gbGF1bmRyeVwiLCBub3RlOiBcImFsbCBjbG90aGluZ3NcIiwgZHVlOiBcIjIwMjItMDEtMjJcIiB9LFxuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgXSxcbi8vICAgd29yazogW1xuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgICB7IG5hbWU6IFwiZG8gbGF1bmRyeVwiLCBub3RlOiBcImFsbCBjbG90aGluZ3NcIiwgZHVlOiBcIjIwMjItMDEtMjJcIiB9LFxuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgXSxcbi8vICAgcGVyc29uYWw6IFtcbi8vICAgICB7IG5hbWU6IFwiZG8gbGF1bmRyeVwiLCBub3RlOiBcImFsbCBjbG90aGluZ3NcIiwgZHVlOiBcIjIwMjItMDEtMjJcIiB9LFxuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgICB7IG5hbWU6IFwiZG8gbGF1bmRyeVwiLCBub3RlOiBcImFsbCBjbG90aGluZ3NcIiwgZHVlOiBcIjIwMjItMDEtMjJcIiB9LFxuLy8gICAgIHsgbmFtZTogXCJkbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgXSxcbi8vIH07XG5cbkxpc3RzLmNyZWF0ZUxpc3QoXCJJbmJveFwiKTtcbkxpc3RzLmNyZWF0ZUxpc3QoXCJXb3JrXCIpO1xuTGlzdHMuY3JlYXRlTGlzdChcIlBlcnNvbmFsXCIpO1xuTGlzdHMuY3JlYXRlTGlzdChcIlRvZGF5XCIpO1xuXG4vLyBsZXQgdG9kbzEgPSBjcmVhdGVUb2RvKFwic2F5IHByYXllclwiLCBcImEgbG90XCIsIFwiMjAyMi0wMS0yNFwiLCAzLCBcIndvcmtcIik7XG4vLyBsZXQgdG9kbzIgPSBjcmVhdGVUb2RvKFwic2F5IHByYXllcjJcIiwgXCJhIGxvdFwiLCBcIjIwMjItMDEtMjRcIiwgMywgXCJ3b3JrXCIpO1xuLy8gTGlzdHMuYWRkVG9MaXN0KHRvZG8xLCB0b2RvMS5saXN0KTtcbi8vIExpc3RzLmFkZFRvTGlzdCh0b2RvMiwgdG9kbzIubGlzdCk7XG5cbi8vIExpc3RzLmFkZFRvTGlzdChcbi8vICAgeyBuYW1lOiBcImRvIGxhdW5kcnlcIiwgbm90ZTogXCJhbGwgY2xvdGhpbmdzXCIsIGR1ZTogXCIyMDIyLTAxLTIyXCIgfSxcbi8vICAgXCJpbmJveFwiXG4vLyApO1xuXG4vLyBMaXN0cy5hZGRUb0xpc3QoXG4vLyAgIHsgbmFtZTogXCJoZWxsbyBsYXVuZHJ5XCIsIG5vdGU6IFwiYWxsIGNsb3RoaW5nc1wiLCBkdWU6IFwiMjAyMi0wMS0yMlwiIH0sXG4vLyAgIFwid29ya1wiXG4vLyApO1xuXG4vLyBjb25zb2xlLmxvZyhMaXN0cy5nZXRMaXN0cygpKTtcbi8vIGZvciAobGV0IGxpc3QgaW4gTGlzdHMuZ2V0TGlzdHMoKSkge1xuLy8gICBjb25zb2xlLmxvZyhsaXN0KTtcbi8vIH1cblxuLy8gY29uc29sZS5sb2coTGlzdHMuZ2V0TGlzdChcImluYm94XCIpKTtcbi8vIGNvbnNvbGUubG9nKExpc3RzLmdldExpc3QoXCJ3b3JrXCIpKTtcblxuLy8gY29uc29sZS5sb2coTGlzdHMuZ2V0TGlzdChcIndvcmtcIilbMF0uZWRpdFRvZG8oXCJub3RlXCIsIFwiZXZlcnkgbmlnaHRcIikpO1xuLy8gY29uc29sZS5sb2coTGlzdHMuZ2V0TGlzdChcIndvcmtcIilbMF0pO1xuIiwiaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBMaXN0cyBmcm9tIFwiLi9saXN0c1wiO1xuXG5jb25zdCByZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXJMaXN0cyA9ICgpID0+IHtcbiAgICB3aGlsZSAoZG9tLmxpc3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRvbS5saXN0cy5yZW1vdmVDaGlsZChkb20ubGlzdHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHdoaWxlIChkb20ubGlzdFNlbGVjdC5maXJzdENoaWxkKSB7XG4gICAgICBkb20ubGlzdFNlbGVjdC5yZW1vdmVDaGlsZChkb20ubGlzdFNlbGVjdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGRvbS5saXN0TlNlbGVjdC5maXJzdENoaWxkKSB7XG4gICAgICBkb20ubGlzdE5TZWxlY3QucmVtb3ZlQ2hpbGQoZG9tLmxpc3ROU2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBsaXN0IGluIExpc3RzLmdldExpc3RzKCkpIHtcbiAgICAgIGlmIChsaXN0ICE9PSBcIkluYm94XCIgJiYgbGlzdCAhPT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZG9tLnRpdGxlLnRleHRDb250ZW50ID0gYCR7bGlzdH1gO1xuICAgICAgICAgIHJlbmRlckNvbnRlbnQobGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtsaXN0fWA7XG4gICAgICAgIGRvbS5saXN0cy5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3QgIT09IFwiVG9kYXlcIikge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtsaXN0fWA7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke2xpc3R9YDtcbiAgICAgICAgZG9tLmxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGRvbS5saXN0TlNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAobGlzdCkgPT4ge1xuICAgIHdoaWxlIChkb20uY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBkb20uY29udGVudC5yZW1vdmVDaGlsZChkb20uY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgdG9kbyBvZiBMaXN0cy5nZXRMaXN0KGxpc3QpKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdjNcIik7XG4gICAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9cIik7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICAgICAgbmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7dG9kby5uYW1lfWA7XG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgbmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICAgIH1cbiAgICAgIGRpdjMuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2My5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzdGFyQ29sb3JzID0gWywgXCJncmV5XCIsIFwib3JhbmdlXCIsIFwiZ3JlZW5cIiwgXCJyZWRcIl07XG4gICAgICBwcmlvcml0eURpdi5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yXCIsIHN0YXJDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW4tcmlnaHRcIiwgXCIyMHB4XCIpO1xuICAgICAgbGV0IHN0YXJzID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvZG8ucHJpb3JpdHk7IGkrKykge1xuICAgICAgICBsZXQgc3RhciA9ICc8aSBjbGFzcz1cImZhcyBmYS1zdGFyIGZhLXNtXCI+PC9pPic7XG4gICAgICAgIHN0YXJzID0gc3RhcnMgKyBzdGFyO1xuICAgICAgfVxuICAgICAgcHJpb3JpdHlEaXYuaW5uZXJIVE1MID0gc3RhcnM7XG5cbiAgICAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2NC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgIGVkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+JztcbiAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGRvbS50b2dnbGUoZG9tLnVwZGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIGRvbS5zaGllbGQuY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiKTtcbiAgICAgICAgZG9tLnVwZGF0ZS5kYXRhc2V0LmlkID0gdG9kby5pZDtcbiAgICAgICAgZG9tLnVwZGF0ZS5kYXRhc2V0Lmxpc3QgPSBgJHt0b2RvLmxpc3R9YDtcbiAgICAgICAgZm9yIChsZXQgZWxlIG9mIGRvbS51cGRhdGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgIGlmIChlbGUuaWQgPT09IFwibmFtZU5cIikge1xuICAgICAgICAgICAgZWxlLnZhbHVlID0gdG9kby5uYW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLmlkID09PSBcIm5vdGVOXCIpIHtcbiAgICAgICAgICAgIGVsZS52YWx1ZSA9IHRvZG8ubm90ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZS5pZCA9PT0gXCJkdWVOXCIpIHtcbiAgICAgICAgICAgIGVsZS52YWx1ZSA9IHRvZG8uZHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLmlkID09PSBcInByaW9yaXR5TlwiKSB7XG4gICAgICAgICAgICBlbGUuY2hpbGROb2Rlcy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdG9kby5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGUuaWQgPT09IFwibGlzdE5cIikge1xuICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHRvZG8ubGlzdCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgZGVsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+JztcbiAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmlkKTtcbiAgICAgICAgTGlzdHMuZGVsZXRlVG9kbyh0b2RvLmlkLCB0b2RvLmxpc3QpO1xuICAgICAgICByZW5kZXJDb250ZW50KHRvZG8ubGlzdCk7XG4gICAgICB9KTtcbiAgICAgIGRpdjQuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICBkaXY0LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjQpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgaWYgKHRvZG8ubm90ZSkge1xuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm90ZURpdi5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICAgICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm90ZVRpdGxlLnRleHRDb250ZW50ID0gXCJOb3RlOlwiO1xuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVUaXRsZSk7XG4gICAgICAgIGNvbnN0IG5vdGVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBub3RlRGV0YWlsLnRleHRDb250ZW50ID0gYCR7dG9kby5ub3RlfWA7XG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZURldGFpbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpdjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdjUpO1xuICAgICAgY29uc3QgZGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjYWxlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgY2FsZW5kZXIuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4nO1xuICAgICAgZGl2Ni5hcHBlbmRDaGlsZChjYWxlbmRlcik7XG4gICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGAke3RvZG8uZHVlfWA7XG4gICAgICBkaXY2LmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgICBkaXY1LmFwcGVuZENoaWxkKGRpdjYpO1xuICAgICAgY29uc3QgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNvbnN0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsaXN0SWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtY2xpcGJvYXJkLWxpc3RcIj48L2k+JztcbiAgICAgIGRpdjcuYXBwZW5kQ2hpbGQobGlzdEljb24pO1xuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke3RvZG8ubGlzdH1gO1xuICAgICAgZGl2Ny5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIGRpdjUuYXBwZW5kQ2hpbGQoZGl2Nyk7XG4gICAgICBkb20uY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICByZW5kZXJMaXN0cyxcbiAgICByZW5kZXJDb250ZW50LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiY29uc3QgVG9kbyA9IChuYW1lLCBub3RlLCBkdWUsIHByaW9yaXR5LCBsaXN0KSA9PiB7XG4gIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGVkaXRUb2RvKG5hbWUsIG5vdGUsIGR1ZSwgcHJpb3JpdHksIGxpc3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vdGUsXG4gICAgZHVlLFxuICAgIHByaW9yaXR5LFxuICAgIGxpc3QsXG4gICAgaWQsXG4gICAgY29tcGxldGVkLFxuICAgIGVkaXRUb2RvLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lLCBub3RlLCBkdWUsIHByaW9yaXR5LCBsaXN0KSA9PiB7XG4gIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIG5vdGUsIGR1ZSwgcHJpb3JpdHksIGxpc3QpO1xuICByZXR1cm4gdG9kbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IExpc3RzIGZyb20gXCIuL2xpc3RzLmpzXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50LmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL25hdmJhci5jc3NcIjtcbmltcG9ydCBcIi4vZm9ybS5jc3NcIjtcbmltcG9ydCBcIi4vc2lkZS1tZW51LmNzc1wiO1xuaW1wb3J0IFwiLi90b2RvLmNzc1wiO1xuaW1wb3J0IFwiLi9mb290ZXIuY3NzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=