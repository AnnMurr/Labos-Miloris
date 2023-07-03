const animationItems = document.querySelectorAll('.anim-item');

function animOnScroll() {
    for (const element of animationItems) {
        const animationItem = element;
        const animItemHeight = animationItem.offsetHeight;
        const animItemOffset = offset(animationItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (window.scrollY > animItemOffset - animItemPoint && window.scrollY < animItemOffset + animItemHeight) {
            animationItem.classList.add('anim');
        } else {
            if (!animationItem.classList.contains('anim-no-hide')) {
                animationItem.classList.remove('anim');
            }
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

window.addEventListener('scroll', animOnScroll);

setTimeout(() => {
    animOnScroll();
}, 300);