import{M as Sl,S as Pa,i as Va,s as Ga,F as Hl,e as o,k as w,c as i,a as u,d as r,m as k,b as a,N as Pl,f as Da,g as F,H as l,O as Vl,I as Gl,J as Ol,K as Tl,q as jl,o as Ml,t as I,h as A,j as O,l as ml,P as Nl,Q as he,R as Sa,T as bl,E as ka,U as Ha,V as Fl}from"./index-7c3c6a44.js";const Yl=()=>{const e=Sl("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},en={subscribe(e){return Yl().page.subscribe(e)}},an={light:{name:"light",text:"#222",muted:"#777",pale:"#f0f0f0",background:"#fff"},dark:{name:"dark",text:"#fff",muted:"#bbb",pale:"#333",background:"#222"}};function Bl(e){let n,t,h,c,_,d,s=`${e[0]?e[0]:40}px`,f;const b=e[2].default,y=Hl(b,e,e[1],null);return{c(){n=o("aside"),t=o("div"),h=o("strong"),y&&y.c(),_=w(),d=o("div"),this.h()},l(p){n=i(p,"ASIDE",{role:!0,class:!0});var D=u(n);t=i(D,"DIV",{class:!0});var P=u(t);h=i(P,"STRONG",{});var Q=u(h);y&&y.l(Q),Q.forEach(r),P.forEach(r),D.forEach(r),_=k(p),d=i(p,"DIV",{class:!0}),u(d).forEach(r),this.h()},h(){a(t,"class","wrapper middle"),a(n,"role","alert"),a(n,"class","warning svelte-180bvkl"),Pl(()=>e[3].call(n)),a(d,"class","spacer svelte-180bvkl"),Da(d,"height",s,!1)},m(p,D){F(p,n,D),l(n,t),l(t,h),y&&y.m(h,null),c=Vl(n,e[3].bind(n)),F(p,_,D),F(p,d,D),f=!0},p(p,[D]){y&&y.p&&(!f||D&2)&&Gl(y,b,p,p[1],f?Tl(b,p[1],D,null):Ol(p[1]),null),D&1&&s!==(s=`${p[0]?p[0]:40}px`)&&Da(d,"height",s,!1)},i(p){f||(jl(y,p),f=!0)},o(p){Ml(y,p),f=!1},d(p){p&&r(n),y&&y.d(p),c(),p&&r(_),p&&r(d)}}}function Rl(e,n,t){let{$$slots:h={},$$scope:c}=n,_;function d(){_=this.clientHeight,t(0,_)}return e.$$set=s=>{"$$scope"in s&&t(1,c=s.$$scope)},[_,c,h,d]}class ln extends Pa{constructor(n){super(),Va(this,n,Rl,Bl,Ga,{})}}function gl(e,n,t){const h=e.slice();return h[14]=n[t],h[16]=t,h}function yl(e,n,t){const h=e.slice();return h[17]=n[t],h}function El(e,n,t){const h=e.slice();return h[14]=n[t],h}function Ul(e){let n,t,h,c,_,d;return{c(){n=o("a"),t=I("English (EN)"),c=w(),_=o("span"),d=I("| Cymraeg (EN)"),this.h()},l(s){n=i(s,"A",{href:!0,class:!0,lang:!0});var f=u(n);t=A(f,"English (EN)"),f.forEach(r),c=k(s),_=i(s,"SPAN",{});var b=u(_);d=A(b,"| Cymraeg (EN)"),b.forEach(r),this.h()},h(){a(n,"href",h="//www.ons.gov.uk"+e[0]),a(n,"class","language__link"),a(n,"lang","en")},m(s,f){F(s,n,f),l(n,t),F(s,c,f),F(s,_,f),l(_,d)},p(s,f){f&1&&h!==(h="//www.ons.gov.uk"+s[0])&&a(n,"href",h)},d(s){s&&r(n),s&&r(c),s&&r(_)}}}function Wl(e){let n,t,h,c,_,d;return{c(){n=o("span"),t=I("English (EN) |"),h=w(),c=o("a"),_=I("Cymraeg (CY)"),this.h()},l(s){n=i(s,"SPAN",{});var f=u(n);t=A(f,"English (EN) |"),f.forEach(r),h=k(s),c=i(s,"A",{href:!0,class:!0,lang:!0});var b=u(c);_=A(b,"Cymraeg (CY)"),b.forEach(r),this.h()},h(){a(c,"href",d="//cy.ons.gov.uk"+e[0]),a(c,"class","language__link"),a(c,"lang","cy")},m(s,f){F(s,n,f),l(n,t),F(s,h,f),F(s,c,f),l(c,_)},p(s,f){f&1&&d!==(d="//cy.ons.gov.uk"+s[0])&&a(c,"href",d)},d(s){s&&r(n),s&&r(h),s&&r(c)}}}function wl(e){let n,t,h=e[14]["label_"+e[1]]+"",c,_,d;return{c(){n=o("li"),t=o("a"),c=I(h),d=w(),this.h()},l(s){n=i(s,"LI",{class:!0});var f=u(n);t=i(f,"A",{class:!0,href:!0});var b=u(t);c=A(b,h),b.forEach(r),d=k(f),f.forEach(r),this.h()},h(){a(t,"class","secondary-nav__link js-nav-clone__link"),a(t,"href",_=""+(e[2]+e[14].url)),a(n,"class","secondary-nav__item")},m(s,f){F(s,n,f),l(n,t),l(t,c),l(n,d)},p(s,f){f&34&&h!==(h=s[14]["label_"+s[1]]+"")&&O(c,h),f&36&&_!==(_=""+(s[2]+s[14].url))&&a(t,"href",_)},d(s){s&&r(n)}}}function zl(e){let n,t,h=e[14]["label_"+e[1]]+"",c,_;return{c(){n=o("li"),t=o("a"),c=I(h),this.h()},l(d){n=i(d,"LI",{class:!0});var s=u(n);t=i(s,"A",{class:!0,href:!0});var f=u(t);c=A(f,h),f.forEach(r),s.forEach(r),this.h()},h(){a(t,"class","primary-nav__link col col--md-8 col--lg-10"),a(t,"href",_=""+(e[2]+e[14].url)),a(n,"class","primary-nav__item js-nav"),he(n,"hide--md",e[14].secondary)},m(d,s){F(d,n,s),l(n,t),l(t,c)},p(d,s){s&34&&h!==(h=d[14]["label_"+d[1]]+"")&&O(c,h),s&38&&_!==(_=""+(d[2]+d[14].url))&&a(t,"href",_),s&34&&he(n,"hide--md",d[14].secondary)},d(d){d&&r(n)}}}function ql(e){let n,t,h,c,_,d=e[14]["label_"+e[1]]+"",s,f,b,y,p,D,P,Q=e[14]["label_"+e[1]]+"",T,q,L,V,Z,_e;function ie(...S){return e[11](e[16],...S)}let Y=[...e[14].children].sort(e[12]),G=[];for(let S=0;S<Y.length;S+=1)G[S]=kl(yl(e,Y,S));return{c(){n=o("li"),t=o("a"),h=o("span"),c=w(),_=o("span"),s=I(d),y=w(),p=o("ul"),D=o("li"),P=o("a"),T=I(Q),L=w();for(let S=0;S<G.length;S+=1)G[S].c();this.h()},l(S){n=i(S,"LI",{class:!0});var H=u(n);t=i(H,"A",{class:!0,href:!0,"aria-expanded":!0,"aria-label":!0});var C=u(t);h=i(C,"SPAN",{"aria-hidden":!0,class:!0}),u(h).forEach(r),c=k(C),_=i(C,"SPAN",{class:!0});var K=u(_);s=A(K,d),K.forEach(r),C.forEach(r),y=k(H),p=i(H,"UL",{class:!0,"aria-expanded":!0,"aria-label":!0});var j=u(p);D=i(j,"LI",{class:!0});var X=u(D);P=i(X,"A",{class:!0,tabindex:!0,href:!0});var le=u(P);T=A(le,Q),le.forEach(r),X.forEach(r),L=k(j);for(let te=0;te<G.length;te+=1)G[te].l(j);j.forEach(r),H.forEach(r),this.h()},h(){a(h,"aria-hidden","true"),a(h,"class","expansion-indicator"),a(_,"class","submenu-title"),a(t,"class","primary-nav__link col col--md-8 col--lg-10"),a(t,"href",f=""+(e[2]+e[14].url)),a(t,"aria-expanded","false"),a(t,"aria-label",b=e[14]["label_"+e[1]]+" sub menu"),a(P,"class","primary-nav__child-link"),a(P,"tabindex","-1"),a(P,"href",q=""+(e[2]+e[14].url)),a(D,"class","primary-nav__child-item js-expandable__child hide--md"),a(p,"class","primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance"),a(p,"aria-expanded",V=e[14].expanded),a(p,"aria-label","submenu"),he(p,"js-nav-hidden",!e[14].expanded),a(n,"class","primary-nav__item js-nav js-expandable"),he(n,"js-expandable-active",e[14].expanded)},m(S,H){F(S,n,H),l(n,t),l(t,h),l(t,c),l(t,_),l(_,s),l(n,y),l(n,p),l(p,D),l(D,P),l(P,T),l(p,L);for(let C=0;C<G.length;C+=1)G[C].m(p,null);Z||(_e=Sa(t,"click",ie),Z=!0)},p(S,H){if(e=S,H&34&&d!==(d=e[14]["label_"+e[1]]+"")&&O(s,d),H&38&&f!==(f=""+(e[2]+e[14].url))&&a(t,"href",f),H&34&&b!==(b=e[14]["label_"+e[1]]+" sub menu")&&a(t,"aria-label",b),H&34&&Q!==(Q=e[14]["label_"+e[1]]+"")&&O(T,Q),H&38&&q!==(q=""+(e[2]+e[14].url))&&a(P,"href",q),H&38){Y=[...e[14].children].sort(e[12]);let C;for(C=0;C<Y.length;C+=1){const K=yl(e,Y,C);G[C]?G[C].p(K,H):(G[C]=kl(K),G[C].c(),G[C].m(p,null))}for(;C<G.length;C+=1)G[C].d(1);G.length=Y.length}H&34&&V!==(V=e[14].expanded)&&a(p,"aria-expanded",V),H&34&&he(p,"js-nav-hidden",!e[14].expanded),H&34&&he(n,"js-expandable-active",e[14].expanded)},d(S){S&&r(n),Ha(G,S),Z=!1,_e()}}}function kl(e){let n,t,h=e[17]["label_"+e[1]]+"",c,_;return{c(){n=o("li"),t=o("a"),c=I(h),this.h()},l(d){n=i(d,"LI",{class:!0});var s=u(n);t=i(s,"A",{class:!0,tabindex:!0,href:!0});var f=u(t);c=A(f,h),f.forEach(r),s.forEach(r),this.h()},h(){a(t,"class","primary-nav__child-link"),a(t,"tabindex","-1"),a(t,"href",_=""+(e[2]+e[17].url)),a(n,"class","primary-nav__child-item js-expandable__child")},m(d,s){F(d,n,s),l(n,t),l(t,c)},p(d,s){s&34&&h!==(h=d[17]["label_"+d[1]]+"")&&O(c,h),s&38&&_!==(_=""+(d[2]+d[17].url))&&a(t,"href",_)},d(d){d&&r(n)}}}function Il(e){let n;function t(_,d){return _[14].children?ql:zl}let h=t(e),c=h(e);return{c(){c.c(),n=ml()},l(_){c.l(_),n=ml()},m(_,d){c.m(_,d),F(_,n,d)},p(_,d){h===(h=t(_))&&c?c.p(_,d):(c.d(1),c=h(_),c&&(c.c(),c.m(n.parentNode,n)))},d(_){c.d(_),_&&r(n)}}}function Kl(e){let n,t,h,c,_,d;return{c(){n=o("a"),t=I("English (EN)"),c=w(),_=o("span"),d=I("| Cymraeg (EN)"),this.h()},l(s){n=i(s,"A",{href:!0,class:!0,lang:!0});var f=u(n);t=A(f,"English (EN)"),f.forEach(r),c=k(s),_=i(s,"SPAN",{});var b=u(_);d=A(b,"| Cymraeg (EN)"),b.forEach(r),this.h()},h(){a(n,"href",h="//www.ons.gov.uk"+e[0]),a(n,"class","language__link"),a(n,"lang","en")},m(s,f){F(s,n,f),l(n,t),F(s,c,f),F(s,_,f),l(_,d)},p(s,f){f&1&&h!==(h="//www.ons.gov.uk"+s[0])&&a(n,"href",h)},d(s){s&&r(n),s&&r(c),s&&r(_)}}}function Jl(e){let n,t,h,c,_,d;return{c(){n=o("span"),t=I("English (EN) |"),h=w(),c=o("a"),_=I("Cymraeg (CY)"),this.h()},l(s){n=i(s,"SPAN",{});var f=u(n);t=A(f,"English (EN) |"),f.forEach(r),h=k(s),c=i(s,"A",{href:!0,class:!0,lang:!0});var b=u(c);_=A(b,"Cymraeg (CY)"),b.forEach(r),this.h()},h(){a(c,"href",d="//cy.ons.gov.uk"+e[0]),a(c,"class","language__link"),a(c,"lang","cy")},m(s,f){F(s,n,f),l(n,t),F(s,h,f),F(s,c,f),l(c,_)},p(s,f){f&1&&d!==(d="//cy.ons.gov.uk"+s[0])&&a(c,"href",d)},d(s){s&&r(n),s&&r(h),s&&r(c)}}}function Ql(e){let n,t,h=e[6]("Skip to main content",e[1])+"",c,_,d,s,f,b,y,p,D,P,Q,T,q,L,V,Z,_e,ie,Y,G,S,H,C,K,j,X,le=e[6]("Menu",e[1])+"",te,Se,ue,U,ne,fe=(e[4]?e[6]("Hide search",e[1]):e[6]("Search",e[1]))+"",Ee,He,R,ee,$,ve=e[6]("Home",e[1])+"",we,Pe,x,pe,ae,ke,Ue;function We(v,E){return v[1]=="en"?Wl:Ul}let Ve=We(e),J=Ve(e),se=e[5].filter(Al),M=[];for(let v=0;v<se.length;v+=1)M[v]=wl(El(e,se,v));let me=[...e[5].filter(Cl).sort(e[10]),...e[5].filter(Ll)],B=[];for(let v=0;v<me.length;v+=1)B[v]=Il(gl(e,me,v));function Xe(v,E){return v[1]=="en"?Jl:Kl}let be=Xe(e),W=be(e);return{c(){n=o("header"),t=o("a"),c=I(h),_=w(),d=o("div"),s=I(e[0]),f=w(),b=o("div"),y=o("div"),p=o("div"),D=o("a"),P=o("img"),L=w(),V=o("div"),Z=o("div"),J.c(),_e=w(),ie=o("div"),Y=o("ul");for(let v=0;v<M.length;v+=1)M[v].c();G=w(),S=o("div"),H=o("nav"),C=o("ul"),K=o("li"),j=o("a"),X=o("span"),te=I(le),Se=w(),ue=o("li"),U=o("a"),ne=o("span"),Ee=I(fe),He=w(),R=o("ul"),ee=o("li"),$=o("a"),we=I(ve),x=w();for(let v=0;v<B.length;v+=1)B[v].c();pe=w(),ae=o("li"),W.c(),this.h()},l(v){n=i(v,"HEADER",{});var E=u(n);t=i(E,"A",{class:!0,href:!0,tabindex:!0});var g=u(t);c=A(g,h),g.forEach(r),_=k(E),d=i(E,"DIV",{id:!0,class:!0});var de=u(d);s=A(de,e[0]),de.forEach(r),f=k(E),b=i(E,"DIV",{class:!0});var Ie=u(b);y=i(Ie,"DIV",{class:!0});var re=u(y);p=i(re,"DIV",{class:!0});var Ge=u(p);D=i(Ge,"A",{href:!0});var ze=u(D);P=i(ze,"IMG",{class:!0,src:!0,alt:!0}),ze.forEach(r),Ge.forEach(r),L=k(re),V=i(re,"DIV",{class:!0});var qe=u(V);Z=i(qe,"DIV",{class:!0});var Ze=u(Z);J.l(Ze),Ze.forEach(r),qe.forEach(r),_e=k(re),ie=i(re,"DIV",{class:!0});var ge=u(ie);Y=i(ge,"UL",{class:!0});var Ae=u(Y);for(let ye=0;ye<M.length;ye+=1)M[ye].l(Ae);Ae.forEach(r),ge.forEach(r),re.forEach(r),Ie.forEach(r),G=k(E),S=i(E,"DIV",{class:!0});var Oe=u(S);H=i(Oe,"NAV",{"aria-label":!0});var Ce=u(H);C=i(Ce,"UL",{class:!0});var Te=u(C);K=i(Te,"LI",{class:!0});var z=u(K);j=i(z,"A",{href:!0,id:!0,"aria-controls":!0,"aria-expanded":!0,class:!0});var Le=u(j);X=i(Le,"SPAN",{class:!0});var Ne=u(X);te=A(Ne,le),Ne.forEach(r),Le.forEach(r),z.forEach(r),Se=k(Te),ue=i(Te,"LI",{class:!0});var je=u(ue);U=i(je,"A",{href:!0,id:!0,"aria-controls":!0,"aria-expanded":!0,class:!0});var Ke=u(U);ne=i(Ke,"SPAN",{class:!0});var $e=u(ne);Ee=A($e,fe),$e.forEach(r),Ke.forEach(r),je.forEach(r),Te.forEach(r),He=k(Ce),R=i(Ce,"UL",{class:!0,id:!0,"aria-expanded":!0});var oe=u(R);ee=i(oe,"LI",{class:!0});var De=u(ee);$=i(De,"A",{class:!0,href:!0,style:!0});var Me=u($);we=A(Me,ve),Me.forEach(r),De.forEach(r),x=k(oe);for(let ye=0;ye<B.length;ye+=1)B[ye].l(oe);pe=k(oe),ae=i(oe,"LI",{class:!0});var Je=u(ae);W.l(Je),Je.forEach(r),oe.forEach(r),Ce.forEach(r),Oe.forEach(r),E.forEach(r),this.h()},h(){a(t,"class","skiplink"),a(t,"href","#main"),a(t,"tabindex","0"),a(d,"id","pagePath"),a(d,"class","hide"),a(P,"class","logo"),Nl(P.src,Q="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg")||a(P,"src",Q),a(P,"alt",T=e[6]("Office for National Statistics logo - Homepage",e[1])),a(D,"href",q=e[2]+"/"),a(p,"class","col col--lg-one-third col--md-one-third"),a(Z,"class","language"),a(V,"class","col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"),a(Y,"class","secondary-nav__list js-nav-clone__list"),a(ie,"class","secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide"),a(y,"class","header col-wrap"),a(b,"class","wrapper"),a(X,"class","nav--controls__text"),a(j,"href","#nav-primary"),a(j,"id","menu-toggle"),a(j,"aria-controls","nav-primary"),a(j,"aria-expanded",e[3]),a(j,"class","nav--controls__menu"),a(K,"class","nav--controls__item"),he(K,"menu-is-expanded",e[3]),a(ne,"class","nav--controls__text"),a(U,"href","#nav-search"),a(U,"id","search-toggle"),a(U,"aria-controls","nav-search"),a(U,"aria-expanded",e[4]),a(U,"class","nav--controls__search"),a(ue,"class","nav--controls__item"),he(ue,"search-is-expanded",e[4]),a(C,"class","nav--controls"),a($,"class","primary-nav__link col col--md-7 col--lg-9"),a($,"href",Pe=e[2]+"/"),Da($,"color","#e5e6e7"),a(ee,"class","primary-nav__item js-nav"),a(ae,"class","hide--md primary-nav__language"),a(R,"class","wrapper primary-nav__list"),a(R,"id","nav-primary"),a(R,"aria-expanded",e[3]),he(R,"nav-main--hidden",!e[3]),a(H,"aria-label","Header links"),a(S,"class","primary-nav print--hide")},m(v,E){F(v,n,E),l(n,t),l(t,c),l(n,_),l(n,d),l(d,s),l(n,f),l(n,b),l(b,y),l(y,p),l(p,D),l(D,P),l(y,L),l(y,V),l(V,Z),J.m(Z,null),l(y,_e),l(y,ie),l(ie,Y);for(let g=0;g<M.length;g+=1)M[g].m(Y,null);l(n,G),l(n,S),l(S,H),l(H,C),l(C,K),l(K,j),l(j,X),l(X,te),l(C,Se),l(C,ue),l(ue,U),l(U,ne),l(ne,Ee),l(H,He),l(H,R),l(R,ee),l(ee,$),l($,we),l(R,x);for(let g=0;g<B.length;g+=1)B[g].m(R,null);l(R,pe),l(R,ae),W.m(ae,null),ke||(Ue=[Sa(j,"click",bl(e[8])),Sa(U,"click",bl(e[9]))],ke=!0)},p(v,[E]){if(E&2&&h!==(h=v[6]("Skip to main content",v[1])+"")&&O(c,h),E&1&&O(s,v[0]),E&2&&T!==(T=v[6]("Office for National Statistics logo - Homepage",v[1]))&&a(P,"alt",T),E&4&&q!==(q=v[2]+"/")&&a(D,"href",q),Ve===(Ve=We(v))&&J?J.p(v,E):(J.d(1),J=Ve(v),J&&(J.c(),J.m(Z,null))),E&38){se=v[5].filter(Al);let g;for(g=0;g<se.length;g+=1){const de=El(v,se,g);M[g]?M[g].p(de,E):(M[g]=wl(de),M[g].c(),M[g].m(Y,null))}for(;g<M.length;g+=1)M[g].d(1);M.length=se.length}if(E&2&&le!==(le=v[6]("Menu",v[1])+"")&&O(te,le),E&8&&a(j,"aria-expanded",v[3]),E&8&&he(K,"menu-is-expanded",v[3]),E&18&&fe!==(fe=(v[4]?v[6]("Hide search",v[1]):v[6]("Search",v[1]))+"")&&O(Ee,fe),E&16&&a(U,"aria-expanded",v[4]),E&16&&he(ue,"search-is-expanded",v[4]),E&2&&ve!==(ve=v[6]("Home",v[1])+"")&&O(we,ve),E&4&&Pe!==(Pe=v[2]+"/")&&a($,"href",Pe),E&166){me=[...v[5].filter(Cl).sort(v[10]),...v[5].filter(Ll)];let g;for(g=0;g<me.length;g+=1){const de=gl(v,me,g);B[g]?B[g].p(de,E):(B[g]=Il(de),B[g].c(),B[g].m(R,pe))}for(;g<B.length;g+=1)B[g].d(1);B.length=me.length}be===(be=Xe(v))&&W?W.p(v,E):(W.d(1),W=be(v),W&&(W.c(),W.m(ae,null))),E&8&&a(R,"aria-expanded",v[3]),E&8&&he(R,"nav-main--hidden",!v[3])},i:ka,o:ka,d(v){v&&r(n),J.d(),Ha(M,v),Ha(B,v),W.d(),ke=!1,Fl(Ue)}}}const Al=e=>e.secondary,Cl=e=>e.children,Ll=e=>!e.children;function Xl(e,n,t){let{path:h="/"}=n,{lang:c="en"}=n,{baseurl:_="//www.ons.gov.uk"}=n,d=!1,s=!1,f=[{label_en:"Business, industry and trade",label_cy:"Busnes, diwydiant a masnach",url:"/businessindustryandtrade",expanded:!1,children:[{label_en:"Business",label_cy:"Busnes",url:"/businessindustryandtrade/business"},{label_en:"Changes to business",label_cy:"Newidiadau i fusnesau",url:"/businessindustryandtrade/changestobusiness"},{label_en:"Construction industry",label_cy:"Diwydiant adeiladu",url:"/businessindustryandtrade/constructionindustry"},{label_en:"IT and internet industry",label_cy:"Y diwydiant TG a'r rhyngrwyd",url:"/businessindustryandtrade"},{label_en:"International trade",label_cy:"Masnach ryngwladol",url:"/businessindustryandtrade/itandinternetindustry"},{label_en:"Manufacturing and production industry",label_cy:"Y diwydiant gweithgynhyrchu a chynhyrchu",url:"/businessindustryandtrade/manufacturingandproductionindustry"},{label_en:"Retail industry",label_cy:"Y diwydiant manwerthu",url:"/businessindustryandtrade/retailindustry"},{label_en:"Tourism industry",label_cy:"Y diwydiant twristiaeth",url:"/businessindustryandtrade/tourismindustry"}]},{label_en:"Economy",label_cy:"Yr economi",url:"/economy",expanded:!1,children:[{label_en:"Economic output and productivity",label_cy:"Allgynnyrch economaidd a chynhyrchiant",url:"/economy/economicoutputandproductivity"},{label_en:"Environmental accounts",label_cy:"Cyfrifon amgylcheddol",url:"/economy/environmentalaccounts"},{label_en:"Government, public sector and taxes",label_cy:"Llywodraeth, y sector cyhoeddus a threthi",url:"/economy/governmentpublicsectorandtaxes"},{label_en:"Gross Domestic Product (GDP)",label_cy:"Cynnyrch Domestig Gros (CDG)",url:"/economy/grossdomesticproductgdp"},{label_en:"Gross Value Added (GVA)",label_cy:"Gwerth Ychwanegol Gros",url:"/economy/grossvalueaddedgva"},{label_en:"Inflation and price indices",label_cy:"Mynegeion chwyddiant a phrisiau",url:"/economy/inflationandpriceindices"},{label_en:"Investments, pensions and trusts",label_cy:"Buddsoddiadau, pensiynau ac ymddiriedolaethau",url:"/economy/investmentspensionsandtrusts"},{label_en:"National accounts",label_cy:"Cyfrifon gwladol",url:"/economy/nationalaccounts"},{label_en:"Regional accounts",label_cy:"Cyfrifon rhanbarthol",url:"/economy/regionalaccounts"}]},{label_en:"Employment and labour market",label_cy:"Cyflogaeth a'r farchnad lafur",url:"/employmentandlabourmarket",expanded:!1,children:[{label_en:"People in work",label_cy:"Pobl mewn gwaith",url:"/employmentandlabourmarket/peopleinwork"},{label_en:"People not in work",label_cy:"Pobl nad ydynt mewn gwaith",url:"/employmentandlabourmarket/peoplenotinwork"}]},{label_en:"People, population and community",label_cy:"Pobl, y boblogaeth a chymunedau",url:"/peoplepopulationandcommunity",expanded:!1,children:[{label_en:"Births, deaths and marriages",label_cy:"Genedigaethau, marwolaethau a phriodasau",url:"/peoplepopulationandcommunity/birthsdeathsandmarriages"},{label_en:"Crime and justice",label_cy:"Troseddu a chyfiawnder",url:"/peoplepopulationandcommunity/crimeandjustice"},{label_en:"Cultural identity",label_cy:"Hunaniaeth ddiwylliannol",url:"/peoplepopulationandcommunity/culturalidentity"},{label_en:"Education and childcare",label_cy:"Addysg a gofal plant",url:"/peoplepopulationandcommunity/educationandchildcare"},{label_en:"Elections",label_cy:"Etholiadau",url:"/peoplepopulationandcommunity/elections"},{label_en:"Health and social care",label_cy:"Iechyd a gofal cymdeithasol",url:"/peoplepopulationandcommunity/healthandsocialcare"},{label_en:"Household characteristics",label_cy:"Nodweddion aelwydydd",url:"/peoplepopulationandcommunity/householdcharacteristics"},{label_en:"Housing",label_cy:"Tai",url:"/peoplepopulationandcommunity/housing"},{label_en:"Leisure and tourism",label_cy:"Hamdden a thwristiaeth",url:"/peoplepopulationandcommunity/leisureandtourism"},{label_en:"Personal and household finances",label_cy:"Cyllid personol a chyllid aelwydydd",url:"/peoplepopulationandcommunity/personalandhouseholdfinances"},{label_en:"Population and migration",label_cy:"Poblogaeth ac ymfudo",url:"/peoplepopulationandcommunity/populationandmigration"},{label_en:"Well-being",label_cy:"Lles",url:"/peoplepopulationandcommunity/wellbeing"}]},{label_en:"Taking part in a survey?",label_cy:"Cymryd rhan mewn arolwg?",url:"/surveys"},{label_en:"Release calendar",label_cy:"Calendar datganiadau",url:"/releasecalendar",secondary:!0},{label_en:"Methodology",label_cy:"Methodoleg",url:"/methodology",secondary:!0},{label_en:"Media",label_cy:"Media",url:"/news",secondary:!0},{label_en:"About",label_cy:"Amdanom ni",url:"/aboutus",secondary:!0},{label_en:"Blog",label_cy:"Blog",url:"https://blog.ons.gov.uk/",secondary:!0}];const b={Home:"Hafan",Search:"Chwilio",Menu:"Dewislen","Hide search":"Cuddio","Office for National Statistics logo - Homepage":"Logo Swyddfa Ystadegau Gwladol - Hafan","Search for a keyword(s) or time series ID":"Chwilio am allweddair neu ID cyfres amser"};function y(L,V){return V=="cy"&&b[L]?b[L]:L}function p(L,V){window.matchMedia("(max-width:767px)").matches&&(L.preventDefault(),t(5,f[V].expanded=!f[V].expanded,f))}const D=()=>{t(3,d=!d),t(4,s=!1)},P=()=>{t(4,s=!s),t(3,d=!1)},Q=(L,V)=>L["label_"+c].localeCompare(V["label_"+c]),T=(L,V)=>p(V,L),q=(L,V)=>L["label_"+c].localeCompare(V["label_"+c]);return e.$$set=L=>{"path"in L&&t(0,h=L.path),"lang"in L&&t(1,c=L.lang),"baseurl"in L&&t(2,_=L.baseurl)},[h,c,_,d,s,f,y,p,D,P,Q,T,q]}class nn extends Pa{constructor(n){super(),Va(this,n,Xl,Ql,Ga,{path:0,lang:1,baseurl:2})}}function Zl(e){let n,t,h=e[2]("Footer links",e[0])+"",c,_,d,s,f,b,y,p,D=e[2]("Help",e[0])+"",P,Q,T,q,L,V=e[2]("Accessibility",e[0])+"",Z,_e,ie,Y,G,S=e[2]("Cookies",e[0])+"",H,C,K,j,X,le=e[2]("Privacy",e[0])+"",te,Se,ue,U,ne,fe=e[2]("Terms and conditions",e[0])+"",Ee,He,R,ee,$,ve=e[2]("About ONS",e[0])+"",we,Pe,x,pe,ae,ke=e[2]("What we do",e[0])+"",Ue,We,Ve,J,se,M=e[2]("Careers",e[0])+"",me,B,Xe,be,W,v=e[2]("Contact us",e[0])+"",E,g,de,Ie,re,Ge=e[2]("Freedom of Information",e[0])+"",ze,qe,Ze,ge,Ae,Oe=e[2]("Connect with us",e[0])+"",Ce,Te,z,Le,Ne,je=e[2]("Twitter",e[0])+"",Ke,$e,oe,De,Me=e[2]("Facebook",e[0])+"",Je,ye,xe,ea,ua=e[2]("LinkedIn",e[0])+"",_a,Ia,aa,la,da=e[2]("Consultations",e[0])+"",fa,Aa,na,sa,ca=e[2]("Discussion forums",e[0])+"",va,Ca,ra,ta,ha=e[2]("Email alerts",e[0])+"",pa,La,oa,Fe,Ye,Oa,Na,Qe,ma=e[2]("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated",e[0])+"";return{c(){n=o("footer"),t=o("h2"),c=I(h),_=w(),d=o("div"),s=o("div"),f=o("nav"),b=o("div"),y=o("div"),p=o("h3"),P=I(D),Q=w(),T=o("ul"),q=o("li"),L=o("a"),Z=I(V),ie=w(),Y=o("li"),G=o("a"),H=I(S),K=w(),j=o("li"),X=o("a"),te=I(le),ue=w(),U=o("li"),ne=o("a"),Ee=I(fe),R=w(),ee=o("div"),$=o("h3"),we=I(ve),Pe=w(),x=o("ul"),pe=o("li"),ae=o("a"),Ue=I(ke),Ve=w(),J=o("li"),se=o("a"),me=I(M),Xe=w(),be=o("li"),W=o("a"),E=I(v),de=w(),Ie=o("li"),re=o("a"),ze=I(Ge),Ze=w(),ge=o("div"),Ae=o("h3"),Ce=I(Oe),Te=w(),z=o("ul"),Le=o("li"),Ne=o("a"),Ke=I(je),$e=w(),oe=o("li"),De=o("a"),Je=I(Me),ye=w(),xe=o("li"),ea=o("a"),_a=I(ua),Ia=w(),aa=o("li"),la=o("a"),fa=I(da),Aa=w(),na=o("li"),sa=o("a"),va=I(ca),Ca=w(),ra=o("li"),ta=o("a"),pa=I(ha),La=w(),oa=o("div"),Fe=o("div"),Ye=o("img"),Na=w(),Qe=o("p"),this.h()},l(m){n=i(m,"FOOTER",{class:!0});var N=u(n);t=i(N,"H2",{class:!0});var Ta=u(t);c=A(Ta,h),Ta.forEach(r),_=k(N),d=i(N,"DIV",{class:!0});var ba=u(d);s=i(ba,"DIV",{class:!0});var ja=u(s);f=i(ja,"NAV",{"aria-label":!0});var Ma=u(f);b=i(Ma,"DIV",{class:!0});var ia=u(b);y=i(ia,"DIV",{class:!0});var ga=u(y);p=i(ga,"H3",{class:!0});var Fa=u(p);P=A(Fa,D),Fa.forEach(r),Q=k(ga),T=i(ga,"UL",{class:!0});var Be=u(T);q=i(Be,"LI",{class:!0});var Ya=u(q);L=i(Ya,"A",{href:!0});var Ba=u(L);Z=A(Ba,V),Ba.forEach(r),Ya.forEach(r),ie=k(Be),Y=i(Be,"LI",{class:!0});var Ra=u(Y);G=i(Ra,"A",{href:!0});var Ua=u(G);H=A(Ua,S),Ua.forEach(r),Ra.forEach(r),K=k(Be),j=i(Be,"LI",{class:!0});var Wa=u(j);X=i(Wa,"A",{href:!0});var za=u(X);te=A(za,le),za.forEach(r),Wa.forEach(r),ue=k(Be),U=i(Be,"LI",{class:!0});var qa=u(U);ne=i(qa,"A",{href:!0});var Ka=u(ne);Ee=A(Ka,fe),Ka.forEach(r),qa.forEach(r),Be.forEach(r),ga.forEach(r),R=k(ia),ee=i(ia,"DIV",{class:!0});var ya=u(ee);$=i(ya,"H3",{class:!0});var Ja=u($);we=A(Ja,ve),Ja.forEach(r),Pe=k(ya),x=i(ya,"UL",{class:!0});var Re=u(x);pe=i(Re,"LI",{class:!0});var Qa=u(pe);ae=i(Qa,"A",{href:!0});var Xa=u(ae);Ue=A(Xa,ke),Xa.forEach(r),Qa.forEach(r),Ve=k(Re),J=i(Re,"LI",{class:!0});var Za=u(J);se=i(Za,"A",{href:!0});var $a=u(se);me=A($a,M),$a.forEach(r),Za.forEach(r),Xe=k(Re),be=i(Re,"LI",{class:!0});var xa=u(be);W=i(xa,"A",{href:!0});var el=u(W);E=A(el,v),el.forEach(r),xa.forEach(r),de=k(Re),Ie=i(Re,"LI",{class:!0});var al=u(Ie);re=i(al,"A",{href:!0});var ll=u(re);ze=A(ll,Ge),ll.forEach(r),al.forEach(r),Re.forEach(r),ya.forEach(r),Ze=k(ia),ge=i(ia,"DIV",{class:!0});var Ea=u(ge);Ae=i(Ea,"H3",{class:!0});var nl=u(Ae);Ce=A(nl,Oe),nl.forEach(r),Te=k(Ea),z=i(Ea,"UL",{class:!0});var ce=u(z);Le=i(ce,"LI",{class:!0});var sl=u(Le);Ne=i(sl,"A",{href:!0});var rl=u(Ne);Ke=A(rl,je),rl.forEach(r),sl.forEach(r),$e=k(ce),oe=i(ce,"LI",{class:!0});var tl=u(oe);De=i(tl,"A",{href:!0});var ol=u(De);Je=A(ol,Me),ol.forEach(r),tl.forEach(r),ye=k(ce),xe=i(ce,"LI",{class:!0});var il=u(xe);ea=i(il,"A",{href:!0});var ul=u(ea);_a=A(ul,ua),ul.forEach(r),il.forEach(r),Ia=k(ce),aa=i(ce,"LI",{class:!0});var dl=u(aa);la=i(dl,"A",{href:!0});var cl=u(la);fa=A(cl,da),cl.forEach(r),dl.forEach(r),Aa=k(ce),na=i(ce,"LI",{class:!0});var hl=u(na);sa=i(hl,"A",{href:!0});var _l=u(sa);va=A(_l,ca),_l.forEach(r),hl.forEach(r),Ca=k(ce),ra=i(ce,"LI",{class:!0});var fl=u(ra);ta=i(fl,"A",{href:!0});var vl=u(ta);pa=A(vl,ha),vl.forEach(r),fl.forEach(r),ce.forEach(r),Ea.forEach(r),ia.forEach(r),Ma.forEach(r),ja.forEach(r),La=k(ba),oa=i(ba,"DIV",{class:!0});var pl=u(oa);Fe=i(pl,"DIV",{class:!0});var wa=u(Fe);Ye=i(wa,"IMG",{class:!0,alt:!0,width:!0,src:!0}),Na=k(wa),Qe=i(wa,"P",{class:!0});var Dl=u(Qe);Dl.forEach(r),wa.forEach(r),pl.forEach(r),ba.forEach(r),N.forEach(r),this.h()},h(){a(t,"class","visuallyhidden"),a(p,"class","footer-nav__heading"),a(L,"href",_e=e[1]+"/help/accessibility"),a(q,"class","footer-nav__item"),a(G,"href",C=e[1]+"/cookies"),a(Y,"class","footer-nav__item"),a(X,"href",Se=e[1]+"/help/privacynotice"),a(j,"class","footer-nav__item"),a(ne,"href",He=e[1]+"/help/termsandconditions"),a(U,"class","footer-nav__item"),a(T,"class","footer-nav__list"),a(y,"class","col col--lg-one-third col--md-one-third"),a($,"class","footer-nav__heading"),a(ae,"href",We=e[1]+"/aboutus/whatwedo"),a(pe,"class","footer-nav__item"),a(se,"href",B=e[1]+"/aboutus/careers"),a(J,"class","footer-nav__item"),a(W,"href",g=e[1]+"/aboutus/contactus"),a(be,"class","footer-nav__item"),a(re,"href",qe=e[1]+"/aboutus/transparencyandgovernance/freedomofinformationfoi"),a(Ie,"class","footer-nav__item"),a(x,"class","footer-nav__list"),a(ee,"class","col col--lg-one-third col--md-one-third"),a(Ae,"class","footer-nav__heading"),a(Ne,"href","https://twitter.com/ONS"),a(Le,"class","footer-nav__item"),a(De,"href","https://www.facebook.com/ONS"),a(oe,"class","footer-nav__item"),a(ea,"href","https://www.linkedin.com/company/office-for-national-statistics"),a(xe,"class","footer-nav__item"),a(la,"href","https://consultations.ons.gov.uk/"),a(aa,"class","footer-nav__item"),a(sa,"href","https://www.statsusernet.org.uk/login"),a(na,"class","footer-nav__item"),a(ta,"href","https://public.govdelivery.com/accounts/UKONS/subscribers/new"),a(ra,"class","footer-nav__item"),a(z,"class","footer-nav__list"),a(ge,"class","col col--lg-one-third col--md-one-third"),a(b,"class","footer-nav col-wrap"),a(f,"aria-label","Footer links"),a(s,"class","wrapper"),a(Ye,"class","footer-license__img"),a(Ye,"alt","OGL"),a(Ye,"width","60"),Nl(Ye.src,Oa="https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg")||a(Ye,"src",Oa),a(Qe,"class","footer-license__text margin-left-sm--0"),a(Fe,"class","footer-license"),a(oa,"class","wrapper"),a(d,"class","footer"),a(n,"class","print--hide margin-top--4")},m(m,N){F(m,n,N),l(n,t),l(t,c),l(n,_),l(n,d),l(d,s),l(s,f),l(f,b),l(b,y),l(y,p),l(p,P),l(y,Q),l(y,T),l(T,q),l(q,L),l(L,Z),l(T,ie),l(T,Y),l(Y,G),l(G,H),l(T,K),l(T,j),l(j,X),l(X,te),l(T,ue),l(T,U),l(U,ne),l(ne,Ee),l(b,R),l(b,ee),l(ee,$),l($,we),l(ee,Pe),l(ee,x),l(x,pe),l(pe,ae),l(ae,Ue),l(x,Ve),l(x,J),l(J,se),l(se,me),l(x,Xe),l(x,be),l(be,W),l(W,E),l(x,de),l(x,Ie),l(Ie,re),l(re,ze),l(b,Ze),l(b,ge),l(ge,Ae),l(Ae,Ce),l(ge,Te),l(ge,z),l(z,Le),l(Le,Ne),l(Ne,Ke),l(z,$e),l(z,oe),l(oe,De),l(De,Je),l(z,ye),l(z,xe),l(xe,ea),l(ea,_a),l(z,Ia),l(z,aa),l(aa,la),l(la,fa),l(z,Aa),l(z,na),l(na,sa),l(sa,va),l(z,Ca),l(z,ra),l(ra,ta),l(ta,pa),l(d,La),l(d,oa),l(oa,Fe),l(Fe,Ye),l(Fe,Na),l(Fe,Qe),Qe.innerHTML=ma},p(m,[N]){N&1&&h!==(h=m[2]("Footer links",m[0])+"")&&O(c,h),N&1&&D!==(D=m[2]("Help",m[0])+"")&&O(P,D),N&1&&V!==(V=m[2]("Accessibility",m[0])+"")&&O(Z,V),N&2&&_e!==(_e=m[1]+"/help/accessibility")&&a(L,"href",_e),N&1&&S!==(S=m[2]("Cookies",m[0])+"")&&O(H,S),N&2&&C!==(C=m[1]+"/cookies")&&a(G,"href",C),N&1&&le!==(le=m[2]("Privacy",m[0])+"")&&O(te,le),N&2&&Se!==(Se=m[1]+"/help/privacynotice")&&a(X,"href",Se),N&1&&fe!==(fe=m[2]("Terms and conditions",m[0])+"")&&O(Ee,fe),N&2&&He!==(He=m[1]+"/help/termsandconditions")&&a(ne,"href",He),N&1&&ve!==(ve=m[2]("About ONS",m[0])+"")&&O(we,ve),N&1&&ke!==(ke=m[2]("What we do",m[0])+"")&&O(Ue,ke),N&2&&We!==(We=m[1]+"/aboutus/whatwedo")&&a(ae,"href",We),N&1&&M!==(M=m[2]("Careers",m[0])+"")&&O(me,M),N&2&&B!==(B=m[1]+"/aboutus/careers")&&a(se,"href",B),N&1&&v!==(v=m[2]("Contact us",m[0])+"")&&O(E,v),N&2&&g!==(g=m[1]+"/aboutus/contactus")&&a(W,"href",g),N&1&&Ge!==(Ge=m[2]("Freedom of Information",m[0])+"")&&O(ze,Ge),N&2&&qe!==(qe=m[1]+"/aboutus/transparencyandgovernance/freedomofinformationfoi")&&a(re,"href",qe),N&1&&Oe!==(Oe=m[2]("Connect with us",m[0])+"")&&O(Ce,Oe),N&1&&je!==(je=m[2]("Twitter",m[0])+"")&&O(Ke,je),N&1&&Me!==(Me=m[2]("Facebook",m[0])+"")&&O(Je,Me),N&1&&ua!==(ua=m[2]("LinkedIn",m[0])+"")&&O(_a,ua),N&1&&da!==(da=m[2]("Consultations",m[0])+"")&&O(fa,da),N&1&&ca!==(ca=m[2]("Discussion forums",m[0])+"")&&O(va,ca),N&1&&ha!==(ha=m[2]("Email alerts",m[0])+"")&&O(pa,ha),N&1&&ma!==(ma=m[2]("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated",m[0])+"")&&(Qe.innerHTML=ma)},i:ka,o:ka,d(m){m&&r(n)}}}function $l(e,n,t){let{lang:h="en"}=n,{baseurl:c="//www.ons.gov.uk"}=n;const _={"Footer links":"",Help:"Cymorth",Accessibility:"Hygyrchedd",Cookies:"Cookies",Privacy:"Privacy","Terms and conditions":"Telerau ac amodau","About ONS":"Yngl\u0177n ag SYG","What we do":"Beth rydym yn ei wneud",Careers:"Gyrfaoedd","Contact us":"Cysylltu \xE2 ni","Freedom of Information":"Rhyddid Gwybodaeth","Connect with us":"Cysylltu \xE2 ni",Twitter:"Twitter",Facebook:"Facebook",LinkedIn:"LinkedIn",Consulations:"Consulations","Discussion forums":"Discussion forums","Email alerts":"Rhybuddion ebost","All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated":"Mae'r holl gynnwys ar gael o dan delerau'r <a href='https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/'>Drwydded Llywodraeth Agored f3.0"};function d(s,f){return f=="cy"&&_[s]?_[s]:s}return e.$$set=s=>{"lang"in s&&t(0,h=s.lang),"baseurl"in s&&t(1,c=s.baseurl)},[h,c,d]}class sn extends Pa{constructor(n){super(),Va(this,n,$l,Zl,Ga,{lang:0,baseurl:1})}}export{nn as O,ln as W,sn as a,en as p,an as t};