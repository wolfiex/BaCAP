!function(t){var s={};function h(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,h),n.l=!0,n.exports}h.m=t,h.c=s,h.d=function(t,s,e){h.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:e})},h.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},h.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return h.d(s,"a",s),s},h.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},h.p="",h(h.s=2)}([function(t,s,h){"use strict";var e=function(t){t=t||{};this.bandSize=t.bandSize||4,this.index={},this.insert=function(t,s){for(var h=this.getHashbands(s),e=0;e<h.length;e++){var n=h[e];Array.isArray(this.index[n])?this.index[n].push(t):this.index[n]=[t]}},this.query=function(t){for(var s={},h=this.getHashbands(t),e=0;e<h.length;e++)for(var n=h[e],i=0;i<this.index[n].length;i++)s[this.index[n][i]]=!0;return Object.keys(s)},this.getHashbands=function(t){if(t.hashbands)return t.hashbands;t.hashbands=[];for(var s=0;s<t.hashvalues.length/this.bandSize;s++){var h=s*this.bandSize,e=h+this.bandSize,n=t.hashvalues.slice(h,e);t.hashbands.push(n.join("."))}return t.hashbands}};"undefined"!=typeof window&&(window.LshIndex=e),void 0!==t&&t.exports&&(t.exports=e)},function(t,s,h){"use strict";var e=function(t){this.prime=4294967311,this.maxHash=Math.pow(2,32)-1,this.inithashvalues=function(){for(var t=0;t<this.numPerm;t++)this.hashvalues.push(this.maxHash)},this.initPermutations=function(){for(var t={},s=0;s<2;s++){for(var h=[],e=0;e<this.numPerm;e++){for(var n=this.randInt();t[n];)n=this.randInt();h.push(n),t[n]=!0}this[["permA","permB"][s]]=h}},this.update=function(t){for(var s=0;s<this.hashvalues.length;s++){var h=this.permA[s],e=this.permB[s],n=(h*this.hash(t)+e)%this.prime;n<this.hashvalues[s]&&(this.hashvalues[s]=n)}},this.hash=function(t){var s=0;if(0==t.length)return s+(Math.pow(2,32)/2-1);for(var h=0;h<t.length;h++){s=(s<<5)-s+t.charCodeAt(h),s&=s}return s+(Math.pow(2,32)/2-1)},this.jaccard=function(t){if(this.hashvalues.length!=t.hashvalues.length)throw new Error("hashvalue counts differ");if(this.seed!=t.seed)throw new Error("seed values differ");for(var s=0,h=0;h<this.hashvalues.length;h++)s+=this.hashvalues[h]==t.hashvalues[h];return s/this.hashvalues.length},this.randInt=function(){var t=Math.sin(this.seed++)*this.maxHash;return Math.floor((t-Math.floor(t))*this.maxHash)};t=t||{};this.numPerm=t.numPerm||128,this.seed=t.seed||1,this.hashvalues=[],this.permA=[],this.permB=[],this.inithashvalues(),this.initPermutations()};"undefined"!=typeof window&&(window.Minhash=e),void 0!==t&&t.exports&&(t.exports=e)},function(t,s,h){"use strict";var e=h(1),n=h(0);t.exports={Minhash:e,LshIndex:n}}]);