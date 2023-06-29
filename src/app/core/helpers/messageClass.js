export class ErrorMessageHandler {

    static errorMessageMaxQuantity(element, maxNumber, simbols) {
        element.textContent = `Имя не должно содержать ${simbols}\nМаксимальное кол-во ${maxNumber} символов`
    }

    static errorMessageExistingLogin(element, email) {
        element.textContent = `Пользователь ${email} уже существует`
    }

    static errorMessageDifferentPassword(element) {
        element.textContent = `Пароль не совпадает`
    }

    static errorMessageContainsPassword(element) {
        element.textContent = `Пароль должен содержать не менее 6 символов и одну заглавную букву`
    }

    static errorMessageAnotherCity(element) {
        element.textContent = 'Выберите другой город'
    }

    static errorMessageSpaces(element) {
        element.textContent = 'Строки не должны содержать пробелы'
    }
}