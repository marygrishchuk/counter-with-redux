(this["webpackJsonpreact-task-1"]=this["webpackJsonpreact-task-1"]||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(4),o=n.n(i);n(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1);n(2);function s(e){return c.a.createElement("div",{className:5===e.digit?"counter-stop":"counter"},e.digit)}function l(e){return c.a.createElement("button",{className:"btn",disabled:e.disabled,onClick:function(){"inc"===e.title?e.changeDigit(e.digit+1):"reset"===e.title&&e.changeDigit(0)}},e.title)}var u=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),d=u[0],g=u[1],m=Object(a.useState)(!0),b=Object(r.a)(m,2),f=b[0],h=b[1];function v(e){i(e),5===e?g(!0):0===e?(g(!1),h(!0)):h(!1)}return Object(a.useEffect)((function(){var e=Number(localStorage.getItem("counterValue"));e&&i(e),5===e?(g(!0),h(!1)):0===e&&(g(!1),h(!0))}),[]),Object(a.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(n))}),[n]),c.a.createElement("div",{className:"App3"},c.a.createElement(s,{digit:n}),c.a.createElement("div",{className:"btnBlock"},c.a.createElement(l,{title:"inc",disabled:d,changeDigit:v,digit:n}),c.a.createElement(l,{title:"reset",disabled:f,changeDigit:v,digit:n})))};o.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e5aa09ee.chunk.js.map