import { AuthenticationApi } from "../../../core/API/Authentication-api"
import { AlertService } from "../../../core/utils/alertMessage"
import { UserStore } from "../../../stores/userStore"
import { checkToken } from "../../user/user"
import { Basket_Store } from "../../../stores/basket-store"
import { removeRegistrationBtn } from "../../../core/utils/authentication/removeButtonRegistration"

const loginInput = document.querySelector('.signIn__input-login')
const loginPassword = document.querySelector('.signIn__inputp-password')
const LoginBtn = document.querySelector('.authentication .form .btn')
const loginForm = document.querySelector('.authentication .form')

async function logIn() {
    resetErrorMessage()
    const userDataApi = await AuthenticationApi.getUserData(loginInput.value)
    const errorMessageLogin = document.querySelector('[data-error-log="login"]')
    const errorMessagePassword = document.querySelector('[data-error-log="password"]')
    const isToken = UserStore.getUserToken()

    if(isToken) {
        AlertService.error('Выйдите из аккаунта')
    } else if (!userDataApi) {
        errorMessageLogin.textContent = 'Пользователь не зарегистрирован'
    } else if (userDataApi.password !== loginPassword.value) {
        errorMessagePassword.textContent = 'Неверный пароль'
    } else {
        AlertService.success('Вы вошли в аккаунт')
        removeRegistrationBtn()
        UserStore.setUserToken(userDataApi.token)
        checkToken()
        loginForm.reset()
        resetErrorMessage()
        Basket_Store.setCardToStore(userDataApi.orders)
    }
}

function resetErrorMessage() {
    const errorMessageLogin = document.querySelector('[data-error-log="login"]')
    const errorMessagePassword = document.querySelector('[data-error-log="password"]')
    errorMessageLogin.textContent = null
    errorMessagePassword.textContent = null
}

function showPassword() {
    const showPasswordBtn = document.querySelector('[data-password-log="password"]')
    showPasswordBtn.addEventListener('click', () => loginPassword.type =  loginPassword.type === 'password' ? 'text' : 'password')
}

function submitForm(event) {
    event.preventDefault()
    logIn()
}

function init() {
    LoginBtn.addEventListener('click', submitForm)
    showPassword()
}

document.addEventListener('DOMContentLoaded', init)