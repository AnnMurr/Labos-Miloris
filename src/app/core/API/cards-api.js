export class CardsApi {
    static cardsUrl = 'https://64901aaa1e6aa71680ca93bb.mockapi.io/cards'

    static getCards() {
        return fetch(CardsApi.cardsUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .catch(error => { throw error })
    }

    static getWomenCards() {
        return fetch(CardsApi.cardsUrl)
            .then(response => response.json())
            .then(data => {
                let womenData = []

                data.forEach(element => {
                    if (element.chapter === 'women') {
                        womenData.push(element)
                    }
                })

                return womenData
            })
            .catch(error => { throw error })
    }

    static getMenCards() {
        return fetch(CardsApi.cardsUrl)
            .then(response => response.json())
            .then(data => {
                let menData = []

                data.forEach(element => {
                    if (element.chapter === 'men') {
                        menData.push(element)
                    }
                })

                return menData
            })
            .catch(error => { throw error })
    }

    static getselectiveCards() {
        return fetch(CardsApi.cardsUrl)
            .then(response => response.json())
            .then(data => {
                let selectiveData = []

                data.forEach(element => {
                    if (element.chapter === 'selective') {
                        selectiveData.push(element)
                    }
                })

                return selectiveData
            })
            .catch(error => { throw error })
    }
}