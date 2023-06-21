const catalogWomenBtn = document.querySelector('.catalog__item-women')
const catalogMenBtn = document.querySelector('.catalog__item-men')
const catalogSelectiveBtn = document.querySelector('.catalog__item-selective')

catalogWomenBtn.addEventListener('click', () => {
    localStorage.setItem('source', 'catalogWomenBtn')
})

catalogMenBtn.addEventListener('click', () => {
    localStorage.setItem('source', 'catalogMenBtn')
})

catalogSelectiveBtn.addEventListener('click', () => {
    localStorage.setItem('source', 'catalogSelectiveBtn')
})