import {FakeNews} from './class/FakeNews'
import {change_color} from "./change_color";

let all_news = []

let color = ["#23B5D3", '#007EA7', '#003459']
let color_choose = 0
let inverse = false

let nav_bar_complete = false        // Prmet de savoir si la navbar est déjà remplis

/* Éléments à récupérer dans le fichier HTML */
let news_content_container = document.querySelector('#fake-news-content')
let source_name_container = document.querySelector('#source-name')
let real_source_name_container = document.querySelector('#real-source-name')
let button_left = document.querySelector('#chevron-left')
let button_right = document.querySelector('#chevron-right')
let navbar = document.querySelector('.fake-news-navbar')
let button_nav_news = document.querySelector('.nav-news')
let nav_cross = document.querySelector('#nav-cross')

/* Remplissage du tableau de data */
all_news.push(new FakeNews("Les boissons chaudes tuent le virus.", '<b> Sources :</b> <br> Rumeur <br>', '<a href="https://www.francetvinfo.fr/sante/maladie/coronavirus/les-idees-claires-covid-19-une-epidemie-de-fake-news_3883173.html" target="_blank"><b> Démentie par :</b> <br> France Info</a>'))
all_news.push(new FakeNews("Il faut désinfecter tout les objets que l'on touche 5 fois par jour.", '<b> Sources :</b> <br> Rumeur <br>', '<a href="https://www.francetvinfo.fr/sante/maladie/coronavirus/les-idees-claires-covid-19-une-epidemie-de-fake-news_3883173.html" target="_blank"><b> Démentie par :</b> <br> France Info</a>'))
all_news.push(new FakeNews("Il faut laver ses vêtements plus souvent et à haute température.", '<b> Sources :</b> <br> Rumeur <br>', '<a href="https://www.francetvinfo.fr/sante/maladie/coronavirus/les-idees-claires-covid-19-une-epidemie-de-fake-news_3883173.html" target="_blank"><b> Démentie par :</b> <br> France Info</a>'))
all_news.push(new FakeNews("La grippe est plus mortelle que le covid-19.", '<b> Sources :</b> <br> Rumeur <br>', "<b> Démentie par :</b> <br> 28'-Désintox <br> Arte"))
all_news.push(new FakeNews("Le gouvernement profite du confinement pour généraliser la 5G", '<b> Sources :</b> <br> Infos déformés <br>', "<b> Démentie par :</b> <br> 28'-Désintox <br> Arte"))
all_news.push(new FakeNews("Les marseillais sont la population la plus testée au monde", '<b> Sources :</b> <br> Fake News <br>', "<b> Démentie par :</b> <br> 28'-Désintox <br> Arte"))
all_news.push(new FakeNews("Il existe une liste d'hôpitaux qui appliquent le « protocole Raoult »", '<b> Sources :</b> <br> Fake News <br>', "<a href='https://www.francetvinfo.fr/sante/maladie/coronavirus/desintox-non-il-n-y-a-pas-de-liste-d-hopitaux-qui-appliquent-le-protocole-raoult_3929131.html' target='_blank'><b> Démentie par :</b> <br> 28'-Désintox <br> Arte</a>"))
all_news.push(new FakeNews("Il est prévu qu’un vaccin soit obligatoire pour obtenir un visa Schengen", '<b> Sources :</b> <br> Fake News <br>', "<b> Démentie par :</b> <br> France Info"))
all_news.push(new FakeNews("Le prix des produits de première nécéssité a augmenté", '<b> Sources :</b> <br> Rumeur <br>', "<b> Démentie par :</b> <br> France Info"))

console.log(all_news[2].real_source_name)

function new_fake_news() {
    news_content_container.innerHTML = ''
    source_name_container.innerHTML = ''
    real_source_name_container.innerHTML = ''

    let index_choose = getRandomArbitrary(0, all_news.length)
    let fakeNews_choose = all_news[index_choose]

    source_name_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})
    real_source_name_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})
    news_content_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})

    news_content_container.innerHTML = fakeNews_choose.news_Content
    source_name_container.innerHTML = fakeNews_choose.source_name
    real_source_name_container.innerHTML = fakeNews_choose.real_source_name
    change_color()
}

function getRandomArbitrary(min, max) {
    let result =  Math.round(Math.random() * (max - min) + min)
    if(result === max){
        result -= 1
    }
    return result
}

button_left.addEventListener("click", new_fake_news, false)
button_right.addEventListener("click", new_fake_news, false)

function create_element_nav(id) {
    let content = all_news[id].news_Content
    let sources = all_news[id].real_source_name

    return "<div class=\"navbar-card\" style='background-color:" + color[color_choose] + "'><div class=\"content\">" + content + "</div><div class=\"source\">" + sources + "</div></div>"
}

function createNav() {
    navbar.classList.add('open')
    nav_cross.classList.add('visible')
    document.querySelector('body').style.overflowY = 'visible'

    if(nav_bar_complete === false){
        for(let i = 0; i < all_news.length; i++){
            navbar.innerHTML += create_element_nav(i)
            color_choose ++
            if (color_choose === color.length){
                if (window.innerWidth > 375){
                    if(inverse) {
                        color = ["#23B5D3", '#007EA7', '#003459']
                        inverse = false
                    } else {
                        color = ["#003459", "#23B5D3", '#007EA7']
                        inverse = true
                    }
                }
                color_choose = 0;
            }
        }
        nav_bar_complete = true
    }
}

function closeNav() {
    navbar.classList.remove('open')
    nav_cross.classList.remove('visible')
    //window.scrollTo(0, 0)
    document.querySelector('body').style.overflowY = 'hidden'
}

button_nav_news.addEventListener("click", createNav, false)
nav_cross.addEventListener("click", closeNav, false)