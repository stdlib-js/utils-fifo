// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var c=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,y=/\.0$/,_=/\.0*e/,w=/(\..*[^0])0*e/;function b(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":c(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,_,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,h,"e+0$1"),i=f.call(i,g,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,v,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+m(i):m(i)+e}var k=String.fromCharCode,E=isNaN,S=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,i,a,o,c,p,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function O(e){var r,t,i;if(!I(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return A.apply(null,t)}var T,C=Object.prototype,P=C.toString,R=C.__defineGetter__,Z=C.__defineSetter__,G=C.__lookupGetter__,W=C.__lookupSetter__;T=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var L=T;function N(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0;var z,J,M,q="function"==typeof X&&"symbol"==typeof X("foo")&&(J="iterator",null!=(z=X)&&U.call(z,J))&&"symbol"==typeof X.iterator?Symbol.iterator:null;function B(e){return this.next=null,this.prev=null,this.value=e,this}function D(){return this instanceof D?(this._length=0,this._first=null,this._last=null,this):new D}N(D.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),N(D.prototype,"first",(function(){if(this._length)return this._first.value})),N(D.prototype,"iterator",(function(){var e,r,t,i,n;return t=this,n=-1,e=this.toArray(),N(r={},"next",(function(){if(n+=1,i||n>=e.length)return{done:!0};return{value:e[n],done:!1}})),N(r,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),q&&N(r,q,(function(){return t.iterator()})),r})),N(D.prototype,"last",(function(){if(this._length)return this._last.value})),M=D.prototype,L(M,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),N(D.prototype,"pop",(function(){var e;return this._length&&(e=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),e})),N(D.prototype,"push",(function(e){var r;return r=new B(e),0===this._length?(this._first=r,this._last=r):(r.prev=this._last,this._last.next=r,this._last=r),this._length+=1,this})),N(D.prototype,"toArray",(function(){var e,r,t;for(r=[],e=this._first,t=0;t<this._length;t++)r.push(e.value),e=e.next;return r})),N(D.prototype,"toJSON",(function(){var e={type:"fifo"};return e.data=this.toArray(),e}));export{D as default};
//# sourceMappingURL=mod.js.map