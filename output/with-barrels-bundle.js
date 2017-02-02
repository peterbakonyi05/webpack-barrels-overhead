/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Feature1Service {
	doSomething() {
		console.log("doSomething");
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Feature1Service;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Feature2Service {
	doSomething() {
		console.log("doSomethingElse");
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Feature2Service;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature1_service__ = __webpack_require__(0);
/* unused harmony namespace reexport */




const FEATURE1_PROVIDERS = [
	__WEBPACK_IMPORTED_MODULE_0__feature1_service__["a" /* Feature1Service */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = FEATURE1_PROVIDERS;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature2_service__ = __webpack_require__(1);
/* unused harmony namespace reexport */




const FEATURE2_PROVIDERS = [
	__WEBPACK_IMPORTED_MODULE_0__feature2_service__["a" /* Feature2Service */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = FEATURE2_PROVIDERS;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature1_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature2_index__ = __webpack_require__(3);



const PROVIDERS = [
	...__WEBPACK_IMPORTED_MODULE_0__feature1_index__["a" /* FEATURE1_PROVIDERS */],
	...__WEBPACK_IMPORTED_MODULE_1__feature2_index__["a" /* FEATURE2_PROVIDERS */]
];
/* harmony export (immutable) */ __webpack_exports__["PROVIDERS"] = PROVIDERS;


/***/ })
/******/ ]);