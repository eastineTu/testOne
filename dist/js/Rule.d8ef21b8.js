(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Rule"],{"2dd9":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"all-question"},[e("div",{staticClass:"mogol"}),e("div",{staticClass:"all-question-info"},[e("div",{staticClass:"question-info"},[e("img",{staticClass:"rule_title",attrs:{src:n("859a")}}),e("div",{staticClass:"title"},[t._v(" 答题规则 ")]),e("img",{staticClass:"rule_title_img",attrs:{src:n("856c")}}),e("div",{staticClass:"progress-value"},[t._v("答题规则：题目由单选题，多选题以及图片题组成，共10道题，满分100分，\n                多选题每选对一项有得分，选错整题不得分。单选和多选答对一项有得分，选错整题不得分。单选\n                和多选题当场计分，图片题由评委审核后计分，7月赛后根据总分排名，前500名晋级下一场比赛")]),e("div",{staticClass:"submit-button",on:{click:t.goQuestion}},[t._v(" 开始答题 ")])])])])},r=[],a=(n("a481"),{name:"Rule",data:function(){return{longitude:0,latitude:0,user:{}}},methods:{goQuestion:function(){this.$router.replace({name:"question"})}},created:function(){}}),s=a,c=(n("775c"),n("2877")),l=Object(c["a"])(s,e,r,!1,null,"488d6f8a",null);i["default"]=l.exports},4090:function(t,i,n){},"775c":function(t,i,n){"use strict";var e=n("4090"),r=n.n(e);r.a},"856c":function(t,i,n){t.exports=n.p+"img/login-bg.03c4c5d3.png"},"859a":function(t,i,n){t.exports=n.p+"img/rule_title.ff334042.png"},a481:function(t,i,n){"use strict";var e=n("cb7c"),r=n("4bf8"),a=n("9def"),s=n("4588"),c=n("0390"),l=n("5f1b"),u=Math.max,o=Math.min,v=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,i,n,h){return[function(e,r){var a=t(this),s=void 0==e?void 0:e[i];return void 0!==s?s.call(e,a,r):n.call(String(a),e,r)},function(t,i){var r=h(n,t,this,i);if(r.done)return r.value;var v=e(t),d=String(this),f="function"===typeof i;f||(i=String(i));var b=v.global;if(b){var m=v.unicode;v.lastIndex=0}var C=[];while(1){var _=l(v,d);if(null===_)break;if(C.push(_),!b)break;var w=String(_[0]);""===w&&(v.lastIndex=c(d,a(v.lastIndex),m))}for(var x="",$=0,S=0;S<C.length;S++){_=C[S];for(var k=String(_[0]),q=u(o(s(_.index),d.length),0),A=[],I=1;I<_.length;I++)A.push(g(_[I]));var M=_.groups;if(f){var y=[k].concat(A,q,d);void 0!==M&&y.push(M);var J=String(i.apply(void 0,y))}else J=p(k,d,q,A,M,i);q>=$&&(x+=d.slice($,q)+J,$=q+k.length)}return x+d.slice($)}];function p(t,i,e,a,s,c){var l=e+t.length,u=a.length,o=f;return void 0!==s&&(s=r(s),o=d),n.call(c,o,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,e);case"'":return i.slice(l);case"<":c=s[r.slice(1,-1)];break;default:var o=+r;if(0===o)return n;if(o>u){var d=v(o/10);return 0===d?n:d<=u?void 0===a[d-1]?r.charAt(1):a[d-1]+r.charAt(1):n}c=a[o-1]}return void 0===c?"":c})}})}}]);
//# sourceMappingURL=Rule.d8ef21b8.js.map