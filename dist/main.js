/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
  --bg-primary-1: rgb(4, 0, 87);
  --bg-primary-2: rgb(36, 32, 105);
  --text-primary-1: rgb(220, 220, 220);
  --text-primary-2: rgb(160, 160, 160);
  --text-secondary: rgb(70, 70, 70);
  --accent: rgb(206, 69, 0);
}
*::selection {
  background: var(--accent);
  color: var(--text-primary-1);
}

body {
  background: linear-gradient(#4c4cf9, #9198e5);
  height: 100vh;
  display: flex;
  justify-content: center;
}

main {
  background-color: var(--bg-primary-2);
  color: var(--text-primary-1);
  width: 800px;
}

.search {
  background-color: var(--bg-primary-1);
  padding: 2rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 5px -3px #000000;
}
.search label {
  font-size: 2rem;
  text-align: center;
}
.search div {
  margin-top: 2rem;
  width: 70%;
  position: relative;
  display: flex;
  align-items: center;
}
.search div input {
  width: 100%;
  font-size: 3rem;
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  padding-right: 5.5rem;
  background-color: var(--text-primary-1);
  color: var(--text-secondary);
}
.search div input:focus {
  outline: 0;
}
.search div button {
  border: 0;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  background-color: var(--bg-primary-1);
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.search div button:active {
  transform: translateY(1px);
}
.search div button span {
  filter: grayscale(1);
  font-size: 2rem;
}
.search div p {
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  color: rgb(255, 0, 0);
}

.results {
  padding: 2rem;
}
.results h2 {
  font-size: 2rem;
  text-align: center;
}
.results h2 .name {
  color: var(--accent);
}
.results .current {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.results .current .current-left {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.results .current .current-left img {
  width: 100px;
}
.results .current .current-left .temperature {
  font-size: 3rem;
}
.results .current .current-left .units-toggle {
  display: flex;
}
.results .current .current-left .units-toggle button {
  background: 0;
  border: 0;
  font-size: 1rem;
  position: relative;
  bottom: 0.75rem;
  padding: 0 0.25rem;
  color: var(--text-primary-1);
  display: block;
  cursor: pointer;
}
.results .current .current-left .units-toggle button:disabled {
  color: var(--text-primary-2);
  cursor: initial;
}
.results .current .current-left .units-toggle button.fahrenheit {
  border-right: 1px solid grey;
}
.results .current .current-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  font-size: 1.2rem;
}
.results .forecast {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.results .forecast .forecast-day {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(200, 200, 200, 0.1);
  border-radius: 8px;
}
.results .forecast .forecast-day .forecast-day-label {
  font-size: 2rem;
}
.results .forecast .forecast-day img {
  width: 100px;
}
.results .forecast .forecast-day div {
  display: flex;
  gap: 2rem;
  font-size: 2rem;
}
.results .forecast .forecast-day div .forecast-high {
  color: var(--accent);
}
.results .forecast .forecast-day div .forecast-low {
  color: rgb(81, 179, 217);
}`, "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kCAAA;EACA,6BAAA;EACA,gCAAA;EACA,oCAAA;EACA,oCAAA;EACA,iCAAA;EACA,yBAAA;AAAF;AAEE;EACE,yBAAA;EACA,4BAAA;AAAJ;;AAIA;EACE,6CAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;AADF;;AAIA;EACE,qCAAA;EACA,4BAAA;EACA,YAAA;AADF;;AAIA;EACE,qCAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,oCAAA;AADF;AAGE;EACE,eAAA;EACA,kBAAA;AADJ;AAIE;EACE,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAFJ;AAII;EACE,WAAA;EACA,eAAA;EACA,SAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,uCAAA;EACA,4BAAA;AAFN;AAIM;EACE,UAAA;AAFR;AAMI;EACE,SAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;AAJN;AAMM;EACE,0BAAA;AAJR;AAOM;EACE,oBAAA;EACA,eAAA;AALR;AASI;EACE,SAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,qBAAA;AAPN;;AAYA;EACE,aAAA;AATF;AAWE;EACE,eAAA;EACA,kBAAA;AATJ;AAWI;EACE,oBAAA;AATN;AAaE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;AAXJ;AAaI;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAXN;AAaM;EACE,YAAA;AAXR;AAcM;EACE,eAAA;AAZR;AAeM;EACE,aAAA;AAbR;AAeQ;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,4BAAA;EACA,cAAA;EACA,eAAA;AAbV;AAeU;EACE,4BAAA;EACA,eAAA;AAbZ;AAgBU;EACE,4BAAA;AAdZ;AAoBI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBAAA;AAlBN;AAsBE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AApBJ;AAsBI;EACE,OAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,0CAAA;EACA,kBAAA;AApBN;AAsBM;EACE,eAAA;AApBR;AAuBM;EACE,YAAA;AArBR;AAwBM;EACE,aAAA;EACA,SAAA;EACA,eAAA;AAtBR;AAwBQ;EACE,oBAAA;AAtBV;AAyBQ;EACE,wBAAA;AAvBV","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'DM Sans', sans-serif;\n  --bg-primary-1: rgb(4, 0, 87);\n  --bg-primary-2: rgb(36, 32, 105);\n  --text-primary-1: rgb(220, 220, 220);\n  --text-primary-2: rgb(160, 160, 160);\n  --text-secondary: rgb(70, 70, 70);\n  --accent: rgb(206, 69, 0);\n\n  &::selection {\n    background: var(--accent);\n    color: var(--text-primary-1);\n  }\n}\n\nbody {\n  background: linear-gradient(#4c4cf9, #9198e5);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n\nmain {\n  background-color: var(--bg-primary-2);\n  color: var(--text-primary-1);\n  width: 800px;\n}\n\n.search {\n  background-color: var(--bg-primary-1);\n  padding: 2rem 1rem 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 5px 5px -3px #000000;\n\n  label {\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  div {\n    margin-top: 2rem;\n    width: 70%;\n    position: relative;\n    display: flex;\n    align-items: center;\n\n    input {\n      width: 100%;\n      font-size: 3rem;\n      border: 0;\n      border-radius: 8px;\n      padding: 1rem;\n      padding-right: 5.5rem;\n      background-color: var(--text-primary-1);\n      color: var(--text-secondary);\n\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    button {\n      border: 0;\n      border-radius: 50%;\n      height: 4rem;\n      width: 4rem;\n      background-color: var(--bg-primary-1);\n      position: absolute;\n      right: 10px;\n      cursor: pointer;\n\n      &:active {\n        transform: translateY(1px);\n      }\n\n      span {\n        filter: grayscale(1);\n        font-size: 2rem;\n      }\n    }\n\n    p {\n      height: 0;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      color: rgb(255, 0, 0);\n    }\n  }\n}\n\n.results {\n  padding: 2rem;\n\n  h2 {\n    font-size: 2rem;\n    text-align: center;\n\n    .name {\n      color: var(--accent);\n    }\n  }\n\n  .current {\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n\n    .current-left {\n      display: flex;\n      align-items: center;\n      gap: 0.3rem;\n\n      img {\n        width: 100px;\n      }\n\n      .temperature {\n        font-size: 3rem;\n      }\n\n      .units-toggle {\n        display: flex;\n\n        button {\n          background: 0;\n          border: 0;\n          font-size: 1rem;\n          position: relative;\n          bottom: 0.75rem;\n          padding: 0 0.25rem;\n          color: var(--text-primary-1);\n          display: block;\n          cursor: pointer;\n\n          &:disabled {\n            color: var(--text-primary-2);\n            cursor: initial;\n          }\n\n          &.fahrenheit {\n            border-right: 1px solid grey;\n          }\n        }\n      }\n    }\n\n    .current-right {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: right;\n      font-size: 1.2rem;\n    }\n  }\n\n  .forecast {\n    margin-top: 4rem;\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n\n    .forecast-day {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 1rem;\n      padding: 1rem;\n      background-color: rgba(200, 200, 200, 0.1);\n      border-radius: 8px;\n\n      .forecast-day-label {\n        font-size: 2rem;\n      }\n\n      img {\n        width: 100px;\n      }\n\n      div {\n        display: flex;\n        gap: 2rem;\n        font-size: 2rem;\n\n        .forecast-high {\n          color: var(--accent);\n        }\n\n        .forecast-low {\n          color: rgb(81, 179, 217);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


async function getCurrentWeather(locationString) {
  try {
    const baseUrl = 'https://api.weatherapi.com/v1/forecast.json';
    const encodedLocation = encodeURIComponent(locationString);
    const days = 3;
    const key = '973488068c634787b66233221240801';
    const url = `${baseUrl}?q=${encodedLocation}&key=${key}&days=${days}`;
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    });

    if (response.ok) {
      const json = await response.json();
      const current = buildCurrentData(json);
      const forecast = buildForecastData(json);
      return { current, forecast, error: '' };
    } else {
      return {
        current: undefined,
        forecast: undefined,
        error: 'No matching location found.',
      };
    }
  } catch (e) {
    console.log(`Something went wrong 😭: ${e}`);
  }
}

function buildCurrentData(json) {
  return {
    name: json.location.name,
    region: json.location.region,
    country: json.location.country,
    img: `https:${json.current.condition.icon}`,
    temperature: {
      f: Math.round(json.current.temp_f),
      c: Math.round(json.current.temp_c),
    },
    humidity: json.current.humidity,
    feelsLike: {
      f: Math.round(json.current.feelslike_f),
      c: Math.round(json.current.feelslike_c),
    },
    wind: {
      mph: Math.round(json.current.wind_mph),
      kph: Math.round(json.current.wind_kph),
    },
    dayTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(json.current.last_updated_epoch * 1000).format(
      'dddd h:mm A'
    ),
    description: json.current.condition.text,
  };
}

function buildForecastData(json) {
  return json.forecast.forecastday.map((day) => {
    return {
      day: dayjs__WEBPACK_IMPORTED_MODULE_0__(day.date_epoch * 1000).format('dddd'),
      maxtemp_c: Math.round(day.day.maxtemp_c),
      maxtemp_f: Math.round(day.day.maxtemp_f),
      mintemp_c: Math.round(day.day.mintemp_c),
      mintemp_f: Math.round(day.day.mintemp_f),
      img: `https:${day.day.condition.icon}`,
      description: day.day.condition.text,
    };
  });
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data */ "./src/data/data.js");



let weatherCache;

const form = document.querySelector('.search');
const input = document.querySelector('#search-bar');
const submitBtn = document.querySelector('.search button');
const errorMsg = document.querySelector('.search p');

const resultsContainer = document.querySelector('.results');
const name = resultsContainer.querySelector('.name');
const region = resultsContainer.querySelector('.region');
const country = resultsContainer.querySelector('.country');
const img = resultsContainer.querySelector('.current-left img');
const temperature = resultsContainer.querySelector('.temperature');
const fahrenheit = document.querySelector('.fahrenheit');
const celcius = document.querySelector('.celcius');
const humidity = resultsContainer.querySelector('.humidity span');
const feelsLike = resultsContainer.querySelector('.feels-like span');
const windValue = resultsContainer.querySelector('.wind-value');
const windUnits = resultsContainer.querySelector('.wind-units');
const dayTime = resultsContainer.querySelector('.day-time');
const description = resultsContainer.querySelector('.description');
const forecast = resultsContainer.querySelector('.forecast');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorMsg.innerHTML = '';
  input.disabled = true;
  submitBtn.disabled = true;

  weatherCache = await (0,_data_data__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(input.value);

  if (weatherCache.current) {
    resultsContainer.style.display = 'block';
    buildCurrent();
    buildForecast();
  } else {
    errorMsg.innerHTML = weatherCache.error;
  }

  input.disabled = false;
  submitBtn.disabled = false;
});

function buildCurrent() {
  name.innerHTML = weatherCache.current.name;
  region.innerHTML = weatherCache.current.region
    ? `${weatherCache.current.region},`
    : '';
  country.innerHTML = weatherCache.current.country;
  img.src = weatherCache.current.img;
  temperature.innerHTML = fahrenheit.disabled
    ? weatherCache.current.temperature.f
    : weatherCache.current.temperature.c;
  humidity.innerHTML = weatherCache.current.humidity;
  feelsLike.innerHTML = fahrenheit.disabled
    ? weatherCache.current.feelsLike.f
    : weatherCache.current.feelsLike.c;
  windValue.innerHTML = fahrenheit.disabled
    ? weatherCache.current.wind.mph
    : weatherCache.current.wind.kph;
  windUnits.innerHTML = fahrenheit.disabled ? 'mph' : 'kph';
  dayTime.innerHTML = weatherCache.current.dayTime;
  description.innerHTML = weatherCache.current.description;
}

function buildForecast() {
  forecast.innerHTML = '';
  weatherCache.forecast.forEach((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('forecast-day');
    dayDiv.innerHTML = /* html */ `
      <p class="forecast-day-label">${day.day}</p>
      <img src=${day.img} />
      <div>
        <p class="forecast-high"><span>${
          fahrenheit.disabled ? day.maxtemp_f : day.maxtemp_c
        }</span>°</p>
        <p class="forecast-low"><span>${
          fahrenheit.disabled ? day.mintemp_f : day.mintemp_c
        }</span>°</p>
      </div>
    `;
    forecast.appendChild(dayDiv);
  });
}

fahrenheit.addEventListener('click', () => {
  fahrenheit.disabled = true;
  celcius.disabled = false;
  temperature.innerHTML = weatherCache.current.temperature.f;
  feelsLike.innerHTML = weatherCache.current.feelsLike.f;
  windValue.innerHTML = weatherCache.current.wind.mph;
  windUnits.innerHTML = 'mph';

  const forecastDays = document.querySelectorAll('.forecast-day');
  forecastDays.forEach((day) => {
    const dayName = day.querySelector('.forecast-day-label').innerHTML;
    const dayHigh = day.querySelector('.forecast-high span');
    const dayLow = day.querySelector('.forecast-low span');
    const dayWeather = weatherCache.forecast.find(
      (cacheDay) => cacheDay.day === dayName
    );
    dayHigh.innerHTML = dayWeather.maxtemp_f;
    dayLow.innerHTML = dayWeather.mintemp_f;
  });
});

celcius.addEventListener('click', () => {
  celcius.disabled = true;
  fahrenheit.disabled = false;
  temperature.innerHTML = weatherCache.current.temperature.c;
  feelsLike.innerHTML = weatherCache.current.feelsLike.c;
  windValue.innerHTML = weatherCache.current.wind.kph;
  windUnits.innerHTML = 'kph';

  const forecastDays = document.querySelectorAll('.forecast-day');
  forecastDays.forEach((day) => {
    const dayName = day.querySelector('.forecast-day-label').innerHTML;
    const dayHigh = day.querySelector('.forecast-high span');
    const dayLow = day.querySelector('.forecast-low span');
    const dayWeather = weatherCache.forecast.find(
      (cacheDay) => cacheDay.day === dayName
    );
    dayHigh.innerHTML = dayWeather.maxtemp_c;
    dayLow.innerHTML = dayWeather.mintemp_c;
  });
});

const holder = input.value;
input.value = '';
input.focus();
input.value = holder;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdJQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxV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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2FuczpvcHN6QDkuLjQwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLWJnLXByaW1hcnktMTogcmdiKDQsIDAsIDg3KTtcbiAgLS1iZy1wcmltYXJ5LTI6IHJnYigzNiwgMzIsIDEwNSk7XG4gIC0tdGV4dC1wcmltYXJ5LTE6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgLS10ZXh0LXByaW1hcnktMjogcmdiKDE2MCwgMTYwLCAxNjApO1xuICAtLXRleHQtc2Vjb25kYXJ5OiByZ2IoNzAsIDcwLCA3MCk7XG4gIC0tYWNjZW50OiByZ2IoMjA2LCA2OSwgMCk7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LTEpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0YzRjZjksICM5MTk4ZTUpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnktMik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktMSk7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuLnNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnktMSk7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG59XG4uc2VhcmNoIGxhYmVsIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VhcmNoIGRpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2ggZGl2IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDUuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LTEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuLnNlYXJjaCBkaXYgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLnNlYXJjaCBkaXYgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnktMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWFyY2ggZGl2IGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cbi5zZWFyY2ggZGl2IGJ1dHRvbiBzcGFuIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5zZWFyY2ggZGl2IHAge1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ucmVzdWx0cyB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucmVzdWx0cyBoMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlc3VsdHMgaDIgLm5hbWUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi5yZXN1bHRzIC5jdXJyZW50IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJlc3VsdHMgLmN1cnJlbnQgLmN1cnJlbnQtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zcmVtO1xufVxuLnJlc3VsdHMgLmN1cnJlbnQgLmN1cnJlbnQtbGVmdCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucmVzdWx0cyAuY3VycmVudCAuY3VycmVudC1sZWZ0IC50ZW1wZXJhdHVyZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5yZXN1bHRzIC5jdXJyZW50IC5jdXJyZW50LWxlZnQgLnVuaXRzLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmVzdWx0cyAuY3VycmVudCAuY3VycmVudC1sZWZ0IC51bml0cy10b2dnbGUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVzdWx0cyAuY3VycmVudCAuY3VycmVudC1sZWZ0IC51bml0cy10b2dnbGUgYnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS0yKTtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuLnJlc3VsdHMgLmN1cnJlbnQgLmN1cnJlbnQtbGVmdCAudW5pdHMtdG9nZ2xlIGJ1dHRvbi5mYWhyZW5oZWl0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcbn1cbi5yZXN1bHRzIC5jdXJyZW50IC5jdXJyZW50LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5yZXN1bHRzIC5mb3JlY2FzdCB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAycmVtO1xufVxuLnJlc3VsdHMgLmZvcmVjYXN0IC5mb3JlY2FzdC1kYXkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnJlc3VsdHMgLmZvcmVjYXN0IC5mb3JlY2FzdC1kYXkgLmZvcmVjYXN0LWRheS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5yZXN1bHRzIC5mb3JlY2FzdCAuZm9yZWNhc3QtZGF5IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5yZXN1bHRzIC5mb3JlY2FzdCAuZm9yZWNhc3QtZGF5IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLnJlc3VsdHMgLmZvcmVjYXN0IC5mb3JlY2FzdC1kYXkgZGl2IC5mb3JlY2FzdC1oaWdoIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG4ucmVzdWx0cyAuZm9yZWNhc3QgLmZvcmVjYXN0LWRheSBkaXYgLmZvcmVjYXN0LWxvdyB7XG4gIGNvbG9yOiByZ2IoODEsIDE3OSwgMjE3KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBO0VBQ0UsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UscUNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtBQUZOO0FBSU07RUFDRSxVQUFBO0FBRlI7QUFNSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSk47QUFNTTtFQUNFLDBCQUFBO0FBSlI7QUFPTTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUxSO0FBU0k7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FBUE47O0FBWUE7RUFDRSxhQUFBO0FBVEY7QUFXRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVRKO0FBV0k7RUFDRSxvQkFBQTtBQVROO0FBYUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVhKO0FBYUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBWE47QUFhTTtFQUNFLFlBQUE7QUFYUjtBQWNNO0VBQ0UsZUFBQTtBQVpSO0FBZU07RUFDRSxhQUFBO0FBYlI7QUFlUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWJWO0FBZVU7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUFiWjtBQWdCVTtFQUNFLDRCQUFBO0FBZFo7QUFvQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFsQk47QUFzQkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFwQko7QUFzQkk7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFwQk47QUFzQk07RUFDRSxlQUFBO0FBcEJSO0FBdUJNO0VBQ0UsWUFBQTtBQXJCUjtBQXdCTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXRCUjtBQXdCUTtFQUNFLG9CQUFBO0FBdEJWO0FBeUJRO0VBQ0Usd0JBQUE7QUF2QlZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2FuczpvcHN6QDkuLjQwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1iZy1wcmltYXJ5LTE6IHJnYig0LCAwLCA4Nyk7XFxuICAtLWJnLXByaW1hcnktMjogcmdiKDM2LCAzMiwgMTA1KTtcXG4gIC0tdGV4dC1wcmltYXJ5LTE6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tdGV4dC1wcmltYXJ5LTI6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG4gIC0tdGV4dC1zZWNvbmRhcnk6IHJnYig3MCwgNzAsIDcwKTtcXG4gIC0tYWNjZW50OiByZ2IoMjA2LCA2OSwgMCk7XFxuXFxuICAmOjpzZWxlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LTEpO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNGM0Y2Y5LCAjOTE5OGU1KTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeS0yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktMSk7XFxuICB3aWR0aDogODAwcHg7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeS0xKTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCAjMDAwMDAwO1xcblxcbiAgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgcGFkZGluZy1yaWdodDogNS41cmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS0xKTtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcblxcbiAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICB3aWR0aDogNHJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5LTEpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMTBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICBwYWRkaW5nOiAycmVtO1xcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLm5hbWUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY3VycmVudCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgLmN1cnJlbnQtbGVmdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMC4zcmVtO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC50ZW1wZXJhdHVyZSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC51bml0cy10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IDA7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGJvdHRvbTogMC43NXJlbTtcXG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1cmVtO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LTEpO1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAmOmRpc2FibGVkIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LTIpO1xcbiAgICAgICAgICAgIGN1cnNvcjogaW5pdGlhbDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLmZhaHJlbmhlaXQge1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnQtcmlnaHQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDJyZW07XFxuXFxuICAgIC5mb3JlY2FzdC1kYXkge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjEpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gICAgICAuZm9yZWNhc3QtZGF5LWxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICB9XFxuXFxuICAgICAgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgICAgICAuZm9yZWNhc3QtaGlnaCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWxvdyB7XFxuICAgICAgICAgIGNvbG9yOiByZ2IoODEsIDE3OSwgMjE3KTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvblN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbic7XG4gICAgY29uc3QgZW5jb2RlZExvY2F0aW9uID0gZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uU3RyaW5nKTtcbiAgICBjb25zdCBkYXlzID0gMztcbiAgICBjb25zdCBrZXkgPSAnOTczNDg4MDY4YzYzNDc4N2I2NjIzMzIyMTI0MDgwMSc7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0/cT0ke2VuY29kZWRMb2NhdGlvbn0ma2V5PSR7a2V5fSZkYXlzPSR7ZGF5c31gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgY3VycmVudCA9IGJ1aWxkQ3VycmVudERhdGEoanNvbik7XG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGJ1aWxkRm9yZWNhc3REYXRhKGpzb24pO1xuICAgICAgcmV0dXJuIHsgY3VycmVudCwgZm9yZWNhc3QsIGVycm9yOiAnJyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgICAgIGZvcmVjYXN0OiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiAnTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmQuJyxcbiAgICAgIH07XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coYFNvbWV0aGluZyB3ZW50IHdyb25nIPCfmK06ICR7ZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZEN1cnJlbnREYXRhKGpzb24pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBqc29uLmxvY2F0aW9uLm5hbWUsXG4gICAgcmVnaW9uOiBqc29uLmxvY2F0aW9uLnJlZ2lvbixcbiAgICBjb3VudHJ5OiBqc29uLmxvY2F0aW9uLmNvdW50cnksXG4gICAgaW1nOiBgaHR0cHM6JHtqc29uLmN1cnJlbnQuY29uZGl0aW9uLmljb259YCxcbiAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgZjogTWF0aC5yb3VuZChqc29uLmN1cnJlbnQudGVtcF9mKSxcbiAgICAgIGM6IE1hdGgucm91bmQoanNvbi5jdXJyZW50LnRlbXBfYyksXG4gICAgfSxcbiAgICBodW1pZGl0eToganNvbi5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIGZlZWxzTGlrZToge1xuICAgICAgZjogTWF0aC5yb3VuZChqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2YpLFxuICAgICAgYzogTWF0aC5yb3VuZChqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2MpLFxuICAgIH0sXG4gICAgd2luZDoge1xuICAgICAgbXBoOiBNYXRoLnJvdW5kKGpzb24uY3VycmVudC53aW5kX21waCksXG4gICAgICBrcGg6IE1hdGgucm91bmQoanNvbi5jdXJyZW50LndpbmRfa3BoKSxcbiAgICB9LFxuICAgIGRheVRpbWU6IGRheWpzKGpzb24uY3VycmVudC5sYXN0X3VwZGF0ZWRfZXBvY2ggKiAxMDAwKS5mb3JtYXQoXG4gICAgICAnZGRkZCBoOm1tIEEnXG4gICAgKSxcbiAgICBkZXNjcmlwdGlvbjoganNvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZEZvcmVjYXN0RGF0YShqc29uKSB7XG4gIHJldHVybiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5Lm1hcCgoZGF5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF5anMoZGF5LmRhdGVfZXBvY2ggKiAxMDAwKS5mb3JtYXQoJ2RkZGQnKSxcbiAgICAgIG1heHRlbXBfYzogTWF0aC5yb3VuZChkYXkuZGF5Lm1heHRlbXBfYyksXG4gICAgICBtYXh0ZW1wX2Y6IE1hdGgucm91bmQoZGF5LmRheS5tYXh0ZW1wX2YpLFxuICAgICAgbWludGVtcF9jOiBNYXRoLnJvdW5kKGRheS5kYXkubWludGVtcF9jKSxcbiAgICAgIG1pbnRlbXBfZjogTWF0aC5yb3VuZChkYXkuZGF5Lm1pbnRlbXBfZiksXG4gICAgICBpbWc6IGBodHRwczoke2RheS5kYXkuY29uZGl0aW9uLmljb259YCxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgIH07XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciB9IGZyb20gJy4vZGF0YS9kYXRhJztcblxubGV0IHdlYXRoZXJDYWNoZTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2ggYnV0dG9uJyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2ggcCcpO1xuXG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcbmNvbnN0IG5hbWUgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCByZWdpb24gPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24nKTtcbmNvbnN0IGNvdW50cnkgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5Jyk7XG5jb25zdCBpbWcgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxlZnQgaW1nJyk7XG5jb25zdCB0ZW1wZXJhdHVyZSA9IHJlc3VsdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQnKTtcbmNvbnN0IGNlbGNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsY2l1cycpO1xuY29uc3QgaHVtaWRpdHkgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eSBzcGFuJyk7XG5jb25zdCBmZWVsc0xpa2UgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlIHNwYW4nKTtcbmNvbnN0IHdpbmRWYWx1ZSA9IHJlc3VsdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndpbmQtdmFsdWUnKTtcbmNvbnN0IHdpbmRVbml0cyA9IHJlc3VsdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndpbmQtdW5pdHMnKTtcbmNvbnN0IGRheVRpbWUgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kYXktdGltZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuY29uc3QgZm9yZWNhc3QgPSByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZXJyb3JNc2cuaW5uZXJIVE1MID0gJyc7XG4gIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICB3ZWF0aGVyQ2FjaGUgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcihpbnB1dC52YWx1ZSk7XG5cbiAgaWYgKHdlYXRoZXJDYWNoZS5jdXJyZW50KSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBidWlsZEN1cnJlbnQoKTtcbiAgICBidWlsZEZvcmVjYXN0KCk7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmVycm9yO1xuICB9XG5cbiAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgc3VibWl0QnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuZnVuY3Rpb24gYnVpbGRDdXJyZW50KCkge1xuICBuYW1lLmlubmVySFRNTCA9IHdlYXRoZXJDYWNoZS5jdXJyZW50Lm5hbWU7XG4gIHJlZ2lvbi5pbm5lckhUTUwgPSB3ZWF0aGVyQ2FjaGUuY3VycmVudC5yZWdpb25cbiAgICA/IGAke3dlYXRoZXJDYWNoZS5jdXJyZW50LnJlZ2lvbn0sYFxuICAgIDogJyc7XG4gIGNvdW50cnkuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQuY291bnRyeTtcbiAgaW1nLnNyYyA9IHdlYXRoZXJDYWNoZS5jdXJyZW50LmltZztcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gZmFocmVuaGVpdC5kaXNhYmxlZFxuICAgID8gd2VhdGhlckNhY2hlLmN1cnJlbnQudGVtcGVyYXR1cmUuZlxuICAgIDogd2VhdGhlckNhY2hlLmN1cnJlbnQudGVtcGVyYXR1cmUuYztcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBmYWhyZW5oZWl0LmRpc2FibGVkXG4gICAgPyB3ZWF0aGVyQ2FjaGUuY3VycmVudC5mZWVsc0xpa2UuZlxuICAgIDogd2VhdGhlckNhY2hlLmN1cnJlbnQuZmVlbHNMaWtlLmM7XG4gIHdpbmRWYWx1ZS5pbm5lckhUTUwgPSBmYWhyZW5oZWl0LmRpc2FibGVkXG4gICAgPyB3ZWF0aGVyQ2FjaGUuY3VycmVudC53aW5kLm1waFxuICAgIDogd2VhdGhlckNhY2hlLmN1cnJlbnQud2luZC5rcGg7XG4gIHdpbmRVbml0cy5pbm5lckhUTUwgPSBmYWhyZW5oZWl0LmRpc2FibGVkID8gJ21waCcgOiAna3BoJztcbiAgZGF5VGltZS5pbm5lckhUTUwgPSB3ZWF0aGVyQ2FjaGUuY3VycmVudC5kYXlUaW1lO1xuICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyQ2FjaGUuY3VycmVudC5kZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb3JlY2FzdCgpIHtcbiAgZm9yZWNhc3QuaW5uZXJIVE1MID0gJyc7XG4gIHdlYXRoZXJDYWNoZS5mb3JlY2FzdC5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXlEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGF5Jyk7XG4gICAgZGF5RGl2LmlubmVySFRNTCA9IC8qIGh0bWwgKi8gYFxuICAgICAgPHAgY2xhc3M9XCJmb3JlY2FzdC1kYXktbGFiZWxcIj4ke2RheS5kYXl9PC9wPlxuICAgICAgPGltZyBzcmM9JHtkYXkuaW1nfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JlY2FzdC1oaWdoXCI+PHNwYW4+JHtcbiAgICAgICAgICBmYWhyZW5oZWl0LmRpc2FibGVkID8gZGF5Lm1heHRlbXBfZiA6IGRheS5tYXh0ZW1wX2NcbiAgICAgICAgfTwvc3Bhbj7CsDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JlY2FzdC1sb3dcIj48c3Bhbj4ke1xuICAgICAgICAgIGZhaHJlbmhlaXQuZGlzYWJsZWQgPyBkYXkubWludGVtcF9mIDogZGF5Lm1pbnRlbXBfY1xuICAgICAgICB9PC9zcGFuPsKwPC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlEaXYpO1xuICB9KTtcbn1cblxuZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZmFocmVuaGVpdC5kaXNhYmxlZCA9IHRydWU7XG4gIGNlbGNpdXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQudGVtcGVyYXR1cmUuZjtcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IHdlYXRoZXJDYWNoZS5jdXJyZW50LmZlZWxzTGlrZS5mO1xuICB3aW5kVmFsdWUuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQud2luZC5tcGg7XG4gIHdpbmRVbml0cy5pbm5lckhUTUwgPSAnbXBoJztcblxuICBjb25zdCBmb3JlY2FzdERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtZGF5Jyk7XG4gIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBjb25zdCBkYXlOYW1lID0gZGF5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1kYXktbGFiZWwnKS5pbm5lckhUTUw7XG4gICAgY29uc3QgZGF5SGlnaCA9IGRheS5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaGlnaCBzcGFuJyk7XG4gICAgY29uc3QgZGF5TG93ID0gZGF5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1sb3cgc3BhbicpO1xuICAgIGNvbnN0IGRheVdlYXRoZXIgPSB3ZWF0aGVyQ2FjaGUuZm9yZWNhc3QuZmluZChcbiAgICAgIChjYWNoZURheSkgPT4gY2FjaGVEYXkuZGF5ID09PSBkYXlOYW1lXG4gICAgKTtcbiAgICBkYXlIaWdoLmlubmVySFRNTCA9IGRheVdlYXRoZXIubWF4dGVtcF9mO1xuICAgIGRheUxvdy5pbm5lckhUTUwgPSBkYXlXZWF0aGVyLm1pbnRlbXBfZjtcbiAgfSk7XG59KTtcblxuY2VsY2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2VsY2l1cy5kaXNhYmxlZCA9IHRydWU7XG4gIGZhaHJlbmhlaXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQudGVtcGVyYXR1cmUuYztcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IHdlYXRoZXJDYWNoZS5jdXJyZW50LmZlZWxzTGlrZS5jO1xuICB3aW5kVmFsdWUuaW5uZXJIVE1MID0gd2VhdGhlckNhY2hlLmN1cnJlbnQud2luZC5rcGg7XG4gIHdpbmRVbml0cy5pbm5lckhUTUwgPSAna3BoJztcblxuICBjb25zdCBmb3JlY2FzdERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtZGF5Jyk7XG4gIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBjb25zdCBkYXlOYW1lID0gZGF5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1kYXktbGFiZWwnKS5pbm5lckhUTUw7XG4gICAgY29uc3QgZGF5SGlnaCA9IGRheS5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaGlnaCBzcGFuJyk7XG4gICAgY29uc3QgZGF5TG93ID0gZGF5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1sb3cgc3BhbicpO1xuICAgIGNvbnN0IGRheVdlYXRoZXIgPSB3ZWF0aGVyQ2FjaGUuZm9yZWNhc3QuZmluZChcbiAgICAgIChjYWNoZURheSkgPT4gY2FjaGVEYXkuZGF5ID09PSBkYXlOYW1lXG4gICAgKTtcbiAgICBkYXlIaWdoLmlubmVySFRNTCA9IGRheVdlYXRoZXIubWF4dGVtcF9jO1xuICAgIGRheUxvdy5pbm5lckhUTUwgPSBkYXlXZWF0aGVyLm1pbnRlbXBfYztcbiAgfSk7XG59KTtcblxuY29uc3QgaG9sZGVyID0gaW5wdXQudmFsdWU7XG5pbnB1dC52YWx1ZSA9ICcnO1xuaW5wdXQuZm9jdXMoKTtcbmlucHV0LnZhbHVlID0gaG9sZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9