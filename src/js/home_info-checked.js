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