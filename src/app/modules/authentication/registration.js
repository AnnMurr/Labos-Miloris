import { CITIES } from "../../core/consts/keys"
import { createFormElement } from "../../core/utils/authentication/create-form"
import { ErrorMessageHandler } from "../../core/helpers/messageClass"
import { AuthenticationApi } from "../../core/API/Authentication-api"
import { RegistrationKeys } from "../../core/consts/registration-keys"
import { AlertService } from "../../core/utils/alertMessage"

const registrationBtn = document.querySelector('.authentication__sign-up')
const registration = document.querySelector('.registration')

registrationBtn.addEventListener('click', function () {
    const registrationClassActive = 'registration_active'
    !registration.classList.contains(registrationClassActive) ?  registration.classList.add(registrationClassActive) : registration.classList.remove(registrationClassActive)
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
    label.href = ('href', pageHref === 'http://localhost:1234/index.html' ? './pages/privacy-policy.html' : './privacy-policy.html')
}

function resetErrorMessage() {
    const errorMessageForm = {
        errorMessageCity: document.getElementById('error-city'),
        errorMessageName: document.getElementById('error-name'),
        errorMessageDate: document.getElementById('error-date'),
        errorMessageEmail: document.getElementById('error-email'),
        errorMessagePasswords: document.querySelector('[data-password ="password"]')
    }

    for (key in errorMessageForm) {
        errorMessageForm[key].textContent = null
    }
}

function showPassword() {
    const inputPassword = document.querySelector('[data-password="1"]')
    const inputRepeatPassword = document.querySelector('[data-password="2"]')
    const btnShow1 = document.querySelector('[data-btn="1"]')
    const btnShow2 = document.querySelector('[data-btn="2"]')
    const btns = document.querySelectorAll('.btn-show-password')

    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const btnShowPasswordShow = 'btn-show-password_show'
            let doesContainsDataBnt1 = event.target.getAttribute('data-btn') === '1'
            let input = doesContainsDataBnt1 ? inputPassword : inputRepeatPassword
            input.type = input.type === 'password' ? 'text' : 'password'
            let btn = doesContainsDataBnt1 ? btnShow1 : btnShow2
            btn.classList.contains(btnShowPasswordShow) ? btn.classList.remove(btnShowPasswordShow) : btn.classList.add(btnShowPasswordShow)
        })
    })
}

async function registrationProcessing() {
    resetErrorMessage()

    const inputs = Array.from(document.querySelectorAll('.registration__input'))
    let values = inputs.map(element => element.value)
    const [city, name, date, email, password, secondPassword] = values
    const errorMessageCity = document.getElementById('error-city')
    const errorMessageName = document.getElementById('error-name')
    const errorMessageEmail = document.getElementById('error-email')
    const errorMessagePasswords = document.querySelector('[data-password="password"]')
    const userLogin = await AuthenticationApi.getUserLogin(email)

    const checkInputsValue = () => {
        const emptyInputs =  inputs.filter(element => !element.value)
       let emptyInputsErrorMessage 
       emptyInputs.forEach(empElem => {
            console.log(document.querySelector('> .error-message'))

       })
        console.log(emptyInputs)
    }
        
    checkInputsValue()

    if (!CITIES.includes(city)) {
        ErrorMessageHandler.setErrorMessage(errorMessageCity, ErrorMessageHandler.chooseAnotherCity)
    } else if (name.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessageName, ErrorMessageHandler.whiteSpace)
    } else if (email.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessageEmail, ErrorMessageHandler.whiteSpace)
    } else if (password.includes(' ')) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.whiteSpace)
    } else if (name.length > RegistrationKeys.maxNumberOfLettersName || name.match(RegistrationKeys.specialSymbolsArray)) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageName, RegistrationKeys.maxNumberOfLettersName, RegistrationKeys.specialSymbols)
    } else if (email.length > RegistrationKeys.maxNumberOfLettersEmail) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageEmail, RegistrationKeys.maxNumberOfLettersEmail)
    } else if (userLogin) {
        ErrorMessageHandler.errorMessageExistingLogin(errorMessageEmail, email)
    } else if (password !== secondPassword) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.passwordDossNotMatch)
    } else if (password.length < RegistrationKeys.minNumberOfLettersPasswords ||  !password.match(/[A-ZА-Я]/i)) {
        ErrorMessageHandler.setErrorMessage(errorMessagePasswords, ErrorMessageHandler.passwordIncorrectLength)
    } else {
        AuthenticationApi.setUserData(email, password, RegistrationKeys.token, city, name, date)
        AlertService.error(RegistrationKeys.successRegistration)
    }
}

function init() {
    createregistrationWrapper()
    showPassword()
}

document.addEventListener('DOMContentLoaded', init)