import{S as t,i as e,s,R as a,e as n,j as r,k as o,c as $,a as c,m as f,n as l,d as m,f as u,E as p,o as i,v as d,r as g,w as x,M as h,Z as w,H as v,t as y,g as C}from"../../../chunks/vendor-718580ba.js";import{c as b}from"../../../chunks/mapstore-48813ed6.js";function j(t){let e,s;return e=new w({props:{closeButtonLabelText:"Clear search input",defaultValue:"",autocomplete:"on",id:"search-1",labelText:"Postcode Search",onChange:t[1],onKeyDown:I,size:"sm",style:"max-width:100px"}}),{c(){r(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.onChange=t[1]),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function k(t){let e;return{c(){e=y(".")},l(t){e=C(t,".")},m(t,s){u(t,e,s)},d(t){t&&m(e)}}}function E(t){let e,s;return e=new v({props:{$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){i(e,t,a),s=!0},p(t,s){const a={};4&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function D(t){let e,s,h,w,v,y;return h=new a({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),v=new a({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){e=n("main"),s=n("div"),r(h.$$.fragment),w=o(),r(v.$$.fragment)},l(t){e=$(t,"MAIN",{});var a=c(e);s=$(a,"DIV",{});var n=c(s);f(h.$$.fragment,n),w=l(n),f(v.$$.fragment,n),n.forEach(m),a.forEach(m)},m(t,a){u(t,e,a),p(e,s),i(h,s,null),p(s,w),i(v,s,null),y=!0},p(t,[e]){const s={};5&e&&(s.$$scope={dirty:e,ctx:t}),h.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),v.$set(a)},i(t){y||(d(h.$$.fragment,t),d(v.$$.fragment,t),y=!0)},o(t){g(h.$$.fragment,t),g(v.$$.fragment,t),y=!1},d(t){t&&m(e),x(h),x(v)}}}const I=function(t){return[1,2,3]};function M(t,e,s){let a;h(t,b,(t=>s(0,a=t)));return[a,function(t){console.log(t),a.setCenter(t)}]}export default class extends t{constructor(t){super(),e(this,t,M,D,s,{})}}