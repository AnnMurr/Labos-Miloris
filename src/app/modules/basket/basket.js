import { CardsApi } from "../../core/API/cards-api"
import { setCardToStore, getBasketStore } from "../../stores/basket-store"
import { createBasketItem } from "./create-basket-modal"

const busketBtn = document.querySelector('.basket')
const busketModal = document.querySelector('.basket-modal')

busketBtn.addEventListener('click', addItemElements)

function basketStoreData() {
    const basketStore = getBasketStore()
    const cardList = JSON.parse(basketStore) || []
    return cardList
}

function addItemElements() {
    const basketStore = basketStoreData()
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
   if(busketModal.classList.contains('basket-modal_active')) {
    basketStore.forEach(element => {
        itemsWrapper.append(createBasketItem(element))
    })
   }
}

export async function addToBasketStore(event) {
    const cardsApi = await CardsApi.getCards();
    const basketStore = basketStoreData();
    const elementId = event.target.parentNode.parentNode.parentNode.id;
    let newBasketStore = [];

    if (basketStore) {
        newBasketStore = basketStore;
        const element = cardsApi.find(item => item.id === elementId)
        const existingItem = newBasketStore.find(item => item.id === elementId);
        if (existingItem) {
            existingItem.quantity = (Number(existingItem.quantity) + 1).toString()
            element.quantity = (Number(element.quantity) + 1).toString()
        } else {
            
            newBasketStore.push(element)
        } 
    } 

    setCardToStore(newBasketStore);
}