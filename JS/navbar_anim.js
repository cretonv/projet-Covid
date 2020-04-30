let navbar = document.querySelector('#mobile-navbar')
let mobile_wrapper = document.querySelector("#wrapper-mobile")
let front_grid = document.querySelector(".front-grid")

let reflexe_grid = document.querySelector(".reflexe-grid")

let fakeNews_grid = document.querySelector('.fakeNewsGrid')

let ressources_grid = document.querySelector('.ressourcesGrid')

let navbar_open = false

function navbarappear() {
    navbar.classList.add('visible')
    mobile_wrapper.classList.add('blockY')
    if(front_grid){
        front_grid.classList.add('blur')
    } else if(reflexe_grid) {
        reflexe_grid.classList.add('blur')
        let open_reflexe_info = document.querySelector(".reflexe-info.open")
        if(open_reflexe_info){
            open_reflexe_info.classList.add('blur')
        }
    } else if(fakeNews_grid) {
        fakeNews_grid.classList.add('blur')
    } else if(ressources_grid){
        ressources_grid.classList.add('blur')
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
            let open_reflexe_info = document.querySelector(".reflexe-info.open")
            if(open_reflexe_info){
                open_reflexe_info.classList.remove('blur')
            }
        } else if(fakeNews_grid) {
            fakeNews_grid.classList.remove('blur')
        } else if(ressources_grid){
            ressources_grid.classList.remove('blur')
        }
        navbar_open = false
    }
}
