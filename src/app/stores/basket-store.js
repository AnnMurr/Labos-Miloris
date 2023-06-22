import { BASKET } from "../core/consts/keys.js"

function setCardToStore(cardData) {
    localStorage.setItem(BASKET, JSON.stringify(cardData))
}

function getBasketStore() {
   const basketStore = localStorage.getItem(BASKET)
   return basketStore
}

export { setCardToStore, getBasketStore }