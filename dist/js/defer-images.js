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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/console.js":
/*!************************!*\
  !*** ./src/console.js ***!
  \************************/
/*! exports provided: default, success, error, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/**\n * // Custom\n * import msg from 'path/to/console'\n *\n * // Types\n * import * as msg from 'path/to/console'\n *\n * // Custom and types\n * import msg, * as msgType from 'path/to/console'\n *\n * // Variables *\n * text-1 | required\n * text-2 | optional\n * color  | optional | hex or rgb\n *\n * // Usage\n *\n * // Custom\n * msg('text-1', 'text-2', color)\n *\n * // Types\n * msg.success('text-1', 'text-2')\n * msg.warning('text-1', 'text-2')\n * msg.error('text-1', 'text-2')\n *\n * // Custom and types\n * msg('text-1', 'text-2', color)\n * msgType.success('text-1', 'text-2')\n * msgType.warning('text-1', 'text-2')\n * msgType.error('text-1', 'text-2')\n */\nvar msg = function msg() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#607d8b';\n  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#fff';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: ' + bg + '; color: ' + color + '; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _error = function _error() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ef5350; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _success = function _success() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #4caf50; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _sarning = function _sarning() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ffc400; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (msg);\nvar success = _success;\nvar error = _error;\nvar warning = _sarning;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS5qcz8zOTU2Il0sIm5hbWVzIjpbIm1zZyIsIm1zZzEiLCJtc2cyIiwiYmciLCJjb2xvciIsInN0eTEiLCJzdHkyIiwiY29uc29sZSIsImxvZyIsIl9lcnJvciIsIl9zdWNjZXNzIiwiX3Nhcm5pbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLElBQU1BLEdBQUcsR0FBRyxlQUtQO0FBQUEsTUFKSEMsSUFJRyx1RUFKSyxFQUlMO0FBQUEsTUFISEMsSUFHRyx1RUFISyxFQUdMO0FBQUEsTUFGSEMsRUFFRyx1RUFGSyxTQUVMO0FBQUEsTUFESEMsS0FDRyx1RUFESyxNQUNMO0FBQ0gsTUFBTUosR0FBRyxHQUFJLE9BQU9DLElBQVAsR0FBYyxJQUFkLEdBQXFCQyxJQUFsQztBQUNBLE1BQU1HLElBQUksR0FBRyxpQkFBaUJGLEVBQWpCLEdBQXNCLFdBQXRCLEdBQW9DQyxLQUFwQyxHQUE0QyxvQ0FBekQ7QUFDQSxNQUFNRSxJQUFJLEdBQUcsb0VBQWI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQ0VSLEdBREYsRUFFRUssSUFGRixFQUdFQyxJQUhGO0FBS0QsQ0FmRDs7QUFpQkEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FHVjtBQUFBLE1BRkhSLElBRUcsdUVBRkksRUFFSjtBQUFBLE1BREhDLElBQ0csdUVBREksRUFDSjtBQUNILE1BQU1GLEdBQUcsR0FBSSxPQUFPQyxJQUFQLEdBQWMsSUFBZCxHQUFxQkMsSUFBbEM7QUFDQSxNQUFNRyxJQUFJLEdBQUcsb0VBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsb0VBQWI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQ0VSLEdBREYsRUFFRUssSUFGRixFQUdFQyxJQUhGO0FBS0QsQ0FiRDs7QUFlQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUdaO0FBQUEsTUFGSFQsSUFFRyx1RUFGSSxFQUVKO0FBQUEsTUFESEMsSUFDRyx1RUFESSxFQUNKO0FBQ0gsTUFBTUYsR0FBRyxHQUFJLE9BQU9DLElBQVAsR0FBYyxJQUFkLEdBQXFCQyxJQUFsQztBQUNBLE1BQU1HLElBQUksR0FBRyxvRUFBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxvRUFBYjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FDRVIsR0FERixFQUVFSyxJQUZGLEVBR0VDLElBSEY7QUFLRCxDQWJEOztBQWVBLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBR1o7QUFBQSxNQUZIVixJQUVHLHVFQUZJLEVBRUo7QUFBQSxNQURIQyxJQUNHLHVFQURJLEVBQ0o7QUFDSCxNQUFNRixHQUFHLEdBQUksT0FBT0MsSUFBUCxHQUFjLElBQWQsR0FBcUJDLElBQWxDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHLG9FQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLG9FQUFiO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUNFUixHQURGLEVBRUVLLElBRkYsRUFHRUMsSUFIRjtBQUtELENBYkQ7O0FBZWVOLGtFQUFmO0FBQ08sSUFBUVksT0FBTyxHQUFJRixRQUFuQjtBQUNBLElBQVFHLEtBQUssR0FBTUosTUFBbkI7QUFDQSxJQUFRSyxPQUFPLEdBQUlILFFBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbnNvbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC8vIEN1c3RvbVxuICogaW1wb3J0IG1zZyBmcm9tICdwYXRoL3RvL2NvbnNvbGUnXG4gKlxuICogLy8gVHlwZXNcbiAqIGltcG9ydCAqIGFzIG1zZyBmcm9tICdwYXRoL3RvL2NvbnNvbGUnXG4gKlxuICogLy8gQ3VzdG9tIGFuZCB0eXBlc1xuICogaW1wb3J0IG1zZywgKiBhcyBtc2dUeXBlIGZyb20gJ3BhdGgvdG8vY29uc29sZSdcbiAqXG4gKiAvLyBWYXJpYWJsZXMgKlxuICogdGV4dC0xIHwgcmVxdWlyZWRcbiAqIHRleHQtMiB8IG9wdGlvbmFsXG4gKiBjb2xvciAgfCBvcHRpb25hbCB8IGhleCBvciByZ2JcbiAqXG4gKiAvLyBVc2FnZVxuICpcbiAqIC8vIEN1c3RvbVxuICogbXNnKCd0ZXh0LTEnLCAndGV4dC0yJywgY29sb3IpXG4gKlxuICogLy8gVHlwZXNcbiAqIG1zZy5zdWNjZXNzKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZy53YXJuaW5nKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZy5lcnJvcigndGV4dC0xJywgJ3RleHQtMicpXG4gKlxuICogLy8gQ3VzdG9tIGFuZCB0eXBlc1xuICogbXNnKCd0ZXh0LTEnLCAndGV4dC0yJywgY29sb3IpXG4gKiBtc2dUeXBlLnN1Y2Nlc3MoJ3RleHQtMScsICd0ZXh0LTInKVxuICogbXNnVHlwZS53YXJuaW5nKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZ1R5cGUuZXJyb3IoJ3RleHQtMScsICd0ZXh0LTInKVxuICovXG5cbmNvbnN0IG1zZyA9IChcbiAgbXNnMSAgPSAnJyxcbiAgbXNnMiAgPSAnJyxcbiAgYmcgICAgPSAnIzYwN2Q4YicsXG4gIGNvbG9yID0gJyNmZmYnLFxuKSA9PiB7XG4gIGNvbnN0IG1zZyAgPSAnJWMnICsgbXNnMSArICclYycgKyBtc2cyXG4gIGNvbnN0IHN0eTEgPSAnYmFja2dyb3VuZDogJyArIGJnICsgJzsgY29sb3I6ICcgKyBjb2xvciArICc7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuICBjb25zdCBzdHkyID0gJ2JhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcblxuICBjb25zb2xlLmxvZyhcbiAgICBtc2csXG4gICAgc3R5MSxcbiAgICBzdHkyXG4gICk7XG59XG5cbmNvbnN0IF9lcnJvciA9IChcbiAgbXNnMSA9ICcnLFxuICBtc2cyID0gJycsXG4pID0+IHtcbiAgY29uc3QgbXNnICA9ICclYycgKyBtc2cxICsgJyVjJyArIG1zZzJcbiAgY29uc3Qgc3R5MSA9ICdiYWNrZ3JvdW5kOiAjZWY1MzUwOyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG4gIGNvbnN0IHN0eTIgPSAnYmFja2dyb3VuZDogI2ZhZmFmYTsgY29sb3I6ICM4ODg7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIG1zZyxcbiAgICBzdHkxLFxuICAgIHN0eTJcbiAgKTtcbn1cblxuY29uc3QgX3N1Y2Nlc3MgPSAoXG4gIG1zZzEgPSAnJyxcbiAgbXNnMiA9ICcnLFxuKSA9PiB7XG4gIGNvbnN0IG1zZyAgPSAnJWMnICsgbXNnMSArICclYycgKyBtc2cyXG4gIGNvbnN0IHN0eTEgPSAnYmFja2dyb3VuZDogIzRjYWY1MDsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuICBjb25zdCBzdHkyID0gJ2JhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcblxuICBjb25zb2xlLmxvZyhcbiAgICBtc2csXG4gICAgc3R5MSxcbiAgICBzdHkyXG4gICk7XG59XG5cbmNvbnN0IF9zYXJuaW5nID0gKFxuICBtc2cxID0gJycsXG4gIG1zZzIgPSAnJyxcbikgPT4ge1xuICBjb25zdCBtc2cgID0gJyVjJyArIG1zZzEgKyAnJWMnICsgbXNnMlxuICBjb25zdCBzdHkxID0gJ2JhY2tncm91bmQ6ICNmZmM0MDA7IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcbiAgY29uc3Qgc3R5MiA9ICdiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogIzg4ODsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG5cbiAgY29uc29sZS5sb2coXG4gICAgbXNnLFxuICAgIHN0eTEsXG4gICAgc3R5MlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtc2dcbmV4cG9ydCBjb25zdCAgIHN1Y2Nlc3MgID0gX3N1Y2Nlc3NcbmV4cG9ydCBjb25zdCAgIGVycm9yICAgID0gX2Vycm9yXG5leHBvcnQgY29uc3QgICB3YXJuaW5nICA9IF9zYXJuaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/console.js\n");

