/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Baskervville-Regular.ttf */ "./src/Baskervville-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Baskervville;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  grid-template-columns: 1fr;
  font-family: Roboto, 'sans-serif';
}
#content nav{
  grid-row-start: 1;
  background-color: #a8a29e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#content nav ul{
  display: flex;
  gap: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

#content nav ul li:hover {
  color: #f5f5f4;
  text-decoration: underline;  

}
#content nav ul li{
  list-style-type: none;

}

#content main{
  grid-row-start: 2;
  font-family: Baskervville;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f4;
  
}

#content main .center-content{
  min-height: 90%;
  min-width: 70%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  background-color: #d6d3d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  z-index: 10;
  box-shadow: 0px 3px 4px rgb(133, 133, 133);
  
}
#content main .center-content .title,.menu-title{
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}

#content main .center-content .about-us {
  word-break: break-all;
  width: 50%;
  padding: 20px;
  background-color: #a8a29e;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.about-us .about-heading{
  font-size: 20px;
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
}

#content main .center-content .opening-times{
  width: 50%;
  padding: 20px;
  background-color: #a8a29e;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;


}

.opening-times-heading {
  font-size: 20px;
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
  
}

#content main .center-content .opening-times ul li {
  list-style-type: none;
  font-size: 15px;
}

#content main .center-content .location {
  width: 50%;
  padding: 20px;
  background-color: #a8a29e;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; 
}

.location-heading {
  font-size: 20px;
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
}

.menu-content{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.pizzas,.desserts,.drinks {
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}
.menu-article {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 15px;
}
.card{
  height: 200px;
  background-color: #a8a29e;
  border-radius: 7px;
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr 1fr 1fr 2fr;
  padding: 10px;
  padding: 3px;
  cursor: pointer;
}
.card:hover{
  background-color: #d6d3d1;
  border: 2px solid #a8a29e;
}
.price {
  border: 2px solid black;
  background-color: #d6d3d1;
  width: 10%;
  border-radius: 50%;
  grid-row-start: 1;
}
.card-heading {
  text-align: center;
  text-decoration: underline;
  font-size: 15px;
  grid-row-start: 2;
}
.card .image{
  display: flex;
  justify-content: center;
  grid-row-start: 3;
}
.actual-image {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  
}


.card .description{
  word-break: break-all;
  font-size: 10px;
  grid-row-start: 4;
}



#content footer{
  grid-row-start: 3;
  background-color: #a8a29e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,yBAAyB;EACzB,4CAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,0BAA0B;EAC1B,iCAAiC;AACnC;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,0BAA0B;;AAE5B;AACA;EACE,qBAAqB;;AAEvB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,yBAAyB;;AAE3B;;AAEA;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,0CAA0C;;AAE5C;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;;;AAGV;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,iBAAiB;;AAEnB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,0DAA0D;EAC1D,SAAS;AACX;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;;AAEpB;;;AAGA;EACE,qBAAqB;EACrB,eAAe;EACf,iBAAiB;AACnB;;;;AAIA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n@font-face {\n  font-family: Baskervville;\n  src: url(./Baskervville-Regular.ttf);\n}\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 80px 1fr 80px;\n  grid-template-columns: 1fr;\n  font-family: Roboto, 'sans-serif';\n}\n#content nav{\n  grid-row-start: 1;\n  background-color: #a8a29e;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n#content nav ul{\n  display: flex;\n  gap: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#content nav ul li:hover {\n  color: #f5f5f4;\n  text-decoration: underline;  \n\n}\n#content nav ul li{\n  list-style-type: none;\n\n}\n\n#content main{\n  grid-row-start: 2;\n  font-family: Baskervville;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: #f5f5f4;\n  \n}\n\n#content main .center-content{\n  min-height: 90%;\n  min-width: 70%;\n  border-radius: 5px;\n  border: none;\n  padding: 10px;\n  background-color: #d6d3d1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  z-index: 10;\n  box-shadow: 0px 3px 4px rgb(133, 133, 133);\n  \n}\n#content main .center-content .title,.menu-title{\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-align: center;\n}\n\n#content main .center-content .about-us {\n  word-break: break-all;\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.about-us .about-heading{\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n}\n\n#content main .center-content .opening-times{\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n\n\n}\n\n.opening-times-heading {\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n  \n}\n\n#content main .center-content .opening-times ul li {\n  list-style-type: none;\n  font-size: 15px;\n}\n\n#content main .center-content .location {\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px; \n}\n\n.location-heading {\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n}\n\n.menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pizzas,.desserts,.drinks {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-align: center;\n}\n.menu-article {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n  gap: 15px;\n}\n.card{\n  height: 200px;\n  background-color: #a8a29e;\n  border-radius: 7px;\n  display: grid;\n  gap: 10px;\n  grid-template-rows: 1fr 1fr 1fr 2fr;\n  padding: 10px;\n  padding: 3px;\n  cursor: pointer;\n}\n.card:hover{\n  background-color: #d6d3d1;\n  border: 2px solid #a8a29e;\n}\n.price {\n  border: 2px solid black;\n  background-color: #d6d3d1;\n  width: 10%;\n  border-radius: 50%;\n  grid-row-start: 1;\n}\n.card-heading {\n  text-align: center;\n  text-decoration: underline;\n  font-size: 15px;\n  grid-row-start: 2;\n}\n.card .image{\n  display: flex;\n  justify-content: center;\n  grid-row-start: 3;\n}\n.actual-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  \n}\n\n\n.card .description{\n  word-break: break-all;\n  font-size: 10px;\n  grid-row-start: 4;\n}\n\n\n\n#content footer{\n  grid-row-start: 3;\n  background-color: #a8a29e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/functions/clear.js":
/*!********************************!*\
  !*** ./src/functions/clear.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContents: () => (/* binding */ clearContents)
/* harmony export */ });
function clearContents(){
  const currentNode = document.querySelector(".center-content");
  while(currentNode.firstElementChild){
    currentNode.firstElementChild.remove();
  }
}


/***/ }),

/***/ "./src/functions/renderDefault.js":
/*!****************************************!*\
  !*** ./src/functions/renderDefault.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefault: () => (/* binding */ getDefault)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");

