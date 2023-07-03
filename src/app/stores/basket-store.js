import { BASKET } from "../core/consts/keys.js"

export class Basket_Store {
    static setCardToStore(cardData) {
        localStorage.setItem(BASKET, JSON.stringify(cardData))
    }

    static getBasketStore() {
        const basketStore = localStorage.getItem(BASKET)
        return basketStore
    }

    static basketStoreData() {
        const basketStore = this.getBasketStore()
        const cardList = JSON.parse(basketStore) || []
    
        return cardList
    }

}