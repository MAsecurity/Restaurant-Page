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
#content main .center-content .title,.menu-title,.contact-title{
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

.contact-profile{
  width: 50%;
  padding: 20px;
  background-color: #a8a29e;
  border: none;
  border-radius: 5px;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px; 
}

.info-profile{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.info-profile .name{
  font-weight: bold;
  text-decoration: underline;
}
.info-profile ul {
  margin-left: 10px;
  list-style-type: none;
}

.profile {
  display: flex;
  justify-content: end;
}
.profile-image{
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n@font-face {\n  font-family: Baskervville;\n  src: url(./Baskervville-Regular.ttf);\n}\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 80px 1fr 80px;\n  grid-template-columns: 1fr;\n  font-family: Roboto, 'sans-serif';\n}\n#content nav{\n  grid-row-start: 1;\n  background-color: #a8a29e;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n#content nav ul{\n  display: flex;\n  gap: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#content nav ul li:hover {\n  color: #f5f5f4;\n  text-decoration: underline;  \n\n}\n#content nav ul li{\n  list-style-type: none;\n\n}\n\n#content main{\n  grid-row-start: 2;\n  font-family: Baskervville;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: #f5f5f4;\n  \n}\n\n#content main .center-content{\n  min-height: 90%;\n  min-width: 70%;\n  border-radius: 5px;\n  border: none;\n  padding: 10px;\n  background-color: #d6d3d1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  z-index: 10;\n  box-shadow: 0px 3px 4px rgb(133, 133, 133);\n  \n}\n#content main .center-content .title,.menu-title,.contact-title{\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-align: center;\n}\n\n#content main .center-content .about-us {\n  word-break: break-all;\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.about-us .about-heading{\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n}\n\n#content main .center-content .opening-times{\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n\n\n}\n\n.opening-times-heading {\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n  \n}\n\n#content main .center-content .opening-times ul li {\n  list-style-type: none;\n  font-size: 15px;\n}\n\n#content main .center-content .location {\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px; \n}\n\n.location-heading {\n  font-size: 20px;\n  text-decoration: underline;\n  text-align: center;\n  font-weight: bold;\n}\n\n.menu-content{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pizzas,.desserts,.drinks {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-align: center;\n}\n.menu-article {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n  gap: 15px;\n}\n.card{\n  height: 200px;\n  background-color: #a8a29e;\n  border-radius: 7px;\n  display: grid;\n  gap: 10px;\n  grid-template-rows: 1fr 1fr 1fr 2fr;\n  padding: 10px;\n  padding: 3px;\n  cursor: pointer;\n}\n.card:hover{\n  background-color: #d6d3d1;\n  border: 2px solid #a8a29e;\n}\n.price {\n  grid-row-start: 1;\n}\n.card-heading {\n  text-align: center;\n  text-decoration: underline;\n  font-size: 15px;\n  grid-row-start: 2;\n}\n.card .image{\n  display: flex;\n  justify-content: center;\n  grid-row-start: 3;\n}\n.actual-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  \n}\n\n\n.card .description{\n  word-break: break-all;\n  font-size: 10px;\n  grid-row-start: 4;\n}\n\n.contact-profile{\n  width: 50%;\n  padding: 20px;\n  background-color: #a8a29e;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 5px; \n}\n\n.info-profile{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.info-profile .name{\n  font-weight: bold;\n  text-decoration: underline;\n}\n.info-profile ul {\n  margin-left: 10px;\n  list-style-type: none;\n}\n\n.profile {\n  display: flex;\n  justify-content: end;\n}\n.profile-image{\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n\n#content footer{\n  grid-row-start: 3;\n  background-color: #a8a29e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/functions/renderContactUs.js":
/*!******************************************!*\
  !*** ./src/functions/renderContactUs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactUs: () => (/* binding */ contactUs)
/* harmony export */ });
/* harmony import */ var _images_ceo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/ceo.png */ "./src/images/ceo.png");
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chef.png */ "./src/images/chef.png");
/* harmony import */ var _images_waiter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/waiter.png */ "./src/images/waiter.png");



