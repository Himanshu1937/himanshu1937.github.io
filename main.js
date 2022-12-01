const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const scrolltowork = () => {
    scroll.scrollTo(document.querySelector('#my-projects'))
}