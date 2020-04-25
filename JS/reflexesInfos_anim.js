let reflexe_info = document.querySelectorAll('.reflexe-info')
let reflexe1 = document.querySelector('#reflexe1')

function infos_appear(id) {
    reflexe_info[id].classList.add('open')
}

function infos_disappear(id) {
    reflexe_info[id].classList.remove('open')
}