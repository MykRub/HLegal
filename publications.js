const langs = document.querySelectorAll('.lang')

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        removeActiveClasses()
        lang.classList.add('active')
    })
})

function removeActiveClasses() {
    langs.forEach(lang => {
        lang.classList.remove('active')
    })
}

const burger = document.getElementById('burgerMenu')
const headerNav = document.getElementById('headerNav')

burger.addEventListener("click", function () {
    headerNav.classList.toggle('burgerActive')
})

const publicationNews = document.getElementById('publicationNews')
const publicationArticles = document.getElementById('publicationArticles')

publicationNews.addEventListener('click', () => {
    publicationNews.style.background = "var(--basic-white, #FFF)"
    publicationArticles.style.background = "transparent"
})

publicationArticles.addEventListener('click', () => {
    publicationNews.style.background = "transparent"
    publicationArticles.style.background = "var(--basic-white, #FFF)"
})