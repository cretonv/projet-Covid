import {News} from "./class/News";
import {change_color} from "./change_color";

let all_news = []

let color = ["#23B5D3", '#007EA7', '#003459']
let color_choose = 0
let inverse = false

let nav_bar_complete = false        // Prmet de savoir si la navbar est déjà remplis

/* Éléments à récupérer dans le fichier HTML */
let news_content_container = document.querySelector('#fake-news-content')
let source_name_container = document.querySelector('#source-name')
let source_link_container = document.querySelector('.button')
let button_left = document.querySelector('#chevron-left')
let button_right = document.querySelector('#chevron-right')
let navbar = document.querySelector('.fake-news-navbar')
let button_nav_news = document.querySelector('.nav-news')
let nav_cross = document.querySelector('#nav-cross')

/* Remplissage du tableau de data */
all_news.push(new News("Infographie: Comment entretenir les masques de protection en tissu?", '<b> Sources :</b> <br> France Infos <br>', '<a id="button2" class="link button" target="_blank" href="https://www.francetvinfo.fr/sante/maladie/coronavirus/infographie-coronavirus-comment-entretenir-les-masques-de-protection-en-tissu_3937079.html">En savoir plus</a>'))
all_news.push(new News("Le tocilizumab, nouvel espoir", '<b> Sources :</b> <br> France Infos <br>', '<a id="button2" class="link button" target="_blank" href="https://www.francetvinfo.fr/sante/maladie/coronavirus/coronavirus-le-tocilizumab-nouvel-espoir_3938415.html">En savoir plus</a>'))
all_news.push(new News("De nouvelles anomalies détectées chez les patients du coronavirus", '<b> Sources :</b> <br> France Infos <br>', '<a id="button2" class="link button" target="_blank" href="https://www.francetvinfo.fr/sante/maladie/coronavirus/coronavirus-de-nouvelles-anomalies-detectees-chez-les-patients_3938689.html">En savoir plus</a>'))
all_news.push(new News("En images: De la Chine à Madagascar, une rentrée des classes sous surveillance à l’heure du Covid-19", '<b> Sources :</b> <br> Le Monde<br>', '<a id="button2" class="link button" target="_blank" href="https://www.lemonde.fr/international/article/2020/04/28/de-la-chine-a-madagascar-une-rentree-des-classes-sous-surveillance-a-l-heure-du-covid-19_6038021_3210.html">En savoir plus</a>'))
all_news.push(new News("Stats: Plus de 210 000 morts dans le monde", '<b> Sources :</b> <br> Le Monde<br>', '<a id="button2" class="link button" target="_blank" href="https://www.lemonde.fr/planete/article/2020/04/28/coronavirus-plus-de-3-millions-de-cas-d-infection-dans-le-monde_6037948_3244.html">En savoir plus</a>'))
all_news.push(new News("Récit: «J'ai fait le choix de me confiner avec les voisins et mon ex. Dit comme ça, c'est un peu bizarre…»", '<b> Sources :</b> <br> Libération <br>', '<a id="button2" class="link button" target="_blank" href="https://www.liberation.fr/france/2020/04/28/j-ai-fait-le-choix-de-me-confiner-avec-les-voisins-et-mon-ex-dis-comme-ca-c-est-un-peu-bizarre_1786638">En savoir plus</a>'))
all_news.push(new News("Stats: Suivez l'évolution du virus avec AFP»", '<b> Sources :</b> <br> AFP <br>', '<a id="button2" class="link button" target="_blank" href="https://interactive.afp.com/graphics/Covid-19-Evolution-du-nombre-de-cas-et-deces_601/">En savoir plus</a>'))
all_news.push(new News("Application StopCovid et libertés: la Cnil pose des conditions", '<b> Sources :</b> <br> AFP <br>', '<a id="button2" class="link button" target="_blank" href="https://www.afp.com/fr/infos/334/application-stopcovid-et-libertes-la-cnil-pose-des-conditions-doc-1qt9961/">En savoir plus</a>'))
all_news.push(new News("Le moral des ménages français subit une chute historique en avril", '<b> Sources :</b> <br> Le Parisien <br>', '<a id="button2" class="link button" target="_blank" href="http://www.leparisien.fr/archives/confinement-le-moral-des-menages-francais-subit-une-chute-historique-en-avril-28-04-2020-8307324.php /">En savoir plus</a>'))

function new_news() {
    news_content_container.innerHTML = ''
    source_name_container.innerHTML = ''
    source_link_container.innerHTML = ''

    let index_choose = getRandomArbitrary(0, all_news.length)
    let news_choose = all_news[index_choose]

    source_name_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})
    source_link_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})
    news_content_container.animate([ {opacity: 0}, {opacity: 1}], {duration: 400})

    news_content_container.innerHTML = news_choose.news_Content
    source_name_container.innerHTML = news_choose.source_name
    source_link_container.innerHTML = news_choose.source_link
    change_color()
}

function getRandomArbitrary(min, max) {
    let result =  Math.round(Math.random() * (max - min) + min)
    if(result === max){
        result -= 1
    }
    return result
}

button_left.addEventListener("click", new_news, false)
button_right.addEventListener("click", new_news, false)

function create_element_nav(id) {
    let content = all_news[id].news_Content
    let sources = all_news[id].source_name
    let button = all_news[id].source_link

    return "<div class=\"navbar-card\" style='background-color:" + color[color_choose] + "'><div class=\"content\">" + content + "</div><div class=\"source\">" + sources + "</div> <div class=\"button mx-auto nav-button\">" + button + "</div></div>"
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