function contactUs(){
  const theCenteredContent = document.querySelector(".center-content");
  const contactTitle = document.createElement("div");
  contactTitle.textContent = "Contact us";
  contactTitle.classList.add("contact-title");
  // Adding CEO details
  const ceoContactProfile = document.createElement("div");
  ceoContactProfile.classList.add("contact-profile");
  const ceoInfo = document.createElement("div");
  ceoInfo.classList.add("info-profile");
  const ceoName = document.createElement("div");
  ceoName.classList.add("name");
  ceoName.textContent = "Peter Anderson";
  const ceoUl = document.createElement("ul");
  const ceoLiOne = document.createElement("li");
  ceoLiOne.textContent = "CEO";
  const ceoLiTwo = document.createElement("li");
  ceoLiTwo.textContent = "notReal1@restaurant.com";
  const ceoLiThree = document.createElement("li");
  ceoLiThree.textContent = "222-333-4444";
  const ceoContainterProfileImage = document.createElement("div");
  ceoContainterProfileImage.classList.add("profile");
  const ceoActualImage = document.createElement("img");
  ceoActualImage.classList.add("profile-image");
  ceoActualImage.src = _images_ceo_png__WEBPACK_IMPORTED_MODULE_0__;
  // Adding Chef details
  const chefContactProfile = document.createElement("div");
  chefContactProfile.classList.add("contact-profile");
  const chefInfo = document.createElement("div");
  chefInfo.classList.add("info-profile");
  const chefName = document.createElement("div");
  chefName.classList.add("name");
  chefName.textContent = "Ibrahim Yusef";
  const chefUl = document.createElement("ul");
  const chefLiOne = document.createElement("li");
  chefLiOne.textContent = "Chef";
  const chefLiTwo = document.createElement("li");
  chefLiTwo.textContent = "notReallyReal2@restaurant.com";
  const chefLiThree = document.createElement("li");
  chefLiThree.textContent = "123-343-4644";
  const chefContainterProfileImage = document.createElement("div");
  chefContainterProfileImage.classList.add("profile");
  const chefActualImage = document.createElement("img");
  chefActualImage.classList.add("profile-image");
  chefActualImage.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_1__;
  // Adding waiter details
  const waiterContactProfile = document.createElement("div");
  waiterContactProfile.classList.add("contact-profile");
  const waiterInfo = document.createElement("div");
  waiterInfo.classList.add("info-profile");
  const waiterName = document.createElement("div");
  waiterName.classList.add("name");
  waiterName.textContent = "Alex smith";
  const waiterUl = document.createElement("ul");
  const waiterLiOne = document.createElement("li");
  waiterLiOne.textContent = "Waiter";
  const waiterLiTwo = document.createElement("li");
  waiterLiTwo.textContent = "notReallyRealAgain3@restaurant.com";
  const waiterLiThree = document.createElement("li");
  waiterLiThree.textContent = "111-377-4678";
  const waiterContainterProfileImage = document.createElement("div");
  waiterContainterProfileImage.classList.add("profile");
  const waiterActualImage = document.createElement("img");
  waiterActualImage.classList.add("profile-image");
  waiterActualImage.src = _images_waiter_png__WEBPACK_IMPORTED_MODULE_2__;
  // Adding to the DOM
  theCenteredContent.appendChild(contactTitle);
  // Add CEO section to DOM
  theCenteredContent.appendChild(ceoContactProfile);
  ceoContactProfile.appendChild(ceoInfo);
  ceoInfo.appendChild(ceoName);
  ceoInfo.appendChild(ceoUl);
  ceoUl.appendChild(ceoLiOne);
  ceoUl.appendChild(ceoLiTwo);
  ceoUl.appendChild(ceoLiThree);
  ceoContactProfile.appendChild(ceoContainterProfileImage);
  ceoContainterProfileImage.appendChild(ceoActualImage);
  // Add Chef section to DOM
  theCenteredContent.appendChild(chefContactProfile);
  chefContactProfile.appendChild(chefInfo);
  chefInfo.appendChild(chefName);
  chefInfo.appendChild(chefUl);
  chefUl.appendChild(chefLiOne);
  chefUl.appendChild(chefLiTwo);
  chefUl.appendChild(chefLiThree);
  chefContactProfile.appendChild(chefContainterProfileImage);
  chefContainterProfileImage.appendChild(chefActualImage);
  // Add Waiter section to DOM
  theCenteredContent.appendChild(waiterContactProfile);
  waiterContactProfile.appendChild(waiterInfo);
  waiterInfo.appendChild(waiterName);
  waiterInfo.appendChild(waiterUl);
  waiterUl.appendChild(waiterLiOne);
  waiterUl.appendChild(waiterLiTwo);
  waiterUl.appendChild(waiterLiThree);
  waiterContactProfile.appendChild(waiterContainterProfileImage);
  waiterContainterProfileImage.appendChild(waiterActualImage);
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
/* harmony import */ var _images_strawberryCheeseCake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/strawberryCheeseCake.png */ "./src/images/strawberryCheeseCake.png");
/* harmony import */ var _images_Chocolate_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Chocolate.png */ "./src/images/Chocolate.png");
/* harmony import */ var _images_sevenUp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/sevenUp.png */ "./src/images/sevenUp.png");
/* harmony import */ var _images_Coco_cola_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Coco-cola.png */ "./src/images/Coco-cola.png");









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
  //Adding Desserts section
  const dessertsSection = document.createElement("div");
  dessertsSection.classList.add("desserts");
  const dessertsSectionTitle = document.createElement("div");
  dessertsSectionTitle.textContent = "Desserts";
  // Strawberry Cheesecake Article
  const strawberryMenuArticle = document.createElement("div");
  strawberryMenuArticle.classList.add("menu-article");
  const strawberryCard = document.createElement("div");
  strawberryCard.classList.add("card");
  const strawberryPrice = document.createElement("div");
  strawberryPrice.classList.add("price");
  strawberryPrice.textContent = "£4";
  const strawberryHeading = document.createElement("div");
  strawberryHeading.classList.add("card-heading");
  strawberryHeading.textContent = 'Strawberry Cheesecake';
  const strawberryContainerImage = document.createElement("div");
  strawberryContainerImage.classList.add("image");
  const strawberryActualImage = document.createElement("img");
  strawberryActualImage.classList.add("actual-image");
  strawberryActualImage.src = _images_strawberryCheeseCake_png__WEBPACK_IMPORTED_MODULE_5__;
  const strawberryDescription = document.createElement("div");
  strawberryDescription.classList.add("description");
  strawberryDescription.textContent = "Eat our delicous Strawberry Cheesecake for only at the price of £4";
  // Chocolate cake Article
  const chocolateMenuArticle = document.createElement("div");
  chocolateMenuArticle.classList.add("menu-article");
  const chocolateCard = document.createElement("div");
  chocolateCard.classList.add("card");
  const chocolatePrice = document.createElement("div");
  chocolatePrice.classList.add("price");
  chocolatePrice.textContent = "£4";
  const chocolateHeading = document.createElement("div");
  chocolateHeading.classList.add("card-heading");
  chocolateHeading.textContent = 'Chocolate cake';
  const chocolateContainerImage = document.createElement("div");
  chocolateContainerImage.classList.add("image");
  const chocolateActualImage = document.createElement("img");
  chocolateActualImage.classList.add("actual-image");
  chocolateActualImage.src = _images_Chocolate_png__WEBPACK_IMPORTED_MODULE_6__;
  const chocolateDescription = document.createElement("div");
  chocolateDescription.classList.add("description");
  chocolateDescription.textContent = "Eat our delicous Chocolate cake for only at the price of £4";
  // Add Drinks section
  const drinksSection = document.createElement("div");
  drinksSection.classList.add("drinks");
  const drinksSectionTitle = document.createElement("div");
  drinksSectionTitle.textContent = "Drinks";
  // Add 7Up article
  const sevenUpMenuArticle = document.createElement("div");
  sevenUpMenuArticle.classList.add("menu-article");
  const sevenUpCard = document.createElement("div");
  sevenUpCard.classList.add("card");
  const sevenUpPrice = document.createElement("div");
  sevenUpPrice.classList.add("price");
  sevenUpPrice.textContent = "£1";
  const sevenUpHeading = document.createElement("div");
  sevenUpHeading.classList.add("card-heading");
  sevenUpHeading.textContent = '7up';
  const sevenUpContainerImage = document.createElement("div");
  sevenUpContainerImage.classList.add("image");
  const sevenUpActualImage = document.createElement("img");
  sevenUpActualImage.classList.add("actual-image");
  sevenUpActualImage.src = _images_sevenUp_png__WEBPACK_IMPORTED_MODULE_7__;
  const sevenUpDescription = document.createElement("div");
  sevenUpDescription.classList.add("description");
  sevenUpDescription.textContent = "Want a drink with your meal?, have some 7up.";
  // Adding Coco-cola article
  const cocoColaMenuArticle = document.createElement("div");
  cocoColaMenuArticle.classList.add("menu-article");
  const cocoColaCard = document.createElement("div");
  cocoColaCard.classList.add("card");
  const cocoColaPrice = document.createElement("div");
  cocoColaPrice.classList.add("price");
  cocoColaPrice.textContent = "£1";
  const cocoColaHeading = document.createElement("div");
  cocoColaHeading.classList.add("card-heading");
  cocoColaHeading.textContent = 'Coco-cola';
  const cocoColaContainerImage = document.createElement("div");
  cocoColaContainerImage.classList.add("image");
  const cocoColaActualImage = document.createElement("img");
  cocoColaActualImage.classList.add("actual-image");
  cocoColaActualImage.src = _images_Coco_cola_png__WEBPACK_IMPORTED_MODULE_8__;
  const cocoColaDescription = document.createElement("div");
  cocoColaDescription.classList.add("description");
  cocoColaDescription.textContent = "Want a drink with your meal?, have some Coco-cola.";
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
  //Adding Desserts section
  menuContent.appendChild(dessertsSection);
  dessertsSection.appendChild(dessertsSectionTitle);
  dessertsSection.appendChild(hrElement);
  // Adding Strawberry Cheesecake to DOM
  menuContent.appendChild(strawberryMenuArticle);
  strawberryMenuArticle.appendChild(strawberryCard);
  strawberryCard.appendChild(strawberryPrice);
  strawberryCard.appendChild(strawberryHeading);
  strawberryCard.appendChild(strawberryContainerImage);
  strawberryContainerImage.appendChild(strawberryActualImage);
  strawberryCard.appendChild(strawberryDescription);
  // Adding Chocolate cake to DOM
  menuContent.appendChild(chocolateMenuArticle);
  chocolateMenuArticle.appendChild(chocolateCard);
  chocolateCard.appendChild(chocolatePrice);
  chocolateCard.appendChild(chocolateHeading);
  chocolateCard.appendChild(chocolateContainerImage);
  chocolateContainerImage.appendChild(chocolateActualImage);
  chocolateCard.appendChild(chocolateDescription);
  //Adding Drinks section
  menuContent.appendChild(drinksSection);
  drinksSection.appendChild(drinksSectionTitle);
  drinksSection.appendChild(hrElement);
  //Adding sevenUp to DOM
  menuContent.appendChild(sevenUpMenuArticle);
  sevenUpMenuArticle.appendChild(sevenUpCard);
  sevenUpCard.appendChild(sevenUpPrice);
  sevenUpCard.appendChild(sevenUpHeading);
  sevenUpCard.appendChild(sevenUpContainerImage);
  sevenUpContainerImage.appendChild(sevenUpActualImage);
  sevenUpCard.appendChild(sevenUpDescription);
  //Adding Coco-cola to DOM
  menuContent.appendChild(cocoColaMenuArticle);
  cocoColaMenuArticle.appendChild(cocoColaCard);
  cocoColaCard.appendChild(cocoColaPrice);
  cocoColaCard.appendChild(cocoColaHeading);
  cocoColaCard.appendChild(cocoColaContainerImage);
  cocoColaContainerImage.appendChild(cocoColaActualImage);
  cocoColaCard.appendChild(cocoColaDescription);


}


/***/ }),

/***/ "./src/Baskervville-Regular.ttf":
/*!**************************************!*\
  !*** ./src/Baskervville-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f901739d83410218a9d2.ttf";

/***/ }),

/***/ "./src/images/Chocolate.png":
/*!**********************************!*\
  !*** ./src/images/Chocolate.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56624ef83800954f5522.png";

/***/ }),

/***/ "./src/images/Coco-cola.png":
/*!**********************************!*\
  !*** ./src/images/Coco-cola.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a169ce4f4bb3d4a7f0f1.png";

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

/***/ "./src/images/ceo.png":
/*!****************************!*\
  !*** ./src/images/ceo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de31f1878338584bdf73.png";

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10c41208b6a3ce674110.png";

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

/***/ "./src/images/sevenUp.png":
/*!********************************!*\
  !*** ./src/images/sevenUp.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b938da23693804083a2a.png";

/***/ }),

/***/ "./src/images/strawberryCheeseCake.png":
/*!*********************************************!*\
  !*** ./src/images/strawberryCheeseCake.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52df106126e1e51cda24.png";

/***/ }),

