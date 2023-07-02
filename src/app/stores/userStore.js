import { USER_TOKEN } from "../core/consts/keys";

export class UserStore {
    static setUserToken(token) {
        return sessionStorage.setItem(USER_TOKEN, token)
    }

    static getUserToken() {
        return sessionStorage.getItem(USER_TOKEN)
    }

    static removeUserToken() {
        return sessionStorage.removeItem(USER_TOKEN)
    }
}