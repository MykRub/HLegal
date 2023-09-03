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