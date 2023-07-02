import { UserStore } from "../../stores/userStore"
import { UserMessageHandler } from "../../core/helpers/userMessageClass"
import { AuthenticationApi } from "../../core/API/Authentication-api"

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

export async function checkToken() {
    userModal.innerHTML = null
    const token = UserStore.getUserToken()
    const userData = await AuthenticationApi.getUserToken(token)
    !token ?  createUserModal(UserMessageHandler.welcome, UserMessageHandler.signIn) : createUserModal(UserMessageHandler.welcomeUser(userData.name), UserMessageHandler.signOut)
}

export function createUserModal(text, BtnTent) {
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

function scrollToSignInAndExitFromAccount() {
    const token = UserStore.getUserToken()

    if (token) {
        UserStore.removeUserToken()
        location.reload()
    } else {
        const authenticationBlock = document.getElementById('authentication')
        authenticationBlock.scrollIntoView({ behavior: 'smooth' })
        userModal.classList.remove('user__modal_active')
    }
}

document.addEventListener('DOMContentLoaded', checkToken)