// Custom Scripts
// Custom scripts

const infoOpen = document.querySelector('.info__open')
const infoClose = document.querySelector('.info__close')
const mainWrapInfo = document.querySelector('.main-home-wrap__info')

infoClose.addEventListener('click', function () {
    mainWrapInfo.classList.add('closed')
    infoOpen.classList.add('active')
})

infoOpen.addEventListener('click', function () {
    infoOpen.classList.remove('active')
    mainWrapInfo.classList.remove('closed')
})
const dateTimeButton = document.querySelector('.dateTime-menu__btn')
const dateTimeList = document.querySelector('.dateTime-menu__dateTime-list')
const dateTimeListItem = document.querySelectorAll('.dateTime-list__text')

dateTimeButton.addEventListener('click', function () {
    dateTimeButton.classList.toggle('active')
    dateTimeList.classList.toggle('open')
    var i
    for (i=0; i < dateTimeListItem.length; i++) {
        dateTimeListItem[i].classList.toggle('open')
    }

})