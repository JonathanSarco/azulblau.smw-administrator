(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({Dashboard:"Dashboard",Layout:"Layout",Login:"Login"}[e]||e)+"."+{Dashboard:"65300650",Layout:"e5110300",Login:"a6f8cdac"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Dashboard:1,Layout:1,Login:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Dashboard:"Dashboard",Layout:"Layout",Login:"Login"}[e]||e)+"."+{Dashboard:"5e40dd89",Layout:"5b9ca9c7",Login:"ca7de78b"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5142:function(e,t,n){"use strict";n("c748")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"auth0options",(function(){return B}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,u){var c=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(c)}var o={name:"App",components:{}},u=(n("5142"),n("d959")),c=n.n(u);const i=c()(o,[["render",a]]);var s=i,l=n("46f3"),d=n("2909"),p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=[{name:"Dashboard",path:"/",component:function(){return n.e("Dashboard").then(n.bind(null,"5c3a"))}}],h=n("b628"),g=[{name:"Layout",path:"/",component:function(){return n.e("Layout").then(n.bind(null,"a9c3"))},children:Object(d["a"])(f),beforeEnter:h["b"]},{name:"Login",path:"/auth",component:function(){return n.e("Login").then(n.bind(null,"b461"))}}],b=Object(p["b"])({history:Object(p["a"])(""),routes:g}),m=b,v=n("5502"),y=n("1da1"),w=(n("96cf"),n("4fad"),n("bf19"),n("4f60")),j={apiKey:"AIzaSyDSJwT7flBGyZpIE7Fnx5PqyFEVU0cBp7Q",authDomain:"azulblau-admin.firebaseapp.com",projectId:"azulblau-admin",storageBucket:"azulblau-admin.appspot.com",messagingSenderId:"228464048625",appId:"1:228464048625:web:504397225bcf8e050b2c50",measurementId:"G-YPB7B74YYP"};w["a"].initializeApp(j);var O=w["a"],k=(n("2979"),O.database()),L=k.ref(),x=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.get();case 3:return t=e.sent,n=Object.entries(t.toJSON().murals),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.log("Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E={getMurals:x},A={GetMuralsBegin:function(e){e.loading=!0,e.error=null,e.murals=[]},GetMuralsFinished:function(e,t){e.loading=!1,e.murals=t},GetMuralsError:function(e,t){e.loading=!1,e.error=t}},S=function(){return{loading:!1,murals:[],error:null}},P={fetchMurals:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("GetMuralsBegin"),t.prev=2,t.next=5,E.getMurals();case 5:r=t.sent,console.log("response ",r),n("GetMuralsFinished",r),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log("Error: ",t.t0),n("GetMuralsError",t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},M={state:S,actions:P,mutations:A},R=Object(v["a"])({modules:{fetchMurals:M}}),B=(n("4821"),n("d1e78"),{domain:"dev-1c3ws2jm.us.auth0.com",client_id:"wWE43uRE11GBvpnWgJuKqjn0HlL8PHSW",redirect_uri:"http://localhost:8080"}),C=Object(r["createApp"])(s);function D(e){m.push(e&&e.targetUrl?e.targetUrl:"/")}Object(h["c"])(B,D).then((function(e){C.use(e).use(l["a"]).use(R).use(m).mount("#app")}))},b628:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return m}));var r,a=n("5530"),o=n("1da1"),u=(n("96cf"),n("caad"),n("2532"),n("ac1f"),n("841c"),n("9767")),c=n("7a23"),i=Object(c["reactive"])({loading:!0,isAuthenticated:!1,user:{},popupOpen:!1,error:null,permissions:[]});function s(){return l.apply(this,arguments)}function l(){return l=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.loading=!0,e.prev=1,e.next=4,r.handleRedirectCallback();case 4:return e.next=6,r.getUser();case 6:i.user=e.sent,i.isAuthenticated=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),i.error=e.t0;case 13:return e.prev=13,i.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])}))),l.apply(this,arguments)}function d(e){return r.loginWithRedirect(e)}function p(e){return r.getIdTokenClaims(e)}function f(e){return r.getTokenSilently(e)}function h(e){return r.logout(e)}var g={isAuthenticated:Object(c["computed"])((function(){return i.isAuthenticated})),loading:Object(c["computed"])((function(){return i.loading})),getIdTokenClaims:p,getTokenSilently:f,loginWithRedirect:d,handleRedirectCallback:s,logout:h},b=function(e,t,n){var r=g.isAuthenticated,a=g.loading,o=function(){r.value?n():n({name:"Login"})};if(!a.value)return o();Object(c["watchEffect"])((function(){if(!1===a.value)return o()}))},m=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])(Object(a["a"])({},t));case 2:if(r=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,r.handleRedirectCallback();case 7:o=e.sent,c=o.appState,n(c);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),i.error=e.t0;case 15:return e.prev=15,e.next=18,r.isAuthenticated();case 18:return i.isAuthenticated=e.sent,e.next=21,r.getUser();case 21:return i.user=e.sent,i.loading=!1,e.finish(15);case 24:return e.abrupt("return",{install:function(e){e.config.globalProperties.$auth=g}});case 25:case"end":return e.stop()}}),e,null,[[3,12,15,24]])})));return function(t,n){return e.apply(this,arguments)}}()},c748:function(e,t,n){}});
//# sourceMappingURL=app.896eb7ea.js.map