import { FORM_ELEMENTS } from "../../consts/options.js"
import { createDataList } from "../../../modules/authentication/registration/registration.js"

export function createFormElement(form) {

    FORM_ELEMENTS.forEach(option => {
        const element = document.createElement(option.tag)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else if (option.class) {
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
        } else if (option.id) {
            element.id = option.id
        }

        if (element.getAttribute('type') === 'date') {
            element.addEventListener('keydown', function (event) {
                event.preventDefault()
            })

            let currentDate = new Date()
            currentDate.setFullYear(currentDate.getFullYear() - 18);
            element.setAttribute('max', currentDate.toISOString().split('T')[0])
        }

        option.content && (element.textContent = option.content)
      

        form.append(element)
    })
}