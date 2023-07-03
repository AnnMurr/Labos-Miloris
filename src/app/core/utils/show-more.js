const cardsInner = document.querySelector('.cards__inner')
let numberOfVisibleCards = 6

export function hiddenCards() {
    const showMoreBtn = document.querySelector('.cards__show-more')
    let i = 0;
    const allCards = Array.from(cardsInner.children)
    
    for (i; i < numberOfVisibleCards && i < allCards.length; i++) {
        allCards[i].classList.add('card_active')
    }

    allCards.forEach(element => {
        if(element.classList.contains('card_active')) {
            setTimeout(()=> element.style.opacity = '1', 100)
        }
    })
    
    i >= allCards.length ? showMoreBtn.style.display = 'none' : showMoreBtn.style.display = 'block'
    
    showMoreBtn.addEventListener('click', clickShow)
}

function clickShow() {
    numberOfVisibleCards += 6;
    hiddenCards()
}