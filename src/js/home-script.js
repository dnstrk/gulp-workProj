const infoOpen = document.querySelector('.info__open')
const infoClose = document.querySelector('.info__close')
const mainWrapInfo = document.querySelector('.main-home-wrap__info')

function handlerInfo() {
    mainWrapInfo.classList.toggle('closed');
    infoOpen.classList.toggle('active');
}

if (infoOpen && infoClose && mainWrapInfo) {
    infoClose.addEventListener('click', handlerInfo);
    infoOpen.addEventListener('click', handlerInfo);
}
