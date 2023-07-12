const burgerBtn = document.querySelector('.burger')
const submenu = document.querySelector('.submenu')
const closeBtn = document.querySelector('.cross')

burgerBtn.addEventListener('click', openSubmenu)
closeBtn.addEventListener('click', () => submenu.classList.remove('submenu_active'))

function openSubmenu() {

    if(!submenu.classList.contains('submenu_active')) {
        submenu.classList.add('submenu_active')
        document.addEventListener('click', closeSubmenu)
    } else {
        submenu.classList.remove('submenu_active')
        document.removeEventListener('click', closeSubmenu)
    }
}

function closeSubmenu(event) {
    if(!submenu.contains(event.target) 
    && !closeBtn.contains(event.target) 
    && !burgerBtn.contains(event.target)) {
        submenu.classList.remove('submenu_active')
        document.removeEventListener('click', closeSubmenu)
    }
}