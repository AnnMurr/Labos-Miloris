import { Basket_Store } from "../../stores/basket-store.js"


export class CountElements {
    static countElementsInBasket() {
        const cardList = Basket_Store.basketStoreData()
        let count = 0
        cardList.forEach(element => {
            count += Number(element.quantity)
        })
    
        return count
    }

    static cheangeBasketCount() {
        const basketCountText  = document.querySelector('.basket__count span')
        basketCountText.textContent = this.countElementsInBasket()
    }
}