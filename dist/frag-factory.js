(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FragFactory"] = factory();
	else
		root["FragFactory"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	exports.create = function(defintions) {
	  var frag = document.createDocumentFragment();
	  return defintions.reduce ? defintions.reduce(append, frag) : append(frag, defintions);
	}

	function append(node, definition) {
	  var element = document.createElement(definition.tag);

	  for(var k in definition) {
	    if(k === 'tag') {}
	    else if(k === 'children') { definition.children.reduce(append, element); }
	    else if(k === 'text') { element.appendChild(document.createTextNode(definition.text)); }
	    else if(k in element && k !== 'style') { element[k] = definition[k]; }
	    else { element.setAttribute(k, definition[k]); }
	  }

	  node.appendChild(element);
	  return node;
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	  Array.prototype.reduce = function(callback /*, initialValue*/) {
	    'use strict';
	    if (this == null) {
	      throw new TypeError('Array.prototype.reduce called on null or undefined');
	    }
	    if (typeof callback !== 'function') {
	      throw new TypeError(callback + ' is not a function');
	    }
	    var t = Object(this), len = t.length >>> 0, k = 0, value;
	    if (arguments.length == 2) {
	      value = arguments[1];
	    } else {
	      while (k < len && !(k in t)) {
	        k++; 
	      }
	      if (k >= len) {
	        throw new TypeError('Reduce of empty array with no initial value');
	      }
	      value = t[k++];
	    }
	    for (; k < len; k++) {
	      if (k in t) {
	        value = callback(value, t[k], k, t);
	      }
	    }
	    return value;
	  };
	}

/***/ }
/******/ ])
});
;