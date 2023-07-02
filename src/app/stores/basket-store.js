import { BASKET } from "../core/consts/keys.js"



function setCardToStore(cardData) {
    localStorage.setItem(BASKET, JSON.stringify(cardData))
}

function getBasketStore() {
   const basketStore = localStorage.getItem(BASKET)
   return basketStore
}

function basketStoreData() {
    const basketStore = getBasketStore()
    const cardList = JSON.parse(basketStore) || []

    return cardList
}

export { setCardToStore, getBasketStore, basketStoreData, removeBasketStore }