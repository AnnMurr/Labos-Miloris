export class AuthenticationApi {
    static userUrl = 'https://64901aaa1e6aa71680ca93bb.mockapi.io/user'

    static setUserData(login, password, token, city, name, date) {
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
                    orders: []
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