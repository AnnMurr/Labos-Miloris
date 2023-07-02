import { CardsApi } from "../../core/API/cards-api"
import { setCardToStore, basketStoreData } from "../../stores/basket-store"
import { createBasketItem, createBasketModalFooterBtns, createBasketGeneralPrice } from "./create-basket-modal"
import { USDollar } from "../../core/consts/keys"

const basketBtn = document.querySelector('.basket')
const basketModal = document.querySelector('.basket-modal')
let cardsFromApi 

basketBtn.addEventListener('click', addItemElements)

async function getcardsFromApi() {
    cardsFromApi = await CardsApi.getCards()
    return cardsFromApi
}



function countGeneralPrice() {
    const basketStore = basketStoreData()
    let totalAmount = 0

    basketStore.forEach(element => totalAmount += +element.price)

    return totalAmount
}

function changeGeneralPrice() {
    const generalPrice = document.querySelector('.basket-modal__general-price span')
    generalPrice.textContent = `Итого: ${USDollar.format(countGeneralPrice())}`
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

 function changeItemCount(event) {
    const item = event.target.parentNode.parentNode
    const elementPrice = item.querySelector('.basket-item__price')
    const basketStore = basketStoreData()
    const existingItem = basketStore.find(element => element.id === item.id)
    const cardModel = cardsFromApi.find(element => element.id === item.id)
    let newBasketStore = basketStore

    if (existingItem) {

        if (event.target.classList.contains('basket-item-minus')) {

            if (Number(existingItem.quantity) === 1) {
                newBasketStore = basketStore.filter(element => element.id !== existingItem.id)
                item.remove()

                if (newBasketStore.length === 0) {
                    deliteBasketFooter()
                }

            } else {
                changeQuantity(existingItem, cardModel, '-')
                changeQuantityText(event.target, existingItem, elementPrice)
            }

        } else {
            changeQuantity(existingItem, cardModel, '+')
            changeQuantityText(event.target, existingItem, elementPrice)
        }
    }

    setCardToStore(newBasketStore)
    changeGeneralPrice()
}

function changeQuantityText(eventTarget, existingItem, elementPrice) {
    const countContent = eventTarget.classList.contains('basket-item-minus') ? eventTarget.nextElementSibling : eventTarget.previousElementSibling
    countContent.textContent = existingItem.quantity
    elementPrice.textContent = `${USDollar.format(existingItem.price)}`
}

function changeQuantity(existingItem, cardModel, operationSymbol) {
    let isMinus = operationSymbol === '-'
    existingItem.quantity = (isMinus? Number(existingItem.quantity) - 1 : Number(existingItem.quantity) + 1).toString()
    existingItem.price = (isMinus? Number(existingItem.price) - Number(cardModel.price): Number(existingItem.price) + Number(cardModel.price)).toString()
    return existingItem.quantity && existingItem.price
}

function addToBasketStore(event) {
    const basketStore = basketStoreData()
    const elementId = event.target.parentNode.parentNode.parentNode.id
    let newBasketStore = []
    const cardModel = cardsFromApi.find(item => item.id === elementId)

    if (basketStore) {
        newBasketStore = basketStore
        const existingItem = newBasketStore.find(item => item.id === elementId)

        if (existingItem) {
            changeQuantity(existingItem, cardModel, '+')
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
        changeGeneralPrice()
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

    if (basketItem) {
        basketModalFooter.style.display = 'flex'
    } else {
        basketModalFooter.style.display = 'none'
        itemsWrapper.textContent = 'Корзина пуста'
    }
}

function init() {
    getcardsFromApi()
}

export { addToBasketStore, deleteItem, deliteAllItems, changeItemCount }

document.addEventListener('DOMContentLoaded', init)