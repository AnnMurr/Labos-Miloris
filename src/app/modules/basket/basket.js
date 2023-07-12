import { CardsApi } from "../../core/API/cards-api"
import { createBasketItem, createBasketModalFooterBtns, createBasketGeneralPrice } from "./create-basket-modal"
import { USDollar } from "../../core/consts/keys"
import { CountElements } from "../../core/helpers/countBasketElements"
import { Basket_Store } from "../../stores/basket-store"
import { AlertService } from "../../core/utils/alertMessage"

const basketBtn = document.querySelector('.basket')
const basketModal = document.querySelector('.basket-modal')
const submenuBasketBtn = document.querySelector('.submenu__basket')
let cardsFromApi

const addEventListenerByBtnToBasket = () => {
    const toBasketBtn = document.querySelectorAll('.card-btn')

    toBasketBtn && (toBasketBtn.forEach(btn => btn.addEventListener('click', addToBasketStore)))
}

function returnBasket() {
    basketBtn.addEventListener('click', addItemElements)
    !document.querySelector('.basket__count') &&  (basketBtn.append(createCountBasket()))
}

function returnSubmenuBasket() {
    submenuBasketBtn.addEventListener('click', addItemElements)
}

function createCountBasket() {

    const count = document.createElement('div')
    count.classList.add('basket__count')
    const countText = document.createElement('span')
    countText.textContent = CountElements.countElementsInBasket()
    count.append(countText)

    return count
}

async function getcardsFromApi() {
    cardsFromApi = await CardsApi.getCards()

    return cardsFromApi
}

function countGeneralPrice() {
    const basketStore = Basket_Store.basketStoreData()
    let totalAmount = 0

    basketStore.forEach(element => totalAmount += +element.price)

    return totalAmount
}

function changeGeneralPrice() {
    const generalPrice = document.querySelector('.basket-modal__general-price span')
    generalPrice.textContent = `Итого: ${USDollar.format(countGeneralPrice())}`
}

function addItemElements() {
    const basketStore = Basket_Store.basketStoreData()
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    const basketModalFooter = document.querySelector('.basket-modal__footer')
    const totalAmount = countGeneralPrice()

    if(basketModal.classList.contains('basket-modal_active')) {
        basketStore.forEach(element => itemsWrapper.append(createBasketItem(element)))
        basketModalFooter.append(createBasketModalFooterBtns(), createBasketGeneralPrice(totalAmount))
        deliteBasketFooter()
    }
}

function changeItemCount(event) {
    const item = event.target.parentNode.parentNode
    const elementPrice = item.querySelector('.basket-item__price')
    const basketStore = Basket_Store.basketStoreData()
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

    Basket_Store.setCardToStore(newBasketStore)
    changeGeneralPrice()
    CountElements.changeBasketCount()
}

function changeQuantityText(eventTarget, existingItem, elementPrice) {
    const countContent = eventTarget.classList.contains('basket-item-minus') ? eventTarget.nextElementSibling : eventTarget.previousElementSibling
    countContent.textContent = existingItem.quantity
    elementPrice.textContent = `${USDollar.format(existingItem.price)}`
}

function changeQuantity(existingItem, cardModel, operationSymbol) {
    let isMinus = operationSymbol === '-'
    existingItem.quantity = (isMinus ? Number(existingItem.quantity) - 1 : Number(existingItem.quantity) + 1).toString()
    existingItem.price = (isMinus ? Number(existingItem.price) - Number(cardModel.price) : Number(existingItem.price) + Number(cardModel.price)).toString()

    return existingItem.quantity && existingItem.price
}

function addToBasketStore(event) {
    const basketStore = Basket_Store.basketStoreData()
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

    Basket_Store.setCardToStore(newBasketStore)
    CountElements.changeBasketCount()
    AlertService.success('Товар добавлен в корзину')
}

function deleteItem(event) {
    const basketItem = event.target.parentNode
    const basketStore = Basket_Store.basketStoreData()
    const basketWithoutRemovedItem = basketStore.filter(item => basketItem.id !== item.id)
    Basket_Store.setCardToStore(basketWithoutRemovedItem)

    if (event.target.classList.contains('cross')) {
        basketItem.remove()
        deliteBasketFooter()
        changeGeneralPrice()
        CountElements.changeBasketCount()
    }
}

function deliteAllItems() {
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    itemsWrapper.textContent = 'Корзина пуста'
    Basket_Store.setCardToStore([])
    deliteBasketFooter()
    CountElements.changeBasketCount()
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
    returnBasket()
    returnSubmenuBasket() 
    setTimeout(()=> addEventListenerByBtnToBasket(), 1000)
}

export { addToBasketStore, deleteItem, deliteAllItems, changeItemCount }

document.addEventListener('DOMContentLoaded', init)