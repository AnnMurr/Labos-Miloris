const burgerBtn = document.querySelector('.burger')
const submenu = document.querySelector('.submenu')
const closeBtn = document.querySelector('.cross')

burgerBtn.addEventListener('click', openSubmenu)
closeBtn.addEventListener('click', function() {
    closeBtn.parentNode.parentNode.style.display = 'none'
})

function openSubmenu() {
    if( submenu.style.display === 'none') {
        submenu.style.display = 'block'
        document.addEventListener('click', closeSubmenu)
    } else {
        submenu.style.display = 'none'
        document.removeEventListener('click', closeSubmenu)
    }
}

function closeSubmenu(event) {
    if(!submenu.contains(event.target) 
    && !closeBtn.contains(event.target) 
    && !burgerBtn.contains(event.target)) {
        submenu.style.display = 'none'
        document.removeEventListener('click', closeSubmenu)
    }
}