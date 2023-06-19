import { CardsApi } from "../../core/API/cards-api"

const cardsWrapper = document.querySelector('.cards__wrapper')

async function getElements() {
    let array = await CardsApi.getCards()

    array.forEach(element => {
        careateCard(element.url, element.tittle, element.price)
    })
}

function careateCard(url, title, price) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.append(createCardImage(url), createContentWrapper(title, price))
    cardsWrapper.append(card)
}

function createCardImage(url) {
    const cardImageInner = document.createElement('div')
    cardImageInner.classList.add('card__image')
    const image = document.createElement('img')
    image.alt = 'perfume'
    image.loading = 'eager'
    image.src = url
    image.style.height ='292px'
    cardImageInner.append(image)

    return cardImageInner
}

function createContentWrapper(title, price) {
    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add('card__content')
    contentWrapper.append(createCardInfo(title, price), careateCardDetail())

    return contentWrapper
}

function createCardInfo(tittleText, PriceText) {
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__info')
    cardInfo.append(createCardInfoTittle(tittleText), createCardInfoPrice(PriceText), createBtnToBasket())

    return cardInfo
}

function createCardInfoTittle(tittleText) {
    const cardInfoTittle = document.createElement('div')
    cardInfoTittle.classList.add('card__tittle')
    const cardInfoTittleText = document.createElement('h4')
    cardInfoTittleText.textContent = tittleText
    cardInfoTittle.append(cardInfoTittleText)

    return cardInfoTittle
}

function createCardInfoPrice(PriceText) {
    const cardInfoPrice = document.createElement('div')
    cardInfoPrice.classList.add('card__price')
    const cardInfoPriceText = document.createElement('span')
    cardInfoPriceText.textContent = PriceText
    cardInfoPrice.append(cardInfoPriceText)

    return cardInfoPrice
}

function createBtnToBasket() {
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('btn')
    cardBtn.type = 'button'
    cardBtn.textContent = 'В корзину'

    return cardBtn
}

function careateCardDetail() {
    const cardDetail = document.createElement('div')
    cardDetail.classList.add('card__detail')
    const cardDetailBtn = document.createElement('button')
    cardDetailBtn.type = 'button'
    cardDetailBtn.textContent = 'подробнее'
    cardDetail.append(cardDetailBtn)

    return cardDetail
}

function init() {
    getElements()
}

document.addEventListener('DOMContentLoaded', init)