/***/ }),

/***/ "./src/defer-images.js":
/*!*****************************!*\
  !*** ./src/defer-images.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console */ \"./src/console.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * @param array | required\n *\n * Example:\n *\n * preloadImages(['../logo.png', '../logo-2.png']);\n */\n\n\nvar preload = function preload(images) {\n  images.forEach(function (item, i) {\n    new Image().src = images[i];\n  });\n};\n\nvar imagesAvailable = function imagesAvailable(images) {\n  if (images.length <= 0 || _typeof(images) !== 'object' || images === '') {\n    _console__WEBPACK_IMPORTED_MODULE_0__[\"error\"]('Preload Images', 'Missing images');\n    return false;\n  }\n\n  return true;\n};\n\nvar preloadImages = function preloadImages() {\n  var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  if (imagesAvailable(images)) preload(images);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (preloadImages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVmZXItaW1hZ2VzLmpzPzUwYjciXSwibmFtZXMiOlsicHJlbG9hZCIsImltYWdlcyIsImZvckVhY2giLCJpdGVtIiwiaSIsIkltYWdlIiwic3JjIiwiaW1hZ2VzQXZhaWxhYmxlIiwibGVuZ3RoIiwibXNnIiwicHJlbG9hZEltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7O0FBUUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUFZO0FBQzFCQSxRQUFNLENBQUNDLE9BQVAsQ0FBZSxVQUFTQyxJQUFULEVBQWVDLENBQWYsRUFBa0I7QUFDL0IsUUFBSUMsS0FBSixHQUFZQyxHQUFaLEdBQWtCTCxNQUFNLENBQUNHLENBQUQsQ0FBeEI7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFLQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNOLE1BQUQsRUFBWTtBQUNsQyxNQUFJQSxNQUFNLENBQUNPLE1BQVAsSUFBaUIsQ0FBakIsSUFBc0IsUUFBT1AsTUFBUCxNQUFrQixRQUF4QyxJQUFvREEsTUFBTSxLQUFLLEVBQW5FLEVBQXVFO0FBQ3JFUSxrREFBQSxDQUFVLGdCQUFWLEVBQTRCLGdCQUE1QjtBQUVBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBUkQ7O0FBU0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFpQjtBQUFBLE1BQWhCVCxNQUFnQix1RUFBUCxFQUFPO0FBQ3JDLE1BQUlNLGVBQWUsQ0FBQ04sTUFBRCxDQUFuQixFQUNFRCxPQUFPLENBQUNDLE1BQUQsQ0FBUDtBQUNILENBSEQ7O0FBS2VTLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlZmVyLWltYWdlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIGFycmF5IHwgcmVxdWlyZWRcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIHByZWxvYWRJbWFnZXMoWycuLi9sb2dvLnBuZycsICcuLi9sb2dvLTIucG5nJ10pO1xuICovXG5cbmltcG9ydCAqIGFzIG1zZyBmcm9tICcuL2NvbnNvbGUnXG5cbmNvbnN0IHByZWxvYWQgPSAoaW1hZ2VzKSA9PiB7XG4gIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICBuZXcgSW1hZ2UoKS5zcmMgPSBpbWFnZXNbaV07XG4gIH0pXG59XG5jb25zdCBpbWFnZXNBdmFpbGFibGUgPSAoaW1hZ2VzKSA9PiB7XG4gIGlmIChpbWFnZXMubGVuZ3RoIDw9IDAgfHwgdHlwZW9mIGltYWdlcyAhPT0gJ29iamVjdCcgfHwgaW1hZ2VzID09PSAnJykge1xuICAgIG1zZy5lcnJvcignUHJlbG9hZCBJbWFnZXMnLCAnTWlzc2luZyBpbWFnZXMnKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuY29uc3QgcHJlbG9hZEltYWdlcyA9IChpbWFnZXMgPSBbXSkgPT4ge1xuICBpZiAoaW1hZ2VzQXZhaWxhYmxlKGltYWdlcykpXG4gICAgcHJlbG9hZChpbWFnZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByZWxvYWRJbWFnZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/defer-images.js\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/defer-images.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel.olvera/Documents/sites/htdocs/samline/defer-images/src/defer-images.js */"./src/defer-images.js");


/***/ })

/******/ });