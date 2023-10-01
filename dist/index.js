"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=c(function(g,p){
function d(r,e,u,v,a,f){var n,t,i;if(r<=0)return v;for(u<0?n=(1-r)*u:n=0,a<0?t=(1-r)*a:t=0,i=0;i<r;i++)v[t]=f(e[n]),n+=u,t+=a;return v}p.exports=d
});var m=c(function(h,l){
function y(r,e,u,v,a,f,n,t){var i,s,o;if(r<=0)return a;for(i=v,s=n,o=0;o<r;o++)a[s]=t(e[i]),i+=u,s+=f;return a}l.exports=y
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=x(),R=m();O(q,"ndarray",R);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
