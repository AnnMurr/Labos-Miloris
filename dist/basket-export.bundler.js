(()=>{"use strict";var t={152:(t,e,n)=>{n.d(e,{O:()=>a});class a{static cardsUrl="https://64901aaa1e6aa71680ca93bb.mockapi.io/cards";static getCards(){return fetch(a.cardsUrl).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).catch((t=>{throw t}))}static getWomenCards(){return fetch(a.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"women"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getMenCards(){return fetch(a.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"men"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getSelectiveCards(){return fetch(a.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"selective"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}}},64:(t,e,n)=>{n.d(e,{AF:()=>c,G$:()=>s,e0:()=>a});const a="basket",s="User";let c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})},894:(t,e,n)=>{n.d(e,{l:()=>s});var a=n(565);class s{static countElementsInBasket(){const t=a.h.basketStoreData();let e=0;return t.forEach((t=>{e+=Number(t.quantity)})),e}static cheangeBasketCount(){document.querySelector(".basket__count span").textContent=this.countElementsInBasket()}}},695:(t,e,n)=>{function a(t,e,n){const a=document.querySelector(".alert"),s=document.createElement("div");s.classList.add("alert__wrapper",`alert__wrapper_${t}`);const c=document.createElement("span");c.textContent=`${n} ${e}`;const o=document.createElement("span");o.classList.add("alert__line"),o.style.width="0",s.append(c,o),a.append(s),setTimeout((()=>o.style.width="100%"),100),setTimeout((()=>s.remove()),3e3)}n.d(e,{c:()=>s});class s{static error(t){a("error",t,"❌")}static warning(t){a("warning",t,"⚠️")}static success(t){a("success",t,"✅")}}},799:(t,e,n)=>{n.d(e,{t:()=>c});const a=document.querySelector(".basket-modal"),s=document.querySelector(".basket");function c(){a.classList.remove("basket-modal_active"),r()}function o(t){a.contains(t.target)||s.contains(t.target)||t.target.classList.contains("cross")||(a.classList.remove("basket-modal_active"),r())}function r(){const t=document.querySelector(".basket-modal .basket-modal__items"),e=document.querySelector(".basket-modal__footer");a.classList.contains("basket-modal_active")?document.addEventListener("click",o):(document.removeEventListener("click",o),t.innerHTML=null,e.innerHTML=null)}s.addEventListener("click",(function(){a.classList.contains("basket-modal_active")?(a.classList.remove("basket-modal_active"),r()):(a.classList.add("basket-modal_active"),r())}))},732:(t,e,n)=>{n.d(e,{G6:()=>_,ML:()=>b,wz:()=>f});var a=n(152),s=n(221),c=n(64),o=n(894),r=n(565);const i=document.querySelector(".basket"),d=document.querySelector(".basket-modal");let l;function u(){const t=r.h.basketStoreData();let e=0;return t.forEach((t=>e+=+t.price)),e}function m(){document.querySelector(".basket-modal__general-price span").textContent=`Итого: ${c.AF.format(u())}`}function p(){const t=r.h.basketStoreData(),e=document.querySelector(".basket-modal .basket-modal__items"),n=document.querySelector(".basket-modal__footer"),a=u();d.classList.contains("basket-modal_active")&&t.forEach((t=>e.append((0,s.lA)(t)))),n.append((0,s.hx)(),(0,s.iF)(a)),v()}function b(t){const e=t.target.parentNode.parentNode,n=e.querySelector(".basket-item__price"),a=r.h.basketStoreData(),s=a.find((t=>t.id===e.id)),c=l.find((t=>t.id===e.id));let i=a;s&&(t.target.classList.contains("basket-item-minus")?1===Number(s.quantity)?(i=a.filter((t=>t.id!==s.id)),e.remove(),0===i.length&&v()):(h(s,c,"-"),k(t.target,s,n)):(h(s,c,"+"),k(t.target,s,n))),r.h.setCardToStore(i),m(),o.l.cheangeBasketCount()}function k(t,e,n){(t.classList.contains("basket-item-minus")?t.nextElementSibling:t.previousElementSibling).textContent=e.quantity,n.textContent=`${c.AF.format(e.price)}`}function h(t,e,n){let a="-"===n;return t.quantity=(a?Number(t.quantity)-1:Number(t.quantity)+1).toString(),t.price=(a?Number(t.price)-Number(e.price):Number(t.price)+Number(e.price)).toString(),t.quantity&&t.price}function f(t){const e=t.target.parentNode,n=r.h.basketStoreData().filter((t=>e.id!==t.id));r.h.setCardToStore(n),t.target.classList.contains("cross")&&(e.remove(),v(),m(),o.l.cheangeBasketCount())}function _(){document.querySelector(".basket-modal .basket-modal__items").textContent="Корзина пуста",r.h.setCardToStore([]),v(),o.l.cheangeBasketCount()}function v(){const t=document.querySelector(".basket-modal__footer"),e=document.querySelector(".basket-modal .basket-modal__items");document.querySelector(".basket-item")?t.style.display="flex":(t.style.display="none",e.textContent="Корзина пуста")}document.addEventListener("DOMContentLoaded",(function(){!async function(){l=await a.O.getCards()}(),i.addEventListener("click",p),i.append(function(){const t=document.createElement("div");t.classList.add("basket__count");const e=document.createElement("span");return e.textContent=o.l.countElementsInBasket(),t.append(e),t}())}))},221:(t,e,n)=>{n.d(e,{iF:()=>b,lA:()=>m,hx:()=>p});var a=n(799),s=n(732),c=n(64),o=n(695),r=n(565),i=n(894),d=n(780);function l(){d.U.getUserToken()?(o.c.success("Заказ успешно создан"),r.h.setCardToStore([]),(0,a.t)(),i.l.cheangeBasketCount()):o.c.warning("Авторизуйтесь, чтобы сделать заказ")}const u=document.querySelector(".basket-modal");function m(t){const e=document.createElement("div");return e.classList.add("basket-item"),e.id=t.id,e.append(function(t){const e=document.createElement("div");e.classList.add("basket-item__title");const n=document.createElement("h5");return n.textContent=`${t.title}`,e.append(n),n}(t),function(t){const e=document.createElement("div");e.classList.add("basket-item__count");const n=document.createElement("button");n.type="button",n.classList.add("basket-item-minus"),n.textContent="-";const a=document.createElement("span");a.classList.add("basket-item-quantity"),a.textContent=t.quantity;const c=document.createElement("button");return c.type="button",c.classList.add("basket-item-plus"),c.textContent="+",c.addEventListener("click",s.ML),n.addEventListener("click",s.ML),e.append(n,a,c),e}(t),function(t){const e=document.createElement("div");e.classList.add("basket-item__price");const n=document.createElement("span");return n.textContent=`${c.AF.format(t.price)}`,e.append(n),e}(t),function(){const t=document.createElement("button");return t.classList.add("cross","cross_small"),t}()),e}function p(){const t=document.createElement("div");t.classList.add("basket-modal__buttons");const e=document.createElement("button");e.classList.add("basket-modal__delite-all"),e.type="button",e.textContent="Очистить корзину",e.addEventListener("click",s.G6);const n=document.createElement("button");return n.classList.add("btn","basket-modal__order"),n.type="button",n.textContent="Заказать",n.addEventListener("click",l),t.append(e,n),t}function b(t){const e=document.createElement("div");e.classList.add("basket-modal__general-price");const n=document.createElement("span");return n.textContent=`Итого: ${c.AF.format(t)}`,e.append(n),e}document.addEventListener("DOMContentLoaded",(function(){u.append(function(){const t=document.createElement("div");t.classList.add("modal-header");const e=document.createElement("div");e.classList.add("modal-header__heading");const n=document.createElement("h3");n.textContent="Корзина";const s=document.createElement("button");return s.classList.add("cross"),s.type="button",s.addEventListener("click",a.t),e.append(n),t.append(e,s),t}(),function(){const t=document.createElement("div");return t.classList.add("basket-modal__items"),t.addEventListener("click",s.wz),t}(),function(){const t=document.createElement("div");return t.classList.add("basket-modal__footer"),t}())}))},565:(t,e,n)=>{n.d(e,{h:()=>s});var a=n(64);class s{static setCardToStore(t){localStorage.setItem(a.e0,JSON.stringify(t))}static getBasketStore(){return localStorage.getItem(a.e0)}static basketStoreData(){const t=this.getBasketStore();return JSON.parse(t)||[]}}},780:(t,e,n)=>{n.d(e,{U:()=>s});var a=n(64);class s{static setUserToken(t){return sessionStorage.setItem(a.G$,t)}static getUserToken(){return sessionStorage.getItem(a.G$)}static removeUserToken(){return sessionStorage.removeItem(a.G$)}}}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var c=e[a]={exports:{}};return t[a](c,c.exports,n),c.exports}n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(732),n(799),n(221)})();