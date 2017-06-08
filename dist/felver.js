(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["felver"] = factory();
	else
		root["felver"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeGeometry = normalizeGeometry;
exports.isGeometry = isGeometry;
exports.is = is;
exports.isSTL = isSTL;
exports.isOBJ = isOBJ;
exports.isFBX = isFBX;
function normalizeGeometry(geo) {
    if (!isGeometry(geo)) throw new Error('The parameter must be Geometry or BufferGeometry');
    return geo instanceof THREE.BufferGeometry ? new THREE.Geometry().fromBufferGeometry(geo) : geo;
}

function isGeometry(geo) {
    return geo instanceof THREE.Geometry || geo instanceof THREE.BufferGeometry;
}

function is(type) {
    var re = new RegExp('.' + type + '$', 'i');
    return function (name) {
        return re.test(name);
    };
}

function isSTL(name) {
    return is('stl')(name);
}

function isOBJ(name) {
    return is('obj')(name);
}

function isFBX(name) {
    return is('fbx')(name);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.volume = volume;
exports.surfaceArea = surfaceArea;
exports.surfaceWithVolume = surfaceWithVolume;
exports.whd = whd;
exports.numOfTrianglesVertices = numOfTrianglesVertices;
exports.numOfTrianglesFaces = numOfTrianglesFaces;

var _util = __webpack_require__(0);

function volumeOfTriangle(point1, point2, point3) {
    var v321 = point3.x * point2.y * point1.z;
    var v231 = point2.x * point3.y * point1.z;
    var v312 = point3.x * point1.y * point2.z;
    var v132 = point1.x * point3.y * point2.z;
    var v213 = point2.x * point1.y * point3.z;
    var v123 = point1.x * point2.y * point3.z;
    return 1.0 / 6.0 * (-v321 + v231 + v312 - v132 - v213 + v123);
}

function surfaceOfTriangle(point1, point2, point3) {
    var ax = point2.x - point1.x;
    var ay = point2.y - point1.y;
    var az = point2.z - point1.z;
    var bx = point3.x - point1.x;
    var by = point3.y - point1.y;
    var bz = point3.z - point1.z;
    var cx = ay * bz - az * by;
    var cy = az * bx - ax * bz;
    var cz = ax * by - ay * bx;
    return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}

function volume(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry),
        volume = 0;
    geo.faces.forEach(function (face) {
        volume += volumeOfTriangle(geo.vertices[face.a], geo.vertices[face.b], geo.vertices[face.c]);
    });
    return parseFloat(volume.toFixed(3));
}

function surfaceArea(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry),
        area = 0;
    geo.faces.forEach(function (face) {
        area += surfaceOfTriangle(geo.vertices[face.a], geo.vertices[face.b], geo.vertices[face.c]);
    });
    return parseFloat(area.toFixed(3));
}

function surfaceWithVolume(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry),
        area = 0,
        volume = 0;
    geo.faces.forEach(function (face) {
        volume += volumeOfTriangle(geo.vertices[face.a], geo.vertices[face.b], geo.vertices[face.c]);
        area += surfaceOfTriangle(geo.vertices[face.a], geo.vertices[face.b], geo.vertices[face.c]);
    });
    return {
        "area": parseFloat(area.toFixed(3)),
        "volume": parseFloat(volume.toFixed(3))
    };
}

function whd(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry);
    if (!geo.boundingBox) geo.computeBoundingBox();
    var max = geo.boundingBox.max;
    var min = geo.boundingBox.min;
    return {
        x: max.x - min.x,
        y: max.y - min.y,
        z: max.z - min.z
    };
}

function numOfTrianglesVertices(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry);
    return geo.vertices.length;
}

function numOfTrianglesFaces(geometry) {
    var geo = (0, _util.normalizeGeometry)(geometry);
    return geo.faces.length;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _geometry = __webpack_require__(1);

var geometry = _interopRequireWildcard(_geometry);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    util: util,
    geometry: geometry
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=felver.js.map