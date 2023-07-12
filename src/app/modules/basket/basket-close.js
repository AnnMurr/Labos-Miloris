import { hideScroll } from "../../core/utils/hideScroll"

const busketModal = document.querySelector('.basket-modal')
const busketBtn = document.querySelector('.basket')
const submenuBasketBtn = document.querySelector('.submenu__basket')
const submenu = document.querySelector('.submenu')

busketBtn.addEventListener('click', toggleBusketModal)
submenuBasketBtn.addEventListener('click', toggleBusketModal)

function toggleBusketModal() {

    submenu.classList.contains('submenu_active') && (submenu.classList.remove('submenu_active'))

    if(!busketModal.classList.contains('basket-modal_active')) {
        busketModal.classList.add('basket-modal_active')
        checkBusketModalClass()
    } else {
        busketModal.classList.remove('basket-modal_active')
        checkBusketModalClass()
    }
}

export function closeBusketModal() {
    busketModal.classList.remove('basket-modal_active')
    checkBusketModalClass()
    hideScroll(null, null, null)
}

function closeBusketModalOutside(event) {
    if(!busketModal.contains(event.target)
    && !busketBtn.contains(event.target)
    && !event.target.classList.contains('cross')
    && !event.target.classList.contains('basket-item-minus')
    && !submenuBasketBtn.contains(event.target)) {
        busketModal.classList.remove('basket-modal_active')
        checkBusketModalClass()
    }
}

function checkBusketModalClass() {
    const itemsWrapper = document.querySelector('.basket-modal .basket-modal__items')
    const basketModalFooter = document.querySelector('.basket-modal__footer')

    if(busketModal.classList.contains('basket-modal_active')) {
        document.addEventListener('click', closeBusketModalOutside)
    } else {
        document.removeEventListener('click', closeBusketModalOutside)
        itemsWrapper.innerHTML = null
        basketModalFooter.innerHTML = null
    }
}