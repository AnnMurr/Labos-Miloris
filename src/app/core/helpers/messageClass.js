export class ErrorMessageHandler {

    static passwordDossNotMatch =  `Пароль не совпадает`

    static passwordIncorrectLength = `Пароль должен содержать не менее 6 символов и одну заглавную букву`

    static chooseAnotherCity = 'Выберите другой город'

    static whiteSpace = 'Строки не должны содержать пробелы'

    static errorMessageMaxQuantity(element, maxNumber, symbols) {
        element.textContent = `Имя не должно содержать ${symbols}\nМаксимальное кол-во ${maxNumber} символов`
    }

    static errorMessageExistingLogin(element, email) {
        element.textContent = `Пользователь ${email} уже существует`
    }

    static setErrorMessage(element, message) {
        element.textContent = message
    }
}