/***/ "./src/images/veganPizza.png":
/*!***********************************!*\
  !*** ./src/images/veganPizza.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "149fe3c976f6f8e97cbb.png";

/***/ }),

/***/ "./src/images/waiter.png":
/*!*******************************!*\
  !*** ./src/images/waiter.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "287cf4ab1840054b9f1c.png";

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
/* harmony import */ var _functions_renderContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/renderContactUs */ "./src/functions/renderContactUs.js");







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
    (0,_functions_renderContactUs__WEBPACK_IMPORTED_MODULE_5__.contactUs)()
  });
  
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksZ0dBQWdHLElBQUksbUJBQW1CLGNBQWMsOEJBQThCLHlDQUF5QyxHQUFHLE1BQU0sY0FBYyxlQUFlLDJCQUEyQixHQUFHLGNBQWMsc0JBQXNCLGtCQUFrQixzQ0FBc0MsK0JBQStCLHNDQUFzQyxHQUFHLGVBQWUsc0JBQXNCLDhCQUE4QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLGNBQWMsb0JBQW9CLHNCQUFzQixvQkFBb0IsR0FBRyw4QkFBOEIsbUJBQW1CLGlDQUFpQyxLQUFLLHFCQUFxQiwwQkFBMEIsS0FBSyxrQkFBa0Isc0JBQXNCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsOEJBQThCLE9BQU8sa0NBQWtDLG9CQUFvQixtQkFBbUIsdUJBQXVCLGlCQUFpQixrQkFBa0IsOEJBQThCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsZ0JBQWdCLCtDQUErQyxPQUFPLGtFQUFrRSxvQkFBb0Isc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyw2Q0FBNkMsMEJBQTBCLGVBQWUsa0JBQWtCLDhCQUE4QixpQkFBaUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLDZCQUE2QixvQkFBb0IsK0JBQStCLHVCQUF1QixzQkFBc0IsR0FBRyxpREFBaUQsZUFBZSxrQkFBa0IsOEJBQThCLGlCQUFpQix1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsYUFBYSxPQUFPLDRCQUE0QixvQkFBb0IsK0JBQStCLHVCQUF1QixzQkFBc0IsT0FBTyx3REFBd0QsMEJBQTBCLG9CQUFvQixHQUFHLDZDQUE2QyxlQUFlLGtCQUFrQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLEdBQUcsdUJBQXVCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRywrQkFBK0Isb0JBQW9CLHNCQUFzQiwrQkFBK0IsdUJBQXVCLEdBQUcsaUJBQWlCLGtCQUFrQiwrREFBK0QsY0FBYyxHQUFHLFFBQVEsa0JBQWtCLDhCQUE4Qix1QkFBdUIsa0JBQWtCLGNBQWMsd0NBQXdDLGtCQUFrQixpQkFBaUIsb0JBQW9CLEdBQUcsY0FBYyw4QkFBOEIsOEJBQThCLEdBQUcsVUFBVSxzQkFBc0IsR0FBRyxpQkFBaUIsdUJBQXVCLCtCQUErQixvQkFBb0Isc0JBQXNCLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLHVCQUF1QixPQUFPLHlCQUF5QiwwQkFBMEIsb0JBQW9CLHNCQUFzQixHQUFHLHFCQUFxQixlQUFlLGtCQUFrQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0Isa0JBQWtCLG1DQUFtQyxjQUFjLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLHNCQUFzQixzQkFBc0IsK0JBQStCLEdBQUcsb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyxjQUFjLGtCQUFrQix5QkFBeUIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsR0FBRyxzQkFBc0Isc0JBQXNCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLEdBQUcscUJBQXFCO0FBQzNsTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ25RMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QztBQUNFO0FBQ0k7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRDQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDBEO0FBQ0E7QUFDRDtBQUNUO0FBQ087QUFDVTtBQUNaO0FBQ0o7QUFDRztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9EQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25TQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQztBQUNOO0FBQ0M7QUFDSjtBQUNVOztBQUV0RDtBQUNBLEVBQUUsb0VBQVU7QUFDWixFQUFFLDhEQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksOERBQU87QUFDWCxHQUFHO0FBQ0g7QUFDQSxJQUFJLCtEQUFhO0FBQ2pCLElBQUksMkRBQUk7QUFDUixHQUFHO0FBQ0g7QUFDQSxJQUFJLCtEQUFhO0FBQ2pCLElBQUkscUVBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL3JlbmRlckNvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL3JlbmRlckRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9yZW5kZXJIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvcmVuZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CYXNrZXJ2dmlsbGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQmFza2VydnZpbGxlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKntcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDgwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnc2Fucy1zZXJpZic7XG59XG4jY29udGVudCBuYXZ7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZW50IG5hdiB1bHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IG5hdiB1bCBsaTpob3ZlciB7XG4gIGNvbG9yOiAjZjVmNWY0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgIFxuXG59XG4jY29udGVudCBuYXYgdWwgbGl7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxufVxuXG4jY29udGVudCBtYWlue1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZ2aWxsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjQ7XG4gIFxufVxuXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudHtcbiAgbWluLWhlaWdodDogOTAlO1xuICBtaW4td2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNHB4IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgXG59XG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAudGl0bGUsLm1lbnUtdGl0bGUsLmNvbnRhY3QtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5hYm91dC11cyB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuXG4uYWJvdXQtdXMgLmFib3V0LWhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5vcGVuaW5nLXRpbWVze1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG5cblxufVxuXG4ub3BlbmluZy10aW1lcy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgXG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5vcGVuaW5nLXRpbWVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5sb2NhdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGEyOWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDsgXG59XG5cbi5sb2NhdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lbnUtY29udGVudHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5waXp6YXMsLmRlc3NlcnRzLC5kcmlua3Mge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUtYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XG4gIGdhcDogMTVweDtcbn1cbi5jYXJke1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAyZnI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhOGEyOWU7XG59XG4ucHJpY2Uge1xuICBncmlkLXJvdy1zdGFydDogMTtcbn1cbi5jYXJkLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xufVxuLmNhcmQgLmltYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG59XG4uYWN0dWFsLWltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxufVxuXG5cbi5jYXJkIC5kZXNjcmlwdGlvbntcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xufVxuXG4uY29udGFjdC1wcm9maWxle1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBnYXA6IDVweDsgXG59XG5cbi5pbmZvLXByb2ZpbGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuLmluZm8tcHJvZmlsZSAubmFtZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmluZm8tcHJvZmlsZSB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4ucHJvZmlsZS1pbWFnZXtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuI2NvbnRlbnQgZm9vdGVye1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW9DO0FB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QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBCYXNrZXJ2dmlsbGU7XFxuICBzcmM6IHVybCguL0Jhc2tlcnZ2aWxsZS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmciA4MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnc2Fucy1zZXJpZic7XFxufVxcbiNjb250ZW50IG5hdntcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGVudCBuYXYgdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IG5hdiB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogI2Y1ZjVmNDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgXFxuXFxufVxcbiNjb250ZW50IG5hdiB1bCBsaXtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXG59XFxuXFxuI2NvbnRlbnQgbWFpbntcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZ2aWxsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNDtcXG4gIFxcbn1cXG5cXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudHtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNHB4IHJnYigxMzMsIDEzMywgMTMzKTtcXG4gIFxcbn1cXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAudGl0bGUsLm1lbnUtdGl0bGUsLmNvbnRhY3QtdGl0bGV7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCBtYWluIC5jZW50ZXItY29udGVudCAuYWJvdXQtdXMge1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFib3V0LXVzIC5hYm91dC1oZWFkaW5ne1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRlbnQgbWFpbiAuY2VudGVyLWNvbnRlbnQgLm9wZW5pbmctdGltZXN7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGEyOWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG5cXG5cXG59XFxuXFxuLm9wZW5pbmctdGltZXMtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxufVxcblxcbiNjb250ZW50IG1haW4gLmNlbnRlci1jb250ZW50IC5vcGVuaW5nLXRpbWVzIHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI2NvbnRlbnQgbWFpbiAuY2VudGVyLWNvbnRlbnQgLmxvY2F0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4OyBcXG59XFxuXFxuLmxvY2F0aW9uLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lbnUtY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5waXp6YXMsLmRlc3NlcnRzLC5kcmlua3Mge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1lbnUtYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwxZnIpKTtcXG4gIGdhcDogMTVweDtcXG59XFxuLmNhcmR7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDJmcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhOGEyOWU7XFxufVxcbi5wcmljZSB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG59XFxuLmNhcmQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG4uY2FyZCAuaW1hZ2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXJvdy1zdGFydDogMztcXG59XFxuLmFjdHVhbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgXFxufVxcblxcblxcbi5jYXJkIC5kZXNjcmlwdGlvbntcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uY29udGFjdC1wcm9maWxle1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhMjllO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBnYXA6IDVweDsgXFxufVxcblxcbi5pbmZvLXByb2ZpbGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG4uaW5mby1wcm9maWxlIC5uYW1le1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmluZm8tcHJvZmlsZSB1bCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG4ucHJvZmlsZS1pbWFnZXtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcblxcbiNjb250ZW50IGZvb3RlcntcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTI5ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjbGVhckNvbnRlbnRzKCl7XG4gIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXItY29udGVudFwiKTtcbiAgd2hpbGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgIGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9XG59XG5leHBvcnR7Y2xlYXJDb250ZW50c307IiwiaW1wb3J0IGNlb0ltYWdlIGZyb20gXCIuLi9pbWFnZXMvY2VvLnBuZ1wiO1xuaW1wb3J0IGNoZWZJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2NoZWYucG5nXCI7XG5pbXBvcnQgd2FpdGVySW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy93YWl0ZXIucG5nXCI7XG5mdW5jdGlvbiBjb250YWN0VXMoKXtcbiAgY29uc3QgdGhlQ2VudGVyZWRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXItY29udGVudFwiKTtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10aXRsZVwiKTtcbiAgLy8gQWRkaW5nIENFTyBkZXRhaWxzXG4gIGNvbnN0IGNlb0NvbnRhY3RQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VvQ29udGFjdFByb2ZpbGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtcHJvZmlsZVwiKTtcbiAgY29uc3QgY2VvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNlb0luZm8uY2xhc3NMaXN0LmFkZChcImluZm8tcHJvZmlsZVwiKTtcbiAgY29uc3QgY2VvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNlb05hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gIGNlb05hbWUudGV4dENvbnRlbnQgPSBcIlBldGVyIEFuZGVyc29uXCI7XG4gIGNvbnN0IGNlb1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBjZW9MaU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY2VvTGlPbmUudGV4dENvbnRlbnQgPSBcIkNFT1wiO1xuICBjb25zdCBjZW9MaVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY2VvTGlUd28udGV4dENvbnRlbnQgPSBcIm5vdFJlYWwxQHJlc3RhdXJhbnQuY29tXCI7XG4gIGNvbnN0IGNlb0xpVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNlb0xpVGhyZWUudGV4dENvbnRlbnQgPSBcIjIyMi0zMzMtNDQ0NFwiO1xuICBjb25zdCBjZW9Db250YWludGVyUHJvZmlsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VvQ29udGFpbnRlclByb2ZpbGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcbiAgY29uc3QgY2VvQWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjZW9BY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1pbWFnZVwiKTtcbiAgY2VvQWN0dWFsSW1hZ2Uuc3JjID0gY2VvSW1hZ2U7XG4gIC8vIEFkZGluZyBDaGVmIGRldGFpbHNcbiAgY29uc3QgY2hlZkNvbnRhY3RQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlZkNvbnRhY3RQcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXByb2ZpbGVcIik7XG4gIGNvbnN0IGNoZWZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlZkluZm8uY2xhc3NMaXN0LmFkZChcImluZm8tcHJvZmlsZVwiKTtcbiAgY29uc3QgY2hlZk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVmTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgY2hlZk5hbWUudGV4dENvbnRlbnQgPSBcIklicmFoaW0gWXVzZWZcIjtcbiAgY29uc3QgY2hlZlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBjaGVmTGlPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNoZWZMaU9uZS50ZXh0Q29udGVudCA9IFwiQ2hlZlwiO1xuICBjb25zdCBjaGVmTGlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNoZWZMaVR3by50ZXh0Q29udGVudCA9IFwibm90UmVhbGx5UmVhbDJAcmVzdGF1cmFudC5jb21cIjtcbiAgY29uc3QgY2hlZkxpVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNoZWZMaVRocmVlLnRleHRDb250ZW50ID0gXCIxMjMtMzQzLTQ2NDRcIjtcbiAgY29uc3QgY2hlZkNvbnRhaW50ZXJQcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVmQ29udGFpbnRlclByb2ZpbGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcbiAgY29uc3QgY2hlZkFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2hlZkFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWltYWdlXCIpO1xuICBjaGVmQWN0dWFsSW1hZ2Uuc3JjID0gY2hlZkltYWdlO1xuICAvLyBBZGRpbmcgd2FpdGVyIGRldGFpbHNcbiAgY29uc3Qgd2FpdGVyQ29udGFjdFByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3YWl0ZXJDb250YWN0UHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1wcm9maWxlXCIpO1xuICBjb25zdCB3YWl0ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FpdGVySW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1wcm9maWxlXCIpO1xuICBjb25zdCB3YWl0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FpdGVyTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgd2FpdGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQWxleCBzbWl0aFwiO1xuICBjb25zdCB3YWl0ZXJVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3Qgd2FpdGVyTGlPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHdhaXRlckxpT25lLnRleHRDb250ZW50ID0gXCJXYWl0ZXJcIjtcbiAgY29uc3Qgd2FpdGVyTGlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHdhaXRlckxpVHdvLnRleHRDb250ZW50ID0gXCJub3RSZWFsbHlSZWFsQWdhaW4zQHJlc3RhdXJhbnQuY29tXCI7XG4gIGNvbnN0IHdhaXRlckxpVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHdhaXRlckxpVGhyZWUudGV4dENvbnRlbnQgPSBcIjExMS0zNzctNDY3OFwiO1xuICBjb25zdCB3YWl0ZXJDb250YWludGVyUHJvZmlsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FpdGVyQ29udGFpbnRlclByb2ZpbGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcbiAgY29uc3Qgd2FpdGVyQWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB3YWl0ZXJBY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1pbWFnZVwiKTtcbiAgd2FpdGVyQWN0dWFsSW1hZ2Uuc3JjID0gd2FpdGVySW1hZ2U7XG4gIC8vIEFkZGluZyB0byB0aGUgRE9NXG4gIHRoZUNlbnRlcmVkQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAvLyBBZGQgQ0VPIHNlY3Rpb24gdG8gRE9NXG4gIHRoZUNlbnRlcmVkQ29udGVudC5hcHBlbmRDaGlsZChjZW9Db250YWN0UHJvZmlsZSk7XG4gIGNlb0NvbnRhY3RQcm9maWxlLmFwcGVuZENoaWxkKGNlb0luZm8pO1xuICBjZW9JbmZvLmFwcGVuZENoaWxkKGNlb05hbWUpO1xuICBjZW9JbmZvLmFwcGVuZENoaWxkKGNlb1VsKTtcbiAgY2VvVWwuYXBwZW5kQ2hpbGQoY2VvTGlPbmUpO1xuICBjZW9VbC5hcHBlbmRDaGlsZChjZW9MaVR3byk7XG4gIGNlb1VsLmFwcGVuZENoaWxkKGNlb0xpVGhyZWUpO1xuICBjZW9Db250YWN0UHJvZmlsZS5hcHBlbmRDaGlsZChjZW9Db250YWludGVyUHJvZmlsZUltYWdlKTtcbiAgY2VvQ29udGFpbnRlclByb2ZpbGVJbWFnZS5hcHBlbmRDaGlsZChjZW9BY3R1YWxJbWFnZSk7XG4gIC8vIEFkZCBDaGVmIHNlY3Rpb24gdG8gRE9NXG4gIHRoZUNlbnRlcmVkQ29udGVudC5hcHBlbmRDaGlsZChjaGVmQ29udGFjdFByb2ZpbGUpO1xuICBjaGVmQ29udGFjdFByb2ZpbGUuYXBwZW5kQ2hpbGQoY2hlZkluZm8pO1xuICBjaGVmSW5mby5hcHBlbmRDaGlsZChjaGVmTmFtZSk7XG4gIGNoZWZJbmZvLmFwcGVuZENoaWxkKGNoZWZVbCk7XG4gIGNoZWZVbC5hcHBlbmRDaGlsZChjaGVmTGlPbmUpO1xuICBjaGVmVWwuYXBwZW5kQ2hpbGQoY2hlZkxpVHdvKTtcbiAgY2hlZlVsLmFwcGVuZENoaWxkKGNoZWZMaVRocmVlKTtcbiAgY2hlZkNvbnRhY3RQcm9maWxlLmFwcGVuZENoaWxkKGNoZWZDb250YWludGVyUHJvZmlsZUltYWdlKTtcbiAgY2hlZkNvbnRhaW50ZXJQcm9maWxlSW1hZ2UuYXBwZW5kQ2hpbGQoY2hlZkFjdHVhbEltYWdlKTtcbiAgLy8gQWRkIFdhaXRlciBzZWN0aW9uIHRvIERPTVxuICB0aGVDZW50ZXJlZENvbnRlbnQuYXBwZW5kQ2hpbGQod2FpdGVyQ29udGFjdFByb2ZpbGUpO1xuICB3YWl0ZXJDb250YWN0UHJvZmlsZS5hcHBlbmRDaGlsZCh3YWl0ZXJJbmZvKTtcbiAgd2FpdGVySW5mby5hcHBlbmRDaGlsZCh3YWl0ZXJOYW1lKTtcbiAgd2FpdGVySW5mby5hcHBlbmRDaGlsZCh3YWl0ZXJVbCk7XG4gIHdhaXRlclVsLmFwcGVuZENoaWxkKHdhaXRlckxpT25lKTtcbiAgd2FpdGVyVWwuYXBwZW5kQ2hpbGQod2FpdGVyTGlUd28pO1xuICB3YWl0ZXJVbC5hcHBlbmRDaGlsZCh3YWl0ZXJMaVRocmVlKTtcbiAgd2FpdGVyQ29udGFjdFByb2ZpbGUuYXBwZW5kQ2hpbGQod2FpdGVyQ29udGFpbnRlclByb2ZpbGVJbWFnZSk7XG4gIHdhaXRlckNvbnRhaW50ZXJQcm9maWxlSW1hZ2UuYXBwZW5kQ2hpbGQod2FpdGVyQWN0dWFsSW1hZ2UpO1xufVxuZXhwb3J0e2NvbnRhY3RVc30iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmZ1bmN0aW9uIGdldERlZmF1bHQoKXtcbiAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIE1Bc2VjdXJpdHkgMjAyM1wiO1xuICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpSG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBsaU1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbGlDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gIGxpSG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGxpTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gIGxpQ29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIilcbiAgY29uc3QgY2VudGVyZWRDb250ZW50ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNlbnRlcmVkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWNvbnRlbnRcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbiAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KVxuICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKHVsRWxlbWVudCk7XG4gIHVsRWxlbWVudC5hcHBlbmRDaGlsZChsaUhvbWUpO1xuICB1bEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlNZW51KTtcbiAgdWxFbGVtZW50LmFwcGVuZENoaWxkKGxpQ29udGFjdCk7XG4gIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNlbnRlcmVkQ29udGVudCk7XG59XG5cbmV4cG9ydHtnZXREZWZhdWx0fTtcblxuIiwiZnVuY3Rpb24gZ2V0SG9tZSgpe1xuICBjb25zdCBjZW50ZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXItY29udGVudFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRhc3R5IFBpenphXCI7XG4gIC8vIEFib3V0IHNlY3Rpb25cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XG4gIGNvbnN0IGFib3V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaGVhZGluZ1wiKTtcbiAgYWJvdXRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dFBhcmEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVGFzdHkgUGl6emEsIHdoZXJlIHRoZSBhcnQgb2YgcGl6emEtbWFraW5nIGNvbWVzIHRvIGxpZmUhIE91ciByZXN0YXVyYW50IGlzIGEgY3VsaW5hcnkgaGF2ZW4gZm9yIHBpenphIGxvdmVycywgb2ZmZXJpbmcgYSBkZWxlY3RhYmxlIGFycmF5IG9mIGhhbmRjcmFmdGVkIHBpenphcyB0aGF0IGFyZSBib3VuZCB0byB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzLlxcbldpdGggYSBmb2N1cyBvbiBoaWdoLXF1YWxpdHksIGZyZXNoIGluZ3JlZGllbnRzLCBhbmQgYSBwYXNzaW9uIGZvciBwZXJmZWN0aW5nIHRoZSBwaXp6YSBleHBlcmllbmNlLCB3ZSBpbnZpdGUgeW91IHRvIHNhdm9yIGVhY2ggYml0ZSBhbmQgam9pbiB1cyBvbiBhIGRlbGlnaHRmdWwgZ2FzdHJvbm9taWMgam91cm5leS5cXG4gRXhwbG9yZSBvdXIgZGl2ZXJzZSBtZW51IGFuZCBkaXNjb3ZlciB0aGUgZmxhdm9ycyB0aGF0IG1ha2Ugb3VyIHBpenphcyBhIHRydWUgc2Vuc2F0aW9uLlxcbiBXZSBjYW4ndCB3YWl0IHRvIHNlcnZlIHlvdSFcIjtcbiAgLy8gT3BlbmluZy1UaW1lcyBzZWN0aW9uXG4gIGNvbnN0IG9wZW5pbmdUaW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wZW5pbmdUaW1lcy5jbGFzc0xpc3QuYWRkKFwib3BlbmluZy10aW1lc1wiKTtcbiAgY29uc3Qgb3BlbmluZ0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcGVuaW5nSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbmluZy10aW1lcy1oZWFkaW5nXCIpO1xuICBvcGVuaW5nSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcbiAgY29uc3Qgb3BlbmluZ1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBsaU1vbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlNb24udGV4dENvbnRlbnQ9IFwiTW9uZGF5OiAxMmFtIHRvIDlwbVwiXG4gIGNvbnN0IGxpVHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaVR1ZS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogMTJhbSB0byA5cG1cIjtcbiAgY29uc3QgbGlXZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpV2VkLnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDEyYW0gdG8gOXBtXCJcbiAgY29uc3QgbGlUaHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpVGh1LnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogMTJhbSB0byA5cG1cIjtcbiAgY29uc3QgbGlGcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpRnJpLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDEyYW0gdG8gOXBtXCI7XG4gIGNvbnN0IGxpU2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaVNhdC50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDEyYW0gdG8gOXBtXCI7XG4gIGNvbnN0IGxpU3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaVN1bi50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiAxMmFtIHRvIDlwbVwiXG4gIC8vTG9jYXRpb24gc2VjdGlvblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgY29uc3QgbG9jYXRpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1oZWFkaW5nXCIpO1xuICBsb2NhdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGNvbnN0IGFkZHJlc3NQYXJ0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkcmVzc1BhcnRPbmUudGV4dENvbnRlbnQgPSBcIjEyMyBNYWluIFN0cmVldFwiO1xuICBjb25zdCBhZGRyZXNzUGFydFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NQYXJ0VHdvLnRleHRDb250ZW50ID0gXCJmYWtldG93biwgVVNBIDEyMzQ1XCI7XG4gIC8vQXBwZW5kaW5nIERPTSBlbGVtZW50c1xuICBjZW50ZXJDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY2VudGVyQ29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG4gIGNlbnRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3BlbmluZ1RpbWVzKTtcbiAgY2VudGVyQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGluZyk7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYSk7XG4gIG9wZW5pbmdUaW1lcy5hcHBlbmRDaGlsZChvcGVuaW5nSGVhZGluZyk7XG4gIG9wZW5pbmdUaW1lcy5hcHBlbmRDaGlsZChvcGVuaW5nVWwpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlNb24pO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlUdWUpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlXZWQpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlUaHUpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlGcmkpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlTYXQpO1xuICBvcGVuaW5nVWwuYXBwZW5kQ2hpbGQobGlTdW4pO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRpbmcpO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzUGFydE9uZSk7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NQYXJ0VHdvKTtcbn07XG5leHBvcnR7Z2V0SG9tZX07IiwiaW1wb3J0IHBlcHBlcm9uaUltYWdlIGZyb20gXCIuLi9pbWFnZXMvcGVwcGVyb25pUGl6emEucG5nXCI7XG5pbXBvcnQgdGFuZG9vcmlJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL1RhbmRvb3JpQ2hpY2tlbi5wbmdcIjtcbmltcG9ydCBkb25uZXJLZWJhYkltYWdlIGZyb20gXCIuLi9pbWFnZXMvZG9ubmVyS2ViYWIucG5nXCI7XG5pbXBvcnQgYmVlZkltYWdlIGZyb20gXCIuLi9pbWFnZXMvYmVlZlBpenphLnBuZ1wiO1xuaW1wb3J0IHZlZ2V0YXJpYW5JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3ZlZ2FuUGl6emEucG5nXCI7XG5pbXBvcnQgc3RyYXdiZXJyeUltYWdlIGZyb20gXCIuLi9pbWFnZXMvc3RyYXdiZXJyeUNoZWVzZUNha2UucG5nXCI7XG5pbXBvcnQgY2hvY29sYXRlSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9DaG9jb2xhdGUucG5nXCI7XG5pbXBvcnQgc2V2ZW5VcEltYWdlIGZyb20gXCIuLi9pbWFnZXMvc2V2ZW5VcC5wbmdcIjtcbmltcG9ydCBjb2NvQ29sYUltYWdlIGZyb20gXCIuLi9pbWFnZXMvQ29jby1jb2xhLnBuZ1wiO1xuZnVuY3Rpb24gbWVudSgpe1xuICBjb25zdCBhbGxDZW50ZXJlZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlci1jb250ZW50XCIpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIC8vIE1haW4gRGlzaGVzXG4gIGNvbnN0IHBpenphU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGl6emFzXCIpO1xuICBjb25zdCBwaXp6YVNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphU2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJNYWluIERpc2hlc1wiXG4gIGNvbnN0IGhyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgLy8gUGVwcGVyb25pIEFydGljbGVcbiAgY29uc3QgcGVwcGVyb25pTWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwZXBwZXJvbmlNZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCBwZXBwZXJvbmlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3QgcGVwcGVyb25pUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwZXBwZXJvbmlQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIHBlcHBlcm9uaVByaWNlLnRleHRDb250ZW50ID0gXCLCozEzXCI7XG4gIGNvbnN0IHBlcHBlcm9uaUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwZXBwZXJvbmlIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIHBlcHBlcm9uaUhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGVwcGVyb25pIFBpenphIDEyIFwiaW5jaFwiJztcbiAgY29uc3QgcGVwcGVyb25pQ29udGFpbmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwZXBwZXJvbmlDb250YWluZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gIGNvbnN0IHBlcHBlcm9uaUFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcGVwcGVyb25pQWN0dWFsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdHVhbC1pbWFnZVwiKTtcbiAgcGVwcGVyb25pQWN0dWFsSW1hZ2Uuc3JjID0gcGVwcGVyb25pSW1hZ2U7XG4gIGNvbnN0IHBlcHBlcm9uaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVwcGVyb25pRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBwZXBwZXJvbmlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRWF0IG91ciBkZWxpY291cyBQZXBwZXJvbmkgUGl6emEgZm9yIG9ubHkgYXQgdGhlIHByaWNlIG9mIMKjMTNcIjtcbiAgLy8gVGFuZG9vcmlDaGlja2VuIGFydGljbGVcbiAgY29uc3QgdGFuZG9vcmlNZW51QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhbmRvb3JpTWVudUFydGljbGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJ0aWNsZVwiKTtcbiAgY29uc3QgdGFuZG9vcmlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFuZG9vcmlDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCB0YW5kb29yaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFuZG9vcmlQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIHRhbmRvb3JpUHJpY2UudGV4dENvbnRlbnQgPSBcIsKjMTNcIjtcbiAgY29uc3QgdGFuZG9vcmlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFuZG9vcmlIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIHRhbmRvb3JpSGVhZGluZy50ZXh0Q29udGVudCA9ICdUYW5kb29yaSBDaGlja2VuIFBpenphIDEyIFwiaW5jaFwiJztcbiAgY29uc3QgdGFuZG9vcmlDb250YWluZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhbmRvb3JpQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCB0YW5kb29yaUFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGFuZG9vcmlBY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0dWFsLWltYWdlXCIpO1xuICB0YW5kb29yaUFjdHVhbEltYWdlLnNyYyA9IHRhbmRvb3JpSW1hZ2U7XG4gIGNvbnN0IHRhbmRvb3JpRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YW5kb29yaURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgdGFuZG9vcmlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRWF0IG91ciBkZWxpY291cyBUYW5kb29yaSBDaGlja2VuIFBpenphIGZvciBvbmx5IGF0IHRoZSBwcmljZSBvZiDCozEzXCI7XG4gIC8vRG9ubmVyIEtlYmFiIEFydGljbGVcbiAgY29uc3QgZG9ubmVyS2ViYWJNZW51QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiTWVudUFydGljbGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJ0aWNsZVwiKTtcbiAgY29uc3QgZG9ubmVyS2ViYWJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9ubmVyS2ViYWJDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCBkb25uZXJLZWJhYlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9ubmVyS2ViYWJQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGRvbm5lcktlYmFiUHJpY2UudGV4dENvbnRlbnQgPSBcIsKjMTNcIjtcbiAgY29uc3QgZG9ubmVyS2ViYWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9ubmVyS2ViYWJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIGRvbm5lcktlYmFiSGVhZGluZy50ZXh0Q29udGVudCA9ICdEb25uZXIgS2ViYWIgUGl6emEgMTIgXCJpbmNoXCInO1xuICBjb25zdCBkb25uZXJLZWJhYkNvbnRhaW5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9ubmVyS2ViYWJDb250YWluZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gIGNvbnN0IGRvbm5lcktlYmFiQWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkb25uZXJLZWJhYkFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3R1YWwtaW1hZ2VcIik7XG4gIGRvbm5lcktlYmFiQWN0dWFsSW1hZ2Uuc3JjID0gZG9ubmVyS2ViYWJJbWFnZTtcbiAgY29uc3QgZG9ubmVyS2ViYWJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvbm5lcktlYmFiRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkb25uZXJLZWJhYkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFYXQgb3VyIGRlbGljb3VzIERvbm5lciBLZWJhYiBQaXp6YSBmb3Igb25seSBhdCB0aGUgcHJpY2Ugb2YgwqMxM1wiO1xuICAvLyBCZWVmIFBpenphIEFydGljbGVcbiAgY29uc3QgYmVlZk1lbnVBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmVlZk1lbnVBcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWFydGljbGVcIik7XG4gIGNvbnN0IGJlZWZDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmVlZkNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvbnN0IGJlZWZQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJlZWZQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGJlZWZQcmljZS50ZXh0Q29udGVudCA9IFwiwqMxM1wiO1xuICBjb25zdCBiZWVmSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJlZWZIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIGJlZWZIZWFkaW5nLnRleHRDb250ZW50ID0gJ0JlZWYgUGl6emEgMTIgXCJpbmNoXCInO1xuICBjb25zdCBiZWVmQ29udGFpbmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZWVmQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBiZWVmQWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBiZWVmQWN0dWFsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdHVhbC1pbWFnZVwiKTtcbiAgYmVlZkFjdHVhbEltYWdlLnNyYyA9IGJlZWZJbWFnZTtcbiAgY29uc3QgYmVlZkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmVlZkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgYmVlZkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFYXQgb3VyIGRlbGljb3VzIEJlZWYgUGl6emEgZm9yIG9ubHkgYXQgdGhlIHByaWNlIG9mIMKjMTNcIjtcbiAgLy9WZWdldGFyaWFuIEFydGljbGVcbiAgY29uc3QgdmVnZXRhcmlhbk1lbnVBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVnZXRhcmlhbk1lbnVBcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWFydGljbGVcIik7XG4gIGNvbnN0IHZlZ2V0YXJpYW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVnZXRhcmlhbkNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvbnN0IHZlZ2V0YXJpYW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlZ2V0YXJpYW5QcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIHZlZ2V0YXJpYW5QcmljZS50ZXh0Q29udGVudCA9IFwiwqMxM1wiO1xuICBjb25zdCB2ZWdldGFyaWFuSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlZ2V0YXJpYW5IZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIHZlZ2V0YXJpYW5IZWFkaW5nLnRleHRDb250ZW50ID0gJ1ZlZ2V0YXJpYW4gUGl6emEgMTIgXCJpbmNoXCInO1xuICBjb25zdCB2ZWdldGFyaWFuQ29udGFpbmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZWdldGFyaWFuQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCB2ZWdldGFyaWFuQWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB2ZWdldGFyaWFuQWN0dWFsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdHVhbC1pbWFnZVwiKTtcbiAgdmVnZXRhcmlhbkFjdHVhbEltYWdlLnNyYyA9IHZlZ2V0YXJpYW5JbWFnZTtcbiAgY29uc3QgdmVnZXRhcmlhbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVnZXRhcmlhbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgdmVnZXRhcmlhbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFYXQgb3VyIGRlbGljb3VzIFZlZ2V0YXJpYW4gUGl6emEgZm9yIG9ubHkgYXQgdGhlIHByaWNlIG9mIMKjMTNcIjtcbiAgLy9BZGRpbmcgRGVzc2VydHMgc2VjdGlvblxuICBjb25zdCBkZXNzZXJ0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNzZXJ0c1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpO1xuICBjb25zdCBkZXNzZXJ0c1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnRzU2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICAvLyBTdHJhd2JlcnJ5IENoZWVzZWNha2UgQXJ0aWNsZVxuICBjb25zdCBzdHJhd2JlcnJ5TWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHJhd2JlcnJ5TWVudUFydGljbGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJ0aWNsZVwiKTtcbiAgY29uc3Qgc3RyYXdiZXJyeUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHJhd2JlcnJ5Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3Qgc3RyYXdiZXJyeVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RyYXdiZXJyeVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgc3RyYXdiZXJyeVByaWNlLnRleHRDb250ZW50ID0gXCLCozRcIjtcbiAgY29uc3Qgc3RyYXdiZXJyeUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHJhd2JlcnJ5SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICBzdHJhd2JlcnJ5SGVhZGluZy50ZXh0Q29udGVudCA9ICdTdHJhd2JlcnJ5IENoZWVzZWNha2UnO1xuICBjb25zdCBzdHJhd2JlcnJ5Q29udGFpbmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHJhd2JlcnJ5Q29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBzdHJhd2JlcnJ5QWN0dWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzdHJhd2JlcnJ5QWN0dWFsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdHVhbC1pbWFnZVwiKTtcbiAgc3RyYXdiZXJyeUFjdHVhbEltYWdlLnNyYyA9IHN0cmF3YmVycnlJbWFnZTtcbiAgY29uc3Qgc3RyYXdiZXJyeURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RyYXdiZXJyeURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgc3RyYXdiZXJyeURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFYXQgb3VyIGRlbGljb3VzIFN0cmF3YmVycnkgQ2hlZXNlY2FrZSBmb3Igb25seSBhdCB0aGUgcHJpY2Ugb2YgwqM0XCI7XG4gIC8vIENob2NvbGF0ZSBjYWtlIEFydGljbGVcbiAgY29uc3QgY2hvY29sYXRlTWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaG9jb2xhdGVNZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCBjaG9jb2xhdGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hvY29sYXRlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3QgY2hvY29sYXRlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaG9jb2xhdGVQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGNob2NvbGF0ZVByaWNlLnRleHRDb250ZW50ID0gXCLCozRcIjtcbiAgY29uc3QgY2hvY29sYXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNob2NvbGF0ZUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImNhcmQtaGVhZGluZ1wiKTtcbiAgY2hvY29sYXRlSGVhZGluZy50ZXh0Q29udGVudCA9ICdDaG9jb2xhdGUgY2FrZSc7XG4gIGNvbnN0IGNob2NvbGF0ZUNvbnRhaW5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hvY29sYXRlQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBjaG9jb2xhdGVBY3R1YWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNob2NvbGF0ZUFjdHVhbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3R1YWwtaW1hZ2VcIik7XG4gIGNob2NvbGF0ZUFjdHVhbEltYWdlLnNyYyA9IGNob2NvbGF0ZUltYWdlO1xuICBjb25zdCBjaG9jb2xhdGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNob2NvbGF0ZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY2hvY29sYXRlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkVhdCBvdXIgZGVsaWNvdXMgQ2hvY29sYXRlIGNha2UgZm9yIG9ubHkgYXQgdGhlIHByaWNlIG9mIMKjNFwiO1xuICAvLyBBZGQgRHJpbmtzIHNlY3Rpb25cbiAgY29uc3QgZHJpbmtzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRyaW5rc1wiKTtcbiAgY29uc3QgZHJpbmtzU2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzU2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgLy8gQWRkIDdVcCBhcnRpY2xlXG4gIGNvbnN0IHNldmVuVXBNZW51QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuVXBNZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCBzZXZlblVwQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuVXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCBzZXZlblVwUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlblVwUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBzZXZlblVwUHJpY2UudGV4dENvbnRlbnQgPSBcIsKjMVwiO1xuICBjb25zdCBzZXZlblVwSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuVXBIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRpbmdcIik7XG4gIHNldmVuVXBIZWFkaW5nLnRleHRDb250ZW50ID0gJzd1cCc7XG4gIGNvbnN0IHNldmVuVXBDb250YWluZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuVXBDb250YWluZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gIGNvbnN0IHNldmVuVXBBY3R1YWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNldmVuVXBBY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0dWFsLWltYWdlXCIpO1xuICBzZXZlblVwQWN0dWFsSW1hZ2Uuc3JjID0gc2V2ZW5VcEltYWdlO1xuICBjb25zdCBzZXZlblVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlblVwRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBzZXZlblVwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIldhbnQgYSBkcmluayB3aXRoIHlvdXIgbWVhbD8sIGhhdmUgc29tZSA3dXAuXCI7XG4gIC8vIEFkZGluZyBDb2NvLWNvbGEgYXJ0aWNsZVxuICBjb25zdCBjb2NvQ29sYU1lbnVBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29jb0NvbGFNZW51QXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcnRpY2xlXCIpO1xuICBjb25zdCBjb2NvQ29sYUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2NvQ29sYUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvbnN0IGNvY29Db2xhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2NvQ29sYVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgY29jb0NvbGFQcmljZS50ZXh0Q29udGVudCA9IFwiwqMxXCI7XG4gIGNvbnN0IGNvY29Db2xhSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvY29Db2xhSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkaW5nXCIpO1xuICBjb2NvQ29sYUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29jby1jb2xhJztcbiAgY29uc3QgY29jb0NvbGFDb250YWluZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvY29Db2xhQ29udGFpbmVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb25zdCBjb2NvQ29sYUFjdHVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29jb0NvbGFBY3R1YWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0dWFsLWltYWdlXCIpO1xuICBjb2NvQ29sYUFjdHVhbEltYWdlLnNyYyA9IGNvY29Db2xhSW1hZ2U7XG4gIGNvbnN0IGNvY29Db2xhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2NvQ29sYURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29jb0NvbGFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiV2FudCBhIGRyaW5rIHdpdGggeW91ciBtZWFsPywgaGF2ZSBzb21lIENvY28tY29sYS5cIjtcbiAgLy8gQWRkIERPTSBlbGVtZW50c1xuICBhbGxDZW50ZXJlZENvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChwaXp6YVNlY3Rpb24pO1xuICBwaXp6YVNlY3Rpb24uYXBwZW5kQ2hpbGQocGl6emFTZWN0aW9uVGl0bGUpO1xuICBwaXp6YVNlY3Rpb24uYXBwZW5kQ2hpbGQoaHJFbGVtZW50KTtcbiAgLy9BZGRpbmcgUGVwcGVyb25pIFBpenphIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChwZXBwZXJvbmlNZW51QXJ0aWNsZSk7XG4gIHBlcHBlcm9uaU1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKHBlcHBlcm9uaUNhcmQpO1xuICBwZXBwZXJvbmlDYXJkLmFwcGVuZENoaWxkKHBlcHBlcm9uaVByaWNlKTtcbiAgcGVwcGVyb25pQ2FyZC5hcHBlbmRDaGlsZChwZXBwZXJvbmlIZWFkaW5nKTtcbiAgcGVwcGVyb25pQ2FyZC5hcHBlbmRDaGlsZChwZXBwZXJvbmlDb250YWluZXJJbWFnZSk7XG4gIHBlcHBlcm9uaUNvbnRhaW5lckltYWdlLmFwcGVuZENoaWxkKHBlcHBlcm9uaUFjdHVhbEltYWdlKTtcbiAgcGVwcGVyb25pQ2FyZC5hcHBlbmRDaGlsZChwZXBwZXJvbmlEZXNjcmlwdGlvbik7XG4gIC8vQWRkaW5nIFRhbmRvb3JpIENoaWNrZW4gUGl6emEgdG8gRE9NXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHRhbmRvb3JpTWVudUFydGljbGUpO1xuICB0YW5kb29yaU1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKHRhbmRvb3JpQ2FyZCk7XG4gIHRhbmRvb3JpQ2FyZC5hcHBlbmRDaGlsZCh0YW5kb29yaVByaWNlKTtcbiAgdGFuZG9vcmlDYXJkLmFwcGVuZENoaWxkKHRhbmRvb3JpSGVhZGluZyk7XG4gIHRhbmRvb3JpQ2FyZC5hcHBlbmRDaGlsZCh0YW5kb29yaUNvbnRhaW5lckltYWdlKTtcbiAgdGFuZG9vcmlDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZCh0YW5kb29yaUFjdHVhbEltYWdlKTtcbiAgdGFuZG9vcmlDYXJkLmFwcGVuZENoaWxkKHRhbmRvb3JpRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBEb25uZXIgS2ViYWIgUGl6emEgdG8gRE9NXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRvbm5lcktlYmFiTWVudUFydGljbGUpO1xuICBkb25uZXJLZWJhYk1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKGRvbm5lcktlYmFiQ2FyZCk7XG4gIGRvbm5lcktlYmFiQ2FyZC5hcHBlbmRDaGlsZChkb25uZXJLZWJhYlByaWNlKTtcbiAgZG9ubmVyS2ViYWJDYXJkLmFwcGVuZENoaWxkKGRvbm5lcktlYmFiSGVhZGluZyk7XG4gIGRvbm5lcktlYmFiQ2FyZC5hcHBlbmRDaGlsZChkb25uZXJLZWJhYkNvbnRhaW5lckltYWdlKTtcbiAgZG9ubmVyS2ViYWJDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChkb25uZXJLZWJhYkFjdHVhbEltYWdlKTtcbiAgZG9ubmVyS2ViYWJDYXJkLmFwcGVuZENoaWxkKGRvbm5lcktlYmFiRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBCZWVmIFBpenphIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChiZWVmTWVudUFydGljbGUpO1xuICBiZWVmTWVudUFydGljbGUuYXBwZW5kQ2hpbGQoYmVlZkNhcmQpO1xuICBiZWVmQ2FyZC5hcHBlbmRDaGlsZChiZWVmUHJpY2UpO1xuICBiZWVmQ2FyZC5hcHBlbmRDaGlsZChiZWVmSGVhZGluZyk7XG4gIGJlZWZDYXJkLmFwcGVuZENoaWxkKGJlZWZDb250YWluZXJJbWFnZSk7XG4gIGJlZWZDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChiZWVmQWN0dWFsSW1hZ2UpO1xuICBiZWVmQ2FyZC5hcHBlbmRDaGlsZChiZWVmRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBWZWdldGFyaWFuIFBpenphIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuTWVudUFydGljbGUpO1xuICB2ZWdldGFyaWFuTWVudUFydGljbGUuYXBwZW5kQ2hpbGQodmVnZXRhcmlhbkNhcmQpO1xuICB2ZWdldGFyaWFuQ2FyZC5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuUHJpY2UpO1xuICB2ZWdldGFyaWFuQ2FyZC5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuSGVhZGluZyk7XG4gIHZlZ2V0YXJpYW5DYXJkLmFwcGVuZENoaWxkKHZlZ2V0YXJpYW5Db250YWluZXJJbWFnZSk7XG4gIHZlZ2V0YXJpYW5Db250YWluZXJJbWFnZS5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuQWN0dWFsSW1hZ2UpO1xuICB2ZWdldGFyaWFuQ2FyZC5hcHBlbmRDaGlsZCh2ZWdldGFyaWFuRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBEZXNzZXJ0cyBzZWN0aW9uXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzU2VjdGlvbik7XG4gIGRlc3NlcnRzU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNzZXJ0c1NlY3Rpb25UaXRsZSk7XG4gIGRlc3NlcnRzU2VjdGlvbi5hcHBlbmRDaGlsZChockVsZW1lbnQpO1xuICAvLyBBZGRpbmcgU3RyYXdiZXJyeSBDaGVlc2VjYWtlIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5TWVudUFydGljbGUpO1xuICBzdHJhd2JlcnJ5TWVudUFydGljbGUuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUNhcmQpO1xuICBzdHJhd2JlcnJ5Q2FyZC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5UHJpY2UpO1xuICBzdHJhd2JlcnJ5Q2FyZC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5SGVhZGluZyk7XG4gIHN0cmF3YmVycnlDYXJkLmFwcGVuZENoaWxkKHN0cmF3YmVycnlDb250YWluZXJJbWFnZSk7XG4gIHN0cmF3YmVycnlDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5QWN0dWFsSW1hZ2UpO1xuICBzdHJhd2JlcnJ5Q2FyZC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5RGVzY3JpcHRpb24pO1xuICAvLyBBZGRpbmcgQ2hvY29sYXRlIGNha2UgdG8gRE9NXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNob2NvbGF0ZU1lbnVBcnRpY2xlKTtcbiAgY2hvY29sYXRlTWVudUFydGljbGUuYXBwZW5kQ2hpbGQoY2hvY29sYXRlQ2FyZCk7XG4gIGNob2NvbGF0ZUNhcmQuYXBwZW5kQ2hpbGQoY2hvY29sYXRlUHJpY2UpO1xuICBjaG9jb2xhdGVDYXJkLmFwcGVuZENoaWxkKGNob2NvbGF0ZUhlYWRpbmcpO1xuICBjaG9jb2xhdGVDYXJkLmFwcGVuZENoaWxkKGNob2NvbGF0ZUNvbnRhaW5lckltYWdlKTtcbiAgY2hvY29sYXRlQ29udGFpbmVySW1hZ2UuYXBwZW5kQ2hpbGQoY2hvY29sYXRlQWN0dWFsSW1hZ2UpO1xuICBjaG9jb2xhdGVDYXJkLmFwcGVuZENoaWxkKGNob2NvbGF0ZURlc2NyaXB0aW9uKTtcbiAgLy9BZGRpbmcgRHJpbmtzIHNlY3Rpb25cbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzU2VjdGlvbik7XG4gIGRyaW5rc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZHJpbmtzU2VjdGlvblRpdGxlKTtcbiAgZHJpbmtzU2VjdGlvbi5hcHBlbmRDaGlsZChockVsZW1lbnQpO1xuICAvL0FkZGluZyBzZXZlblVwIHRvIERPTVxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzZXZlblVwTWVudUFydGljbGUpO1xuICBzZXZlblVwTWVudUFydGljbGUuYXBwZW5kQ2hpbGQoc2V2ZW5VcENhcmQpO1xuICBzZXZlblVwQ2FyZC5hcHBlbmRDaGlsZChzZXZlblVwUHJpY2UpO1xuICBzZXZlblVwQ2FyZC5hcHBlbmRDaGlsZChzZXZlblVwSGVhZGluZyk7XG4gIHNldmVuVXBDYXJkLmFwcGVuZENoaWxkKHNldmVuVXBDb250YWluZXJJbWFnZSk7XG4gIHNldmVuVXBDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChzZXZlblVwQWN0dWFsSW1hZ2UpO1xuICBzZXZlblVwQ2FyZC5hcHBlbmRDaGlsZChzZXZlblVwRGVzY3JpcHRpb24pO1xuICAvL0FkZGluZyBDb2NvLWNvbGEgdG8gRE9NXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNvY29Db2xhTWVudUFydGljbGUpO1xuICBjb2NvQ29sYU1lbnVBcnRpY2xlLmFwcGVuZENoaWxkKGNvY29Db2xhQ2FyZCk7XG4gIGNvY29Db2xhQ2FyZC5hcHBlbmRDaGlsZChjb2NvQ29sYVByaWNlKTtcbiAgY29jb0NvbGFDYXJkLmFwcGVuZENoaWxkKGNvY29Db2xhSGVhZGluZyk7XG4gIGNvY29Db2xhQ2FyZC5hcHBlbmRDaGlsZChjb2NvQ29sYUNvbnRhaW5lckltYWdlKTtcbiAgY29jb0NvbGFDb250YWluZXJJbWFnZS5hcHBlbmRDaGlsZChjb2NvQ29sYUFjdHVhbEltYWdlKTtcbiAgY29jb0NvbGFDYXJkLmFwcGVuZENoaWxkKGNvY29Db2xhRGVzY3JpcHRpb24pO1xuXG5cbn1cbmV4cG9ydCB7bWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtnZXREZWZhdWx0fSBmcm9tIFwiLi9mdW5jdGlvbnMvcmVuZGVyRGVmYXVsdFwiO1xuaW1wb3J0IHtnZXRIb21lfSBmcm9tIFwiLi9mdW5jdGlvbnMvcmVuZGVySG9tZVwiO1xuaW1wb3J0IHtjbGVhckNvbnRlbnRzfSBmcm9tIFwiLi9mdW5jdGlvbnMvY2xlYXJcIjtcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vZnVuY3Rpb25zL3JlbmRlck1lbnVcIjtcbmltcG9ydCB7Y29udGFjdFVzfSBmcm9tIFwiLi9mdW5jdGlvbnMvcmVuZGVyQ29udGFjdFVzXCI7XG5cbihmdW5jdGlvbiBkZXBsb3koKXtcbiAgZ2V0RGVmYXVsdCgpO1xuICBnZXRIb21lKCk7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIilcbiAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGdldEhvbWUoKTtcbiAgfSk7XG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBtZW51KCk7XG4gIH0pO1xuICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgY29udGFjdFVzKClcbiAgfSk7XG4gIFxufSkoKTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9