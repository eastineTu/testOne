(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{2161:function(t,e,i){"use strict";var n=i("6e63"),o=i.n(n);o.a},3547:function(t,e,i){t.exports=i.p+"img/phone.20f09b3f.png"},"51e1":function(t,e,i){t.exports=i.p+"img/login-back.0428876e.png"},"554f":function(t,e,i){t.exports=i.p+"img/login-error.49d1678e.png"},6432:function(t,e,i){t.exports=i.p+"img/people.4e0bef12.png"},"6e63":function(t,e,i){},"856c":function(t,e,i){t.exports=i.p+"img/login-bg.03c4c5d3.png"},a481:function(t,e,i){"use strict";var n=i("cb7c"),o=i("4bf8"),r=i("9def"),a=i("4588"),s=i("0390"),c=i("5f1b"),l=Math.max,u=Math.min,d=Math.floor,g=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,e,i,h){return[function(n,o){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,o):i.call(String(r),n,o)},function(t,e){var o=h(i,t,this,e);if(o.done)return o.value;var d=n(t),g=String(this),p="function"===typeof e;p||(e=String(e));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var x=[];while(1){var w=c(d,g);if(null===w)break;if(x.push(w),!m)break;var S=String(w[0]);""===S&&(d.lastIndex=s(g,r(d.lastIndex),b))}for(var k="",y=0,C=0;C<x.length;C++){w=x[C];for(var _=String(w[0]),L=l(u(a(w.index),g.length),0),$=[],E=1;E<w.length;E++)$.push(f(w[E]));var T=w.groups;if(p){var M=[_].concat($,L,g);void 0!==T&&M.push(T);var B=String(e.apply(void 0,M))}else B=v(_,g,L,$,T,e);L>=y&&(k+=g.slice(y,L)+B,y=L+_.length)}return k+g.slice(y)}];function v(t,e,n,r,a,s){var c=n+t.length,l=r.length,u=p;return void 0!==a&&(a=o(a),u=g),i.call(s,u,function(i,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return i;if(u>l){var g=d(u/10);return 0===g?i:g<=l?void 0===r[g-1]?o.charAt(1):r[g-1]+o.charAt(1):i}s=r[u-1]}return void 0===s?"":s})}})},a55b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all-login"},[n("img",{staticClass:"login-bg",attrs:{src:i("856c")}}),t.isLoginError?t._e():n("div",{staticClass:"login-info"},[n("div",{staticClass:"login-name"},[n("img",{attrs:{src:i("6432")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"门店编号"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),n("div",{staticClass:"login-name"},[n("img",{attrs:{src:i("3547")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t.isLoginError?n("div",{staticClass:"login-error"},[t._m(0),n("div",{staticClass:"error-info"},[t._v("1.您未入围")]),n("div",{staticClass:"error-info"},[t._v("2.门店编号或手机号输入有误")])]):t._e(),n("img",{staticClass:"login-submit",attrs:{src:t.src},on:{click:t.doLogin}}),n("div",{staticClass:"login-bottom"},[t._v("请务必在您的门店内答题，我将全程对您实时定位")])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-title"},[n("img",{attrs:{src:i("554f")}}),t._v(" 无法登陆\n        ")])}],r=(i("a481"),{name:"Login",data:function(){return{isLoginError:!1,longitude:0,latitude:0,code:"",phone:"",user:{},src:i("ddf6")}},methods:{showToast:function(t,e){e=isNaN(e)?3e3:e;var i=document.createElement("div");i.innerHTML=t,i.style.cssText="width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;",document.body.appendChild(i),setTimeout(function(){var t=.5;i.style.webkitTransition="-webkit-transform "+t+"s ease-in, opacity "+t+"s ease-in",i.style.opacity="0",setTimeout(function(){document.body.removeChild(i)},1e3*t)},e)},getLocation:function(){var t=this,e=new BMap.Map("allmap"),i=new BMap.Point(116.331398,39.897445);e.centerAndZoom(i,12);var n=new BMap.Geolocation;n.getCurrentPosition(function(i){if(this.getStatus()==BMAP_STATUS_SUCCESS){var n=new BMap.Marker(i.point);e.addOverlay(n),e.panTo(i.point),t.longitude=i.point.lng,t.latitude=i.point.lat}else{var o=window.open("about:blank","_self");o.opener=null,o.close(),WeixinJSBridge.call("closeWindow")}},{enableHighAccuracy:!0})},loginBack:function(){this.src=i("ddf6"),this.isLoginError=!1},loginError:function(){this.src=i("51e1"),this.isLoginError=!0},doLogin:function(){var t=this;if(this.$bmob.initialize("5341f8e254942033b3dae717daa7eed5","4e0664824ca488cccad8fe1508a2baa0"),this.longitude)this.isLoginError?this.loginBack():this.$bmob.User.login(this.code,this.phone).then(function(e){t.checkHasQuestions(e.objectId)}).catch(function(e){t.loginError(),console.log(e)});else{WeixinJSBridge.call("closeWindow"),this.showToast("您没有开启权限！");var e=window.open("about:blank","_self");e.opener=null,e.close()}},checkHasQuestions:function(t){var e=this,i=this.$bmob.Pointer("_User"),n=i.set(t),o=this.$bmob.Query("question");o.equalTo("user","==",n),o.count().then(function(t){0===t?(e.user=t,e.loginSuccess()):e.showToast("你已经答过题了！")})},loginSuccess:function(){localStorage.setItem("userId",this.user.objectId),localStorage.setItem("longitude",this.longitude),localStorage.setItem("latitude",this.latitude),console.log("qqq>>>>>"+this.longitude),this.$router.replace({name:"empty"})},checkWx:function(){}},created:function(){this.checkWx(),this.getLocation()}}),a=r,s=(i("2161"),i("2877")),c=Object(s["a"])(a,n,o,!1,null,"fdf02cc4",null);e["default"]=c.exports},ddf6:function(t,e,i){t.exports=i.p+"img/login-submit.b9a97c62.png"}}]);
//# sourceMappingURL=Login.bbeeb7e0.js.map