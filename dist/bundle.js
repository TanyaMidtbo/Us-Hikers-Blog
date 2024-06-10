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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signInValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signInValidation.js */ \"./js/signInValidation.js\");\nconsole.log(\"test\");\n\n\n//selecting the sign-in form elements\n\nconst emailInput = document.querySelector(\".email\");\nconst passwordInput = document.querySelector(\".password\");\nconst signInButton = document.querySelector(\".sign-in-button\");\nconst emailError = document.querySelector(\".email-error\");\nconst passwordError = document.querySelector(\".password-error\");\nconst signInForm = document.querySelector(\".sign-in-form\");\nconst submissionError = document.querySelector(\".submittion-error\");\nsignInButton.addEventListener(\"click\", e => {\n  e.preventDefault();\n  (0,_signInValidation_js__WEBPACK_IMPORTED_MODULE_0__.validateSignInForm)(emailInput.value, passwordInput.value, emailError, passwordError);\n});\n\n//# sourceURL=webpack://blog/./js/app.js?");

/***/ }),

/***/ "./js/signInValidation.js":
/*!********************************!*\
  !*** ./js/signInValidation.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignInForm: function() { return /* binding */ validateSignInForm; }\n/* harmony export */ });\nconst validateSignInForm = (email, password, emailErrorElement, passErrorElement) => {\n  const errors = {\n    errorStatus: false,\n    emailError: \"\",\n    passwordError: \"\"\n  };\n  //passError is a parameter of a function, passwordError is a property of errors object\n  if (!email && !password) {\n    errors.errorStatus = true, errors.emailError = \"email is required\", errors.passwordError = \"password is required\";\n    emailErrorElement.style.visibility = \"visible\";\n    passErrorElement.style.visibility = \"visible\";\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n  } else if (!email) {\n    errors.errorStatus = true, errors.emailError = \"email is required\", errors.passwordError = \"\";\n    emailErrorElement.style.visibility = \"visible\";\n    passErrorElement.style.visibility = \"hidden\";\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n  } else if (!password) {\n    errors.errorStatus = true, errors.emailError = \"\", errors.passwordError = \"password is required\";\n    emailErrorElement.style.visibility = \"hidden\";\n    passErrorElement.style.visibility = \"visible\";\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n  } else {\n    errors.errorStatus = false, errors.emailError = \"\", errors.passwordError = \"\";\n    emailErrorElement.style.visibility = \"hidden\";\n    passErrorElement.style.visibility = \"hidden\";\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n  }\n  const signInFormStatus = () => {\n    return errors.errorStatus;\n  };\n  return {\n    signInFormStatus\n  };\n};\n // named export\n//or export default validateSignInForm; as default export because there is only one export in this file\n\n//# sourceURL=webpack://blog/./js/signInValidation.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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