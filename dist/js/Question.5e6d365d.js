(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Question"],{"014b":function(t,e,n){"use strict";var i=n("e53d"),s=n("07e3"),o=n("8e60"),r=n("63b6"),u=n("9138"),a=n("ebfd").KEY,c=n("294c"),l=n("dbdb"),f=n("45f2"),d=n("62a0"),h=n("5168"),p=n("ccb9"),v=n("6718"),A=n("47ee"),m=n("9003"),g=n("e4ae"),b=n("f772"),y=n("36c3"),x=n("1bc3"),w=n("aebd"),I=n("a159"),q=n("0395"),S=n("bf0b"),_=n("d9f6"),C=n("c3a1"),L=S.f,O=_.f,k=q.f,P=i.Symbol,E=i.JSON,T=E&&E.stringify,j="prototype",B=h("_hidden"),D=h("toPrimitive"),F={}.propertyIsEnumerable,N=l("symbol-registry"),M=l("symbols"),Q=l("op-symbols"),R=Object[j],G="function"==typeof P,V=i.QObject,$=!V||!V[j]||!V[j].findChild,H=o&&c(function(){return 7!=I(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=L(R,e);i&&delete R[e],O(t,e,n),i&&t!==R&&O(R,e,i)}:O,J=function(t){var e=M[t]=I(P[j]);return e._k=t,e},U=G&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},K=function(t,e,n){return t===R&&K(Q,e,n),g(t),e=x(e,!0),g(n),s(M,e)?(n.enumerable?(s(t,B)&&t[B][e]&&(t[B][e]=!1),n=I(n,{enumerable:w(0,!1)})):(s(t,B)||O(t,B,w(1,{})),t[B][e]=!0),H(t,e,n)):O(t,e,n)},z=function(t,e){g(t);var n,i=A(e=y(e)),s=0,o=i.length;while(o>s)K(t,n=i[s++],e[n]);return t},W=function(t,e){return void 0===e?I(t):z(I(t),e)},Y=function(t){var e=F.call(this,t=x(t,!0));return!(this===R&&s(M,t)&&!s(Q,t))&&(!(e||!s(this,t)||!s(M,t)||s(this,B)&&this[B][t])||e)},X=function(t,e){if(t=y(t),e=x(e,!0),t!==R||!s(M,e)||s(Q,e)){var n=L(t,e);return!n||!s(M,e)||s(t,B)&&t[B][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=k(y(t)),i=[],o=0;while(n.length>o)s(M,e=n[o++])||e==B||e==a||i.push(e);return i},tt=function(t){var e,n=t===R,i=k(n?Q:y(t)),o=[],r=0;while(i.length>r)!s(M,e=i[r++])||n&&!s(R,e)||o.push(M[e]);return o};G||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(Q,n),s(this,B)&&s(this[B],t)&&(this[B][t]=!1),H(this,t,w(1,n))};return o&&$&&H(R,t,{configurable:!0,set:e}),J(t)},u(P[j],"toString",function(){return this._k}),S.f=X,_.f=K,n("6abf").f=q.f=Z,n("355d").f=Y,n("9aa9").f=tt,o&&!n("b8e3")&&u(R,"propertyIsEnumerable",Y,!0),p.f=function(t){return J(h(t))}),r(r.G+r.W+r.F*!G,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var it=C(h.store),st=0;it.length>st;)v(it[st++]);r(r.S+r.F*!G,"Symbol",{for:function(t){return s(N,t+="")?N[t]:N[t]=P(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){$=!0},useSimple:function(){$=!1}}),r(r.S+r.F*!G,"Object",{create:W,defineProperty:K,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),E&&r(r.S+r.F*(!G||c(function(){var t=P();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){var e,n,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(n=e=i[1],(b(e)||void 0!==t)&&!U(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),i[1]=e,T.apply(E,i)}}),P[j][D]||n("35e8")(P[j],D,P[j].valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},"0395":function(t,e,n){var i=n("36c3"),s=n("6abf").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return s(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==o.call(t)?u(t):s(i(t))}},"06c3":function(t,e,n){},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var i=n("3a38"),s=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?s(t+e,0):o(t,e)}},1654:function(t,e,n){"use strict";var i=n("71c1")(!0);n("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,s;if(e&&"function"==typeof(n=t.toString)&&!i(s=n.call(t)))return s;if("function"==typeof(n=t.valueOf)&&!i(s=n.call(t)))return s;if(!e&&"function"==typeof(n=t.toString)&&!i(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),s=n("e53d").document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},"241e":function(t,e,n){var i=n("25eb");t.exports=function(t){return Object(i(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"30f1":function(t,e,n){"use strict";var i=n("b8e3"),s=n("63b6"),o=n("9138"),r=n("35e8"),u=n("481b"),a=n("8f60"),c=n("45f2"),l=n("53e2"),f=n("5168")("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",p="keys",v="values",A=function(){return this};t.exports=function(t,e,n,m,g,b,y){a(n,e,m);var x,w,I,q=function(t){if(!d&&t in L)return L[t];switch(t){case p:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_=g==v,C=!1,L=t.prototype,O=L[f]||L[h]||g&&L[g],k=O||q(g),P=g?_?q("entries"):k:void 0,E="Array"==e&&L.entries||O;if(E&&(I=l(E.call(new t)),I!==Object.prototype&&I.next&&(c(I,S,!0),i||"function"==typeof I[f]||r(I,f,A))),_&&O&&O.name!==v&&(C=!0,k=function(){return O.call(this)}),i&&!y||!d&&!C&&L[f]||r(L,f,k),u[e]=k,u[S]=A,g)if(x={values:_?k:q(v),keys:b?k:q(p),entries:P},y)for(w in x)w in L||o(L,w,x[w]);else s(s.P+s.F*(d||C),e,x);return x}},"32fc":function(t,e,n){var i=n("e53d").document;t.exports=i&&i.documentElement},"335c":function(t,e,n){var i=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var i=n("d9f6"),s=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var i=n("335c"),s=n("25eb");t.exports=function(t){return i(s(t))}},"38ff":function(t,e,n){t.exports=n.p+"img/take-photo.85cb61dd.png"},"3a38":function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},"45f2":function(t,e,n){var i=n("d9f6").f,s=n("07e3"),o=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!s(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},"47ee":function(t,e,n){var i=n("c3a1"),s=n("9aa9"),o=n("355d");t.exports=function(t){var e=i(t),n=s.f;if(n){var r,u=n(t),a=o.f,c=0;while(u.length>c)a.call(t,r=u[c++])&&e.push(r)}return e}},"481b":function(t,e){t.exports={}},"50d6":function(t,e,n){"use strict";var i=n("06c3"),s=n.n(i);s.a},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var i=n("dbdb")("wks"),s=n("62a0"),o=n("e53d").Symbol,r="function"==typeof o,u=t.exports=function(t){return i[t]||(i[t]=r&&o[t]||(r?o:s)("Symbol."+t))};u.store=i},"53e2":function(t,e,n){var i=n("07e3"),s=n("241e"),o=n("5559")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},5559:function(t,e,n){var i=n("dbdb")("keys"),s=n("62a0");t.exports=function(t){return i[t]||(i[t]=s(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var i=n("36c3"),s=n("b447"),o=n("0fc9");t.exports=function(t){return function(e,n,r){var u,a=i(e),c=s(a.length),l=o(r,c);if(t&&n!=n){while(c>l)if(u=a[l++],u!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},"5d58":function(t,e,n){t.exports=n("d8d6")},"62a0":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"63b6":function(t,e,n){var i=n("e53d"),s=n("584a"),o=n("d864"),r=n("35e8"),u=n("07e3"),a="prototype",c=function(t,e,n){var l,f,d,h=t&c.F,p=t&c.G,v=t&c.S,A=t&c.P,m=t&c.B,g=t&c.W,b=p?s:s[e]||(s[e]={}),y=b[a],x=p?i:v?i[e]:(i[e]||{})[a];for(l in p&&(n=e),n)f=!h&&x&&void 0!==x[l],f&&u(b,l)||(d=f?x[l]:n[l],b[l]=p&&"function"!=typeof x[l]?n[l]:m&&f?o(d,i):g&&x[l]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[a]=t[a],e}(d):A&&"function"==typeof d?o(Function.call,d):d,A&&((b.virtual||(b.virtual={}))[l]=d,t&c.R&&y&&!y[l]&&r(y,l,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"656c":function(t,e,n){t.exports=n.p+"img/question_people.7c58e514.png"},6718:function(t,e,n){var i=n("e53d"),s=n("584a"),o=n("b8e3"),r=n("ccb9"),u=n("d9f6").f;t.exports=function(t){var e=s.Symbol||(s.Symbol=o?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:r.f(t)})}},"67bb":function(t,e,n){t.exports=n("f921")},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6abf":function(t,e,n){var i=n("e6f3"),s=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var i=n("e53d"),s=n("35e8"),o=n("481b"),r=n("5168")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],l=i[c],f=l&&l.prototype;f&&!f[r]&&s(f,r,c),o[c]=o.Array}},"71c1":function(t,e,n){var i=n("3a38"),s=n("25eb");t.exports=function(t){return function(e,n){var o,r,u=String(s(e)),a=i(n),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===c||(r=u.charCodeAt(a+1))<56320||r>57343?t?u.charAt(a):o:t?u.slice(a,a+2):r-56320+(o-55296<<10)+65536)}}},"765d":function(t,e,n){n("6718")("observable")},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa2":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e90":function(t,e,n){var i=n("d9f6"),s=n("e4ae"),o=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){s(t);var n,r=o(e),u=r.length,a=0;while(u>a)i.f(t,n=r[a++],e[n]);return t}},"7f7f":function(t,e,n){var i=n("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in s||n("9e1e")&&i(s,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},8436:function(t,e){t.exports=function(){}},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8f60":function(t,e,n){"use strict";var i=n("a159"),s=n("aebd"),o=n("45f2"),r={};n("35e8")(r,n("5168")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(r,{next:s(1,n)}),o(t,e+" Iterator")}},9003:function(t,e,n){var i=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==i(t)}},9138:function(t,e,n){t.exports=n("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a159:function(t,e,n){var i=n("e4ae"),s=n("7e90"),o=n("1691"),r=n("5559")("IE_PROTO"),u=function(){},a="prototype",c=function(){var t,e=n("1ec9")("iframe"),i=o.length,s="<",r=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(s+"script"+r+"document.F=Object"+s+"/script"+r),t.close(),c=t.F;while(i--)delete c[a][o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[a]=i(t),n=new u,u[a]=null,n[r]=t):n=c(),void 0===e?n:s(n,e)}},a481:function(t,e,n){"use strict";var i=n("cb7c"),s=n("4bf8"),o=n("9def"),r=n("4588"),u=n("0390"),a=n("5f1b"),c=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,v){return[function(i,s){var o=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,o,s):n.call(String(o),i,s)},function(t,e){var s=v(n,t,this,e);if(s.done)return s.value;var f=i(t),d=String(this),h="function"===typeof e;h||(e=String(e));var m=f.global;if(m){var g=f.unicode;f.lastIndex=0}var b=[];while(1){var y=a(f,d);if(null===y)break;if(b.push(y),!m)break;var x=String(y[0]);""===x&&(f.lastIndex=u(d,o(f.lastIndex),g))}for(var w="",I=0,q=0;q<b.length;q++){y=b[q];for(var S=String(y[0]),_=c(l(r(y.index),d.length),0),C=[],L=1;L<y.length;L++)C.push(p(y[L]));var O=y.groups;if(h){var k=[S].concat(C,_,d);void 0!==O&&k.push(O);var P=String(e.apply(void 0,k))}else P=A(S,d,_,C,O,e);_>=I&&(w+=d.slice(I,_)+P,I=_+S.length)}return w+d.slice(I)}];function A(t,e,i,o,r,u){var a=i+t.length,c=o.length,l=h;return void 0!==r&&(r=s(r),l=d),n.call(u,l,function(n,s){var u;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(a);case"<":u=r[s.slice(1,-1)];break;default:var l=+s;if(0===l)return n;if(l>c){var d=f(l/10);return 0===d?n:d<=c?void 0===o[d-1]?s.charAt(1):o[d-1]+s.charAt(1):n}u=o[l-1]}return void 0===u?"":u})}})},ac6a:function(t,e,n){for(var i=n("cadf"),s=n("0d58"),o=n("2aba"),r=n("7726"),u=n("32e9"),a=n("84f2"),c=n("2b4c"),l=c("iterator"),f=c("toStringTag"),d=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=s(h),v=0;v<p.length;v++){var A,m=p[v],g=h[m],b=r[m],y=b&&b.prototype;if(y&&(y[l]||u(y,l,d),y[f]||u(y,f,m),a[m]=d,g))for(A in i)y[A]||o(y,A,i[A],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,n){var i=n("3a38"),s=Math.min;t.exports=function(t){return t>0?s(i(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bf0b:function(t,e,n){var i=n("355d"),s=n("aebd"),o=n("36c3"),r=n("1bc3"),u=n("07e3"),a=n("794b"),c=Object.getOwnPropertyDescriptor;e.f=n("8e60")?c:function(t,e){if(t=o(t),e=r(e,!0),a)try{return c(t,e)}catch(n){}if(u(t,e))return s(!i.f.call(t,e),t[e])}},c207:function(t,e){},c367:function(t,e,n){"use strict";var i=n("8436"),s=n("50ed"),o=n("481b"),r=n("36c3");t.exports=n("30f1")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,s(1)):s(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},c3a1:function(t,e,n){var i=n("e6f3"),s=n("1691");t.exports=Object.keys||function(t){return i(t,s)}},cbe0:function(t,e,n){"use strict";var i=n("ea95"),s=n.n(i);s.a},ccb9:function(t,e,n){e.f=n("5168")},d864:function(t,e,n){var i=n("79aa2");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,s){return t.call(e,n,i,s)}}return function(){return t.apply(e,arguments)}}},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},d9f6:function(t,e,n){var i=n("e4ae"),s=n("794b"),o=n("1bc3"),r=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),s)try{return r(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var i=n("584a"),s=n("e53d"),o="__core-js_shared__",r=s[o]||(s[o]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e254:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all-question"},[t.isQuestion?i("div",{staticClass:"question-info"},[i("img",{staticClass:"question-people",attrs:{src:n("656c")}}),i("div",{staticClass:"title-name"},[t._v(" 神雕侠侣")]),i("progress",{attrs:{max:"100"},domProps:{value:t.valueNum}}),i("div",{staticClass:"progress-value"},[t._v(t._s(t.valueNum)+"%")]),i("div",{staticClass:"question-message"},[t._v(t._s(t.questions[t.questionIndex].questionInfo))]),t.questionIndex<4?i("div",{staticClass:"select-input"},[i("label",[i("input",{attrs:{name:"Fruit",type:"radio",value:"A"}}),t._v("A:"+t._s(t.questions[t.questionIndex].selectA))]),i("br"),i("label",[i("input",{attrs:{name:"Fruit",type:"radio",value:"B"}}),t._v("B:"+t._s(t.questions[t.questionIndex].selectB))]),i("br"),i("label",[i("input",{attrs:{name:"Fruit",type:"radio",value:"C"}}),t._v("C:"+t._s(t.questions[t.questionIndex].selectC))]),i("br"),i("label",[i("input",{attrs:{name:"Fruit",type:"radio",value:"D"}}),t._v("D:"+t._s(t.questions[t.questionIndex].selectD))])]):t._e(),t.questionIndex>=4?i("div",{staticClass:"select-input"},[i("label",[i("input",{attrs:{name:"more",type:"checkbox",value:"A"}}),t._v("A:"+t._s(t.questions[t.questionIndex].selectA))]),i("br"),i("label",[i("input",{attrs:{name:"more",type:"checkbox",value:"B"}}),t._v("B:"+t._s(t.questions[t.questionIndex].selectB))]),i("br"),i("label",[i("input",{attrs:{name:"more",type:"checkbox",value:"C"}}),t._v("C:"+t._s(t.questions[t.questionIndex].selectC))]),i("br"),i("label",[i("input",{attrs:{name:"more",type:"checkbox",value:"D"}}),t._v("D:"+t._s(t.questions[t.questionIndex].selectD))]),i("br"),t.questions[t.questionIndex].selectE?i("label",[i("input",{attrs:{name:"more",type:"checkbox",value:"E"}}),t._v("E:"+t._s(t.questions[t.questionIndex].selectE))]):t._e()]):t._e(),i("div",{staticClass:"question-num"},[t._v(" "+t._s(t.questionIndex+1)+" /10")]),i("div",{staticClass:"submit-button",on:{click:function(e){return t.doCheck()}}},[t._v(" 提交")])]):t._e(),t.isTakePhoto?i("div",{staticClass:"question-info"},[i("img",{staticClass:"question-people",attrs:{src:n("656c")}}),i("div",{staticClass:"title-name"},[t._v(" 神雕侠侣")]),i("progress",{attrs:{max:"100"},domProps:{value:t.valueNum}}),i("div",{staticClass:"progress-value"},[t._v(t._s(t.valueNum)+"%")]),i("div",{staticClass:"question-message"},[t._v(t._s(t.takePhotoInfos[t.questionIndex-7].info))]),t._m(0),i("div",{staticClass:"select-photo"},[i("uploadImg",{ref:"upload1",attrs:{imgSrc:t.takePhotoInfos[t.questionIndex-7].imgSrc,upType:"camera"},on:{imageSrc:t.doSetImageList,progress:t.doProgress}})],1),i("div",{staticClass:"question-num"},[t._v(" "+t._s(t.questionIndex+1)+" /10")]),i("div",{staticClass:"submit-button",on:{click:t.doTakePhotoNext}},[t._v(" 下一题")])]):t._e(),t.isAnswer?i("div",{staticClass:"answer-info"},[i("div",{staticClass:"answer-message"},[t._v("\n            "+t._s(t.questions[t.questionIndex].questionInfo.substr(7,t.questions[t.questionIndex].questionInfo.length-1))+"\n        ")]),i("div",{staticClass:"answer-message"},[t._v("\n            A："+t._s(t.questions[t.questionIndex].selectA)+" B："+t._s(t.questions[t.questionIndex].selectB)+"\n        ")]),i("div",{staticClass:"answer-message"},[t._v("\n            C："+t._s(t.questions[t.questionIndex].selectC)+" D："+t._s(t.questions[t.questionIndex].selectD)+"\n        ")]),i("div",{staticClass:"answer-info-value"},[i("div",{staticClass:"title"},[t._v("答案：")]),i("div",{staticClass:"answer-info-info"},[t._v(t._s(t.questions[t.questionIndex].answer))])]),i("div",{staticClass:"answer-info-value"},[i("div",{staticClass:"title"},[t._v("解析：")]),i("div",{staticClass:"answer-info-info"},[t._v(t._s(t.questions[t.questionIndex].info))])]),i("div",{staticClass:"submit-button",on:{click:t.doNext}},[t._v(" 下一题")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-input"},[n("label",[n("input",{attrs:{name:"Fruit",type:"radio",value:"",checked:""}}),t._v(" A：是→上传照片 ")]),n("br"),n("label",[n("input",{attrs:{name:"Fruit",type:"radio",value:""}}),t._v(" B：否 ")])])}],o=(n("a481"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uploadImg",attrs:{id:"uploadImg"}},[n("div",{staticClass:"uploadImg_pop"},[n("img",{attrs:{alt:"",src:t.imgSrc}}),t.upType?n("input",{attrs:{id:"profilePhotoFileUpload",type:"file",accept:"image/*",capture:t.upType},on:{change:t.getFile}}):n("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.getFile}})]),n("div",{staticClass:"overLoading",attrs:{id:"over"}}),t._m(0)])}),r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layoutLoading",attrs:{id:"layout"}},[i("img",{attrs:{src:n("ecda")}})])}],u=n("5d58"),a=n.n(u),c=n("67bb"),l=n.n(c);function f(t){return f="function"===typeof l.a&&"symbol"===typeof a.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t},f(t)}function d(t){return d="function"===typeof l.a&&"symbol"===f(a.a)?function(t){return f(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":f(t)},d(t)}n("7f7f");var h={name:"uploadimg",props:{upType:{type:String,default:""},imgSrc:{}},data:function(){return{}},methods:{getFile:function(t){var e=this,n=t.target.files[0];if(n){this.imgSrc=window.URL.createObjectURL(n),this.$bmob.initialize("6cc51f95f96811441ba8e4754ac01f26","f3037695274e2983ee6b99b7e3e952b0");var i=this.$bmob.File(n.name,n);this.$emit("progress",50),this.showLoading(!0),i.save().then(function(t){e.showLoading(!1),e.$emit("imageSrc",t[0]),e.$emit("progress",100)})}},showLoading:function(t){t?(document.getElementById("over").style.display="block",document.getElementById("layout").style.display="block"):(document.getElementById("over").style.display="none",document.getElementById("layout").style.display="none")},photoCompress:function(t,e,n){if("img"==t.tagName.toLocaleLowerCase())return this.canvasDataURL(t.src,e,n),!1;var i=new FileReader;i.readAsDataURL(t),i.onload=function(){var t=this.result;this.canvasDataURL(t,e,n)}},canvasDataURL:function(t,e,n){var i=new Image;i.src=t;var s,o,r=0,u=0;i.onload=function(){var t=document.createElement("img");t.src=i.src,s=t.width,o=t.height;var a=document.createElement("canvas");a.width=e,a.height=e;var c=a.getContext("2d");c.clearRect(0,0,e,e),s>o?(s=e*s/o,o=e,r=-Math.round((s-e)/2)):(o=e*o/s,s=e,u=-Math.round((o-e)/2)),c.drawImage(t,r,u,s,o);var l=a.toDataURL("image/jpeg",.7);"object"==d(n)?n.appendChild(a):"function"==typeof n&&n(l)}}},created:function(){}},p=h,v=(n("50d6"),n("2877")),A=Object(v["a"])(p,o,r,!1,null,"05131a48",null),m=A.exports,g=function(){var t={title:"",url:""};window.history.pushState(t,t.title,t.url)},b={name:"Login",components:{uploadImg:m},data:function(){return{clickAble:!1,longitude:0,latitude:0,userId:"",address:"",questionIndex:0,countNum:0,valueNum:10,isQuestion:!0,isTakePhoto:!1,isAnswer:!1,img1:"",img2:"",img3:"",takePhotoInfos:[{info:"(图片题）8：是否有独立的体验区（10分)",selectAnswer:"",imgSrc:n("38ff")},{info:"(图片题）9：是否有美容仪器（10分)",selectAnswer:"",imgSrc:n("38ff")},{info:"(图片题）10：店内是否有生物科技护肤品的陈列（10分)",selectAnswer:"",imgSrc:n("38ff")}],questions:[{questionInfo:"(单选题)1：适合敏感肌肤的清洁类产品可以包含以下哪项(2分)",selectA:"皂基",selectB:"酒精香精",selectC:"人工防腐剂",selectD:"氨基酸",answer:"D",selectAnswer:"",info:"氨基酸类洁面温和不刺激，适合敏感肌肤使用 。"},{questionInfo:"(单选题)2：以下哪项不属于皮肤的三大层(4分)",selectA:"角质层",selectB:"表皮层",selectC:"真皮层",selectD:"皮下组织",answer:"A",selectAnswer:"",info:"皮肤分为三大层：表皮层、真皮层、皮下组织，而表皮层又分为5小层：角质层、透明层、颗粒层、有棘层、基底层。"},{questionInfo:"(单选题)3：以下哪项不属于生物科技护肤品销售人员的职业准则(6分)",selectA:"整洁的仪容仪表",selectB:"专业的皮肤知识",selectC:"专业的彩妆技巧",selectD:"熟练标准的接待流程",answer:"C",selectAnswer:"",info:"生物科技护肤品销售人员的职业准则包含：专业皮肤知识，整洁的仪容仪表，熟练的接待流程和专业的护肤手法及服务，熟知生物科技护肤品的理念和产品。"},{questionInfo:"(单选题)4：以下哪项不属于肌肤问题(8分)",selectA:"敏感",selectB:"特干",selectC:"混合",selectD:"痤疮",answer:"C",selectAnswer:"",info:"混合肌属于肌肤类型，不属于肌肤问题。"},{questionInfo:"(多选题)5：特干肌应选择含有____成分的护肤品(15分，选对一项得3分，错选整题不得分)",selectA:"透明质酸",selectB:"烟酰胺",selectC:"水杨酸",selectD:"甘油",answer:"ABD",selectAnswer:"",info:"对于有特干肌问题的人群来说，应选用含有增湿剂、润肤剂等成分的护肤品，而水杨酸刺激性过强，主要用于消炎祛痘，不适合特干肌人群使用。"},{questionInfo:"(多选题)6：生物科技护肤品建立顾客档案要包含哪些内容(15分，选对一项得3分，错选整题不得分)",selectA:"顾客信息",selectB:"肌肤检测结果",selectC:"问询结果",selectD:"肌肤问题",selectE:"所购产品",answer:"ABCDE",selectAnswer:"",info:"顾客档案不仅要包含联系信息，还要包含标准接待流程中产生的其他信息，如肌肤检测结果、问询结果、肌肤问题、所购产品等。"},{questionInfo:"(多选题)7:以下哪些可以是生物科技护肤品采用的水源(20分，选对一项得5分，错选整题不得分)",selectA:"温泉水",selectB:"矿泉水",selectC:"高纯水",selectD:"饮用水",answer:"ABCD",selectAnswer:"",info:"《化妆品生产企业规范》2007规定生产用水的水质应达到国家生活饮用水卫生标准（GB5749-2006）的要求。"}]}},methods:{showToast:function(t,e){e=isNaN(e)?3e3:e;var n=document.createElement("div");n.innerHTML=t,n.style.cssText="width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;",document.body.appendChild(n),setTimeout(function(){var t=.5;n.style.webkitTransition="-webkit-transform "+t+"s ease-in, opacity "+t+"s ease-in",n.style.opacity="0",setTimeout(function(){document.body.removeChild(n)},1e3*t)},e)},getCountNum:function(){this.questions[this.questionIndex].selectAnswer===this.questions[this.questionIndex].answer?(this.questionIndex<4&&(this.countNum+=2*(this.questionIndex+1)),4!==this.questionIndex&&5!==this.questionIndex||(this.countNum+=15),6===this.questionIndex&&(this.countNum+=20)):this.questionIndex>=4&&this.questionIndex<7&&(4!==this.questionIndex&&5!==this.questionIndex||-1==this.questions[this.questionIndex].answer.indexOf(this.questions[this.questionIndex].selectAnswer)?6===this.questionIndex&&-1!=this.questions[this.questionIndex].answer.indexOf(this.questions[this.questionIndex].selectAnswer)&&(this.countNum+=5*this.questions[this.questionIndex].selectAnswer.length):this.countNum+=3*this.questions[this.questionIndex].selectAnswer.length),console.log("得分："+this.countNum)},getRadioValue:function(){if(this.questionIndex<4)for(var t=document.getElementsByName("Fruit"),e=0;e<t.length;e++)t[e].checked&&(this.questions[this.questionIndex].selectAnswer=t[e].value);else for(var n=document.getElementsByName("more"),i=0;i<n.length;i++)n[i].checked&&(this.questions[this.questionIndex].selectAnswer+=n[i].value);console.log("选择："+this.questions[this.questionIndex].selectAnswer)},doCheck:function(){this.getRadioValue(),this.getCountNum(),this.questions[this.questionIndex].selectAnswer?(this.isQuestion=!1,this.isAnswer=!0):this.showToast("您还没有进行选择",1e3)},doNext:function(){this.questionIndex+=1,this.valueNum+=10,this.questionIndex<7?(this.isQuestion=!0,this.isAnswer=!1):(this.isQuestion=!1,this.isAnswer=!1,this.isTakePhoto=!0)},doSetImageList:function(t){7===this.questionIndex?this.img1=t:8===this.questionIndex?this.img2=t:9===this.questionIndex&&(this.img3=t)},doProgress:function(t){console.log("progress>>>>"+t),this.clickAble=100!==t},doTakePhotoNext:function(){9===this.questionIndex?(this.img3?this.takePhotoInfos[this.questionIndex-7].selectAnswer="A":this.takePhotoInfos[this.questionIndex-7].selectAnswer="B",this.doFinish()):8===this.questionIndex?(this.img2?this.takePhotoInfos[this.questionIndex-7].selectAnswer="A":this.takePhotoInfos[this.questionIndex-7].selectAnswer="B",this.questionIndex+=1,this.valueNum+=10):7===this.questionIndex&&(this.img1?this.takePhotoInfos[this.questionIndex-7].selectAnswer="A":this.takePhotoInfos[this.questionIndex-7].selectAnswer="B",this.questionIndex+=1,this.valueNum+=10)},doFinish:function(){var t=this;this.$bmob.initialize("5341f8e254942033b3dae717daa7eed5","4e0664824ca488cccad8fe1508a2baa0");var e=this.$bmob.Query("question");this.img1&&e.set("image1",this.img1),this.img2&&e.set("image2",this.img2),this.img3&&e.set("image3",this.img3);var n=this.$bmob.Pointer("_User"),i=n.set(this.userId);e.set("user",i);var s=this.$bmob.GeoPoint({latitude:this.latitude,longitude:this.longitude});e.set("location",s);var o=[];this.questions.forEach(function(t){o.push(t.selectAnswer)}),this.takePhotoInfos.forEach(function(t){o.push(t.selectAnswer)}),e.set("Q10",o),e.set("count",this.countNum),e.save().then(function(e){t.$router.replace({name:"finish",params:{countNum:t.countNum}}),console.log(e)}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;g(),window.onpopstate=function(){t.showToast("不能后退喔!")}},created:function(){this.userId=localStorage.getItem("userId"),this.longitude=parseFloat(localStorage.getItem("longitude")),this.latitude=parseFloat(localStorage.getItem("latitude"))}},y=b,x=(n("cbe0"),Object(v["a"])(y,i,s,!1,null,"e8c3c0e4",null));e["default"]=x.exports},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var i=n("07e3"),s=n("36c3"),o=n("5b4e")(!1),r=n("5559")("IE_PROTO");t.exports=function(t,e){var n,u=s(t),a=0,c=[];for(n in u)n!=r&&i(u,n)&&c.push(n);while(e.length>a)i(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},ea95:function(t,e,n){},ebfd:function(t,e,n){var i=n("62a0")("meta"),s=n("f772"),o=n("07e3"),r=n("d9f6").f,u=0,a=Object.isExtensible||function(){return!0},c=!n("294c")(function(){return a(Object.preventExtensions({}))}),l=function(t){r(t,i,{value:{i:"O"+ ++u,w:{}}})},f=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!a(t))return"F";if(!e)return"E";l(t)}return t[i].i},d=function(t,e){if(!o(t,i)){if(!a(t))return!0;if(!e)return!1;l(t)}return t[i].w},h=function(t){return c&&p.NEED&&a(t)&&!o(t,i)&&l(t),t},p=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},ecda:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAAQAMQQAObm5uLi4unp6dHR0cnJydfX1+jo6O/v7/Dw8NPT0/39/crKyvr6+uDg4MfHx////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAQACwAAAAAEAAQAAAFXeAjPkiTjGgaLI6Tvs9BtPAIMPH8KgK5DDhZSlFYlFrAGIrYMrUcyRGzdapZr6jE02FAyZ6JxrOrEAVnjgaCRS6IkjLjo9F2PaDBwLJAu+NfAix2LQsAMCVVYQgoIQAh+QQFAAAQACwJAAAABwAHAAAFFGDSIE/5OM7SmKhjsK55vjIt32UIACH5BAUAABAALAoAAwAGAAoAAAUaICQqgggpxYKcheM0qOskZm0/eA7luMibvRAAIfkEBQAAEAAsCQAJAAcABwAABRXgcxBOmTwi6TRouiAoIwbtI9d4/oQAIfkEBQAAEAAsAwAKAAoABgAABRsgJI7MKD6POJQnKjpD60IODKFzvQD3nDQISAgAIfkEBQAAEAAsAAAJAAcABwAABRPgI45kSSrFWTgj6rCisLwk0iQhACH5BAUAABAALAAAAwAHAAoAAAUcIPRAJPmco4mm61m+cJk4tGNATX0ryGK/jVspBAAh+QQFAAAQACwAAAAABwAHAAAFFOAjjmRpPgBDIsugio3juGIiz2oIADs="},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol}}]);
//# sourceMappingURL=Question.5e6d365d.js.map