(()=>{var e={693:()=>{const e=document.querySelectorAll(".anim-item");function t(){for(const t of e){const e=t,o=e.offsetHeight,r=n(e).top,i=4;let s=window.innerHeight-o/i;o>window.innerHeight&&(s=window.innerHeight-window.innerHeight/i),window.scrollY>r-s&&window.scrollY<r+o?e.classList.add("anim"):e.classList.contains("anim-no-hide")||e.classList.remove("anim")}}function n(e){const t=e.getBoundingClientRect(),n=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),300)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(693)})()})();