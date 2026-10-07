"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=f(function(j,c){
function l(e,r,a,i,t,u,m,y){var n,s,v;if(e<=0)return t;for(n=i,s=m,v=0;v<e;v++)t[s]=y(r[n]),n+=a,s+=u;return t}c.exports=l
});var q=f(function(k,p){
var d=require('@stdlib/strided-base-stride2offset/dist'),O=o();function R(e,r,a,i,t,u){return O(e,r,a,d(e,a),i,t,d(e,t),u)}p.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),g=o();b(x,"ndarray",g);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
