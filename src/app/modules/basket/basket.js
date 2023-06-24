import { CardsApi } from "../../core/API/cards-api"
import { setCardToStore, getBasketStore } from "../../stores/basket-store"
import { createBasketItem } from "./create-basket-modal"
import { createBasketModalFooterBtns } from "./create-basket-modal"
import { createBasketModalFooter } from "./create-basket-modal"
import { createBasketGeneralPrice } from "./create-basket-modal"

const basketBtn = document.querySelector('.basket')
const basketModal = document.querySelector('.basket-modal')

basketBtn.addEventListener('click', addItemElements)

function basketStoreData() {
    const basketStore = getBasketStore()
    const cardList = JSON.parse(basketStore) || []
    return cardList
}

 function countGeneralPrice() {
    const basketStore = basketStoreData()
    let totalAmount = 0

    basketStore.forEach(element => totalAmount += +element.price)

    return totalAmount
}

function addItemElements() {
    const basketStore = basketStoreData()
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    const basketModalFooter = document.querySelector('.basket-modal__footer')
    const totalAmount = countGeneralPrice() 

    

    if (basketModal.classList.contains('basket-modal_active')) {
        basketStore.forEach(element => {
            itemsWrapper.append(createBasketItem(element))
        })
        basketModalFooter.append(createBasketModalFooterBtns(), createBasketGeneralPrice(totalAmount))

        deliteBasketFooter()
    } 
}

async function addToBasketStore(event) {
    const cardsFromApi = await CardsApi.getCards()
    const basketStore = basketStoreData()
    const elementId = event.target.parentNode.parentNode.parentNode.id
    let newBasketStore = []
    const cardModel = cardsFromApi.find(item => item.id === elementId)

    if (basketStore) {
        newBasketStore = basketStore
        const existingItem = newBasketStore.find(item => item.id === elementId)

        if (existingItem) {
            existingItem.quantity = (Number(existingItem.quantity) + 1).toString()
            existingItem.price = (Number(existingItem.price) + Number(cardModel.price)).toString()
        } else {

            newBasketStore.push(cardModel)
        }
    } else {
        newBasketStore.push(cardModel)
    }

    setCardToStore(newBasketStore);
}

function deleteItem(event) {
    const basketItem = event.target.parentNode
    const basketStore = basketStoreData()
    const basketWithoutRemovedItem = basketStore.filter(item => basketItem.id !== item.id)
    setCardToStore(basketWithoutRemovedItem)

    if (event.target.classList.contains('cross')) {
        basketItem.remove()
        deliteBasketFooter()
    }
}

function deliteAllItems() {
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    itemsWrapper.textContent = 'Корзина пуста'
    setCardToStore([])
    deliteBasketFooter()
}

function deliteBasketFooter() {
    const basketModalFooter = document.querySelector('.basket-modal__footer')
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    const basketItem = document.querySelector('.basket-item')

    if(basketItem) {
        basketModalFooter.style.display = 'flex'
    } else {
        basketModalFooter.style.display = 'none'
        itemsWrapper.textContent = 'Корзина пуста'
    }
}

export { addToBasketStore, deleteItem, deliteAllItems }