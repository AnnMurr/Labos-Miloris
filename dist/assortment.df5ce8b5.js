function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired8bb;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired8bb=r),r.register("lp9Cw",function(t,n){let a;e(t.exports,"changeItemCount",()=>b),e(t.exports,"addToBasketStore",()=>_),e(t.exports,"deleteItem",()=>g),e(t.exports,"deliteAllItems",()=>v);var s=r("ft0G7"),o=r("fvBqw"),c=r("fEuAQ"),l=r("5P9rb"),i=r("d12Qx");let d=document.querySelector(".basket"),u=document.querySelector(".basket-modal");async function m(){return a=await (0,s.CardsApi).getCards()}function p(){let e=(0,i.Basket_Store).basketStoreData(),t=0;return e.forEach(e=>t+=+e.price),t}function k(){let e=document.querySelector(".basket-modal__general-price span");e.textContent=`Итого: ${(0,c.USDollar).format(p())}`}function f(){let e=(0,i.Basket_Store).basketStoreData(),t=document.querySelector(".basket-modal .basket-modal__items"),n=document.querySelector(".basket-modal__footer"),a=p();u.classList.contains("basket-modal_active")&&e.forEach(e=>t.append((0,o.createBasketItem)(e))),n.append((0,o.createBasketModalFooterBtns)(),(0,o.createBasketGeneralPrice)(a)),h()}function b(e){let t=e.target.parentNode.parentNode,n=t.querySelector(".basket-item__price"),r=(0,i.Basket_Store).basketStoreData(),s=r.find(e=>e.id===t.id),o=a.find(e=>e.id===t.id),c=r;s&&(e.target.classList.contains("basket-item-minus")?1===Number(s.quantity)?(c=r.filter(e=>e.id!==s.id),t.remove(),0===c.length&&h()):(S(s,o,"-"),E(e.target,s,n)):(S(s,o,"+"),E(e.target,s,n))),(0,i.Basket_Store).setCardToStore(c),k(),(0,l.CountElements).cheangeBasketCount()}function E(e,t,n){let a=e.classList.contains("basket-item-minus")?e.nextElementSibling:e.previousElementSibling;a.textContent=t.quantity,n.textContent=`${(0,c.USDollar).format(t.price)}`}function S(e,t,n){let a="-"===n;return e.quantity=(a?Number(e.quantity)-1:Number(e.quantity)+1).toString(),e.price=(a?Number(e.price)-Number(t.price):Number(e.price)+Number(t.price)).toString(),e.quantity&&e.price}function _(e){let t=(0,i.Basket_Store).basketStoreData(),n=e.target.parentNode.parentNode.parentNode.id,r=[],s=a.find(e=>e.id===n);if(t){r=t;let e=r.find(e=>e.id===n);e?S(e,s,"+"):r.push(s)}else r.push(s);(0,i.Basket_Store).setCardToStore(r),(0,l.CountElements).cheangeBasketCount()}function g(e){let t=e.target.parentNode,n=(0,i.Basket_Store).basketStoreData(),a=n.filter(e=>t.id!==e.id);(0,i.Basket_Store).setCardToStore(a),e.target.classList.contains("cross")&&(t.remove(),h(),k(),(0,l.CountElements).cheangeBasketCount())}function v(){let e=document.querySelector(".basket-modal .basket-modal__items");e.textContent="Корзина пуста",(0,i.Basket_Store).setCardToStore([]),h(),(0,l.CountElements).cheangeBasketCount()}function h(){let e=document.querySelector(".basket-modal__footer"),t=document.querySelector(".basket-modal .basket-modal__items"),n=document.querySelector(".basket-item");n?e.style.display="flex":(e.style.display="none",t.textContent="Корзина пуста")}document.addEventListener("DOMContentLoaded",function(){m(),d.addEventListener("click",f),d.append(function(){let e=document.createElement("div");return e.classList.add("basket__count"),(countText=document.createElement("span")).textContent=(0,l.CountElements).countElementsInBasket(),e.append(countText),e}())})}),r.register("ft0G7",function(t,n){e(t.exports,"CardsApi",()=>a);class a{static cardsUrl="https://64901aaa1e6aa71680ca93bb.mockapi.io/cards";static getCards(){return fetch(a.cardsUrl).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).catch(e=>{throw e})}static getWomenCards(){return fetch(a.cardsUrl).then(e=>e.json()).then(e=>{let t=[];return e.forEach(e=>{"women"===e.chapter&&t.push(e)}),t}).catch(e=>{throw e})}static getMenCards(){return fetch(a.cardsUrl).then(e=>e.json()).then(e=>{let t=[];return e.forEach(e=>{"men"===e.chapter&&t.push(e)}),t}).catch(e=>{throw e})}static getSelectiveCards(){return fetch(a.cardsUrl).then(e=>e.json()).then(e=>{let t=[];return e.forEach(e=>{"selective"===e.chapter&&t.push(e)}),t}).catch(e=>{throw e})}}}),r.register("fvBqw",function(t,n){e(t.exports,"createBasketItem",()=>i),e(t.exports,"createBasketModalFooterBtns",()=>d),e(t.exports,"createBasketGeneralPrice",()=>u);var a=r("9bEHj"),s=r("lp9Cw"),o=r("fEuAQ"),c=r("1r6iw");let l=document.querySelector(".basket-modal");function i(e){let t=document.createElement("div");return t.classList.add("basket-item"),t.id=e.id,t.append(function(e){let t=document.createElement("div");t.classList.add("basket-item__title");let n=document.createElement("h5");return n.textContent=`${e.title}`,t.append(n),n}(e),function(e){let t=document.createElement("div");t.classList.add("basket-item__count");let n=document.createElement("button");n.type="button",n.classList.add("basket-item-minus"),n.textContent="-";let a=document.createElement("span");a.classList.add("basket-item-quantity"),a.textContent=e.quantity;let r=document.createElement("button");return r.type="button",r.classList.add("basket-item-plus"),r.textContent="+",r.addEventListener("click",s.changeItemCount),n.addEventListener("click",s.changeItemCount),t.append(n,a,r),t}(e),function(e){let t=document.createElement("div");t.classList.add("basket-item__price");let n=document.createElement("span");return n.textContent=`${(0,o.USDollar).format(e.price)}`,t.append(n),t}(e),function(){let e=document.createElement("button");return e.classList.add("cross","cross_small"),e}()),t}function d(){let e=document.createElement("div");e.classList.add("basket-modal__buttons");let t=document.createElement("button");t.classList.add("basket-modal__delite-all"),t.type="button",t.textContent="Очистить корзину",t.addEventListener("click",s.deliteAllItems);let n=document.createElement("button");return n.classList.add("btn","basket-modal__order"),n.type="button",n.textContent="Заказать",n.addEventListener("click",c.createOrder),e.append(t,n),e}function u(e){let t=document.createElement("div");t.classList.add("basket-modal__general-price");let n=document.createElement("span");return n.textContent=`Итого: ${(0,o.USDollar).format(e)}`,t.append(n),t}document.addEventListener("DOMContentLoaded",function(){l.append(function(){let e=document.createElement("div");e.classList.add("modal-header");let t=document.createElement("div");t.classList.add("modal-header__heading");let n=document.createElement("h3");n.textContent="Корзина";let r=document.createElement("button");return r.classList.add("cross"),r.type="button",r.addEventListener("click",a.closeBusketModal),t.append(n),e.append(t,r),e}(),function(){let e=document.createElement("div");return e.classList.add("basket-modal__items"),e.addEventListener("click",s.deleteItem),e}(),function(){let e=document.createElement("div");return e.classList.add("basket-modal__footer"),e}())})}),r.register("9bEHj",function(t,n){e(t.exports,"closeBusketModal",()=>s);let a=document.querySelector(".basket-modal"),r=document.querySelector(".basket");function s(){a.classList.remove("basket-modal_active"),c()}function o(e){a.contains(e.target)||r.contains(e.target)||e.target.classList.contains("cross")||(a.classList.remove("basket-modal_active"),c())}function c(){let e=document.querySelector(".basket-modal .basket-modal__items"),t=document.querySelector(".basket-modal__footer");a.classList.contains("basket-modal_active")?document.addEventListener("click",o):(document.removeEventListener("click",o),e.innerHTML=null,t.innerHTML=null)}r.addEventListener("click",function(){a.classList.contains("basket-modal_active")?(a.classList.remove("basket-modal_active"),c()):(a.classList.add("basket-modal_active"),c())})}),r.register("fEuAQ",function(t,n){e(t.exports,"BASKET",()=>a),e(t.exports,"USER_TOKEN",()=>r),e(t.exports,"USDollar",()=>s),e(t.exports,"CITIES",()=>o);let a="basket",r="User",s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=["Минск","Витебск","Брест","Гродно","Гомель","Могилев"]}),r.register("1r6iw",function(t,n){e(t.exports,"createOrder",()=>i);var a=r("iOt5K"),s=r("d12Qx"),o=r("9bEHj"),c=r("5P9rb"),l=r("lkGsD");function i(){let e=(0,l.UserStore).getUserToken();e?((0,a.AlertService).success("Заказ успешно создан"),(0,s.Basket_Store).setCardToStore([]),(0,o.closeBusketModal)(),(0,c.CountElements).cheangeBasketCount()):(0,a.AlertService).warning("Авторизуйтесь, чтобы сделать заказ")}}),r.register("iOt5K",function(t,n){function a(e,t,n){let a=document.querySelector(".alert"),r=document.createElement("div");r.classList.add("alert__wrapper",`alert__wrapper_${e}`);let s=document.createElement("span");s.textContent=`${n} ${t}`;let o=document.createElement("span");o.classList.add("alert__line"),o.style.width="0",r.append(s,o),a.append(r);let c=()=>o.style.width="100%";setTimeout(()=>c(),100),setTimeout(()=>r.remove(),3e3)}e(t.exports,"AlertService",()=>r);class r{static error(e){a("error",e,"❌")}static warning(e){a("warning",e,"⚠️")}static success(e){a("success",e,"✅")}}}),r.register("d12Qx",function(t,n){e(t.exports,"Basket_Store",()=>s);var a=r("fEuAQ");class s{static setCardToStore(e){localStorage.setItem(a.BASKET,JSON.stringify(e))}static getBasketStore(){let e=localStorage.getItem(a.BASKET);return e}static basketStoreData(){let e=this.getBasketStore(),t=JSON.parse(e)||[];return t}}}),r.register("5P9rb",function(t,n){e(t.exports,"CountElements",()=>s);var a=r("d12Qx");class s{static countElementsInBasket(){let e=(0,a.Basket_Store).basketStoreData(),t=0;return e.forEach(e=>{t+=Number(e.quantity)}),t}static cheangeBasketCount(){let e=document.querySelector(".basket__count span");e.textContent=this.countElementsInBasket()}}}),r.register("lkGsD",function(t,n){e(t.exports,"UserStore",()=>s);var a=r("fEuAQ");class s{static setUserToken(e){return sessionStorage.setItem(a.USER_TOKEN,e)}static getUserToken(){return sessionStorage.getItem(a.USER_TOKEN)}static removeUserToken(){return sessionStorage.removeItem(a.USER_TOKEN)}}});
//# sourceMappingURL=assortment.df5ce8b5.js.map