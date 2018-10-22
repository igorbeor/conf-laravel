/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// $.validator.addMethod(
//     "regex",
//     function(value, element, regexp) {
//         var re = new RegExp(regexp);
//         return this.optional(element) || re.test(value);
//     },
//     "Please check your input."
// );
//
// $(document).ready(function(){
//     $('#form').validate({
//
//         rules: {
//             firstname: {
//                 required: true,
//                 regex: "[a-zA-Z]+",
//                 minlength: 2,
//                 maxlength: 50,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             lastname: {
//                 required: true,
//                 regex: "[a-zA-Z]+",
//                 minlength: 2,
//                 maxlength: 50,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             birthdate: {
//                 required: true,
//                 date: true
//             },
//             report_subject: {
//                 required: true
//             },
//             country: {
//                 required: true
//             },
//             phone: {
//                 required: true,
//                 regex: "^(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})$"
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         submitHandler: function(form, event) {
//             event.preventDefault();
//             $.ajax({
//                 url: "/participant/store",
//                 type: "POST",
//                 data: $(form).serialize(),
//                 success: function(response) {
//                     $('#answers').html(response);
//                 }
//             });
//         }
//     });
// });

/***/ })

/******/ });