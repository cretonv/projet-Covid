import {FakeNews} from './class/FakeNews'
import {change_color} from "./change_color";

let all_news = []

/* Éléments à récupérer dans le fichier HTML */
let news_content_container = document.querySelector('.news-content')
let source_name_container = document.querySelector('#source-name')
let real_source_name_container = document.querySelector('#real-source-name')
let button_left = document.querySelector('#chevron-left')
let button_right = document.querySelector('#chevron-right')

/* Remplissage du tableau de data */
all_news.push(new FakeNews("Les boissons chaudes tuent le virus.", '<b> Sources :</b> <br> Rumeur <br>', '<b> Démentie par :</b> <br> France Info'))
all_news.push(new FakeNews("Il faut désinfecter tout les objets que l'on touche 5 fois par jour.", '<b> Sources :</b> <br> Rumeur <br>', '<b> Démentie par :</b> <br> France Info'))
all_news.push(new FakeNews("Il faut laver ses vêtements plus souvent et à haute température.", '<b> Sources :</b> <br> Rumeur <br>', '<b> Démentie par :</b> <br> France Info'))
all_news.push(new FakeNews("La grippe est plus mortelle que le covid-19.", '<b> Sources :</b> <br> Rumeur <br>', "<b> Démentie par :</b> <br> 28' <br> Arte"))

console.log(all_news[2].real_source_name)

function new_fake_news() {
    news_content_container.innerHTML = ''
    source_name_container.innerHTML = ''
    real_source_name_container.innerHTML = ''

    let index_choose = getRandomArbitrary(0, all_news.length)
    let fakeNews_choose = all_news[index_choose]

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