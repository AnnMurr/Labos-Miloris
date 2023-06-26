const btnUp = document.querySelector('.btnUp')

window.addEventListener('scroll', function() {
    btnUp.style.display = (window.scrollY > 0) ? 'flex' : 'none';
})