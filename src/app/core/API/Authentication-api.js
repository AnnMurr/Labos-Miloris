class AuthenticationApi {
    static userUrl = 'https://64901aaa1e6aa71680ca93bb.mockapi.io/user'

    static setUserData() {
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
                    userName: userName,
                    orders: []
                })
            })
            .then(response => {
                if(response.ok) {
                    resolve()
                } else {
                    reject()
                }
            })
            .catch(error => {throw error})
        }) 
    }
}