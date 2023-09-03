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