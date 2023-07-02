const BASKET = 'basket'
const USER_TOKEN = 'User'

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const CITIES = ['Минск', 'Витебск', 'Брест', 'Гродно', 'Гомель', 'Могилев']

export { USER_TOKEN, BASKET, USDollar, CITIES }