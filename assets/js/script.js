AOS.init();

const navbarEl = document.querySelector('[data-navbar]')
const navOpenMenu = document.querySelector('[data-nav-open]')
const navCloseMenu = document.querySelector('[data-nav-close]')
const overlayEl = document.querySelector('[data-overlay]')

const addEventOnElments = (element, eventType, callback) => {
    element.addEventListener(eventType, callback)
}

addEventOnElments(navOpenMenu, 'click', () => {
    navbarEl.classList.add('active')
    overlayEl.classList.add('active')
})

addEventOnElments(navCloseMenu, 'click', () => {
    navbarEl.classList.remove('active')
    overlayEl.classList.remove('active')
})


const HeaderNavbar = document.querySelector("[data-header-navbar]");

window.addEventListener("scroll", function () {

    HeaderNavbar.classList[window.scrollY > 100 ? "add" : "remove"]("active")

})