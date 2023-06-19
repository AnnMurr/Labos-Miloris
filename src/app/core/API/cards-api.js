export class CardsApi {
    static cardsUrl = 'https://64901aaa1e6aa71680ca93bb.mockapi.io/cards';

    static getCards() {
       return fetch(CardsApi.cardsUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .catch(error => { throw error })    
    }    
}


