import { AlertService } from "./alertMessage"
import { setCardToStore } from "../../stores/basket-store"
import { closeBusketModal } from "../../modules/basket/basket-close"

export function createOrder() {
    AlertService.success('Заказ успешно создан')
    setCardToStore([])
    closeBusketModal()
}