// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function r(e){return"number"==typeof e}function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function n(e,t,r){var n=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var t,i,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!r(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(i=(-s).toString(t),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(t),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===t&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===t&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,_=/(\..*[^0])0*e/;function b(e){var t,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((t=e.precision)>0&&(t-=1),i=n.toExponential(t)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,_,"$1e"),i=u.call(i,v,"e"),i=u.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,h,"e-0$1"),e.alternate&&(i=u.call(i,g,"$1."),i=u.call(i,d,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):c.call(i)}function w(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var m=String.fromCharCode,x=isNaN,k=Array.isArray;function E(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function S(e){var t,r,i,a,o,l,c,p,u,f,h,g,d;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))l+=i;else{if(t=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),r=i.flags,u=0;u<r.length;u++)switch(a=r.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,x(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(t&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,t=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=t?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,h=i.width,g=i.padRight,d=void 0,(d=h-f.length)<0?f:f=g?f+w(d):w(d)+f)),l+=i.arg||"",c+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function A(e){var t,r,i,n;for(r=[],n=0,i=j.exec(e);i;)(t=e.slice(n,j.lastIndex-i[0].length)).length&&r.push(t),r.push(V(i)),n=j.lastIndex,i=j.exec(e);return(t=e.slice(n)).length&&r.push(t),r}function T(e){var t,r;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[A(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return S.apply(null,t)}var $,F=Object.prototype,I=F.toString,O=F.__defineGetter__,C=F.__defineSetter__,P=F.__lookupGetter__,R=F.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((n="value"in r)&&(P.call(e,t)||R.call(e,t)?(i=e.__proto__,e.__proto__=F,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),a="get"in r,o="set"in r,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,t,r.get),o&&C&&C.call(e,t,r.set),e};var Z=$;function G(e,t,r){Z(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var W,L,N,U=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X&&"symbol"==typeof X("foo")&&(L="iterator",null!=(W=X)&&U.call(W,L))&&"symbol"==typeof X.iterator?Symbol.iterator:null;function J(e){return this.next=null,this.prev=null,this.value=e,this}function M(){return this instanceof M?(this._length=0,this._first=null,this._last=null,this):new M}return G(M.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),G(M.prototype,"first",(function(){if(this._length)return this._first.value})),G(M.prototype,"iterator",(function(){var e,t,r,i,n;return r=this,n=-1,e=this.toArray(),G(t={},"next",(function(){return n+=1,i||n>=e.length?{done:!0}:{value:e[n],done:!1}})),G(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),z&&G(t,z,(function(){return r.iterator()})),t})),G(M.prototype,"last",(function(){if(this._length)return this._last.value})),N=M.prototype,Z(N,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),G(M.prototype,"pop",(function(){var e;return this._length&&(e=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),e})),G(M.prototype,"push",(function(e){var t;return t=new J(e),0===this._length?(this._first=t,this._last=t):(t.prev=this._last,this._last.next=t,this._last=t),this._length+=1,this})),G(M.prototype,"toArray",(function(){var e,t,r;for(t=[],e=this._first,r=0;r<this._length;r++)t.push(e.value),e=e.next;return t})),G(M.prototype,"toJSON",(function(){var e={type:"fifo"};return e.data=this.toArray(),e})),M},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).fifo=t();
//# sourceMappingURL=browser.js.map
