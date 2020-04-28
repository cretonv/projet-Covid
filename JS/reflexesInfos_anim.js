let reflexe_info = document.querySelectorAll('.reflexe-info')
let reflexe1 = document.querySelector('#reflexe1')
let infosOpen = false

function infos_appear(id) {
    infos_disappearAll()
    reflexe_info[id].classList.add('open')
    infosOpen = true
}

function infos_disappear(id) {
    reflexe_info[id].classList.remove('open')
    infosOpen = false
}

function infos_disappearAll() {
    if(infosOpen){
        reflexe_info.forEach(element => element.classList.remove('open'))
        infosOpen = false
    }
}