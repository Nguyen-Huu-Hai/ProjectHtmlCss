let iconNavbar = document.querySelector(".icon-navbar")
let menuBar = document.querySelector(".header-menu")

const toggleNavbar = () => {
    iconNavbar.addEventListener("click", () => {
        menuBar.classList.toggle("nav-active")
    }) 
}
toggleNavbar()