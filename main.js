const list = document.querySelectorAll('.list__item')
const listItem1 = document.getElementById('listItem1')
const listItem2 = document.getElementById('listItem2')
const listItem3 = document.getElementById('listItem3')
const listItem4 = document.getElementById('listItem4')

listItem1.addEventListener('click', () => {
    listItem2.classList.remove('active')
    listItem3.classList.remove('active')
    listItem4.classList.remove('active')
    listItem1.classList.add('active')
})

listItem2.addEventListener('click', () => {
    listItem1.classList.remove('active')
    listItem3.classList.remove('active')
    listItem4.classList.remove('active')
    listItem2.classList.add('active')
})

listItem3.addEventListener('click', () => {
    listItem1.classList.remove('active')
    listItem2.classList.remove('active')
    listItem4.classList.remove('active')
    listItem3.classList.add('active')
})

listItem4.addEventListener('click', () => {
    listItem1.classList.remove('active')
    listItem2.classList.remove('active')
    listItem3.classList.remove('active')
    listItem4.classList.add('active')
})





//===========================
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
//=============================
const burger = document.getElementById('burgerMenu')
const headerNav = document.getElementById('headerNav')

burger.addEventListener("click", function () {
    headerNav.classList.toggle('burgerActive')
})
// const container = document.querySelector(".scroll__wrapper")
// const items = document.querySelectorAll("._scroller")
//
// let startX = 0
// let currentSlide = 0
//
// container.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX
// })
//
// container.addEventListener("touchend", (e) => {
//     const diffX = e.changedTouches[0].clientX - startX
//
//     if (Math.abs(diffX) > 50) {
//         if (diffX > 0 && currentSlide > 0) {
//             currentSlide--;
//         } else if (diffX < 0 && currentSlide < items.length - 1) {
//             currentSlide++
//         }
//     }
//     container.style.transform = `translateX(-${currentSlide * 100}%)`
//
//     items.forEach((item, index) => {
//         if (index === currentSlide) {
//             item.classList.add(`active`)
//         } else {
//             item.classList.remove('active')
//         }
//     })
// })


