// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},f=r()?c:_;var p=function(e,r,t,n,o,a){var l,i,u;if(e<=0)return n;for(l=t<0?(1-e)*t:0,i=o<0?(1-e)*o:0,u=0;u<e;u++)n[i]=a(r[l]),l+=t,i+=o;return n},b=function(e,r,t,n,o,a,l,i){var u,c,_;if(e<=0)return o;for(u=n,c=l,_=0;_<e;_++)o[c]=i(r[u]),u+=t,c+=a;return o};(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"ndarray",b);var v=p;export{v as default,b as ndarray};
//# sourceMappingURL=mod.js.map
