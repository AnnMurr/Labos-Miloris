import { CITIES } from "../../core/consts/keys"
import { createFormElement } from "../../core/utils/authentication/create-form"
import { ErrorMessageHandler } from "../../core/helpers/messageClass"
import { AuthenticationApi } from "../../core/API/Authentication-api"
import { RegistrationKeys } from "../../core/consts/registration-keys"
import { CheckConditionRegistration } from "../../core/helpers/check-condition"


const registrtationBtn = document.querySelector('.authentication__sing-up')
const registrtation = document.querySelector('.registrtation')

registrtationBtn.addEventListener('click', function () {

    if (!registrtation.classList.contains('registrtation_active')) {
        registrtation.classList.add('registrtation_active')
    } else {
        registrtation.classList.remove('registrtation_active')
    }
})

export function createDataList(dataList) {
    CITIES.forEach((city) => {
        const dataOption = document.createElement('option')
        dataOption.textContent = city
        dataList.appendChild(dataOption)
    })
}

function createRegistrtationWrapper() {
    const registrtationWrapper = document.createElement('div')
    registrtationWrapper.classList.add('registrtation__wrapper')
    registrtationWrapper.append(createFormImage(), createForm())
    registrtation.append(registrtationWrapper)
    registrtationWrapper.querySelector('.registrtation__label').addEventListener('click', checgeAtribute)
    document.querySelector('.registrtation__button').addEventListener('click', submitForm)
}

function submitForm(event) {
    registration()
}

function createForm() {
    const form = document.createElement('form')
    form.classList.add('registrtation__form')
    createFormElement(form)

    return form
}

function createFormImage() {
    const formImageInner = document.createElement('div')
    formImageInner.classList.add('registrtation__image-inner')

    return formImageInner
}

function checgeAtribute() {
    const label = document.querySelector('.registrtation__label')
    const pageHref = window.location.href

    if (pageHref === 'http://localhost:1234/index.html') {
        label.href = ('href', './pages/privacy-policy.html')
    } else {
        label.href = ('href', './privacy-policy.html')
    }
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
            let input = event.target.getAttribute('data-btn') === '1' ? inputPassword : inputRepeatPassword
            let neededType = input.type === 'password' ? 'text' : 'password'
            input.type = neededType
            let btn = event.target.getAttribute('data-btn') === '1' ? btnShow1 : btnShow2
            btn.classList.contains('btn-show-password_show') ? btn.classList.remove('btn-show-password_show') : btn.classList.add('btn-show-password_show')

        })
    })
}

async function registration() {
    resetErrorMessage()

    const inputs = Array.from(document.querySelectorAll('.registrtation__input'))
    let values = inputs.map(element => element.value)
    const [city, name, date, email, password, secondPassword] = values
    const errorMessageCity = document.getElementById('error-city')
    const errorMessageName = document.getElementById('error-name')
    const errorMessageEmail = document.getElementById('error-email')
    const errorMessagePasswords = document.querySelector('[data-password="password"]')
    const userLogin = await AuthenticationApi.getUserLogin(email)

    if (!CheckConditionRegistration.checkWidthIncludes(CITIES, city)) {
        ErrorMessageHandler.errorMessageAnotherCity(errorMessageCity)
    } else if (CheckConditionRegistration.checkWidthIncludes(name, " ")) {
        ErrorMessageHandler.errorMessageSpaces(errorMessageName)
    } else if (CheckConditionRegistration.checkWidthIncludes(email, " ")) {
        ErrorMessageHandler.errorMessageSpaces(errorMessageEmail)
    } else if (CheckConditionRegistration.checkWidthIncludes(password, " ")) {
        ErrorMessageHandler.errorMessageSpaces(errorMessagePasswords)
    } else if (CheckConditionRegistration.checkMaxLength(name, RegistrationKeys.maxNumberOfLettersName) || CheckConditionRegistration.checkWidthMatch(name, RegistrationKeys.specialSymbolsArray)) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageName, RegistrationKeys.maxNumberOfLettersName, RegistrationKeys.specialSymbols)
    } else if (CheckConditionRegistration.checkMaxLength(email, RegistrationKeys.maxNumberOfLettersEmail) ) {
        ErrorMessageHandler.errorMessageMaxQuantity(errorMessageEmail, RegistrationKeys.maxNumberOfLettersEmail)
    } else if (userLogin) {
        ErrorMessageHandler.errorMessageExistingLogin(errorMessageEmail, email)
    } else if (CheckConditionRegistration.checEquality(password, secondPassword)) {
        ErrorMessageHandler.errorMessageDifferentPassword(errorMessagePasswords)
    } else if (CheckConditionRegistration.checkMinLength(password, RegistrationKeys.minNumberOfLettersPasswords) ||  !CheckConditionRegistration.checkWidthMatch(password, /[A-Z]/)) {
        ErrorMessageHandler.errorMessageContainsPassword(errorMessagePasswords)
    } else {
        AuthenticationApi.setUserData(email, password, RegistrationKeys.token, city, name, date)
    }
}

function init() {
    createRegistrtationWrapper()
    showPassword()
}

document.addEventListener('DOMContentLoaded', init)