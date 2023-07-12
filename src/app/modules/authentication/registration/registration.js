import { CITIES } from "../../../core/consts/keys.js"
import { createFormElement } from "../../../core/utils/authentication/create-form.js"
import { ErrorMessageHandler } from "../../../core/helpers/messageClass.js"
import { AuthenticationApi } from "../../../core/API/Authentication-api.js"
import { RegistrationKeys } from "../../../core/consts/registration-keys.js"
import { AlertService } from "../../../core/utils/alertMessage.js"
import { UserStore } from "../../../stores/userStore.js"
import { checkToken } from "../../user/user.js"
import { Basket_Store } from "../../../stores/basket-store.js"
import { removeRegistrationBtn } from "../../../core/utils/authentication/removeButtonRegistration.js"

const registration = document.querySelector('.registration')
const registrationBtn = document.querySelector('.authentication__sign-up')

registrationBtn.addEventListener('click', function () {
    const registrationClassActive = 'registration_active'
    !registration.classList.contains(registrationClassActive) ? registration.classList.add(registrationClassActive) : registration.classList.remove(registrationClassActive)
})

export function createDataList(dataList) {
    CITIES.forEach((city) => {
        const dataOption = document.createElement('option')
        dataOption.textContent = city
        dataList.appendChild(dataOption)
    })
}

function createregistrationWrapper() {
    const registrationWrapper = document.createElement('div')
    registrationWrapper.classList.add('registration__wrapper')
    registrationWrapper.append(createFormImage(), createForm())
    registration.append(registrationWrapper)
    registrationWrapper.querySelector('.registration__label').addEventListener('click', checgeAtribute)
    document.querySelector('.registration__button').addEventListener('click', submitForm)
}

function submitForm(event) {
    event.preventDefault()
    registrationProcessing()
}

function createForm() {
    const form = document.createElement('form')
    form.classList.add('registration__form')
    createFormElement(form)

    return form
}

function createFormImage() {
    const formImageInner = document.createElement('div')
    formImageInner.classList.add('registration__image-inner')

    return formImageInner
}

function checgeAtribute() {
    const label = document.querySelector('.registration__label')
    const pageHref = window.location.href
    label.href = ('href', pageHref === 'http://localhost:1234/index.html' ? './privacy-policy.html' : './privacy-policy.html')
}

function resetErrorMessage() {
    const errorMessageCollection = document.querySelectorAll('.error-message')
    errorMessageCollection.forEach(element => element.textContent = null)
}

function showPassword() {
    const inputPassword = document.querySelector('[data-input="password-1"]')
    const inputRepeatPassword = document.querySelector('[data-input="password-2"]')
    const btnShow1 = document.querySelector('[data-password="password-1"]')
    const btnShow2 = document.querySelector('[data-password="password-2"]')
    const btns = document.querySelectorAll('[data-password]')

    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const btnShowPasswordShow = 'btn-show-password_show'
            let doesContainsDataBnt1 = event.target.getAttribute('data-password') === 'password-1'
            let input = doesContainsDataBnt1 ? inputPassword : inputRepeatPassword
            input.type = input.type === 'password' ? 'text' : 'password'
            let btn = doesContainsDataBnt1 ? btnShow1 : btnShow2
            btn.classList.contains(btnShowPasswordShow) ? btn.classList.remove(btnShowPasswordShow) : btn.classList.add(btnShowPasswordShow)
        })
    })
}

const checkEmptyInput = (inputs) => {
    let isEmpty = []

    inputs.forEach(input => {
        let dataInput = input.getAttribute('data-input')
        let errorMessage = document.querySelector(`[data-error="${dataInput}"]`)
        if (dataInput === 'checkbox' && !input.checked) {
            errorMessage.textContent = 'Подтвердите согласие'
            isEmpty.push(false)
        } else if (input.value === '') {
            errorMessage.textContent = 'Поле должно быть заполнено'
            isEmpty.push(false)
        } else {
            isEmpty.push(true)
        }
    })

    return isEmpty;
}

async function registrationProcessing() {
    resetErrorMessage()

    const inputs = Array.from(document.querySelectorAll('.registration__input'))
    let values = inputs.map(element => element.value)
    const [city, name, date, email, password, secondPassword] = values
    const errorMessageCity = document.getElementById('error-city')
    const errorMessageName = document.getElementById('error-name')
    const errorMessageEmail = document.getElementById('error-email')
    const errorMessagePasswords = document.querySelector('[data-error="password-1"]')
    const userLogin = await AuthenticationApi.getUserLogin(email)
    const cardList = Basket_Store.basketStoreData()
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (checkEmptyInput(inputs).includes(false)) {
        checkEmptyInput(inputs)
    } else if (!CITIES.includes(city)) {
        ErrorMessageHandler.setErrorMessage(errorMessageCity, ErrorMessageHandler.chooseAnotherCity)
    } else if (name.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessageName, ErrorMessageHandler.whiteSpace)
    } else if (email.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessageEmail, ErrorMessageHandler.whiteSpace)
    } else if (password.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.whiteSpace)
    } else if (name.length > RegistrationKeys.maxNumberOfLettersName || name.match(RegistrationKeys.specialSymbolsArray)) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageName, RegistrationKeys.maxNumberOfLettersName, RegistrationKeys.specialSymbols)
    } else if (!emailPattern.test(email)) {
        ErrorMessageHandler.setErrorMessage(errorMessageEmail, ErrorMessageHandler.invalidEmail)
    } else if (email.length > RegistrationKeys.maxNumberOfLettersEmail) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageEmail, RegistrationKeys.maxNumberOfLettersEmail)
    } else if (userLogin) {
        ErrorMessageHandler.errorMessageExistingLogin(errorMessageEmail, email)
    } else if (password !== secondPassword) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.passwordDossNotMatch)
    } else if (password.length < RegistrationKeys.minNumberOfLettersPasswords || !password.match(/[A-ZА-Я]/i)) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.passwordIncorrectLength)
    } else {
        AuthenticationApi.setUserData(email, password, RegistrationKeys.token, city, name, date, cardList)
        AlertService.success(RegistrationKeys.successRegistration)
        UserStore.setUserToken(RegistrationKeys.token)
        removeRegistrationBtn()

        setTimeout(() => {
            checkToken()
            location.reload()
        }, 4000)
    }
}

function init() {
    createregistrationWrapper()
    showPassword()
}

document.addEventListener('DOMContentLoaded', init)