function getDefault(){
  const contentElement = document.createElement("div");
  contentElement.setAttribute("id", "content");
  const navElement = document.createElement("nav");
  const mainElement = document.createElement("main");
  const footerElement = document.createElement("footer");
  footerElement.textContent = "Copyright © MAsecurity 2023";
  const ulElement = document.createElement("ul");
  const liHome = document.createElement("li");
  const liMenu = document.createElement("li");
  const liContact = document.createElement("li");
  liHome.textContent = "Home";
  liMenu.textContent = "Menu";
  liContact.textContent = "Contact us";
  liHome.setAttribute("id", "home");
  liMenu.setAttribute("id", "menu");
  liContact.setAttribute("id", "contact")
  const centeredContent  = document.createElement("div");
  centeredContent.classList.add("center-content");
  document.body.appendChild(contentElement);
  contentElement.appendChild(navElement);
  contentElement.appendChild(mainElement);
  contentElement.appendChild(footerElement)
  navElement.appendChild(ulElement);
  ulElement.appendChild(liHome);
  ulElement.appendChild(liMenu);
  ulElement.appendChild(liContact);
  mainElement.appendChild(centeredContent);
}





/***/ }),

/***/ "./src/functions/renderHome.js":
/*!*************************************!*\
  !*** ./src/functions/renderHome.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHome: () => (/* binding */ getHome)
/* harmony export */ });
function getHome(){
  const centerContent = document.querySelector(".center-content");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Welcome to Tasty Pizza";
  // About section
  const about = document.createElement("div");
  about.classList.add("about-us");
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");
  aboutHeading.textContent = "About us";
  const aboutPara = document.createElement("div");
  aboutPara.textContent = "Welcome to Tasty Pizza, where the art of pizza-making comes to life! Our restaurant is a culinary haven for pizza lovers, offering a delectable array of handcrafted pizzas that are bound to tantalize your taste buds.\nWith a focus on high-quality, fresh ingredients, and a passion for perfecting the pizza experience, we invite you to savor each bite and join us on a delightful gastronomic journey.\n Explore our diverse menu and discover the flavors that make our pizzas a true sensation.\n We can't wait to serve you!";
  // Opening-Times section
  const openingTimes = document.createElement("div");
  openingTimes.classList.add("opening-times");
  const openingHeading = document.createElement("div");
  openingHeading.classList.add("opening-times-heading");
  openingHeading.textContent = "Hours";
  const openingUl = document.createElement("ul");
  const liMon = document.createElement("li");
  liMon.textContent= "Monday: 12am to 9pm"
  const liTue = document.createElement("li");
  liTue.textContent = "Tuesday: 12am to 9pm";
  const liWed = document.createElement("li");
  liWed.textContent = "Wednesday: 12am to 9pm"
  const liThu = document.createElement("li");
  liThu.textContent = "Thursday: 12am to 9pm";
  const liFri = document.createElement("li");
  liFri.textContent = "Friday: 12am to 9pm";
  const liSat = document.createElement("li");
  liSat.textContent = "Saturday: 12am to 9pm";
  const liSun = document.createElement("li");
  liSun.textContent = "Sunday: 12am to 9pm"
  //Location section
  const location = document.createElement("div");
  location.classList.add("location");
  const locationHeading = document.createElement("div");
  locationHeading.classList.add("location-heading");
  locationHeading.textContent = "Location";
  const addressPartOne = document.createElement("div");
  addressPartOne.textContent = "123 Main Street";
  const addressPartTwo = document.createElement("div");
  addressPartTwo.textContent = "faketown, USA 12345";
  //Appending DOM elements
  centerContent.appendChild(title);
  centerContent.appendChild(about);
  centerContent.appendChild(openingTimes);
  centerContent.appendChild(location);
  about.appendChild(aboutHeading);
  about.appendChild(aboutPara);
  openingTimes.appendChild(openingHeading);
  openingTimes.appendChild(openingUl);
  openingUl.appendChild(liMon);
  openingUl.appendChild(liTue);
  openingUl.appendChild(liWed);
  openingUl.appendChild(liThu);
  openingUl.appendChild(liFri);
  openingUl.appendChild(liSat);
  openingUl.appendChild(liSun);
  location.appendChild(locationHeading);
  location.appendChild(addressPartOne);
  location.appendChild(addressPartTwo);
};


/***/ }),

/***/ "./src/functions/renderMenu.js":
/*!*************************************!*\
  !*** ./src/functions/renderMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_pepperoniPizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pepperoniPizza.png */ "./src/images/pepperoniPizza.png");
/* harmony import */ var _images_TandooriChicken_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/TandooriChicken.png */ "./src/images/TandooriChicken.png");
/* harmony import */ var _images_donnerKebab_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/donnerKebab.png */ "./src/images/donnerKebab.png");
/* harmony import */ var _images_beefPizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/beefPizza.png */ "./src/images/beefPizza.png");
/* harmony import */ var _images_veganPizza_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/veganPizza.png */ "./src/images/veganPizza.png");





