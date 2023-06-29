const BASKET = 'basket'

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const CITIES = ['Минск', 'Витебск', 'Брест', 'Гродно', 'Гомель', 'Могилев']

export { BASKET, USDollar, CITIES }