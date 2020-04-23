let navbar = document.querySelector('#mobile-navbar')
let mobile_wrapper = document.querySelector("#wrapper-mobile")
let front_grid = document.querySelector(".front-grid")
let navbar_open = false

function navbarappear() {
    navbar.classList.add('visible')
    mobile_wrapper.classList.add('blockY')
    front_grid.classList.add('blur')
    navbar_open = true
}

function navbardisappear() {
    if(navbar_open){
        navbar.classList.remove('visible')
        mobile_wrapper.classList.remove('blockY')
        front_grid.classList.remove('blur')
        navbar_open = false
    }
}