function menu(){
  const allCenteredContent = document.querySelector(".center-content");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Menu";
  // Main Dishes
  const pizzaSection = document.createElement("div");
  pizzaSection.classList.add("pizzas");
  const pizzaSectionTitle = document.createElement("div");
  pizzaSectionTitle.textContent = "Main Dishes"
  const hrElement = document.createElement("hr");
  // Pepperoni Article
  const pepperoniMenuArticle = document.createElement("div");
  pepperoniMenuArticle.classList.add("menu-article");
  const pepperoniCard = document.createElement("div");
  pepperoniCard.classList.add("card");
  const pepperoniPrice = document.createElement("div");
  pepperoniPrice.classList.add("price");
  pepperoniPrice.textContent = "£13";
  const pepperoniHeading = document.createElement("div");
  pepperoniHeading.classList.add("card-heading");
  pepperoniHeading.textContent = 'Pepperoni Pizza 12 "inch"';
  const pepperoniContainerImage = document.createElement("div");
  pepperoniContainerImage.classList.add("image");
  const pepperoniActualImage = document.createElement("img");
  pepperoniActualImage.classList.add("actual-image");
  pepperoniActualImage.src = _images_pepperoniPizza_png__WEBPACK_IMPORTED_MODULE_0__;
  const pepperoniDescription = document.createElement("div");
  pepperoniDescription.classList.add("description");
  pepperoniDescription.textContent = "Eat our delicous Pepperoni Pizza for only at the price of £13";
  // TandooriChicken article
  const tandooriMenuArticle = document.createElement("div");
  tandooriMenuArticle.classList.add("menu-article");
  const tandooriCard = document.createElement("div");
  tandooriCard.classList.add("card");
  const tandooriPrice = document.createElement("div");
  tandooriPrice.classList.add("price");
  tandooriPrice.textContent = "£13";
  const tandooriHeading = document.createElement("div");
  tandooriHeading.classList.add("card-heading");
  tandooriHeading.textContent = 'Tandoori Chicken Pizza 12 "inch"';
  const tandooriContainerImage = document.createElement("div");
  tandooriContainerImage.classList.add("image");
  const tandooriActualImage = document.createElement("img");
  tandooriActualImage.classList.add("actual-image");
  tandooriActualImage.src = _images_TandooriChicken_png__WEBPACK_IMPORTED_MODULE_1__;
  const tandooriDescription = document.createElement("div");
  tandooriDescription.classList.add("description");
  tandooriDescription.textContent = "Eat our delicous Tandoori Chicken Pizza for only at the price of £13";
  //Donner Kebab Article
  const donnerKebabMenuArticle = document.createElement("div");
  donnerKebabMenuArticle.classList.add("menu-article");
  const donnerKebabCard = document.createElement("div");
  donnerKebabCard.classList.add("card");
  const donnerKebabPrice = document.createElement("div");
  donnerKebabPrice.classList.add("price");
  donnerKebabPrice.textContent = "£13";
  const donnerKebabHeading = document.createElement("div");
  donnerKebabHeading.classList.add("card-heading");
  donnerKebabHeading.textContent = 'Donner Kebab Pizza 12 "inch"';
  const donnerKebabContainerImage = document.createElement("div");
  donnerKebabContainerImage.classList.add("image");
  const donnerKebabActualImage = document.createElement("img");
  donnerKebabActualImage.classList.add("actual-image");
  donnerKebabActualImage.src = _images_donnerKebab_png__WEBPACK_IMPORTED_MODULE_2__;
  const donnerKebabDescription = document.createElement("div");
  donnerKebabDescription.classList.add("description");
  donnerKebabDescription.textContent = "Eat our delicous Donner Kebab Pizza for only at the price of £13";
  // Beef Pizza Article
  const beefMenuArticle = document.createElement("div");
  beefMenuArticle.classList.add("menu-article");
  const beefCard = document.createElement("div");
  beefCard.classList.add("card");
  const beefPrice = document.createElement("div");
  beefPrice.classList.add("price");
  beefPrice.textContent = "£13";
  const beefHeading = document.createElement("div");
  beefHeading.classList.add("card-heading");
  beefHeading.textContent = 'Beef Pizza 12 "inch"';
  const beefContainerImage = document.createElement("div");
  beefContainerImage.classList.add("image");
  const beefActualImage = document.createElement("img");
  beefActualImage.classList.add("actual-image");
  beefActualImage.src = _images_beefPizza_png__WEBPACK_IMPORTED_MODULE_3__;
  const beefDescription = document.createElement("div");
  beefDescription.classList.add("description");
  beefDescription.textContent = "Eat our delicous Beef Pizza for only at the price of £13";
  //Vegetarian Article
  const vegetarianMenuArticle = document.createElement("div");
  vegetarianMenuArticle.classList.add("menu-article");
  const vegetarianCard = document.createElement("div");
  vegetarianCard.classList.add("card");
  const vegetarianPrice = document.createElement("div");
  vegetarianPrice.classList.add("price");
  vegetarianPrice.textContent = "£13";
  const vegetarianHeading = document.createElement("div");
  vegetarianHeading.classList.add("card-heading");
  vegetarianHeading.textContent = 'Vegetarian Pizza 12 "inch"';
  const vegetarianContainerImage = document.createElement("div");
  vegetarianContainerImage.classList.add("image");
  const vegetarianActualImage = document.createElement("img");
  vegetarianActualImage.classList.add("actual-image");
  vegetarianActualImage.src = _images_veganPizza_png__WEBPACK_IMPORTED_MODULE_4__;
  const vegetarianDescription = document.createElement("div");
  vegetarianDescription.classList.add("description");
  vegetarianDescription.textContent = "Eat our delicous Vegetarian Pizza for only at the price of £13";
  // Add DOM elements
  allCenteredContent.appendChild(menuContent);
  menuContent.appendChild(menuTitle);
  menuContent.appendChild(pizzaSection);
  pizzaSection.appendChild(pizzaSectionTitle);
  pizzaSection.appendChild(hrElement);
  //Adding Pepperoni Pizza to DOM
  menuContent.appendChild(pepperoniMenuArticle);
  pepperoniMenuArticle.appendChild(pepperoniCard);
  pepperoniCard.appendChild(pepperoniPrice);
  pepperoniCard.appendChild(pepperoniHeading);
  pepperoniCard.appendChild(pepperoniContainerImage);
  pepperoniContainerImage.appendChild(pepperoniActualImage);
  pepperoniCard.appendChild(pepperoniDescription);
  //Adding Tandoori Chicken Pizza to DOM
  menuContent.appendChild(tandooriMenuArticle);
  tandooriMenuArticle.appendChild(tandooriCard);
  tandooriCard.appendChild(tandooriPrice);
  tandooriCard.appendChild(tandooriHeading);
  tandooriCard.appendChild(tandooriContainerImage);
  tandooriContainerImage.appendChild(tandooriActualImage);
  tandooriCard.appendChild(tandooriDescription);
  //Adding Donner Kebab Pizza to DOM
  menuContent.appendChild(donnerKebabMenuArticle);
  donnerKebabMenuArticle.appendChild(donnerKebabCard);
  donnerKebabCard.appendChild(donnerKebabPrice);
  donnerKebabCard.appendChild(donnerKebabHeading);
  donnerKebabCard.appendChild(donnerKebabContainerImage);
  donnerKebabContainerImage.appendChild(donnerKebabActualImage);
  donnerKebabCard.appendChild(donnerKebabDescription);
  //Adding Beef Pizza to DOM
  menuContent.appendChild(beefMenuArticle);
  beefMenuArticle.appendChild(beefCard);
  beefCard.appendChild(beefPrice);
  beefCard.appendChild(beefHeading);
  beefCard.appendChild(beefContainerImage);
  beefContainerImage.appendChild(beefActualImage);
  beefCard.appendChild(beefDescription);
  //Adding Vegetarian Pizza to DOM
  menuContent.appendChild(vegetarianMenuArticle);
  vegetarianMenuArticle.appendChild(vegetarianCard);
  vegetarianCard.appendChild(vegetarianPrice);
  vegetarianCard.appendChild(vegetarianHeading);
  vegetarianCard.appendChild(vegetarianContainerImage);
  vegetarianContainerImage.appendChild(vegetarianActualImage);
  vegetarianCard.appendChild(vegetarianDescription);
}


