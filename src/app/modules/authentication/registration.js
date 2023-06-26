import { FORM_ELEMENTS } from "../../core/consts/options"

const registrtationBtn = document.querySelector('.authentication__sing-up')
const registrtation = document.querySelector('.registrtation')

registrtationBtn.addEventListener('click', function () {

    if (!registrtation.classList.contains('registrtation_active')) {
        registrtation.classList.add('registrtation_active')
    } else {
        registrtation.classList.remove('registrtation_active')
    }
})

function createDataList(dataList) {
    const cities = ['Минск', 'Витебск', 'Брест', 'Гродно', 'Гомель', 'Могилев']

    cities.forEach((city) => {
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

function createFormElement(form) {

    FORM_ELEMENTS.forEach(option => {
        const element = document.createElement(option.tag)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else if(option.class) {
            element.classList.add(option.class)
        }

        if (option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [key, value] = Object.entries(attribute)[0]
                element.setAttribute(key, value)
            })
        }

        if (option.id && option.id === 'city-list') {
            element.id = option.id
                createDataList(element) 
            } else if(option.id) {
                element.id = option.id
            }

        option.content && (element.textContent = option.content)

        form.append(element)
    })
}

function init() {
    createRegistrtationWrapper()
}

document.addEventListener('DOMContentLoaded', init)