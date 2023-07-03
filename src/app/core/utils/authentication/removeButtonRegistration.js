import { UserStore } from "../../../stores/userStore"

export function removeRegistrationBtn () {
    const token = UserStore.getUserToken()
    const btn = document.querySelector('.authentication__sign-up')

    token ? btn.style.display = 'none' : btn.style.display = 'block';
}
removeRegistrationBtn()