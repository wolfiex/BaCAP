import{S as Me,i as Xe,s as Ye,a as Qe,e as D,c as Ze,b as F,g as Y,t as N,d as Q,f as V,h as B,j as xe,o as be,k as et,l as tt,m as nt,n as we,p as H,q as rt,r as at,u as ot,v as J,w as re,x as K,y as z,z as Ce}from"./chunks/index-64a06eee.js";import{g as Be,f as Fe,s as X,a as ve,i as st}from"./chunks/singletons-5012c114.js";import{R as Je,H as ke}from"./chunks/control-03134885.js";import{s as it}from"./chunks/paths-6cd3a76e.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Ke={},W=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=ct(o,s),o in Ke)return;Ke[o]=!0;const d=o.endsWith(".css"),t=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":lt,d||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),d)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const s of dt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(s,o,d)=>d(r,o),ht(n),n}function ht(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;fe.delete(s)}return Re(r,e)};const fe=new Map;function _t(r,e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;n&&typeof n.body=="string"&&(o+=`[data-hash="${mt(n.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:t,...l}=JSON.parse(d.textContent),u=d.getAttribute("data-ttl");return u&&fe.set(e,{body:t,init:l,ttl:1e3*Number(u)}),Promise.resolve(new Response(t,l))}return Re(r,n)}function gt(r,e){const n=fe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);fe.delete(r)}return Re(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((d,t,l)=>{const u=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(h)return e.push(h[1]),n.push(h[2]),"(?:/(.*))?";const g=t===l.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((S,T)=>{if(T%2){const v=wt.exec(S);if(!v)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,G,q]=v;return e.push(G),n.push(q),C?"(.*?)":"([^/]+?)"}return g&&S.includes(".")&&(s=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,n,s){const o={};for(let d=0;d<e.length;d+=1){const t=e[d],l=n[d],u=r[d+1]||"";if(l){const h=s[l];if(!h)throw new Error(`Missing "${l}" param matcher`);if(!h(u))return}o[t]=u}return o}function kt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([l,[u,h,g]])=>{const{pattern:S,names:T,types:v}=yt(l),C={id:l,exec:G=>{const q=S.exec(G);if(q)return vt(q,T,v,s)},errors:[1,...g||[]].map(G=>r[G]),layouts:[0,...h||[]].map(t),leaf:d(u)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function d(l){const u=l<0;return u&&(l=~l),[u,r[l]]}function t(l){return l===void 0?l:[o.has(l),r[l]]}}function Et(r){let e,n,s;var o=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=new o(d(r))),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&re(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),s=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&2&&(u.form=t[1]),o!==(o=t[0][0])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&B(n),e&&z(e,t)}}}function $t(r){let e,n,s;var o=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Pt]},$$scope:{ctx:t}}}}return o&&(e=new o(d(r))),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&re(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),s=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&1051&&(u.$$scope={dirty:l,ctx:t}),o!==(o=t[0][0])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&B(n),e&&z(e,t)}}}function Rt(r){let e,n,s;var o=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=new o(d(r))),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&re(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),s=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&2&&(u.form=t[1]),o!==(o=t[0][1])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&B(n),e&&z(e,t)}}}function Lt(r){let e,n,s;var o=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[St]},$$scope:{ctx:t}}}}return o&&(e=new o(d(r))),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&re(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),s=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&1043&&(u.$$scope={dirty:l,ctx:t}),o!==(o=t[0][1])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&B(n),e&&z(e,t)}}}function St(r){let e,n,s;var o=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return o&&(e=new o(d(r))),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&re(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),s=!0},p(t,l){const u={};if(l&16&&(u.data=t[4]),l&2&&(u.form=t[1]),o!==(o=t[0][2])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&B(n),e&&z(e,t)}}}function Pt(r){let e,n,s,o;const d=[Lt,Rt],t=[];function l(u,h){return u[0][2]?0:1}return e=l(r),n=t[e]=d[e](r),{c(){n.c(),s=D()},l(u){n.l(u),s=D()},m(u,h){t[e].m(u,h),F(u,s,h),o=!0},p(u,h){let g=e;e=l(u),e===g?t[e].p(u,h):(Y(),N(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,h):(n=t[e]=d[e](u),n.c()),V(n,1),n.m(s.parentNode,s))},i(u){o||(V(n),o=!0)},o(u){N(n),o=!1},d(u){t[e].d(u),u&&B(s)}}}function ze(r){let e,n=r[6]&&Ge(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(s){e=tt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);n&&n.l(o),o.forEach(B),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(s,o){F(s,e,o),n&&n.m(e,null)},p(s,o){s[6]?n?n.p(s,o):(n=Ge(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&B(e),n&&n.d()}}}function Ge(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,s){F(n,e,s)},p(n,s){s&128&&ot(e,n[7])},d(n){n&&B(e)}}}function Ot(r){let e,n,s,o,d;const t=[$t,Et],l=[];function u(g,S){return g[0][1]?0:1}e=u(r),n=l[e]=t[e](r);let h=r[5]&&ze(r);return{c(){n.c(),s=Qe(),h&&h.c(),o=D()},l(g){n.l(g),s=Ze(g),h&&h.l(g),o=D()},m(g,S){l[e].m(g,S),F(g,s,S),h&&h.m(g,S),F(g,o,S),d=!0},p(g,[S]){let T=e;e=u(g),e===T?l[e].p(g,S):(Y(),N(l[T],1,1,()=>{l[T]=null}),Q(),n=l[e],n?n.p(g,S):(n=l[e]=t[e](g),n.c()),V(n,1),n.m(s.parentNode,s)),g[5]?h?h.p(g,S):(h=ze(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(V(n),d=!0)},o(g){N(n),d=!1},d(g){l[e].d(g),g&&B(s),h&&h.d(g),g&&B(o)}}}function It(r,e,n){let{stores:s}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:l=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;xe(s.page.notify);let g=!1,S=!1,T=null;return be(()=>{const v=s.page.subscribe(()=>{g&&(n(6,S=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),v}),r.$$set=v=>{"stores"in v&&n(8,s=v.stores),"page"in v&&n(9,o=v.page),"components"in v&&n(0,d=v.components),"form"in v&&n(1,t=v.form),"data_0"in v&&n(2,l=v.data_0),"data_1"in v&&n(3,u=v.data_1),"data_2"in v&&n(4,h=v.data_2)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(o)},[d,t,l,u,h,g,S,T,s,o]}class At extends Me{constructor(e){super(),Xe(this,e,It,Ot,Ye,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ut={},ue=[()=>W(()=>import("./chunks/0-b59a89e3.js"),["chunks\\0-b59a89e3.js","components\\layout.svelte-4ca40e09.js","chunks\\index-64a06eee.js"],import.meta.url),()=>W(()=>import("./chunks/1-a5958123.js"),["chunks\\1-a5958123.js","components\\error.svelte-ec03f323.js","chunks\\index-64a06eee.js","chunks\\stores-8532834e.js","chunks\\singletons-5012c114.js","chunks\\index-a465538d.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>W(()=>import("./chunks/2-ac2a076b.js"),["chunks\\2-ac2a076b.js","chunks\\_layout-aba859c3.js","components\\pages\\(main)\\_layout.svelte-c585bdbd.js","assets\\_layout-c2156f3b.css","chunks\\index-64a06eee.js","chunks\\stores-8532834e.js","chunks\\singletons-5012c114.js","chunks\\index-a465538d.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>W(()=>import("./chunks/3-2f0df466.js"),["chunks\\3-2f0df466.js","chunks\\_layout-9aeef9d2.js","components\\pages\\embed\\_layout.svelte-16ef2e55.js","assets\\_layout-ca92dec8.css","chunks\\index-64a06eee.js"],import.meta.url),()=>W(()=>import("./chunks/4-73445d4a.js"),["chunks\\4-73445d4a.js","chunks\\_page-d59ca66e.js","chunks\\control-03134885.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>W(()=>import("./chunks/5-6356c420.js"),["chunks\\5-6356c420.js","components\\pages\\(main)\\build\\_page.svelte-a17ea5c2.js","assets\\_page-8b0ecbed.css","chunks\\index-64a06eee.js","chunks\\functions-e18afbcc.js","assets\\functions-07da78dc.css","chunks\\singletons-5012c114.js","chunks\\index-a465538d.js","chunks\\paths-6cd3a76e.js","chunks\\index-f53d6db4.js","chunks\\pym.v1-f680678d.js"],import.meta.url),()=>W(()=>import("./chunks/6-712c7563.js"),["chunks\\6-712c7563.js","components\\pages\\(main)\\draw\\_page.svelte-c0a02839.js","assets\\_page-f864d868.css","chunks\\index-64a06eee.js","chunks\\functions-e18afbcc.js","assets\\functions-07da78dc.css","chunks\\singletons-5012c114.js","chunks\\index-a465538d.js","chunks\\paths-6cd3a76e.js","chunks\\index-f53d6db4.js","chunks\\maplibre-gl-11d6c381.js"],import.meta.url),()=>W(()=>import("./chunks/7-059fa8b4.js"),["chunks\\7-059fa8b4.js","components\\pages\\embed\\_page.svelte-bfeeabf0.js","assets\\_page-eeeab2ed.css","chunks\\index-64a06eee.js","chunks\\pym.v1-f680678d.js","chunks\\index-a465538d.js","chunks\\maplibre-gl-11d6c381.js","chunks\\index-f53d6db4.js"],import.meta.url)],jt=[],Tt={"":[4],"(main)/build":[5,[2]],"(main)/draw":[6,[2]],embed:[7,[3]]},Dt={handleError:({error:r})=>{console.error(r)}},Nt="/__data.js";async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}const We="sveltekit:scroll",M="sveltekit:index",ie=kt(ue,jt,Tt,Ut),Ee=ue[0],$e=ue[1];Ee();$e();let ne={};try{ne=JSON.parse(sessionStorage[We])}catch{}function ye(r){ne[r]=ve()}function qt({target:r,base:e,trailing_slash:n}){var Ne;const s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,u=!1,h=!0,g=!1,S=!1,T,v=(Ne=history.state)==null?void 0:Ne[M];v||(v=Date.now(),history.replaceState({...history.state,[M]:v},"",location.href));const C=ne[v];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let G=!1,q,Le,ae;async function Se(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),f=me(a,!0);o=null,await Oe(f,a,[])}async function de(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},m,_){return typeof a=="string"&&(a=new URL(a,Be(document))),_e({url:a,scroll:f?ve():null,keepfocus:i,redirect_chain:m,details:{state:c,replaceState:p},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const f=me(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:f.id,promise:Ue(f)},o.promise}async function Oe(a,f,p,i,c={},m){var E,k;Le=c;let _=a&&await Ue(a);if(_||(_=await De(f,null,te(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Le!==c)return!1;if(_.type==="redirect")if(p.length>10||p.includes(f.pathname))_=await oe({status:500,error:te(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return de(new URL(_.location,f).href,{},[...p,f.pathname],c),!1;else((k=(E=_.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await X.updated.check()&&await se(f);if(s.length=0,S=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[M]=v+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",f)}if(o=null,u){t=_.state,_.props.page&&(_.props.page.url=f);const y=ce();T.$set(_.props),y()}else Ie(_);if(i){const{scroll:y,keepfocus:b}=i;if(!b){const R=document.body,P=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),P!==null?R.setAttribute("tabindex",P):R.removeAttribute("tabindex")}if(await Ce(),h){const R=f.hash&&document.getElementById(f.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();h=!0,_.props.page&&(q=_.props.page),m&&m(),g=!1}function Ie(a){var c,m;t=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),q=a.props.page;const p=ce();T=new At({target:r,props:{...a.props,stores:X},hydrate:!0}),p();const i={from:null,to:le("to",{params:t.params,routeId:(m=(c=t.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(_=>_(i)),u=!0}async function x({url:a,params:f,branch:p,status:i,error:c,route:m,form:_}){var P;const E=p.filter(Boolean),k={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:m},props:{components:E.map(O=>O.node.component)}};_!==void 0&&(k.props.form=_);let y={},b=!q;for(let O=0;O<E.length;O+=1){const U=E[O];y={...y,...U.data},(b||!t.branch.some(j=>j===U))&&(k.props[`data_${O}`]=y,b=b||Object.keys((P=U.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(q.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||_!==void 0||b){k.props.page={error:c,params:f,routeId:m&&m.id,status:i,url:a,form:_,data:b?y:q.data};const O=(U,j)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return k}async function pe({loader:a,parent:f,url:p,params:i,routeId:c,server_data_node:m}){var y,b,R,P,O;let _=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let U=function(...L){for(const w of L){const{href:$}=new URL(w,p);E.dependencies.add($)}};const j={routeId:c,params:new Proxy(i,{get:(L,w)=>(E.params.add(w),L[w])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:pt(p,()=>{E.url=!0}),async fetch(L,w){let $;L instanceof Request?($=L.url,w={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...w}):$=L;const A=new URL($,p).href;return U(A),u?gt(A,w):_t($,A,w)},setHeaders:()=>{},depends:U,parent(){return E.parent=!0,f()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(R=await k.shared.load.call(null,j))!=null?R:null,_=_?await Vt(_):null}return{node:k,loader:a,server:m,shared:(P=k.shared)!=null&&P.load?{type:"data",data:_,uses:E}:null,data:(O=_!=null?_:m==null?void 0:m.data)!=null?O:null}}function Ae(a,f,p,i){if(S)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(i[c]!==t.params[c])return!0;for(const c of p.dependencies)if(s.some(m=>m(new URL(c))))return!0;return!1}function he(a,f){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Ue({id:a,invalidating:f,url:p,params:i,route:c}){var L;if((o==null?void 0:o.id)===a)return o.promise;const{errors:m,layouts:_,leaf:E}=c,k=[..._,E];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=k.reduce((w,$,A)=>{var ee;const I=t.branch[A],Z=!!($!=null&&$[0])&&((I==null?void 0:I.loader)!==$[1]||Ae(b,w.some(Boolean),(ee=I.server)==null?void 0:ee.uses,i));return w.push(Z),w},[]);if(R.some(Boolean)){try{y=await He(p,R)}catch(w){return oe({status:500,error:te(w,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let O=!1;const U=k.map(async(w,$)=>{var ee;if(!w)return;const A=t.branch[$],I=P==null?void 0:P[$];if((!I||I.type==="skip")&&w[1]===(A==null?void 0:A.loader)&&!Ae(b,O,(ee=A.shared)==null?void 0:ee.uses,i))return A;if(O=!0,(I==null?void 0:I.type)==="error")throw I;return pe({loader:w[1],url:p,params:i,routeId:c.id,parent:async()=>{var qe;const Ve={};for(let ge=0;ge<$;ge+=1)Object.assign(Ve,(qe=await U[ge])==null?void 0:qe.data);return Ve},server_data_node:he(I===void 0&&w[0]?{type:"skip"}:I!=null?I:null,A==null?void 0:A.server)})});for(const w of U)w.catch(()=>{});const j=[];for(let w=0;w<k.length;w+=1)if(k[w])try{j.push(await U[w])}catch($){if($ instanceof Je)return{type:"redirect",location:$.location};let A=500,I;P!=null&&P.includes($)?(A=(L=$.status)!=null?L:A,I=$.error):$ instanceof ke?(A=$.status,I=$.body):I=te($,{params:i,url:p,routeId:c.id});const Z=await je(w,j,m);return Z?await x({url:p,params:i,branch:j.slice(0,Z.idx).concat(Z.node),status:A,error:I,route:c}):await De(p,c.id,I,A)}else j.push(void 0);return await x({url:p,params:i,branch:j,status:200,error:null,route:c,form:f?void 0:null})}async function je(a,f,p){for(;a--;)if(p[a]){let i=a;for(;!f[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:f,url:p,routeId:i}){var y;const c={},m=await Ee();let _=null;if(m.server)try{const b=await He(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await se(p)}const E=await pe({loader:Ee,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(_)}),k={node:await $e(),loader:$e,shared:null,server:null,data:null};return await x({url:p,params:c,branch:[E,k],status:a,error:f,route:null})}function me(a,f){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ie){const c=i.exec(p);if(c){const m=new URL(a.origin+ft(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:f,route:i,params:ut(c),url:m}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function _e({url:a,scroll:f,keepfocus:p,redirect_chain:i,details:c,type:m,delta:_,nav_token:E,accepted:k,blocked:y}){var U,j,L,w;let b=!1;const R=me(a,!1),P={from:le("from",{params:t.params,routeId:(j=(U=t.route)==null?void 0:U.id)!=null?j:null,url:t.url}),to:le("to",{params:(L=R==null?void 0:R.params)!=null?L:null,routeId:(w=R==null?void 0:R.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(P.delta=_);const O={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach($=>$(O)),b){y();return}ye(v),k(),u&&X.navigating.set(P),await Oe(R,a,i,{scroll:f,keepfocus:p,details:c},E,()=>{d.after_navigate.forEach($=>$(P)),X.navigating.set(null)})}async function De(a,f,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await oe({status:i,error:p,url:a,routeId:f}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const f=d.after_navigate.indexOf(a);d.after_navigate.splice(f,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const f=d.before_navigate.indexOf(a);d.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!u)&&(h=!1)},goto:(a,f={})=>de(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(p=>p.href===f)}return Se()},invalidateAll:()=>(S=!0,Se()),prefetch:async a=>{const f=new URL(a,Be(document));await Pe(f)},prefetch_routes:async a=>{const p=(a?ie.filter(i=>a.some(c=>i.exec(c))):ie).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:i}=t;if(!i)return;const c=await je(t.branch.length,p,i.errors);if(c){const m=await x({url:f,params:t.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});t=m.state;const _=ce();T.$set(m.props),_()}}else if(a.type==="redirect")de(a.location,{},[]);else{const f={form:a.data,page:{...q,form:a.data,status:a.status}},p=ce();T.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,E;let c=!1;const m={from:le("from",{params:t.params,routeId:(E=(_=t.route)==null?void 0:_.id)!=null?E:null,url:t.url}),to:null,type:"unload",cancel:()=>c=!0};d.before_navigate.forEach(k=>k(m)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(v);try{sessionStorage[We]=JSON.stringify(ne)}catch{}}});const a=i=>{const{url:c,options:m}=Fe(i);if(c&&m.prefetch){if(Te(c))return;Pe(c)}};let f;const p=i=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:m,options:_}=Fe(i);if(!c||!m)return;const E=c instanceof SVGAElement;if(!E&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||k.includes("external")||_.reload||(E?c.target.baseVal:c.target))return;const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){G=!0,ye(v),t.url=m,X.page.set({...q,url:m}),X.page.notify();return}_e({url:m,scroll:_.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[M]===v)return;const c=i.state[M]-v;_e({url:new URL(location.href),scroll:ne[i.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=i.state[M]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[M]:++v},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:i,routeId:c,data:m,form:_})=>{var y;l=!0;const E=new URL(location.href);let k;try{const b=p.map(async(R,P)=>{const O=m[P];return pe({loader:ue[R],url:E,params:i,routeId:c,parent:async()=>{const U={};for(let j=0;j<P;j+=1)Object.assign(U,(await b[j]).data);return U},server_data_node:he(O)})});k=await x({url:E,params:i,branch:await Promise.all(b),status:a,error:f,form:_,route:(y=ie.find(R=>R.id===c))!=null?y:null})}catch(b){if(b instanceof Je){await se(new URL(b.location,location.href));return}k=await oe({status:b instanceof ke?b.status:500,error:te(b,{url:E,params:i,routeId:c}),url:E,routeId:c})}Ie(k)}}}let Ct=1;async function He(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Nt,n.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),n.searchParams.set("__id",String(Ct++)),await W(()=>import(n.href),[],import.meta.url);const s=window.__sveltekit_data;return delete window.__sveltekit_data,s}function te(r,e){var n;return r instanceof ke?r.body:(n=Dt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Bt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const n of Bt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function ce(){return()=>{}}async function Gt({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){it(n);const d=qt({target:s,base:n.base,trailing_slash:o});st({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Gt as start};