import{X as C,$ as Q,a0 as T,S as N,a1 as S}from"./Footer.f0909e51.js";var _;const f=typeof window<"u",L=e=>typeof e=="string",O=()=>{};f&&((_=window?.navigator)==null?void 0:_.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function k(e){return typeof e=="function"?e():C(e)}function x(e){return e}function B(e){return Q()?(T(e),!0):!1}function d(e){var t;const n=k(e);return(t=n?.$el)!=null?t:n}const y=f?window:void 0;f&&window.document;f&&window.navigator;f&&window.location;function p(...e){let t,n,a,r;if(L(e[0])?([n,a,r]=e,t=y):[t,n,a,r]=e,!t)return O;let u=O;const v=S(()=>d(t),i=>{u(),i&&(i.addEventListener(n,a,r),u=()=>{i.removeEventListener(n,a,r),u=O})},{immediate:!0,flush:"post"}),c=()=>{v(),u()};return B(c),c}function H(e,t,n={}){const{window:a=y,ignore:r,capture:u=!0,detectIframe:v=!1}=n;if(!a)return;const c=N(!0);let i;const I=o=>{a.clearTimeout(i);const s=d(e);!s||s===o.target||o.composedPath().includes(s)||!c.value||t(o)},P=o=>r&&r.some(s=>{const l=d(s);return l&&(o.target===l||o.composedPath().includes(l))}),b=[p(a,"click",I,{passive:!0,capture:u}),p(a,"pointerdown",o=>{const s=d(e);c.value=!!s&&!o.composedPath().includes(s)&&!P(o)},{passive:!0}),p(a,"pointerup",o=>{if(o.button===0){const s=o.composedPath();o.composedPath=()=>s,i=a.setTimeout(()=>I(o),50)}},{passive:!0}),v&&p(a,"blur",o=>{var s;const l=d(e);((s=document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!l?.contains(document.activeElement)&&t(o)})].filter(Boolean);return()=>b.forEach(o=>o())}const m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";m[w]=m[w]||{};m[w];var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var W=Object.defineProperty,h=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&E(e,n,t[n]);if(h)for(var n of h(t))F.call(t,n)&&E(e,n,t[n]);return e};const U={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};R({linear:x},U);export{H as o};