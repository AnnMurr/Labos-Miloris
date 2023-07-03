import { UserStore } from "../../stores/userStore"
import { UserMessageHandler } from "../../core/helpers/userMessageClass"
import { AuthenticationApi } from "../../core/API/Authentication-api"
import { Basket_Store } from "../../stores/basket-store"
import { removeRegistrationBtn } from "../../core/utils/authentication/removeButtonRegistration"

const user = document.querySelector('.user')
const userModal = document.querySelector('.user__modal')

user.addEventListener('click', openUserModal)

function openUserModal() {
    userModal.classList.toggle('user__modal_active')
    checkUserModalClass()
}

function closeUserModal() {
    userModal.classList.remove('user__modal_active')
    checkUserModalClass()
}

function checkUserModalClass() {
    const isUserModalActive = userModal.classList.contains('user__modal_active')
    isUserModalActive ? document.addEventListener('click', closeUserModalOutside) : document.removeEventListener('click', closeUserModalOutside)
}

function closeUserModalOutside(event) {
    !userModal.contains(event.target) && !user.contains(event.target) && (userModal.classList.remove('user__modal_active'))
    !userModal.classList.contains('user__modal_active') && document.removeEventListener('click', closeUserModalOutside)
}

async function checkToken() {
    userModal.innerHTML = null
    const token = UserStore.getUserToken()
    const userData = await AuthenticationApi.getUserToken(token)
    !token ? createUserModal(UserMessageHandler.welcome, UserMessageHandler.signIn) : createUserModal(UserMessageHandler.welcomeUser(userData.name), UserMessageHandler.signOut)
}

function createUserModal(text, BtnTent) {
    userModal.append(createUserModalHeader(text), createUserBtn(BtnTent))
}

function createUserModalHeader(text) {
    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header')
    const heading = document.createElement('div')
    heading.classList.add('modal-header__heading')
    const headingText = document.createElement('h5')
    headingText.textContent = text
    const cross = document.createElement('button')
    cross.classList.add('cross')
    cross.type = 'button'
    cross.addEventListener('click', closeUserModal)
    heading.append(headingText)
    modalHeader.append(heading, cross)

    return modalHeader
}

function createUserBtn(BtnText = UserMessageHandler.signOut) {
    const userBtnExit = document.createElement('button')
    userBtnExit.classList.add('btn', 'user__btn-exit')
    userBtnExit.textContent = BtnText
    userBtnExit.addEventListener('click', scrollToSignInAndExitFromAccount)

    return userBtnExit
}

async function scrollToSignInAndExitFromAccount() {
    const token = UserStore.getUserToken()
    const cardList = Basket_Store.basketStoreData()
    const userData = await AuthenticationApi.getUserToken(token)

    if (token) {
        AuthenticationApi.changeUserOrders(userData.token.toString(), cardList)
        removeRegistrationBtn()
        setTimeout(() => signOut(), 1000)

    } else {
        const authenticationBlock = document.getElementById('authentication')
        authenticationBlock.scrollIntoView({ behavior: 'smooth' })
        userModal.classList.remove('user__modal_active')
    }
}

function signOut() {
    UserStore.removeUserToken()
    Basket_Store.setCardToStore([])
    location.reload()
}

document.addEventListener('DOMContentLoaded', checkToken)

export { checkToken, createUserModal }