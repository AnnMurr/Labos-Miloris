export const FORM_ELEMENTS = [
    {
        tag: 'input',
        class: 'registrtation__input',
        id: 'city',
        attributes: [{ type: 'text' }, { placeholder: 'Город' }, { list: 'city-list' }, { required: true }, {autocomplete: 'address-level2'}]
    },
    {
        tag: 'datalist',
        id: 'city-list'
    },
    {
        tag: 'input',
        class: 'registrtation__input',
        attributes: [{ type: 'text' }, { placeholder: 'Имя' }, { required: true }, { autocomplete: "given-name"}]
    },
    {
        tag: 'input',
        class: 'registrtation__input',
        attributes: [{ type: 'email' }, { placeholder: 'Почта' }, { required: true }, { autocomplete: "email"}]
    },
    {
        tag: 'input',
        class: 'registrtation__input',
        attributes: [{ type: 'password' }, { placeholder: 'Пароль' }, { required: true }, { autocomplete: "current-password" }]
    },
    {
        tag: 'input',
        class: 'registrtation__input',
        attributes: [{ type: 'password' }, { placeholder: 'Пароль' }, { required: true }]
    },
    {
        tag: 'button',
        class: ['btn', 'registrtation__button'],
        content: 'Зарегистрироваться',
        attributes: [{ type: 'submit' }]
    }
]