/***/ }),

/***/ "./src/Baskervville-Regular.ttf":
/*!**************************************!*\
  !*** ./src/Baskervville-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f901739d83410218a9d2.ttf";

/***/ }),

/***/ "./src/images/TandooriChicken.png":
/*!****************************************!*\
  !*** ./src/images/TandooriChicken.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39dbf309c26e9bcd1500.png";

/***/ }),

/***/ "./src/images/beefPizza.png":
/*!**********************************!*\
  !*** ./src/images/beefPizza.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "447b9b50de0f2b7232d9.png";

/***/ }),

/***/ "./src/images/donnerKebab.png":
/*!************************************!*\
  !*** ./src/images/donnerKebab.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bac4f0c2f45d8eacfa9.png";

/***/ }),

/***/ "./src/images/pepperoniPizza.png":
/*!***************************************!*\
  !*** ./src/images/pepperoniPizza.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36d90c7c79cca049b9a4.png";

/***/ }),

/***/ "./src/images/veganPizza.png":
/*!***********************************!*\
  !*** ./src/images/veganPizza.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "149fe3c976f6f8e97cbb.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions_renderDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/renderDefault */ "./src/functions/renderDefault.js");
/* harmony import */ var _functions_renderHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/renderHome */ "./src/functions/renderHome.js");
/* harmony import */ var _functions_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/clear */ "./src/functions/clear.js");
/* harmony import */ var _functions_renderMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/renderMenu */ "./src/functions/renderMenu.js");






