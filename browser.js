// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var a,f,p,b;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),b&&u&&u.call(e,t,r.set),e};function f(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[d],i=d,t=null!=(o=e)&&_.call(o,i);try{e[d]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[d]=r:delete e[d],n}:function(e){return s.call(e)},v=Number,j=v.prototype.toString,g=y();function O(e){return"object"==typeof e&&(e instanceof v||(g?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function S(e){return p(e)||O(e)}f(S,"isPrimitive",p),f(S,"isObject",O);var h=Number.POSITIVE_INFINITY,P=v.NEGATIVE_INFINITY,I=Math.floor;function T(e){return e<h&&e>P&&I(t=e)===t;var t}function w(e){return p(e)&&T(e)}function N(e){return O(e)&&T(e.valueOf())}function E(e){return w(e)||N(e)}function x(e){return w(e)&&e<=0}function V(e){return N(e)&&e.valueOf()<=0}function A(e){return x(e)||V(e)}f(E,"isPrimitive",w),f(E,"isObject",N),f(A,"isPrimitive",x),f(A,"isObject",V),e.default=A,e.isObject=V,e.isPrimitive=x,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isNonPositiveInteger={});
//# sourceMappingURL=browser.js.map
