export class AuthenticationApi {
    static userUrl = 'https://64901aaa1e6aa71680ca93bb.mockapi.io/user'

    static setUserData(login, password, token, city, name, date, orders) {
        return new Promise((resolve, reject) => {
            fetch(this.userUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password,
                    token: token,
                    city: city,
                    name: name,
                    date: date,
                    orders: orders
                })
            })
                .then(response => {
                    if (response.ok) {
                        resolve()
                    } else {
                        reject()
                    }
                })
                .catch(error => { throw error })
        })
    }

    static async changeUserOrders(userToken, orders) {
        const userData = await this.getUserToken(userToken)     
        const userId = userData.id
        userData.orders = orders

        return fetch(`${this.userUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Failed to change user data')
            }
        })
        .catch(error => { throw error })
    }

    static getUserData(userLogin) {
        return fetch(this.userUrl)
            .then(response => response.json())
            .then(data =>  data.find(element => element.login === userLogin))

            .catch(error => { throw error })
    }

    static getUserLogin(userLogin) {
        return fetch(this.userUrl)
            .then(response => response.json())
            .then(data => data.find(element => element.login === userLogin))

            .catch(error => { throw error })
    }

    static getUserToken(userToken) {
        return fetch(this.userUrl)
            .then(response => response.json())
            .then(data => data.find(element => element.token.toString() === userToken))

            .catch(error => { throw error })
    }
}