import { AlertService } from "./alertMessage"
import { Basket_Store } from "../../stores/basket-store"
import { closeBusketModal } from "../../modules/basket/basket-close"
import { CountElements } from "../helpers/countBasketElements"
import { UserStore } from "../../stores/userStore"

export function createOrder() {
    const isToken = UserStore.getUserToken()

    if (isToken) {
        AlertService.success('Заказ успешно создан')
        Basket_Store.setCardToStore([])
        closeBusketModal()
        CountElements.changeBasketCount()
    } else {
        AlertService.warning('Авторизуйтесь, чтобы сделать заказ')
    }
}