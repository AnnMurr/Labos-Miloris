const busketModal = document.querySelector('.basket-modal')
const busketBtn = document.querySelector('.basket')

busketBtn.addEventListener('click', toggleBusketModal)

function toggleBusketModal() {
    if(!busketModal.classList.contains('basket-modal_active')) {
        busketModal.classList.add('basket-modal_active')
        checkBusketModalClass()
    } else {
        busketModal.classList.remove('basket-modal_active')
        checkBusketModalClass()
    }
}

export function closeBusketModalByBtnCross() {
    busketModal.classList.remove('basket-modal_active')
    checkBusketModalClass()
}

function closeBusketModalOutside(event) {
    if(!busketModal.contains(event.target)
    && !busketBtn.contains(event.target)
    && !event.target.classList.contains('cross')) {
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