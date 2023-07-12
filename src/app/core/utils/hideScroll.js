let scrollTop = 0;
let scrollLeft = 0;

export function hideScroll(position, width, overflowY) {
    const body = document.getElementById('body')

    if (position === 'fixed') {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    } else {
        window.scrollTo(scrollLeft, scrollTop);
    }

    body.style.position = position;
    body.style.width = width;
    body.style.overflowY = overflowY;
}