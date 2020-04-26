let apparition_button = document.querySelector('.partage-word')
let partage_icons = document.querySelector('.icon-line')

function icon_line_appear() {
    partage_icons.classList.toggle('visible')
}

apparition_button.addEventListener("click", icon_line_appear, false)