(function deploy(){
  (0,_functions_renderDefault__WEBPACK_IMPORTED_MODULE_1__.getDefault)();
  (0,_functions_renderHome__WEBPACK_IMPORTED_MODULE_2__.getHome)();
  const homeLink = document.querySelector("#home");
  const menuLink = document.querySelector("#menu");
  const contactLink = document.querySelector("#contact")
  homeLink.addEventListener("click", ()=>{
    ;(0,_functions_clear__WEBPACK_IMPORTED_MODULE_3__.clearContents)();
    (0,_functions_renderHome__WEBPACK_IMPORTED_MODULE_2__.getHome)();
  });
  menuLink.addEventListener("click", ()=>{
    (0,_functions_clear__WEBPACK_IMPORTED_MODULE_3__.clearContents)();
    (0,_functions_renderMenu__WEBPACK_IMPORTED_MODULE_4__.menu)();
  });
  contactLink.addEventListener("click", ()=>{
    (0,_functions_clear__WEBPACK_IMPORTED_MODULE_3__.clearContents)();
  });
  
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxnR0FBZ0csSUFBSSxtQkFBbUIsY0FBYyw4QkFBOEIseUNBQXlDLEdBQUcsTUFBTSxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsY0FBYyxzQkFBc0Isa0JBQWtCLHNDQUFzQywrQkFBK0Isc0NBQXNDLEdBQUcsZUFBZSxzQkFBc0IsOEJBQThCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0IsY0FBYyxvQkFBb0Isc0JBQXNCLG9CQUFvQixHQUFHLDhCQUE4QixtQkFBbUIsaUNBQWlDLEtBQUsscUJBQXFCLDBCQUEwQixLQUFLLGtCQUFrQixzQkFBc0IsOEJBQThCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQiw4QkFBOEIsT0FBTyxrQ0FBa0Msb0JBQW9CLG1CQUFtQix1QkFBdUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxnQkFBZ0IsK0NBQStDLE9BQU8sbURBQW1ELG9CQUFvQixzQkFBc0IsK0JBQStCLHVCQUF1QixHQUFHLDZDQUE2QywwQkFBMEIsZUFBZSxrQkFBa0IsOEJBQThCLGlCQUFpQix1QkFBdUIsa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsNkJBQTZCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLHNCQUFzQixHQUFHLGlEQUFpRCxlQUFlLGtCQUFrQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLE9BQU8sNEJBQTRCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLHNCQUFzQixPQUFPLHdEQUF3RCwwQkFBMEIsb0JBQW9CLEdBQUcsNkNBQTZDLGVBQWUsa0JBQWtCLDhCQUE4QixpQkFBaUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRyx1QkFBdUIsb0JBQW9CLCtCQUErQix1QkFBdUIsc0JBQXNCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLCtCQUErQixvQkFBb0Isc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxpQkFBaUIsa0JBQWtCLCtEQUErRCxjQUFjLEdBQUcsUUFBUSxrQkFBa0IsOEJBQThCLHVCQUF1QixrQkFBa0IsY0FBYyx3Q0FBd0Msa0JBQWtCLGlCQUFpQixvQkFBb0IsR0FBRyxjQUFjLDhCQUE4Qiw4QkFBOEIsR0FBRyxVQUFVLDRCQUE0Qiw4QkFBOEIsZUFBZSx1QkFBdUIsc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QiwrQkFBK0Isb0JBQW9CLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixzQkFBc0IsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsT0FBTyx5QkFBeUIsMEJBQTBCLG9CQUFvQixzQkFBc0IsR0FBRyx3QkFBd0Isc0JBQXNCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLEdBQUcscUJBQXFCO0FBQy8yTDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3BPMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EMEQ7QUFDQTtBQUNEO0FBQ1Q7QUFDTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9EQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQztBQUNOO0FBQ0M7QUFDSjs7QUFFNUM7QUFDQSxFQUFFLG9FQUFVO0FBQ1osRUFBRSw4REFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBYTtBQUNqQixJQUFJLDhEQUFPO0FBQ1gsR0FBRztBQUNIO0FBQ0EsSUFBSSwrREFBYTtBQUNqQixJQUFJLDJEQUFJO0FBQ1IsR0FBRztBQUNIO0FBQ0EsSUFBSSwrREFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL3JlbmRlckRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9yZW5kZXJIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvcmVuZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CYXNrZXJ2dmlsbGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQmFza2VydnZpbGxlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKntcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDgwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnc2Fucy1zZXJpZic7XG59XG4jY29udGVudCBuYXZ7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZW50IG5hdiB1bHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IG5hdiB1bCBsaTpob3ZlciB7XG4gIGNvbG9yOiAjZjVmNWY0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgIFxuXG59XG4jY29udGVudCBuYXYgdWwgbGl7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxufVxuXG4jY29udGVudCBtYWlue1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZ2aWxsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjQ7XG4gIFxufVxuXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudHtcbiAgbWluLWhlaWdodDogOTAlO1xuICBtaW4td2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNHB4IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgXG59XG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAudGl0bGUsLm1lbnUtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5hYm91dC11cyB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuXG4uYWJvdXQtdXMgLmFib3V0LWhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5vcGVuaW5nLXRpbWVze1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG5cblxufVxuXG4ub3BlbmluZy10aW1lcy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgXG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5vcGVuaW5nLXRpbWVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5sb2NhdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGEyOWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDsgXG59XG5cbi5sb2NhdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lbnUtY29udGVudHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5waXp6YXMsLmRlc3NlcnRzLC5kcmlua3Mge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUtYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XG4gIGdhcDogMTVweDtcbn1cbi5jYXJke1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAyZnI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhOGEyOWU7XG59XG4ucHJpY2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBncmlkLXJvdy1zdGFydDogMTtcbn1cbi5jYXJkLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xufVxuLmNhcmQgLmltYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG59XG4uYWN0dWFsLWltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxufVxuXG5cbi5jYXJkIC5kZXNjcmlwdGlvbntcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xufVxuXG5cblxuI2NvbnRlbnQgZm9vdGVye1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCOztBQUU1QjtBQUNBO0VBQ0UscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztFQUNYLDBDQUEwQzs7QUFFNUM7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFROzs7QUFHVjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztBQUVwQjs7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7OztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZ2aWxsZTtcXG4gIHNyYzogdXJsKC4vQmFza2VydnZpbGxlLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDgwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdzYW5zLXNlcmlmJztcXG59XFxuI2NvbnRlbnQgbmF2e1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250ZW50IG5hdiB1bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgbmF2IHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjVmNWY0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICBcXG5cXG59XFxuI2NvbnRlbnQgbmF2IHVsIGxpe1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcbn1cXG5cXG4jY29udGVudCBtYWlue1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBmb250LWZhbWlseTogQmFza2VydnZpbGxlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY0O1xcbiAgXFxufVxcblxcbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50e1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgbWluLXdpZHRoOiA3MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA0cHggcmdiKDEzMywgMTMzLCAxMzMpO1xcbiAgXFxufVxcbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC50aXRsZSwubWVudS10aXRsZXtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5hYm91dC11cyB7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGEyOWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWJvdXQtdXMgLmFib3V0LWhlYWRpbmd7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAub3BlbmluZy10aW1lc3tcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcblxcblxcbn1cXG5cXG4ub3BlbmluZy10aW1lcy1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG59XFxuXFxuI2NvbnRlbnQgbWFpbiAuY2VudGVyLWNvbnRlbnQgLm9wZW5pbmctdGltZXMgdWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAubG9jYXRpb24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7IFxcbn1cXG5cXG4ubG9jYXRpb24taGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnBpenphcywuZGVzc2VydHMsLmRyaW5rcyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudS1hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LDFmcikpO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uY2FyZHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMmZyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2E4YTI5ZTtcXG59XFxuLnByaWNlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gIHdpZHRoOiAxMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG59XFxuLmNhcmQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG4uY2FyZCAuaW1hZ2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXJvdy1zdGFydDogMztcXG59XFxuLmFjdHVhbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgXFxufVxcblxcblxcbi5jYXJkIC5kZXNjcmlwdGlvbntcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG5cXG5cXG4jY29udGVudCBmb290ZXJ7XFxuICBncmlkLXJvdy1zdGFydDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGEyOWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2xlYXJDb250ZW50cygpe1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyLWNvbnRlbnRcIik7XG4gIHdoaWxlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICBjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfVxufVxuZXhwb3J0e2NsZWFyQ29udGVudHN9OyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuZnVuY3Rpb24gZ2V0RGVmYXVsdCgpe1xuICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgTUFzZWN1cml0eSAyMDIzXCI7XG4gIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxpQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGxpTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBsaUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgbGlIb21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgbGlNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgbGlDb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKVxuICBjb25zdCBjZW50ZXJlZENvbnRlbnQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VudGVyZWRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXItY29udGVudFwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5hdkVsZW1lbnQpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQpXG4gIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQodWxFbGVtZW50KTtcbiAgdWxFbGVtZW50LmFwcGVuZENoaWxkKGxpSG9tZSk7XG4gIHVsRWxlbWVudC5hcHBlbmRDaGlsZChsaU1lbnUpO1xuICB1bEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlDb250YWN0KTtcbiAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VudGVyZWRDb250ZW50KTtcbn1cblxuZXhwb3J0e2dldERlZmF1bHR9O1xuXG4iLCJmdW5jdGlvbiBnZXRIb21lKCl7XG4gIGNvbnN0IGNlbnRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlci1jb250ZW50XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVGFzdHkgUGl6emFcIjtcbiAgLy8gQWJvdXQgc2VjdGlvblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dC11c1wiKTtcbiAgY29uc3QgYWJvdXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1oZWFkaW5nXCIpO1xuICBhYm91dEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XG4gIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0UGFyYS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBUYXN0eSBQaXp6YSwgd2hlcmUgdGhlIGFydCBvZiBwaXp6YS1tYWtpbmcgY29tZXMgdG8gbGlmZSEgT3VyIHJlc3RhdXJhbnQgaXMgYSBjdWxpbmFyeSBoYXZlbiBmb3IgcGl6emEgbG92ZXJzLCBvZmZlcmluZyBhIGRlbGVjdGFibGUgYXJyYXkgb2YgaGFuZGNyYWZ0ZWQgcGl6emFzIHRoYXQgYXJlIGJvdW5kIHRvIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMuXFxuV2l0aCBhIGZvY3VzIG9uIGhpZ2gtcXVhbGl0eSwgZnJlc2ggaW5ncmVkaWVudHMsIGFuZCBhIHBhc3Npb24gZm9yIHBlcmZlY3RpbmcgdGhlIHBpenphIGV4cGVyaWVuY2UsIHdlIGludml0ZSB5b3UgdG8gc2F2b3IgZWFjaCBiaXRlIGFuZCBqb2luIHVzIG9uIGEgZGVsaWdodGZ1bCBnYXN0cm9ub21pYyBqb3VybmV5LlxcbiBFeHBsb3JlIG91ciBkaXZlcnNlIG1lbnUgYW5kIGRpc2NvdmVyIHRoZSBmbGF2b3JzIHRoYXQgbWFrZSBvdXIgcGl6emFzIGEgdHJ1ZSBzZW5zYXRpb24uXFxuIFdlIGNhbid0IHdhaXQgdG8gc2VydmUgeW91IVwiO1xuICAvLyBPcGVuaW5nLVRpbWVzIHNlY3Rpb25cbiAgY29uc3Qgb3BlbmluZ1RpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3BlbmluZ1RpbWVzLmNsYXNzTGlzdC5hZGQoXCJvcGVuaW5nLXRpbWVzXCIpO1xuICBjb25zdCBvcGVuaW5nSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wZW5pbmdIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuaW5nLXRpbWVzLWhlYWRpbmdcIik7XG4gIG9wZW5pbmdIZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBjb25zdCBvcGVuaW5nVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGxpTW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaU1vbi50ZXh0Q29udGVudD0gXCJNb25kYXk6IDEyYW0gdG8gOXBtXCJcbiAgY29uc3QgbGlUdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpVHVlLnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiAxMmFtIHRvIDlwbVwiO1xuICBjb25zdCBsaVdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlXZWQudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogMTJhbSB0byA5cG1cIlxuICBjb25zdCBsaVRodSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlUaHUudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiAxMmFtIHRvIDlwbVwiO1xuICBjb25zdCBsaUZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlGcmkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogMTJhbSB0byA5cG1cIjtcbiAgY29uc3QgbGlTYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpU2F0LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogMTJhbSB0byA5cG1cIjtcbiAgY29uc3QgbGlTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpU3VuLnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDEyYW0gdG8gOXBtXCJcbiAgLy9Mb2NhdGlvbiBzZWN0aW9uXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBjb25zdCBsb2NhdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWhlYWRpbmdcIik7XG4gIGxvY2F0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgY29uc3QgYWRkcmVzc1BhcnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzUGFydE9uZS50ZXh0Q29udGVudCA9IFwiMTIzIE1haW4gU3RyZWV0XCI7XG4gIGNvbnN0IGFkZHJlc3NQYXJ0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkcmVzc1BhcnRUd28udGV4dENvbnRlbnQgPSBcImZha2V0b3duLCBVU0EgMTIzNDVcIjtcbiAgLy9BcHBlbmRpbmcgRE9NIGVsZW1lbnRzXG4gIGNlbnRlckNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjZW50ZXJDb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY2VudGVyQ29udGVudC5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMpO1xuICBjZW50ZXJDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcbiAgb3BlbmluZ1RpbWVzLmFwcGVuZENoaWxkKG9wZW5pbmdIZWFkaW5nKTtcbiAgb3BlbmluZ1RpbWVzLmFwcGVuZENoaWxkKG9wZW5pbmdVbCk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaU1vbik7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaVR1ZSk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaVdlZCk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaVRodSk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaUZyaSk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaVNhdCk7XG4gIG9wZW5pbmdVbC5hcHBlbmRDaGlsZChsaVN1bik7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGluZyk7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NQYXJ0T25lKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc1BhcnRUd28pO1xufTtcbmV4cG9ydHtnZXRIb21lfTsiLCJpbXBvcnQgcGVwcGVyb25pSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9wZXBwZXJvbmlQaXp6YS5wbmdcIjtcbmltcG9ydCB0YW5kb29yaUltYWdlIGZyb20gXCIuLi9pbWFnZXMvVGFuZG9vcmlDaGlja2VuLnBuZ1wiO1xuaW1wb3J0IGRvbm5lcktlYmFiSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9kb25uZXJLZWJhYi5wbmdcIjtcbmltcG9ydCBiZWVmSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iZWVmUGl6emEucG5nXCI7XG5pbXBvcnQgdmVnZXRhcmlhbkltYWdlIGZyb20gXCIuLi9pbWFnZXMvdmVnYW5QaXp6YS5wbmdcIjtcbmZ1bmN0aW9uIG1lbnUoKXtcbiAgY29uc3QgYWxsQ2VudGVyZWRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXItY29udGVudFwiKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250ZW50XCIpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAvLyBNYWluIERpc2hlc1xuICBjb25zdCBwaXp6YVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaXp6YVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInBpenphc1wiKTtcbiAgY29uc3QgcGl6emFTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaXp6YVNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiTWFpbiBEaXNoZXNcIlxuICBjb25zdCBockVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIC8vIFBlcHBlcm9uaSBBcnRpY2xlXG4gIGNvbnN0IHBlcHBlcm9uaU1lbnVBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pTWVudUFydGljbGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJ0aWNsZVwiKTtcbiAgY29uc3QgcGVwcGVyb25pQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBlcHBlcm9uaUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvbnN0IHBlcHBlcm9uaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBwZXBwZXJvbmlQcmljZS50ZXh0Q29udGVudCA9IFwiwqMxM1wiO1xuICBjb25zdCBwZXBwZXJvbmlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICBwZXBwZXJvbmlIZWFkaW5nLnRleHRDb250ZW50ID0gJ1BlcHBlcm9uaSBQaXp6YSAxMiBcImluY2hcIic7XG4gIGNvbnN0IHBlcHBlcm9uaUNvbnRhaW5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBwZXBwZXJvbmlBY3R1YWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBlcHBlcm9uaUFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3R1YWwtaW1hZ2VcIik7XG4gIHBlcHBlcm9uaUFjdHVhbEltYWdlLnNyYyA9IHBlcHBlcm9uaUltYWdlO1xuICBjb25zdCBwZXBwZXJvbmlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBlcHBlcm9uaURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgcGVwcGVyb25pRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkVhdCBvdXIgZGVsaWNvdXMgUGVwcGVyb25pIFBpenphIGZvciBvbmx5IGF0IHRoZSBwcmljZSBvZiDCozEzXCI7XG4gIC8vIFRhbmRvb3JpQ2hpY2tlbiBhcnRpY2xlXG4gIGNvbnN0IHRhbmRvb3JpTWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YW5kb29yaU1lbnVBcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWFydGljbGVcIik7XG4gIGNvbnN0IHRhbmRvb3JpQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhbmRvb3JpQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3QgdGFuZG9vcmlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhbmRvb3JpUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICB0YW5kb29yaVByaWNlLnRleHRDb250ZW50ID0gXCLCozEzXCI7XG4gIGNvbnN0IHRhbmRvb3JpSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhbmRvb3JpSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICB0YW5kb29yaUhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGFuZG9vcmkgQ2hpY2tlbiBQaXp6YSAxMiBcImluY2hcIic7XG4gIGNvbnN0IHRhbmRvb3JpQ29udGFpbmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YW5kb29yaUNvbnRhaW5lckltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgY29uc3QgdGFuZG9vcmlBY3R1YWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRhbmRvb3JpQWN0dWFsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdHVhbC1pbWFnZVwiKTtcbiAgdGFuZG9vcmlBY3R1YWxJbWFnZS5zcmMgPSB0YW5kb29yaUltYWdlO1xuICBjb25zdCB0YW5kb29yaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFuZG9vcmlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIHRhbmRvb3JpRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkVhdCBvdXIgZGVsaWNvdXMgVGFuZG9vcmkgQ2hpY2tlbiBQaXp6YSBmb3Igb25seSBhdCB0aGUgcHJpY2Ugb2YgwqMxM1wiO1xuICAvL0Rvbm5lciBLZWJhYiBBcnRpY2xlXG4gIGNvbnN0IGRvbm5lcktlYmFiTWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb25uZXJLZWJhYk1lbnVBcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWFydGljbGVcIik7XG4gIGNvbnN0IGRvbm5lcktlYmFiQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3QgZG9ubmVyS2ViYWJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBkb25uZXJLZWJhYlByaWNlLnRleHRDb250ZW50ID0gXCLCozEzXCI7XG4gIGNvbnN0IGRvbm5lcktlYmFiSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICBkb25uZXJLZWJhYkhlYWRpbmcudGV4dENvbnRlbnQgPSAnRG9ubmVyIEtlYmFiIFBpenphIDEyIFwiaW5jaFwiJztcbiAgY29uc3QgZG9ubmVyS2ViYWJDb250YWluZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBkb25uZXJLZWJhYkFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZG9ubmVyS2ViYWJBY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0dWFsLWltYWdlXCIpO1xuICBkb25uZXJLZWJhYkFjdHVhbEltYWdlLnNyYyA9IGRvbm5lcktlYmFiSW1hZ2U7XG4gIGNvbnN0IGRvbm5lcktlYmFiRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb25uZXJLZWJhYkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZG9ubmVyS2ViYWJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRWF0IG91ciBkZWxpY291cyBEb25uZXIgS2ViYWIgUGl6emEgZm9yIG9ubHkgYXQgdGhlIHByaWNlIG9mIMKjMTNcIjtcbiAgLy8gQmVlZiBQaXp6YSBBcnRpY2xlXG4gIGNvbnN0IGJlZWZNZW51QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJlZWZNZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCBiZWVmQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJlZWZDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCBiZWVmUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZWVmUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBiZWVmUHJpY2UudGV4dENvbnRlbnQgPSBcIsKjMTNcIjtcbiAgY29uc3QgYmVlZkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZWVmSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICBiZWVmSGVhZGluZy50ZXh0Q29udGVudCA9ICdCZWVmIFBpenphIDEyIFwiaW5jaFwiJztcbiAgY29uc3QgYmVlZkNvbnRhaW5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmVlZkNvbnRhaW5lckltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgY29uc3QgYmVlZkFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYmVlZkFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3R1YWwtaW1hZ2VcIik7XG4gIGJlZWZBY3R1YWxJbWFnZS5zcmMgPSBiZWVmSW1hZ2U7XG4gIGNvbnN0IGJlZWZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJlZWZEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGJlZWZEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRWF0IG91ciBkZWxpY291cyBCZWVmIFBpenphIGZvciBvbmx5IGF0IHRoZSBwcmljZSBvZiDCozEzXCI7XG4gIC8vVmVnZXRhcmlhbiBBcnRpY2xlXG4gIGNvbnN0IHZlZ2V0YXJpYW5NZW51QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlZ2V0YXJpYW5NZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCB2ZWdldGFyaWFuQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlZ2V0YXJpYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCB2ZWdldGFyaWFuUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZWdldGFyaWFuUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICB2ZWdldGFyaWFuUHJpY2UudGV4dENvbnRlbnQgPSBcIsKjMTNcIjtcbiAgY29uc3QgdmVnZXRhcmlhbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZWdldGFyaWFuSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICB2ZWdldGFyaWFuSGVhZGluZy50ZXh0Q29udGVudCA9ICdWZWdldGFyaWFuIFBpenphIDEyIFwiaW5jaFwiJztcbiAgY29uc3QgdmVnZXRhcmlhbkNvbnRhaW5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVnZXRhcmlhbkNvbnRhaW5lckltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgY29uc3QgdmVnZXRhcmlhbkFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdmVnZXRhcmlhbkFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3R1YWwtaW1hZ2VcIik7XG4gIHZlZ2V0YXJpYW5BY3R1YWxJbWFnZS5zcmMgPSB2ZWdldGFyaWFuSW1hZ2U7XG4gIGNvbnN0IHZlZ2V0YXJpYW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlZ2V0YXJpYW5EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIHZlZ2V0YXJpYW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRWF0IG91ciBkZWxpY291cyBWZWdldGFyaWFuIFBpenphIGZvciBvbmx5IGF0IHRoZSBwcmljZSBvZiDCozEzXCI7XG4gIC8vIEFkZCBET00gZWxlbWVudHNcbiAgYWxsQ2VudGVyZWRDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emFTZWN0aW9uKTtcbiAgcGl6emFTZWN0aW9uLmFwcGVuZENoaWxkKHBpenphU2VjdGlvblRpdGxlKTtcbiAgcGl6emFTZWN0aW9uLmFwcGVuZENoaWxkKGhyRWxlbWVudCk7XG4gIC8vQWRkaW5nIFBlcHBlcm9uaSBQaXp6YSB0byBET01cbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocGVwcGVyb25pTWVudUFydGljbGUpO1xuICBwZXBwZXJvbmlNZW51QXJ0aWNsZS5hcHBlbmRDaGlsZChwZXBwZXJvbmlDYXJkKTtcbiAgcGVwcGVyb25pQ2FyZC5hcHBlbmRDaGlsZChwZXBwZXJvbmlQcmljZSk7XG4gIHBlcHBlcm9uaUNhcmQuYXBwZW5kQ2hpbGQocGVwcGVyb25pSGVhZGluZyk7XG4gIHBlcHBlcm9uaUNhcmQuYXBwZW5kQ2hpbGQocGVwcGVyb25pQ29udGFpbmVySW1hZ2UpO1xuICBwZXBwZXJvbmlDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChwZXBwZXJvbmlBY3R1YWxJbWFnZSk7XG4gIHBlcHBlcm9uaUNhcmQuYXBwZW5kQ2hpbGQocGVwcGVyb25pRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBUYW5kb29yaSBDaGlja2VuIFBpenphIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZCh0YW5kb29yaU1lbnVBcnRpY2xlKTtcbiAgdGFuZG9vcmlNZW51QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YW5kb29yaUNhcmQpO1xuICB0YW5kb29yaUNhcmQuYXBwZW5kQ2hpbGQodGFuZG9vcmlQcmljZSk7XG4gIHRhbmRvb3JpQ2FyZC5hcHBlbmRDaGlsZCh0YW5kb29yaUhlYWRpbmcpO1xuICB0YW5kb29yaUNhcmQuYXBwZW5kQ2hpbGQodGFuZG9vcmlDb250YWluZXJJbWFnZSk7XG4gIHRhbmRvb3JpQ29udGFpbmVySW1hZ2UuYXBwZW5kQ2hpbGQodGFuZG9vcmlBY3R1YWxJbWFnZSk7XG4gIHRhbmRvb3JpQ2FyZC5hcHBlbmRDaGlsZCh0YW5kb29yaURlc2NyaXB0aW9uKTtcbiAgLy9BZGRpbmcgRG9ubmVyIEtlYmFiIFBpenphIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkb25uZXJLZWJhYk1lbnVBcnRpY2xlKTtcbiAgZG9ubmVyS2ViYWJNZW51QXJ0aWNsZS5hcHBlbmRDaGlsZChkb25uZXJLZWJhYkNhcmQpO1xuICBkb25uZXJLZWJhYkNhcmQuYXBwZW5kQ2hpbGQoZG9ubmVyS2ViYWJQcmljZSk7XG4gIGRvbm5lcktlYmFiQ2FyZC5hcHBlbmRDaGlsZChkb25uZXJLZWJhYkhlYWRpbmcpO1xuICBkb25uZXJLZWJhYkNhcmQuYXBwZW5kQ2hpbGQoZG9ubmVyS2ViYWJDb250YWluZXJJbWFnZSk7XG4gIGRvbm5lcktlYmFiQ29udGFpbmVySW1hZ2UuYXBwZW5kQ2hpbGQoZG9ubmVyS2ViYWJBY3R1YWxJbWFnZSk7XG4gIGRvbm5lcktlYmFiQ2FyZC5hcHBlbmRDaGlsZChkb25uZXJLZWJhYkRlc2NyaXB0aW9uKTtcbiAgLy9BZGRpbmcgQmVlZiBQaXp6YSB0byBET01cbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmVlZk1lbnVBcnRpY2xlKTtcbiAgYmVlZk1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKGJlZWZDYXJkKTtcbiAgYmVlZkNhcmQuYXBwZW5kQ2hpbGQoYmVlZlByaWNlKTtcbiAgYmVlZkNhcmQuYXBwZW5kQ2hpbGQoYmVlZkhlYWRpbmcpO1xuICBiZWVmQ2FyZC5hcHBlbmRDaGlsZChiZWVmQ29udGFpbmVySW1hZ2UpO1xuICBiZWVmQ29udGFpbmVySW1hZ2UuYXBwZW5kQ2hpbGQoYmVlZkFjdHVhbEltYWdlKTtcbiAgYmVlZkNhcmQuYXBwZW5kQ2hpbGQoYmVlZkRlc2NyaXB0aW9uKTtcbiAgLy9BZGRpbmcgVmVnZXRhcmlhbiBQaXp6YSB0byBET01cbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQodmVnZXRhcmlhbk1lbnVBcnRpY2xlKTtcbiAgdmVnZXRhcmlhbk1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKHZlZ2V0YXJpYW5DYXJkKTtcbiAgdmVnZXRhcmlhbkNhcmQuYXBwZW5kQ2hpbGQodmVnZXRhcmlhblByaWNlKTtcbiAgdmVnZXRhcmlhbkNhcmQuYXBwZW5kQ2hpbGQodmVnZXRhcmlhbkhlYWRpbmcpO1xuICB2ZWdldGFyaWFuQ2FyZC5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuQ29udGFpbmVySW1hZ2UpO1xuICB2ZWdldGFyaWFuQ29udGFpbmVySW1hZ2UuYXBwZW5kQ2hpbGQodmVnZXRhcmlhbkFjdHVhbEltYWdlKTtcbiAgdmVnZXRhcmlhbkNhcmQuYXBwZW5kQ2hpbGQodmVnZXRhcmlhbkRlc2NyaXB0aW9uKTtcbn1cbmV4cG9ydCB7bWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtnZXREZWZhdWx0fSBmcm9tIFwiLi9mdW5jdGlvbnMvcmVuZGVyRGVmYXVsdFwiO1xuaW1wb3J0IHtnZXRIb21lfSBmcm9tIFwiLi9mdW5jdGlvbnMvcmVuZGVySG9tZVwiO1xuaW1wb3J0IHtjbGVhckNvbnRlbnRzfSBmcm9tIFwiLi9mdW5jdGlvbnMvY2xlYXJcIjtcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vZnVuY3Rpb25zL3JlbmRlck1lbnVcIjtcblxuKGZ1bmN0aW9uIGRlcGxveSgpe1xuICBnZXREZWZhdWx0KCk7XG4gIGdldEhvbWUoKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKVxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgZ2V0SG9tZSgpO1xuICB9KTtcbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIG1lbnUoKTtcbiAgfSk7XG4gIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgfSk7XG4gIFxufSkoKTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9