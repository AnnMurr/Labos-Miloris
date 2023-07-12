import { hideScroll } from "../../core/utils/hideScroll"

const burgerBtn = document.querySelector('.burger')
const submenu = document.querySelector('.submenu')
const closeBtn = document.querySelector('.cross')

burgerBtn.addEventListener('click', openSubmenu)
closeBtn.addEventListener('click', () => {
    submenu.classList.remove('submenu_active')
    hideScroll(null, null, null)
})



function openSubmenu() {

    if (!submenu.classList.contains('submenu_active')) {
        submenu.classList.add('submenu_active')
        document.addEventListener('click', closeSubmenu)
        hideScroll('fixed', '100%', 'scroll')
    } else {
        submenu.classList.remove('submenu_active')
        document.removeEventListener('click', closeSubmenu)
    }
}

function closeSubmenu(event) {
    if (!submenu.contains(event.target)
        && !closeBtn.contains(event.target)
        && !burgerBtn.contains(event.target)) {
        submenu.classList.remove('submenu_active')
        document.removeEventListener('click', closeSubmenu)
    }
}