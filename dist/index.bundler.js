(()=>{var t={516:()=>{const t=document.querySelector(".btnUp");window.addEventListener("scroll",(function(){t.style.display=window.scrollY>0?"flex":"none"}))},659:(t,e,n)=>{"use strict";n(516)},657:(t,e,n)=>{"use strict";n.d(e,{$:()=>s});class s{static userUrl="https://64901aaa1e6aa71680ca93bb.mockapi.io/user";static setUserData(t,e,n,s,a,r,o){return new Promise(((c,i)=>{fetch(this.userUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:t,password:e,token:n,city:s,name:a,date:r,orders:o})}).then((t=>{t.ok?c():i()})).catch((t=>{throw t}))}))}static async changeUserOrders(t,e){const n=await this.getUserToken(t),s=n.id;return n.orders=e,fetch(`${this.userUrl}/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>{if(t.ok)return t.json();throw new Error("Failed to change user data")})).catch((t=>{throw t}))}static getUserData(t){return fetch(this.userUrl).then((t=>t.json())).then((e=>e.find((e=>e.login===t)))).catch((t=>{throw t}))}static getUserLogin(t){return fetch(this.userUrl).then((t=>t.json())).then((e=>e.find((e=>e.login===t)))).catch((t=>{throw t}))}static getUserToken(t){return fetch(this.userUrl).then((t=>t.json())).then((e=>e.find((e=>e.token.toString()===t)))).catch((t=>{throw t}))}}},152:(t,e,n)=>{"use strict";n.d(e,{O:()=>s});class s{static cardsUrl="https://64901aaa1e6aa71680ca93bb.mockapi.io/cards";static getCards(){return fetch(s.cardsUrl).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).catch((t=>{throw t}))}static getWomenCards(){return fetch(s.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"women"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getMenCards(){return fetch(s.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"men"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}static getSelectiveCards(){return fetch(s.cardsUrl).then((t=>t.json())).then((t=>{let e=[];return t.forEach((t=>{"selective"===t.chapter&&e.push(t)})),e})).catch((t=>{throw t}))}}},64:(t,e,n)=>{"use strict";n.d(e,{AF:()=>r,G$:()=>a,MX:()=>o,e0:()=>s});const s="basket",a="User";let r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});const o=["Минск","Витебск","Брест","Гродно","Гомель","Могилев"]},894:(t,e,n)=>{"use strict";n.d(e,{l:()=>a});var s=n(565);class a{static countElementsInBasket(){const t=s.h.basketStoreData();let e=0;return t.forEach((t=>{e+=Number(t.quantity)})),e}static cheangeBasketCount(){document.querySelector(".basket__count span").textContent=this.countElementsInBasket()}}},695:(t,e,n)=>{"use strict";function s(t,e,n){const s=document.querySelector(".alert"),a=document.createElement("div");a.classList.add("alert__wrapper",`alert__wrapper_${t}`);const r=document.createElement("span");r.textContent=`${n} ${e}`;const o=document.createElement("span");o.classList.add("alert__line"),o.style.width="0",a.append(r,o),s.append(a),setTimeout((()=>o.style.width="100%"),100),setTimeout((()=>a.remove()),3e3)}n.d(e,{c:()=>a});class a{static error(t){s("error",t,"❌")}static warning(t){s("warning",t,"⚠️")}static success(t){s("success",t,"✅")}}},693:()=>{const t=document.querySelectorAll(".anim-item");function e(){for(const e of t){const t=e,s=t.offsetHeight,a=n(t).top,r=4;let o=window.innerHeight-s/r;s>window.innerHeight&&(o=window.innerHeight-window.innerHeight/r),window.scrollY>a-o&&window.scrollY<a+s?t.classList.add("anim"):t.classList.contains("anim-no-hide")||t.classList.remove("anim")}}function n(t){const e=t.getBoundingClientRect(),n=window.scrollX||document.documentElement.scrollLeft,s=window.scrollY||document.documentElement.scrollTop;return{top:e.top+s,left:e.left+n}}window.addEventListener("scroll",e),setTimeout((()=>{e()}),300)},324:(t,e,n)=>{"use strict";n.d(e,{C:()=>a});var s=n(780);function a(){const t=s.U.getUserToken();document.querySelector(".authentication__sign-up").style.display=t?"none":"block"}a()},828:(t,e,n)=>{"use strict";n(693)},330:(t,e,n)=>{"use strict";var s=n(64);const a=[{tag:"input",class:"registration__input",id:"city",attributes:[{type:"text"},{placeholder:"Город"},{list:"city-list"},{autocomplete:"address-level2"},{"data-input":"city"}]},{tag:"datalist",id:"city-list"},{tag:"span",class:["error-message"],id:"error-city",attributes:[{"data-error":"city"}]},{tag:"input",class:"registration__input",attributes:[{type:"text"},{placeholder:"Имя"},{autocomplete:"given-name"},{"data-input":"name"}]},{tag:"span",class:["error-message"],id:"error-name",attributes:[{"data-error":"name"}]},{tag:"input",id:"birthday",class:"registration__input",attributes:[{type:"date"},{placeholder:"Дата рождения"},{autocomplete:"bday"},{name:"trip-start"},{min:"1900-01-01"},{"data-input":"date"}]},{tag:"span",class:["error-message"],id:"error-date",attributes:[{"data-error":"date"}]},{tag:"input",class:"registration__input",attributes:[{type:"email"},{placeholder:"Почта"},{autocomplete:"email"},{"data-input":"email"}]},{tag:"span",class:["error-message"],id:"error-email",attributes:[{"data-error":"email"}]},{tag:"input",class:"registration__input",attributes:[{type:"password"},{placeholder:"Пароль"},{autocomplete:"current-password"},{"data-input":"password-1"}]},{tag:"button",class:"btn-show-password",attributes:[{"data-password":"password-1"},{type:"button"}],content:"👁"},{tag:"span",id:"error-password",class:["error-message"],attributes:[{"data-error":"password-1"}]},{tag:"input",class:"registration__input",attributes:[{type:"password"},{placeholder:"Введите пароль еще раз"},{autocomplete:"current-password"},{"data-input":"password-2"}]},{tag:"button",class:"btn-show-password",attributes:[{"data-password":"password-2"},{type:"button"}],content:"👁"},{tag:"span",class:["error-message"],attributes:[{"data-error":"password-2"}]},{tag:"input",id:"registration__checkbox",class:["registration__input","registration__checkbox"],attributes:[{type:"checkbox"},{"data-input":"checkbox"}]},{tag:"a",class:["registration__label"],content:"Согласен с политикой конфиденциальности"},{tag:"span",class:["error-message"],attributes:[{"data-error":"checkbox"}]},{tag:"button",class:["btn","registration__button"],content:"Зарегистрироваться",attributes:[{type:"submit"}]}];class r{static passwordDossNotMatch="Пароль не совпадает";static passwordIncorrectLength="Пароль должен содержать не менее 6 символов и одну заглавную букву";static chooseAnotherCity="Выберите другой город";static whiteSpace="Строки не должны содержать пробелы";static invalidEmail="Неправильно введенный e-mail";static errorMessageMaxQuantity(t,e,n){t.textContent=`Имя не должно содержать ${n}\nМаксимальное кол-во ${e} символов`}static errorMessageExistingLogin(t,e){t.textContent=`Пользователь ${e} уже существует`}static setErrorMessage(t,e){t.textContent=e}}var o=n(657);class c{static specialSymbolsArray=/[!@#$%^&*()[\]{}|\\;:'"<>.,\/?`~=+\-№_]/;static specialSymbols="!@#$%^&*()-_+={}[]|\\;:'\"<>.,/?`~№";static maxNumberOfLettersName=20;static maxNumberOfLettersEmail=40;static minNumberOfLettersPasswords=6;static token=Math.random()*new Date;static successRegistration="Регистрация прошла успешно"}var i=n(695),d=n(780),l=n(459),u=n(565),m=n(324);const p=document.querySelector(".registration");function g(){const t=document.createElement("div");t.classList.add("registration__wrapper"),t.append(function(){const t=document.createElement("div");return t.classList.add("registration__image-inner"),t}(),function(){const t=document.createElement("form");return t.classList.add("registration__form"),function(t){a.forEach((e=>{const n=document.createElement(e.tag);var a;if(Array.isArray(e.class)&&e.class.length>0?e.class.forEach((t=>n.classList.add(t))):e.class&&n.classList.add(e.class),e.attributes&&e.attributes.length>0&&e.attributes.forEach((t=>{const[e,s]=Object.entries(t)[0];n.setAttribute(e,s)})),e.id&&"city-list"===e.id?(n.id=e.id,a=n,s.MX.forEach((t=>{const e=document.createElement("option");e.textContent=t,a.appendChild(e)}))):e.id&&(n.id=e.id),"date"===n.getAttribute("type")){n.addEventListener("keydown",(function(t){t.preventDefault()}));let t=new Date;t.setFullYear(t.getFullYear()-18),n.setAttribute("max",t.toISOString().split("T")[0])}e.content&&(n.textContent=e.content),t.append(n)}))}(t),t}()),p.append(t),t.querySelector(".registration__label").addEventListener("click",b),document.querySelector(".registration__button").addEventListener("click",h)}function h(t){t.preventDefault(),async function(){document.querySelectorAll(".error-message").forEach((t=>t.textContent=null));const t=Array.from(document.querySelectorAll(".registration__input"));let e=t.map((t=>t.value));const[n,a,p,g,h,b]=e,f=document.getElementById("error-city"),_=document.getElementById("error-name"),k=document.getElementById("error-email"),w=document.querySelector('[data-error="password-1"]'),v=await o.$.getUserLogin(g),L=u.h.basketStoreData();y(t).includes(!1)?y(t):s.MX.includes(n)?a.includes(" ")?r.setErrorMessage(_,r.whiteSpace):g.includes(" ")?r.setErrorMessage(k,r.whiteSpace):h.includes(" ")?r.setErrorMessage(w,r.whiteSpace):a.length>c.maxNumberOfLettersName||a.match(c.specialSymbolsArray)?r.errorMessageMaxQuantity(_,c.maxNumberOfLettersName,c.specialSymbols):/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(g)?g.length>c.maxNumberOfLettersEmail?r.errorMessageMaxQuantity(k,c.maxNumberOfLettersEmail):v?r.errorMessageExistingLogin(k,g):h!==b?r.setErrorMessage(w,r.passwordDossNotMatch):h.length<c.minNumberOfLettersPasswords||!h.match(/[A-ZА-Я]/i)?r.setErrorMessage(w,r.passwordIncorrectLength):(o.$.setUserData(g,h,c.token,n,a,p,L),i.c.success(c.successRegistration),d.U.setUserToken(c.token),(0,m.C)(),setTimeout((()=>{(0,l.a)(),location.reload()}),4e3)):r.setErrorMessage(k,r.invalidEmail):r.setErrorMessage(f,r.chooseAnotherCity)}()}function b(){const t=document.querySelector(".registration__label");window.location.href,t.href="./privacy-policy.html"}document.querySelector(".authentication__sign-up").addEventListener("click",(function(){const t="registration_active";p.classList.contains(t)?p.classList.remove(t):p.classList.add(t)}));const y=t=>{let e=[];return t.forEach((t=>{let n=t.getAttribute("data-input"),s=document.querySelector(`[data-error="${n}"]`);"checkbox"!==n||t.checked?""===t.value?(s.textContent="Поле должно быть заполнено",e.push(!1)):e.push(!0):(s.textContent="Подтвердите согласие",e.push(!1))})),e};document.addEventListener("DOMContentLoaded",(function(){g(),function(){const t=document.querySelector('[data-input="password-1"]'),e=document.querySelector('[data-input="password-2"]'),n=document.querySelector('[data-password="password-1"]'),s=document.querySelector('[data-password="password-2"]');document.querySelectorAll(".btn-show-password").forEach((a=>{a.addEventListener("click",(function(a){const r="btn-show-password_show";let o="password-1"===a.target.getAttribute("data-password"),c=o?t:e;c.type="password"===c.type?"text":"password";let i=o?n:s;i.classList.contains(r)?i.classList.remove(r):i.classList.add(r)}))}))}()}));const f=document.querySelector(".signIn__input-login"),_=document.querySelector(".signIn__inputp-password"),k=document.querySelector(".authentication .form .btn"),w=document.querySelector(".authentication .form");function v(){const t=document.querySelector('[data-error-log="login"]'),e=document.querySelector('[data-error-log="password"]');t.textContent=null,e.textContent=null}function L(t){t.preventDefault(),async function(){v();const t=await o.$.getUserData(f.value),e=document.querySelector('[data-error-log="login"]'),n=document.querySelector('[data-error-log="password"]');d.U.getUserToken()?i.c.error("Выйдите из аккаунта"):t?t.password!==_.value?n.textContent="Неверный пароль":(i.c.success("Вы вошли в аккаунт"),(0,m.C)(),d.U.setUserToken(t.token),(0,l.a)(),w.reset(),v(),u.h.setCardToStore(t.orders)):e.textContent="Пользователь не зарегистрирован"}()}document.addEventListener("DOMContentLoaded",(function(){k.addEventListener("click",L),document.querySelector('[data-password-log="password"]').addEventListener("click",(()=>_.type="password"===_.type?"text":"password"))}))},799:(t,e,n)=>{"use strict";n.d(e,{t:()=>r});const s=document.querySelector(".basket-modal"),a=document.querySelector(".basket");function r(){s.classList.remove("basket-modal_active"),c()}function o(t){s.contains(t.target)||a.contains(t.target)||t.target.classList.contains("cross")||(s.classList.remove("basket-modal_active"),c())}function c(){const t=document.querySelector(".basket-modal .basket-modal__items"),e=document.querySelector(".basket-modal__footer");s.classList.contains("basket-modal_active")?document.addEventListener("click",o):(document.removeEventListener("click",o),t.innerHTML=null,e.innerHTML=null)}a.addEventListener("click",(function(){s.classList.contains("basket-modal_active")?(s.classList.remove("basket-modal_active"),c()):(s.classList.add("basket-modal_active"),c())}))},130:(t,e,n)=>{"use strict";n(732),n(799),n(221)},732:(t,e,n)=>{"use strict";n.d(e,{G6:()=>f,ML:()=>g,wz:()=>y});var s=n(152),a=n(221),r=n(64),o=n(894),c=n(565);const i=document.querySelector(".basket"),d=document.querySelector(".basket-modal");let l;function u(){const t=c.h.basketStoreData();let e=0;return t.forEach((t=>e+=+t.price)),e}function m(){document.querySelector(".basket-modal__general-price span").textContent=`Итого: ${r.AF.format(u())}`}function p(){const t=c.h.basketStoreData(),e=document.querySelector(".basket-modal .basket-modal__items"),n=document.querySelector(".basket-modal__footer"),s=u();d.classList.contains("basket-modal_active")&&t.forEach((t=>e.append((0,a.lA)(t)))),n.append((0,a.hx)(),(0,a.iF)(s)),_()}function g(t){const e=t.target.parentNode.parentNode,n=e.querySelector(".basket-item__price"),s=c.h.basketStoreData(),a=s.find((t=>t.id===e.id)),r=l.find((t=>t.id===e.id));let i=s;a&&(t.target.classList.contains("basket-item-minus")?1===Number(a.quantity)?(i=s.filter((t=>t.id!==a.id)),e.remove(),0===i.length&&_()):(b(a,r,"-"),h(t.target,a,n)):(b(a,r,"+"),h(t.target,a,n))),c.h.setCardToStore(i),m(),o.l.cheangeBasketCount()}function h(t,e,n){(t.classList.contains("basket-item-minus")?t.nextElementSibling:t.previousElementSibling).textContent=e.quantity,n.textContent=`${r.AF.format(e.price)}`}function b(t,e,n){let s="-"===n;return t.quantity=(s?Number(t.quantity)-1:Number(t.quantity)+1).toString(),t.price=(s?Number(t.price)-Number(e.price):Number(t.price)+Number(e.price)).toString(),t.quantity&&t.price}function y(t){const e=t.target.parentNode,n=c.h.basketStoreData().filter((t=>e.id!==t.id));c.h.setCardToStore(n),t.target.classList.contains("cross")&&(e.remove(),_(),m(),o.l.cheangeBasketCount())}function f(){document.querySelector(".basket-modal .basket-modal__items").textContent="Корзина пуста",c.h.setCardToStore([]),_(),o.l.cheangeBasketCount()}function _(){const t=document.querySelector(".basket-modal__footer"),e=document.querySelector(".basket-modal .basket-modal__items");document.querySelector(".basket-item")?t.style.display="flex":(t.style.display="none",e.textContent="Корзина пуста")}document.addEventListener("DOMContentLoaded",(function(){!async function(){l=await s.O.getCards()}(),i.addEventListener("click",p),i.append(function(){const t=document.createElement("div");t.classList.add("basket__count");const e=document.createElement("span");return e.textContent=o.l.countElementsInBasket(),t.append(e),t}())}))},221:(t,e,n)=>{"use strict";n.d(e,{iF:()=>g,lA:()=>m,hx:()=>p});var s=n(799),a=n(732),r=n(64),o=n(695),c=n(565),i=n(894),d=n(780);function l(){d.U.getUserToken()?(o.c.success("Заказ успешно создан"),c.h.setCardToStore([]),(0,s.t)(),i.l.cheangeBasketCount()):o.c.warning("Авторизуйтесь, чтобы сделать заказ")}const u=document.querySelector(".basket-modal");function m(t){const e=document.createElement("div");return e.classList.add("basket-item"),e.id=t.id,e.append(function(t){const e=document.createElement("div");e.classList.add("basket-item__title");const n=document.createElement("h5");return n.textContent=`${t.title}`,e.append(n),n}(t),function(t){const e=document.createElement("div");e.classList.add("basket-item__count");const n=document.createElement("button");n.type="button",n.classList.add("basket-item-minus"),n.textContent="-";const s=document.createElement("span");s.classList.add("basket-item-quantity"),s.textContent=t.quantity;const r=document.createElement("button");return r.type="button",r.classList.add("basket-item-plus"),r.textContent="+",r.addEventListener("click",a.ML),n.addEventListener("click",a.ML),e.append(n,s,r),e}(t),function(t){const e=document.createElement("div");e.classList.add("basket-item__price");const n=document.createElement("span");return n.textContent=`${r.AF.format(t.price)}`,e.append(n),e}(t),function(){const t=document.createElement("button");return t.classList.add("cross","cross_small"),t}()),e}function p(){const t=document.createElement("div");t.classList.add("basket-modal__buttons");const e=document.createElement("button");e.classList.add("basket-modal__delite-all"),e.type="button",e.textContent="Очистить корзину",e.addEventListener("click",a.G6);const n=document.createElement("button");return n.classList.add("btn","basket-modal__order"),n.type="button",n.textContent="Заказать",n.addEventListener("click",l),t.append(e,n),t}function g(t){const e=document.createElement("div");e.classList.add("basket-modal__general-price");const n=document.createElement("span");return n.textContent=`Итого: ${r.AF.format(t)}`,e.append(n),e}document.addEventListener("DOMContentLoaded",(function(){u.append(function(){const t=document.createElement("div");t.classList.add("modal-header");const e=document.createElement("div");e.classList.add("modal-header__heading");const n=document.createElement("h3");n.textContent="Корзина";const a=document.createElement("button");return a.classList.add("cross"),a.type="button",a.addEventListener("click",s.t),e.append(n),t.append(e,a),t}(),function(){const t=document.createElement("div");return t.classList.add("basket-modal__items"),t.addEventListener("click",a.wz),t}(),function(){const t=document.createElement("div");return t.classList.add("basket-modal__footer"),t}())}))},930:()=>{const t=document.querySelector(".burger"),e=document.querySelector(".submenu"),n=document.querySelector(".cross");function s(a){e.contains(a.target)||n.contains(a.target)||t.contains(a.target)||(e.style.display="none",document.removeEventListener("click",s))}t.addEventListener("click",(function(){"none"===e.style.display?(e.style.display="block",document.addEventListener("click",s)):(e.style.display="none",document.removeEventListener("click",s))})),n.addEventListener("click",(function(){n.parentNode.parentNode.style.display="none"}))},282:(t,e,n)=>{"use strict";n(930)},459:(t,e,n)=>{"use strict";n.d(e,{a:()=>p});var s=n(780);class a{static signOut="Выйти из акаунта";static signIn="Войти";static welcomeUser=t=>`Добро пожаловать, ${t}`;static welcome="Добро пожаловать!"}var r=n(657),o=n(565),c=n(324);const i=document.querySelector(".user"),d=document.querySelector(".user__modal");function l(){d.classList.remove("user__modal_active"),u()}function u(){d.classList.contains("user__modal_active")?document.addEventListener("click",m):document.removeEventListener("click",m)}function m(t){!d.contains(t.target)&&!i.contains(t.target)&&d.classList.remove("user__modal_active"),!d.classList.contains("user__modal_active")&&document.removeEventListener("click",m)}async function p(){d.innerHTML=null;const t=s.U.getUserToken(),e=await r.$.getUserToken(t);t?g(a.welcomeUser(e.name),a.signOut):g(a.welcome,a.signIn)}function g(t,e){d.append(function(t){const e=document.createElement("div");e.classList.add("modal-header");const n=document.createElement("div");n.classList.add("modal-header__heading");const s=document.createElement("h5");s.textContent=t;const a=document.createElement("button");return a.classList.add("cross"),a.type="button",a.addEventListener("click",l),n.append(s),e.append(n,a),e}(t),function(t=a.signOut){const e=document.createElement("button");return e.classList.add("btn","user__btn-exit"),e.textContent=t,e.addEventListener("click",h),e}(e))}async function h(){const t=s.U.getUserToken(),e=o.h.basketStoreData(),n=await r.$.getUserToken(t);t?(r.$.changeUserOrders(n.token.toString(),e),(0,c.C)(),setTimeout((()=>(s.U.removeUserToken(),o.h.setCardToStore([]),void location.reload())),1e3)):(document.getElementById("authentication").scrollIntoView({behavior:"smooth"}),d.classList.remove("user__modal_active"))}i.addEventListener("click",(function(){d.classList.toggle("user__modal_active"),u()})),document.addEventListener("DOMContentLoaded",p)},565:(t,e,n)=>{"use strict";n.d(e,{h:()=>a});var s=n(64);class a{static setCardToStore(t){localStorage.setItem(s.e0,JSON.stringify(t))}static getBasketStore(){return localStorage.getItem(s.e0)}static basketStoreData(){const t=this.getBasketStore();return JSON.parse(t)||[]}}},780:(t,e,n)=>{"use strict";n.d(e,{U:()=>a});var s=n(64);class a{static setUserToken(t){return sessionStorage.setItem(s.G$,t)}static getUserToken(){return sessionStorage.getItem(s.G$)}static removeUserToken(){return sessionStorage.removeItem(s.G$)}}}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(282),n(130),n(330),n(659),n(828)})()})();