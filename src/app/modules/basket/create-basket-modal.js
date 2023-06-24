import { closeBusketModalByBtnCross } from "./basket-close"
import { deleteItem, deliteAllItems } from "./basket"

const busketModal = document.querySelector('.basket-modal')

function createBasketModal() {
    busketModal.append(createBasketModalHeader(), createBasketItemsWrapper(), createBasketModalFooter())
}

function createBasketModalHeader() {
    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header')
    const heading = document.createElement('div')
    heading.classList.add('modal-header__heading')
    const headingText = document.createElement('h3')
    headingText.textContent = 'Корзина'
    const cross = document.createElement('button')
    cross.classList.add('cross')
    cross.type = 'button'
    cross.addEventListener('click', closeBusketModalByBtnCross)

    heading.append(headingText)
    modalHeader.append(heading, cross)
    return modalHeader
}

export function createBasketItemsWrapper() {
    const itemsWrapper = document.createElement('div')
    itemsWrapper.classList.add('basket-modal__items')
    itemsWrapper.addEventListener('click', deleteItem)

    return itemsWrapper
}

export function createBasketItem(element) {
    const item = document.createElement('div')
    item.classList.add('basket-item')
    item.id = element.id

    item.append(createBasketItemTitle(element), createBasketItemCount(element), createBasketItemPrice(element), createBasketItemCross())
    return item
}

function createBasketItemTitle(element) {
    const itemTitle = document.createElement('div')
    itemTitle.classList.add('basket-item__title')
    const itemTitleText = document.createElement('h5')
    itemTitleText.textContent = `${element.title}`

    itemTitle.append(itemTitleText)
    return itemTitleText
}

function createBasketItemCount(element) {
    const itemCount = document.createElement('div')
    itemCount.classList.add('basket-item__count')

    const itemCountMinus = document.createElement('button')
    itemCountMinus.type = 'button'
    itemCountMinus.classList.add('basket-item-minus')
    itemCountMinus.textContent = '-'

    const itemCountQuantity = document.createElement('span')
    itemCountQuantity.classList.add('basket-item-quantity')
    itemCountQuantity.textContent = element.quantity

    const itemCountPlus = document.createElement('button')
    itemCountPlus.type = 'button'
    itemCountPlus.classList.add('basket-item-plus')
    itemCountPlus.textContent = '+'

    itemCount.append(itemCountMinus, itemCountQuantity, itemCountPlus)
    return itemCount
}

function createBasketItemPrice(element) {
    const itemPrice = document.createElement('div')
    itemPrice.classList.add('basket-item__price')
    const itemPriceText = document.createElement('span')
    itemPriceText.textContent = `${element.price} $`

    itemPrice.append(itemPriceText)
    return itemPrice
}

function createBasketItemCross() {
    const cross = document.createElement('button')
    cross.classList.add('cross', 'cross_small')

    return cross
}

export function createBasketModalFooter() {
    const basketModalFooter = document.createElement('div')
    basketModalFooter.classList.add('basket-modal__footer')
    basketModalFooter.style.display = 'none'

    
    return basketModalFooter
}
 
export function createBasketModalFooterBtns() {
    const btnsWrapper = document.createElement('div')
    btnsWrapper.classList.add('basket-modal__buttons')

    const deliteAllBnt = document.createElement('button')
    deliteAllBnt.classList.add('basket-modal__delite-all')
    deliteAllBnt.type = 'button'
    deliteAllBnt.textContent = 'Очистить корзину'
    deliteAllBnt.addEventListener('click', deliteAllItems)

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('btn', 'basket-modal__order')
    orderBtn.type = 'button'
    orderBtn.textContent = 'Заказать'

    btnsWrapper.append(deliteAllBnt, orderBtn)

    return btnsWrapper
}

export function createBasketGeneralPrice(totalAmount) {
    const generalPrice = document.createElement('div')
    generalPrice.classList.add('basket-modal__general-price')
    const generalPriceNumber = document.createElement('span')

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    generalPriceNumber.textContent = `Итого: ${USDollar.format(totalAmount)}`
    generalPrice.append(generalPriceNumber)
    
    return generalPrice
}

export function countGeneralPrice() {
    const itemPrices = document.querySelectorAll('.basket-modal__items .basket-item__price')
    console.log(itemPrices.textContent)
    let totalAmount = 0
    itemPrices.forEach(price => {
        console.log(itemPrices.textContent)
    } )

    return totalAmount
}

function init() {
    createBasketModal()
}

document.addEventListener('DOMContentLoaded', init)