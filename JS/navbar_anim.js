let navbar = document.querySelector('#mobile-navbar')
let mobile_wrapper = document.querySelector("#wrapper-mobile")
let front_grid = document.querySelector(".front-grid")
let reflexe_grid = document.querySelector(".reflexe-grid")
let navbar_open = false

function navbarappear() {
    navbar.classList.add('visible')
    mobile_wrapper.classList.add('blockY')
    if(front_grid){
        front_grid.classList.add('blur')
    } else if(reflexe_grid) {
        reflexe_grid.classList.add('blur')
    }
    navbar_open = true
}

function navbardisappear() {
    if(navbar_open){
        navbar.classList.remove('visible')
        mobile_wrapper.classList.remove('blockY')
        if(front_grid) {
            front_grid.classList.remove('blur')
        } else if(reflexe_grid) {
            reflexe_grid.classList.remove('blur')
        }
        navbar_open = false
    }
}