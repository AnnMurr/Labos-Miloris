(()=>{"use strict";class t{static cardsUrl="https://64901aaa1e6aa71680ca93bb.mockapi.io/cards";static getCards(){return fetch(t.cardsUrl).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).catch((t=>{throw t}))}static getWomenCards(){return fetch(t.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"women"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getMenCards(){return fetch(t.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"men"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getSelectiveCards(){return fetch(t.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"selective"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}}const e=document.querySelector(".cards__inner");let n=6;function c(){const t=document.querySelector(".cards__show-more");let c=0;const a=Array.from(e.children);for(;c<n&&c<a.length;c++)a[c].classList.add("card_active");a.forEach((t=>{t.classList.contains("card_active")&&setTimeout((()=>t.style.opacity="1"),100)})),c>=a.length?t.style.display="none":t.style.display="block",t.addEventListener("click",r)}function r(){n+=6,c()}let a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});const o=document.querySelector(".cards__wrapper"),s=document.querySelector(".cards__inner"),d=localStorage.getItem("source"),i={catalogWomenBtn:t.getWomenCards,catalogMenBtn:t.getMenCards,catalogSelectiveBtn:t.getSelectiveCards};async function l(t){(await t).forEach((t=>function(t,e,n,c){const r=document.createElement("div");r.classList.add("card"),r.id=c,r.append(function(t){const e=document.createElement("div");e.classList.add("card__image");const n=document.createElement("img");return n.alt="perfume",n.loading="eager",n.src=t,e.append(n),e}(t),function(t,e){const n=document.createElement("div");return n.classList.add("card__content"),n.append(function(t,e){const n=document.createElement("div");return n.classList.add("card__info"),n.append(function(t){const e=document.createElement("div");e.classList.add("card__tittle");const n=document.createElement("h4");return n.textContent=t,e.append(n),e}(t),function(t){const e=document.createElement("div");e.classList.add("card__price");const n=document.createElement("span");return n.textContent=`${a.format(t)}`,e.append(n),e}(e),function(){const t=document.createElement("button");return t.classList.add("btn","card-btn"),t.type="button",t.textContent="В корзину",t}()),n}(t,e),function(){const t=document.createElement("div");t.classList.add("card__detail");const e=document.createElement("button");return e.type="button",e.textContent="подробнее",t.append(e),t}()),n}(e,n)),s.append(r)}(t.url,t.title,t.price,t.id))),function(){const t=document.createElement("button");t.classList.add("btn","cards__show-more"),t.textContent="Показать больше",o.appendChild(t)}(),c()}document.addEventListener("DOMContentLoaded",(function(){d&&i.hasOwnProperty(d)?(l((0,i[d])()),localStorage.removeItem("source")):l(t.getCards())}))})();