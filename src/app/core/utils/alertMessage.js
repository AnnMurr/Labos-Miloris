function addAlert(type, text, icon) {
    const alert = document.querySelector('.alert')

    const alertWrapper = document.createElement('div')
    alertWrapper.classList.add('alert__wrapper', `alert__wrapper_${type}`)

    const alertText = document.createElement('span')
    alertText.textContent = `${icon} ${text}`
    const alertLine = document.createElement('span')
    alertLine.classList.add('alert__line')
    alertLine.style.width = "0";

    alertWrapper.append(alertText, alertLine)
    alert.append(alertWrapper)

    const showLine = () => alertLine.style.width = "100%"

    setTimeout(() => showLine(), 100)

    setTimeout(() => alertWrapper.remove(), 3000)
}

export class AlertService {
    static error(text) {
        addAlert("error", text, '\u274C')
    }
    static warning(text) {
        addAlert("warning", text, '⚠️')
    }
    static success(text) {
        addAlert("success", text, '✅')
    }
}
