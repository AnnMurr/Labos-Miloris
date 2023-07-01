export const FORM_ELEMENTS = [
    {
        tag: 'input',
        class: 'registration__input',
        id: 'city',
        attributes: [{ type: 'text' }, { placeholder: 'Город' }, { list: 'city-list' }, { autocomplete: 'address-level2' }]
    },
    {
        tag: 'datalist',
        id: 'city-list'
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-city'
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'text' }, { placeholder: 'Имя' }, { autocomplete: "given-name" }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-name'
    },
    {
        tag: 'input',
        id: "birthday",
        class: 'registration__input',
        attributes: [{ type: 'date' }, { placeholder: 'Дата рождения' }, { autocomplete: "bday" }, { name: "trip-start" }, { min: "1900-01-01" }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-date'
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'email' }, { placeholder: 'Почта' }, { autocomplete: "email" }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-email'
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'password' }, { placeholder: 'Пароль' }, { autocomplete: "current-password" }, { 'data-password': '1' }]
    },
    {
        tag: 'button',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '1' }, { type: "button" }],
        content: '\u{1F441}'
    },
    {
        tag: 'span',
        id: 'error-password',
        class: ['error-message'],
        attributes: [{ 'data-password': 'password' }]
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'password' }, { placeholder: 'Введите пароль еще раз' }, { autocomplete: "current-password" }, { 'data-password': '2' }]
    },
    {
        tag: 'button',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '2' }, { type: "button" }],
        content: '\u{1F441}'
    },
    {
        tag: 'span',
        class: ['error-message'],
        attributes: [{ 'data-password': 'password' }]
    },
    {
        tag: 'input',
        id: 'registration__checkbox',
        class: ['registration__checkbox'],
        attributes: [{ type: 'checkbox' }]
    },
    {
        tag: 'a',
        class: ['registration__label'],
        content: 'Согласен с политикой конфиденциальности',
    },
    {
        tag: 'button',
        class: ['btn', 'registration__button'],
        content: 'Зарегистрироваться',
        attributes: [{ type: 'submit' }]
    }
]