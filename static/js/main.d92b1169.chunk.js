(this["webpackJsonpreact-task-1"]=this["webpackJsonpreact-task-1"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(3),r=n.n(c);n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(4);function o(e){return a.a.createElement("div",{className:5===e.digit?"counter-stop":"counter"},e.digit)}var s=n(1),d=n(8),l={digit:0,disabledInc:!1,disabledReset:!0},u=function(e){return{type:"COUNTER/SET_DIGIT",digit:e}},b=function(e){return function(t){localStorage.setItem("counterValue",JSON.stringify(e)),t(u(e))}};function g(e){var t=Object(s.b)();return a.a.createElement("button",{className:"btn",disabled:e.disabled,onClick:function(){"inc"===e.title?t(b(e.digit+1)):"reset"===e.title&&t(b(0))}},e.title)}var m=function(){var e=Object(s.c)((function(e){return e.counter})),t=e.digit,n=e.disabledInc,c=e.disabledReset,r=Object(s.b)();return Object(i.useEffect)((function(){r((function(e){var t=Number(localStorage.getItem("counterValue"));t&&e(u(t))}))}),[]),a.a.createElement("div",{className:"App3"},a.a.createElement(o,{digit:t}),a.a.createElement("div",{className:"btnBlock"},a.a.createElement(g,{title:"inc",disabled:n,digit:t}),a.a.createElement(g,{title:"reset",disabled:c,digit:t})))},f=n(2),v=n(11),E=Object(f.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTER/SET_DIGIT":return Object(d.a)(Object(d.a)({},e),{},{digit:t.digit,disabledInc:5===t.digit||(t.digit,!1),disabledReset:0===t.digit||(t.digit,!1)});default:return e}}}),h=Object(f.d)(E,Object(f.a)(v.a));window.store=h,r.a.render(a.a.createElement(s.a,{store:h},a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d92b1169.chunk.js.map