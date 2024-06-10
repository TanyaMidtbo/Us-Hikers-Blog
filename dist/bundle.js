/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studentGrades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentGrades */ \"./js/studentGrades.js\");\n/* harmony import */ var _calcAverage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcAverage */ \"./js/calcAverage.js\");\n\n\nconsole.log((0,_calcAverage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_studentGrades__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n//# sourceURL=webpack://blog/./js/app.js?");

/***/ }),

/***/ "./js/calcAverage.js":
/*!***************************!*\
  !*** ./js/calcAverage.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst calcAverage = grades => {\n  let sum = 0;\n  grades.forEach(grade => {\n    sum += grade.score;\n  });\n  const average = (sum / grades.length).toFixed(2);\n  return +average;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (calcAverage);\n\n//# sourceURL=webpack://blog/./js/calcAverage.js?");

/***/ }),

/***/ "./js/studentGrades.js":
/*!*****************************!*\
  !*** ./js/studentGrades.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst grades = [{\n  courseId: 1,\n  courseName: \"HTML\",\n  programName: \"Front-end development\",\n  score: 95\n}, {\n  courseId: 2,\n  courseName: \"CSS\",\n  programName: \"Front-end development\",\n  score: 90\n}, {\n  courseId: 3,\n  courseName: \"JavaScript\",\n  score: 30\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (grades);\n\n//# sourceURL=webpack://blog/./js/studentGrades.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;