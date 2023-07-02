export const FORM_ELEMENTS = [
    {
        tag: 'input',
        class: 'registration__input',
        id: 'city',
        attributes: [{ type: 'text' }, { placeholder: 'Город' }, { list: 'city-list' }, { autocomplete: 'address-level2' }, { 'data-input': 'city' }]
    },
    {
        tag: 'datalist',
        id: 'city-list'
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-city',
        attributes: [{ 'data-error': 'city' }]
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'text' }, { placeholder: 'Имя' }, { autocomplete: "given-name" }, { 'data-input': 'name' }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-name',
        attributes: [{ 'data-error': 'name' }]
    },
    {
        tag: 'input',
        id: "birthday",
        class: 'registration__input',
        attributes: [{ type: 'date' }, { placeholder: 'Дата рождения' }, { autocomplete: "bday" }, { name: "trip-start" }, { min: "1900-01-01" }, { 'data-input': 'date' }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-date',
        attributes: [{ 'data-error': 'date' }]
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'email' }, { placeholder: 'Почта' }, { autocomplete: "email" }, { 'data-input': 'email' }]
    },
    {
        tag: 'span',
        class: ['error-message'],
        id: 'error-email',
        attributes: [{ 'data-error': 'email' }]
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'password' }, { placeholder: 'Пароль' }, { autocomplete: "current-password" }, { 'data-input': 'password-1' }]
    },
    {
        tag: 'button',
        class: 'btn-show-password',
        attributes: [{ 'data-password': 'password-1' }, { type: "button" }],
        content: '\u{1F441}'
    },
    {
        tag: 'span',
        id: 'error-password',
        class: ['error-message'],
        attributes: [{ 'data-error': 'password-1' }]
    },
    {
        tag: 'input',
        class: 'registration__input',
        attributes: [{ type: 'password' }, { placeholder: 'Введите пароль еще раз' }, { autocomplete: "current-password" }, { 'data-input': 'password-2' }]
    },
    {
        tag: 'button',
        class: 'btn-show-password',
        attributes: [{ 'data-password': 'password-2' }, { type: "button" }],
        content: '\u{1F441}'
    },
    {
        tag: 'span',
        class: ['error-message'],
        attributes: [{ 'data-error': 'password-2' }]
    },
    {
        tag: 'input',
        id: 'registration__checkbox',
        class: ['registration__input', 'registration__checkbox'],
        attributes: [{ type: 'checkbox' }, { 'data-input': 'checkbox' }]
    },
    {
        tag: 'a',
        class: ['registration__label'],
        content: 'Согласен с политикой конфиденциальности',
    },
    {
        tag: 'span',
        class: ['error-message'],
        attributes: [{ 'data-error': 'checkbox' }]
    },
    {
        tag: 'button',
        class: ['btn', 'registration__button'],
        content: 'Зарегистрироваться',
        attributes: [{ type: 'submit' }]
    }
]