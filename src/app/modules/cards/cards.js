import { CardsApi } from "../../core/API/cards-api"
import { hiddenCards } from "../../core/utils/show-more"
import { USDollar } from "../../core/consts/keys"

const cardsWrapper = document.querySelector('.cards__wrapper')
const cardsInner = document.querySelector('.cards__inner')
const source = localStorage.getItem('source')

const sourceFunctions = {
    'catalogWomenBtn': CardsApi.getWomenCards,
    'catalogMenBtn': CardsApi.getMenCards,
    'catalogSelectiveBtn': CardsApi.getSelectiveCards,
}

function filterCards() {

    if (source && sourceFunctions.hasOwnProperty(source)) {
        const getCardsFunction = sourceFunctions[source]
        getElements(getCardsFunction())
        localStorage.removeItem('source')
    } else {
        getElements(CardsApi.getCards())
    }
}

async function getElements(dataCards) {
    let cards = await dataCards

    cards.forEach(element => createCard(element.url, element.title, element.price, element.id))

    createShowMoreBtn()
    hiddenCards()
}

function createShowMoreBtn() {
    const showMoreBtn = document.createElement('button')
    showMoreBtn.classList.add('btn', 'cards__show-more')
    showMoreBtn.textContent = 'Показать больше'
    cardsWrapper.appendChild(showMoreBtn)
}

function createCard(url, title, price, id) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = id
    card.append(createCardImage(url), createContentWrapper(title, price))
    cardsInner.append(card)
}

function createCardImage(url) {
    const cardImageInner = document.createElement('div')
    cardImageInner.classList.add('card__image')
    const image = document.createElement('img')
    image.alt = 'perfume'
    image.loading = 'eager'
    image.src = url
    cardImageInner.append(image)

    return cardImageInner
}

function createContentWrapper(title, price) {
    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add('card__content')
    contentWrapper.append(createCardInfo(title, price), careateCardDetail())

    return contentWrapper
}

function createCardInfo(title, price) {
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card__info')
    cardInfo.append(createCardInfoTittle(title), createCardInfoPrice(price), createBtnToBasket())

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
    cardInfoPriceText.textContent = `${USDollar.format(PriceText)}`
    cardInfoPrice.append(cardInfoPriceText)

    return cardInfoPrice
}

export function createBtnToBasket() {
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('btn', 'card-btn')
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
    filterCards()
}

document.addEventListener('DOMContentLoaded', init)